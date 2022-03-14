import React from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { StackActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignUp({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>

            <View style={styles.body}>
                <Image source={require('../assets/pokemon-go.png')}
                    style={{ width: 300, height: 200, bottom: 50 }} />

                <TextInput
                    style={styles.input}
                    placeholder="USERNAME"
                />

                <TextInput
                    style={styles.input}
                    placeholder="E-MAIL"
                />

                <TextInput
                    style={styles.input}
                    placeholder="PASSWORD"
                />

                <Button
                    title="REGISTER"
                    buttonStyle={{
                        backgroundColor: 'red',
                        borderRadius: 20,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
                    containerStyle={{
                        height: 40,
                        width: 260,
                        top: 10,
                        margin: 5
                    }}
                    onPress={() => navigation.dispatch(StackActions.push('Login', { user: ' ' }))}
                />
            </View>

            <View style={styles.footer}></View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        width: 260,
        borderRadius: 20

    }
})

