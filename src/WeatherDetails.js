import React, { useState, useEffect } from "react";
import "./weather.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CardComponent from "./cardComponent";

function WeatherDetails() {
  const [weatherData, setWeatherData] = useState([]);
  const [currentDistrict, setCurrentDistrict] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const apiKey = "2e3905dc9cadc0d90e337e26aae1d027"; // Replace with your OpenWeather API key
  const navigate = useNavigate();
 

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let id = params.get("id");
    if (id) {
      fetchData(id);
    }
  }, []);

  const fetchData = async (districtId) => {
    if (districtId) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${districtId}&appid=${apiKey}&units=metric`
        );
        if(response.status === 200){
          let data = response.data;
          setCurrentDistrict(data.name)
          let dataArray = [
            {title:"Temperature",
             description:`${data.main.temp} °C`
            },
            {title:"Weather",
              description:`${data.weather[0].description}`
             },
             {title:"Humidity",
              description:`${data.main.humidity} %`
             },
             {title:"Wind Speed",
              description:`${data.wind.speed} m/s`
             },
          ]
          setWeatherData(dataArray);
        }
       
      } catch (error) {
        setErrMsg(error.response.data.message);
      }
    }
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Dummy data for today's forecast
  // const todaysForecast = [
  //   { time: '06:00 AM', temp: '22°C', weather: 'Clear' },
  //   { time: '12:00 PM', temp: '28°C', weather: 'Sunny' },
  //   { time: '06:00 PM', temp: '26°C', weather: 'Partly Cloudy' },
  //   { time: '09:00 PM', temp: '24°C', weather: 'Clear' },
  // ];

  // // Dummy data for weekly forecast
  // const weeklyForecast = [
  //   { day: 'Monday', temp: '25°C', weather: 'Sunny' },
  //   { day: 'Tuesday', temp: '27°C', weather: 'Cloudy' },
  //   { day: 'Wednesday', temp: '26°C', weather: 'Rainy' },
  //   { day: 'Thursday', temp: '28°C', weather: 'Sunny' },
  //   { day: 'Friday', temp: '29°C', weather: 'Partly Cloudy' },
  //   { day: 'Saturday', temp: '30°C', weather: 'Sunny' },
  //   { day: 'Sunday', temp: '31°C', weather: 'Sunny' },
  // ];

  return (
    <>
      <div className="">
        <Container>
          <Col>
          <div className="col-lg-12 col-md-10 col-sm-12 mx-auto">
              
              <div className="card">
                <div className="p-3">
                  <h1 className="mb-3 text-center">
                  {currentDistrict ? ` Weather Details for ${currentDistrict}` : errMsg } 
                  </h1>
                  <Container>
                    <Row>
                      {weatherData.map((card, index) => (
                        <Col md={3}  key={index}>
                          <CardComponent
                            title={card.title}
                            text={card.description}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Container>
                  
              </div>
            </div>
          </div>
          </Col>
          </Container>
      </div>
    </>
  );
}

export default WeatherDetails;
