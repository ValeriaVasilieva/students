import React from 'react'
import { PATH_STUDENTS } from '@consts/routes'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import StudentForm from '@components/widgets/StudentForm'
import studentsStore from '@stores/StudentsStore'

import { StudentFormValues } from '../StudentForm/StudentForm'

import * as SC from './styled'


const AddStudentForm = observer(() => {
  const history = useHistory()

  const onSubmitForm = (data: StudentFormValues) => {
    studentsStore.getCorrectFormatAndPost(data).then(() => {
      if (!studentsStore.postStudentError.status) {
        history.push(PATH_STUDENTS)
      }
    })
  }

  return (
    <SC.Base>
      <StudentForm
        onSubmitForm={data => onSubmitForm(data)}
        errorStatus={studentsStore.postStudentError.status}
        errorMessage={studentsStore.postStudentError.statusText}
      />
    </SC.Base>
  )
})

export default AddStudentForm
