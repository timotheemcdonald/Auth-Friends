import React from 'react'

const FriendDisplay = (props) => {

    const {name, age, email} = props.friends

    return(
        <div>
            <h3>Friends:</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>E-mail: {email}</p>
        </div>
    )
}

export default FriendDisplay