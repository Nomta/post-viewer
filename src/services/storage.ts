export class RawStorage {
  static get(key: string): string | null {
    return localStorage.getItem(key)
  }
  static set(key: string, value: string): void {
    localStorage.setItem(key, value)
  }
  static remove(key: string): void {
    localStorage.removeItem(key)
  }
  static clear(): void {
    localStorage.clear()
  }
}

export class Storage extends RawStorage {
  constructor() {
    super()
  }
  static get<T>(key: string): T | null {
    const value = super.get(key)
    if (value) {
      return JSON.parse(value) as T
    }
    return null
  }
  static set<T>(key: string, value: T): void {
    super.set(key, JSON.stringify(value))
  }
}