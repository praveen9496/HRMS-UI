import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar.jsx';
//
import IMG01 from '../../../assets/images/img-2.jpg';
import IMG02 from '../../../assets/images/img-8.jpg';
import IMG03 from '../../../assets/images/img-8.jpg';

class ManageLeadership extends Component {
    render(){
        return(
            <div className="page-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                                <Sidebar />
                         </div>
                        <div className="col-xl-9 col-lg-8  col-md-12">
                        <div className="row">
								<div className="col-xl-6 col-lg-6 col-md-6 d-flex">
									<div className="card ctm-border-radius shadow-sm flex-fill">
										<div className="card-header">
											<h4 className="card-title mb-0">Line Manager</h4>
										</div>
										<div className="card-body">
											<p className="card-text">They can see and do everything – best not to have many with this role.</p>
											<div className="mt-2">
												<span className="avatar" data-toggle="tooltip" data-placement="top" title="Richard Wilson">
                                                    <img src={IMG01} alt="Richard Wilson" className="img-fluid" /></span>
												<Link to="line-manager" className="btn btn-theme button-1 ctm-border-radius text-white float-right text-white">View Permissions</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 d-flex">
									<div className="card ctm-border-radius shadow-sm flex-fill">
										<div className="card-header">
											<h4 className="card-title mb-0"> Team Lead</h4>
										</div>
										<div className="card-body">
											<p className="card-text">Admin help sort stuff, but have less access to confidential information like salaries.</p>
											<div className="mt-2">
												<span className="avatar" data-toggle="tooltip" data-placement="top" title="Richard Wilson">
                                                    <img src={IMG02} alt="Richard Wilson" className="img-fluid" /></span>
												<Link to="team-lead" className="btn btn-theme button-1 ctm-border-radius text-white float-right text-white">View Permissions</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 d-flex">
									<div className="card ctm-border-radius shadow-sm flex-fill">
										<div className="card-header">
											<h4 className="card-title mb-0">Time Off Approver</h4>
										</div>
										<div className="card-body">
											<p className="card-text">They sort out your payroll and have access to everyone's salary information.</p>
											<div className="mt-2">
												<span className="avatar" data-toggle="tooltip" data-placement="top" title="Richard Wilson">
                                                    <img src={IMG03} alt="Richard Wilson" className="img-fluid" /></span>
												<Link to="time-off-approver" className="btn btn-theme button-1 ctm-border-radius text-white float-right text-white">View Permissions</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
                            {/*row*/}
                        </div>
                     </div> 
                 </div>
                  
        );
    }
}

export default ManageLeadership;