import { makeAutoObservable, runInAction } from 'mobx'

import { Student } from '../models/types'
import { getStudents, postStudent, removeStudent } from '../api/students'
import { FormValues } from '../components/shared/RegistrationForm'


class StudentsCloud {
  defaultStudents: Student[] = []
  filteredStudents: Student[] = []
  sortValue = ''
  state = { render: true }

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

  async postNewStudent(data: FormData) {
    await postStudent(data)
    runInAction(async () => await this.setStudents())
  }

  getCorrectFormatForPost = (data: FormValues) => {
    const entries = Object.entries(data).filter(entry => entry[0] !== 'avatar') as [string, string][]

    const file = data.avatar[0]
    const formData = new FormData()

    formData.append('avatar', file)

    entries.forEach((entry) => {
      if (entry[0] === 'prof') {
        formData.append('specialty', entry[1])
      }
      if (entry[0] === 'score') {
        formData.append('rating', entry[1])
      }
      if (entry[0] === 'birth') {
        formData.append('birthday', entry[1])
      }
      formData.append(...entry)
    })

    this.postNewStudent(formData)
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

export default new StudentsCloud()
