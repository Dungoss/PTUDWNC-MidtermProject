import './assets/App.css';
import React from 'react';
import configLocalStorage from './utils/storage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import HomePage from './views/HomePage';
import Login from './views/Login';
import SignUp from './views/Signup';
import GroupListPage from './views/GroupListPage';
import ProfilePage from './views/ProfilePage';

configLocalStorage();

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link className='link'  to='/'>Home</Link>
              </li>
              <li>
                <Link className='link' to='/login'>Login</Link>
              </li>
              <li>
                <Link className='link' to='/account-mail-activate'>Activate Account</Link>
              </li>
              <li>
                <Link className='link' to='/create-group'>Create Group</Link>
              </li>
              <li>
                <Link className='link' to='/create-invite-link'>Create Invite Link</Link>
              </li>
              <li>
                <Link className='link' to='/group-list'>Groups list</Link>
              </li>
              <li>
                <Link className='link' to='/profile'>Profile Page</Link>
              </li>
              <li>
                <Link className='link' to='/signup'>Signup Page</Link>
              </li>
              <li>
                <Link className='link' to='/social-login'>Social Login Page</Link>
              </li> 
            </ul>
          </nav>
        </div>
        <div className="App">
          <Routes>
            <Route path ="/" element={<HomePage />}/>            
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/group-list" element={<GroupListPage />}/>
            <Route path="/profile" element={<ProfilePage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
