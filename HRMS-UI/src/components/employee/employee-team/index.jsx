import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import Sidebar from '../sidebar';
import Select from 'react-select';
//

import IMG05 from '../../../assets/images/img-2.jpg';
import IMG06 from '../../../assets/images/img-8.jpg';


class EmployeeTeam extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: null
        }
    }

    handleClose=()=>{
        this.setState({
            show:false
        });
    }

    handleShow=(id)=>{
        this.setState({
            show:id
        });
    }
    render() {
		const options = [
			{ value: 'Maria cotton', label: 'Maria cotton' },
			{ value: 'Dany ward', label: 'Dany ward' },
			{ value: 'Linda Craver', label: 'Linda Craver' }
		  ]

        return (
            <div className="page-wrapper">
              <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <Sidebar />
                     </div>
					 <div className="col-xl-9 col-lg-8  col-md-12">
							<div className="card shadow-sm ctm-border-radius">
								<div className="card-body align-center">
									<h4 className="card-title float-left mb-0 mt-2">6 Teams</h4>
									<ul className="nav nav-tabs float-right border-0 tab-list-emp">
										<li className="nav-item pl-3">
											<a href="#0" className="btn btn-theme button-1 text-white ctm-border-radius
											 p-2 add-person ctm-btn-padding" onClick={()=>this.handleShow('item')}>
												 <i className="fa fa-plus"></i> Add Team</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="ctm-border-radius shadow-sm card">
										<div className="card-header">
											<h4 className=" card-title d-inline-block mb-0 mt-2">PHP</h4>
											<div className="team-action-icon float-right">
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme text-white ctm-border-radius"
												 title="Edit" onClick={()=>this.handleShow('edit')}><i className="fa fa-pencil"></i></a>
												</span>
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme text-white ctm-border-radius"
												 title="Delete" onClick={()=>this.handleShow('delete')}><i className="fa fa-trash"></i></a>
												</span>
											</div>
										</div>
										<div className="card-body">
											<span className="avatar" data-toggle="tooltip" data-placement="top" title="" data-original-title="Maria Cotton">
												<img src={IMG06} alt="Maria Cotton" className="img-fluid" /></span>
											<a href="#0" className="btn btn-theme button-1 float-right ctm-border-radius text-white" 
										   onClick={()=>this.handleShow('member')}>Add Members</a>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="ctm-border-radius shadow-sm card">
										<div className="card-header">
											<h4 className="page-sub-title d-inline-block mb-0 mt-2">Designing</h4>
											<div className="team-action-icon float-right">
												<span data-toggle="modal" >
												<a href="#0" className="btn btn-theme text-white ctm-border-radius" title="Edit" onClick={()=>this.handleShow('edit')}>
													<i className="fa fa-pencil"></i></a>
												</span>
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme text-white ctm-border-radius" title="Delete" onClick={()=>this.handleShow('delete')}><i className="fa fa-trash"></i></a>
												</span>
											</div>
										</div>
										<div className="card-body">
											<span className="avatar" data-toggle="tooltip" data-placement="top" title="" data-original-title="Danny Ward">
												<img src={IMG05} alt="Danny Ward" className="img-fluid" /></span>
											<a href="#0" className="btn btn-theme button-1 float-right ctm-border-radius text-white" 
											 onClick={()=>this.handleShow('member')}>Add Members</a>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="ctm-border-radius shadow-sm card">
										<div className="card-header">
											<h4 className="page-sub-title d-inline-block mb-0 mt-2">IOS</h4>
											<div className="team-action-icon float-right">
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme text-white ctm-border-radius" title="Edit" onClick={()=>this.handleShow('edit')}><i className="fa fa-pencil"></i></a>
												</span>
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme text-white ctm-border-radius" title="Delete" onClick={()=>this.handleShow('delete')}><i className="fa fa-trash"></i></a>
												</span>
											</div>
										</div>
										<div className="card-body">
											<span className="avatar" data-toggle="tooltip" data-placement="top" title="" data-original-title="Danny Ward">
												<img src={IMG05} alt="Danny Ward" className="img-fluid" /></span>
											<a href="#0" className="btn btn-theme button-1 float-right ctm-border-radius text-white"
											 onClick={()=>this.handleShow('member')}>Add Members</a>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="ctm-border-radius shadow-sm card">
										<div className="card-header">
											<h4 className="page-sub-title d-inline-block mb-0 mt-2">Android</h4>
											<div className="team-action-icon float-right">
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme text-white ctm-border-radius" title="Edit" onClick={()=>this.handleShow('edit')}><i className="fa fa-pencil"></i></a>
												</span>
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme text-white ctm-border-radius" title="Delete" onClick={()=>this.handleShow('delete')}><i className="fa fa-trash"></i></a>
												</span>
											</div>
										</div>
										<div className="card-body">
											<span className="avatar" data-toggle="tooltip" data-placement="top" title="" data-original-title="Danny Ward">
												<img src={IMG05} alt="Danny Ward" className="img-fluid" /> </span>
											<a href="#0" className="btn btn-theme button-1 float-right ctm-border-radius text-white"
											 onClick={()=>this.handleShow('member')}>Add Members</a>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="ctm-border-radius shadow-sm card">
										<div className="card-header">
											<h4 className="page-sub-title d-inline-block mb-0 mt-2">Business</h4>
											<div className="team-action-icon float-right">
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme text-white ctm-border-radius" title="Edit" onClick={()=>this.handleShow('edit')}><i className="fa fa-pencil"></i></a>
												</span>
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme text-white ctm-border-radius" title="Delete" onClick={()=>this.handleShow('delete')}><i className="fa fa-trash"></i></a>
												</span>
											</div>
										</div>
										<div className="card-body">
											<span className="avatar" data-toggle="tooltip" data-placement="top" title="" data-original-title="Danny Ward">
												<img src={IMG05} alt="Danny Ward" className="img-fluid" /></span>
											<a href="#0" className="btn btn-theme button-1 float-right ctm-border-radius text-white" 
											 onClick={()=>this.handleShow('member')}>Add Members</a>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="ctm-border-radius shadow-sm card">
										<div className="card-header">
											<h4 className="page-sub-title d-inline-block mb-0 mt-2">Testing</h4>
											<div className="team-action-icon float-right">
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme text-white ctm-border-radius" onClick={()=>this.handleShow('edit')}><i className="fa fa-pencil"></i></a>
												</span>
												<span data-toggle="modal">
												<a href="#0" className="btn btn-theme text-white ctm-border-radius" onClick={()=>this.handleShow('delete')}><i className="fa fa-trash"></i></a>
												</span>
											</div>
										</div>
										<div className="card-body">
											<span className="avatar" data-toggle="tooltip" data-placement="top" title="" data-original-title="Danny Ward">
												<img src={IMG05} alt="Danny Ward" className="img-fluid" /></span>
											<a href="#0" className="btn btn-theme button-1 float-right ctm-border-radius text-white" 
											 onClick={()=>this.handleShow('member')}>Add Members</a>
										</div>
									</div>
								</div>
							</div>
						</div>
							
                    {/* row */}
                     
                 </div>
               </div>
			     {/* add team  modal*/}
				 <Modal show={this.state.show === 'item'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
						<h4 className="modal-title mb-3">Create New Team</h4>
                        </Modal.Header>
                        <Modal.Body>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Name" />
							</div>
						
						<button type="button" className="btn btn-danger ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 ctm-border-radius text-white float-right">Add</button>
                        </Modal.Body>
                    </Modal>
					{/* Add Members*/}
					<Modal show={this.state.show === 'member'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
						<h4 className="modal-title mb-3">Add Members</h4>
                        </Modal.Header>
                        <Modal.Body>
						<div className="form-group">
							<div className="input-group mb-3">
								<input className="form-control date-enter" type="text" placeholder="Name" />
							</div>
						</div>
						<button type="button" className="btn btn-danger ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
                        </Modal.Body>
                    </Modal>
				    {/* Edit team  modal*/}
					<Modal show={this.state.show === 'edit'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
						<h4 className="modal-title mb-3">Edit Members</h4>
                        </Modal.Header>
                        <Modal.Body>
						<div className="form-group">
							<Select options={options} />
						</div>
						<button type="button" className="btn btn-danger ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 ctm-border-radius text-white float-right">Save</button>
                        </Modal.Body>
                    </Modal>
					   {/* Delete team  modal*/}
					   <Modal show={this.state.show === 'delete'} onHide={this.handleClose} centered>
                       <Modal.Header closeButton><h4 className="modal-title mb-4">Are You Sure Want to Delete?</h4></Modal.Header>
                        <Modal.Body>
					
						
											
						<button type="button" className="btn btn-danger ctm-border-radius text-center mb-2 mr-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 ctm-border-radius text-white text-center mb-2" data-dismiss="modal">Delete</button>
                        </Modal.Body>
                    </Modal>
            </div>      
        )
    }
}

export default EmployeeTeam;