import {useState, useEffect, useRef} from 'react';
import {Modal, StyleSheet, View, TouchableHighlight} from 'react-native';
import MapView from 'react-native-maps';
import {
  Appbar,
  Button,
  Divider,
  IconButton,
  MD3LightTheme,
  Text,
} from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CustomTextBold} from '../components/CustomText';

const TaxiMap = ({navigation}) => {
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerShown: true,
      headerStyle: {
        marginTop: 40,
        top: 80,
      },
      headerShadowVisible: false,
      header: () => <MapViewHeader />,
    });
  }, []);

  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 9.9252,
          longitude: 78.1198,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{minHeight: '100%'}}
        minZoomLevel={2}
      />
      <Modal transparent visible={true}>
        <SelectOptions bottomSheetRef={bottomSheetRef} />
      </Modal>
    </View>
  );
};

const MapViewHeader = () => {
  return (
    <View
      style={{
        top: 20,
        backgroundColor: MD3LightTheme.colors.backdrop,
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <IconButton
        icon={'menu'}
        style={{
          borderRadius: 25,
          backgroundColor: '#FFB552',
          elevation: 5,
          left: 7,
        }}
      />
      <IconButton
        icon={'bell'}
        style={{
          borderRadius: 25,
          backgroundColor: '#FFB552',
          elevation: 5,
          right: 7,
        }}
      />
    </View>
  );
};

//inorder for enablePanDownToClose to work wrappng it in gestureHandlerRootHOC
const SelectOptions = gestureHandlerRootHOC(({bottomSheetRef}) => {
  const [select, setSelect] = useState();

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={['60%']}
      enablePanDownToClose={true}>
      <Back />
      <View style={styles.optionContainer}>
        <Option title={'RENT'} select={select} setSelect={setSelect} />
        <Option title={'DAILY'} select={select} setSelect={setSelect} />
        <Option
          title={'OUT OF STATION'}
          select={select}
          setSelect={setSelect}
        />
      </View>
    </BottomSheet>
  );
});

const Back = () => {
  return (
    <View style={styles.backContainer}>
      <Icon
        name={'keyboard-backspace'}
        size={25}
        color={'black'}
        onPress={() => bottomSheetRef.current.close()}
      />
      <CustomTextBold children={'BACK'} style={{left: 110}} />
    </View>
  );
};
const Option = ({title, select, setSelect}) => {
  return (
    <TouchableHighlight onPress={() => setSelect(title)} style={{flex: 1}}>
      <View style={styles.option}>
        <Icon
          name={'directions-car'}
          size={35}
          // color={'#FFA533'}
          color={MD3LightTheme.colors.surfaceDisabled}
        />
        <Icon
          name={'arrow-drop-down-circle'}
          size={30}
          color={'black'}
          style={{elevation: 1000, zIndex: 1000}}
        />

        <Divider style={styles.divider} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  backContainer: {
    backgroundColor: MD3LightTheme.colors.surfaceDisabled,
    flex: 0.17,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    flex: 0.3,
    width: '100%',
    paddingVertical: 40,
  },
  option: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    backgroundColor: MD3LightTheme.colors.surfaceDisabled,
    height: 7,
    width: '100%',
    position: 'absolute',
    bottom: 45,
    left: 8,
  },
  title: {},
  selected: {
    backgroundColor: '#FFA533',
  },
});
export default TaxiMap;
