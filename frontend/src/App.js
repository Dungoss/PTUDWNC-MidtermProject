import './assets/App.css';
import React from 'react';
import configLocalStorage from './utils/storage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Login from './views/Login';
import SignUp from './views/Signup';
import GroupListPage from './views/GroupListPage';
import ProfilePage from './views/ProfilePage';
import CreateGroupForm from './views/CreateGroupPage';

import Navbar from './components/Navbar';

configLocalStorage();

function App() {
  return (
    <div className='root'>
      <Router>
          <Navbar />
          <Routes>
          <Route path ="/" element={<HomePage />}/>            
            <Route path="/sign-in" element={<Login />}/>
            <Route path="/sign-up" element={<SignUp />}/>
            <Route path="/group-list" element={<GroupListPage />}/>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/create-group" element={<CreateGroupForm />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
