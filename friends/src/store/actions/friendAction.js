import axiosWithAuth from '../../utils/axiosWithAuth'
import axios from 'axios'

export const FETCHING_FRIEND_START = "FETCHING_FRIEND_START"
export const FETCHING_FRIEND_SUCCESS = "FETCHING_FRIEND_SUCCESS"
export const FETCHING_FRIEND_ERROR = "FETCHING_FRIEND_ERROR"
export const ADDING_FRIEND = "ADDING_FRIEND"

export const fetchFriends = () => (dispatch) => {
    dispatch({type: FETCHING_FRIEND_START})
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
        console.log('fetching friend start', res)
        dispatch({type: FETCHING_FRIEND_SUCCESS, payload: res.data})
        console.log('this is res.data', res.data)
    })
    .catch(error => {
        console.log(error, 'this is an error in fetching friends')
    })
}

export const addFriend = (value) => (dispatch) => {
    axiosWithAuth()
    .post('/api/friends', value)
    .then( res => {
        console.log(value, res, 'in adding friend value and res')
        dispatch({type: ADDING_FRIEND, payload: res.data})
    })
    .catch( error => {
        console.log(error, 'adding friend error')
    })
}

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'object') {
        next(action)
    } else if(typeof action === 'function') {
        action(store.dispatch)
    }
}