import { transform } from '@/services/utils/transform'
import type { ApiResponse, ResponseData } from '@/types'

type SearchParams = { [key: string]: string | number | boolean | undefined }
type QueryParams = { [key: string]: string }
type ResponseCallback = <T>(responseData: ResponseData<T>) => void


export function mapSearchParams(params: SearchParams, queryParams: QueryParams) {
  return transform(params, queryParams)
}

export function mapResponse<T>(
  { isSuccess, error, data }: ApiResponse<T>,
  successCallback?: ResponseCallback,
  errorCallback?: ResponseCallback,
) {
  const responseData: ResponseData<T> = { error, data }

  if (isSuccess) {
    successCallback?.(responseData)

  } else {
    errorCallback?.(responseData)
  }
  return responseData
}
