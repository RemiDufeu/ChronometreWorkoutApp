import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import AppContext from '../Context/AppContext'
import timeToString from '../utils/timeToString';
import { useFonts } from 'expo-font';
import Sound from 'react-native-sound';

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
    
    const bip = new Sound('../assets/bip.wav', null, (error) => {
        if (error) {
          console.error(error)
        }
    })

    let [fontsLoaded] = useFonts({
        'ChakraPetch-Bold': require('../assets/fonts/ChakraPetch-Bold.ttf'),
        
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
                        bip.play()
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
    const pauseView = <Modal
        animationType="slide"
        transparent={true}
        visible={!status}
        style={{ height : '100%', width : '100%', position :'absolute', elevation : 10}}>
            <View style={{ height : '100%', width : '100%', backgroundColor : 'rgba(0, 0, 0, 0.8)', position : 'absolute',}}>
        <TouchableOpacity  onPress={()=> { setResume()}} style={{ height : '85%', width : '100%', textAlign : 'center', alignItems : 'center', justifyContent : 'center'}}>
            <View stryl = {{flex: 1,
		flexDirection: 'column',
		justifyContent: 'center', 
		alignItems: 'center'}}>
            <Text style={{width: '100%', textAlign : 'center', color : 'white', fontWeight: "800", fontSize : 160, paddingRight : 30}}> GO</Text>
            </View>
            
        </TouchableOpacity>
        { (minutesTimer != minutes || secondesTimer != secondes) && <TouchableOpacity activeOpacity={0.6} style={{position : 'absolute', bottom : 0, width : '100%'}} onLongPress={() => { resetTimer()}}>
            <Text style={{width: '100%', backgroundColor : 'rgb(33, 150, 243)', textAlign : 'center', color : 'white', padding : 16,fontSize : 40, fontWeight: "500"}} >
                RESTART
            </Text>
        </TouchableOpacity> }
            </View>
        </Modal>
        
    


    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            height : '100%'
         }}>
        {!status &&  pauseView }
        <View>
            {fontsLoaded ?<TouchableOpacity onPress={() => setPause()} style={{height : '100%', justifyContent : 'center'}}>
                <Text style={{fontFamily : 'ChakraPetch-Bold', lineHeight : 200, fontSize : 200, textAlign :'center', width :"100%", paddingRight : 50, position: 'relative'}}> {timeToString(minutesTimer)}</Text>
                <Text style={{fontFamily : 'ChakraPetch-Bold' , lineHeight : 200, fontSize : 200, textAlign :'center', width :"100%", paddingRight : 50, position: 'relative'}}> {timeToString(secondesTimer)}</Text>
            </TouchableOpacity> : <Text>Chargement...</Text>}
            
            
        </View>
        </View>
    )
}


export default Chrono;
