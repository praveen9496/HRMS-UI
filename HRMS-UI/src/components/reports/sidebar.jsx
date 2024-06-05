import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import Select from 'react-select';

class Sidebar extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  show: null,
		}
	}		
	handleClose = () => {
		this.setState({
		  show: false,
		});
	  };
	
	  handleShow = (id) => {
		this.setState({
		  show: id,
		});
	  };
        
	render(){
		const options = [
			{ value: 'Full Name', label: 'Full Name' },
			{ value: 'Working Days Off', label: 'Working Days Off' },
			{ value: 'Booked By', label: 'Booked By' },
			{ value: 'Start Date', label: 'Start Date' },
			{ value: 'End Date', label: 'End Date' },
			{ value: 'Team Name', label: 'Team Name' },
			{ value: 'First Name', label: 'First Name' },
			{ value: 'Last Name', label: 'Last Name' },
			{ value: 'Date Of Birth', label: 'Date Of Birth' },
			{ value: 'Phone Number', label: 'Phone Number' },
		  ];
    return(
        <aside className="sidebar sidebar-user">
								<div className="card ctm-border-radius shadow-sm">
									<div className="card-body py-4">
										<div className="row">
											<div className="col-md-12 mr-auto text-left">
												<div className="custom-search input-group">
													<div className="custom-breadcrumb">
														<ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
															<li className="breadcrumb-item d-inline-block"><Link to="admin" className="text-dark">Home</Link></li>
															<li className="breadcrumb-item d-inline-block active">Reports</li>
														</ol>
														<h4 className="text-dark">Reports</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card ctm-border-radius shadow-sm">
									<div className="card-body">
										<a href="#0" className="btn btn-theme button-1 ctm-border-radius text-white btn-block" onClick={()=>this.handleShow('createreport')}><span><i className="fe fe-plus"></i></span> Create Reports</a>
									</div>
								</div>
								<div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
									<div className="card-body">
										<ul className="list-group">
										<NavLink to="/reports" className="list-group-item text-center button-6"  activeClassName="active">Team Member Data</NavLink>
										<NavLink to="/leave-reports" className="list-group-item text-center button-6">Leave Data</NavLink>
										<NavLink to="/payroll-reports" className="list-group-item text-center button-6">Payroll Data</NavLink>
										<NavLink to="/contact-reports" className="list-group-item text-center button-6">Contact reports</NavLink>
										<NavLink to="/email-reports" className="list-group-item text-center button-6">Email Reports</NavLink>
										<NavLink to="/security-reports" className="list-group-item text-center button-6">Security Reports</NavLink>
										<NavLink to="/work-from-home-reports" className="list-group-item text-center button-6">Working From Home Reports</NavLink>
								
										</ul>
									</div>
								
		  {/* Edit Visa */} 
		  <Modal
          show={this.state.show === "createreport"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
		  <h4 className="modal-title mb-3">Create Report</h4>
          </Modal.Header>
          <Modal.Body>
		 
						<form>
							<p className="mb-2">Select Report Type</p>
							<div className="custom-control custom-radio custom-control-inline">
								<input type="radio" className="custom-control-input" id="customRadio" name="example" value="customEx" />
								<label className="custom-control-label" for="customRadio">Team Member</label>
							</div>
							<div className="custom-control custom-radio custom-control-inline"> 
								<input type="radio" className="custom-control-input" id="customRadio2" name="example" value="customEx" />
								<label className="custom-control-label" for="customRadio2">Time Off</label>
							</div>
							
							<div className="form-group">
								<label className="mt-3">What data would you like to include?</label>
							
								<Select options={options} />
							</div>
						</form>
						<button type="button" className="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
				
          </Modal.Body>
        </Modal>
								</div>
							</aside>
						
			
						
    );
	}
}

export default Sidebar;