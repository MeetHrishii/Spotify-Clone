import React, {
    createContext, 
    //createContext lets you create a context that components
    // can provide or read.
    //const SomeContext = createContext(defaultValue)
    useContext,
    //useContext is a React Hook that lets you read and subscribe
    // to context from your component.
    //const value = useContext(SomeContext)
    useReducer
} from "react"; // Read docs

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);