/**
 * fetch posts
 * @param {PostSearchParams} [params] - query параметры 
 * @returns {Promise<ResponseData<Post[]>>} - ответ сервера в виде ResponseData
*/

import { get } from '@/services/request'
import { transform } from '@/services/utils/transform'
import { POST_API_URL, queryParams } from './endpoints'
import type { ApiFunction, Post, PostSearchParams } from '@/types'

export const fetchPosts: ApiFunction<Post[], PostSearchParams> = (params) => {
  if (params) {
    return get(POST_API_URL, mapSearchParams(params))
  }
  return get(POST_API_URL)
}

/* utils */

function mapSearchParams(params: PostSearchParams) {
  return transform(params, queryParams)
}
