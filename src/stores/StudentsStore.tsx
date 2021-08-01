import { makeAutoObservable } from 'mobx'
import { SortStudentsOption, SortTypes } from '@consts/optionsValues'

import { StudentFormValues } from '@components/widgets/StudentForm/StudentForm'
import { Student } from '@models/Students/EntityModels/Students'
import { getStudents as _getStudents, postStudent, removeStudent as _removeStudent } from '@api/students'
import { StudentsRequest } from '@models/Students/ApiModels/StudentsRequest'

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

  async removeStudent({ id }: Student) {
    await this.removeStudentRequest.send(id)

    this.filteredStudents = this.filteredStudents.filter(student => student.id !== id)
  }

  getCorrectFormatAndPost = async (data: StudentFormValues) => {
    const postData: StudentsRequest = {
      specialty: data.prof,
      rating: data.score,
      birthday: data.birth,
      avatar: data.avatar[0],
      email: data.email,
      name: data.name,
      color: data.color,
      sex: data.sex,
      group: data.group
    }

    this.postStudentRequest.errors = []

    await this.postStudentRequest.send(postData)

    if (this.postStudentRequest.errors.length) {
      this.postStudentError.statusText = this.postStudentRequest.errors[0].message
      this.postStudentError.status = this.postStudentRequest.status

      return { status: this.postStudentError.status, isSuccess: false }
    } else {
      this.postStudentError.status = undefined
      return { status: 200, isSuccess: true }
    }
  }

  filterStudents(value: string) {
    this.filteredStudents = this.rawStudents.filter(student => student.name.toLowerCase().includes(value || ''))
  }

  sortStudents({ text, sortType }: SortStudentsOption<SortTypes>) {
    this.sortValue = text
    this.filteredStudents = this.filteredStudents.sort(sortFuncs[sortType])
  }
}

const sortFuncs: { [SortType in SortTypes]: (a: Student, b: Student) => number } = {
  name: (a, b) => (a.name < b.name ? -1 : 1),
  ageDown: (a, b) => +a.age - +b.age,
  ageUp: (a, b) => +b.age - +a.age,
  scoreDown: (a, b) => +b.score - +a.score,
  scoreUp: (a, b) => +a.score - +b.score
}

export default new StudentsStore()
