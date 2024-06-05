import React, { Component } from "react";
import Sidebar from '../sidebar.jsx';

class Createreview extends Component {
	constructor(props){
		super(props);
		this.state = {
			url: null
        };
        
    }

componentDidMount(){
	this.setState({
		url: this.props.location.pathname
	})
}
        render(){
		
        return(
            
            <div className="page-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
							 <Sidebar data={this.state.url}/>
							</div>                       
							<div className="col-xl-9 col-lg-8  col-md-12">
							<form>
								<div className="card ctm-border-radius shadow-sm">
									<div className="card-header">
										<h4 className="card-title mb-0 d-inline-block">Setup</h4>
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-12 form-group">
												<input type="text" className="form-control" placeholder="Review Name" />
											</div>
											
											<div className="col form-group">
												<input type="text" className="form-control datetimepicker" placeholder="Review Begins On" /> 
											</div>
											<div className="col form-group">
												<input type="text" className="form-control datetimepicker" placeholder="Reviews Completion Date" />
											</div>
											<div className="col-md-12 form-group mb-0">
												<select className="form-control select">
													<option selected>Review Frequency </option>
													<option value="1">Every 3 Months</option>
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
													<option selected>Select Reviewed Employees </option>
													<option value="1">Everyone</option>
													<option value="2">Maria Cotton</option>
													<option value="3">Danny Ward</option>
													<option value="4">Linda Craver</option>
													<option value="5">Jenni Sims</option>
													<option value="6">John Gibbs</option>
												</select>
											</div>
											<div className="col-md-12 form-group mb-0">
												<select className="form-control select">
													<option selected>Select Reviewer </option>
													<option value="1">Admin</option>
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
												<textarea className="form-control" placeholder="Explain What This Review Is To, How It's Going To Be Run, How Everyone Can Prepare."></textarea>
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
										<button className="btn btn-theme text-white ctm-border-radius button-1">Save</button>
										<button className="btn btn-danger text-white ctm-border-radius">Cancel</button>
									</div>
								</div>
							</div>
							</form>		
							</div>

			 </div>
			</div>
	     </div>
                                               
            );
        }

    }
    
  export default Createreview;