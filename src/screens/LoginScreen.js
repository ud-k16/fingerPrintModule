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

const Login = props => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Image source={require('../image/icon.png')} style={styles.logo} />
      <CustomTextDescription children={'Proceed with your'} />
      <CustomTextTitle children={'Login'} />
      <CustomTextInput
        info={'User Name'}
        right={<TextInput.Icon icon={'account'} iconColor={'#FFA533'} />}
        text={text}
        setText={setText}
        placeholder={'David Louis'}
        style={{flex: 0.3}}
      />
      <CustomButton
        children={'next'}
        textColor={'#FFA533'}
        style={styles.button}
      />
      <View style={styles.lineContainer}>
        <View style={[styles.line, {marginRight: 5}]}></View>
        <CustomTextBold children={'OR CONNECT WITH'} />
        <View style={[styles.line, {marginLeft: 5}]}></View>
      </View>
      <View style={styles.socialAuthContainer}>
        <SocialAuthButton
          title={'FACEBOOK'}
          iconName={'facebook'}
          iconColor={'white'}
          backgroundColor={'#3b5998'}
        />
        <SocialAuthButton
          title={'GOOGLE'}
          iconName={'google-plus'}
          iconColor={'white'}
          backgroundColor={'#db4a39'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  logo: {width: '20%', height: '20%', resizeMode: 'contain'},
  button: {borderColor: '#FFA533', width: '30%', right: -240},
  lineContainer: {flexDirection: 'row', alignItems: 'center'},
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    flexBasis: '20%',
  },
  socialAuthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.2,
  },
});

export default Login;
