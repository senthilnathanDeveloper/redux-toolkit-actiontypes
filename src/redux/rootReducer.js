import { combineReducers } from "redux";

import userDetailsReducer from "./reducer";

const rootReducer = combineReducers({
    data:userDetailsReducer
})

export default rootReducer