import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import Sidebar from '../sidebar';

class Payroll extends Component {
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
								<div className="col-xl-6 col-lg-12 col-md-6 col-12 d-flex">
									<div className="card flex-fill ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">Payroll Details</h4>
										</div>
										<div className="card-body">
											<div className="input-group mb-3">
												<input type="text" className="form-control" placeholder="Add Bank Name" />
												<div className="input-group-append">
													<button className="btn btn-theme ctm-border-radius text-white" type="button"><i className="fa fa-pencil" aria-hidden="true"></i></button>
												</div>
											</div>
											<div className="input-group mb-3">
                                                <input type="text" className="form-control" 
                                                placeholder="Add Bank Account Number" />
												<div className="input-group-append">
													<button className="btn btn-theme ctm-border-radius text-white" type="button"><i className="fa fa-pencil" aria-hidden="true"></i></button>
												</div>
											</div>
											<div className="input-group">
												<input type="text" className="form-control" placeholder="Add Bank Sort Code" />
												<div className="input-group-append">
													<button className="btn btn-theme ctm-border-radius text-white" type="button"><i className="fa fa-pencil" aria-hidden="true"></i></button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-lg-12 col-md-6 col-12 d-flex">
									<div className="card flex-fill ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">Payroll Details</h4>
										</div>
										<div className="card-body text-center">
											<p className="card-text mb-3"><span className="text-primary">Bank Name : </span>Life Essence Banks, Inc.</p>
											<p className="card-text mb-3"><span className="text-primary">Bank Account Number : </span>112300987652</p>
											<p className="card-text mb-3"><span className="text-primary">Bank Sort Code : </span>LE00652</p>
											<a href="#0" className="btn btn-theme ctm-border-radius text-white btn-sm" onClick={()=>this.handleShow('add')}><i className="fa fa-plus" aria-hidden="true"></i></a>
											<a href="#0" className="btn btn-theme ctm-border-radius text-white btn-sm" onClick={()=>this.handleShow('editpayroll')}><i className="fa fa-pencil" aria-hidden="true"></i></a>
										</div>
									</div>
								</div>
							</div>
						 {/* row */}
                         <div className="row">
								<div className="col-md-6 col-12 d-flex">
									<div className="upload-doc mb-0 flex-fill">
										<div className="card ctm-border-radius shadow-sm">
											<div className="card-header">
												<h4 className="card-title mb-0">P45</h4>
											</div>
											<div className="card-body">
												<div className="row">
													<div className="col-12">
														<div className="document-up">
															<a href="#0" onClick={()=>this.handleShow('editp45')}><i className="mr-2 text-primary fa fa-file-pdf-o" aria-hidden="true"></i>Upload P45 <span className="float-right text-primary">Edit</span></a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-12 d-flex">
									<div className="card ctm-border-radius shadow-sm flex-fill office-card-last">
										<div className="card-header">
											<h4 className="card-title mb-0">Salary</h4>
										</div>
										<div className="card-body">
											<div className="input-group mb-0">
												<input type="text" className="form-control" placeholder="Current Salary" />
												<div className="input-group-append">
													<button className="btn btn-theme text-white" type="button"><i className="fa fa-pencil" aria-hidden="true"></i></button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
                            {/*row*/}
                 </div>
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
    
  export default Payroll;