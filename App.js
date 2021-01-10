import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/webpage';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
    } from '@react-navigation/native';

import { 
      Provider as PaperProvider, 
      DefaultTheme as PaperDefaultTheme,
      DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import toggleTheme from './screens/toggleTheme';

export default function App() {
  /* const [isDarkTheme, setIsDarkTheme] = React.useState(false);
const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
 colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    
  }}

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const authContext = React.useMemo(() => ({
  toggleTheme: () => {
    setIsDarkTheme( isDarkTheme => !isDarkTheme );
  }
}))
<PaperProvider theme={PaperDarkTheme}>
    <NavigationContainer theme={theme}> </NavigationContainer></PaperProvider>
*/

  return (
    
    <View style={styles.container}>
      <HomePage/>
   </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


var AppNavigator = createSwitchNavigator({
 HomePage : HomePage,
});
const AppContainer = createAppContainer(AppNavigator);
