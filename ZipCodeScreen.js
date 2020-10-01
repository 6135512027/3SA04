import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList,TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const availableZipItems = [
    { place: 'จังหวัดแพร่', code: '54000' , a: 'อำเภอหนองม่วงไข่' },
    { place: 'จังหวัดน่าน', code: '55000', a: 'อำเภอสองแคว' },
    { place: 'จังหวัดพะเยา', code: '56000', a: 'อำเภอภูกามยาว' },
    { place: 'จังหวัดเชียงราย', code: '57000', a: 'อำเภอเชียงแสน' },
    { place: 'จังหวัดแม่ฮ่องสอน', code: '58000', a: 'อำเภอปาย' },
]



const ZipItem = ({ place, code, navigation , a }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.center}>
            <Text style={styles.front}>{place}</Text>
            <Text style={styles.front3}>{a}</Text>
            <Text style={styles.front2}>{code}</Text>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('./bg.jpg')} style={styles.backdrop}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}
const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#27408B',
         
        
    },
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    front: {
        fontSize: 35,
        color: 'white',
    },
    front2: {
        fontSize: 20,
        color: 'black',
    },
    front3: {
        fontSize: 20,
        color: 'red',
    },
    
});
