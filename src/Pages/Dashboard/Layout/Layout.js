import React from 'react';
import {View} from 'react-native';
import CurrentCard from '../../../Components/CurrentCard';
import styles from './Layout.style';

const Layout = ({weatherData}) => {
  if (weatherData == undefined || weatherData == {}) {
    return null;
  }
  return (
    <View style={styles.container}>
      <CurrentCard weatherData={weatherData} />
    </View>
  );
};
export default Layout;
