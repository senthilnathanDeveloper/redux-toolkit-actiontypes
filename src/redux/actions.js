import * as types from './actionTypes'


export const loadUsersStart = () => ({
    type:types.LOAD_USERS_START
})

export const loadUserSuccess = (userDetails) => ({
    type:types.LOAD_USERS_SUCCESS,
    payload:userDetails
})

export const loadUsersError = (error) => ({
    type:types.LOAD_USERS_ERROR,
    payload:error
})



export const createUsersStart = (userDetails) => ({
    type:types.CREATE_USERS_START,
    payload:userDetails
})

export const createUserSuccess = () => ({
    type:types.CREATE_USERS_SUCCESS,
})

export const createUsersError = (error) => ({
    type:types.CREATE_USERS_ERROR,
    payload:error
})




export const deleteUsersStart = (userDetailsId) => ({
    type:types.DELETE_USERS_START,
    payload:userDetailsId
})

export const deleteUserSuccess = (userDetailsId) => ({
    type:types.DELETE_USERS_SUCCESS,
    payload:userDetailsId
})

export const deleteUsersError = (error) => ({
    type:types.DELETE_USERS_ERROR,
    payload:error
})




export const updateUsersStart = (userInfo) => ({
    type:types.UPDATE_USERS_START,
    payload:userInfo
})

export const updateUserSuccess = () => ({
    type:types.UPDATE_USERS_SUCCESS,
})

export const updateUsersError = (error) => ({
    type:types.UPDATE_USERS_ERROR,
    payload:error
})