/**
 * context for creating videoIndex to be accessed from any functional component. 
 *Used in TrackScreen and in AudioPlayer to update vidIndex.
 *Used in App.js to wrap a provider around all the children props.
 */
import React, { createContext, Component, useState } from 'react';

//creates the player context with default value null
export const PlayerContext = createContext(null);

//creates the provider which uses hooks to assign the value of vidIndex. It is set default as 0, can update it to pull from local storage.
export const PlayerContextProvider = (props) => {
  const [vidIndex, setVidIndex] = useState(0); 

  //returns the provider with the value of the state throughout all the children components.
  return (
    <PlayerContext.Provider value={[vidIndex,setVidIndex]}>
        {props.children}
    </PlayerContext.Provider>
  );
  
}

