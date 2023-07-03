/* 
export type ApiResponse<T> = {
  data: T
  totalCount: number
}
 */

export type ApiResponse<T> = {
  isSuccess: boolean
  error: unknown
  response: Response
  data: T | null
}



