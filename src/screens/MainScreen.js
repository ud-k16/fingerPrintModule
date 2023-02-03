import {StyleSheet, View} from 'react-native';
import CustomButton from '../components/customButton';

const MainScreen = ({navigation}) => {
  const handlePress = pageName => navigation.navigate(pageName);

  return (
    <View style={styles.container}>
      <CustomButton onPress={() => handlePress('login')} children={'Login'} />
      <CustomButton
        onPress={() => handlePress('taxiMap')}
        children={'Taxi Map'}
      />
      <CustomButton onPress={() => handlePress('verify')} children={'verify'} />
      <CustomButton onPress={() => handlePress('phone')} children={'phone'} />
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
