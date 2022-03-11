import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const Home = props => {
  const [pokemons, setPokemons] = useState([]);
  const [searchfeild, setSearchfeild] = useState('');

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results));
  };

  return (
    <View style={{backgroundColor:'#ffffff'}}>
      <View style={styles.searchCont}>
        <TextInput
          style={styles.searchfeild}
          placeholder="Search Pokemons"
          onChangeText={value => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>
      <ScrollView style={{top:15}}>
        <View style={styles.container}>
          {pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchfeild.toLowerCase())
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    props.navigation.navigate('Details', {
                      pokemon: pokemon.name,
                    })
                  }>
                  <Image
                    style={{width: 150, height: 150}}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                        pokemon.name
                      }.png`,
                    }}
                  />
                  <Text style={{fontStyle:'italic', fontSize:20,color:'#ffffff',fontWeight:'bold'}}>{pokemon.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 30,
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#FF9900',
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius:8,
      height:200,
      backgroundColor: '#FF9900'

    },
    searchCont: {
      marginHorizontal:50,
      marginTop:20,
    },
    searchfeild: {
      height: 40,
      borderWidth: 1,
      borderColor: '#000',
      textAlign: 'center',
      width: 250,
      borderRadius: 50,
    },
  });