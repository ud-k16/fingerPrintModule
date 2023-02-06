import {StyleSheet, View, Image, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useEffect, useState, useCallback, useRef} from 'react';

const Splash = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      //((value + 3) % 3) + 1
      setValue(prevTime => ((prevTime + 3) % 3) + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../image/icon.png')} style={styles.logo} />
      <Text style={styles.text}>WHEELS</Text>
      <RadioButton.Group value={value}>
        <View style={styles.radioContainer}>
          <RadioButton.Item value={1} style={styles.radio} />
          <RadioButton.Item value={2} style={styles.radio} />
          <RadioButton.Item value={3} style={styles.radio} />
        </View>
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 15,
    flex: 1,
    left: -10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    left: 20,
  },
  logo: {width: '50%', height: '40%', resizeMode: 'contain', left: 20},
  radioContainer: {flexDirection: 'row'},
  radio: {width: 33},
});

export default Splash;
