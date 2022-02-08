import { useNavigation } from "@react-navigation/native";
import { View,Text,StyleSheet,Button,TextInput,FlatList,Image } from "react-native";
import { useState,useEffect, Component } from "react";



 function HomeScreen() {
 	const navigation = useNavigation()
 	const handleBack = () => {
 	  navigation.navigate('about')
 	}
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

 	useEffect(() => {
		
		const requestMovie = async () => {
			setLoading(true)
			const req  = await fetch('https://api.tvmaze.com/schedule');
			const json = await req.json();
	  
		if( json ){
			setMovies( json )
		}
		setLoading(false)
	}
		requestMovie()
	}, []);

	const onChangeFilme = () => {
	  alert('digitou')
	}



   return(
 	<View style={styles.container}>
	 
		<>
			<Button title="Voltar" onPress={handleBack}/>	
			<TextInput 
				style={styles.input}
				onChangeText={onChangeFilme}
				placeholder="Digite o Nome Do filme"
			/>
		 </>		
	 
	 {!loading &&
	 
		 <FlatList  
	                data = {movies}
	                renderItem = {({ item })=>(
						<View style = {styles.moviesItem}>
							<Image 
						source     = {{ uri: item.show.image.medium }}
						style      = {styles.imageItems}
						resizeMode = "contain"
					  />
							<Text >{ item.show.name }</Text>
						</View>
			  )}
			  keyExtractor = { item => item.id }
		  />
	 }
 	</View>
   )
 }
 export default HomeScreen;

 const styles =StyleSheet.create({
 	container:{
 		flex: 1,
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
	
 })


