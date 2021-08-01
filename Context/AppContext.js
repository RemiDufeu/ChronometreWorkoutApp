import React from 'react';

export default React.createContext({
    minutes : 1,
    secondes : 30,
    setMinutes : (minutes) => {},
    setSecondes : (secondes) => {},
    setTimes : (minutes, secondes) => {}
});
