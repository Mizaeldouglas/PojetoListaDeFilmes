import { View,Text,StyleSheet,Button,TextInput,FlatList,Image, TouchableOpacity } from "react-native";
import { useState,useEffect, } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Sobre from "./todasSeries";



 function HomeScreen() {
	const [searchText, setSearchText] = useState('');
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const [ListaMovies, setListaMovies] = useState([]);
	const API = "https://api.tvmaze.com/shows/1"

	
	useEffect(() => {
		searchMovie()
	}, [searchText]);

    // requisição da API

	

	  const requestMovie = async () => {
		  setLoading(true)
		  const req  = await fetch(`${API}`);
		  const json = await req.json();
  
	  if( json ){
		setListaMovies( json )
	  }
	  setLoading(false)
 }
		// Compo de Pesquisa
		

	const searchMovie = async () => {
		setLoading(true)
		const req  = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`);
		const json = await req.json();

	if( json ){
		setMovies( json )
	}
	setLoading(false)
}
	const navigation =  useNavigation()
	const handleClicl = () => {
	  navigation.navigate('Sobre')
	}

   return(
 	<View style={styles.container}>
	 
		<>
			
			<TextInput 
				style={styles.input}
				onChangeText={(t) => setSearchText(t)}
				value={searchText}
				placeholder="Digite o Nome da Serie"
				placeholderTextColor={'#fff'}
				
			/>
			<TouchableOpacity style={styles.button}  onPress={handleClicl}>
				<Text style={styles.btnText}>Todas as Series</Text>
			</TouchableOpacity>
		  
			
		 </>		
	 
	 {!loading && 
	 <>
		 <FlatList  
	                data = {movies || ListaMovies}
	                renderItem = {({ item })=>(
						//Lista de Filmes
						<TouchableOpacity onPress={() => alert(`GENERO: ${item.show?.genres}`) }>
							<View style = {styles.moviesItem}>
									<Image 
									source     = {{ uri: item.show?.image?.medium }}
									style      = {styles.imageItems}
									resizeMode = "contain"
									/>
									<Text style={styles.moviesText}>{ item.show?.name }</Text>
									<Text style={styles.moviesTextNota}>Nota: <Text style={styles.moviesTextColor}>{ item.show?.rating.average }</Text></Text>
							</View>
							</TouchableOpacity>
			  )}
			  keyExtractor = { item => String(item.show?.id) }
		  />
		  
			
	 </>
	 }
 	</View>
   )
 }
 export default HomeScreen;

 const styles =StyleSheet.create({
 	container:{
 		flex: 1,
		 backgroundColor:"#333",
		 color: "#fff"
 	},
	 imageItems:{
		width : 300,
		height: 300,
		borderRadius:10,
	},
	moviesItem:{
		alignItems  : "center",
		marginHorizontal:30,
		marginVertical:30
	},
	moviesText:{
		fontSize:25,
		marginTop:20,
		color: "#FFF"
	},
	moviesTextNota:{	
		color: "#fff",
		fontSize: 18,
		marginTop:5
   },
   moviesTextColor:{
	color: "#F7CE5B"
   },
	input:{
		padding: 30,
		alignItems:"center",
		justifyContent:"center",
		textAlign:"center",
		fontSize: 18,
		color: "#FFF"
	},
	button:{
		justifyContent:"center",
		textAlign:"center",
		alignItems:"center",
		borderRadius:15
	},
	btnText:{
		backgroundColor:"#ccc",
		padding: 30,
		borderRadius:15,

	}
	
 })


