import React from 'react'

function TeamMemberForm(props) {
    const {values, onInputChange, onSubmit} = props
    console.log()
    return(
        <form onSubmit={onSubmit}>
            <h2>Add Team Member</h2>
            <button>Submit</button>
            <label>Name: </label>
            <input
                type='text'
                placeholder='Type a Name'
                maxLength= '40'
                name= 'name'
                value={values.name}
                onChange= {onInputChange}

            />
            <label>email: </label>
            
            <input
                type='text'
                placeholder='Type an Email'
                maxLength= '60'
                name= 'email'
                value={values.email}
                onChange= {onInputChange}

            />

            <label>Role: </label>
            <select
                name= 'role'
                value={values.role}
                onChange= {onInputChange}
            >
                <option value=''>Pick a Role</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='Designer'>Designer</option>
            </select>
        </form>
    )
}

export default TeamMemberForm