import React, { Component } from "react";
import Sidebar from '../sidebar';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const hoverClass = {
    backgroundColor: '#e0e0e0',
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
};

class Leavereports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sickLeave: {
                available: 0,
                booked: 0
            },
            personalLeave: {
                available: 5,
                booked: 3
            },
            isSickLeaveHovered: false,
            isPersonalLeaveHovered: false,
            holidays: [],
            filteredHolidays: [],
            showUpcoming: true, // to toggle between upcoming and history
            upcomingButtonActive: true, // Track if the upcoming button is active
            historyButtonActive: false // Track if the history button is active
        };
    }

    componentDidMount() {
        // Fetch leave data initially
        this.fetchLeaveData();
        // Fetch holidays data initially
        this.fetchHolidaysData();
    }

    fetchLeaveData = () => {
        // Fetch leave data from API
        axios.get('http://hrms-eapi.us-e2.cloudhub.io/api/Leave/leaveReport/DW005')
            .then(response => {
                const { booked, available, totalLeave } = response.data;
                this.setState({
                    sickLeave: {
                        available: this.state.sickLeave.available,
                        booked: this.state.sickLeave.booked
                    },
                    personalLeave: {
                        available: available,
                        booked: booked
                    },
                    totalLeave: totalLeave
                });
            })
            .catch(error => {
                console.error('Error fetching leave data:', error);
            });
    }

    fetchHolidaysData = () => {
        // Fetch holidays data from API
        axios.get('http://hrms-eapi.us-e2.cloudhub.io/api/Leave/holidays')
            .then(response => {
                this.setState({ holidays: response.data }, this.filterHolidays);
            })
            .catch(error => {
                console.error('Error fetching holidays data:', error);
            });
    }

    filterHolidays = () => {
        const { holidays, showUpcoming } = this.state;
        const today = new Date();
        const filtered = holidays.filter(holiday => {
            const holidayDate = new Date(holiday.h_date.split('-').reverse().join('-'));
            return showUpcoming ? holidayDate >= today : holidayDate < today;
        });
        this.setState({ filteredHolidays: filtered });
    }

    handleUpcomingClick = () => {
        this.setState({ showUpcoming: true, upcomingButtonActive: true, historyButtonActive: false }, this.filterHolidays);
    }

    handleHistoryClick = () => {
        this.setState({ showUpcoming: false, upcomingButtonActive: false, historyButtonActive: true }, this.filterHolidays);
    }

    handleSLClick = () => {
        this.props.history.push("/leave");
    }

    handlePLClick = () => {
        this.props.history.push("/leave");
    }

    handleSickLeaveMouseEnter = () => {
        this.setState({ isSickLeaveHovered: true });
    };

    handleSickLeaveMouseLeave = () => {
        this.setState({ isSickLeaveHovered: false });
    };

    handlePersonalLeaveMouseEnter = () => {
        this.setState({ isPersonalLeaveHovered: true });
    };

    handlePersonalLeaveMouseLeave = () => {
        this.setState({ isPersonalLeaveHovered: false });
    };

    formatDay = (dateString) => {
        const date = new Date(dateString.split('-').reverse().join('-')); // Convert 'DD-MM-YYYY' to 'YYYY-MM-DD'
        const options = { weekday: 'long' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    render() {
        const { sickLeave, personalLeave, isSickLeaveHovered, isPersonalLeaveHovered, filteredHolidays, upcomingButtonActive, historyButtonActive } = this.state;

        const totalLeaves = sickLeave.available + personalLeave.available + sickLeave.booked + personalLeave.booked;

        const boxStyle = {
            width: 'calc(30% - 20px)', // Slightly reduced the width
            height: '4.5cm', // Slightly reduced the height
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid transparent',
            transition: 'all 0.3s',
            cursor: 'pointer',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white', // Ensures the box is white by default
        };

        const sickLeaveBoxStyle = isSickLeaveHovered ? { ...boxStyle, ...hoverClass } : boxStyle;
        const personalLeaveBoxStyle = isPersonalLeaveHovered ? { ...boxStyle, ...hoverClass } : boxStyle;

        const tableStyle = {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '10px'
        };

        const thStyle = {
            backgroundColor: '#f2f2f2',
            padding: '10px',
            border: '1px solid #ddd',
            textAlign: 'left'
        };

        const tdStyle = {
            padding: '10px',
            border: '1px solid #ddd'
        };

        const holidaysHeaderStyle = {
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        };

        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <Sidebar onLeaveClick={this.fetchLeaveData} />
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            <div className="mb-3 d-flex">
                                <div
                                    className="card shadow-sm ctm-border-radius d-flex flex-column justify-content-center align-items-center mr-3"
                                    style={sickLeaveBoxStyle}
                                    onClick={this.handleSLClick}
                                    onMouseEnter={this.handleSickLeaveMouseEnter}
                                    onMouseLeave={this.handleSickLeaveMouseLeave}
                                >
                                    <div className="card-body text-center">
                                        <p style={{ fontWeight: 'bold' }}>Sick Leave</p>
                                        <div className="box-content">
                                        <p>Available: {sickLeave.available}</p>
                                            <p>Booked: {sickLeave.booked}</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card shadow-sm ctm-border-radius d-flex flex-column justify-content-center align-items-center mr-3"
                                    style={personalLeaveBoxStyle}
                                    onClick={this.handlePLClick}
                                    onMouseEnter={this.handlePersonalLeaveMouseEnter}
                                    onMouseLeave={this.handlePersonalLeaveMouseLeave}
                                >
                                    <div className="card-body text-center">
                                        <p style={{ fontWeight: 'bold' }}>Personal Leave</p>
                                        <div className="box-content">
                                            <p>Available: {personalLeave.available}</p>
                                            <p>Booked: {personalLeave.booked}</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card shadow-sm ctm-border-radius d-flex flex-column justify-content-center align-items-center"
                                    style={boxStyle}
                                >
                                    <div className="card-body text-center">
                                        <p style={{ fontWeight: 'bold' }}>Total Leave</p>
                                        <div className="box-content">
                                            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{totalLeaves}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div style={{ width: '100%' }}>
                                    <div style={holidaysHeaderStyle}>
                                        <span>All Leaves and Holidays</span>
                                        <div>
                                            <button
                                                onClick={this.handleUpcomingClick}
                                                className={`btn btn-primary mr-2 ${upcomingButtonActive ? 'active' : ''}`}
                                            >
                                                Upcoming
                                            </button>
                                            <button
                                                onClick={this.handleHistoryClick}
                                                className={`btn btn-secondary ${historyButtonActive ? 'active' : ''}`}
                                            >
                                                History
                                            </button>
                                        </div>
                                    </div>
                                    <table style={tableStyle}>
                                        <thead>
                                            <tr>
                                                <th style={thStyle}>Date</th>
                                                <th style={thStyle}>Day</th>
                                                <th style={thStyle}>Holiday</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredHolidays.map((holiday, index) => (
                                                <tr key={index}>
                                                    <td style={tdStyle}>{holiday.h_date}</td>
                                                    <td style={tdStyle}>{this.formatDay(holiday.h_date)}</td>
                                                    <td style={tdStyle}>{holiday.holiday}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Leavereports);