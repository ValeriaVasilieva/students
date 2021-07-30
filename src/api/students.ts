import { AxiosResponse } from 'axios'

import { StudentsResponse } from '@models/Students/ApiModels/StudentsResponse'
import { StudentsRequest } from '@models/Students/ApiModels/StudentsRequest'
import { http } from '@services/httpClient'


export const getStudents = () => http.get<StudentsResponse>('/api/students')

export const removeStudent = (student_id: number) => http.delete<string>(`/api/students/${student_id}`)

export const postStudent = (data: StudentsRequest): Promise<AxiosResponse<string>> => {
  const entries = Object.entries(data).filter(entry => entry[0] !== 'avatar') as [string, string][]

  const file = data.avatar[0]
  const formData = new FormData()

  formData.append('avatar', file)

  entries.forEach((entry) => {
    formData.append(...entry)
  })

  return http.post<string>(`/api/students`, formData)
}
