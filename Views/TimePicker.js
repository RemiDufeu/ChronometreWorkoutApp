import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import AppContext from '../Context/AppContext'
import timeToString from '../utils/timeToString';

function TimePicker( ) {
    return (
        <AppContext.Consumer>
            {context => (
                <View >
                    <View ><Picker label="minutes" value={context.minutes} setter={context.setMinutes} /></View>
                    <View ><Picker label="secondes" value={context.secondes} setter={context.setSecondes} /></View>
                </View>
            )
            }
        </AppContext.Consumer>
    );
}


const Picker = ({ label, value, setter }) => {
    const data = []
    for (let i = 1; i < 60; i++) {
        data.push({
            label: timeToString(i),
            value: i,
            itemKey: timeToString(i)
        })
    }
    return (
        <RNPickerSelect onValueChange={(value) => setter(value)}
            items={data} value={value} placeholder={{label: timeToString(0), value: 0, key: timeToString(value),  itemKey: timeToString(0) }}></RNPickerSelect>
    )
}



export default TimePicker;
