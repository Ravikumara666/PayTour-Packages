import React from 'react';
import './App.css';
//import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
// import Plans from './components/Plans';
// import { Routes, Route } from 'react-router-dom';
// import BookingForm from './pages/BookingForm';
// import HomePage from './pages/HomePage'; // You need to create this component
// import ErrorPage from './pages/ErrorPage'; // You need to create this component

function App() {
  return (
    <div className="App" style={{
      width: 'auto',
      height: 'auto'
    }}>
      <HomePage/>
      
    </div>
  );
}

export default App;
