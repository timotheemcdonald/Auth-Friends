import {FETCHING_FRIEND_START, FETCHING_FRIEND_SUCCESS, FETCHING_FRIEND_ERROR, ADDING_FRIEND} from '../actions/friendAction'

const initialState = {
    friends: [],
    error: '',
    isLoading: false
}

const friendReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIEND_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_FRIEND_ERROR:
            return {
                ...state,
                isLoading:false,
                error: action.payload
            }
        case FETCHING_FRIEND_SUCCESS:
            return {
                ...state,
                isLoading:false,
                friends: action.payload
            }
        case ADDING_FRIEND:
            return {
                ...state,
                friends: action.payload
            }
        default:
            return state
    }

}

export default friendReducer;