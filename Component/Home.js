import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TimePicker from '../Views/TimePicker';

function Home({ navigation }) {

    return (
        <View style={{alignItems : 'center'}}>
            <Text style={styles.title}>⏱️ Temps de repos ⏱️</Text>
            <TimePicker/>
            <View style={styles.btn}>
            <Button
        title="Start"
        onPress={() => navigation.navigate('Chrono')}
      /></View>
        </View>
    );
}


const styles = StyleSheet.create({
    title : {
        textAlign: "center",
        fontSize : 30,
        fontWeight : 'bold',
        marginTop : 75,
        marginBottom : 50
    },
    btn : {
        marginTop : 100,
        width : 250,
    }
})
export default Home;
