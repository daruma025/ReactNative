import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, LinearProgress } from 'react-native-elements';
import { StackActions } from '@react-navigation/native';

export default function Profile({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.background}>
                <Text style={styles.stoshiname}>Satoshi</Text>
                <Text style={styles.pikachuname}>&Pikachu</Text>
                <Image source={require('../assets/satoshiandpikachu.png')}
                    style={styles.pic}>
                </Image>
                <Text style={styles.level}>Level 10</Text>
                <LinearProgress style={styles.linear} color="white" />
                <Text style={styles.xp}>9999/10000 XP</Text>

                <Button
                    title="LOGOUT"
                    buttonStyle={{
                        backgroundColor: 'white',
                        borderRadius: 20,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}
                    containerStyle={{
                        height: 40,
                        width: 260,
                        top: 60,
                        left: 50
                    }}
                    onPress={() => navigation.dispatch(StackActions.push('Login', { user: ' ' }))}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#b22222', flex: 2
    },
    stoshiname: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 30,
        fontWeight: 'bold',
        top: 20,
        left: 130
    },
    pikachuname: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 20, fontWeight: 'bold',
        top: 17,
        left: 130
    },
    pic: {
        width: 200,
        height: 270,
        top: 35,
        left: 80
    },
    level: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 25,
        fontWeight: 'bold',
        top: 40,
        left: 130
    },
    linear: {
        marginVertical: 10,
        width: 300,
        height: 10,
        top: 30,
        left: 30,
        borderRadius: 60
    },
    xp: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 16,
        fontWeight: 'bold',
        top: 30,
        left: 120
    },

})