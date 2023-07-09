import { onUnmounted, watch, type Ref } from 'vue'
import { debounce } from 'lodash'

type Handler = <T>(value: T) => void

export const useDebounceWatch = <T>(
  value: Ref<T>,
  handler: Handler,
  delay: number
) => {
  const debounceHandler = debounce(handler, delay)

  onUnmounted(() => {
    debounceHandler.cancel()
  })

  watch(value, debounceHandler)
}