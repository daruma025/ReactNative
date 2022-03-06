import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button,Input } from 'react-native-elements';
import { StackActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
  
export default function LogIn({ navigation }){
 
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>

            <View style={styles.body}>
                <Image source={require('../assets/Nethub.png')}
                    style={{width:150, height: 150, bottom:50}} />

                <Input 
                    leftIcon = {<Icon 
                    name = 'user'
                    color= 'white'
                    size= {20}
                    />}
                    placeholder="  Username"
                />
                <Input 
                    leftIcon = {<Icon 
                    name = 'email'
                    color= 'white'
                    size= {20}
                    />}
                    placeholder="  Email"
                />
                <Input 
                leftIcon = {<Icon 
                    name = 'lock'
                    color= 'white'
                    size= {20}
                    />}
                    placeholder="  Password"
                />

                <Button
                    title="Register"
                    loading={false}
                    loadingProps={{ size: 'small', color: 'white' }}
                    buttonStyle={{
                        backgroundColor: '#FF9900',
                        borderRadius: 5,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 200,
                        marginVertical: 10,
                        top: 40
                    }}
                    onPress={() => navigation.dispatch(StackActions.push('Login',{ user: ' ' }))}
                />
            </View>

            <View style={styles.footer}></View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
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
    }
})

