import { AxiosError, AxiosResponse } from 'axios'
import { runInAction, makeAutoObservable } from 'mobx'

import { RequestError, RequestErrorResponse } from '@models/common/error'
import { getErrorMessage } from '@utils/apiErrors'


type ConstructorProps<RequestType, ResponseType> = {
  apiFunction: (requestData: RequestType) => Promise<AxiosResponse<ResponseType>>
  excludedErrorCodes?: number[]
  disableGlobalErrors?: boolean
  shouldUseCustomErrorMessage?: boolean
}

export default class ApiRequestStore<RequestType, ResponseType> {
  private apiFunction
  private excludedErrorCodes
  private disableGlobalErrors
  private shouldUseCustomErrorMessage

  errors?: RequestError[] = undefined
  isLoading = false
  data?: ResponseType = undefined
  status?: number

  constructor({
    apiFunction,
    excludedErrorCodes = [],
    disableGlobalErrors = false,
    shouldUseCustomErrorMessage = false
  }: ConstructorProps<RequestType, ResponseType>) {
    this.apiFunction = apiFunction
    this.excludedErrorCodes = excludedErrorCodes
    this.disableGlobalErrors = disableGlobalErrors
    this.shouldUseCustomErrorMessage = shouldUseCustomErrorMessage

    makeAutoObservable(this)
  }

  setData = (data: ResponseType) => {
    this.data = data
  }

  setErrors = (errors: RequestError[]) => {
    this.errors = errors
  }

  clearErrors = () => {
    this.errors = undefined
  }

  send = (requestData: RequestType): Promise<ResponseType | void> => {
    this.isLoading = true

    return this.apiFunction(requestData)
      .then((response) => {
        this.setData(response.data)
        this.status = response.status

        return response.data
      })
      .catch((error: AxiosError<RequestErrorResponse>) => {
        const statusCode = error.response ? error.response.status : undefined
        this.status = statusCode

        if (statusCode) {
          error.response && this.setErrors(error.response.data.errors)

          // Start global error handler
          if (!this.disableGlobalErrors && this.excludedErrorCodes?.indexOf(statusCode) === -1) {
            // global error handler logic
            const customMessage = getErrorMessage(statusCode)

            alert(this.shouldUseCustomErrorMessage ? customMessage : error.message)
          }
        } else {
          console.error(error)
        }
      })
      .finally(() => {
        runInAction(() => {
          this.isLoading = false
        })
      })
  }
}
