import { transform } from 'lodash'

const transformObject = <
  T extends { [key: string]: T[keyof T] },
  K extends { [key: string]: string },
>
  (src: T, queryMap: K) => {
  return transform(src, (map, value, key) => {
    if (value && queryMap[key]) map[queryMap[key]] = value
  }, {} as { [key: string]: T[keyof T] })
}

export { transformObject as transform }
