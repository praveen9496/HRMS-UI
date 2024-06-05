import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import IMG01 from '../../assets/images/img-5.jpg';
import IMG02 from '../../assets/images/img-4.jpg';
import IMG03 from '../../assets/images/img-3.jpg';
import IMG04 from '../../assets/images/img-2.jpg';
import IMG05 from '../../assets/images/img-10.jpg';

class Sidebar extends Component{
	constructor(props){
        super(props);
        this.state={
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

	render(){

		return (

			<aside className="sidebar sidebar-user">
								  <div className="card ctm-border-radius shadow-sm">
									  <div className="card-body py-4">
										  <div className="row">
											  <div className="col-md-12 mr-auto text-left">
											  <div className="custom-search input-group">
													  <div className="custom-breadcrumb">
														  <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
															  <li className="breadcrumb-item d-inline-block"><Link to="admin" className="text-dark">Home</Link></li>
															  <li className="breadcrumb-item d-inline-block active">Company</li>
														  </ol>
														  <h4 className="text-dark">Company</h4>
													  </div>
												  </div>
											  </div>
										  </div>
									  </div>
								  </div>
								  <div className="card shadow-sm ctm-border-radius">
									  <div className="card-header">
										  <h4 className="card-title mb-0 d-inline-block">Overview </h4>
										  <Link to="employee-team" className="float-right text-primary">Manage Teams</Link>
									  </div>
									  <div className="card-body">
										  <div className="row">
											  <div className="col-md-6 col-6 text-center">
												  <h5 className="btn btn-outline-primary mt-3"><b>6</b></h5>
												  <p className="mb-3">Teams</p>
											  </div>
											  <div className="col-md-6 col-6 text-center">
												  <h5 className="btn btn-outline-primary mt-3"><b>7</b></h5>
												  <p className="mb-3">People</p>
											  </div>
										  </div>
										  <div className="text-center">
											  <Link to="employees-all" className="btn btn-theme text-white ctm-border-radius mt-2 button-1">People Directory</Link>
										  </div>
									  </div>
								  </div>
								  <div className="card ctm-border-radius shadow-sm">
									  <div className="card-header">
										  <div className="d-inline-block">
											  <h4 className="card-title mb-0">Focus Technologies</h4>
											  <p className="mb-0 ctm-text-sm">Head Office</p>
										  </div>
										  <div className="d-inline-block float-right" data-toggle="modal">
											  <a href="#0" className="btn btn-theme mt-2 text-white float-right ctm-border-radius" 
											  onClick={()=>this.handleShow('edit')}><i className="fa fa-pencil"></i>	</a>
										  </div>
									  </div>
									  <div className="card-body">
										  <h4 className="card-title">Members</h4>
										  <Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Danny Ward"><img alt="avatar" src={IMG01} className="img-fluid" /></span></Link>
										  <Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Linda Craver"><img className="img-fluid" alt="avatar" src={IMG02} /></span></Link>
										  <Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Jenni Sims"><img className="img-fluid" alt="avatar" src={IMG03} /></span></Link>
										  <Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Maria Cotton"><img alt="avatar" src={IMG04} className="img-fluid" /></span></Link>
										  <Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="John Gibbs"><img className="img-fluid" alt="avatar" src={IMG05} /></span></Link>
										  <Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Richard Wilson"><img className="img-fluid" alt="avatar" src={IMG02} /></span></Link>
									  </div>
								  </div>
					   {/* Modal edit document */}
					 <Modal show={this.state.show === 'edit'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
						  <h4 className="modal-title mb-3">Edit Office</h4>
                        </Modal.Header>
                        <Modal.Body>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Office Name" />
						</div>
						<button type="button" className="btn btn-danger ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme text-white ctm-border-radius float-right">Save</button>
                        </Modal.Body>
                    </Modal>  
					 
			  </aside>
	   );

	}
}
 
export default Sidebar;