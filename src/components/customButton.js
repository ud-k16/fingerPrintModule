import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

const CustomButton = ({children, onPress}) => {
  return (
    <Button
      mode="outlined"
      children={children}
      textColor={'black'}
      labelStyle={styles.buttonLabel}
      onPress={onPress}
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
