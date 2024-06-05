import React, { Component } from "react";
import IMG01 from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        const storedEmail = localStorage.getItem("email") || "";  // Assuming email is stored in localStorage
        this.state = {
            email: storedEmail,
            password: "",
            confirmPassword: "",
            otp: "",
            showOTPInput: false,
            errorMessage: "",
            timer: 60,
            resendDisabled: true
        };
        this.timerId = null;
    }

    componentWillUnmount() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value,
            errorMessage: ""  // Clear error message when input changes
        });
    }

    validateEmail = (email) => {
        const emailPattern = /^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    validatePassword = (password) => {
        return password.length >= 6;
    }

    validateConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
    }

    validateOTP = (otp) => {
        const otpPattern = /^\d{6}$/;
        return otpPattern.test(otp);
    }

    startTimer = () => {
        this.setState({ timer: 60, resendDisabled: true });
        this.timerId = setInterval(() => {
            this.setState(prevState => {
                if (prevState.timer <= 1) {
                    clearInterval(this.timerId);
                    return { timer: 0, resendDisabled: false };
                }
                return { timer: prevState.timer - 1 };
            });
        }, 1000);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = this.state;

        if (!this.validateConfirmPassword(password, confirmPassword)) {
            this.setState({ errorMessage: "Passwords do not match" });
            return;
        }

        const SubmitRequestBody = {
            UserName: email,
            Password: password
        };
        try {
            const response = await fetch("http://humanresources-papi.us-e2.cloudhub.io/api/signin/forgotPassword", {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(SubmitRequestBody)
            });
            if (response.ok) {
                this.setState({ showOTPInput: true, errorMessage: "" });
                this.startTimer();
            } else {
                const errorData = await response.json();
                this.setState({ errorMessage: errorData.message || "An error occurred" });
            }
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }
    }
    
    handleOTPSubmit = async (e) => {
        e.preventDefault();
        const { email, otp } = this.state;
        const OTPSubmitRequestBody = {
            Email: email,
            otp: Number(otp)
        };
        try {
            const response = await fetch("http://humanresources-papi.us-e2.cloudhub.io/api/signin/forgotPasswordOTP", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(OTPSubmitRequestBody)
            });
            if (response.ok) {
                this.setState({ errorMessage: "" });
                this.props.history.push("/login");
            } else {
                const errorData = await response.json();
                this.setState({ errorMessage: errorData.message || "An error occurred" });
            }
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }
    }

    handleResendOTP = async () => {
        const { email } = this.state;
        const ResendOTPrequestBody = { Email: email };
        try {
            const response = await fetch("http://humanresources-papi.us-e2.cloudhub.io/api/resendOTP", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ResendOTPrequestBody)
            });
            if (response.ok) {
                this.setState({ errorMessage: "" });
                this.startTimer();
            } else {
                const errorData = await response.json();
                this.setState({ errorMessage: errorData.message || "An error occurred" });
            }
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }
    }

    render() {
        const { email, password, confirmPassword, otp, showOTPInput, errorMessage, timer, resendDisabled } = this.state;
        const isEmailValid = this.validateEmail(email);
        const isPasswordValid = this.validatePassword(password);
        const isConfirmPasswordValid = this.validateConfirmPassword(password, confirmPassword);
        const isOTPValid = this.validateOTP(otp);

        const isFormValid = isEmailValid && isPasswordValid && isConfirmPasswordValid;
        const isOTPFormValid = isEmailValid && isOTPValid;

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
                                    <h1>Forgot Password?</h1>
                                    <p className="account-subtitle">Enter your email to get a reset Password</p>
                                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                                    
                                    <form onSubmit={showOTPInput ? this.handleOTPSubmit : this.handleSubmit}>
                                        <div className="form-group">
                                            <input
                                                className={`form-control ${!isEmailValid && email ? 'is-invalid' : ''}`}
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={this.handleChange}
                                                disabled={showOTPInput}
                                            />
                                            {!isEmailValid && email && (
                                                <div className="invalid-feedback">
                                                    Please enter a valid email address.
                                                </div>
                                            )}
                                        </div>
                                        {!showOTPInput && (
                                            <>
                                                <div className="form-group">
                                                    <input
                                                        className={`form-control ${!isPasswordValid && password ? 'is-invalid' : ''}`}
                                                        type="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={this.handleChange}
                                                    />
                                                    {!isPasswordValid && password && (
                                                        <div className="invalid-feedback">
                                                            Password must be more than 6 characters.
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        className={`form-control ${!isConfirmPasswordValid && confirmPassword ? 'is-invalid' : ''}`}
                                                        type="password"
                                                        name="confirmPassword"
                                                        placeholder="Confirm Password"
                                                        value={confirmPassword}
                                                        onChange={this.handleChange}
                                                    />
                                                    {!isConfirmPasswordValid && confirmPassword && (
                                                        <div className="invalid-feedback">
                                                            Passwords do not match.
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}

                                        {showOTPInput && (
                                            <div className="form-group">
                                                <input
                                                    className={`form-control ${!isOTPValid && otp ? 'is-invalid' : ''}`}
                                                    type="text"
                                                    name="otp"
                                                    placeholder="Enter OTP"
                                                    value={otp}
                                                    onChange={this.handleChange}
                                                />
                                                {!isOTPValid && otp && (
                                                    <div className="invalid-feedback">
                                                        OTP must be 6 digits.
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                         {showOTPInput && (
                                            <div className="text-center mt-3">
                                                <span>{timer > 0 ? `Resend OTP in ${timer}s` : ''}</span>
                                                <button
                                                    className="btn btn-link"
                                                    type="button"
                                                    onClick={this.handleResendOTP}
                                                    disabled={resendDisabled}
                                                >
                                                    Resend OTP
                                                </button>
                                            </div>
                                        )}
                                        <div className="form-group mb-0">
                                            <button
                                                className="btn btn-theme button-1 ctm-border-radius text-white btn-block"
                                                type="submit"
                                                disabled={showOTPInput ? !isOTPFormValid : !isFormValid}
                                            >
                                                {showOTPInput ? "Submit OTP" : "Reset Password"}
                                            </button>
                                        </div>
                                       
                                    </form>
                                    
                                    <div className="text-center dont-have">Remember your password? <Link to="/login">Login</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;
