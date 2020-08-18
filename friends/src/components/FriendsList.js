import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {fetchFriends} from '../store/actions'
import FriendDisplay from './FriendDisplay'
import AddFriend from './AddFriend'


const FriendsList = (props) => {

    useEffect(() => {
        props.fetchFriends()
    }, [])

    return(
        <div>
            <p>Friends List Test Setup Demo</p>
            {props.isLoading ? <h3>Loading. . .</h3> : null}
            {props.error ? (<div><h3>Error!</h3><p>{props.error}</p></div>) : null}
            {props.friends.map((item) => {
                return <FriendDisplay
                    friends={item} key={item.id} />
            })}

            <AddFriend />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchFriends})(FriendsList);