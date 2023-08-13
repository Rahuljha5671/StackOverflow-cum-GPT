import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from './components/Navbar/Navbar';

import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";


import AllRoutes from "./AllRoutes";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
