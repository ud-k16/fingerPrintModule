import {Image, StyleSheet, View, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import CustomButton from '../components/customButton';
import CustomComponent from '../components/customComponent';
import {CustomTextBold} from '../components/CustomText';

const Verify = () => {
  return (
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: 'white'}}>
      <CustomComponent
        title="Verification Code"
        description="Enter your 4 Digit"
        enableCustomButtom={false}
        enableCustomInput={false}
      />
      <OTPComponent />
    </ScrollView>
  );
};
const OTPComponent = () => {
  const OTPInput = ({placeholder}) => (
    <TextInput
      maxLength={1}
      textColor={'gray'}
      placeholderTextColor={'gray'}
      placeholder={placeholder}
      style={styles.otpTextInput}
      underlineColor={'gray'}
      textContentType={'oneTimeCode'}
      keyboardType={'numeric'}
      contentStyle={{fontSize: 26}}
    />
  );
  return (
    <View style={styles.otpContainer}>
      <CustomTextBold children={'OTP'} />
      <View style={styles.otpInput}>
        <OTPInput placeholder={'1'} />
        <OTPInput placeholder={'0'} />
        <OTPInput placeholder={'5'} />
        <OTPInput placeholder={'5'} />
      </View>
      <CustomButton
        children={'submit'}
        textColor={'#FFA533'}
        style={styles.button}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  otpContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    bottom: 90,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  otpTextInput: {
    backgroundColor: 'white',
    marginHorizontal: 5,
    width: 65,
  },
  button: {borderColor: '#FFA533', width: '20%', right: -235, marginTop: 30},
});

export default Verify;
