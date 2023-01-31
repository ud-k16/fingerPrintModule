import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const CustomTextBold = props => {
  const {children} = props;
  return <Text variant="titleLarge" children={children} />;
};

export default CustomTextBold;

const styles = StyleSheet.create({});
