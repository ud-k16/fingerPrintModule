import {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {CustomTextDescription, CustomTextTitle} from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import {TextInput} from 'react-native-paper';
import CustomButton from '../components/customButton';

const CustomComponent = ({
  description = 'Enter',
  title = 'Title',
  textInputDescription = 'enter input',
  textInputIconName,
  textInputPlaceHolder,
  keyboardType,
  textContentType,
}) => {
  const [text, setText] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.passwordPhoneContainer}>
        <Image source={require('../image/icon.png')} style={styles.logo} />
        <CustomTextDescription children={description} />
        <CustomTextTitle children={title} />
        <CustomTextInput
          info={textInputDescription}
          right={<TextInput.Icon icon={textInputIconName} />}
          text={text}
          setText={setText}
          placeholder={textInputPlaceHolder}
          style={{flex: 0.7}}
          maxLength={6}
          keyboardType={keyboardType}
          textContentType={textContentType}
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
  passwordPhoneContainer: {
    paddingHorizontal: 20,
    flex: 0.6,
    justifyContent: 'space-evenly',
  },

  logo: {width: '20%', height: '20%', resizeMode: 'contain'},
  button: {borderColor: '#FFA533', width: '30%', right: -221},
});
export default CustomComponent;
