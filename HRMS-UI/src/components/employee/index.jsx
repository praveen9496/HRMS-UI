import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
//

import IMG02 from '../../assets/images/img-5.jpg';
import IMG03 from '../../assets/images/img-4.jpg';
import IMG04 from '../../assets/images/img-3.jpg';
import IMG05 from '../../assets/images/img-2.jpg';
import IMG06 from '../../assets/images/img-8.jpg';
import IMG08 from '../../assets/images/img-14.jpg';

class Employee extends Component {
   
    render() {
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
							<div className="ctm-border-radius shadow-sm card">
								<div className="card-body">
								
								
									<div className="row people-grid-row">
										<div className="col-md-6 col-lg-6 col-xl-4">
											<div className="card widget-profile">
												<div className="card-body">
													<div className="pro-widget-content text-center">
														<div className="profile-info-widget">
															<Link to="employment" className="booking-doc-img">
																<img src={IMG06} alt="User" />
																</Link>
															<div className="profile-det-info">
																<h4><Link to="employment" className="text-primary">Maria Cotton</Link></h4>
																<div>
																	<p className="mb-0"><b>PHP Team Lead</b></p>
																	<p className="mb-0 ctm-text-sm">mariacotton@example.com</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6 col-xl-4">
											<div className="card widget-profile">
												<div className="card-body">
													<div className="pro-widget-content text-center">
														<div className="profile-info-widget">
															<Link to="employment" className="booking-doc-img">
																<img src={IMG05} alt="User" />
																</Link>
															<div className="profile-det-info">
																<h4><Link to="employment" className="text-primary">Danny Ward</Link></h4>
																<div>
																	<p className="mb-0"><b>Designing Team Lead</b></p>
																	<p className="mb-0 ctm-text-sm">dannyward@example.com</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6 col-xl-4">
											<div className="card widget-profile">
												<div className="card-body">
													<div className="pro-widget-content text-center">
														<div className="profile-info-widget">
															<Link to="employment" className="booking-doc-img">
																<img src={IMG04} alt="User" />
																</Link>
															<div className="profile-det-info">
																<h4><Link to="employment" className="text-primary">Linda Craver</Link></h4>
																<div>
																	<p className="mb-0"><b>IOS Team Lead</b></p>
																	<p className="mb-0 ctm-text-sm">lindacraver@example.com</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6 col-xl-4">
											<div className="card widget-profile">
												<div className="card-body">
													<div className="pro-widget-content text-center">
														<div className="profile-info-widget">
															<Link to="employment" className="booking-doc-img">
																<img src={IMG03} alt="User" />
																</Link>
															<div className="profile-det-info">
																<h4><Link to="employment" className="text-primary">Jenni Sims</Link></h4>
																<div>
																	<p className="mb-0"><b>Android Team Lead</b></p>
																	<p className="mb-0 ctm-text-sm">jennisims@example.com</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6 col-xl-4">
											<div className="card widget-profile">
												<div className="card-body">
													<div className="pro-widget-content text-center">
														<div className="profile-info-widget">
															<Link to="employment" className="booking-doc-img">
																<img src={IMG02} alt="User" />
																</Link>
															<div className="profile-det-info">
																<h4><Link to="employment" className="text-primary">John Gibbs</Link></h4>
																<div>
																	<p className="mb-0"><b>	Business Team Lead</b></p>
																	<p className="mb-0 ctm-text-sm">johndrysdale@example.com</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6 col-xl-4">
											<div className="card widget-profile">
												<div className="card-body">
													<div className="pro-widget-content text-center">
														<div className="profile-info-widget">
															<Link to="employment" className="booking-doc-img">
																<img src={IMG08} alt="User" />
																</Link>
															<div className="profile-det-info">
																<h4><Link to="employment" className="text-primary">Stacey Linville</Link></h4>
																<div>
																	<p className="mb-0"><b>	Testing Team Lead</b></p>
																	<p className="mb-0 ctm-text-sm">staceylinville@example.com</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6 col-xl-4">
											<div className="card widget-profile last-card-row">
												<div className="card-body">
													<div className="pro-widget-content text-center">
														<div className="profile-info-widget">
															<Link to="employment" className="booking-doc-img">
																<img src={IMG08} alt="User" />
																</Link>
															<div className="profile-det-info">
																<h4><Link to="employment" className="text-primary">Richard Wilson</Link></h4>
																<div>
																	<p className="mb-0"><b>	Operation Manager</b></p>
																	<p className="mb-0 ctm-text-sm">richardwilson@example.com</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6 col-xl-4">
											<div className="card widget-profile last-card-row">
												<div className="card-body">
													<div className="pro-widget-content text-center">
														<div className="profile-info-widget">
															<Link to="employment" className="booking-doc-img">
																<img src={IMG04} alt="User" />
																</Link>
															<div className="profile-det-info">
																<h4><Link to="employment" className="text-primary">Daniel Griffing</Link></h4>
																<div>
																	<p className="mb-0"><b>	Designing Team</b></p>
																	<p className="mb-0 ctm-text-sm">danielgriffing@example.com</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6 col-xl-4">
											<div className="card widget-profile last-card-row1">
												<div className="card-body">
													<div className="pro-widget-content text-center">
														<div className="profile-info-widget">
															<Link to="employment" className="booking-doc-img">
																<img src={IMG05} alt="User" />
																</Link>
															<div className="profile-det-info">
																<h4><Link to="employment" className="text-primary">Michelle Fairfax</Link></h4>
																<div>
																	<p className="mb-0"><b>PHP Team</b></p>
																	<p className="mb-0 ctm-text-sm">michellefairfax@example.com</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
							
                    {/* row */}
                     
                 </div>
               </div>
            </div>      
        )
    }
}

export default Employee;