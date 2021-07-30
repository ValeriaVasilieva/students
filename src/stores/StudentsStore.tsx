import { makeAutoObservable, runInAction } from 'mobx'

import { StudentFormValues } from '@components/widgets/StudentForm/StudentForm'
import { Student } from '@models/Students/EntityModels/Students'
import { getStudents, postStudent, removeStudent } from '@api/students'
import { StudentsRequest } from '@models/Students/ApiModels/StudentsRequest'


type PostStudentError = {
  status: string
  statusText: string
}

class StudentsStore {
  defaultStudents: Student[] = []
  filteredStudents: Student[] = []
  sortValue = ''
  state = { render: true }
  postStudentError: PostStudentError = {
    status: '',
    statusText: ''
  }

  constructor() {
    makeAutoObservable(this)
  }

  async setStudents() {
    const newStudents = await getStudents()

    const studentsList = newStudents.data.students.map((student) => {
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

    this.defaultStudents = studentsList
    this.filteredStudents = studentsList
  }

  async deleteStudent(id: number) {
    try {
      await removeStudent(id)

      runInAction(() => (this.filteredStudents = this.filteredStudents.filter(student => student.id !== id)))
    } catch (error) {
      console.error(error)
    }
  }

  getCorrectFormatAndPost = async (data: StudentFormValues) => {
    const postData = {
      specialty: data.prof,
      rating: data.score,
      birthday: data.birth,
      ...data
    }

    await postStudent(postData)
      .then((resolve) => {
        if (resolve.status === 200) {
          this.postStudentError.status = ''
        }
      })
      .catch((err) => {
        this.postStudentError.statusText = err.response.data.errors[0].message
        this.postStudentError.status = err.response.status
      })
  }

  getFilterStudents(value: string) {
    this.filteredStudents = this.defaultStudents.filter(student => student.name.toLowerCase().includes(value || ''))
  }

  getSortedStudents(value: string, text: string) {
    this.sortValue = text

    switch (value) {
      case 'name':
        return (this.filteredStudents = this.filteredStudents.sort((a, b) => (a.name < b.name ? -1 : 1)))
      case 'ageDown':
        return (this.filteredStudents = this.filteredStudents.sort((a, b) => +a.age - +b.age))
      case 'ageUp':
        return (this.filteredStudents = this.filteredStudents.sort((a, b) => +b.age - +a.age))
      case 'scoreDown':
        return (this.filteredStudents = this.filteredStudents.sort((a, b) => +b.score - +a.score))
      case 'scoreUp':
        return (this.filteredStudents = this.filteredStudents.sort((a, b) => +a.score - +b.score))
    }
  }
}

export default new StudentsStore()
