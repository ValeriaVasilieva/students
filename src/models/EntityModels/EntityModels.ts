export type Student = {
  id: number
  avatar: string
  name: string
  prof: string
  group: string
  age: string
  score: number
  color: string
}

export type StudentsForm = {
  name: string
  email: string
  birth: string
  score: string
  sex: string
  prof: string
  group: string
  avatar: FileList
  color: string
}
