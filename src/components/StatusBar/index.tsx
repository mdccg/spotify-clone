import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar as ReactNativeStatusBar, View } from 'react-native';
import Theme from './../../stylesheets/theme';

const StatusBar = () => (
  <>
    <ExpoStatusBar style="light" />
    <View style={{
      height: ReactNativeStatusBar.currentHeight,
      backgroundColor: Theme.colors.black
      }} />
  </>
);

export default StatusBar;