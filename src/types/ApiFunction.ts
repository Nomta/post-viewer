import type { ApiResponse } from "./ApiResponse"

export type ApiFunction<T, P> = (params?: P) => Promise<ApiResponse<T>>