import React, { Component } from "react";
import Sidebar from "./sidebar";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Select from 'react-select';
import DatePicker from "react-datepicker";
//

class Addemployee extends Component {

  render() {
    const options = [
      { value: 'Country of Employment', label: 'Country of Employment' },
      { value: 'country1', label: 'country1' },
      { value: 'country2', label: 'country2' },
      { value: 'country3', label: 'country3' }
    ];
    const teams = [
      { value: 'Teams', label: 'Teams' },
      { value: 'PHP', label: 'PHP' },
      { value: 'Android', label: 'Android' },
      ];
      const linemanager = [
        { value: 'Line Manager', label: 'Line Manager' },
        { value: 'Robert wilson', label: 'Robert Wilson' },
        { value: 'Maria', label: 'Maria' },
        ];
        const officename = [
          { value: 'Office Name', label: 'Office Name' },
          { value: 'Focus Technology', label: 'Focus Technology' },
        ];
        const currency = [
          { value: '$', label: '$' },
        
        ];
        const frequency = [
          { value: 'Annualy', label: 'Annualy' },
          { value: 'Monthly', label: 'Monthly' },
          { value: 'Weekly', label: 'Weekly' },
          { value: 'Daily', label: 'Daily' },
        ];
       
    return (
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
              <Sidebar />
            </div>
            <div className="col-xl-9 col-lg-8  col-md-12">
              <Accordion>
                <Card>
                    <Accordion.Toggle variant="link" eventKey="0" as={Card.Header}>
                   
                        <h4 className="cursor-pointer mb-0">
                          <a
                            className=" coll-arrow d-block text-dark"
                            href="#0"
                            
                          >
                            Basic Details
                            <br />
                            <span className="ctm-text-sm">
                              Organized and secure.
                            </span>
                          </a>
                        </h4>
                   
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div
                        id="basic-one"
                        className="collapse show ctm-padding"
                        aria-labelledby="basic1"
                        data-parent="#accordion-details"
                      >
                        <form>
                          <div className="row">
                            <div className="col form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                              />
                            </div>
                            <div className="col form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                              />
                            </div>
                            <div className="col-12 form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                              />
                            </div>
                            <div className="col-md-12">
                              <div className=" custom-control custom-checkbox mb-0">
                                <input
                                  type="checkbox"
                                  id="send-email"
                                  name="send-email"
                                  className="custom-control-input"
                                />
                                <label
                                  className="mb-0 custom-control-label"
                                  htmlFor="send-email"
                                >
                                  Send them an invite email so they can log in
                                  immediately
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  
                    <Accordion.Toggle variant="link" eventKey="1" as={Card.Header}>
                      <h4 className="cursor-pointer mb-0">
                        <a
                          className="coll-arrow d-block text-dark"
                          href="#0"
                          data-toggle="collapse"
                         
                        >
                          Employment Details
                          <br />
                          <span className="ctm-text-sm">
                            Let everyone know the essentials so they're fully
                            prepared.
                          </span>
                        </a>
                      </h4>
                    </Accordion.Toggle>
                 
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <form>
                        <div className="row">
                          <div className="col-md-12 form-group">
                          <Select options={options} className="form-control select"/>
                          </div>
                          <div className="col-md-12 form-group">
                            <div className="cal-icon">
                              <input
                                className="form-control datetimepicker cal-icon-input"
                                type="text"
                                placeholder="Start Date"
                              />
                            </div>
                          </div>
                          <div className="col-12 form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Job Title"
                            />
                          </div>
                          <div className="col-12 form-group mb-0">
                            <p className="mb-2">Employment Type</p>
                            <div className="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="Permanent"
                                name="Permanent"
                                checked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="Permanent"
                              >
                                Permanent
                              </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="Freelancer"
                                name="Permanent"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="Freelancer"
                              >
                                Freelancer
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
             
                    <Accordion.Toggle variant="link" eventKey="0" as={Card.Header}>
                      <h4 className="cursor-pointer mb-0">
                        <a
                          className="coll-arrow d-block text-dark"
                          href="#0"
                          data-toggle="collapse"
                         
                        >
                          Teams and Offices
                          <br />
                          <span className="ctm-text-sm">
                            Keep things tidy — and save time setting approvers
                            and public holidays.
                          </span>
                        </a>
                      </h4>
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      {" "}
                      <div className="row">
                        <div className="col-md-12 form-group">
                        <Select options={teams} className="form-control select"/>
                        </div>
                        <div className="col-md-12 form-group">
                        <Select options={linemanager} className="form-control select"/>
                        </div>
                        <div className="col-12 form-group mb-0">
                          <Select options={officename} className="form-control select"/>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
               
                    <Accordion.Toggle eventKey="4" as={Card.Header}>
                      <h4 className="cursor-pointer mb-0">
                        <a
                          className="coll-arrow d-block text-dark"
                          href="#0"
                          data-toggle="collapse"
                         
                        >
                          Salary Details
                          <br />
                          <span className="ctm-text-sm">
                            Stored securely, only visible to Super Admins,
                            Payroll Admins, and themselves.
                          </span>
                        </a>
                      </h4>
                    </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-12 form-group">
                        <Select options={currency} className="form-control select"/>
                        </div>
                        <div className="col-md-12 form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                          />
                        </div>
                        <div className="col-12 form-group">
                        <Select options={frequency} className="form-control select"/>
                        </div>
                        <div className="col-md-12 form-group mb-0">
       
                          <div className="cal-icon">
                            <input
                              className="form-control datetimepicker cal-icon-input"
                              type="text"
                              placeholder="Start Date"
                            />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <div className="row">
								<div className="col-12">
									<div className="submit-section text-center btn-add">
										<button className="btn btn-theme text-white ctm-border-radius button-1">Add Team Member</button>
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

export default Addemployee;
