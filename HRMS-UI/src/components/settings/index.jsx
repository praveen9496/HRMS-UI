import React, { Component } from "react";
import Sidebar from './sidebar';

class Setting extends Component {
    render(){
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
									<div className="card ctm-border-radius shadow-sm company-logo flex-fill">
										<div className="card-header">
											<h4 className="card-title mb-0">Company Logo</h4>
										</div>
										<div className="card-body">
											<form>
												<div className="row">
													<div className="col-12">
														<div className="avatar-upload">
															<div className="avatar-edit">
																<input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
																<label htmlFor="imageUpload"></label>
															</div>
															<div className="avatar-preview">
																<div id="imagePreview">
																</div>
															</div>
														</div>
													</div>
													
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className="col-md-6 d-flex">
									<div className="card ctm-border-radius shadow-sm flex-fill">
										<div className="card-header">
											<h4 className="card-title mb-0">
												Your Company
											</h4>
										</div>
										<div className="card-body">
											<form>
												<div className="form-group">
													<label>Company Name</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>Company Url</label>
													<input type="text" className="form-control" />
												</div>
												<div className="text-center">
													<a href="#0" className="btn btn-theme button-1 ctm-border-radius text-white">Save Changes</a>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
                        </div>
                </div>
            </ div>
         </div>       
                        
        );
    }
}

export default Setting;