import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AppContext from '../Context/AppContext'
import timeToString from '../utils/timeToString';

function Chrono({ navigation }) {

    return (
        <AppContext.Consumer>
            {contexte => (
                <ChronoJs navigation={navigation} minutes={contexte.minutes} secondes={contexte.secondes}></ChronoJs>
                )
            }
        </AppContext.Consumer>
    )
}

function ChronoJs ({minutes, secondes, navigation}) {
    const [status, setStatus] = useState(true) // true = resume // false = pause

    const setPause = () => {
        setStatus(false)
    }

    const setResume = () => {
        setStatus(true)
    }

    const [minutesTimer, setMinutesTimer] = useState(minutes)
    const [secondesTimer, setSecondesTimer] = useState(secondes)

    const resetTimer = () => {
        setMinutesTimer(minutes)
        setSecondesTimer(secondes)
    }

    useEffect(()=>{
        const timerInterval = setInterval(() => {
            console.log("tick")
                if (secondesTimer > 0 && status) {
                    setSecondesTimer(secondesTimer - 1);
                }
                if (secondesTimer == 0) {
                    if (minutesTimer == 0) {
                        clearInterval(timerInterval)
                        setPause()
                        resetTimer()
                    } else {
                        setMinutesTimer(minutesTimer - 1);
                        setSecondesTimer(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(timerInterval);
              }
        },
    );

    const pauseView = <TouchableOpacity style={styles.pauseContainer} onPress={()=> { setResume()}}>
        <Text  style={styles.resume}>Resume</Text>
        {minutesTimer == minutes && secondesTimer == secondes ? "" : <TouchableOpacity activeOpacity={0.6} onLongPress={() => { resetTimer()}}><Text >
              Restart
          </Text></TouchableOpacity> }
        
    </TouchableOpacity>


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => setPause()} style={styles.timerContainer}>
                <Text> {timeToString(minutesTimer)}</Text>
                <Text> {timeToString(secondesTimer)}</Text>
            </TouchableOpacity>
            
            {!status &&  pauseView }
        </View>
    )
}

const styles = StyleSheet.create({
    pauseContainer: {
        width : "100%",
        backgroundColor : "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height : "100%",
        padding : "15px"
    },
    resume : {
        paddingTop : "90%",
        color : "white",
        fontSize : 24
    },
    timerContainer : {
        display : "flex",
        height : "100%",
        flexDirection: "column",
        width : "100%",
        justifyContent: "center",
        alignItems: "center",
    }
});


export default Chrono;
