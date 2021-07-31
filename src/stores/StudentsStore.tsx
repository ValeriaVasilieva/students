import { makeAutoObservable } from 'mobx'
import { SortStudentsOption, SortTypes } from '@consts/optionsValues'

import { StudentFormValues } from '@components/widgets/StudentForm/StudentForm'
import { Student } from '@models/Students/EntityModels/Students'
import { getStudents as _getStudents, postStudent, removeStudent as _removeStudent } from '@api/students'

import ApiRequestStore from './ApiRequestStore'


type PostStudentError = {
  status: number | undefined
  statusText: string
}

class StudentsStore {
  rawStudents: Student[] = []
  filteredStudents: Student[] = []
  sortValue: string | null = null
  state = { render: true }
  postStudentError: PostStudentError = {
    status: undefined,
    statusText: ''
  }
  getStudentsRequest = new ApiRequestStore({
    apiFunction: _getStudents
  })
  postStudentRequest = new ApiRequestStore({
    apiFunction: postStudent,
    excludedErrorCodes: [422]
  })
  removeStudentRequest = new ApiRequestStore({
    apiFunction: _removeStudent
  })

  constructor() {
    makeAutoObservable(this)
  }

  async getStudents() {
    await this.getStudentsRequest.send(undefined)

    let studentsList: Student[] = []

    if (this.getStudentsRequest.data) {
      studentsList = this.getStudentsRequest.data.students.map((student) => {
        return {
          id: student.id,
          avatar: student.avatar,
          name: student.name,
          prof: student.specialty,
          group: student.group,
          age: `${new Date().getFullYear() - new Date(student.birthday).getFullYear()}`,
          score: student.rating,
          color: student.color
        }
      })
    }

    this.rawStudents = studentsList
    this.filteredStudents = studentsList
  }

  async removeStudent(id: number) {
    await this.removeStudentRequest.send(id)

    this.filteredStudents = this.filteredStudents.filter(student => student.id !== id)
  }

  getCorrectFormatAndPost = async (data: StudentFormValues) => {
    const postData = {
      specialty: data.prof,
      rating: data.score,
      birthday: data.birth,
      ...data
    }

    await this.postStudentRequest.send(postData)

    if (this.postStudentRequest.errors !== undefined) {
      this.postStudentError.statusText = this.postStudentRequest.errors[0].message
      this.postStudentError.status = this.postStudentRequest.status

      return { status: this.postStudentError.status, isSuccess: false }
    } else {
      this.postStudentError.status = undefined
      return { status: 200, isSuccess: true }
    }
  }

  FilterStudents(value: string) {
    this.filteredStudents = this.rawStudents.filter(student => student.name.toLowerCase().includes(value || ''))
  }

  SortStudents({ text, sortType }: SortStudentsOption<SortTypes>) {
    this.sortValue = text
    this.filteredStudents = this.filteredStudents.sort(sortFuncs[sortType])
  }
}

const sortFuncs: { [SortType in SortTypes]: (a: Student, b: Student) => number } = {
  name: (a, b) => (a.name < b.name ? -1 : 1),
  ageDown: (a, b) => +a.age - +b.age,
  ageUp: (a, b) => +a.age - +b.age,
  scoreDown: (a, b) => +a.age - +b.age,
  scoreUp: (a, b) => +a.age - +b.age
}

export default new StudentsStore()
