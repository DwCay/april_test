import axios, { type AxiosResponse } from "axios"
import { type RequestParams } from "../src/utils/types";

const params: RequestParams = {
  offset: 1,
  limit: 107,
}

export const getProductsList = (): Promise<AxiosResponse> => {
  const url = 'https://api.escuelajs.co/api/v1/products';
  return axios.get(url, {params: {...params}});
}

export const getProductDetail = (param?: RequestParams): Promise<AxiosResponse> => {
  const url = `https://api.escuelajs.co/api/v1/products/${param?.id}`;
  return axios.get(url);
}