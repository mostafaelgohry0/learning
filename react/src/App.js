import React from 'react';

import './index.css';

//import Test from './components/routes/test'

import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/routes/login';
import Signup from './components/routes/sign'
import Navbar from './components/layout/Navbar'
import { BrowserRouter ,Route  }from  'react-router-dom'


//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
   <BrowserRouter>

  
    <Navbar />
    <Route  path="/login"  component={Login} />
    <Route  path="/signup"  component={Signup} />
    
   
   
   </BrowserRouter>
  );
}

export default App;
