import { combineReducers } from "redux";
import { clienteReducer } from "./Cliente/reducer"


export default combineReducers({
    cliente: clienteReducer,
});
