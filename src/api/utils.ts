import { transform } from '@/services/utils/transform'
import type { ApiResponse, ResponseData, ErrorInfo } from '@/types'

type SearchParams = { [key: string]: string | number | boolean | undefined }
type QueryParams = { [key: string]: string }

type SuccessCallback = <T>(responseData: ResponseData<T>) => void
type ErrorCallback = (error: ErrorInfo) => void


export function mapSearchParams(params: SearchParams, queryParams: QueryParams) {
  return transform(params, queryParams)
}

export function mapResponse<T>(
  { isSuccess, error, data }: ApiResponse<T>,
  successCallback?: SuccessCallback,
  errorCallback?: ErrorCallback,
) {

  if (!isSuccess) {
    errorCallback?.(error)

    /* Vue Query requires throw an error: 'https://vue-query.vercel.app/#/guides/queries' */

    throw Error(error.message)
  }
  
  const responseData: ResponseData<T> = { data }

  successCallback?.(responseData)

  return responseData
}
