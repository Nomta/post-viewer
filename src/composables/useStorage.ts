import { ref, type Ref, watch, onMounted } from 'vue'
import { Storage } from '@/services/storage'

/** Привязка к localStorage */

export const useStorage = <T>(key: string, defaultValue: T | null = null) => {
  const item = ref(defaultValue) as Ref<T | null>

  onMounted(() => {
    const storedValue = Storage.get(key) as T | null
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