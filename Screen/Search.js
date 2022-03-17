import React, { Component } from 'react'
import { View, TextInput, Alert, StyleSheet, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-elements'

import axios from 'axios'
import pokemon from 'pokemon'
import Pokemon from '../src/component/Pokemon'

const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2';

export default class Search extends Component {

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
            <View style={{ backgroundColor: '#b22222', height: '110%' }}>
                <View>
                        <View>
                        <View style= {{flexDirection:'row'}}>
                            <View style={{padding:10}}>
                            <TextInput
                                style={styles.search}
                                placeholder="Search Pokemon"
                                onChangeText={(searchInput) => this.setState({ searchInput })}
                                value={this.state.searchInput}
                            />
                            </View>
                            <View style={{padding:10, top:3}}>
                            <Button
                                title="SEARCH"
                                buttonStyle={{
                                    backgroundColor: 'white',
                                    borderRadius: 5,
                                    
                                }}
                                titleStyle={{ fontSize: 10 ,color:'black'}}
                                containerStyle={{
                                    width:70,
                                    height:60,
                                }}
                                onPress={this.searchPokemon}
                            />
                            </View>
                        </View>
                    </View>

                    <View>
                        {isLoading && <ActivityIndicator size="large" color={"lightblue"} />}

                        {!isLoading && (
                            <Pokemon name={name} pic={pic} types={types} desc={desc} />
                        )}
                    </View>
                </View>
            </View>
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
        padding:3,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'white',
        width:250

    }
})