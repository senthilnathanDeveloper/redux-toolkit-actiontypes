import { applyMiddleware,createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

import rootSaga from "./userSagas";


const sagaMiddleWare = createSagaMiddleware()

const middleWare = [sagaMiddleWare]

// if(process.env.NODE_ENV ==="development"){
//     middleWare.push(logger)
// }


const store = createStore(rootReducer, applyMiddleware(...middleWare))

sagaMiddleWare.run(rootSaga)

export default store
