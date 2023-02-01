import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CustomTextBold} from './CustomText';

const CustomTextInput = props => {
  const {info, right, placeholder = '', setText, text, style} = props;
  const onTextChange = text => setText(text);
  return (
    <View style={[styles.container, style]}>
      <CustomTextBold children={info} />
      <TextInput
        right={right}
        placeholder={placeholder}
        onChangeText={text => onTextChange(text)}
        value={text}
        mode={'flat'}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  textInput: {backgroundColor: 'white'},
});

export default CustomTextInput;
