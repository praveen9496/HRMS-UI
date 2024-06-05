import React, { Component } from "react";
import IMG01 from '../../assets/images/img-1.jpg'
import { Link } from 'react-router-dom';
class PayrollAdmin extends Component {

    constructor(props){
        super(props);
        this.state={
            tab: null
        }
    }

    componentWillMount(){
        this.setState({
            tab: 'tab1'
        })
    }
    handlemanage=(id)=>{
        this.setState({
            tab: id
        })
    }
    render(){
        return(
            <div className="page-wrapper">
				<div className="container-fluid">
					<div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
							<aside className="sidebar sidebar-user">
								<div className="card ctm-border-radius shadow-sm">
									<div className="card-body py-4">
										<div className="row">
											<div className="col-md-12 mr-auto text-left">
												<div className="custom-search input-group">
												<div className="custom-breadcrumb">
														<ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
															<li className="breadcrumb-item d-inline-block"><Link to="dashboard" className="text-dark">Home</Link></li>
															<li className="breadcrumb-item d-inline-block active">Manage</li>
														</ol>
														<h4 className="text-dark">Payroll Admin</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
									<div className="card-body">
										<div className="flex-column list-group" id="v-pills-tab" role="tablist" aria-orientation="vertical">
											<a className={`list-group-item ${this.state.tab === 'tab1' ? 'active' : ''}`} id="v-pills-home-tab"  href="#v-pills-home" onClick={()=>this.handlemanage('tab1')}>View Details</a>
											<a className={`list-group-item ${this.state.tab === 'tab2' ? 'active' : ''}`} id="v-pills-profile-tab"  href="#v-pills-profile" onClick={()=>this.handlemanage('tab2')}>View Salaries</a>
											
										</div>
									</div>
								</div>
							</aside>
						</div>
                        <div className="col-xl-9 col-lg-8  col-md-12">
                           <div className="card ctm-border-radius shadow-sm">
								<div className="card-header">
								<h4 className="card-title mb-0 d-inline-block">Your Payroll Admin</h4>
								</div>
								<div className="card-body">
									<a href="#0" className="mb-0 cursor-pointer d-block">
									<span className="avatar" data-toggle="tooltip" data-placement="top" title="Richard Wilson">
                                        <img src={IMG01} alt="Richard Wilson" className="img-fluid" /></span>
										<span className="ml-4">1 Payroll Admin</span>
									</a>
								</div>
							</div>
                            {/*card*/}
                            <div className="card ctm-border-radius shadow-sm">
								<div className="card-body">
									<div className="tab-content" id="v-pills-tabContent">
									
										{/* <!-- Tab1--> */}
										<div className={`tab-pane fade show ${this.state.tab === 'tab1' ? 'active' : ''} `} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
											<div className="table-responsive">
											<table className="table admin-table table-hover">
													<thead>
														<tr>
															<th className="pt-0">Rule Description</th>
															<th className="pt-0">View</th>
															<th className="pt-0">Manage</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Basic Information</h6>
																	<p className="ctm-text-sm">Preferred Name, and birthday </p>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch1" checked />
																	<label className="custom-control-label" for="switch1"></label>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch2" disabled />
																	<label className="custom-control-label" for="switch2"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Personal Information</h6>
																	<p className="ctm-text-sm">Nationality, full date of birth, and home address </p>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch3" checked />
																	<label className="custom-control-label" for="switch3"></label>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch4" disabled />
																	<label className="custom-control-label" for="switch4"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Contact Information</h6>
																	<p className="ctm-text-sm">Email And Phone Number </p>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch5" checked />
																	<label className="custom-control-label" for="switch5"></label>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch6" disabled />
																	<label className="custom-control-label" for="switch6"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Login Information</h6>
																	<p className="ctm-text-sm">Login email </p>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch7" checked />
																	<label className="custom-control-label" for="switch7"></label>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch8" disabled />
																	<label className="custom-control-label" for="switch8"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Social Media</h6>
																	<p className="ctm-text-sm">Web Site </p>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch9" checked />
																	<label className="custom-control-label" for="switch3"></label>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch10" disabled />
																	<label className="custom-control-label" for="switch10"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Company Information</h6>
																	<p className="ctm-text-sm">Roll and Employment type </p>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch11" checked />
																	<label className="custom-control-label" for="switch11"></label>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch12" disabled />
																	<label className="custom-control-label" for="switch12"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Working Week</h6>
																	<p className="ctm-text-sm">View or Manage the days worked </p>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch13" checked />
																	<label className="custom-control-label" for="switch13"></label>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch14" disabled />
																	<label className="custom-control-label" for="switch14"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Key Dates</h6>
																	<p className="ctm-text-sm">
																		Keep track of important occasions for people in your team. Such as start date, probation date, or visa expiration
																	</p>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch15" checked />
																	<label className="custom-control-label" for="switch15"></label>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch16" disabled />
																	<label className="custom-control-label" for="switch16"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td className="pb-0">
																<div>
																	<h6 className="mb-0">Manage Key Date Types</h6>
																	<p className="ctm-text-sm">
																		Create and manage all date types that can be applied to anyone in the company.
																	</p>
																</div>
															</td>
															<td className="pb-0">
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch17" checked />
																	<label className="custom-control-label" for="switch3"></label>
																</div>
															</td>
															<td className="pb-0">
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch38" disabled />
																	<label className="custom-control-label" for="switch38"></label>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										{/* <!-- /Tab1--> */}
										
										{/* <!-- Tab2--> */}
										<div className={`tab-pane fade show ${this.state.tab === 'tab2' ? 'active' : ''} `} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
											<div className="table-responsive">
											<table className="table admin-table table-hover">
													<thead>
														<tr>
															<th className="pt-0">Rule Description</th>
															<th className="pt-0">View</th>
															<th className="pt-0">Manage</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td className="pb-0">
																<div>
																	<h6 className="mb-0">Salary</h6>
																	<p className="ctm-text-sm">View or manage salaries </p>
																</div>
															</td>
															<td className="pb-0">
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch23" checked />
																	<label className="custom-control-label" for="switch23"></label>
																</div>
															</td>
															<td className="pb-0">
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch24" disabled />
																	<label className="custom-control-label" for="switch24"></label>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										{/* <!-- /Tab2 --> */}
										
									
									</div>
								</div>
							</div>{/*card*/}

                        </div>
                     </div> 
                 </div>
             </div>          
        );
    }
}

export default PayrollAdmin;