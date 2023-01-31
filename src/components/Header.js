import {StyleSheet, View} from 'react-native';
import {Appbar} from 'react-native-paper';

const Header = ({navigation, back, options}) => {
  return (
    <Appbar.Header style={styles.appbarContainer}>
      {back ? (
        <>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title={'TAXI'} style={styles.appbarContent} />
        </>
      ) : (
        <Appbar.Content title={'TAXI'} style={styles.appbarContent} />
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appbarContainer: {
    backgroundColor: '#FFA533',
  },
  appbarContent: {justifyContent: 'center', alignItems: 'center'},
});

export default Header;
