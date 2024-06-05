import React, { Component } from "react";
import Sidebar from "./sidebar";
import { Modal } from "react-bootstrap";
import "antd/dist/antd.css";
import { Table } from "antd";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          Name: "Leave & Attendance Policy",
          Date: "05 Jan 2019",
          Size: "20MB",
        },
        { id: 2, Name: "Dress Code Policy", Date: "20 Jan 2019", Size: "15MB" },
        { id: 3, Name: "ID Card Policy", Date: "03 Aug 2019", Size: "10MB" },
        {
          id: 4,
          Name: "Work From Home Policy",
          Date: "05 Sep 2019",
          Size: "13MB",
        },
      ],
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (id) => {
    this.setState({
      show: id,
    });
  };
  render() {
    const { data } = this.state;
    const columns = [
      {
        title: "Type",
        render: (text, record) => (
          <i
            className="fa fa-file-pdf-o"
            data-toggle="tooltip"
            data-placement="top"
            title="PDF"
            aria-hidden="true"
          ></i>
        ),
      },
      {
        title: "Name",
        dataIndex: "Name",
      },
      {
        title: "Date",
        dataIndex: "Date",
      },
      {
        title: "Size",
        dataIndex: "Size",
      },
      {
        title: "Action",
        render: () => (
          <>
            <a
              href="#0"
              className="btn btn-sm btn-outline-danger"
              onClick={() => this.handleShow("delete")}
            >
              <span className="lnr lnr-trash"></span> Delete
            </a>
          </>
        ),
      },
    ];
    return (
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
              <Sidebar />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="row">
                <div className="col-xl-7 col-lg-12 col-md-7 d-flex">
                  <div className="card ctm-border-radius shadow-sm flex-fill">
                    <div className="card-header">
                      <h4 className="card-title mb-0">
                        Focus Technologies
                        <a href="#0" className="float-right text-primary">
                          <i
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            <span className="text-primary">Register Number : </span>
                            FT0070
                          </p>
                          <p>
                            <span className="text-primary">
                              Incorporation Date :{" "}
                            </span>
                            07 May 2000
                          </p>
                          <p>
                            <span className="text-primary">VAT Number : </span>
                            VT0070
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p>
                            <span className="text-primary">Address:</span>
                            <br />
                            Santiago de Surco
                            <br /> Av.Caminos del Inca 1325
                            <br />
                            United States
                          </p>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        <button
                          className="btn btn-theme text-white ctm-border-radius button-1"
                          onClick={() => this.handleShow("company")}
                        >
                          Add Company Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-xl-5 col-lg-12 col-md-5 d-flex">
                  <div className="card ctm-border-radius shadow-sm flex-fill">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Contact</h4>
                    </div>
                    <div className="card-body">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Contact"
                          defaultValue="07448503267"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-theme text-white"
                            type="button"
                          >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="focustechnology.com"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-theme text-white"
                            type="button"
                          >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                      <div className="input-group mb-0">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="hr@focustechnology.com"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-theme text-white"
                            type="button"
                          >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-md-12">
                  <div className="company-doc">
                    <div className="card ctm-border-radius shadow-sm">
                      <div className="card-header">
                        <h4 className="card-title d-inline-block mb-0">
                          Documents
                        </h4>
                        <a
                          href="#0"
                          className="float-right add-doc text-primary"
                          onClick={() => this.handleShow("add")}
                        >
                          Add Document
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="employee-office-table">
                          <div className="table-responsive">
                            <Table
                              className="table-striped"
                              style={{ overflowX: "auto" }}
                              columns={columns}
                              // bordered
                              dataSource={data}
                              rowKey={(record) => record.id}
                              pagination={false}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col */}
              </div>
            </div>
          </div>
        </div>
        {/* Modal delete*/}
        <Modal
          show={this.state.show === "delete"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <h4 className="modal-title mb-4">Are You Sure Want to Delete?</h4>
          </Modal.Header>
          <Modal.Body>
            <button
              type="button"
              className="btn btn-danger text-white text-center ctm-border-radius mb-2 mr-3"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-theme text-white text-center ctm-border-radius mb-2 button-1 button-1"
              data-dismiss="modal"
            >
              Delete
            </button>
          </Modal.Body>
        </Modal>
        {/* Modal add document */}
        <Modal
          show={this.state.show === "add"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <h4 className="modal-title mb-3">Upload Document</h4>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <input type="file" className="form-control" />
            </div>
            <button
              type="button"
              className="btn btn-danger text-white ctm-border-radius float-right ml-3"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-theme ctm-border-radius text-white float-right button-1"
            >
              Upload
            </button>
          </Modal.Body>
        </Modal>
        {/* add company */}
        <Modal
          show={this.state.show === "company"}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <h4 className="modal-title mb-3">Add Company Information</h4>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Company Name"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Registered Company Number"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input
                  className="form-control datetimepicker"
                  type="text"
                  placeholder="Incorporation Date"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Vat Number"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address Line1"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address Line2"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input className="form-control" type="text" placeholder="City" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input className="form-control" type="text" placeholder="Country" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Post-Code"
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-danger text-white ctm-border-radius float-right ml-3"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-theme ctm-border-radius text-white float-right button-1"
            >
              Add
            </button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Company;
