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
