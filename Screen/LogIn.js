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
                    name = 'lock'
                    color= 'white'
                    size= {20}
                    />}
                    placeholder="  Password"
                />

                <Button
                    title="Login"
                    loading={false}
                    loadingProps={{ size: 'small', color: 'white' }}
                    buttonStyle={{
                        backgroundColor: '#FF9900',
                        borderRadius: 5,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{
                        height: 50,
                        width: 150,
                        top: 40,
                        margin:10
                    }}
                    onPress={() => navigation.dispatch(StackActions.push('Tabs',{ user: ' ' }))}
                />
                
                <Button
                    title="Create an account"
                    buttonStyle={{
                        backgroundColor: 'black',
                        borderRadius: 5,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
                    containerStyle={{
                        height: 50,
                        width: 250,
                        top: 40,
                        margin:10
                    }}
                    onPress={() => navigation.dispatch(StackActions.push('Signup',{ user: ' ' }))}
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
    },
    Images: {
        width: 150,
        height: 150,
        margin: 10,
        bottom:20,
        borderRadius: 20

    }

})

