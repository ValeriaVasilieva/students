export interface RequestError {
  code: string
  message: string
}

export interface RequestErrorResponse {
  errors: RequestError[]
}
