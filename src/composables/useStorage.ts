import { ref, type Ref, watch, onMounted } from 'vue'
import { Storage } from '@/services/storage'

/** Привязка к localStorage */

export const useStorage = <T>(key: string, defaultValue?: T) => {
  const item = ref(defaultValue) as Ref<T | undefined>

  onMounted(() => {
    const storedValue = Storage.get(key) as T | undefined
    if (storedValue) {
      item.value = storedValue
    }
  })

  watch(() => item.value, (newValue) => {
    if (newValue === null || newValue === undefined) {
      return Storage.remove(key)
    }

    Storage.set(key, newValue)
  })

  return item
}