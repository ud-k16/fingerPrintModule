import {Button, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  CustomTextBold,
  CustomTextDescription,
  CustomTextTitle,
} from '../components/CustomText';
import FingerPrintScanner from '../FingerPrintModule';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomTextInput from '../components/CustomTextInput';
import {TextInput} from 'react-native-paper';
import {useState} from 'react';
import CustomButton from '../components/customButton';

const BioMatrix = () => {
  const [text, setText] = useState();
  const [pwdVisible, setPwdVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image source={require('../image/icon.png')} style={styles.logo} />
        <CustomTextDescription children={'Proceed with your'} />
        <CustomTextTitle children={'Fingure or Password'} fontSize={30} />
        <Icon
          name={'fingerprint'}
          size={85}
          color={'#FFA533'}
          onPress={() => bottomSheetRef.current.close()}
        />
        <Separator />
        <CustomTextInput
          info={'Password'}
          right={
            <TextInput.Icon
              icon={pwdVisible ? 'eye-off' : 'eye'}
              iconColor={'#FFA533'}
              onPress={() => setPwdVisible(!pwdVisible)}
            />
          }
          text={text}
          setText={setText}
          placeholder={'...............'}
          secureTextEntry={pwdVisible}
        />
        <CustomTextDescription
          children={'Forgot Password'}
          style={styles.forgotPassword}
        />
        <CustomButton
          children={'save'}
          textColor={'#FFA533'}
          style={styles.button}
        />
      </ScrollView>
    </View>
  );
};

const Separator = () => {
  return (
    <View style={styles.lineContainer}>
      <View style={[styles.line, {marginRight: 5}]}></View>
      <CustomTextBold children={'or'} style={{fontSize: 18}} />
      <View style={[styles.line, {marginLeft: 5}]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  logo: {width: '20%', height: '20%', resizeMode: 'contain'},
  lineContainer: {flexDirection: 'row', alignItems: 'center', flex: 0.3},
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    flexBasis: '45%',
    padding: 0,
  },
  forgotPassword: {
    left: 200,
    fontSize: 16,
  },
  button: {borderColor: '#FFA533', width: '30%', right: -221, top: 40},
  scrollView: {flex: 1},
});

export default BioMatrix;
