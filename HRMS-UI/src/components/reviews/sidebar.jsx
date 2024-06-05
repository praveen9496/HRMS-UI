import React, { Component} from "react";
import { Link, NavLink} from 'react-router-dom';

class Sidebar extends Component{
     constructor(props){
         super(props);
     }

    render(){

      
        return(
         
            <aside className="sidebar sidebar-user" >
                          {this.props.data === '/reviews/create-review' ?   
                                    <div className="card ctm-border-radius shadow-sm">
                                        <div className="card-body py-4">
                                            <div className="row">
                                                <div className="col-md-12 mr-auto text-left">
                                                    <div className="custom-search input-group">
                                                        <div className="custom-breadcrumb">
                                                            <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                                                                <li className="breadcrumb-item d-inline-block"><Link to="admin" className="text-dark">Home</Link></li>
                                                                <li className="breadcrumb-item d-inline-block active">Reviews</li>
                                                            </ol>
                                                            <h4 className="text-dark">Create Reviews</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                         </div> :
                                          <>
                                         <div className="card ctm-border-radius shadow-sm">
                                        <div className="card-body py-4">
                                        <div className="row">
                                        <div className="col-md-12 mr-auto text-left">
                                            <div className="custom-search input-group">
                                                <div className="custom-breadcrumb">
                                                    <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                                                        <li className="breadcrumb-item d-inline-block"><Link to="admin" className="text-dark">Home</Link></li>
                                                        <li className="breadcrumb-item d-inline-block active">Reviews</li>
                                                    </ol>
                                                    <h4 className="text-dark">Reviews</h4>
                                                </div>
                                            </div>
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                            <div className="card ctm-border-radius shadow-sm">
                                                <div className="card-body">
                                                    <a href="create-review" className="btn btn-theme button-1 ctm-border-radius text-white btn-block"><span><i className="fa fa-plus"></i></span> Create Review</a>
                                                </div>
                                            </div>
                                            <div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                                                <div className="card-body">
                                                    <div className="flex-column list-group" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                        <NavLink to="overview-reviews" className="list-group-item text-center button-6"  activeClassName="active">Overview</NavLink>
                                                        <NavLink to="review-type" className="list-group-item text-center button-6">Review Types</NavLink>
                                                    </div>
                                                </div>
                                            </div> 
                                            </>
                                    }
                                </aside>
       
        );

    }
}

export default Sidebar;