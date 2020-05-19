import React, {useState} from 'react';
import './App.css';
import {v4 as uuid} from 'uuid'
import TeamMemberForm from './components/Form'
import TeamMember from './components/TeamMember'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = event => {
    const {name} = event.target
    const {value} = event.target
    setFormValues({...formValues, [name]: value})
    console.log(formValues)
  }

  const onSubmit = event => {
    event.preventDefault()

    if(
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ){
      return
    }
    const newTeamMember = {...formValues, id: uuid()}
    setTeamMembers([newTeamMember, ...teamMembers])
    setFormValues(initialFormValues)
    console.log(teamMembers)
  }
  return (
    <div>
      <header>
        <h1>
          Team Members
        </h1>
      </header>
      <TeamMemberForm 
      values={formValues}
      onInputChange = {onInputChange}
      onSubmit = {onSubmit}
      />
      {teamMembers.map(member => {
          console.log(member)
        return (
          <TeamMember values={member} key={uuid()}/>
        )
      }
        )}

    </div>
  );
}

export default App;
