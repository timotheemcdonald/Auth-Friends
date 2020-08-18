import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {fetchFriends} from '../store/actions'
import FriendDisplay from './FriendDisplay'
import AddFriend from './AddFriend'

const CenterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:mistyrose;
width:30%;
margin:20px auto;
border:3px crimson solid;
`


const FriendsList = (props) => {

    useEffect(() => {
        props.fetchFriends()
    }, [])

    return(
        <div>
            <CenterDiv>   <div><h3>Friends List Test Setup Demo</h3></div></CenterDiv>
            <CenterDiv>
         
            <div> {props.isLoading ? <h3>Loading. . .</h3> : null}</div>
            {props.error ? (<div><h3>Error!</h3><p>{props.error}</p></div>) : null}
            </CenterDiv>
            {props.friends.map((item) => {
                return <FriendDisplay
                    friends={item} key={item.id} />
            })}

            <AddFriend />
        </div>
    )
}

const mapStateToProps = (state) => {

    console.log(state, 'state in mapfunction on friendslist')
    return {
        friends: state.friends,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchFriends})(FriendsList);