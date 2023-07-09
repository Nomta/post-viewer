import type { ResponseHeaders } from './ResponseHeaders'

export type ResponseData<T> = {
  data: T | null
} & ResponseHeaders