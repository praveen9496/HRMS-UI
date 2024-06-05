import React, { Component } from "react";
import IMG01 from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: "",
            usernameValid: null,
            passwordValid: null,
            loggedIn: false // New state to track login status
        };
        // Binding event handlers
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
    }

    validateField(name, value) {
        let { usernameValid, passwordValid } = this.state;
        let usernameError = '';
        let passwordError = '';

        switch (name) {
            case 'username':
                usernameValid = /^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/.test(value);
                if (!usernameValid) {
                    usernameError = 'Please enter a valid email address.';
                }
                break;
            case 'password':
                passwordValid = value.length >= 6;
                if (!passwordValid) {
                    passwordError = 'Please enter your password.';
                }
                break;
            default:
                break;
        }

        this.setState({
            usernameValid,
            passwordValid,
            usernameError,
            passwordError,
            error: '' // Clear any previous error message when input changes
        });
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
    
        const requestBody = {
            UserName: username,
            Password: password
        };
    
        try {
            const response = await axios.post('http://humanresources-papi.us-e2.cloudhub.io/api/signin', JSON.stringify(requestBody), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.status === 200) {
                const { EmployeeID } = response.data; // Assuming the response contains an EmployeeID field
                // Set loggedIn state to true upon successful login
                this.setState({ loggedIn: true });
                
                // Store EmployeeID in local storage
                localStorage.setItem('EmployeeID', EmployeeID);
    
                // Redirect to the dashboard page upon successful login
                this.props.history.push({
                    pathname: '/dashboard',
                    state: {
                        UserName: username,
                        EmployeeID: EmployeeID // Pass the EmployeeID to the dashboard
                    }
                });
            } else {
                this.setState({ error: 'Login failed. Please try again.' });
            }
        } catch (error) {
            this.setState({ error: error.response ? error.response.data.message : 'An error occurred. Please try again.' });
        }
    }
    

    render() {
        const { username, password, error, usernameValid, passwordValid, loggedIn } = this.state;
        const isFormValid = usernameValid && passwordValid;

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
                                    <h1>Login</h1>
                                    <p className="account-subtitle">Access to our dashboard</p>
                                    {error && <p className="text-danger">{error}</p>} {/* Display error message */}
                                    <form onSubmit={this.handleFormSubmit}>
                                        <div className="form-group">
                                            <input
                                                className={`form-control ${usernameValid === null ? '' : usernameValid ? 'valid-input' : 'is-invalid'}`}
                                                type="text"
                                                name="username"
                                                placeholder="Email"
                                                value={username}
                                                onChange={this.handleInputChange}
                                            />
                                            {usernameValid === false && <div className="invalid-feedback">Please enter a valid username.</div>}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className={`form-control ${passwordValid === null ? '' : passwordValid ? 'valid-input' : 'is-invalid'}`}
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={this.handleInputChange}
                                            />
                                            {passwordValid === false && <div className="invalid-feedback">Please enter a valid password.</div>}
                                        </div>
                                        <div className="form-group">
                                            <button
                                                className="btn btn-theme button-1 text-white ctm-border-radius btn-block"
                                                type="submit"
                                                disabled={!isFormValid} // Disable submit button if form is invalid
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <div className="text-center forgotpass"><Link to="forgot-password">Forgot Password?</Link></div>
                                    <div className="text-center dont-have">Don’t have an account? <Link to="register">Register</Link></div>
                                    {loggedIn && <p className="text-success">Logged in successfully!</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
