import React from 'react';

import { StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';

const DATA = [

    {
        title: "การเล่นวิดีโอ",
        data: ["การใช้อินเทอร์เน็ตมือถือ"]
    },
    {
        title: "การแจ้งเตือน",
        data: ["อนุญาตการแจ้งเตือน"]
    },
    {
        title: "ดาวน์โหลด",
        data: ["Wi-Fiเท่านั้น", "สมาร์ทดาวน์โหลด", "คุณภาพวิดีโอที่ดาว์นโหลด","ตำแหน่งดาวน์โหลด"]
    },
    {
        title: "การวินิจฉัย",
        data: ["ตรวจสอบเครือข่าย", "คุณสมบัติทางเทคนิคของการเล่น", "ทดสอบความเร็วอินเทอร์เน็ต"]
    },
    {
        title: "ด้านกฎหมาย",
        data: ["ใบอนุญาตโอเพ่นซอร์ส", "ความเป็นส่วนตัว", "การตั้งค่าคุกกี้", "ข้อกำหนดการใช้งาน"]
    },
];

const Item = ({ title ,onPress}) => (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
    </TouchableOpacity>
);

const Setting = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:9,
        backgroundColor:'lightblue'
    },

    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        borderRadius: 20
    },

    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'black',
        backgroundColor: 'lightblue',
        marginHorizontal: 10,
    },

    title: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent:'center'
    }
});

export default Setting;