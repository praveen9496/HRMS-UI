import React, { Component } from "react";
import { Table } from 'antd';
import Sidebar from '../sidebar';
import Dropdown from 'react-bootstrap/Dropdown';

import IMG01 from '../../../assets/images/img-2.jpg';
import IMG02 from '../../../assets/images/img-8.jpg';
import IMG04 from '../../../assets/images/img-6.jpg';
import './Leavereports.css'; // Import the CSS file for styling

class Leavereports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: null,
      data: [
        { id: 1, image: IMG01, Name: 'Danny Ward', Email: 'danyward@example.com', Allowed: '2', Approved: '5', Sick: '3', wfh: '4', Remaining: '2' },
        { id: 2, image: IMG02, Name: 'Linda Craver', Email: 'lindacraver@example.com', Allowed: '5', Approved: '3', Sick: '1', wfh: '6', Remaining: '3' },
        { id: 3, image: IMG04, Name: 'John Gibbs', Email: 'johndrysdale@example.com', Allowed: '1', Approved: '2', Sick: '2', wfh: '4', Remaining: '1' },
      ]
    };
  }

  render() {
    const { data } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'Name',
        render: (text, record) => (
          <>
            <a href="#0" className="avatar avatar-sm mr-2"><img alt="" src={record.image} /></a>
            <h2 className="table-avatar"><a href="#0">{text}</a></h2>
          </>
        ),
      },
      {
        title: 'Active',
        dataIndex: 'Active',
        render: (text, record) => (
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              Active
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Inactive</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Invited</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
      },
      {
        title: 'Email',
        dataIndex: 'Email',
      },
      {
        title: 'Days Allowed',
        dataIndex: 'Allowed',
      },
      {
        title: 'Days Approved',
        dataIndex: 'Approved',
      },
      {
        title: 'Sick Days',
        dataIndex: 'Sick',
      },
      {
        title: 'Work From Home',
        dataIndex: 'wfh',
      },
      {
        title: 'Days Remaining',
        dataIndex: 'Remaining',
      }
    ];

    return (
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
              <Sidebar />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="inner-wrapper login-body">
                <header className="header">
                  <div className="profile-info">
                    <img src={IMG01} alt="Profile" className="profile-pic" />
                    <span className="profile-name">MKS1128 Deepan Shanmugham</span>
                  </div>
                  <div className="date-range">
                    <span>01-01-2024 - 31-12-2024</span>
                  </div>
                  <button className="btn btn-primary apply-leave">Apply Leave</button>
                </header>
                <main className="main-content">
                  <div className="leave-summary">
                    <div className="leave-card compensatory-off">
                      <div className="leave-type">CO</div>
                      <div className="leave-available">Available: 0</div>
                      <div className="leave-booked">Booked: 0</div>
                    </div>
                    <div className="leave-card personal-leave">
                      <div className="leave-type">Personal Leave</div>
                      <div className="leave-available">Available: 8</div>
                      <div className="leave-booked">Booked: 3</div>
                    </div>
                  </div>
                  <div className="leave-history">
                    <h2>All Leave and Holidays</h2>
                    <div className="leave-list">
                      <div className="leave-item">
                        <span>15 Aug, Thu</span>
                        <span>Independence Day</span>
                      </div>
                      <div className="leave-item">
                        <span>06 Sep, Fri</span>
                        <span>Gowri vrata / Ganesh Chaturthi</span>
                      </div>
                      <div className="leave-item">
                        <span>02 Oct, Wed</span>
                        <span>Gandhi Jayanthi</span>
                      </div>
                      <div className="leave-item">
                        <span>11 Oct, Fri</span>
                        <span>Dussehra</span>
                      </div>
                      <div className="leave-item">
                        <span>31 Oct, Thu</span>
                        <span>Deepawali</span>
                      </div>
                      <div className="leave-item">
                        <span>01 Nov, Fri</span>
                        <span>Kannada Rajyothsava</span>
                      </div>
                      <div className="leave-item">
                        <span>25 Dec, Wed</span>
                        <span>Christmas</span>
                      </div>
                    </div>
                    <div className="leave-tabs">
                      <button className="btn btn-light">Upcoming</button>
                      <button className="btn btn-light">History</button>
                    </div>
                  </div>
                </main>
                <div className="card shadow-sm ctm-border-radius">
                  <div className="card-body align-center">
                    <div className="row filter-row">
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="form-group mb-xl-0 mb-md-2 mb-sm-2">
                          <select className="form-control select">
                            <option selected>Start Date</option>
                            <option>Date Of Birth</option>
                            <option>Created At</option>
                            <option>Leaving Date</option>
                            <option>Visa Expiry Date</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="form-group mb-lg-0 mb-md-2 mb-sm-2">
                          <input type="text" className="form-control datetimepicker" placeholder="From" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="form-group mb-lg-0 mb-md-2 mb-sm-2">
                          <input type="text" className="form-control datetimepicker" placeholder="To" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <a href="#0" className="btn btn-theme button-1 text-white btn-block p-2 mb-md-0 mb-sm-0 mb-lg-0 mb-0">
                          Apply Filter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card shadow-sm ctm-border-radius">
                  <div className="card-body align-center">
                    <div className="employee-office-table">
                      <div className="table-responsive">
                        <Table className="table-striped"
                          style={{ overflowX: 'auto' }}
                          columns={columns}
                          dataSource={data}
                          rowKey={record => record.id}
                          pagination={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <a href="#0" className="btn btn-theme button-1 ctm-border-radius text-white">Download Report</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leavereports;
