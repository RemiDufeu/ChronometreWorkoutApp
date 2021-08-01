import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import AppContext from '../Context/AppContext'
import timeToString from '../utils/timeToString';

function TimePicker( ) {
    return (
        <AppContext.Consumer>
            {context => (
                <View style={styles.container}>
                    <View style={styles.pickers}><Picker label="minutes" value={context.minutes} setter={context.setMinutes} /></View>
                    <View style={styles.pickers}><Picker label="secondes" value={context.secondes} setter={context.setSecondes} /></View>
                </View>
            )
            }
        </AppContext.Consumer>
    );
}


const Picker = ({ label, value, setter }) => {
    const data = []
    for (let i = 0; i < 60; i++) {
        data.push({
            label: timeToString(i),
            value: i,
        })
    }
    return (
        <RNPickerSelect onValueChange={(value) => setter(value)}
            items={data} placeholder={{label: timeToString(value), value: value }}></RNPickerSelect>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        flexWrap: "nowrap"
    },
    pickers: {
        width: "120px",
        padding: "10px",
    }
});

export default TimePicker;
