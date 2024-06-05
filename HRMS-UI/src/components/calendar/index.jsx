import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CalendarPage extends Component {
  state = {
    startDate: new Date(),
    show: null,
    iseditdelete: false,
    addneweventobj: null,
    isnewevent: false,
    event_title: "",
    category_color: '',
    weekendsVisible: true,
    currentEvents: [],
    defaultEvents: []
  }

  componentDidMount() {
    // Fetch holidays from the API
    fetch('http://hrms-eapi.us-e2.cloudhub.io/api/Leave/holidays')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched holidays:', data); // Log fetched data for debugging
       
        // Map fetched holidays to FullCalendar event format
        const holidays = data.map(holiday => ({
          title: holiday.holiday,
          start: this.parseDate(holiday.h_date),
          allDay: true,
          className: this.getClassForHoliday(holiday) // Use custom class based on holiday type
        }));
 
        console.log('Mapped Holidays:', holidays); // Log the mapped holidays
 
        // Update defaultEvents state with fetched holidays
        this.setState({ defaultEvents: holidays }, () => {
          console.log('State updated with holidays:', this.state.defaultEvents);
        });
      })
      .catch(error => {
        console.error('Error fetching holidays:', error);
      });
  }
 
  getClassForHoliday(holiday) {
    // Get today's date
    const today = new Date();
    // Parse holiday date
    const holidayDate = this.parseDate(holiday.h_date);
   
    // Check if the holiday is in the past or in the future
    if (holidayDate < today) {
      return 'history-leave'; // Apply history leave class (Red color)
    } else {
      return 'upcoming-holiday'; // Apply upcoming holiday class (Green color)
    }
  }
 
 

  parseDate(dateStr) {
    const [day, month, year] = dateStr.split('-');
    return new Date(year, month - 1, day); // Convert to Date object
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = (id) => {
    this.setState({ show: id });
  }

  handleChange = date => {
    this.setState({ startDate: date });
  };

  handleDateSelect = (selectInfo) => {
    this.setState({
      isnewevent: true,
      addneweventobj: selectInfo
    });
  }

  handleEventClick = (clickInfo) => {
    this.setState({
      iseditdelete: false, // Hide the edit and delete buttons
      event_title: clickInfo.event.title,
      calenderevent: clickInfo.event
    });
  }

  addnewevent() {
    const { event_title, category_color, addneweventobj } = this.state;
    let calendarApi = addneweventobj.view.calendar;

calendarApi.unselect(); // clear date selection

if (event_title) {
  calendarApi.addEvent({
    id: 10,
    title: event_title,
    className: category_color,
    start: addneweventobj.startStr,
    end: addneweventobj.endStr,
    allDay: addneweventobj.allDay
  });
}
this.setState({ isnewevent: false });
  }

  removeevent() {
    const { calenderevent } = this.state;
    calenderevent.remove();
    this.setState({ iseditdelete: false });
  }

  clickupdateevent() {
    const { defaultEvents, calenderevent, event_title } = this.state;
    const newArray = defaultEvents.slice(); // Create a copy of defaultEvents array

for (let i = 0; i < newArray.length; i++) {
  if (newArray[i].id === parseInt(calenderevent.id)) {
    newArray[i].title = event_title;
  }
}
this.setState({ defaultEvents: newArray, iseditdelete: false });
  }

  handleClick() {
    this.setState({ show: true });
  }

  rendereventclick() {
    const { event_title } = this.state;
    return (
      <form className='event-form'>
        <label>Change event name</label>
        <div className='input-group'>
          <input className='form-control' type="text" value={event_title}
            onChange={(event) => this.setState({ event_title: event.target.value })} />
          <span className='input-group-append'>
            <button type="button" className='btn btn-success btn-md'
              onClick={() => this.clickupdateevent()}>Save</button>
          </span>
        </div>
      </form>
    );
  }

  renderaddnewevent() {
    const { event_title } = this.state;
    return (
      <form>
        <div className='row'>
          <div className='col-md-12'>
            <div className='form-group'>
              <label className='control-label'>Event Name</label>
              <input className='form-control' type='text' name='title' value={event_title}
                onChange={(event) => this.setState({ event_title: event.target.value })} />
            </div>
          </div>
          <div className='col-md-12'>
            <div className='form-group'>
              <label className='control-label'>Category</label>
              <select className='select form-control' name='category'
                onChange={(event) => this.setState({ category_color: event.target.value })}>
                <option value='bg-danger'>Danger</option>
                <option value='bg-success'>Success</option>
                <option value='bg-purple'>Purple</option>
                <option value='bg-primary'>Primary</option>
                <option value='bg-pink'>Pink</option>
                <option value='bg-info'>Info</option>
                <option value='bg-inverse'>Inverse</option>
                <option value='bg-orange'>Orange</option>
                <option value='bg-brown'>Brown</option>
                <option value='bg-teal'>Teal</option>
                <option value='bg-warning'>Warning</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    );
  }

  render() {
    const { defaultEvents, iseditdelete, isnewevent } = this.state;
 
    console.log('Rendering FullCalendar with events:', defaultEvents); // Log the events being passed to FullCalendar
 
    return (
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="card ctm-border-radius shadow-sm grow">
                <div className="card-body py-4">
                  <div className="row">
                    <div className="col-md-12 mr-auto text-left">
                      <div className="custom-search input-group">
                        <div className="custom-breadcrumb">
                          <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                            <li className="breadcrumb-item d-inline-block"><Link to="dashboard" className="text-dark">Home</Link></li>
                            <li className="breadcrumb-item d-inline-block active">Calendar</li>
                          </ol>
                          <h4 className="text-dark">Calendar</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card ctm-border-radius shadow-sm grow">
                <div className="card-body">
                  <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={this.state.weekendsVisible}
                    events={defaultEvents.map(event => ({
                      ...event,
                      backgroundColor: event.className === 'history-leave' ? 'brown' : 'green'
                    }))} // Bind events from state and apply inline styles
                    select={this.handleDateSelect}
                    eventClick={this.handleEventClick}
                    eventsSet={this.handleEvents}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Modal for adding new event */}
        <Modal show={this.state.show === 'createnew'} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.renderaddnewevent()}
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-primary" onClick={() => this.addnewevent()}>Add Event</button>
            <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
 
        {/* Modal for editing event */}
        <Modal show={iseditdelete} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.rendereventclick()}
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-primary" onClick={() => this.clickupdateevent()}>Update Event</button>
            <button type="button" className="btn btn-danger" onClick={() => this.removeevent()}>Delete Event</button>
            <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
 
}

export default CalendarPage;