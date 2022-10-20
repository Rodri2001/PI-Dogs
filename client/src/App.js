import React from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  return (
    <React.Fragment>
      <Route exact path='/'> <Landing/> </Route>
      <Route exact path="/home"> <Navbar/> <Home/></Route>
      <Route exact path="/create" ><Navbar/> <Create/> </Route>
      <Route exact path="/detail/:id" > <Navbar/> <Details/> </Route>
    </React.Fragment>

  );
}

export default App;
