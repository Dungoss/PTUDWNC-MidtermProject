import './assets/App.css';
import React from 'react';
import configLocalStorage from './utils/storage';
import { Button } from '@chakra-ui/react';
import { Link as ReachLink } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

import HomePage from './views/HomePage';
import Login from './views/Login';

configLocalStorage();

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link as={ReachLink} to='/'>Home</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/account-mail-activate'>Activate Account</Link>
              </li>
              <li>
                <Link to='/create-group'>Create Group</Link>
              </li>
              <li>
                <Link to='/create-invite-link'>Create Invite Link</Link>
              </li>
              <li>
                <Link to='/group-list'>Groups list</Link>
              </li>
              <li>
                <Link to='/profile'>Profile Page</Link>
              </li>
              <li>
                <Link to='/signup'>Signup Page</Link>
              </li>
              <li>
                <Link to='/social-login'>Social Login Page</Link>
              </li> 
            </ul>
          </nav>
        </div>
        <Menu>
        <MenuButton as={Button}>
    Actions
        </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <div className="App">
          <Routes>
            <Route path ="/" element={<HomePage />}/>            
            <Route path="/login" element={<Login />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
