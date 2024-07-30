import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './weather.css';

import { statesAndDistricts } from './statesAndDistricts';

function Weather() {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [weather, setWeather] = useState(null);
  const navigate = useNavigate();

  // Replace with your OpenWeather API key

  const handleStateChange = (e) => {
    setState(e.target.value);
    setDistrict('');
  };

  const handleDistrictChange =  (e) => {
    setDistrict(e.target.value);
    navigate(`/weather-details?id= + ${e.target.value}`);
  };

  return (
    <div>
    <div className='container mt-5'>
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
          <div className="card p-3">
            <h1 className="mb-3 text-center">Weather Forecast Dashboard</h1>
            
            <div className="mb-3">
              <label htmlFor="stateSelect" className="form-label">Select State</label>
              <select
                id="stateSelect"
                className="form-select"
                value={state}
                onChange={handleStateChange}
              >
                <option value="">Select a State</option>
                {Object.keys(statesAndDistricts).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="districtSelect" className="form-label">Select District</label>
              <select
                id="districtSelect"
                className="form-select"
                value={district}
                onChange={handleDistrictChange}
                disabled={!state}
              >
                <option value="">Select a District</option>
                {state && statesAndDistricts[state].map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
     </div>
     <div>
     
     </div>
    </div>
  );
}

export default Weather;
