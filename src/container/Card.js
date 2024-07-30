import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Weather from '../weather';
import WeatherDetails from '../WeatherDetails';

function Card() {
  return (
    <div className="container mt-4 flex-grow-1">
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/weather-details" element={<WeatherDetails />} />
      </Routes>
      
    </div>
  );
}

export default Card;
