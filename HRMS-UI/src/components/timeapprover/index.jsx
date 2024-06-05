import React, { Component } from "react";
import IMG01 from '../../assets/images/img-1.jpg'

class TimeOffApprover extends Component {


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
                                                        <h4 className="text-dark">Time Off Approver</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
									<div className="card-body">
										<div className="flex-column list-group" id="v-pills-tab" role="tablist" aria-orientation="vertical">
											<a className="list-group-item active" id="v-pills-home-tab"  href="#v-pills-home">Manage Time Off</a>
										
										</div>
									</div>
								</div>
							</aside>
						</div>
                        <div className="col-xl-9 col-lg-8  col-md-12">
                        <div className="card ctm-border-radius shadow-sm">
								<div className="card-header">
									<h4 className="card-title mb-0 d-inline-block">Your Team Leads</h4>
								</div>
								<div className="card-body">
									<a href="#0" className="mb-0 cursor-pointer d-block">
									<span className="avatar" data-toggle="tooltip" data-placement="top" title="Richard Wilson">
                                        <img src={IMG01} alt="Richard Wilson" className="img-fluid" /></span>
									<span className="ml-4">1 Team Leads</span>
									</a>
								</div>
							</div>
                            {/*card*/}
                            <div className="card ctm-border-radius shadow-sm">
								<div className="card-body">
                                <div className="tab-content" id="v-pills-tabContent">
									
                                    {/* <!-- Tab1--> */}
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
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
                                                                <h6 className="mb-0">Approve/Deny Time Off</h6>
                                                                <p className="ctm-text-sm">Manage time off requests for anyone in their team </p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input" id="switch1" defaultChecked />
                                                                <label className="custom-control-label" for="switch1"></label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div>
                                                                <h6 className="mb-0">Book Time Off On Behalf</h6>
                                                                <p className="ctm-text-sm">Book time off for anyone in their team </p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input" id="switch3" defaultChecked />
                                                                <label className="custom-control-label" for="switch3"></label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div>
                                                                <h6 className="mb-0">Manage Allowances</h6>
                                                                <p className="ctm-text-sm">Adjust the holiday allowance for people in their team </p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input" id="switch5" defaultChecked />
                                                                <label className="custom-control-label" for="switch5"></label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pb-0">
                                                            <div>
                                                                <h6 className="mb-0">Manage Time Off Settings For The Company</h6>
                                                                <p className="ctm-text-sm">Manage custom leave types, roll over, company holidays and restricted days, the company working week, and your company holiday allowance. </p>
                                                            </div>
                                                        </td>
                                                        <td className="pb-0">
                                                            <div className="custom-control custom-switch">
                                                                <input type="checkbox" className="custom-control-input" id="switch7" disabled />
                                                                <label className="custom-control-label" for="switch7"></label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* <!-- /Tab1--> */}
                                    
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

export default TimeOffApprover;