import React, { useState } from 'react';
// React Router
import { BrowserRouter as Router } from 'react-router-dom';
// Style
import './App.css';
// Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TransactionSlider from './components/TransactionSlider';

const App = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const toggleProfile = () => setOpenProfile(state => !state);
  
  return (
    <Router>
      <div className="App">
          <Sidebar />
          <main>
            <Navbar toggleProfile={toggleProfile} />
            <div className="container">
              <TransactionSlider />
            </div>
          </main>
          <aside style={{width: `${openProfile ? 300 : 0}px`}}></aside>
      </div>
    </Router>
  );
}

export default App;

// Design Inspiration
// https://dribbble.com/shots/14671619/attachments/6368071?mode=media