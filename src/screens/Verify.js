import {Image, StyleSheet, View} from 'react-native';
import CustomComponent from '../components/customComponent';

const Verify = () => {
  return (
    <CustomComponent
      title="Verification Code"
      description="Enter your 4 Digit"
      textInputDescription="OTP"
      textInputPlaceHolder={'1055'}
      textContentType="telephoneNumber"
      keyboardType={'number-pad'}
    />
  );
};

const styles = StyleSheet.create({});

export default Verify;
