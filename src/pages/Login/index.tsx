import React from 'react'

import Header from '../../components/shared/Header'
import RegistrationForm from '../../components/shared/RegistrationForm'
import cloud from '../../store/Students'


const Login = () => {
  return (
    <>
      <Header />
      <RegistrationForm createStudent={cloud.getCorrectFormatForPost} />
    </>
  )
}

export default Login
