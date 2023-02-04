import {useState} from 'react';
import {
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ScrollView,
} from 'react-native';
import {CustomTextDescription, CustomTextTitle} from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import {TextInput} from 'react-native-paper';
import CustomButton from '../components/customButton';

const CustomComponent = ({
  description = 'Enter',
  title = 'Title',
  textInputDescription = 'enter input',
  textInputIconName,
  textInputIconColor,
  textInputPlaceHolder,
  keyboardType,
  textContentType,
  buttonText = 'next',
  enableCustomInput = true,
  enableCustomButtom = true,
  style,
}) => {
  const [text, setText] = useState();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={require('../image/icon.png')} style={styles.logo} />
      <CustomTextDescription children={description} />
      <CustomTextTitle children={title} />
      {enableCustomInput && (
        <CustomTextInput
          info={textInputDescription}
          right={
            <TextInput.Icon
              icon={textInputIconName}
              iconColor={textInputIconColor}
            />
          }
          text={text}
          setText={setText}
          placeholder={textInputPlaceHolder}
          style={{flex: 0.5}}
          maxLength={6}
          keyboardType={keyboardType}
          textContentType={textContentType}
        />
      )}
      {enableCustomButtom && (
        <CustomButton
          children={buttonText}
          textColor={'#FFA533'}
          style={styles.button}
        />
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  logo: {width: '20%', height: '20%', resizeMode: 'contain'},
  button: {borderColor: '#FFA533', width: '30%', right: -221},
});
export default CustomComponent;
