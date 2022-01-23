import React from "react";

type StateType = {

}

type ActionType = {

}

export const initialState: StateType = {

}

export type AppContextType = React.Context<{
    state: StateType;
    dispatch: (action: ActionType) => void;
    resetState: () => void;
}>


export const AppContext = React.createContext({
    state: initialState,
    dispatch: (action: ActionType) => { }
});


// export const AppProvider: React.FC = ({ children }) => {
//     const [state, dispatch] = useReducer(userManagementReducer, userInitialState);
//     return (
//         <AppContext.Provider
//         //  value={{ state, dispatch }}
//          >
//             {children}
//         </AppContext.Provider>
//     )
// }