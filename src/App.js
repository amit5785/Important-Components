import React from 'react'
import './App.css';

import Navbar from './component/Navbar/Navbar';
import EventCard from './component/Flip-Card/EventCard';
import ThapaNavbar from './component/ThapaNavbar/ThapaNavbar';

function App() {
  return (
    <div className='main-div'>
      <Navbar />
      <h1>Amit Kumar</h1>
      <EventCard />
      <ThapaNavbar />
    </div>
  );
}

export default App;
