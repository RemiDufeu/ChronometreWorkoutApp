import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import AppContext from '../Context/AppContext'
import timeToString from '../utils/timeToString';

function Chrono({ navigation }) {

    return (
        <AppContext.Consumer>
            { context => (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text> {timeToString(context.minutes)}</Text>
                    <Text> {timeToString(context.secondes)}</Text>
                    <Text>Hello</Text>
                    <Button
                        title="Go to Home"
                        onPress={() => navigation.goBack()}
                    />
                </View>
            )
            }
        </AppContext.Consumer>
    );
}

export default Chrono;
