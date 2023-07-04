import { transform } from '@/services/utils/transform'
import type { ApiResponse, ResponseData } from '@/types'

type SearchParams = { [key: string]: string | number | boolean | undefined }
type QueryParams = { [key: string]: string }

export function mapSearchParams(params: SearchParams, queryParams: QueryParams) {
  return transform(params, queryParams)
}

export function mapResponse<T>({ response, isSuccess, error, data }: ApiResponse<T>) {
  const responseData: ResponseData<T> = { error, data }

  if (isSuccess) {
    const totalCount = response.headers.get('X-Total-Count')

    if (totalCount) {
      responseData.totalCount = Number(totalCount)
    }

  } else {
    console.error(error.message)
  }
  return responseData
}
