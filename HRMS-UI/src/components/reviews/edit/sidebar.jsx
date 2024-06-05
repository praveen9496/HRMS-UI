import React, { Component} from "react";


class Sidebar extends Component{
 

    render(){
        return(
         
            <aside className="sidebar sidebar-user" >
                                    <div className="card ctm-border-radius shadow-sm">
									<div className="card-body py-4">
										<div className="row">
											<div className="col-md-12 mr-auto text-left">
												<div className="custom-search input-group">
													<div className="custom-breadcrumb">
														<ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
															<li className="breadcrumb-item d-inline-block"><a href="/admin" className="text-dark">Home</a></li>
															<li className="breadcrumb-item d-inline-block active">Reviews</li>
														</ol>
														<h4 className="text-dark">Edit Review</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
          </aside>
       
        );

    }
}

export default Sidebar;