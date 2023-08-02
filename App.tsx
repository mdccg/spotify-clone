import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Theme from './src/stylesheets/theme';
import Home from './src/screens/Home';
import StatusBar from './src/components/StatusBar';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'GothamBoldItalic': require('./assets/fonts/Gotham/GothamBoldItalic.ttf'),
    'Gotham-Light': require('./assets/fonts/Gotham/Gotham-Light.otf'),
    'GothamMedium_1': require('./assets/fonts/Gotham/GothamMedium_1.ttf'),
    'Gotham-UltraItalic': require('./assets/fonts/Gotham/Gotham-UltraItalic.otf'),
    'Gotham-Black': require('./assets/fonts/Gotham/Gotham-Black.otf'),
    'GothamBook': require('./assets/fonts/Gotham/GothamBook.ttf'),
    'GothamLight': require('./assets/fonts/Gotham/GothamLight.ttf'),
    'GothamMediumItalic': require('./assets/fonts/Gotham/GothamMediumItalic.ttf'),
    'Gotham-XLight': require('./assets/fonts/Gotham/Gotham-XLight.otf'),
    'Gotham-Bold': require('./assets/fonts/Gotham/Gotham-Bold.otf'),
    'Gotham-BookItalic': require('./assets/fonts/Gotham/Gotham-BookItalic.otf'),
    'GothamLightItalic': require('./assets/fonts/Gotham/GothamLightItalic.ttf'),
    'Gotham-Thin': require('./assets/fonts/Gotham/Gotham-Thin.otf'),
    'Gotham-XLightItalic': require('./assets/fonts/Gotham/Gotham-XLightItalic.otf'),
    'GothamBold': require('./assets/fonts/Gotham/GothamBold.ttf'),
    'GothamBookItalic': require('./assets/fonts/Gotham/GothamBookItalic.ttf'),
    'GothamMedium': require('./assets/fonts/Gotham/GothamMedium.ttf'),
    'Gotham-ThinItalic': require('./assets/fonts/Gotham/Gotham-ThinItalic.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar />

      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;