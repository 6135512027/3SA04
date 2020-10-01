import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.medium}>{props.main}</Text>
            <Text style={styles.small}>{props.description}</Text>
            <View>
                <Text style={styles.medium}>
                    <Text style={{fontSize: 60}}>{props.temp}</Text>
                    <Text> °C</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    medium: {
        fontSize: 50,
        color: 'red',
        marginTop: 20,
    },
    small: {
        fontSize: 20,
        color: '#FFF',
        marginTop: 20,

    }
})