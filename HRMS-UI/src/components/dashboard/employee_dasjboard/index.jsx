import React, { Component } from "react";
import Sidebar from '../sidebar';
import { Link } from 'react-router-dom';
//
import IMG01 from '../../../assets/images/img-2.jpg';
import IMG02 from '../../../assets/images/img-3.jpg';
import IMG03 from '../../../assets/images/img-4.jpg';
import IMG04 from '../../../assets/images/img-5.jpg';
import IMG05 from '../../../assets/images/img-6.jpg';

class EmployeeDashboard extends Component {
  
    render() {
        const data = this.props.location.pathname;
        //  console.log('dara', data);
      return (
        <div className="page-wrapper">
           <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <Sidebar url={data}/>
                    </div>
                    <div className="col-xl-9 col-lg-8  col-md-12">
						<div className="row">
                        <div className="col-xl-6 col-lg-12 d-flex">
									<div className="card shadow-sm flex-fill">
										<div className="card-header align-items-center">
											<h4 className="card-title mb-0 d-inline-block">Today</h4>
											<a href='#0' className="d-inline-block float-right text-primary">
                                                <i className="lnr lnr-sync"></i></a>
										</div>
										<div className="card-body recent-activ">
											<div className="recent-comment">
												<a href='#0' className="dash-card text-dark">
													<div className="dash-card-container">
														<div className="dash-card-icon text-primary">
															<i className="fa fa-birthday-cake" aria-hidden="true"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">No Birthdays Today</h6>
														</div>
													</div>
												</a>
												<hr />
												<a href='#0' className="dash-card text-dark">
													<div className="dash-card-container">
														<div className="dash-card-icon text-warning">
															<i className="fa fa-bed" aria-hidden="true"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Ralph Baker is off sick today</h6>
														</div>
														<div className="dash-card-avatars">
															<div className="e-avatar">
                                                            <img className="img-fluid" src={IMG01} alt="Avatar"/></div>
														</div>
													</div>
												</a>
												<hr />
												<a href='#0' className="dash-card text-dark">
													<div className="dash-card-container">
														<div className="dash-card-icon text-success">
															<i className="fa fa-child" aria-hidden="true"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Ralph Baker is parenting leave today</h6>
														</div>
														<div className="dash-card-avatars">
															<div className="e-avatar"><img className="img-fluid" src={IMG01} alt="Avatar" /></div>
														</div>
													</div>
												</a>
												<hr />
												<a href='#0' className="dash-card text-dark">
													<div className="dash-card-container">
														<div className="dash-card-icon text-danger">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Danny ward is away today</h6>
														</div>
														<div className="dash-card-avatars">
															<div className="e-avatar"><img className="img-fluid" src={IMG02} alt="Avatar" /></div>
														</div>
													</div>
												</a>
												<hr />
												<a href='#0' className="dash-card text-dark">
													<div className="dash-card-container">
														<div className="dash-card-icon text-pink">
															<i className="fa fa-home" aria-hidden="true"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">John Gibbs is working from home today</h6>
														</div>
														<div className="dash-card-avatars">
															<div className="e-avatar"><img className="img-fluid" src={IMG02} alt="John Gibbs" /></div>
														</div>
													</div>
												</a>
												
											</div>
										</div>
									</div>
								</div>
                                <div className="col-xl-6 col-lg-12 d-flex">
								
								
									<div className="card flex-fill team-lead shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0 d-inline-block">Team Leads </h4>
											<Link to="employee-team" className="dash-card d-inline-block float-right mb-0 text-primary">Manage Team </Link>
										</div>
										<div className="card-body">
											<div className="media mb-3">
                                                <div className="e-avatar avatar-online mr-3"><img src={IMG04}
                                                 alt="Maria Cotton" className="img-fluid" /></div>
												<div className="media-body">
													<h6 className="m-0">Maria Cotton</h6>
													<p className="mb-0 ctm-text-sm">PHP</p>
												</div>
											</div>
											<hr />
											<div className="media mb-3">
												<div className="e-avatar avatar-online mr-3">
                                                    <img className="img-fluid" src={IMG02} alt="Linda Craver" /></div>
												<div className="media-body">
													<h6 className="m-0">Danny Ward</h6>
													<p className="mb-0 ctm-text-sm">Design</p>
												</div>
											</div>
											<hr />
											<div className="media mb-3">
												<div className="e-avatar avatar-online mr-3">
                                                    <img src={IMG04} alt="Linda Craver" className="img-fluid" /></div>
												<div className="media-body">
													<h6 className="m-0">Linda Craver</h6>
													<p className="mb-0 ctm-text-sm">IOS</p>
												</div>
											</div>
											<hr />
											<div className="media mb-3">
												<div className="e-avatar avatar-online mr-3">
                                                    <img className="img-fluid" src={IMG03} alt="Linda Craver" /></div>
												<div className="media-body">
													<h6 className="m-0">Jenni Sims</h6>
													<p className="mb-0 ctm-text-sm">Android</p>
												</div>
											</div>
											<hr />
											
											<div className="media">
												<div className="e-avatar avatar-offline mr-3">
                                                    <img className="img-fluid" src={IMG05} alt="Linda Craver" /></div>
												<div className="media-body">
													<h6 className="m-0">Stacey Linville</h6>
													<p className="mb-0 ctm-text-sm">Testing</p>
												</div>
											</div>
										</div>
									</div>
								</div>
                                <div className="col-xl-6 col-lg-12 d-flex">
								
									
									<div className="card recent-acti flex-fill shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0 d-inline-block">Recent Activities</h4>
											<a href='#0' className="d-inline-block float-right text-primary"><i className="lnr lnr-sync"></i></a>
										</div>
										<div className="card-body recent-activ admin-activ">
											<div className="recent-comment">
												<div className="notice-board">
													<div className="table-img">
														<div className="e-avatar mr-3">
                                                    <img className="img-fluid" src={IMG04} alt="Maria Cotton" /></div>
													</div>
													<div className="notice-body">
														<h6 className="mb-0">Lorem Ipsum dolor sit Amet.</h6>
														<span className="ctm-text-sm">Maria Cotton | 1 hour ago</span>
													</div>
												</div>
												<hr />
												<div className="notice-board">
													<div className="table-img">
														<div className="e-avatar mr-3">
                                                        <img className="img-fluid" src={IMG05} alt="Maria Cotton" /></div>
													</div>
													<div className="notice-body">
														<h6 className="mb-0">Lorem Ipsum dolor sit Amet.</h6>
														<span className="ctm-text-sm">Maria Cotton | 2 hour ago</span>
													</div>
												</div>
												<hr />
												<div className="notice-board">
													<div className="table-img">
														<div className="e-avatar mr-3">
                                                            <img className="img-fluid" src={IMG03} alt="Maria Cotton" /></div>
													</div>
													<div className="notice-body">
														<h6 className="mb-0">Lorem Ipsum dolor sit Amet.</h6>
														<span className="ctm-text-sm">Maria Cotton | 3 hour ago</span>
													</div>
												</div>
												<hr />
												<div className="notice-board">
													<div className="table-img">
														<div className="e-avatar mr-3">
                                                            <img className="img-fluid" src={IMG02} alt="Maria Cotton" /></div>
													</div>
													<div className="notice-body">
														<h6 className="mb-0">Lorem Ipsum dolor sit Amet.</h6>
														<span className="ctm-text-sm">Maria Cotton | 4 hour ago</span>
													</div>
												</div>
												<hr />
												<div className="notice-board">
													<div className="table-img">
														<div className="e-avatar mr-3">
                                                            <img className="img-fluid" src={IMG01} alt="Maria Cotton" /></div>
													</div>
													<div className="notice-body">
														<h6 className="mb-0">Lorem Ipsum dolor sit Amet.</h6>
														<span className="ctm-text-sm">Maria Cotton | 5 hour ago</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
                                <div className="col-xl-6 col-lg-12 d-flex">
								
									
									<div className="card flex-fill today-list shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0 d-inline-block">Your Upcoming Leave</h4>
											<Link to="leave" className="d-inline-block float-right text-primary"><i className="fa fa-suitcase"></i></Link>
										</div>
										<div className="card-body recent-activ">
											<div className="recent-comment">
												<a href='#0' className="dash-card text-danger">
													<div className="dash-card-container">
														<div className="dash-card-icon">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Mon, 16 Dec 2019</h6>
														</div>
													</div>
												</a>
												<hr />
												<a href='#0' className="dash-card text-primary">
													<div className="dash-card-container">
														<div className="dash-card-icon">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Mon, 23 Dec 2019</h6>
														</div>
													</div>
												</a>
												
												<hr />
												<a href='#0' className="dash-card text-primary">
													<div className="dash-card-container">
														<div className="dash-card-icon">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Wed, 25 Dec 2019</h6>
														</div>
													</div>
												</a>
												<hr />
												<a href='#0' className="dash-card text-primary">
													<div className="dash-card-container">
														<div className="dash-card-icon">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Fri, 27 Dec 2019</h6>
														</div>
													</div>
												</a>
												<hr />
												<a href='#0' className="dash-card text-primary">
													<div className="dash-card-container">
														<div className="dash-card-icon">
															<i className="fa fa-suitcase"></i>
														</div>
														<div className="dash-card-content">
															<h6 className="mb-0">Tue, 31 Dec 2019</h6>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
    
      )
    }
}

export default EmployeeDashboard;