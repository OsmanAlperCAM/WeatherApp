import React from 'react';
import {View, Text} from 'react-native';
import CurrentCard from '../../../Components/CurrentCard';
import styles from './Layout.style';

const Layout = ({weatherData}) => {
  if (weatherData == undefined || weatherData == {}) {
    return null;
  }
  console.log('weatherData', weatherData.weather[0].icon);
  return (
    <View style={styles.container}>
      <CurrentCard weatherData={weatherData} />
    </View>
  );
};
export default Layout;
