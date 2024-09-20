import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import logoImage from './4life.svg';
import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Mentee from './Mentee';

import MyMentees from './MyMentees';
import GroupSession from './GroupSession';


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path='/mentee' element = {<Mentee/>}/> 
        <Route path='/mymentee' element = {<MyMentees/>}/>
        <Route path='/groupsession' element = {<GroupSession/>}/>
        <Route path='*' element = {<h1>Not found</h1>}/>
      </Routes>
      </Router>

   
  )
}
export default App;