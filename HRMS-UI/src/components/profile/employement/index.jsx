import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import Select from 'react-select';
import Sidebar from '../sidebar.jsx';
import IMG01 from '../../../assets/images/img-1.jpg';
import IMG02 from '../../../assets/images/img-2.jpg';
import IMG03 from '../../../assets/images/img-3.jpg';
import IMG04 from '../../../assets/images/img-4.jpg';
import IMG05 from '../../../assets/images/img-5.jpg';


class Employment extends Component {
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
				{ value: 'PHP', label: 'PHP' },
				{ value: 'IOS', label: 'IOS' },
				{ value: 'Design', label: 'Design' }
			  ];
			  const manager = [
				{ value: 'Richard', label: 'Richard' },
				{ value: 'David', label: 'David' },
				{ value: 'Linda Craver', label: 'Linda Craver' }
			  ];

        return(
            
            <div className="page-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
							 <Sidebar />
							</div>                       
			           <div className="col-xl-9 col-lg-8  col-md-12">
					          <div className="row">
								<div className="col-md-6 col-sm-12 d-flex">
									<div className="card add-team flex-fill ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">Add Maria Cotton to Another Team</h4>
										</div>
										<div className="card-body">
											<div className="form-group mb-3">
											<Select options={options} />
											</div>
											<button className="btn btn-theme button-1 ctm-border-radius text-white float-right" type="button" onClick={()=>this.handleShow('new')}>New Team</button>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12 d-flex">
									<div className="card office-card flex-fill ctm-border-radius shadow-sm">
										<div className="card-header d-flex justify-content-between align-items-center">
											<h4 className="d-inline-block card-title mb-0">PHP Team</h4>
											<div className="team-action-icon float-right">
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme ctm-border-radius text-white" title="Edit" 
												onClick={()=>this.handleShow('team')}><i className="fa fa-pencil"></i></a>
												</span>
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme ctm-border-radius text-white" title="Delete" onClick={()=>this.handleShow('delete')}><i className="fa fa-trash"></i></a>
												</span>
											</div>
										</div>
										<div className="card-body">
											<p className="d-inline-block mb-0">
												<Link to="employment" className="avatar d-inline-block">
													<img src={IMG02} alt="Maria Cotton" className="img-fluid" /></Link>
												<Link to="employment" className="d-inline-block ml-4 text-primary">Maria Cotton</Link>
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* row */}
							<div className="row">
								<div className="col-12">
									<div className="card ctm-border-radius shadow-sm">
										<div className="card-header">
											<div className="d-inline-block">
												<h4 className="card-title mb-0">Focus Technologies</h4>
												<span className="mb-0 ctm-text-sm">Head Office</span>
											</div>
											<a href="#0" className=" mt-2 btn btn-theme button-1 ctm-border-radius text-white float-right" onClick={()=>this.handleShow('change')}>Change Office </a>
										</div>
										<div className="card-body">
											<h4 className="card-title mb-2">Members</h4>
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Danny Ward"><img alt="avatar" src={IMG01} className="img-fluid" /></span></Link>
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Linda Craver"><img className="img-fluid" alt="avatar" src={IMG02} /></span></Link>
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Jenni Sims"><img className="img-fluid" alt="avatar" src={IMG03} /></span></Link>
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Maria Cotton"><img alt="avatar" src={IMG04} className="img-fluid" /></span></Link>
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="John Gibbs"><img className="img-fluid" alt="avatar" src={IMG05} /></span></Link>
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Richard Wilson"><img className="img-fluid" alt="avatar" src={IMG01} /></span></Link>
											<Link to="#0" className="btn btn-theme button-1 text-white ctm-border-radius float-right mx-2  mt-2"> Visit Office</Link>
										</div>
									</div>
								</div>
							</div>
							{/*row */}
							<div className="row">
								<div className="col-md-6 col-sm-12 d-flex">
									<div className="card flex-fill ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">Maria Cotton's Manager</h4>
										</div>
										<div className="card-body">
											<div className="media mb-4">
												<img className="rounded mr-3 img-fluid" src={IMG02} alt="avatar" width="50" height="50" />
												<div className="media-body">
													<Link to="employment" className="text-dark text-ellipsis">Richard Wilson</Link>
													<p className="ctm-text-sm mb-0 text-ellipsis">richardwilson@example.com</p>
												</div>
											</div>
											<div className="text-center">
												<a href="#0" className="btn btn-theme button-1 ctm-border-radius text-white" onClick={()=>this.handleShow('manager')}>Change Manager</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12 d-flex">
									<div className="card add-team flex-fill ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">Who Reports to Maria Cotton</h4>
										</div>
										<div className="card-body">
											<Link to="employment">
												<span className="avatar" data-toggle="tooltip" data-placement="top" title="John Gibbs">
													<img className="img-fluid" alt="avatar" src={IMG01} /></span></Link>
											<Link to="employment">
												<span className="avatar" data-toggle="tooltip" data-placement="top" title="Richard Wilson">
													<img className="img-fluid" alt="avatar" src={IMG02} /></span></Link>
											<div className="text-center">
												<a href="#0" className="btn btn-theme button-1 ctm-border-radius text-white mt-4"
												 onClick={()=>this.handleShow('people')}>Add People</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/*row*/}
							<div className="row">
								<div className="col-md-6 col-sm-12 d-flex">
									<div className="card flex-fill ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">Position</h4>
										</div>
										<div className="card-body">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Job Title" />
											</div>
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Employment Type" defaultValue="Permanent" />
											</div>
											<div className="team-action-icon float-right">
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme ctm-border-radius text-white" title="Edit" onClick={()=>this.handleShow('position')}>
													<i className="fa fa-pencil"></i></a>
												</span>
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme ctm-border-radius text-white" title="Delete" onClick={()=>this.handleShow('delete')}><i className="fa fa-trash"></i></a>
												</span>
											</div>
											<p className="btn btn-theme ctm-border-radius text-white mb-1">PHP Team Lead</p>
											<p className="btn btn-theme ctm-border-radius text-white mb-1">Permanent</p>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12 d-flex">
									<div className="card flex-fill office-card-last ctm-border-radius shadow-sm">
										<div className="card-header ">
											<h4 className="card-title mb-0">Working Week <a href="#0" className="float-right text-primary" 
											onClick={()=>this.handleShow('weeks')}>
												<i className="fa fa-pencil-square-o" aria-hidden="true"></i></a></h4>
											<span className="ctm-text-sm">You have to change your company's working week</span>
										</div>
										<div className="card-body">
											<div className="row">
												<div className="col-12">
													<span className="badge custom-badge badge-primary">Mon</span>
													<span className="badge custom-badge badge-primary">Tue</span>
													<span className="badge custom-badge badge-primary">Wed</span>
													<span className="badge custom-badge badge-primary">Thu</span>
													<span className="badge custom-badge badge-primary">Fri</span>
													<span className="badge custom-badge">Sat</span>
													<span className="badge custom-badge">Sun</span>
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
				  {/* Change Team*/}
				  <Modal
          show={this.state.show === "team"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <h4 className="modal-title mb-4">Change Team</h4>
          </Modal.Header>
          <Modal.Body>
			<div className="form-group">
			<Select options={options} />
			</div>
		  <button type="button" className="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
			<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
          </Modal.Body>
        </Modal>
		  {/* New Team*/}
		  <Modal
          show={this.state.show === "new"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <h4 className="modal-title mb-4">Create New Team</h4>
          </Modal.Header>
          <Modal.Body>
			<div className="form-group">
				<input type="text" className="form-control" placeholder="Name" />
		    </div>
			<button type="button" className="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
			<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
          </Modal.Body>
        </Modal>
		  {/* Change Office*/}
		  <Modal
          show={this.state.show === "change"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <h4 className="modal-title mb-4">Change Office</h4>
          </Modal.Header>
          <Modal.Body>
			<div className="form-group">
				<input type="text" className="form-control" placeholder="Name" />
		    </div>
			<button type="button" className="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
			<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
          </Modal.Body>
        </Modal>
		 {/* Add people*/}
		 <Modal
          show={this.state.show === "people"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <h4 className="modal-title mb-4">Add People</h4>
          </Modal.Header>
          <Modal.Body>
			<div className="form-group">
				<input type="text" className="form-control" placeholder="Name" />
		    </div>
			<button type="button" className="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
			<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
          </Modal.Body>
        </Modal>
		  {/* Change managee*/}
		  <Modal
          show={this.state.show === "manager"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <h4 className="modal-title mb-4">Change Manager</h4>
          </Modal.Header>
          <Modal.Body>
			<div className="form-group">
			<Select options={manager} />
			</div>
		  <button type="button" className="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
			<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
          </Modal.Body>
        </Modal>
		  {/* Change managee*/}
		  <Modal
          show={this.state.show === "position"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <h4 className="modal-title mb-4">Edit Position</h4>
          </Modal.Header>
          <Modal.Body>
		  <div className="form-group">
				<input type="text" className="form-control" placeholder="PHP Team Lead" />
		    </div>
			<div className="form-group">
				<input type="text" className="form-control" placeholder="Permanent" />
		    </div>
		  <button type="button" className="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
			<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
          </Modal.Body>
        </Modal>
			  {/* ddelete*/}
			  <Modal
			  show={this.state.show === "delete"}
			  onHide={this.handleClose}
			  centered
			>
			  <Modal.Header closeButton>
				<h4 className="modal-title mb-4">Are You Sure Want to Delete?</h4>
			  </Modal.Header>
			  <Modal.Body>
			 
			  <button type="button" className="btn btn-danger text-white ctm-border-radius text-center mb-2 mr-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius text-center mb-2" data-dismiss="modal">Delete</button>
			  </Modal.Body>
			</Modal>
			{/* working weeks*/}
			<Modal
			  show={this.state.show === "weeks"}
			  onHide={this.handleClose}
			  centered
			>
			  <Modal.Header closeButton>
				<h4 className="modal-title mb-4">Edit Working Week</h4>
			  </Modal.Header>
			  <Modal.Body>
			 
			  <div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
							<input type="checkbox" id="Mon" className="custom-control-input" checked />
							<label className="mb-0 custom-control-label" for="Mon">Mon</label>
						</div>
						<div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
							<input type="checkbox" id="Tue" className="custom-control-input" checked />
							<label className="mb-0 custom-control-label" for="Tue">Tue</label>
						</div>
						<div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
							<input type="checkbox" id="Wed" className="custom-control-input" checked />
							<label className="mb-0 custom-control-label" for="Wed">Wed</label>
						</div>
						<div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
							<input type="checkbox" id="Thu" className="custom-control-input" checked />
							<label className="mb-0 custom-control-label" for="Thu">Thu
							</label>
						</div>
						<div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
							<input type="checkbox" id="Fri" className="custom-control-input" checked />
							<label className="mb-0 custom-control-label" for="Fri">Fri</label>
						</div>
						<div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
							<input type="checkbox" id="Sat" className="custom-control-input" />
							<label className="mb-0 custom-control-label" for="Sat">Sat</label>
						</div>
						<div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
							<input type="checkbox" id="Sun" className="custom-control-input" />
							<label className="mb-0 custom-control-label" for="Sun">Sun</label>
						</div>
						<br />
						<button type="button" className="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
			  </Modal.Body>
			</Modal>
	     </div>
                                               
            )
        }

    }
    
  export default Employment;