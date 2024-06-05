import React, { Component } from "react";
import IMG01 from '../../assets/images/img-1.jpg'

class LineManager extends Component {

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
															<li className="breadcrumb-item d-inline-block"><a href="/dashboard" className="text-dark">Home</a></li>
															<li className="breadcrumb-item d-inline-block active">Manage</li>
														</ol>
														<h4 className="text-dark">Line Managers</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
									<div className="card-body">
										<div className="flex-column list-group" id="v-pills-tab" role="tablist" aria-orientation="vertical">
											<a className={`list-group-item ${this.state.tab === 'tab1' ? 'active' : ''}`} id="v-pills-home-tab"  href="#v-pills-home" onClick={()=>this.handlemanage('tab1')}>View & Edit Details</a>
											<a className={`list-group-item ${this.state.tab === 'tab2' ? 'active' : ''}`} id="v-pills-profile-tab"  href="#v-pills-profile" onClick={()=>this.handlemanage('tab2')}>Manage Time Off</a>
											<a className={`list-group-item ${this.state.tab === 'tab3' ? 'active' : ''}`} id="v-pills-messages-tab"  href="#v-pills-messages" onClick={()=>this.handlemanage('tab3')}>View Salaries</a>
											<a className={`list-group-item ${this.state.tab === 'tab4' ? 'active' : ''}`} id="v-pills-settings-tab"  href="#v-pills-settings" onClick={()=>this.handlemanage('tab4')}>View Others Information </a>
										</div>
									</div>
								</div>
							</aside>
						</div>
                        <div className="col-xl-9 col-lg-8  col-md-12">
                        <div className="card ctm-border-radius shadow-sm">
								<div className="card-header">
									<h4 className="card-title mb-0 d-inline-block">Your Line Managers</h4>
								</div>
								<div className="card-body">
									<a href="#0" className="mb-0 cursor-pointer d-block">
									<span className="avatar" data-toggle="tooltip" data-placement="top" title="Richard Wilson">
                                        <img src={IMG01} alt="Richard Wilson" className="img-fluid" /></span>
									<span className="ml-4">1 Line Manager</span>
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
																	<input type="checkbox" className="custom-control-input" id="switch2" checked />
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
																	<input type="checkbox" className="custom-control-input" id="switch4" checked />
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
																	<input type="checkbox" className="custom-control-input" id="switch6" checked />
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
																	<input type="checkbox" className="custom-control-input" id="switch10" checked />
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
																	<input type="checkbox" className="custom-control-input" id="switch12" checked />
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
																	<input type="checkbox" className="custom-control-input" id="switch14" checked />
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
																	<input type="checkbox" className="custom-control-input" id="switch16" checked />
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
																	<input type="checkbox" className="custom-control-input" id="switch38" checked />
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
															<th className="pt-0">Allow?</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Approve or Deny Time Off</h6>
																	<p className="ctm-text-sm">Manage time off requests for anyone in their team. </p>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch18" checked />
																	<label className="custom-control-label" for="switch18"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Book Time Off Behalf</h6>
																	<span>Book time off for anyone in their team </span>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch19" checked />
																	<label className="custom-control-label" for="switch19"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Manage Allowances</h6>
																	<span>Adjust the holiday allowance for people in their team </span>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch20" checked />
																	<label className="custom-control-label" for="switch20"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div>
																	<h6 className="mb-0">Manage Time Off settings for The Company</h6>
																	<span>
																	Manage custom leave types, roll over, company holidays and restricted days, the company working week, and your company holiday allowance.
																	</span>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch21" checked />
																	<label className="custom-control-label" for="switch21"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td className="pb-0">
																<div>
																	<h6 className="mb-0">Manage Working From Home</h6>
																	<p className="ctm-text-sm">
																		Create, edit, or delete working from home requests for people in their team
																	</p>
																</div>
															</td>
															<td className="pb-0">
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch22" checked />
																	<label className="custom-control-label" for="switch22"></label>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										{/* <!-- /Tab2 --> */}
										
										{/* <!-- Tab3--> */}
										<div className={`tab-pane fade show ${this.state.tab === 'tab3' ? 'active' : ''} `} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
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
										{/* <!-- /Tab3--> */}
										
										{/* <!-- Tab4 --> */}
										<div className={`tab-pane fade show ${this.state.tab === 'tab4' ? 'active' : ''} `} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
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
																	<input type="checkbox" className="custom-control-input" id="switch25" checked />
																	<label className="custom-control-label" for="switch25"></label>
																</div>
															</td>
															<td>
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch27" disabled />
																	<label className="custom-control-label" for="switch27"></label>
																</div>
															</td>
														</tr>
														<tr>
															<td className="pb-0">
																<div>
																	<h6 className="mb-0">Personal Information</h6>
																	<p className="ctm-text-sm">Nationality, full date of birth, and home address</p>
																</div>
															</td>
															<td className="pb-0">
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch26" disabled />
																	<label className="custom-control-label" for="switch26"></label>
																</div>
															</td>
															<td className="pb-0">
																<div className="custom-control custom-switch">
																	<input type="checkbox" className="custom-control-input" id="switch28" disabled />
																	<label className="custom-control-label" for="switch28"></label>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										{/* <!-- /Tab4--> */}
										
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

export default LineManager;