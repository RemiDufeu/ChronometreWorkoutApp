import React from 'react';
import AppContext from './AppContext';
export default class AppContextManagement extends React.Component{
state = {
  minutes: 1,
  secondes: 30
}
 
setMinutes = (minutes) =>  {
    this.setState({minutes : minutes})
}

setTimes = (minutes, secondes) => {
    this.setMinutes(minutes)
    this.setSecondes(secondes)
}

setSecondes = (secondes) => {
    this.setState({secondes : secondes})
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