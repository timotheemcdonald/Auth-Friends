import React from 'react'
import styled from 'styled-components'

const CenterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background-color:ivory;
width:30%;
margin:20px auto;
border:3px crimson solid;
padding:10px;
`

const FriendDisplay = (props) => {

    const {name, age, email} = props.friends

    return(
        <CenterDiv>
            <h3>Friends:</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>E-mail: {email}</p>
        </CenterDiv>
    )
}

export default FriendDisplay