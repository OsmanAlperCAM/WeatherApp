import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    borderRadius: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    height: 100,
    width: 150,
    resizeMode: 'cover',
  },
  temp: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  minMaxTemp: {
    fontSize: 20,
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default {
  light: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.primary.color,
    },
    title: {
      ...baseStyles.title,
      color: colors.text.black,
    },
    temp: {
      ...baseStyles.temp,
      color: colors.text.black,
    },
    minMaxTemp: {
      ...baseStyles.minMaxTemp,
      color: colors.text.black,
    },
    location: {
      ...baseStyles.location,
      color: colors.text.black,
    },
  }),
  dark: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.secondary.color,
    },
    title: {
      ...baseStyles.title,
      color: colors.text.white,
    },
    temp: {
      ...baseStyles.temp,
      color: colors.text.white,
    },
    minMaxTemp: {
      ...baseStyles.minMaxTemp,
      color: colors.text.white,
    },
    location: {
      ...baseStyles.location,
      color: colors.text.white,
    },
  }),
};
