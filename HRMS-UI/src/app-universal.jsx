import React from "react";
import config from 'config';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { Suspense, lazy } from "react";
import progress from "../src/assets/images/progress.gif";
import Header from "./components/header/index";
import Login from './components/login';
import Register from './components/register';
import RegisterOTP from './components/registerOTP';
import ForgotPassword from './components/forgotpassword';
const AdminDashboard = lazy(() => import("./components/dashboard/admin_dashboard"));
const EmployeeDashboard = lazy(() => import("./components/dashboard/employee_dasjboard"));
const Employee = lazy(() => import("./components/employee"));
const EmployeeTeam = lazy(() => import("./components/employee/employee-team"));
const EmployeeOffice = lazy(() =>import("./components/employee/employee-office"));
const EmployeeList = lazy(() => import("./components/employee/employee-list"));
const Addemployee = lazy(() => import("./components/employee/add-employee"));
const Company = lazy(() => import("./components/company"));
const Leave = lazy(() => import("./components/leave"));
const Reviewsoverview = lazy(() => import("./components/reviews"));
const Editreviews = lazy(() => import("./components/reviews/edit"));
const Createreview = lazy(() => import("./components/reviews/createreview"));
const ReviewType = lazy(() => import("./components/reviews/reviewtype"));
const Manage = lazy(() => import("./components/manage"));
const ManageLeadership = lazy(() =>import("./components/manage/manage-leadership"));
const Reports = lazy(() => import("./components/reports/official"));
const Leavereports = lazy(() => import("./components/reports/leave"));
const Payrollreports = lazy(() => import("./components/reports/payroll"));
const Contactreports = lazy(() => import("./components/reports/contact"));
const Emailreports = lazy(() => import("./components/reports/email"));
const Securityreports = lazy(() => import("./components/reports/security"));
const Workhomereports = lazy(() => import("./components/reports/work"));
const Settings = lazy(() => import("./components/settings/index"));
const SettingTimeoff = lazy(() =>
  import("./components/settings/settings-timeoff")
);
const CalendarPage = lazy(() => import("./components/calendar/index"));
const Employment = lazy(() => import("./components/profile/employement"));
//profile
const Details = lazy(() => import("./components/profile/details"));
const Document = lazy(() => import("./components/profile/document"));
const Payroll = lazy(() => import("./components/profile/payroll"));
const Profilereview = lazy(() => import("./components/profile/review"));
const Timeoff = lazy(() => import("./components/profile/timeoff"));
const ProfileSettings = lazy(() => import("./components/profile/settings"));
// linemanager
const LineManager = lazy(() => import("./components/linemanager"));
const TeamLead = lazy(() => import("./components/teamlead"));
const TimeOffApprover = lazy(() => import("./components/timeapprover"));
//admins
const Superadmin = lazy(() => import("./components/superadmin"));
const Admin = lazy(() => import("./components/admin"));
const PayrollAdmin = lazy(() => import("./components/payrolladmin"));
const TeamMembers = lazy(() => import("./components/teammembers"));


const AppUniversal = function (props) {
  return (
    <Router basename={`${config.publicPath}`}>
        <div>
       
        <Route render={(props) => <Header {...props} />} />
        <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/registerOTP" exact component={RegisterOTP} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        
         <Redirect exact from="/" to="/login" /> 
          <Route
            path="/"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <AdminDashboard {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/dashboard"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <AdminDashboard {...props} />
              </Suspense>
            )}
          />
		   <Route
            path="/employee-dashboard"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <EmployeeDashboard {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/employees-all"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Employee {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/employee-team"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <EmployeeTeam {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/employee-office"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <EmployeeOffice {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/employee-list"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <EmployeeList {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/add-employee"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Addemployee {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/company"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Company {...props} />
              </Suspense>
            )}
          />
            <Route
            path="/calendar"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <CalendarPage {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/calendar"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <CalendarPage {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/manage"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Manage {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/manage-leadership"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <ManageLeadership {...props} />
              </Suspense>
            )}
          />
            <Route
            path="/leave"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Leave {...props} />
              </Suspense>
            )}
          />
            <Route
            path="/overview-reviews"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Reviewsoverview {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/edit-reviews"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Editreviews {...props} />
              </Suspense>
            )}
          />
            <Route
            path="/review-type"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <ReviewType {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/create-review"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Createreview {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/reports"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Reports {...props} />
              </Suspense>
            )}
          />
            <Route
            path="/leave-reports"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Leavereports {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/payroll-reports"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Payrollreports {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/contact-reports"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Contactreports {...props} />
              </Suspense>
            )}
          />
            <Route
            path="/email-reports"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Emailreports {...props} />
              </Suspense>
            )}
          />
            <Route
            path="/security-reports"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Securityreports {...props} />
              </Suspense>
            )}
          />
            <Route
            path="/work-from-home-reports"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Workhomereports {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/settings"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Settings {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/setting-timeoff"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <SettingTimeoff {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/employment"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Employment {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/details"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Details {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/document"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Document {...props} />
              </Suspense>
            )}
          />
               <Route
            path="/payroll"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Payroll {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/profile-review"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Profilereview {...props} />
              </Suspense>
            )}
          />
            <Route
            path="/time-off"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Timeoff {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/profile-settings"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <ProfileSettings {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/line-manager"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <LineManager {...props} />
              </Suspense>
            )}
          />
            <Route
            path="/team-lead"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <TeamLead {...props} />
              </Suspense>
            )}
          />
           <Route
            path="/time-off-approver"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <TimeOffApprover {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/super-admin"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Superadmin {...props} />
              </Suspense>
            )}
          />
              <Route
            path="/admin"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <Admin {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/payroll-admin"
            exact
            render={(props) => (
              <Suspense
                fallback={
                  <div id="loader-wrapper">
                    <img src={progress} alt="loading..." />
                  </div>
                }
              >
                <PayrollAdmin {...props} />
              </Suspense>
            )}
          />  <Route
          path="/team-members"
          exact
          render={(props) => (
            <Suspense
              fallback={
                <div id="loader-wrapper">
                  <img src={progress} alt="loading..." />
                </div>
              }
            >
              <TeamMembers {...props} />
            </Suspense>
          )}
        />
          
        </Switch>
      </div>
    </Router>
  );
};

export default AppUniversal;
