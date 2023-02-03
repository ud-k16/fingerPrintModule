import {Image, StyleSheet, View} from 'react-native';
import CustomComponent from '../components/customComponent';

const Phone = () => {
  return (
    <CustomComponent
      title="Mobile"
      description="Proceed with your"
      textInputDescription="Your Mobile Number"
      textInputIconName={'cellphone'}
      textInputPlaceHolder={'+91 7456-558-696'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  passwordPhoneContainer: {
    paddingHorizontal: 20,
    flex: 0.6,
    justifyContent: 'space-evenly',
  },
  socialAuthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.1,
    // marginTop: 8,
  },
  lineContainer: {flexDirection: 'row', alignItems: 'center', flex: 0.15},
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    flexBasis: '29.3%',
  },
  logo: {width: '20%', height: '20%', resizeMode: 'contain'},
  button: {borderColor: '#FFA533', width: '30%', right: -221},
});

export default Phone;
