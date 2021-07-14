import { http } from '../services/httpClient'
import { StudentsResponce, StudentsRequest } from '../models/RequestResponce'


export const getStudents = () => http.get<StudentsResponce>('/api/students')

export const removeStudent = (student_id: number) => http.delete<string>(`/api/students/${student_id}`)

export const postStudent = (data: FormData) => http.post<string>(`/api/students`, data)
