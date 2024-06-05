import React, { Component } from "react";
import Sidebar from '../sidebar';
import { Modal } from 'react-bootstrap';
import { Table } from 'antd';
import IMG01 from '../../../assets/images/img-2.jpg';

class SettingTimeoff extends Component {
	constructor(props){
        super(props);
        this.state = {
			data:[
                {id:1,image:IMG01,Name:"Dr. Ruby Perrin",Allowance:"Richard Wilson",Days: "Design", Approvers: "Robert Wilson"},
                  
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
    render(){
		const { data } = this.state
		const columns = [
			{
				title: 'Team Members',
				dataIndex: 'Name',
				render: (text, record) => (            
					<h2 className="table-avatar">
					  <a href="#0" className="avatar avatar-sm mr-2"><img alt="" src={record.image} /></a>
					   <h2><a href="#0">{text}</a></h2>
					</h2>
				  ), 
			  },
			
			{
				title: 'Allowance',
				dataIndex: 'Allowance',
			  },
			  {
				title: 'Days',
				dataIndex: 'Days',
			  },
			  {
				  title:"Approvers",
				  dataIndex: 'Approvers'
			  },
	
		]
        return(
            <div className="page-wrapper">
            < div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <Sidebar />
                        </div>
                        <div className="col-xl-9 col-lg-8  col-md-12">
						<div className="row">
								<div className="col-md-6 d-flex">
									<div className="card flex-fill ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">
												Company Default <a href="#0" className="float-right text-primary" 
												 onClick={()=>this.handleShow('default')}>
													 <i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
											</h4>
										</div>
										<div className="card-body">
											<div className="row">
												<div className="col-md-6 col-sm-6 col-6 allowance text-center">
													<p className="mb-2 btn btn-theme button-1 text-white ctm-border-radius">25 days</p>
													<p className="mb-2 h6">Allowance</p>
												</div>
												<div className="col-md-6 col-sm-6 col-6 allowance text-center">
													<p className="mb-2 btn btn-theme button-1 text-white ctm-border-radius">01 January</p>
													<p className="mb-2 h6">Year Start</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 d-flex">
									<div className="card flex-fill ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">
												<span>Working Week</span><a href="#0" className="float-right text-primary"
												 onClick={()=>this.handleShow('edit')}>
													 <i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
											</h4>
											<span className="ctm-text-sm">Set the dates that your company works.</span>
										</div>
										<div className="card-body week-badge">
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
							<div className="row">
								<div className="col-md-6 d-flex">
									<div className="card ctm-border-radius shadow-sm flex-fill">
										<div className="card-header">
											<h4 className="card-title mb-0">Working From Home</h4>
											<span className="mb-0 ctm-text-sm">Reflect your company's working from home policy by editing the approval process or disabling the feature entirely.</span>
										</div>
										<div className="card-body">
											<div className="card-content">
												<span className="wk-home h6">Working From Home</span>
												<div className="custom-control custom-switch float-right">
													<input type="checkbox" className="custom-control-input" id="customSwitch1" checked />
													<label className="custom-control-label" for="customSwitch1"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 d-flex">
									<div className="card settings-card ctm-border-radius shadow-sm flex-fill">
										<div className="card-header w-100">
											<h4 className="card-title mb-0 d-block">Focus Technologies</h4>
										</div>
										<div className="card-body">
											<div id="company-name">
												<div className="table-responsive bg-white">
												<Table className="table-striped"
														style = {{overflowX : 'auto'}}
														columns={columns}                 
														// bordered
														dataSource={data}
														rowKey={record => record.id}
														pagination={false} 
														/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* row */}
                        </div>
                </div>
            </ div>
			  {/*Modal Edit Working Week*/}
			  <Modal show={this.state.show === 'edit'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
								<h4 className="modal-title mb-3">Edit Working Week</h4>
                        </Modal.Header>
                        <Modal.Body>
						<form>
						
							
							<div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
								<input type="checkbox" id="Mon" className="custom-control-input"  checked />
								<label className="mb-0 custom-control-label" for="Mon">Mon</label>
							</div>
							<div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
								<input type="checkbox" id="Tue" className="custom-control-input"  checked />
								<label className="mb-0 custom-control-label" for="Tue">Tue</label>
							</div>
							<div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
								<input type="checkbox" id="Wed" className="custom-control-input"  checked />
								<label className="mb-0 custom-control-label" for="Wed">Wed</label>
							</div>
							<div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
								<input type="checkbox" id="Thu" className="custom-control-input"  checked />
								<label className="mb-0 custom-control-label" for="Thu">Thu
								</label>
							</div>
							<div className=" custom-control custom-checkbox mb-3 d-inline-block mr-3">
								<input type="checkbox" id="Fri" className="custom-control-input"  checked />
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
						</form>
                        </Modal.Body>
                    </Modal>
					  {/* edit add office*/}
					  <Modal show={this.state.show === 'default'} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
						   <h4 className="modal-title mb-3">Company Default</h4>
                        </Modal.Header>
                        <Modal.Body>
						<div className="form-group">
							<label>Time Off Allowance</label>
							<input type="text" className="form-control" placeholder="Name" value="25 Days" />
						</div>
						<div className="form-group">
							<label>Year Start</label>
							<input type="text" className="form-control datetpicker" placeholder="Year Start" value="01-01-2019" />
						</div>
						<button type="button" className="btn btn-danger text-white ctm-border-radius float-right ml-3" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-theme button-1 text-white ctm-border-radius float-right">Add</button>
                        </Modal.Body>
                    </Modal>
         </div>       
                        
        );
    }
}

export default SettingTimeoff;