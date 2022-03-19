import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';

export default function Home() {
  const [pokedex, setPokedex] = useState([])
  const [wildPokemon, setWildPokemon] = useState({});

  useEffect(() => {
    encounterWildPokemon()
  }, [])

  const pokeId = () => {
    const min = Math.ceil(1)
    const max = Math.floor(151)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const encounterWildPokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + pokeId())
      .then(response => {
        setWildPokemon(response.data);
      })
  }

  const catchPokemon = (pokemon) => {
    setPokedex(state => {
      const monExists = (state.filter(p => pokemon.id == p.id).length > 0);

      if (!monExists) {
        state = [...state, pokemon]
        state.sort(function (a, b) {
          return a.id - b.id
        })
      }
      return state
    })

    encounterWildPokemon()
    
  }

  const releasePokemon = (id) => {
    setPokedex(state => state.filter(p => p.id != id))
  }
  

  return (

    <View style={{backgroundColor:'white'}}>
      <View style={{ backgroundColor: '#b22222' }}>
        <Text style={{ fontSize: 30, fontWeight: 'normal', color: 'white', left: 50, top: 10 }}>WILD ENCOUNTER</Text>
        <Image
          style={{ width: 150, height: 150, left: 100 }}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${wildPokemon.name
              }.png`,
          }}
        />
        <Text style={{ color: 'white', fontStyle: 'normal', left: 150, top: -20 }}>{wildPokemon.name}</Text>
        <Button
          title="CATCH"
          buttonStyle={{
            backgroundColor: 'yellow',
            borderRadius: 20,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}
          containerStyle={{
            height: 40,
            width: 200,
            left: 80,
            top: -10
          }}
          onPress={() => catchPokemon(wildPokemon)}
        />
      </View>

      <View style={{ backgroundColor: 'white'}}>
        <Text style={{ fontSize: 25, fontWeight: 'normal', left: 20}}>Pokédex</Text>
      </View>

      
      <ScrollView style={{backgroundColor:'white',height:500}}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            top:20,
          }}>
            {pokedex.map(pokemon => (
              <View key={pokemon.id} style={{borderWidth:2,borderRadius:5,margintop:40,marginBottom:40,marginLeft:10,marginRight:10}}>
                <Button
                  title="x"
                  buttonStyle={{
                    backgroundColor: 'black',
                  }}
                  titleStyle={{fontSize: 10 }}
                  containerStyle={{
                    height: 30,
                    width: 30,
                  }}
                  onPress={() => releasePokemon(pokemon.id)}
                />
                <Image
                  style={{ width: 150, height: 150 }}
                  source={{
                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name
                      }.png`,
                  }} />

                <Text style={{left:50}}>{pokemon.name}</Text>

              </View>
            ))}
          </View>
          </ScrollView>
      

    </View>
  )
}