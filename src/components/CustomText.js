import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

/**
 * display text bold and black
 * @param {*} props
 * @returns
 */
const CustomTextBold = props => {
  const {children, color} = props;
  return <Text variant="titleLarge" children={children} />;
};

/**
 * display text in gray color
 * @param {*} props
 * @returns
 */
const CustomTextDescription = props => {
  const {children} = props;
  return (
    <Text variant="titleLarge" children={children} style={styles.describe} />
  );
};

/**
 * display text in App color, majorly title
 * @param {*} props
 * @returns
 */
const CustomTextTitle = props => {
  const {children} = props;
  return (
    <Text variant="displaySmall" children={children} style={styles.title} />
  );
};

const styles = StyleSheet.create({
  describe: {color: 'gray'},
  title: {color: '#FFA533'},
});

export {CustomTextBold, CustomTextDescription, CustomTextTitle};
