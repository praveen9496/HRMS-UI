import React, { Component } from "react";
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

import IMG01 from '../../../assets/images/img-2.jpg';
import IMG02 from '../../../assets/images/img-8.jpg';
import IMG04 from '../../../assets/images/img-6.jpg';


class Tableoverview extends Component {
	constructor(props){
		super(props);
		this.state = {
			showTable: null,
			data:[
             {id:1,image:IMG01,Name: 'Monthly Review', Reviewers:'Richard Wilson', Begin: '15 Dec 2019', Due: '17 Dec 2019'},
             {id:2,image:IMG02,Name: 'Employees Review', Reviewers:'Richard Wilson', Begin: '17 Dec 2019', Due: '17 Dec 2019'},
             {id:3,image:IMG04,Name: 'Employees Review', Reviewers:'Richard Wilson', Begin: '20 Dec 2019', Due: '17 Dec 2019'},
       
            ]
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

            const { data } = this.state
            const columns = [
                {
                    title: 'Name',
                    dataIndex: 'Name',
                  },
                {
                    title: 'Name',
                    dataIndex: 'Reviewers',
                    render: (text, record) => (            
                    
                        <>  <a href="#0" className="avatar avatar-sm mr-2"><img alt="" src={record.image} /></a>
                          <h2 className="table-avatar"><a href="#0">{text}</a></h2></>
                      ), 
                  },
                  {
                    title: 'Begin On',
                    dataIndex: 'Begin',
                  },
                  {
                    title: 'Due By',
                    dataIndex: 'Due',
                  },
                  {
                    title: 'Status',
                    dataIndex: 'Active',
                    render: (text, record) => (            
                    	<Dropdown>
					<Dropdown.Toggle id="dropdown-basic">
						In Progress
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">In Progress</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Completed</Dropdown.Item>
						
					</Dropdown.Menu>
					</Dropdown> 
                      ), 
                  },
                  
                  {
                    title: 'Actions',
                    dataIndex: 'Actions',
                    render: (text, record) => ( 
                            <>
                            <div className="table-action">
                                  <Link to="edit-reviews" className="btn btn-sm btn-outline-success" >
									 <span className="lnr lnr-pencil"></span> Edit
								  </Link>
                                  <a href="#0" className="btn btn-sm btn-outline-danger"  onClick={()=>this.handleShow('delete')}>
									<span className="lnr lnr-trash"></span> Delete
								</a>
                                </div>
                            </>
                    )
                  },
            ]
    
            return(
             
                <>   <Table className="table-striped"
														style = {{overflowX : 'auto'}}
														columns={columns}                 
														// bordered
														dataSource={data}
														rowKey={record => record.id}
														pagination={false} 
														/>
                                                      {/*edit*/}
                                                      
                                                         {/* Modal delete*/}
        	  <Modal
          show={this.state.show === "delete"}
          onHide={this.handleClose}
          centered
        >
           <Modal.Header closeButton>
            <h4 className="modal-title mb-4">Are You Sure Want to Delete?</h4>
          </Modal.Header>
          <Modal.Body>
            <button
              type="button"
              className="btn btn-danger text-white text-center ctm-border-radius mb-2 mr-3"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-theme text-white text-center ctm-border-radius mb-2 button-1 button-1"
              data-dismiss="modal"
            >
              Delete
            </button>
          </Modal.Body>
        </Modal>
                                                        </>
                                            
            )
        }

    }
    
  export default Tableoverview;