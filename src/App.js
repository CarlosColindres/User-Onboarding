import React, {useState, useEffect} from 'react'
import Form from './Form'
import * as yup from "yup";
import axios from 'axios'
import schema from './schema'

const initialValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

const initialErrors = {
  name: '',
  email: '',
  password: '',
}



const App = () => {

  const [users, setUsers] = useState([])

  const [disabled, setDisabled] = useState(true)

  const [formErrors, setFormErrors] = useState(initialErrors);

  const [formValues, setFormValues] = useState(initialValues)

  const postNewUser = (newUser) => {

    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((res) => {
        setUsers([res.data, ...users])
        setFormValues(initialValues)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  
  return (
    <div>
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
    {users.map(data => 
      <div>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        <h1>{data.password}</h1>
        <h1>{data.createdAt}</h1>
      </div>
    )}
    </div>
    
  )
}

export default App

