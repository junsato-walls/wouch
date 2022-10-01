import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimeCard from './view/timecard/timecard';
import Input from './view/timecard/tc001_input/input';
import Top from './view/admin/admin';
import Login from './view/admin/ad001_login/login';
import Attend from './view/admin/ad005_attend/attend';
import Vacation from './view/admin/ad006_vacation/vacation';
import Employee from './view/admin/ad007_employee/employee';
import Calendar from './view/admin/ad008_calendar/calendar';
import Shift from './view/admin/ad009_shift/shift';
import Payment from './view/admin/ad010_payment/payment';

import Admin from './view/admin/ad011_admin/admin';
import Test from './view/admin/test/checkout';
import NoMatch from './view/nomatch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TimeCard />} />
          <Route path="/input" element={<Input />} />
          <Route path="/top" element={<Top />} />
          <Route path="/login" element={<Login />} />
          <Route path="/attend" element={<Attend />} />
          <Route path="/vacation" element={<Vacation />} />
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