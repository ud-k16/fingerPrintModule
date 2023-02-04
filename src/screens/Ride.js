import {StyleSheet, View, Image} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import CustomButton from '../components/customButton';
import {CustomTextBold, CustomTextDescription} from '../components/CustomText';

const Ride = props => {
  return (
    <View style={styles.container}>
      <Image source={require('../image/icon.png')} style={styles.logo} />
      <CustomTextBold children={'EASY TO RIDE'} />
      <CustomTextDescription style={styles.description}>
        El taxi es un medio de transporte con tarifas reguladas que consiste en
        un vehículo de transporte con conductor que ofrece servicios de
        transporte de una persona o
      </CustomTextDescription>
      <CustomButton
        children={'next'}
        textColor={'#FFA533'}
        style={styles.button}
      />
      <ProgressBar
        progress={0.5}
        color={'#FFA533'}
        style={styles.progressBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {width: '60%', height: '40%', resizeMode: 'contain'},
  button: {borderColor: '#FFA533', width: '30%'},
  description: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'justify',
    paddingBottom: 30,
    paddingTop: 20,
  },
  progressBar: {
    width: 200,
    height: 5,
    marginVertical: 60,
  },
});

export default Ride;
