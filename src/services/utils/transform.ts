export const transform = <
  T extends { [key: string]: T[keyof T] },
  K extends { [key: string]: string },
>
(src: T, map: K) => {
  return Object.entries(src)
    .reduce((target, [key, value]) => {
      if (value) {
        const targetPropName = map[String(key)]
        target[targetPropName] = value
      }
      return target
    }, {} as { [key: string]: T[keyof T] })
}
