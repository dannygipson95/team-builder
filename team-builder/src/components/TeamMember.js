import React from 'react'

function TeamMember (props) {
    const {name, email, role} = props.values
    console.log(props)
    return(
    <div>
        <h3>{name}</h3>
        <h4>Email: {email}</h4>
        <h4>Role: {role}</h4>
        
    </div>
    )
}

export default TeamMember