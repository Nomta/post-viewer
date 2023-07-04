import type { ApiResponse } from "./ApiResponse"
import type { SearchParams } from "./SearchParams"

export type ApiFunction<T> = (params?: SearchParams) => Promise<ApiResponse<T>>