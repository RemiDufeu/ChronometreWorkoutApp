import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AppContext from '../Context/AppContext'
import timeToString from '../utils/timeToString';
import { useFonts } from 'expo-font';

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
    

    let [fontsLoaded] = useFonts({
        'Sarpanch': require('../assets/fonts/Sarpanch-ExtraBold.ttf'),
    });

    console.log(fontsLoaded)

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
                if (secondesTimer == 0 && status) {
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
    const pauseView = <>
        <TouchableOpacity  onPress={()=> { setResume()}}>
            <Text>Resume</Text>
        </TouchableOpacity>
        { (minutesTimer != minutes || secondesTimer != secondes) && <TouchableOpacity activeOpacity={0.6} onLongPress={() => { resetTimer()}}>
            <Text >
              Restart
            </Text>
        </TouchableOpacity> }
        </>
        
    


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {fontsLoaded ?<TouchableOpacity onPress={() => setPause()} >
                <Text style={{fontFamily : 'Sarpanch', fontSize : 100}}> {timeToString(minutesTimer)}</Text>
                <Text style={{fontFamily : 'Sarpanch' , fontSize : 100}}> {timeToString(secondesTimer)}</Text>
            </TouchableOpacity> : <Text>Chargement...</Text>}
            
            {!status &&  pauseView }
        </View>
    )
}


export default Chrono;
