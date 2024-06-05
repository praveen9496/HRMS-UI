import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Sidebar = ({url}) => {
	
  return (

      	<aside className="sidebar sidebar-user">
								<div className="card ctm-border-radius shadow-sm">
									<div className="card-body py-4">
										<div className="row">
											<div className="col-md-12 mr-auto text-left">
												<div className="custom-search input-group">
													<div className="custom-breadcrumb">
														<ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
															<li className="breadcrumb-item d-inline-block"><Link to="admin" className="text-dark">Home</Link></li>
															<li className="breadcrumb-item d-inline-block active">Employees</li>
														</ol>
														<h4 className="text-dark">Employees</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							
								<div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
									<div className="card-body">
									<NavLink to="employees-all" className="list-group-item text-center button-6"  activeClassName="active">All</NavLink>
                                      <NavLink to="employee-team" className="list-group-item text-center button-6">Teams</NavLink>
									  <NavLink to="employee-office" className="list-group-item text-center button-6">Offices</NavLink>
									</div>
								</div>
							</aside>
  );
};
 
export default Sidebar;