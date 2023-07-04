import type { ErrorInfo } from "."

export type ApiErrorResponse = {
  isSuccess: false
  error: ErrorInfo
  response: Response
  data: null
}

export type ApiSuccessResponse<T> = {
  isSuccess: true
  error: null
  response: Response
  data: T
}

export type ApiResponse<T> = ApiErrorResponse | ApiSuccessResponse<T>



