import { http } from '../services/httpClient'
import { StudentsResponce } from '../models/RequestResponce'


export const getStudents = () => http.get<StudentsResponce>('/api/persons')

export const removeStudent = (student_id: number) => http.delete<string>(`/api/students/${student_id}`)
