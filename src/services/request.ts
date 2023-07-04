/**
 * GET HTTP-запрос
 * @param {string} url
 * @param {SearchParams} [params] - query параметры 
 * @returns {Promise<ApiResponse<T>>} - ответ сервера в виде ApiResponse
 */

import type { ApiErrorResponse, ApiSuccessResponse, ErrorInfo } from "@/types"

export async function get<T, P>(url: string, params?: P) {
  try {
    const response = await fetch(buildUrl(url, params))

    try {
      const data = await response.json() as T

      return createSuccessResult(data, response)
    } catch (e) {
      
      const error = {
        statusCode: response.status,
        message: response.statusText
      }
      
      return createErrorResult(error, response)
    }
  } catch (error) {
  if (error instanceof DOMException && error.name === 'AbortError' || error instanceof TypeError) {
    console.error('Разрыв соединения')
  }
  throw error
}
}

/* utils */

function createErrorResult(error: ErrorInfo, response: Response) {
  return { 
    isSuccess: false, 
    error, 
    data: null, 
    response 
  } as ApiErrorResponse
}

function createSuccessResult<T>(data: T, response: Response) {
  return { 
    isSuccess: true, 
    error: null, 
    data, 
    response 
  } as ApiSuccessResponse<T>
}

function buildUrl<P>(baseUrl: string, params?: P) {
  const url = new URL(baseUrl)

  if (params) {
    const searchParams = new URLSearchParams()

    for (const [key, value] of Object.entries(params)) {
      searchParams.set(key, String(value))
    }

    url.search = searchParams.toString()
  }

  return url.toString()
}