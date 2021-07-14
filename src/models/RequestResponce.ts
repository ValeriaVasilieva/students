export type StudentsResponce = {
  students: {
    id: number
    email: string
    name: string
    sex: string
    specialty: string
    group: string
    color: string
    rating: number
    birthday: string
    avatar: string
  }[]
}

export type StudentsRequest = {
  email: string
  name: string
  sex: string
  specialty: string
  group: string
  color: string
  rating: string
  birthday: string
  avatar: Blob
}
