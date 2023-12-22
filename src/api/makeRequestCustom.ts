const API_URL = 'https://jsonplaceholder.typicode.com/posts'

interface CustomArguments {
  params?: Record<string, string>
  requestOptions?: RequestInit
}

/**
 * Обертка над http запросом, чтобы обеспечить независимость от используемых библиотек
 * @param params - query параметры запроса в виде объекта
 * @param requestOptions - настройки запроса: method, headers, cashe
 * @returns ответ сервера
 * @example makeRequest(params: {id: '2'})
 */

export const makeRequestCustom = async <T = never>({
  params,
  requestOptions,
}: CustomArguments): Promise<T> => {
  const url = new URL(API_URL)
  url.search = new URLSearchParams(params).toString()
  return (await fetch(url, requestOptions)).json() as T
}
