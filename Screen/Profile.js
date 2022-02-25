import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default function Profile({ onPress }) {
    
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'lightblue', flex: 1 }}>

            </View>

            <View style={{ flex: 2, top: -170, justifyContent: 'center', alignItems: 'center'}}>

                <Image source={require('../assets/movies.jpg')}
                    style={{ width: 150, height: 150, borderRadius: 80 }}>
                </Image>

                <View style={{ top: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Kunanon Chairerk</Text>
                </View>

                <View style={{ top: 10 }}>
                    <Text style={{ fontSize: 12, color: 'gray' }}>เริ่มเป็นสมาชิกตั้งแต่ 19 กุมภาพันธ์ 2565</Text>
                </View>

                <View style={{ width: 100, height: 50, justifyContent: 'center', top: 20 }}>
                    <View>
                        <Button
                    title="แก้ไขโปรไฟล์"
                    buttonStyle={{
                        backgroundColor: 'rgba(111, 202, 186, 1)',
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
                    title="ออกจากระบบ"
                    buttonStyle={{
                        backgroundColor: 'red',
                        borderRadius: 5,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                    containerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        width: 200,
                        right: 45,
                        top: 10
                    }}/>
                    </View>
                </View>
            </View>

        </View>
    )
}