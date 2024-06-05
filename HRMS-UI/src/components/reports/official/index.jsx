import React, { Component } from "react";
import Sidebar from '../sidebar.jsx';
import { Table } from 'antd';
import Dropdown from 'react-bootstrap/Dropdown';
import Personalreports from './personal';
import DatePicker from "react-datepicker";
import Select from 'react-select';
//
import IMG01 from '../../../assets/images/img-2.jpg';
import IMG02 from '../../../assets/images/img-8.jpg';
import IMG04 from '../../../assets/images/img-6.jpg';
import IMG05 from '../../../assets/images/img-10.jpg';

class Reports extends Component {
	constructor(props){
		super(props);
		this.state = {
			showTable: null,
			data:[
                {id:1,image:IMG01,Name:"Dr. Ruby Perrin",Employment:'Permanent', Email: 'danyward@example.com', Job: 'Team Lead', Manager: 'Richard Wilson', Team:'Designing', Date:'28 Jan 2020', Company:'Focus Technologies' },
				{id:2,image:IMG02,Name:"Linda Craver",Employment:'Permanent', Email: 'lindacraver@example.com', Job: 'Team Lead', Manager: 'Richard Wilson', Team:'IOS', Date:'07 Jun 2020', Company:'Focus Technologies' },
				{id:3,image:IMG04,Name:"Jenni Sims",Employment:'Permanent', Email: 'jennisims@example.com', Job: 'Team Lead', Manager: 'Richard Wilson', Team:'IOS', Date:'05 Apr 2019', Company:'Focus Technologies' },
			    {id:4,image:IMG05,Name:"Maria Cotton",Employment:'Permanent', Email: 'mariacotton@example.com', Job: 'Team Lead', Manager: 'Richard Wilson', Team:'IOS', Date:'12 Feb 2019', Company:'Focus Technologies' },
			],
	
		};
	}

	componentDidMount(){
		this.setState({
			showTable: 'tab1'
		})
	}

	handletab(id){
		this.setState({
			showTable: id
		})
	}
    render(){

		const options = [
			{ value: 'Start Date', label: 'Start Date' },
			{ value: 'Date Of Birth', label: 'Date Of Birth' },
			{ value: 'Created At', label: 'Created At' },
			{ value: 'Leaving Date', label: 'Leaving Date' },
			{ value: 'Visa Expiry Dat', label: 'Visa Expiry Dat' }
		  ]
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
				title: 'Employment',
				dataIndex: 'Employment',
			  },
			  {
				  title:"Email",
				  dataIndex: 'Email'
			  },
			  {
				title:"Job Title",
				dataIndex: 'Job'
			  },
			  {
				title:"Line Manager",
				dataIndex: 'Manager',
				render: (text, record) => (
					<span className="btn btn-outline-success text-dark btn-sm">{text}</span>
				  )          
			  },
			  {
				title:"Team Name",
				dataIndex: 'Team',
				render: (text, record) => (
					<span className="btn btn-outline-warning text-dark btn-sm">{text}</span>
				  )          
			  },
			  {
				title:"Start Date",
				dataIndex: 'Date'
			  },
			  {
				title:"Company Name",
				dataIndex: 'Company'
			  },
			  
	
		]

        return(
			<div className="page-wrapper">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
						<Sidebar />
						</div>
						<div className="col-xl-9 col-lg-8  col-md-12">
							<div className="card shadow-sm ctm-border-radius">
									<div className="card-body align-center">
									<ul className="nav nav-pills" id="pills-tab" role="tablist">
											<li className={`nav-item ${this.state.showTable === 'tab1' ? 'mr-md-1' : ''}`}>
												<a href="#0" className="nav-link" onClick={()=>this.handletab('tab1')}>Team Member Official Reports</a>
											</li>
											<li className={`nav-item ${this.state.showTable === 'tab2' ? 'mr-md-1' : ''}`}>
												<a  href="#0" className="nav-link" onClick={()=>this.handletab('tab2')}>Team Member Personal reports</a>
											</li>
										</ul>
									</div>
								</div>
								{/*tab */}
								<div className="card shadow-sm ctm-border-radius">
								<div className="card-body align-center">
									<div className="row filter-row">
										<div className="col-sm-6 col-md-6 col-lg-6 col-xl-3"> 
											<div className="form-group mb-xl-0 mb-md-2 mb-sm-2">
											<Select options={options} />
												
											</div>
										</div>
										<div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">  
											<div className="form-group mb-lg-0 mb-md-2 mb-sm-2">
													<DatePicker
													selected={this.state.startDate}
													onChange={this.handleChange}
													className="form-control datetimepicker" 
													placeholderText="From"
												/>
											</div>
										</div>
										<div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">  
											<div className="form-group mb-lg-0 mb-md-2 mb-sm-2">
											<DatePicker
													selected={this.state.startDate}
													onChange={this.handleChange}
													className="form-control datetimepicker" 
													placeholderText="To"
												/>
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
									<div className={"tab-content" + (this.state.showTable === 'tab1'? " active " : " hide ")} id="pills-tabContent">
								   	<div className="table-responsive">
										    <Table className="table-striped"
														style = {{overflowX : 'auto'}}
														columns={columns}                 
														// bordered
														dataSource={data}
														rowKey={record => record.id}
														pagination={false} 
														/>
														</div>
										<div className="text-center mt-3">
										<a href="#0" className="btn btn-theme button-1 ctm-border-radius text-white">Download Report</a>
									  </div>		
									</div>
									<div className={"tab-content active" + (this.state.showTable === 'tab1'? " hide " : " ")} id="pills-tabContent1">
									         <Personalreports />
									</div>
								</div>
							</div>
							{/*tab content*/}
						</div>
						
					</div>
				</div>
		     </div>
									
        );
    }
}

export default Reports;