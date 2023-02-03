import {useCallback, useEffect, useRef} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {
  Appbar,
  Button,
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
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={['60%']}
      enablePanDownToClose={true}>
      <View
        style={{
          backgroundColor: MD3LightTheme.colors.surfaceDisabled,
          flex: 0.15,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: 20,
        }}>
        <Icon
          name={'keyboard-backspace'}
          size={25}
          color={'black'}
          onPress={() => bottomSheetRef.current.close()}
        />
        <CustomTextBold children={'BACK'} style={{left: 110}} />
      </View>

      {/* <Button
        children={'BACK'}
        icon={'arrow-left'}
        buttonColor={MD3LightTheme.colors.backdrop}
      /> */}
    </BottomSheet>
  );
});
const styles = StyleSheet.create({});
export default TaxiMap;
