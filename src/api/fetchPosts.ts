/**
 * fetch posts
 * @param {PostSearchParams} [params] - query параметры 
 * @returns {Promise<ResponseData<Post[]>>} - ответ сервера в виде ResponseData
*/

import { get } from '@/services/request'
import { transform } from '@/services/utils/transform'
import { POST_API_URL, queryParams } from './endpoints'
import type { ApiResponse, Post, PostSearchParams, ResponseData } from '@/types'

export const fetchPosts = async (params: PostSearchParams) => {
  if (params) {
    const responseData = await get<Post[]>(POST_API_URL, mapSearchParams(params))
    return mapResponse(responseData)
  }
  const responseData = await get<Post[]>(POST_API_URL)
  return mapResponse(responseData)
}

/* utils */

function mapSearchParams(params: PostSearchParams) {
  return transform(params, queryParams)
}

function mapResponse({ response, isSuccess, error, data }: ApiResponse<Post[]>) {
  if (isSuccess) {
    const responseData: ResponseData<Post> = { data }
    const totalCount = response.headers.get('X-Total-Count')
    
    if (totalCount) {
      responseData.totalCount = Number(totalCount)
    }
    return responseData

  } else {
    console.error(error.message)
    return error
  }
}
