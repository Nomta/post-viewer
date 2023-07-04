import type { ErrorInfo } from './ErrorInfo'

export type ResponseData<T> = {
  data: T | null
  error: ErrorInfo | null
  totalCount?: number
}
