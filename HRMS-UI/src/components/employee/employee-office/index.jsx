import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card';
import 'antd/dist/antd.css';
import { Table } from 'antd';

import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Sidebar from '../sidebar';
//

import IMG01 from '../../../assets/images/img-2.jpg';
import IMG02 from '../../../assets/images/img-8.jpg';
import IMG03 from '../../../assets/images/img-6.jpg';
import IMG04 from '../../../assets/images/img-5.jpg';
import IMG05 from '../../../assets/images/img-10.jpg';
import IMG06 from '../../../assets/images/img-2.jpg';

class EmployeeOffice extends Component {
    constructor(props){
        super(props);
        this.state = {
			show: null,
			data:[
                {id:1,image:IMG01,Name:"Dr. Ruby Perrin",Manager:"Richard Wilson",Team: "Design", Office: "Focus Technologies",Permissions:"Team Lead"},
                {id:2,image:IMG02,Name:"Dr. Darren Elde",Manager:"Richard Wilson",Team: "IOS", Office: "Focus Technologies",Permissions:"Team Lead"},
                {id:3,image:IMG03,Name:"Dr. Deborah",Manager:"Richard Wilson",Team: "Android", Office: "Focus Technologies",Permissions:"Team Lead"},
                {id:4,image:IMG04,Name:"Dr. Sofia Brient",Manager:"No",Team: "Design",Office: "Focus Technologies",Permissions:"Team Lead"},
                
            ]
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
		const { data } = this.state
		const columns = [
			{
				title: 'Name',
				dataIndex: 'Name',
				render: (text, record) => (            
					<div className="table-avatar">
					  <a href="#0" className="avatar avatar-sm mr-2"><img alt="" src={record.image} /></a>
					   <h2><a href="#0">{text}</a></h2>
					</div>
				  ), 
			  },
			{
			  title: 'Manager',
			  dataIndex: 'Manager',
			  render: (text, record) => (            
			   <a href="#0" className="btn btn-outline-success btn-sm">{text}</a>
			  ), 
			}, 
			{
			  title: 'Team',
			  dataIndex: 'Team',
			  render: (text, record) => (            
				<a href="#0" className="btn btn-outline-warning btn-sm">{text}</a>
			   ), 
			},
			{
				title: 'Team',
				dataIndex: 'Team',
			  },
			  {
				title: 'Office',
				dataIndex: 'Office',
			  },
			  {
				  title:"Permissions",
				  dataIndex: 'Permissions'
			  },
			  {
				title: 'Status',
				render: () => (
					  <> 
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
					</>
				 ),
			  },
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
									<h4 className="card-title float-left mb-0 mt-2">1 Office</h4>
									<ul className="nav nav-tabs float-right border-0 tab-list-emp">
										<li className="nav-item">
											<a className="nav-link border-0 font-23 active grid-view" href="/employee-office">
												<i className="fa fa-th-large" aria-hidden="true"></i></a>
										</li>
										<li className="nav-item">
											<a className="nav-link border-0 font-23 list-view" href="/employee-office">
												<i className="fa fa-list-ul" aria-hidden="true"></i></a>
										</li>
										<li className="nav-item pl-3">
											<a href="#/" 
											className="btn btn-theme button-1 ctm-border-radius p-2 text-white float-right"
										      onClick={()=>this.handleShow('add')} ><i className="fa fa-plus"></i> Add Office</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="card ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">
												Create New Office
											</h4>
										</div>
										<div className="card-body">
											<div className="form-group">
												<div className="input-group mb-3">
													<input className="form-control date-enter" type="text" placeholder="Name" />
												</div>
											</div>
											<button type="button" className="btn btn-danger ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
											<button type="button" className="btn btn-theme button-1 text-white float-right ctm-border-radius"
											onClick={()=>this.handleShow('add')}>Create Office</button>
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
												<p className="mb-0 ctm-text-sm">Head Office</p>
											</div>
											<div className="d-inline-block float-right">
												<a href="#/" className="btn btn-theme mt-2 text-white float-right ctm-border-radius" 
												title="Edit" onClick={()=>this.handleShow('edit')}><i className="fa fa-pencil"></i>	</a>
											</div>
										</div>
										<div className="card-body">
										 <h4 className="card-title">Members</h4>
										
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Danny Ward"><img alt="avatar" src={IMG01} className="img-fluid" /></span></Link>
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Linda Craver"><img className="img-fluid" alt="avatar" src={IMG02} /></span></Link>
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Jenni Sims"><img className="img-fluid" alt="avatar" src={IMG03} /></span></Link>
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Maria Cotton"><img alt="avatar" src={IMG04} className="img-fluid" /></span></Link>
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="John Gibbs"><img className="img-fluid" alt="avatar" src={IMG05} /></span></Link>
											<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" title="Richard Wilson"><img className="img-fluid" alt="avatar" src={IMG06} /></span></Link>
										
											<Accordion defaultActiveKey="0">
												<>
													
													<Accordion.Toggle variant="link" eventKey="0" className="btn btn-theme float-right ctm-border-radius text-white coll-arrow" style = {{marginBottom: '10px'}}>
												 
													</Accordion.Toggle>
													
													<Accordion.Collapse eventKey="0" style = {{marginTop: '20px'}}>
													<Table className="table-striped"
														style = {{overflowX : 'auto'}}
														columns={columns}                 
														// bordered
														dataSource={data}
														rowKey={record => record.id}
														pagination={false} 
														/>
													</Accordion.Collapse>
												</>
											</Accordion>
										</div>
									</div>
								  </div>
							  </div>	
                             {/* row */}
                            </div>
                        </div>
                 </div>
				  {/* modal add office*/}
				  <Modal show={this.state.show === 'add'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
								<h4 className="modal-title mb-3">Create a New Office</h4>
                        </Modal.Header>
                        <Modal.Body>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Name" />
						</div>
						<button type="button" className="btn btn-danger float-right ctm-border-radius ml-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 ctm-border-radius text-white float-right">Add</button>
                        </Modal.Body>
                    </Modal>
					  {/* edit add office*/}
					  <Modal show={this.state.show === 'edit'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
								<h4 className="modal-title mb-3">Edit Office</h4>
                        </Modal.Header>
                        <Modal.Body>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Name" />
						</div>
						<button type="button" className="btn btn-danger float-right ctm-border-radius ml-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 ctm-border-radius text-white float-right">Save</button>
                        </Modal.Body>
                    </Modal>
             </div>
        )
    }
} 
export default EmployeeOffice;    