import React, {useState} from 'react'
import {addFriend} from '../store/actions'
import {connect} from 'react-redux'
import styled from 'styled-components'

const CenterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:mistyrose;
width:30%;
margin:auto;
border:3px crimson solid;
`

const StyledButton = styled.button`
color:ivory;
background-color:crimson;
border:none;
padding:15px;
margin:20px auto;
width:200px;
`

const StyledInput = styled.input`
width:190px;`

const blankFriend = {
    name: '',
    age: 0,
    email: ''
}

const AddFriend = (props) => {
    const [newFriend, setFriend] = useState(blankFriend)

    const onChange = (event) => {
        setFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        props.addFriend(newFriend)
    }

    return(
        <CenterDiv>
<form onSubmit={onSubmit}>
    <h4>Name</h4>
    <StyledInput 
    type="text"
    name="name"
    value={newFriend.name}
    onChange={onChange}
    />
     <h4>Age</h4>
    <StyledInput 
    type="text"
    name="age"
    value={newFriend.age}
    onChange={onChange}
    />
     <h4>Email</h4>
    <StyledInput 
    type="email"
    name="email"
    value={newFriend.email}
    onChange={onChange}
    />
    <div>
    <StyledButton type='submit'>Add New Friend to List</StyledButton>
    </div>
</form>

        </CenterDiv>
    )

}

export default connect(null, { addFriend })(AddFriend);