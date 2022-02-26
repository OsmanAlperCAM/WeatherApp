import React from 'react';
import {View, Text, Image} from 'react-native';
import InfoCard from '../InfoCard';
import styles from './CurrentCard.style';

const CurrentCard = ({isNight = true, weatherData}) => {
  const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const variant = isNight ? 'dark' : 'light';
  return (
    <View style={styles[variant].container}>
      <View style={styles[variant].innerContainer}>
        <Text style={styles[variant].title}>
          {weatherData.weather[0].description.toUpperCase()}
        </Text>
        <Image style={styles[variant].image} source={{uri: icon}} />
        <Text style={styles[variant].temp}>{weatherData.main.temp}°C</Text>
        <Text style={styles[variant].minMaxTemp}>
          {weatherData.main.temp_min}°/{weatherData.main.temp_max}°
        </Text>
        <Text style={styles[variant].location}>{weatherData.name}</Text>
      </View>
      <View style={styles[variant].infoContainer}>
        <InfoCard
          variant={variant}
          title="Wind"
          value={weatherData.wind.speed}
          unit="m/s"
        />
        <InfoCard
          variant={variant}
          title="Humidity"
          value={weatherData.main.humidity}
          unit="%"
        />
        <InfoCard
          variant={variant}
          title="Felt Temp"
          value={weatherData.main.feels_like}
          unit="°C"
        />
      </View>
    </View>
  );
};
export default CurrentCard;
