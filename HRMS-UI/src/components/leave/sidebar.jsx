import React from "react";
import { Link } from 'react-router-dom';
import IMG01 from '../../assets/images/img-5.jpg';
import IMG02 from '../../assets/images/img-4.jpg';
import IMG03 from '../../assets/images/img-3.jpg';
import IMG04 from '../../assets/images/img-2.jpg';


const Sidebar=() => {

    return(
        <aside className="sidebar sidebar-user">
							
								<div className="card ctm-border-radius shadow-sm">
									<div className="card-body py-4">
										<div className="row">
											<div className="col-md-12 mr-auto text-left">
												<div className="custom-search input-group">
													<div className="custom-breadcrumb">
														<ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
															<li className="breadcrumb-item d-inline-block">
																<Link to="dashboard" className="text-dark">Home</Link></li>
															<li className="breadcrumb-item d-inline-block active">Leave</li>
														</ol>
														<h4 className="text-dark">Leave</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card ctm-border-radius shadow-sm">
									<div className="card-header">
										<div className="d-inline-block">
											<h4 className="card-title mb-0">Focus Technologies</h4>
											<p className="mb-0 ctm-text-sm">Head Office</p>
										</div>
									</div>
									<div className="card-body">
										<h4 className="card-title">Members</h4>
										<Link to="employment"><span className="avatar" data-toggle="tooltip"
										 data-placement="top" title="Danny Ward">
											 <img alt="avatar" src={IMG01} className="img-fluid" /></span></Link>
										<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top"
										 title="Linda Craver">
											 <img className="img-fluid" alt="avatar" src={IMG02} />
											 </span></Link>
										<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top"
										 title="Jenni Sims"><img className="img-fluid" alt="avatar" src={IMG03} /></span></Link>
										<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top" 
										title="Maria Cotton"><img alt="avatar" src={IMG04} className="img-fluid" /></span></Link>
										<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top"
										 title="John Gibbs"><img className="img-fluid" alt="avatar" src={IMG01} /></span></Link>
										<Link to="employment"><span className="avatar" data-toggle="tooltip" data-placement="top"
										 title="Richard Wilson"><img className="img-fluid" alt="avatar" src={IMG02} /></span></Link>
									</div>
								</div>
								<div className="card shadow-sm ctm-border-radius">
									<div className="card-body">
										<span className="avatar" data-toggle="tooltip" data-placement="top" title="Jenni Sims">
											<img src={IMG02} alt="Jenni Sims" className="img-fluid"/></span><span className="ml-4">Jenni Sims is working from home today.</span>
									</div>
								</div>
								<div className="card shadow-sm ctm-border-radius">
									<div className="card-body">
										<span className="avatar" data-toggle="tooltip" data-placement="top" title="John Gibbs">
											<img className="img-fluid" src={IMG03} alt="Jenni Sims" />
											</span><span className="ml-4">
										John Gibbs is away today.</span>
									</div>
								</div>
							</aside>
					
    );

}

export default Sidebar;