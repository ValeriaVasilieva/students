import React from 'react'

import RegistrationForm from '../../components/widgets/RegistrationForm'
import BackButton from '../../components/ui/BackButton'
import { PATH_STUDENTS } from '../../consts/routes'
import Layout from '../../components/entities/Layout'

import * as SC from './styled'


const AddStudent = () => {
  return (
    <SC.Base>
      <Layout>
        <BackButton path={PATH_STUDENTS} text={'Назад к списку студентов'} />
        <RegistrationForm />
      </Layout>
    </SC.Base>
  )
}

export default AddStudent
