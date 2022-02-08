import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/pages/HomeScreen';
import NavBar from './src/components/NavBar';


function App() {
  return (
	<NavigationContainer>
		<HomeScreen />
	</NavigationContainer>
  );
}

export default App;