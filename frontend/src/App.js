import './assets/App.css';
import React from 'react';
import configLocalStorage from './utils/storage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import HomePage from './views/HomePage';
import Login from './views/Login';
import SignUp from './views/Signup';
import GroupListPage from './views/GroupListPage';
import ProfilePage from './views/ProfilePage';
import CreateGroupForm from './views/CreateGroupPage';

configLocalStorage();

function App() {
  return (
    <div className='root'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link className='link'  to='/'>Home</Link>
              </li>
              <li>
                <Link className='link' to='/create-group'>Create Group</Link>
              </li>
              <li>
                <Link className='link' to='/group-list'>Groups list</Link>
              </li>
              <li>
                <Link className='link' to='/profile'>Profile</Link>
              </li>
              <li>
                <Link className='link' to='/signup'>Signup</Link>
              </li> 
              <li>
                <Link className='link' id='login' to='/login'>Login</Link>
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
            <Route path="/create-group" element={<CreateGroupForm />}></Route>
          </Routes>
        </div>
      </Router>

      <div className='footer'>
        <h1>The footer</h1>
      </div>
    </div>
  );
}

export default App;
