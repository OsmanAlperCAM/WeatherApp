import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Layout from './Layout';
import axios from 'axios';

const appId = 'YOUR APP ID';
const Dashboard = props => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weatherData, setWeatherData] = useState();

  const getCurrentLocation = location => {
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  };
  const fetchWeatherData = async (lat, lon, appId) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`,
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      getCurrentLocation,
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true},
    );
  }, []);
  useEffect(() => {
    if (latitude != 0 && longitude != 0) {
      fetchWeatherData(latitude, longitude, appId);
    }
  }, [latitude, longitude]);

  return <Layout weatherData={weatherData} />;
};
export default Dashboard;
