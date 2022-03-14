import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, Text } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { StackActions } from '@react-navigation/native';

export default function LogIn({ navigation }) {

    const [isSelected, setSelection] = useState(true);

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
                    placeholder="PASSWORD"
                />

                <View style={styles.checkboxContainer}>
                    <CheckBox />
                    <Text style={styles.label}>Remember me</Text>
                </View>

                <Button
                    title="LOGIN"
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
                    onPress={() => navigation.dispatch(StackActions.push('Tabs', { user: ' ' }))}
                />
                <View>
                    <Text style={{ top: 40, fontWeight: 'bold', color: 'gray' }}>Forget your password ?</Text>
                </View>

                <View style={{top:40,flexDirection:'row'}}>
                    <Text style={{top:8}}>Don't have an account ?</Text>
                    <Button
                        title="Create an account"
                        buttonStyle={{
                            backgroundColor: 'white',
                            borderRadius: 5,
                        }}
                        titleStyle={{ fontWeight: 'bold', fontSize: 13, color: 'gray' }}
                        containerStyle={{
                            height: 40,
                            width: 134
                        }}
                        onPress={() => navigation.dispatch(StackActions.push('Signup', { user: ' ' }))}
                    />
                </View>
            </View>

            <View style={styles.footer}></View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
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
    Images: {
        width: 150,
        height: 150,
        margin: 10,
        bottom: 20,
        borderRadius: 20
    },
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        width: 260,
        borderRadius: 20

    },
    checkboxContainer: {
        flexDirection: "row",
    },
    label: {
        marginRight: 140,
        marginTop: 15,
        color: 'gray',
    }

})

