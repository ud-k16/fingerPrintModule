import {Image, StyleSheet, View} from 'react-native';
import {
  CustomTextBold,
  CustomTextDescription,
  CustomTextTitle,
} from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import {TextInput} from 'react-native-paper';
import {useState} from 'react';
import CustomButton from '../components/customButton';
import SocialAuthButton from '../components/SocialAuthButton';

const Verify = props => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.passwordVerifyContainer}>
        <Image source={require('../image/icon.png')} style={styles.logo} />
        <CustomTextDescription children={'Enter your 4 digit'} />
        <CustomTextTitle children={'Verification code'} />
        <CustomTextInput
          info={'OTP'}
          right={<TextInput.Icon icon={'account'} iconColor={'#FFA533'} />}
          text={text}
          setText={setText}
          placeholder={'David Louis'}
          style={{flex: 0.7}}
          maxLength={6}
          keyboardType="number-pad"
        />
        <CustomButton
          children={'next'}
          textColor={'#FFA533'}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  passwordVerifyContainer: {
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

export default Verify;
