import {StyleSheet, View} from 'react-native';
import CustomButton from '../components/customButton';

const MainScreen = ({navigation}) => {
  const handlePress = pageName => navigation.navigate(pageName);

  return (
    <View style={styles.container}>
      <CustomButton onPress={() => handlePress('splash')} children={'Splash'} />
      <CustomButton onPress={() => handlePress('ride')} children={'Ride'} />
      <CustomButton onPress={() => handlePress('login')} children={'Login'} />

      <CustomButton onPress={() => handlePress('verify')} children={'verify'} />
      <CustomButton onPress={() => handlePress('phone')} children={'phone'} />
      <CustomButton
        onPress={() => handlePress('bioMatrix')}
        children={'BioMatrix'}
      />
      <CustomButton
        onPress={() => handlePress('taxiMap')}
        children={'Taxi Map'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default MainScreen;
