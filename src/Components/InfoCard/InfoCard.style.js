import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const baseStyles = StyleSheet.create({
  container: {
    margin: 8,
    marginVertical: 8,
    padding: 8,
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    marginVertical: 8,
  },
  value: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  unit: {
    fontSize: 15,
    fontWeight: 'normal',
  },
});
export default {
  light: StyleSheet.create({
    ...baseStyles,
    title: {
      ...baseStyles.title,
      color: colors.text.black,
    },
    value: {
      ...baseStyles.value,
      color: colors.text.black,
    },
  }),
  dark: StyleSheet.create({
    ...baseStyles,
    title: {
      ...baseStyles.title,
      color: colors.text.white,
    },
    value: {
      ...baseStyles.value,
      color: colors.text.white,
    },
  }),
};
