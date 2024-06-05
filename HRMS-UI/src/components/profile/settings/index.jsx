import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import Sidebar from '../sidebar';

class ProfileSettings extends Component {
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

        return(
            
            <div className="page-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
							 <Sidebar />
							</div>                       
			           <div className="col-xl-9 col-lg-8  col-md-12">
                       <div className="row">
								<div className="col-lg-6 d-flex">
									<div className="card flex-fill ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">Change Password</h4>
											<span className="ctm-text-sm">Your password needs to be at least 8 characters long.</span>
										</div>
										<div className="card-body">
											<div className="form-group">
												<input type="password" className="form-control" placeholder="Current Password" />
											</div>
											<div className="form-group">
												<input type="password" className="form-control" placeholder="New Password" id="pwd" />
											</div>
											<div className="form-group">
												<input type="password" className="form-control" placeholder="Repeat Password" />
											</div>
											<div className="text-center">
												<a href="#0" className="btn btn-theme button-1 ctm-border-radius text-white text-center">Change My Password</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 d-flex">
									<div className="card reminder flex-fill ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">Company Notification Settings</h4>
											<span className="ctm-text-sm">You will receive information across the whole company.</span>
										</div>
										<div className="card-body">
											<div className="custom-control custom-checkbox mb-3">
												<input type="checkbox" className="custom-control-input" id="weekly-digest" defaultChecked />
												<label className="custom-control-label" htmlFor="weekly-digest"><span className="h6">Weekly Summarize</span><br /><span className="ctm-text-sm">Keeping you in the loop with a weekly email summarizing</span> </label>
											</div>
											<div className="custom-control custom-checkbox mb-3">
												<input type="checkbox" className="custom-control-input" id="weekly-payroll" defaultChecked />
												<label className="custom-control-label" htmlFor="weekly-payroll"><span className="h6">Weekly Payroll Summarize</span><br /><span className="ctm-text-sm">A weekly email containing all changes related to your payroll..</span></label>
											</div>
											<div className="custom-control custom-checkbox mb-3">
												<input type="checkbox" className="custom-control-input" id="Key" defaultChecked />
												<label className="custom-control-label" htmlFor="Key"><span className="h6">Visa Dates</span><br /><span className="ctm-text-sm">Informs and notify the day before Visa dates for each team member.</span></label>
											</div>
											<div className="text-center">
												<button className="btn btn-theme button-1 ctm-border-radius text-white">Update Notification Settings</button>
											</div>
										</div>
									</div>
								</div>
							</div> {/*row*/}
                            <div className="row">
								<div className="col-md-12">
									<div className="card ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">Team Member Notification Settings</h4>
											<p className="ctm-text-sm">You will receive notifications only for Team Leads.</p>
										</div>
										<div className="card-body">
											<div className="custom-control custom-checkbox mb-3">
												<input type="checkbox" className="custom-control-input" id="birthday" defaultChecked />
												<label className="custom-control-label" htmlFor="birthday"><span className="h6">Birthdays</span><br /><span className="ctm-text-sm">Reasons to party with reminders a week and a day before a team member’s birthday.</span></label>
											</div>
											<div className="custom-control custom-checkbox mb-3">
												<input type="checkbox" className="custom-control-input" id="Work" defaultChecked />
												<label className="custom-control-label" htmlFor="Work"><span className="h6">Work Anniversaries</span><br /><span className="ctm-text-sm">Never miss work anniversaries with reminders the week and the day before.</span></label>
											</div>
											<div className="custom-control custom-checkbox mb-3">
												<input type="checkbox" className="custom-control-input" id="Key1" defaultChecked />
												<label className="custom-control-label" htmlFor="Key1"><span className="h6">Key Dates</span><br /><span className="ctm-text-sm">Informs and notify the day before key dates for each team member.</span></label>
											</div>
											<div className="custom-control custom-checkbox mb-3">
												<input type="checkbox" className="custom-control-input" id="Offboardings" defaultChecked />
												<label className="custom-control-label" htmlFor="Offboardings"><span className="h6">Off Boardings</span><br /><span className="ctm-text-sm">Informs you when a team member has a leaving date set and reminds you the day before.</span></label>
											</div>
											<div className="custom-control custom-checkbox mb-3">
												<input type="checkbox" className="custom-control-input" id="Home" defaultChecked />
												<label className="custom-control-label" htmlFor="Home"><span className="h6">Work From Home Notifications</span><br /><span className="ctm-text-sm">Never miss a notification that someone will be working from home.</span></label>
											</div>
											<div className="text-center">
												<button className="btn btn-theme button-1 ctm-border-radius text-white">Update Notification Settings</button>
											</div>
										</div>
									</div>
								</div>
							</div> {/*row*/}

                 </div>
                 {/*row*/}
              </div>
			</div>
			{/*row*/}
				  {/*add payroll*/}
				  <Modal
          show={this.state.show === "add"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
          <h4 className="modal-title mb-3">Add Payroll</h4>
          </Modal.Header>
          <Modal.Body>
          <div className="input-group mb-3">
							<input type="text" className="form-control" placeholder="Add Bank Name" />
							<div className="input-group-append">
								<button className="btn btn-theme button-1 text-white ctm-border-radius" type="button">
                                    <i className="fa fa-pencil" aria-hidden="true"></i></button>
							</div>
						</div>
						<div className="input-group mb-3">
							<input type="text" className="form-control" placeholder="Add Bank Account Number" />
							<div className="input-group-append">
								<button className="btn btn-theme button-1 text-white ctm-border-radius" type="button"><i className="fa fa-pencil" aria-hidden="true"></i></button>
							</div>
						</div>
						<div className="input-group mb-3">
							<input type="text" className="form-control" placeholder="Add Bank Sort Code" />
							<div className="input-group-append">
								<button className="btn btn-theme button-1 text-white ctm-border-radius" type="button">
                                    <i className="fa fa-pencil" aria-hidden="true"></i></button>
							</div>
						</div>
						<button type="button" className="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Save</button>
          </Modal.Body>
        </Modal>
         {/*edit payroll*/}
				  <Modal
          show={this.state.show === "editpayroll"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
          <h4 className="modal-title mb-3">Edit Payroll</h4>
          </Modal.Header>
          <Modal.Body>
          <div className="input-group mb-3">
							<input type="text" className="form-control" placeholder="Add Bank Name" defaultValue=" Life Essence Banks, Inc." />
							<div className="input-group-append">
								<button className="btn btn-theme button-1 text-white ctm-border-radius" type="button"><i className="fa fa-pencil" aria-hidden="true"></i></button>
							</div>
						</div>
						<div className="input-group mb-3">
							<input type="text" className="form-control" placeholder="Add Bank Account Number" defaultValue="112300987652" />
							<div className="input-group-append">
								<button className="btn btn-theme button-1 text-white ctm-border-radius" type="button"><i className="fa fa-pencil" aria-hidden="true"></i></button>
							</div>
						</div>
						<div className="input-group mb-3">
							<input type="text" className="form-control" placeholder="Add Bank Sort Code" defaultValue="LE00652" />
							<div className="input-group-append">
								<button className="btn btn-theme button-1 text-white ctm-border-radius" type="button"><i className="fa fa-pencil" aria-hidden="true"></i></button>
							</div>
						</div>
						<button type="button" className="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Save</button>
          </Modal.Body>
        </Modal>
      {/*Edit P45*/}
      <Modal
          show={this.state.show === "editp45"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
          <h4 className="modal-title mb-3">Edit P45</h4>
          </Modal.Header>
          <Modal.Body>
          <div className="form-group">
							<div className="input-group mb-3">
								<input className="form-control date-enter" type="text" placeholder="P45" />
							</div>
						</div>
						<div className="form-group">
							<div className="input-group mb-3">
								<input className="form-control date-enter" type="text" placeholder="Document Description ( optional )" />
							</div>
						</div>
						<div className="form-group">
							<div className="input-group mb-3">
								<input className="form-control date-enter" type="file" />
							</div>
						</div>
						<button type="button" className="btn btn-danger text-white ctm-border-radius ml-3 float-right" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Save Document</button>
          </Modal.Body>
        </Modal>
     </div>
                                               
            )
        }

    }
    
  export default ProfileSettings;