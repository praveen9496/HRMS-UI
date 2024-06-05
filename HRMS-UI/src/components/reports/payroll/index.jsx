import React, { Component } from "react";
import { Table } from 'antd';
import Sidebar from '../sidebar';
import Dropdown from 'react-bootstrap/Dropdown';

import IMG01 from '../../../assets/images/img-2.jpg';
import IMG02 from '../../../assets/images/img-8.jpg';
import IMG04 from '../../../assets/images/img-6.jpg';


class Payrollreports extends Component {
	constructor(props){
		super(props);
		this.state = {
			showTable: null,
			data:[
         {id:1,image:IMG01,Name: 'Danny Ward', Email: 'danyward@example.com', salary:'$4000', bank:'Life Essence Banks, Inc', Account:'112300987652'},
         {id:2,image:IMG02,Name: 'Linda Craver', Email: 'lindacraver@example.com', salary:'$3000', bank:'Life Essence Banks, Inc', Account:'112300987662'},
         {id:3,image:IMG04,Name: 'John Gibbs', Email: 'johndrysdale@example.com', salary:'$6000', bank:'Life Essence Banks, Inc', Account:'112300987657'},
            ]
        }
        
    }
        render(){

            const { data } = this.state
            const columns = [
                {
                    title: 'Name',
                    dataIndex: 'Name',
                    render: (text, record) => (            
                    
                        <>  <a href="#0" className="avatar avatar-sm mr-2"><img alt="" src={record.image} /></a>
                          <h2 className="table-avatar"><a href="#0">{text}</a></h2></>
                      ), 
                  },
                  {
                    title: 'Active',
                    dataIndex: 'Active',
                    render: (text, record) => (            
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
                      ), 
                  },
                  {
                    title: 'Email',
                    dataIndex: 'Email',
                  },
                  {
                    title: 'Salary',
                    dataIndex: 'salary',
                  },
                  {
                    title: 'Bank Name',
                    dataIndex: 'bank',
                  },
                  {
                    title: 'Account Number',
                    dataIndex: 'Account',
                  }  
        
            ]
    
            return(
                <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <Sidebar />
                            </div>
                            <div className="col-xl-9 col-lg-8  col-md-12">
                               
                                    {/*tab */}
                                    <div className="card shadow-sm ctm-border-radius">
                                    <div className="card-body align-center">
                                        <div className="row filter-row">
                                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3"> 
                                                <div className="form-group mb-xl-0 mb-md-2 mb-sm-2">
                                                    <select className="form-control select">
                                                        <option selected>Start Date</option>
                                                        <option>Date Of Birth</option>
                                                        <option>Created At</option>
                                                        <option>Leaving Date</option>
                                                        <option>Visa Expiry Date</option>
                                                    </select>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">  
                                                <div className="form-group mb-lg-0 mb-md-2 mb-sm-2">
                                                    <input type="text" className="form-control datetimepicker" placeholder="From" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">  
                                                <div className="form-group mb-lg-0 mb-md-2 mb-sm-2">
                                                    <input type="text" className="form-control datetimepicker" placeholder="To" />
                                                </div>
                                            </div>
                                            
                                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">  
                                                <a href="#0" className="btn btn-theme button-1 text-white btn-block p-2 mb-md-0 mb-sm-0 mb-lg-0 mb-0"> 
                                                Apply Filter </a>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    {/*select range */}
                                    <div className="card shadow-sm ctm-border-radius">
                                        <div className="card-body align-center">
                                            <div className="employee-office-table">
                                                <div className="table-responsive">
                                                  <Table className="table-striped"
														style = {{overflowX : 'auto'}}
														columns={columns}                 
														// bordered
														dataSource={data}
														rowKey={record => record.id}
														pagination={false} 
														/>
                                                        <div className="text-center mt-3">
                                                            <a href="#0" className="btn btn-theme button-1 ctm-border-radius text-white">Download Report</a>
                                                        </div>
                                                </div>
                                            </div>
                                         </div>
                                     </div>  
                                {/*tab content*/}
                            </div>
                            
                        </div>
                    </div>
                 </div>
                    
            )
        }

    }
    
  export default Payrollreports;