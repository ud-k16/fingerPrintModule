import {Image, StyleSheet} from 'react-native';
import CustomComponent from '../components/customComponent';

const Phone = () => {
  return (
    <CustomComponent
      title="Mobile"
      description="Proceed with your"
      textInputDescription="Your Mobile Number"
      textInputIconName={'cellphone'}
      textInputPlaceHolder={'+91 7456-558-696'}
      keyboardType={'number-pad'}
    />
  );
};

const styles = StyleSheet.create({});

export default Phone;
