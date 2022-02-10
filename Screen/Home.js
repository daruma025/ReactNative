import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Styles from './Style.js';

const Home = () => {
    const image = require('../assets/movies.jpg')
    const item = ['Home Sweet Home', 'Our belove of summer',
        'Bad and Crazy', 'ตำรารักทะลุจอ', 'Moonshine',
        'Harry Potter', 'Ghost Docter', 'Reply1988',
        'Sissypmus', 'Start-Up']
    return (
        <ScrollView>
            <View style={Styles.List}>
                {
                    item.map((item, i) => {
                        return (<View key={i} style={Styles.item}>
                            <Image key={i} source={image} item={item}
                                style={{ width: 120, height: 165 }}></Image>
                            <Text>{item}</Text>
                        </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}
export default Home
