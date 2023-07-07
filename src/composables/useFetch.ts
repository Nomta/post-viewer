import { ref } from 'vue'
import type { Ref } from 'vue'
import type { FetchFunction, ResponseData, ResponseHeaders } from '@/types'

export function useFetch<T, P>(fetcher: FetchFunction<T, P>) {
  const loading = ref(false)
  const error: Ref<unknown> = ref(null)
  const data: Ref<T | null> = ref(null)
  const headers = ref<ResponseHeaders>({})

  const fetchData = (params?: P) => {
    if (loading.value) {
      return
    }
    loading.value = true
    error.value = null
    data.value = null
    headers.value = {}

    return fetcher(params)
      .then(({
        data: responseDataValue,
        error: responseErrorValue,
        ...response
      }: ResponseData<T>) => {
        data.value = responseDataValue
        error.value = responseErrorValue
        headers.value = response
      })
      .catch((e: unknown) => error.value = e)
      .finally(() => loading.value = false)
  }

  return { data, error, loading, fetchData, headers }
}


