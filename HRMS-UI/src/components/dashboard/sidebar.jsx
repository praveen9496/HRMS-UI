import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IMG01 from '../../assets/images/img-13.jpg';

const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   
    const day = days[date.getDay()];
    const dateNumber = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();  
    return `${day}, ${dateNumber} ${month} ${year}`;
};

const Sidebar = ({ url }) => {
    const currentDate = formatDate(new Date());
    const [leaveData, setLeaveData] = useState({ booked: '', available: '' });

    useEffect(() => {
        fetch('http://hrms-eapi.us-e2.cloudhub.io/api/Leave/leaveReport/DW005')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setLeaveData(data);
            })
            .catch(error => {
                console.error('Error fetching leave data:', error);
            });
    }, []);

    return (
        <aside className="sidebar sidebar-user">
            <div className="card ctm-border-radius shadow-sm">
                <div className="card-body py-4">
                    <div className="row">
                        <div className="col-md-12 mr-auto text-left">
                            <div className="custom-search input-group">
                                <div className="custom-breadcrumb">
                                    <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                                        <li className="breadcrumb-item d-inline-block"><Link to="dashboard" className="text-dark">Home</Link></li>
                                        <li className="breadcrumb-item d-inline-block active">Dashboard</li>
                                    </ol>
                                    <h4 className="text-dark">Employee Dashboard</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-card card shadow-sm bg-white text-center ctm-border-radius">
                <div className="user-info card-body">
                    <div className="user-avatar mb-4">
                        <img src={IMG01} alt="User Avatar" className="img-fluid rounded-circle" width="100" />
                    </div>
                    <div className="user-details">
                        <h4><b>Welcome Employee</b></h4>
                        <p>{currentDate}</p>
                    </div>
                </div>
            </div>
            <div className="card shadow-sm">
                <div className="card-header">
                    <h4 className="card-title mb-0 d-inline-block">Leave Report</h4>
                    <Link to="leave" className="d-inline-block float-right text-primary"><i className="fa fa-suitcase"></i></Link>
                </div>
                <div className="card-body text-center">
                    <div className="time-list">
                        <div className="dash-stats-list">
                            <span className="btn btn-outline-primary">{leaveData.booked} Day(s)</span>
                            <p className="mb-0">Booked</p>
                        </div>
                        <div className="dash-stats-list">
                            <span className="btn btn-outline-primary">{leaveData.available} Day(s)</span>
                            <p className="mb-0">Available</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="card shadow-sm">
                <div className="card-header">
                    <h4 className="card-title mb-0 d-inline-block">Leave</h4>
                    <Link to="leave" className="d-inline-block float-right text-primary"><i className="fa fa-suitcase"></i></Link>
                </div>
                <div className="card-body text-center">
                    <div className="time-list">
                        <div className="dash-stats-list">
                            <span className="btn btn-outline-primary">4.5 Days</span>
                            <p className="mb-0">Taken</p>
                        </div>
                        <div className="dash-stats-list">
                            <span className="btn btn-outline-primary">7.5 Days</span>
                            <p className="mb-0">Remaining</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </aside>
    );
};

export default Sidebar;