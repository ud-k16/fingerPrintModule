import {Image, StyleSheet, View, KeyboardAvoidingView} from 'react-native';
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
import CustomComponent from '../components/customComponent';

const Login = props => {
  const [text, setText] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container}>
      <CustomComponent
        title="Login"
        description="Proceed with your"
        textInputDescription="User Name"
        textInputIconName={'account'}
        textInputIconColor={'#FFA533'}
        textInputPlaceHolder={'David Louis'}
      />
      <View style={{flex: 0.4}}>
        <View style={styles.lineContainer}>
          <View style={[styles.line, {marginRight: 5}]}></View>
          <CustomTextBold children={'OR CONNECT WITH'} style={{fontSize: 18}} />
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  socialAuthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.4,
  },
  lineContainer: {flexDirection: 'row', alignItems: 'center', flex: 0.2},
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    flexBasis: '29.3%',
  },
});

export default Login;
