import { AxiosResponse } from 'axios'

import { StudentsResponse } from '@models/Students/ApiModels/StudentsResponse'
import { StudentsRequest } from '@models/Students/ApiModels/StudentsRequest'
import { http } from '@services/httpClient'


export const getStudents = () => http.get<StudentsResponse>('/api/students')

export const removeStudent = (studentId: number) => http.delete<string>(`/api/students/${studentId}`)

export const postStudent = (data: StudentsRequest): Promise<AxiosResponse<string>> => {
  const entries = Object.entries(data)

  const formData = new FormData()

  entries.forEach((entry) => {
    formData.append(...entry)
  })

  return http.post<string>(`/api/students`, formData)
}
