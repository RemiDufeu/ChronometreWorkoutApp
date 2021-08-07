import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AppContext from '../Context/AppContext'

function TimePicker( ) {
    return (
        <AppContext.Consumer>
            {context => (
                <View style={styles.container}>
                    <View style={styles.timeBox}><Text style={styles.text} >Minutes</Text><TextInput style={styles.textInput} label="minutes" value={context.minutes.toString()} onChangeText={context.setMinutes} /></View>
                    <View style={styles.timeBox}><Text style={styles.text} >Secondes</Text><TextInput style={styles.textInput} label="secondes" value={context.secondes.toString()} onChangeText={context.setSecondes} /></View>
                </View>
            )
            }
        </AppContext.Consumer>
    );
}

const styles = StyleSheet.create({
    container : {
        padding : 15,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        width : '100%'
        
    },
    text : {
        fontSize : 20,
        textAlign : 'center',
    },
    textInput : {
        textAlign : 'center',
        backgroundColor : 'white',
        paddingTop : 20,
        paddingBottom : 20,
        marginTop: 10,
        fontSize : 20
    },
    timeBox : {
        width : "35%",
        maxWidth : 250
    }
})

export default TimePicker;
