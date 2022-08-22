import './App.css';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import TimeCard from './view/timecard/timecard';
import Admin from './view/admin/admin';
import NoMatch from './view/nomatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>aaa</h1>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<TimeCard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<TimeCard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>  */}
    </div>
  );
}
export default App;