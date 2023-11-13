import React, { createContext, useState } from 'react';
import {data} from './../fakeData';

export const DataContext = createContext()

const Context = ({children}) => {
    const [newData, setNewData] = useState(data)
    return (
        <DataContext.Provider value={{fakeData: newData}}>
            {children}
        </DataContext.Provider>
    );
}

export default Context;
