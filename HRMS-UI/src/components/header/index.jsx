import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../assets/images/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: ''
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        // Fetch the profile image URL
        const employeeId = localStorage.getItem('EmployeeID'); // Replace with dynamic user ID if available
     
        const profileImageUrl = `http://user-profile-papi.us-e2.cloudhub.io/api/user-profile/profileImage/${employeeId}`;

        axios.get(profileImageUrl, { responseType: 'blob' })
            .then(response => {
                const url = URL.createObjectURL(response.data);
                this.setState({ profileImage: url });
                 // Store the image URL in local storage
                 localStorage.setItem('profileImage', url);
                
            })
            .catch(error => {
                console.error("There was an error fetching the profile image!", error);
            });
    }

    render() {
        const exclusionArray = [
            'login',
            'register',
            'registerOTP',
            'forgot-password'
        ];
        if (exclusionArray.indexOf(this.props.location.pathname.split("/")[1]) >= 0) {
            return '';
        }
        const url = this.props.location.pathname.split("/")[1];
        const { profileImage } = this.state;

        return (
            <header className="header">
                <div className="top-header-section">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                                <div className="logo my-3 my-sm-0">
                                    <Link to="dashboard">
                                        <img src={Logo} alt="logo" className="img-fluid" width="100" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-6 text-right">
                                <div className="user-block d-none d-lg-block">
                                    <div className="row align-items-center">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="user-notification-block align-right d-inline-block">
                                                <div className="top-nav-search item-animated">
                                                    <form>
                                                        <input type="text" className="form-control" placeholder="Search here" />
                                                        <button className="btn" type="submit"><i className="fa fa-search"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="user-notification-block align-right d-inline-block">
                                                <ul className="list-inline m-0">
                                                    <li className="list-inline-item item-animated" data-toggle="tooltip" data-placement="top" title="" data-original-title="Apply Leave">
                                                        <Link to="company" className="font-23 menu-style text-white align-middle">
                                                            <span className="lnr lnr-briefcase position-relative"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="user-info align-right dropdown d-inline-block header-dropdown">
                                                <a href="#0" data-toggle="dropdown" className="menu-style dropdown-toggle">
                                                    <div className="user-avatar d-inline-block">
                                                        <img src={profileImage} alt="user avatar" className="rounded-circle img-fluid" width="55" />
                                                    </div>
                                                </a>
                                                <div className="dropdown-menu notification-dropdown-menu shadow-lg border-0 p-3 m-0 dropdown-menu-right">
                                                    <Link className="dropdown-item p-2" to="employment">
                                                        <span className="media align-items-center">
                                                            <span className="lnr lnr-user mr-3"></span>
                                                            <span className="media-body text-truncate">
                                                                <span className="text-truncate">Profile</span>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                    <Link className="dropdown-item p-2" to="profile-settings">
                                                        <span className="media align-items-center">
                                                            <span className="lnr lnr-cog mr-3"></span>
                                                            <span className="media-body text-truncate">
                                                                <span className="text-truncate">Settings</span>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                    <Link className="dropdown-item p-2" to="/login">
                                                        <span className="media align-items-center">
                                                            <span className="lnr lnr-power-switch mr-3"></span>
                                                            <span className="media-body text-truncate">
                                                                <span className="text-truncate">Logout</span>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block d-lg-none">
                                    <a href="#0">
                                        <span className="lnr lnr-user d-block display-5 text-white" id="open_navSidebar"></span>
                                    </a>
                                    <div className="offcanvas-menu" id="offcanvas_menu">
                                        <span className="lnr lnr-cross float-left display-6 position-absolute t-1 l-1 text-white" id="close_navSidebar"></span>
                                        <div className="user-info align-center bg-theme text-center">
                                            <a href="#0" className="d-block menu-style text-white">
                                                <div className="user-avatar d-inline-block mr-3">
                                                    <img src={profileImage} alt="user avatar" className="rounded-circle" width="50" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="user-notification-block align-center">
                                            <div className="top-nav-search item-animated">
                                                <form>
                                                    <input type="text" className="form-control" placeholder="Search here" />
                                                    <button className="btn" type="submit"><i className="fa fa-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="user-menu-items px-3 m-0">
                                            <Link className="px-0 pb-2 pt-0" to="company">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-home mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">Dashboard</span>
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link className="p-2" to="employee">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-users mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">Employees</span>
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link className="p-2" to="company">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-apartment mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">Company</span>
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link className="p-2" to="calendar">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-calendar-full mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">Calendar</span>
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link className="p-2" to="leave">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-briefcase mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">Leave</span>
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link className="p-2" to="overview-reviews">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-star mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">Reviews</span>
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link className="p-2" to="reports">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-rocket mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">Reports</span>
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link className="p-2" to="manage">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-sync mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">Manage</span>
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link className="p-2" to="settings">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-cog mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">Settings</span>
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link className="p-2" to="profile-settings">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-user mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">Profile</span>
                                                    </span>
                                                </span>
                                            </Link>
                                            <Link className="p-2" to="/login">
                                                <span className="media align-items-center">
                                                    <span className="lnr lnr-power-switch mr-3"></span>
                                                    <span className="media-body text-truncate text-left">
                                                        <span className="text-truncate text-left">Logout</span>
                                                    </span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="header-wrapper d-none d-sm-none d-md-none d-lg-block">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-menu-list d-flex bg-white rt_nav_header horizontal-layout nav-bottom">
                                    <div className="append mr-auto my-0 my-md-0 mr-auto">
                                        <ul className="list-group list-group-horizontal-md mr-auto">
                                            <li className={`mr-1 ${'dashboard' === url || 'employee-dashboard' === url ? 'active' : ''} `}><Link to="dashboard" className="text-dark btn-ctm-space"><span className="lnr lnr-home pr-0 pr-lg-2"></span><span className="d-none d-lg-inline">Dashboard</span></Link></li>
                                            <li className={`mr-1 ${'employees' === url || 'employees-all' === url || 'employee-list' === url || 'employee-team' === url || 'employee-office' === url || 'add-employee' === url ? 'active' : ''} `}><Link to="employees-all" className="text-dark btn-ctm-space "><span className="lnr lnr-users pr-0 pr-lg-2"></span><span className="d-none d-lg-inline">Employees</span></Link></li>
                                            <li className={`mr-1 ${'company' === url ? 'active' : ''} `}><Link to="company" className="text-dark btn-ctm-space "><span className="lnr lnr-apartment pr-0 pr-lg-2"></span><span className="d-none d-lg-inline">Company</span></Link></li>
                                            <li className={`mr-1 ${'calendar' === url ? 'active' : ''} `}><Link to="calendar" className="btn-ctm-space text-dark"><span className="lnr lnr-calendar-full pr-0 pr-lg-2"></span><span className="d-none d-lg-inline">Calendar</span></Link></li>
                                            <li className={`mr-1 ${'leave' === url ? 'active' : ''} `}><Link to="leave" className="btn-ctm-space text-dark" ><span className="lnr lnr-briefcase pr-0 pr-lg-2"></span><span className="d-none d-lg-inline">Leave</span></Link></li>
                                            <li className={`mr-1 ${'reviews' === url | 'overview-reviews' === url | 'edit-reviews' === url | 'review-type' === url  ? 'active' : ''} `}><Link to="overview-reviews" className="text-dark btn-ctm-space" ><span className="lnr lnr-star pr-0 pr-lg-2"></span><span className="d-none d-lg-inline">Reviews</span></Link></li>
                                            <li className={`mr-1 ${'reports' === url | 'leave-reports' === url | 'payroll-reports' === url | 'contact-reports' === url | 'email-reports' === url | 'security-reports' === url | 'work-from-home-reports' === url ? 'active' : ''} `}><Link to="reports" className="btn-ctm-space text-dark"><span className="lnr lnr-rocket pr-0 pr-lg-2"></span><span className="d-none d-lg-inline">Reports</span></Link></li>
                                            <li className={`mr-1 ${'manage' === url | 'line-manager' === url |'super-admin' === url | 'admin' === url | 'payroll-admin' === url | 'team-members' === url | 'manage-leadership' === url | 'team-lead' === url | 'time-off-approver' === url ? 'active' : ''} `}><Link to="manage" className="btn-ctm-space text-dark" ><span className="lnr lnr-sync pr-0 pr-lg-2"></span><span className="d-none d-lg-inline">Manage</span></Link></li>
                                            <li className={`mr-1 ${'settings' === url | 'setting-timeoff' === url | 'employment' === url | 'details' === url | 'document' === url | 'payroll' === url | 'time-off' === url | 'profile-review' === url | 'profile-settings' === url ? 'active' : ''} `}><Link to="settings" className="btn-ctm-space text-dark" ><span className="lnr lnr-cog pr-0 pr-lg-2"></span><span className="d-none d-lg-inline">Settings</span></Link></li>
                                        </ul>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
