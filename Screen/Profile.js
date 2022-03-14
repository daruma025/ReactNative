import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { StackActions } from '@react-navigation/native';

export default function Profile({ navigation }) {
    
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'red', flex: 2 , flexDirection:'row'}}>
            <Image source={require('../assets/satochi.jpg')}
                    style={{ width: 150, height: 150, borderRadius:80 ,marginHorizontal:20,top:20}}>
                </Image>
            <Text style>Satoshi Tajiri</Text>
            </View>

            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center'}}>

                <View style={{ top: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Pikachu</Text>
                </View>

                <View style={{ top: 10 }}>
                    <Text style={{ fontSize: 12, color: 'gray' }}>Exp : 9999999999999999</Text>
                </View>

                <View style={{ width: 100, height: 50, justifyContent: 'center', top: 20 }}>
                    <View>
                        <Button
                    title="Edit Profile"
                    buttonStyle={{
                        backgroundColor: '#FF9900',
                        borderRadius: 5,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                    containerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        width: 200,
                        right: 45,
                        top: 15
                    }}/>

                    </View>
                    <View>
                    <Button
                    title="Logout"
                    buttonStyle={{
                        backgroundColor: 'red',
                        borderRadius: 5,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
                    containerStyle={{
                        height: 50,
                        width: 250,
                        top: 40,
                        right: 75,
                        top: 80
                    }}
                    onPress={() => navigation.dispatch(StackActions.push('Login',{ user: ' ' }))}
                    />
                    
                    </View>
                </View>
            </View>

        </View>
    )
}