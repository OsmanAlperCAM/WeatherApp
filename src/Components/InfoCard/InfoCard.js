import React from 'react';
import {View, Text} from 'react-native';
import styles from './InfoCard.style';

const InfoCard = ({variant = 'dark', title, value, unit}) => {
  return (
    <View style={styles[variant].container}>
      <Text style={styles[variant].title}>{title}</Text>
      <Text style={styles[variant].value}>
        {value}
        <Text style={styles[variant].unit}>{unit}</Text>
      </Text>
    </View>
  );
};
export default InfoCard;
