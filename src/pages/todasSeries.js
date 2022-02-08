import { useNavigation } from "@react-navigation/native";
import { View,Text,StyleSheet,Button,TextInput,FlatList,Image,TouchableOpacity } from "react-native";
import { useState,useEffect, } from "react";




const Sobre = (props) => {
	const [about, setAbout] = useState('');
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);
	const API = "https://api.tvmaze.com/shows"



	useEffect(() => {
		requestMovie()
		
	}, []);

	const requestMovie = async () => {
		setLoading(true)
		const req  = await fetch(`${API}`);
		const json = await req.json();

	if( json ){
		setMovie( json )
	}
	setLoading(false)
}


	const handleAbout = () => {
	  
	}

  return(
	<View style={styles.container}>
	 
				
	 
	 {!loading && 
	 <>
		 <FlatList  
	                data = {movie}
	                renderItem = {({ item })=>(
						//Lista de Filmes
						<TouchableOpacity onPress={() => alert(`GENERO ${item.genres}`)}>
						{/* onPress={() => alert(`SOBRE A SERIE ${item.summary} GENERO ${item.genres}`) */}
							<View style = {styles.moviesItem}>
									<Image 
									source     = {{ uri: item.image.medium }}
									style      = {styles.imageItems}
									resizeMode = "contain"
									/>
									<Text style={styles.moviesText} >Serie: { item.name }</Text>
									<Text style={styles.moviesTextNota}>Nota: <Text style={styles.moviesTextColor}>{ item.rating.average }</Text></Text>
									<Text style={styles.moviesTextAbout}><Text style={styles.moviesTextColor}>Sobre a Serie:</Text> {item.summary}</Text>
										
							</View>
							</TouchableOpacity>
			  )}
			  keyExtractor = { item => String(item.id) }
			  onEndReachedThreshold={0.5}
		  />
		  
			
	 </>
	 }
 	</View>
  )
}

export default Sobre

const styles =StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor:"#333",
		color: "#FFF"
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
   moviesTextAbout:{
	color: "#FFF",
	fontSize:18,
	marginTop:30
   },
   input:{
	   padding: 30,
	   alignItems:"center",
	   justifyContent:"center",
	   fontSize: 18,
   }
})

