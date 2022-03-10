import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native'

import axios from 'axios'
import pokemon from 'pokemon'
import Pokemon from '../src/component/Pokemon'

const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2';

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            searchInput: '',
            name: '',
            pic: '',
            types: [],
            desc: ''
        }
    }

    render() {

        const { name, pic, types, desc, searchInput, isLoading } = this.state
        return (
            <ScrollView contentContainerStyle={{backgroundColor:'black',height:'110%'}}>
                <View>
                    <View>
                        <View>
                            <Text style={{color:'white',fontSize:25,textAlign:'center',top:60,fontWeight:'900',height:50}}>Poké Deck</Text>
                            
                            <TextInput
                                style={styles.search}
                                placeholder="Search Pokemon"
                                onChangeText={(searchInput) => this.setState({ searchInput })}
                                value={this.state.searchInput}
                            />

                        </View>
                        <View style={{ marginLeft: 40, marginRight: 40 }}>
                            <Button
                                title="search"
                                buttonStyle={{
                                    color: '#ffffff',
                                    borderRadius: 5,
                                }}
                                onPress={this.searchPokemon}
                            />
                        </View>
                    </View>

                    <View>
                        {isLoading && <ActivityIndicator size="large" color={"lightblue"} />}

                        {!isLoading && (
                            <Pokemon name={name} pic={pic} types={types} desc={desc} />
                        )}
                    </View>
                </View>
            </ScrollView>
        );
    }

    searchPokemon = async () => {
        try {
            const pokemonID = pokemon.getId(this.state.searchInput)

            this.setState({ isLoading: true })

            const { data: pokemonData } = await axios.get(`${POKE_API_BASE_URL}/pokemon/${pokemonID}`)
            const { data: pokemonSpecieData } = await axios.get(`${POKE_API_BASE_URL}/pokemon-species/${pokemonID}`)

            const { name, sprites, types } = pokemonData
            const { flavor_text_entries } = pokemonSpecieData

            this.setState({
                name,
                pic: sprites.front_default,
                types: this.getTypes(types),
                desc: this.getDescription(flavor_text_entries),
                isLoading: false
            })

        } catch (err) {
            Alert.alert('Error', 'Pokemon not found')
        }
    }

    getTypes = (types) => types.map(({ slot, type }) => ({
        id: slot,
        name: type.name
    }))

    getDescription = (entries) =>
        entries.find((item) => item.language.name === 'en').flavor_text;
}

const styles = StyleSheet.create({
    search: {
        marginTop: 90,
        padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor:'white'

    }
})
