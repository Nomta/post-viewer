import type { ResponseHeaders } from './ResponseHeaders'
import type { ErrorInfo } from './ErrorInfo'

export type ResponseData<T> = {
  data: T | null
  error: ErrorInfo | null
} & ResponseHeaders