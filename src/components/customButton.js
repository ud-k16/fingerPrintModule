import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

const CustomButton = ({children, onPress, textColor, style, icon}) => {
  return (
    <Button
      mode="outlined"
      children={children}
      textColor={textColor ? textColor : 'black'}
      labelStyle={styles.buttonLabel}
      onPress={onPress}
      style={style}
      icon={icon}
    />
  );
};

const styles = StyleSheet.create({
  buttonLabel: {
    width: '80%',
    height: '50%',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default CustomButton;
