export interface KeysType {
  [key: string]: any
}

export type RequestParams = {
  limit?: number,
  offset?: number,
  id?: number,
}

export type DisplayType = 'list' | 'grid'

export type Category = {
  creationAt: string
  id: number
  image: string
  name: string
  updatedAt: string
}

export enum ProductTitles {
  title = 'Название',
  price = 'Цена',
  category = 'Категория',
  images = 'Изображениe',
}

export type Product = KeysType & {
  id: number,
  title: string,
  price: number,
  description: string,
  category: Category,
  images: Array<string>
}

export type Pagination = {
  currentPage?: number,
  pageSize?: number,
  lastPage?: number
}