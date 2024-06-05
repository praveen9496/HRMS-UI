import React, { Component } from "react";
import Select from 'react-select'
import Sidebar from '../sidebar';
//

import IMG01 from '../../../assets/images/plaster.svg';
import IMG02 from '../../../assets/images/desk-lamp.svg';

class TimeOff extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  tab: null,
		}
	}		
	handletab = (id) => {
		this.setState({
		  tab: id
		});
      };
      
componentDidMount(){
    this.setState({
        tab: 'upcoming'
    })
}
        render(){
            const options = [
                { value: 'Apply Leave', label: 'Apply Leave' },
                { value: 'Working from home', label: 'Working from home' },
                { value: 'Sick Leave', label: 'Sick Leave' },
                { value: 'Annual Leave', label: 'Annual Leave' },
                { value: 'Noraml Leave', label: 'Normal Leave' }
              ]
              const option = [
                { value: 'Choose Approver', label: 'Choose Approver' },
                { value: 'Admin', label: 'Admin' },
                { value: 'Richard', label: 'Richard' }
             
              ]
        return(
            
            <div className="page-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
							 <Sidebar />
							</div>                       
			           <div className="col-xl-9 col-lg-8  col-md-12">
                          <div className="row">
								<div className="col-xl-6 col-lg-12 col-md-7 col-12 d-flex">
                                   <div className="card ctm-border-radius shadow-sm flex-fill">
										<div className="card-header">
											<h4 className="card-title mb-0">Holidays List </h4>
										</div>
                                        <div className="card-body">
											<div className="row">
												<div className="col-md-7 col-sm-6">
													<ul className="nav nav-pills" id="pills-tab" role="tablist">
														<li className="nav-item">
															<a href="#0" className={`nav-link history-btn ${this.state.tab === 'upcoming' ? 'active' : '' }`} onClick={()=>this.handletab('upcoming')}>Upcoming</a>
														</li>
														<li className="nav-item">
															<a href="#0" className={`nav-link history-btn ${this.state.tab === 'history' ? 'active' : '' }`} onClick={()=>this.handletab('history')}>History</a>
														</li>
													</ul>
												</div>
												<div className="col-md-5 col-sm-6">
													
													
                                                            <Select className="select" options={options} />
													
												</div>
												<div className="col-12">
													<div className="tab-content py-0" id="pills-tabContent">
										<div className= {`tab-pane py-0 ${this.state.tab === 'upcoming' ? 'active' : 'hide' }`}>
															<div className="table-responsive table-hover">
																<table className="table">
																	<thead>
																		<tr>
																			<th>#</th>
																			<th>Date</th>
																			<th>Leave Reason</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>1</td>
																			<td>Mon, 26 Aug 2019</td>
																			<td>Bank Holiday</td>
																		</tr>
																		<tr>
																			<td>2</td>
																			<td>Wed, 25 Dec 2019</td>
																			<td>Christmas Day</td>
																		</tr>
																		<tr>
																			<td>3</td>
																			<td>Thu, 26 Dec 2019</td>
																			<td>Bank Holiday</td>
																		</tr>
																		<tr>
																			<td>4</td>
																			<td>Wed, 1 Jan 2020</td>
																			<td>Bank Holiday</td>
																		</tr>
																		<tr>
																			<td>5</td>
																			<td>Mon, 6 Jan 2020</td>
																			<td>Epiphany</td>
																		</tr>
																		<tr>
																			<td>6</td>
																			<td>Fri, 17 Jan 2020</td>
																			<td>Lee-Jackson Day</td>
																		</tr>
																		<tr>
																			<td>7</td>
																			<td>Mon, 9 Mar 2020</td>
																			<td>Presidents' Day</td>
																		</tr>
																		<tr>
																			<td>8</td>
																			<td>Wed, 1 Mar 2020</td>
																			<td>Holi</td>
																		</tr>
																		<tr>
																			<td>9</td>
																			<td>Sat, 4 Jul 2020</td>
																			<td>Independence Day</td>
																		</tr>
																		<tr>
																			<td>10</td>
																			<td>Mon, 7 Sep 2020</td>
																			<td>Labor Day</td>
																		</tr>
																		<tr>
																			<td>11</td>
																			<td>Mon, 11 Nov 2020</td>
																			<td>Veterans Day</td>
																		</tr>
																		<tr>
																			<td>12</td>
																			<td>Fri, 25 Dec 2020</td>
																			<td>Christmas Day</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
														<div className={`tab-pane py-0 ${this.state.tab === 'history' ? 'active' : 'hide' }`}>
															<div className="table-responsive table-hover">
																<table className="table">
																	<thead>
																		<tr>
																			<th>#</th>
																			<th>Date</th>
																			<th>Leave Reason</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>1</td>
																			<td>Tue, 1 Jan 2019</td>
																			<td>New Year's Day</td>
																		</tr>
																		<tr>
																			<td>2</td>
																			<td>Mon, 21 Jan 2019</td>
																			<td>Martin Luther King Jr. Day</td>
																		</tr>
																		<tr>
																			<td>3</td>
																			<td>Mon, 18 Feb 2019</td>
																			<td>Presidents' Day</td>
																		</tr>
																		<tr>
																			<td>4</td>
																			<td>Mon, 14 Oct 2019</td>
																			<td>Columbus Day</td>
																		</tr>
																		<tr>
																			<td>5</td>
																			<td>Mon, 11 Nov 2019</td>
																			<td>Veterans Day</td>
																		</tr>
																		<tr>
																			<td>6</td>
																			<td>Fri, 17 Jan 2019</td>
																			<td>Lee-Jackson Day</td>
																		</tr>
																		<tr>
																			<td>7</td>
																			<td>Mon, 18 Feb 2019</td>
																			<td>Presidents' Day</td>
																		</tr>
																		<tr>
																			<td>8</td>
																			<td>Thu, 21 Mar 2019</td>
																			<td>Holi</td>
																		</tr>
																		<tr>
																			<td>9</td>
																			<td>Thu, 4 Jul 2019</td>
																			<td>Independence Day</td>
																		</tr>
																		<tr>
																			<td>11</td>
																			<td>Mon, 11 Nov 2019</td>
																			<td>Veterans Day</td>
																		</tr>
																		<tr>
																			<td>10</td>
																			<td>Thu, 28 Nov 2019</td>
																			<td>Thanksgiving Day</td>
																		</tr>
																		<tr>
																			<td>12</td>
																			<td>Wed, 25 Dec 2019</td>
																			<td>Christmas Day</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
                                        {/* card*/}
                                        </div>
                                        {/*card*/}
                                 </div>
                                 {/*col*/}
                                 <div className="col-xl-6 col-lg-12 col-md-5 col-12 d-flex">
									<div className="card flex-fill ctm-border-radius shadow-sm">
										<div className="card-header">
											<h4 className="card-title mb-0">Leave Off Details</h4>
										</div>
										<div className="card-body">
											<h5 className="card-title">Year</h5>
											<p className="mb-0">01 January – 31 December</p>
											<hr />
											<h5 className="card-title">Days Used</h5>
											<div className="progress">
												<div className="progress-bar bg-primary w-25"> 5 days</div>
											</div>
											<hr />
											<h5 className="card-title">Days</h5>
											<p>5 Used</p>
											<hr />
											<h5 className="card-title">Non Deductible Days</h5>
											<p className="text-theme btn btn-theme ctm-border-radius btn-sm text-white d-inline-block">5 Approved</p>
											<p className="text-theme btn btn-theme ctm-border-radius btn-sm text-white d-inline-block">7 Pending</p>
											<hr />
											<h5 className="card-title">Attendance</h5>
											<p className="mb-3"><img className="mr-2 leave-img img-fluid" src={IMG01} alt="Sick Leave" /> 3 Sick Days</p>
											<p className="mb-0"><img className="mr-2 leave-img img-fluid" src={IMG02} alt="Working from Home" />2 Working from Home</p>
											<hr />
											<h4 className="card-title d-inline-block">Time Off Approvers</h4>
											<div className="form-row form-group">
												<div className="col-sm-12">
                                                  <Select options={option} />
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
			{/*row*/}

     </div>
                                               
            )
        }

    }
    
  export default TimeOff;