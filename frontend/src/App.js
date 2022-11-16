import './assets/App.css';
import HomePage from './views/HomePage';
import Login from './views/Login';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className='link' to='/'>Home</Link>
            </li>
            <li>
              <Link className='link' to='/login'>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />}/>  
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;