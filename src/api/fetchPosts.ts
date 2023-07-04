/**
 * fetch posts
 * @param {PostSearchParams} [params] - query параметры 
 * @returns {Promise<ResponseData<Post[]>>} - ответ сервера в виде ResponseData
*/

import { get } from '@/services/request'
import { POST_API_URL, queryParams } from './endpoints'
import type { Post, PostSearchParams } from '@/types'
import { mapResponse, mapSearchParams } from './utils'

export const fetchPosts = async (params?: PostSearchParams) => {
  if (params) {
    const responseData = await get<Post[], PostSearchParams>(POST_API_URL, mapSearchParams(params, queryParams))
    return mapResponse(responseData)
  }
  const responseData = await get<Post[], PostSearchParams>(POST_API_URL)
  return mapResponse(responseData)
}
