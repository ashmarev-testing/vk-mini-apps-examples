import { makeRequestCustom } from 'src/api/makeRequestCustom'

interface GetCustomResponse {
  Data: JSON
}

/** Получение данных магазина и рекомендованных пользователю товаров */
export const getCustomData = async (): Promise<GetCustomResponse> => {
  return await makeRequestCustom<GetCustomResponse>({})
}
