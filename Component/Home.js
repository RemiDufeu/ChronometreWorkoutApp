import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import TimePicker from '../Views/TimePicker';

function Home({ navigation }) {

    return (
        <View>
            <Text> Temps de repos </Text>
            <TimePicker/>
            <Button
        title="Start"
        onPress={() => navigation.navigate('Chrono')}
      />
        </View>
    );
}

export default Home;
