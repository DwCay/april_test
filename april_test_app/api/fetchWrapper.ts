import axios, { type AxiosResponse } from "axios"

const params: Params = {
  pagesize: 30,
}

export type Params = {
  currentpage?: number,
  pagesize?: number,
  categories?: string,
  productcode?: string
}


export const getProductsList = (param?: Params): Promise<AxiosResponse> => {
  const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list';
  const headers = {
    "X-RapidAPI-Key": '5f43a3c177msh7b9fccdf9562b93p1e566djsnad4602385328',
  };
  return axios.get(url, {headers, params: {...params, ...param}});
}

export const getProductDetail = (param?: Params): Promise<AxiosResponse> => {
  const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail';
  const headers = {
    "X-RapidAPI-Key": '5f43a3c177msh7b9fccdf9562b93p1e566djsnad4602385328',
  };
  return axios.get(url, {headers, params: {...param}});
}