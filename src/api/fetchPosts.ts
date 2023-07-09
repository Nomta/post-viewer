import { transform } from '@/services/utils/transform'
import { get } from '@/services/request'
import { POST_API_URL, POST_API_KEY, queryParams } from './endpoints'
import { ResponseHeader, type Post, type PostSearchParams, type ResponseData } from '@/types'

/**
 * fetch posts
 * @param {PostSearchParams} params - query параметры 
 * @returns {Promise<ResponseData<Post[]>>} - ответ сервера в виде ResponseData
*/

export const fetchPosts = async (params: PostSearchParams) => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  
  const { 
    isSuccess, 
    response, 
    error, 
    data 
  } = await get<Post[], PostSearchParams>(POST_API_URL, mapSearchParams(params))

  if (!isSuccess) {

    /* Vue Query requires throw an error: 'https://vue-query.vercel.app/#/guides/queries' */

    throw Error(error.message)
  }

  const responseData: ResponseData<Post[]> = { data }
  const totalCount = response.headers.get(ResponseHeader.totalCount)

  if (totalCount) {
    responseData.totalCount = Number(totalCount)
  }

  return responseData
}

export { POST_API_KEY }

/* utils */

function mapSearchParams(params: PostSearchParams) {
  return transform(params, queryParams)
}