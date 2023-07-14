import { fetchPosts } from '@/api'
import { POST_CASHING_TIME } from '@/config'
import type { PostSearchParams } from '@/types'
import type { Ref } from 'vue'
import { useQuery } from 'vue-query'

const queryOptions = {
  cache: true,
  staleTime: POST_CASHING_TIME,
  keepPreviousData: true,
  refetchOnWindowFocus: false,
}

export const POST_API_KEY = 'posts'

export const usePostQuery = (params: Ref<PostSearchParams>) => {
  return useQuery([POST_API_KEY, params], () => fetchPosts(params.value), queryOptions)
}
