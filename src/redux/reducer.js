import * as types from './actionTypes'

const initialState = {
    userDetails:[],
    loading:false,
    error:null
}

const userDetailsReducer = (state = initialState,action) => {
    switch(action.type){
        case types.LOAD_USERS_START:
        case types.CREATE_USERS_START:
        case types.DELETE_USERS_START:
        case types.UPDATE_USERS_START:
            return{
                ...state,
                loading:true
            };
        case types.LOAD_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                userDetails:action.payload
            };
        
        case types.CREATE_USERS_SUCCESS:
        case types.UPDATE_USERS_SUCCESS:
            return{
                ...state,
                loading:false
            }
        
        case types.DELETE_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                userDetails:state.userDetails?.filter((item) => item.id !== action.payload)
            }
        case types.LOAD_USERS_ERROR:
        case types.CREATE_USERS_ERROR:
        case types.DELETE_USERS_ERROR:
        case types.UPDATE_USERS_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            };
        default:
            return state
            
    }
}
export default userDetailsReducer