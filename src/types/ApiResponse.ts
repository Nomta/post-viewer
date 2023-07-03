export type ApiResponse<T> = {
  isSuccess: boolean
  error: unknown
  data: T | null
}



