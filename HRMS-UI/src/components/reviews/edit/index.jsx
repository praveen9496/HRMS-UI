import React, { Component } from "react";
import Sidebar from './sidebar.jsx';


class Editreviews extends Component {

        render(){
      
        return(
            
            <div className="page-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
							 <Sidebar />
							</div>                       
			<div className="col-xl-9 col-lg-8  col-md-12">
				<div className="card shadow-sm ctm-border-radius">
					<div className="card-body align-center">
						<div className="tab-content" id="v-pills-tabContent">
						
							
							<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"></div>
								<div className="employee-office-table">
									<div className="table-responsive">
                                    <form>
								<div className="card ctm-border-radius shadow-sm">
									<div className="card-header">
										<h4 className="card-title mb-0 d-inline-block">Setup</h4>
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-12 form-group">
												<input type="text" className="form-control" placeholder="Review Name" defaultValue="Monthly Review" />
											</div>
											
											<div className="col form-group">
												<input type="text" className="form-control datetimepicker" placeholder="Review Begins On" />
											</div>
											<div className="col form-group">
												<input type="text" className="form-control datetimepicker" placeholder="Reviews Completion Date" />
											</div>
											<div className="col-md-12 form-group mb-0">
												<select className="form-control select">
													<option>Reviews Begin On </option>
													<option value="1" selected>Every 3 Months</option>
													<option value="2">Every 6 Months</option>
													<option value="3">Every 12 Months</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div className="card ctm-border-radius shadow-sm">
									<div className="card-header">
										<h4 className="card-title mb-0 d-inline-block">Participants</h4>
									</div>		
									<div className="card-body">			
										<div className="row">
											<div className="col-md-12 form-group">
												<select className="form-control select">
													<option>Select Reviewed Employees </option>
													<option value="1" selected>Everyone</option>
													<option value="2">Maria Cotton</option>
													<option value="3">Danny Ward</option>
													<option value="4">Linda Craver</option>
													<option value="5">Jenni Sims</option>
													<option value="6">John Gibbs</option>
												</select>
											</div>
											<div className="col-md-12 form-group mb-0">
												<select className="form-control select">
													<option>Select Reviewer </option>
													<option value="7">Admin</option>
													<option value="1" selected>Richard Wilson</option>
													<option value="2">Maria Cotton</option>
													<option value="3">Danny Ward</option>
													<option value="4">Linda Craver</option>
													<option value="5">Jenni Sims</option>
													<option value="6">John Gibbs</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div className="card ctm-border-radius shadow-sm">
									<div className="card-header">
										<h4 className="card-title mb-0 d-inline-block">Form</h4>
									</div>		
									<div className="card-body">			
										<div className="row">
											<div className="col-md-12 form-group">
												<textarea className="form-control" placeholder="Explain What This Review Is For, How Its Going To Be Run, How Everyone Can Prepare."></textarea>
											</div>
											<div className="col-md-12 form-group">
												<textarea className="form-control" placeholder="Add Questions For The People Being Reviewed."></textarea>
												<a href="#0" className="text-primary">Add a Question</a><span className="float-right text-danger">Delete</span>
											</div>
											
											<div className="col-md-12 form-group mb-0">
												<textarea className="form-control" placeholder="Add Questions For Their Reviewers."></textarea>
												<a href="#0" className="text-primary">Add a Question</a><span className="float-right text-danger">Delete</span>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
								<div className="col-12">
									<div className="submit-section text-center btn-add">
										<button className="btn btn-theme button-1 text-white ctm-border-radius">Save</button>
										<button className="btn btn-danger text-white ctm-border-radius">Cancel</button>
									</div>
								</div>
							</div>
							</form>		
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
    
  export default Editreviews;