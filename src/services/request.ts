/**
 * GET HTTP-запрос
 * @param {string} url
 * @param {SearchParams} [params] - query параметры 
 * @returns {Promise<ApiResponse<T>>} - ответ сервера в виде ApiResponse
 */

import type { ApiResponse, SearchParams } from "@/types"

export async function get<T>(url: string, params?: SearchParams): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(buildUrl(url, params))
    const data = await response.json() as T

    return {
      isSuccess: true,
      error: null,
      data,
    }
  } catch (error) {
    return {
      isSuccess: false,
      error,
      data: null,
    }
  }
}

/* utils */

function buildUrl(baseUrl: string, params?: SearchParams) {
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