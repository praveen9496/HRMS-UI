import React, { Component } from "react";
import Sidebar from './sidebar.jsx';
import Tableoverview from './tableoverview';


class Reviewsoverview extends Component {
	constructor(props){
		super(props);
		this.state = {
	
        };
        
    }


        render(){
			
	console.log()
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
													<Tableoverview />
													
												</div>
												</div> 
												{/* tab1 */}
										</div>
									</div>
								</div>
											
							</div>

			 </div>
			</div>
	     </div>
                                               
            );
        }

    }
    
  export default Reviewsoverview;