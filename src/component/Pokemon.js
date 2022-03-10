import React from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'

const Pokemon = ({ name, pic, types, desc }) => {
    return (
        <View style={{padding:10,backgroundColor: "white",borderRadius:30,alignItems: 'center',marginLeft: 40, marginRight: 40,height:'80%',top:20}}>
            <Image style={{ width: 150, height: 150 }} source={{ uri: pic }} resizeMode="contain" />
            <Text style={{ fontSize: 20, marginBottom: 10,color:'black',fontWeight:'bold' }}>{name}</Text>

            <FlatList
                columnWrapperStyle={styles.types}
                data={types}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem = {({ item }) => (
                    <View style={[styles[item.name], styles.type]}>
                        <Text style={{color:'white' ,fontWeight:'bold'}}>{item.name}</Text>
                    </View>
                )}
            />

            <View style={{marginBottom:60}}> 
                <Text style={{color: 'black',fontSize:10}}>{desc}</Text>
            </View>
        </View>
    )
}

export default Pokemon;

const styles = StyleSheet.create({
    normal: {
        backgroundColor: '#8a8a59'
    },
    fire: {
        backgroundColor: '#f09030'
    },
    water: {
        backgroundColor: '#6890f0'
    },
    electric: {
        backgroundColor: '#f8d030'
    },
    grass: {
        backgroundColor: '#78c850'
    },
    ice: {
        backgroundColor: '#98d8d8'
    },
    fighting: {
        backgroundColor: '#c03028'
    },
    poison: {
        backgroundColor: '#a040a0'
    },
    ground: {
        backgroundColor: '#e9c968'
    },
    flying: {
        backgroundColor: '#a890f0'
    },
    psychic: {
        backgroundColor: '#f85888'
    },
    bug: {
        backgroundColor: '#a8b820'
    },
    rock: {
        backgroundColor: '#b8a038'
    },
    ghost: {
        backgroundColor: '#705898'
    },
    dragon: {
        backgroundColor: '#7038f8'
    },
    dark: {
        backgroundColor: '#705848'
    },
    steel: {
        backgroundColor: '#b8b8d0'
    },
    fairy: {
        backgroundColor: '#e898e8'
    },
    type: {
        padding: 5,
        width: 100,
        alignItems: 'center'
    },
    types: {
        flexDirection: 'row',
        marginTop: 20
    }
});