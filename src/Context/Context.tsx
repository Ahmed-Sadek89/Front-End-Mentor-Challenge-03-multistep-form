import React, { ReactNode, createContext, useReducer } from 'react'
import { reducer } from './Reducer/reducer'
import { initialState } from './Reducer/state'
import { reducerAction, reducerState } from './types'

type contextPropsType = {
    children: ReactNode
}

type ContextType = {
    state: reducerState;
    dispatch: React.Dispatch<reducerAction>;
};

export const DataContext = createContext({} as ContextType)
// export const DataContext = createContext<ContextType | {}>({})
const Context = ({children}: contextPropsType) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const ContextValue = {
    state: state,
    dispatch: dispatch
  }
  
  
  return (
    <DataContext.Provider value={ContextValue}>
        {children}
    </DataContext.Provider>
  )
}

export default Context