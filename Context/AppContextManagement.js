import React from 'react';
import AppContext from './AppContext';
export default class AppContextManagement extends React.Component{
state = {
  minutes: 1,
  secondes: 30
}
 
setMinutes = (minutes) =>  {
    if(minutes === "") {
        this.setState({minutes : 0 })
    } else if (parseInt(minutes) < 60){
        this.setState({minutes : parseInt(minutes)})
    }
}

setTimes = (minutes, secondes) => {
    this.setMinutes(minutes)
    this.setSecondes(secondes)
}

setSecondes = (secondes) => {
    if(secondes === "") {
        this.setState({secondes : 0 })
    } else if (parseInt(secondes) < 60){
        this.setState({secondes : parseInt(secondes)})
    }
    
}

render(){
 return (
  <AppContext.Provider 
   value={{
    minutes: this.state.minutes,
    secondes: this.state.secondes,
    setMinutes: this.setMinutes,
    setSecondes: this.setSecondes,
    setTimes: this.setTimes
   }}
  >
   {this.props.children}
  </AppContext.Provider>
 );
 }
}