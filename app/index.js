import React, { useEffect } from 'react';
// import { useFonts } from 'expo-font';
// import { SplashScreen } from 'expo';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import Home from './App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#663399',
    secondary: 'white',
    tertiary: 'pink',
  },
};

const Main = () => {

  // const [fontsLoaded] = useFonts({
  //   DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
  //   DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
  //   DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  // });

  // useEffect(() => {
  //   // Hide SplashScreen after fonts are loaded
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null; // or render a loading indicator
  // }

  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
};

export default Main; 
