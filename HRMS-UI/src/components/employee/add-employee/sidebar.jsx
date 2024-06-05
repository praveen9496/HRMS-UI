import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
	
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
							<h4 className="text-dark">Add Person</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="card ctm-border-radius shadow-sm">
		<div className="card-header">
			<h4 className="card-title mb-0">Details Content</h4>
		</div>
		<div className="card-body">
			<div id="list-example" className="list-group border-none">
				<a className="list-group-item list-group-item-action border-none" href="#0">Basic</a>
				<a className="list-group-item list-group-item-action border-none" href="#0">Employment</a>
				<a className="list-group-item list-group-item-action border-none" href="#0">Teams & Offices</a>
				<a className="list-group-item list-group-item-action border-none" href="#0">Salary</a>
			</div>
		</div>
	</div>
</aside>
  );
};
 
export default Sidebar;