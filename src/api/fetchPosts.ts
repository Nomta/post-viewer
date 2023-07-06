/**
 * fetch posts
 * @param {PostSearchParams} [params] - query параметры 
 * @returns {Promise<ResponseData<Post[]>>} - ответ сервера в виде ResponseData
*/

import { get } from '@/services/request'
import { POST_API_URL, queryParams } from './endpoints'
import { ResponseHeader, type Post, type PostSearchParams } from '@/types'
import { mapResponse, mapSearchParams } from './utils'

export const fetchPosts = async (params?: PostSearchParams) => {
  if (params) {
    const result = await get<Post[], PostSearchParams>(POST_API_URL, mapSearchParams(params, queryParams))

    return mapResponse(result, (responseData) => {
      const totalCount = result.response.headers.get(ResponseHeader.totalCount)

      if (totalCount) {
        responseData.totalCount = Number(totalCount)
      }
    })
  }
  const result = await get<Post[], PostSearchParams>(POST_API_URL)
  
  return mapResponse(result)
}
