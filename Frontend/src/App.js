import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import logoImage from './4life.svg';
import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import About from './components/About';
import Login from './Login/Login';

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
        <Navbar/>
      <Home/>
      <Services/>
      <About/>
      </Routes>
      </Router>

   
  )
}
export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Landing from './LandingPage/LandingPage';
// import Home from './LandingPage/HomePage';
// import MenteePage from './Features/MenteePage';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/mentee" element={<MenteePage name="John" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
