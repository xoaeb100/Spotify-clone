import React, {createContext, useContext, useReducer} from "react";
// check react docs for this 👆

export const DataLayerContext = createContext();

export const DataLayer=({initialState, reducer,children })=>(
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
        {/* 👆 this is similar to how 'DataLayer' in index.js wraps 'App', the children is the App */}

    </DataLayerContext.Provider>
);
export const useDataLayerValue=()=>
useContext(DataLayerContext);