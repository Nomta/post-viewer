type StorageType<T> = {
  getItem: (key: string) => T | null
  setItem: (key: string, value: T) => void
  removeItem: (key: string) => void
  getAll: () => (T | null)[]
}

type CreateStorage = <T>(prefix: string) => StorageType<T>

export const useStorage = (): CreateStorage => {
  const getKey = (prefix: string, key: string) => `${prefix}/${key}/`

  const getKeys = (prefix: string) => {
    return Object.keys(localStorage)
      .filter(key => key.startsWith(prefix))
  }

  return <T>(prefix: string): StorageType<T> => {

    const getItem = (key: string): T | null => {
      const value = localStorage.getItem(getKey(prefix, key))
      if (value) {
        return JSON.parse(value) as T
      }
      return null
    }

    const getAll = () => {
      return getKeys(prefix).map((key) => {
        const value = localStorage.getItem(key)
        if (value) {
          return JSON.parse(value) as T
        }
        return null
      })
    }

    const setItem = (key: string, value: T): void => {
      localStorage.setItem(getKey(prefix, key), JSON.stringify(value))
    }

    const removeItem = (key: string): void => {
      localStorage.removeItem(getKey(prefix, key))
    }

    return {
      getItem,
      setItem,
      removeItem,
      getAll,
    }
  }
}