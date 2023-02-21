import * as types from './actionTypes'

import { take,takeEvery,takeLatest,put,all,delay,fork,call } from '@redux-saga/core/effects'

import { loadUserSuccess,loadUsersError, createUserSuccess,createUsersError, deleteUserSuccess, deleteUsersError, updateUserSuccess, updateUsersError } from './actions'
import { loadUsersApi,createUsersApi ,deleteUsersApi, updateUsersApi} from './api'



// GET -API -CALLING
export function* onLoadUserStartAsync() {
    try{
        const response = yield call(loadUsersApi);
        if(response.status === 200){
            yield delay(500);
            yield put(loadUserSuccess(response.data));
        }
    }catch(error){
        yield put(loadUsersError(error.response.data))
    }
}

export function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUserStartAsync)
}



// POST - API-CALLING
export function* onLoadCreateUsersStartAsync({payload}) {
    try{
        const response = yield call(createUsersApi,payload);
        if(response.status === 200){
            yield put(createUserSuccess(response.data));
        }
    }catch(error){
        yield put(createUsersError(error.response.data))
    }
}

export function* onLoadCreateUsers() {
    yield takeLatest(types.CREATE_USERS_START, onLoadCreateUsersStartAsync)
}



// DELETE - API -CALLING
export  function* onDeleterUsersAsync(userDetailsId) {
    try{
        const response = yield call(deleteUsersApi,userDetailsId);
        if(response.status === 200){
            yield delay(500)
            yield put(deleteUserSuccess(userDetailsId));
        }
    }catch(error){
        yield put(deleteUsersError(error.response.data))
    }
}


export function* onDeleterUsers() {
    while(true){
        const {payload:userDetailsId} = yield take(types.DELETE_USERS_START)
        yield call(onDeleterUsersAsync,userDetailsId)
    }
}

// UPDATE - API -CALLING
export function* onLoadUpdateUsersStartAsync({payload:{id, form}}){
    try{
        const response = yield call(updateUsersApi,id,form);
            if(response.status === 200){
                yield put(updateUserSuccess())
            }
        }catch(error){
            yield put(updateUsersError(error.response.data))
    }
}


export function* onLoadUpdateUsers() {
    yield takeLatest(types.UPDATE_USERS_START, onLoadUpdateUsersStartAsync)
}

const userSaga = [
    fork(onLoadUsers),
    fork(onLoadCreateUsers),
    fork(onDeleterUsers),
    fork(onLoadUpdateUsers)
];


export default function* rootSaga() {
    yield all([...userSaga])
}