import { createStackNavigator } from "@react-navigation/stack";
import olamundo from "../olamundo";
import NavBar from "../../components/NavBar";
import { Button,Text } from "react-native";


const MainStack =createStackNavigator();

export default () => {
		return(
	<MainStack.Navigator screenOptions={{
			headerTitleAlign:'center',
			headerStyle:{
				backgroundColor:"#900",
				height: 100,
			},
			headerTitleStyle:{
				color: "#000",
				fontSize:16
			}
		}}>
		
			<MainStack.Screen name="Lista de Filmes" component={olamundo} />
			<MainStack.Screen name="about" component={NavBar} />
			
	</MainStack.Navigator>
	)
  }
