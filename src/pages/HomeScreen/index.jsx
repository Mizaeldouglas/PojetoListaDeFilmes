import { createStackNavigator } from "@react-navigation/stack";
import ListaFilmes from "../ListaFilmes";
import Sobre from "../todasSeries";


const MainStack =createStackNavigator();

export default () => {
		return(
	<MainStack.Navigator screenOptions={{
			headerTitleAlign:'center',
			headerStyle:{
				backgroundColor:"#222",
				height: 100,
			},
			headerTitleStyle:{
				color: "#fff",
				fontSize:16
			}
		}}>
		
			<MainStack.Screen name="Series" component={ListaFilmes} />
			<MainStack.Screen name="Sobre" component={Sobre} />
			
	</MainStack.Navigator>
	)
  }
