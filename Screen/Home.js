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

  const releasePokemon = id => {
    setPokedex(state => state.filter(p => p.id != id))
  }

  return (

    <View>
      <View>
        <Image
          style={{ width: 150, height: 150 }}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${wildPokemon.name
              }.png`,
          }}
        />
        <Text>{wildPokemon.name}</Text>
        <Button
          title="Catch"
          buttonStyle={{
            backgroundColor: 'black',
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
          containerStyle={{
            height: 50,
            width: 90,
            top: 40,
            margin: 10
          }}
          onPress={() => catchPokemon(wildPokemon)}
        />
      </View>

      <Text style={{ top: 50 }}>Pokédex</Text>
      <ScrollView style={{ top: 50 }}>
        <View>
          {pokedex.map(pokemon => (
            <View key={pokemon.id}>
              <Image
                style={{ width: 150, height: 150 }}
                source={{
                  uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name
                    }.png`,
                }} />

              <Text>{pokemon.name}</Text>
              <Button
                title=""
                buttonStyle={{
                  backgroundColor: 'black',
                  borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
                containerStyle={{
                  height: 50,
                  width: 30,
                  top: 40,
                  margin: 10
                }}
                onPress={() => releasePokemon(pokemon.id)}


              />
            </View>
          ))}
        </View>
      </ScrollView>

    </View>
  )
}