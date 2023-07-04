import type { ResponseData } from './ResponseData'

export type FetchFunction<T, P> = (params?: P) => Promise<ResponseData<T>>