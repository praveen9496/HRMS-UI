import React, { Component } from "react";
import { Table } from 'antd';
import { Link } from 'react-router-dom';

import Sidebar from '../sidebar';
import Dropdown from 'react-bootstrap/Dropdown';
//

import IMG01 from '../../../assets/images/img-5.jpg';
import IMG02 from '../../../assets/images/img-4.jpg';
import IMG04 from '../../../assets/images/img-3.jpg';


class EmployeeList extends Component {
	constructor(props){
		super(props);
		this.state = {
			showTable: null,
			data:[
             {id:1,image:IMG01,Name: 'Monthly Review', Manager:'Richard Wilson', Team: 'Design', Office: 'Focus Technologies',Permissions:'Team Lead' },
             {id:2,image:IMG02,Name: 'Employees Review', Manager:'Richard Wilson', Team: 'IOS',Office: 'Focus Technologies',Permissions:'Team Lead' },
             {id:3,image:IMG04,Name: 'Employees Review', Manager:'Richard Wilson', Team: 'Design',Office: 'Focus Technologies',Permissions:'Team Lead' },
       
            ]
        }
        
	}
	
    render() {
		const { data } = this.state
		const columns = [
			{
				title: 'Name',
				dataIndex: 'Name',
			  },

			{
				title: 'Line Manager',
				dataIndex: 'Manager',
				render: (text, record) => (            
				
				 <a className="btn btn-outline-success btn-sm">{text}</a>
				  ), 
			  },
			  {
				title: 'Team',
				dataIndex: 'Team',
				render: (text, record) => ( 
				<a className="btn btn-outline-warning btn-sm">{text}</a>
				  ), 
			  },
			  {
				title: 'Office',
				dataIndex: 'Office',
			  },
			  {
				title: 'Permissions',
				dataIndex: 'Permissions',
			  },
		
			  {
				title: 'Status',
				dataIndex: 'Active',
				render: (text, record) => (            
					<Dropdown>
				<Dropdown.Toggle id="dropdown-basic">
					Active
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Active</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Inactive</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
				</Dropdown.Menu>
				</Dropdown> 
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
									<h4 className="card-title float-left mb-0 mt-2">7 People</h4>
									<ul className="nav nav-tabs float-right border-0 tab-list-emp">
										<li className="nav-item">
											<Link className="nav-link active border-0 font-23 grid-view" to="employees-all">
                                                <i className="fa fa-th-large" aria-hidden="true"></i></Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link border-0 font-23 list-view" to="employee-list">
                                                <i className="fa fa-list-ul" aria-hidden="true"></i></Link>
										</li>
										<li className="nav-item pl-3">
                                            <Link to="add-employee" 
                                            className="btn btn-theme button-1 text-white ctm-border-radius p-2 add-person ctm-btn-padding"><
                                                i className="fa fa-plus"></i> Add Person</Link>
										</li>
									</ul>
								</div>
							</div>
							<Table className="table-striped"
														style = {{overflowX : 'auto', zIndex: 9999}}
														columns={columns}                 
														// bordered
														dataSource={data}
														rowKey={record => record.id}
														pagination={false} 
														/>
						</div>
							
                    {/* row */}
                     
                 </div>
               </div>
            </div>      
        )
    }
}

export default EmployeeList;