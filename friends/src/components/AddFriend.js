import React, {useState} from 'react'
import {addFriend} from '../store/actions'
import {connect} from 'react-redux'

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
        <div>
<form onSubmit={onSubmit}>
    <h4>Name</h4>
    <input 
    type="text"
    name="name"
    value={newFriend.name}
    onChange={onChange}
    />
     <h4>Age</h4>
    <input 
    type="text"
    name="age"
    value={newFriend.age}
    onChange={onChange}
    />
     <h4>Email</h4>
    <input 
    type="email"
    name="email"
    value={newFriend.email}
    onChange={onChange}
    />
    <button type='submit'>Add New Friend to List</button>
</form>

        </div>
    )

}

export default connect(null, { addFriend })(AddFriend);