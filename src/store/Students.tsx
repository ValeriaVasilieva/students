import { makeAutoObservable } from 'mobx'

import { Student } from '../models/types'
import { getStudents, removeStudent } from '../api/students'


class StudentsCloud {
  defaultStudents: Student[] = []
  filteredStudents: Student[] = []
  sortValue = ''

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
    // this.filteredStudents = this.filteredStudents.filter(student => student.id !== id)
    // this.defaultStudents = this.filteredStudents
    await removeStudent(id)
  }

  getFilterStudents(value: string) {
    this.filteredStudents = this.defaultStudents.filter(student => student.name.toLowerCase().includes(value || ''))
  }

  getSortedStudents(value: string, text: string) {
    this.sortValue = text
    console.log(this.sortValue)
    

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
