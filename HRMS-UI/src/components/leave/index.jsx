import React, { Component } from "react";
import Sidebar from "./sidebar";
import Select from 'react-select';

class Leave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EmployeeID: "",  
      leaveType: null,  
      fromDate: "",  
      toDate: "",  
      reasonForLeave: "",  
      showError: false,
      errorMessage: "",
      showSuccessMessage: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.clearErrorMessage);
  };

  handleSelectChange = (selectedOption) => {
    this.setState({ leaveType: selectedOption }, this.clearErrorMessage);
  };

  clearErrorMessage = () => {
    this.setState({ showError: false, errorMessage: "" });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { EmployeeID, leaveType, fromDate, toDate, reasonForLeave } = this.state;

    // Check if To date is greater than or equal to From date
    if (new Date(toDate) < new Date(fromDate)) {
      this.setState({ showError: true, errorMessage: "Please ensure To date is greater than or equal to From date." });
      return;
    }

    // Check if all fields are filled
    if (!EmployeeID || !leaveType || !fromDate || !toDate) {
      this.setState({ showError: true, errorMessage: "Please fill all the mandatory fields." });
      return;
    }

    fetch('http://hrms-eapi.us-e2.cloudhub.io/api/Leave/applyLeave', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        EmployeeID,
        leaveType: leaveType ? leaveType.value : "",
        fromDate,
        toDate,
        reasonForLeave
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok');
    })
    .then(data => {
      console.log(data);
      if (data.status === "Leave applied") {
        // Reset form fields and show success message
        this.setState({
          showSuccessMessage: true,
          EmployeeID: "",
          leaveType: null,
          fromDate: "",
          toDate: "",
          reasonForLeave: ""
        });
        setTimeout(() => {
          this.setState({ showSuccessMessage: false });
        }, 3000);
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };

  render() {
    const leaveOptions = [
      { value: 'Personal Leave', label: 'Personal Leave' }
      // { value: 'Sick Leave', label: 'Sick Leave' }
    ];

    const { EmployeeID, leaveType, fromDate, toDate, reasonForLeave, showError, errorMessage, showSuccessMessage } = this.state;

    return (
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
              <Sidebar />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="card ctm-border-radius shadow-sm">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Apply Leaves</h4>
                    </div>
                    <div className="card-body">
                      {showError && <div className="alert alert-danger">{errorMessage}</div>}
                      {showSuccessMessage && <div className="alert alert-success">Leave applied successfully!</div>}
                      <form onSubmit={this.handleSubmit}>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Leave Type
                                <span className="text-danger">*</span>
                              </label>
                              <Select
                                options={leaveOptions}
                                value={leaveType}
                                onChange={this.handleSelectChange}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Employee ID</label>
                              <span className="text-danger">*</span>
                              <input
                                type="text"
                                className="form-control"
                                value={EmployeeID}
                                onChange={this.handleInputChange}
                                name="EmployeeID"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>From</label>
                              <span className="text-danger">*</span>
                              <input
                                type="date"
                                className="form-control"
                                value={fromDate}
                                onChange={this.handleInputChange}
                                name="fromDate"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>To</label>
                              <span className="text-danger">*</span>
                              <input
                                type="date"
                                className="form-control"
                                value={toDate}
                                onChange={this.handleInputChange}
                                name="toDate"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label>Reason</label>
                              <textarea
                                className="form-control"
                                rows={4}
                                value={reasonForLeave}
                                onChange={this.handleInputChange}
                                name="reasonForLeave"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-theme button-1 text-white ctm-border-radius mt-4"
                          >
                            Apply
                          </button>
                          <a href="#0" className="btn btn-danger text-white ctm-border-radius mt-4">Cancel</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leave;