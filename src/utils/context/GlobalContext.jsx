//import React, { createContext, useMemo, useReducer } from "react";
//
////inital state
//
//export const initialState = {
//  showCart: false,
//  itemCart: [],
//};
//
////action
//
//export const ACTIONS = {
//  SHOW_HIDE_CART: "SHOW_HIDE_CART",
//  ADD_TO_CART: "ADD_TO_CART",
//  REMOVE_ITEM: "REMOVE_ITEM",
//};
//
//const Reducer = (globalState, action) => {
//  switch (action.type) {
//    case ACTIONS.SHOW_HIDE_CART:
//      return {
//        ...globalState,
//        showCart: action.payload,
//      };
//    case ACTIONS.ADD_TO_CART:
//      return {
//        ...globalState,
//        itemCart: action.payload,
//      };
//
//      case ACTIONS.REMOVE_ITEM:
//          return{
//              ...globalState,
//              itemCart: action.payload,
//          }
//    
//    default:
//      return globalState;
//  }
//};
//
////Global state which its provide cotext for children 
//
//const globalState = ({children, defaultInitialState = {} }) =>{
//    defaultInitialState = { ...initialState, ...defaultInitialState };
//    
//    const [globalState, dispatch] = React.useReducer(Reducer, defaultInitialState);
//
//    const contextValue = useMemo(()=>{
//        return{
//            globalState,
//            dispatch,
//            
//        }
//    },[globalState]);
//
//return(
//    <globalContext.provider value={contextValue} >
//       {children}  
//    </globalContext.provider>
//);
//
//};
//
////create global context 
//
//export const globalContext = createContext(initialState);
//
////export Global state components
//
//export default globalState;




//import React, { createContext, useMemo, useReducer } from "react";
//
//// initial state
//export const initialState = {
//    userData: null,
//    paymentOptions: [],
//};
//
//// actions
//export const ACTIONS = {
//    CACHE_USER_DATA: "CACHE_USER_DATA",
//    CACHE_PAYMENT_OPTIONS: "CACHE_PAYMENT_OPTIONS"
//};
//
//const Reducer = (globalState, action) => {
//    switch (action.type) {
//        case ACTIONS.CACHE_USER_DATA:
//            return {
//                ...globalState,
//                userData: action.payload,
//            }
//        default:
//            return globalState;
//    }
//};
//
//
//// Global State Which its provide context for children
//const GlobalState = ({ children, defaultInitialState = {} }) => {
//    defaultInitialState = { ...initialState, ...defaultInitialState };
//
//    const [globalState, dispatch] = useReducer(Reducer, defaultInitialState);
//
//    const logoutUser = () => {
//        localStorage.clear();
//        return true;
//    };
//
//    const contextValue = useMemo(() => {
//        return {
//            globalState,
//            dispatch,
//            logoutUser
//        };
//    }, [globalState]);
//
//    return (
//        <GlobalContext.Provider value={contextValue}>
//            {children}
//        </GlobalContext.Provider>
//    );
//};
//
//// Create Global Context
//export const GlobalContext = createContext(initialState);
//
//// Export Global State Context Component
//export default GlobalState;