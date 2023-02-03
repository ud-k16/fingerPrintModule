import {Button, StyleSheet, Text, View} from 'react-native';
import FingerPrintScanner from '../FingerPrintModule';

const BioMatrixTest = () => {
  const printWorking = outputFromNativeModules => {
    console.log(`${JSON.stringify(outputFromNativeModules, null, 4)}`);
  };

  return (
    <View>
      <Button
        onPress={() => {
          FingerPrintScanner.isBiometrixAvailable(printWorking);
        }}
        mode="outlined"
        title="isBiomatrix available"
      />
      <Button
        onPress={() => {
          FingerPrintScanner.showFingerPrintAuthDialog();
        }}
        mode="outlined"
        title="show Biomatrix login "
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default BioMatrixTest;
