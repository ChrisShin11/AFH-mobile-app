/**
 * context for creating videoIndex to be accessed from any functional component. 
 *Used in TrackScreen and in AudioPlayer to update vidIndex.
 *Used in App.js to wrap a provider around all the children props.
 */
 import React, { createContext, Component, useState } from 'react';

 //creates the player context with default value null
 export const AmbientContext = createContext(null);
 
 //creates the provider which uses hooks to assign the value of nature sounds. It is set default as 0, can update it to pull from local storage.
 export const AmbientContextProvider = (props) => {
   const [indexA, setIndexA] = useState(0); 

   const value = {
     indexA,
     setIndexA,
   }
   //returns the provider with the value of the state throughout all the children components.
   return (
     <AmbientContext.Provider value={[indexA, setIndexA]}>
         {props.children}
     </AmbientContext.Provider>
   );
   
 }
 
 