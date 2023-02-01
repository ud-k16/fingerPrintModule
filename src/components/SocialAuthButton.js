import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * can apply iconName or Image source.
 * @param {*} param0
 * @returns
 */
const SocialAuthButton = ({
  source = require('../image/icon.png'),
  title,
  backgroundColor,
  iconColor,
  iconName,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: backgroundColor ? backgroundColor : '#FFA533'},
      ]}>
      {iconName ? (
        <Icon name={iconName} size={15} color={iconColor} />
      ) : (
        <Image source={source} style={styles.logo} />
      )}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    height: '60%',
    borderRadius: 25,
  },
  text: {color: 'white', marginLeft: 5},
  logo: {width: '26%', height: '40%', resizeMode: 'contain'},
});

export default SocialAuthButton;
