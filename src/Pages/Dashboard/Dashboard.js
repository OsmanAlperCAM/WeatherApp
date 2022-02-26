import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Layout from './Layout';
import axios from 'axios';

// api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat=36&lon=32&units=metric&appid=93e6af3d34168a51daaa149bd4bbcbd4

const appId = '93e6af3d34168a51daaa149bd4bbcbd4';
const Dashboard = props => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weatherData, setWeatherData] = useState();

  const getCurrentLocation = location => {
    console.log('location', location);
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  };
  const fetchWeatherData = async (lat, lon, appId) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=tr&units=metric&appid=${appId}`,
      );
      setWeatherData(response.data);
      console.log('response.data', response.data);
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
