import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Input from './view/timecard/tc001_input/input';
import Submission from './view/timecard/tc002_submission/submission';
import Top from './view/admin/admin';
import Login from './view/admin/ad001_login/login';
import Attend from './view/admin/ad005_attend/attend';
import LeaveRequest from './view/admin/ad006_leaverequest/leaverequest';
import Employee from './view/admin/ad007_employee/employee';
import Calendar from './view/admin/ad008_calendar/calendar';
import Shift from './view/admin/ad009_shift/shift';
import Payment from './view/admin/ad010_payment/payment';
import LeaveManage from './view/admin/ad012_leavemanage/leavemanage';
import Admin from './view/admin/ad011_admin/admin';
import Test from './view/admin/test/checkout';
import NoMatch from './view/nomatch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input />} />
          {/* <Route path="/input" element={<Input />} /> */}
          <Route path="/submission" element={<Submission />} />
          <Route path="/top" element={<Top />} />
          <Route path="/login" element={<Login />} />
          <Route path="/attend" element={<Attend />} />
          <Route path="/leaverequest" element={<LeaveRequest />} />
          <Route path="/leavemanage" element={<LeaveManage />} />          
          <Route path="/employee" element={<Employee />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/shift" element={<Shift />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/test" element={<Test />} />          
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;