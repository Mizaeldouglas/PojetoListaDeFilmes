import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/pages/HomeScreen';


function App() {
  return (
	<NavigationContainer>
		<HomeScreen />
	</NavigationContainer>
  );
}

export default App;