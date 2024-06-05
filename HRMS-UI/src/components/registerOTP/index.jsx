import React, { Component } from "react";
import IMG01 from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

class RegisterOTP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state ? this.props.location.state.email : '',
            otp: '',
            isLinkDisabled: true, // Initially disable the resend OTP link
            timer: 60,
            errorMessage: '',
            successMessage: '', // New state for success message
            otpValid: null,
            showOTPInput: true, // New state to control OTP input visibility
            resendDisabled: true // State to control resend button
        };
        this.resendOTP = this.resendOTP.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.setState(prevState => {
                if (prevState.timer === 1) {
                    clearInterval(this.timerInterval);
                    return { timer: 60, isLinkDisabled: false, resendDisabled: false };
                }
                return { timer: prevState.timer - 1 };
            });
        }, 1000);
    }

    async resendOTP(event) {
        event.preventDefault();
        this.setState({ isLinkDisabled: true, timer: 60, successMessage: '', errorMessage: '', resendDisabled: true });
        clearInterval(this.timerInterval);
        this.startTimer();
        const { email } = this.state;
        const resendOTPrequestBody = {
            Email: email
        };

        try {
            const response = await fetch('http://humanresources-papi.us-e2.cloudhub.io/api/resendOTP', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(resendOTPrequestBody)
            });

            if (response.ok) {
                this.setState({ successMessage: 'OTP has been sent to your email.' });
                this.startTimer(); // Restart the timer after OTP is successfully sent
            } else {
                this.setState({ errorMessage: 'Failed to resend OTP. Please try again.' });
            }
        } catch (error) {
            this.setState({ errorMessage: 'An error occurred. Please try again.' });
        }
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState({ otp: value }, () => {
            this.validateField('otp', value);
        });
    }

    validateField(name, value) {
        let otpValid = this.state.otpValid;

        if (name === 'otp') {
            otpValid = /^\d{6}$/.test(value); // Assuming OTP is a 6-digit number
            this.setState({
                otpValid,
                errorMessage: '' // Clear any previous error message when input changes
            });
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { email, otp, otpValid } = this.state;

        if (!otpValid) {
            this.setState({ errorMessage: 'Please enter a valid OTP.' });
            return;
        }

        const requestBody = {
            Email: email,
            otp: Number(otp)
        };

        try {
            const response = await fetch('http://humanresources-papi.us-e2.cloudhub.io/api/signup/signupOTP', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                this.props.history.push({
                    pathname: '/login',
                    state: { Email: email }
                });
            } else {
                const data = await response.json();
                this.setState({ errorMessage: data.message || 'Failed to verify OTP. Please try again.' });
            }
        } catch (error) {
            this.setState({ errorMessage: 'An error occurred. Please try again.' });
        }
    }

    render() {
        const { email, otp, timer, errorMessage, successMessage, otpValid, showOTPInput, resendDisabled } = this.state;
        const isFormValid = otpValid;

        return (
            <div className="inner-wrapper login-body">
                <div className="login-wrapper">
                    <div className="container">
                        <div className="loginbox shadow-sm">
                            <div className="login-left">
                                <img className="img-fluid" src={IMG01} alt="Logo" />
                            </div>
                            <div className="login-right">
                                <div className="login-right-wrap">
                                    <h1>Register</h1>
                                    <p className="account-subtitle">Access to our dashboard</p>

                                    {errorMessage && (
                                        <div className="alert alert-danger">
                                            {errorMessage}
                                        </div>
                                    )}

                                    {successMessage && (
                                        <div className="alert alert-success">
                                            {successMessage}
                                        </div>
                                    )}

                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Email"
                                                value={email}
                                                readOnly
                                            />
                                        </div>

                                        {showOTPInput && (
                                            <div className="form-group">
                                                <input
                                                    className={`form-control ${otpValid === null ? '' : otpValid ? 'valid-input' : 'is-invalid'}`}
                                                    type="password"
                                                    placeholder="OTP"
                                                    value={otp}
                                                    onChange={this.handleChange}
                                                />
                                                {otpValid === false && <div className="invalid-feedback">Please enter a valid OTP.</div>}
                                            </div>
                                        )}

                                        {showOTPInput && (
                                            <div className="text-center mt-3">
                                                <span>{timer > 0 ? `Resend OTP in ${timer}s` : ''}</span>
                                                <button
                                                    className="btn btn-link"
                                                    type="button"
                                                    onClick={this.resendOTP}
                                                    disabled={resendDisabled}
                                                >
                                                    Resend OTP
                                                </button>
                                            </div>
                                        )}

                                        <div className="form-group">
                                            <button
                                                className="btn btn-theme button-1 text-white ctm-border-radius btn-block"
                                                type="submit"
                                                disabled={!isFormValid} // Disable submit button if form is invalid
                                            >
                                                Verify
                                            </button>
                                        </div>
                                    </form>

                                    <div className="text-center dont-have">Already have an account? <Link to="/login">Login</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterOTP;
