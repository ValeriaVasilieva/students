type Messages = {
  [key: number]: string
}

export const defaultMessage = 'Something went wrong and request was not completed'

export const messages: Messages = {
  400: 'Test message',
  401: 'Please login to access this resource',
  404: 'The requested resource does not exist or has been deleted'
}
