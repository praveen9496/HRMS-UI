import React, { Component } from "react";
import IMG01 from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            employeeId: '',
            email: '',
            phoneNumber: '',
            password: '',
            errors: {
                name: '',
                employeeId: '',
                email: '',
                phoneNumber: '',
                password: '',
                submit: ''
            }
        };
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
        const { name, employeeId, email, phoneNumber, password } = this.state;
        const { errors } = this.validateForm();

        if (Object.values(errors).some(field => field)) {
            return;
        }

        const requestBody = {
            Name: name,
            Email: email,
            PhoneNumber: phoneNumber,
            Password: password,
            EmployeeID: employeeId
        };

        try {
            const response = await axios.post('http://humanresources-papi.us-e2.cloudhub.io/api/signup', JSON.stringify(requestBody), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                this.props.history.push({
                    pathname: '/registerOTP',
                    state: { 
                        name: name,
                        employeeId: employeeId,
                        email: email,
                        phoneNumber: phoneNumber,
                        password: password
                    }
                });
            } else {
                this.setState({ errors: { ...errors, submit: 'Registration failed. Please try again.' } });
            }
        } catch (error) {
            this.setState({ errors: { ...errors, submit: error.response ? error.response.data.message : 'An error occurred. Please try again.' } });
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        const error = this.validateField(name, value);
        this.setState({ 
            [name]: value,
            errors: {
                ...this.state.errors,
                [name]: error,
                submit: '' // Clear the submit error when user starts editing the form
            }
        });
    }

    validateForm = () => {
        const { name, employeeId, email, phoneNumber, password } = this.state;
        const errors = {
            name: this.validateField('name', name),
            employeeId: this.validateField('employeeId', employeeId),
            email: this.validateField('email', email),
            phoneNumber: this.validateField('phoneNumber', phoneNumber),
            password: this.validateField('password', password)
        };
        return { errors };
    }

    validateField = (fieldName, value) => {
        switch(fieldName) {
            case 'name':
                return value ? '' : 'Name is required';
            case 'employeeId':
                return value && /^[a-zA-Z0-9]+$/.test(value) && value.length <= 6 ? '' : 'Invalid Employee ID';
            case 'email':
                return value && /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value) ? '' : 'Invalid email address';
            case 'phoneNumber':
                return value && /^\d{10}$/.test(value) ? '' : 'Phone number must be 10 digits';
            case 'password':
                return value && value.length >= 6 ? '' : 'Password must be at least 6 characters long';
            default:
                return '';
        }
    }

    render() {
        const { name, employeeId, email, phoneNumber, password, errors } = this.state;
        const isFormValid = !Object.values(errors).some(field => field);

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
                                    
                                    {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
                                    
                                    <form onSubmit={this.handleFormSubmit}>
                                        <div className="form-group">
                                            <input 
                                                className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                                                type="text" 
                                                placeholder="Name" 
                                                name="name" required
                                                value={name}
                                                onChange={this.handleInputChange}
                                            />
                                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                className={`form-control ${errors.employeeId ? 'is-invalid' : ''}`} 
                                                type="text" 
                                                placeholder="Employee ID" 
                                                name="employeeId" required
                                                value={employeeId}
                                                onChange={this.handleInputChange}
                                            />
                                            {errors.employeeId && <div className="invalid-feedback">{errors.employeeId}</div>}
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                                type="email" 
                                                placeholder="Email" 
                                                name="email" required
                                                value={email}
                                                onChange={this.handleInputChange}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`} 
                                                type="text" 
                                                placeholder="Phone Number" 
                                                name="phoneNumber" required
                                                value={phoneNumber}
                                                onChange={this.handleInputChange}
                                            />
                                            {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                                                type="password" 
                                                placeholder="Password" 
                                                name="password" required
                                                value={password}
                                                onChange={this.handleInputChange}
                                            />
                                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                        </div>
                                        <div className="form-group mb-0">
                                            <button 
                                                className="btn btn-theme button-1 text-white ctm-border-radius btn-block" 
                                                type="submit"
                                                disabled={!isFormValid}
                                            >
                                                Register
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

export default Register;
