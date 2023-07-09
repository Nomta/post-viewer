import { computed, ref, type Ref } from 'vue'
import { useQuery } from 'vue-query'
import type { QueryObserverBaseResult } from 'vue-query/types'
import type { FetchFunction, ResponseData, QueryOptions } from '@/types'

export function useFetch<T, P>(key: string, fetcher: FetchFunction<T, P>, queryOptions: QueryOptions) {
  const response: Ref<QueryObserverBaseResult<ResponseData<T>> | null> = ref(null)
  
  const data = computed(() => response.value?.data)
  const error = computed(() => response.value?.error)
  const loading = computed(() => response.value?.isLoading)

  const fetchData = async (params?: P) => {
    response.value = await useQuery([key, params], () => fetcher(params), queryOptions)
  }

  return { data, error, loading, fetchData }
}


