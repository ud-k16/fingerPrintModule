import {StyleSheet, View, Image, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useEffect, useState, useCallback, useRef} from 'react';

const Splash = () => {
  const [value, setValue] = useState(1);

  return (
    <View style={styles.container}>
      <Image source={require('../image/icon.png')} style={styles.logo} />
      <Text style={styles.text}>WHEELS</Text>
      <RadioButton.Group value={value.current}>
        <View style={styles.radioContainer}>
          <RadioButton.Item value={1} />
          <RadioButton.Item value={2} />
          <RadioButton.Item value={3} />
        </View>
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
  },
  logo: {width: '50%', height: '40%', resizeMode: 'contain'},
  radioContainer: {flexDirection: 'row'},
});

export default Splash;
