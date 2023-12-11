export type DisplayType = 'list' | 'grid'

export type PriceType = 'RED' | 'WHITE'

export type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | '3XL' | 'XXL'
type CategoriesNames = 'Men' | 'Ladies' | 'Kids'

export type Color = {
  code?: string,
  rgbColor?: string,
  text: string
}

export enum ProductTitles {
  name = 'Имя продукта',
  brandName = 'Бренд',
  category = 'Категоря',
  price = 'Цена',
  sizes = 'Размер',
  color = 'Цвет',
  code = 'Артикул',
  img = 'Фото'
}

export type ProductDetail = {
  name: string,
  description: string,
  customerGroup: string,
  ageGender?: string,
  price: number,
  whitePrice?: number,
  images: Array<{url: string, id: string}>,
  colors: Array<Color>,
  sizes: Array<String>,
  year: string,
  country: string,
  code: string,
}

export type RequestDetail = {
  name: string,
  description: string,
  customerGroup: string,
  ageGender?: string,
  redPrice?: {
    price: number,
  }
  whitePrice: {
    price: number,
  }
  priceType: string | "",
  articlesList: Array<{
    color: Color,
    galleryDetails: Array<{
      url: string,
      baseUrl: string,
      id: string
    }>,
    variantsList: Array<{
      code: string,
      size: {
        name: string
      }
    }>,
  }>,
  yearOfProduction: string,
  productCountryOfProduction: string,
  code: string
}

export type Product = {
  name: string,
  brandName: string,
  category: string,
  price: number,
  whitePrice: number | null,
  sizes: Array<Sizes>,
  color: Color,
  code: string,
  img: string
}
export type RequestProduct = {
  name: string,
  brandName: string,
  categoryName: string,
  price: {
    value: number,
    type: PriceType
  },
  whitePrice: {
    value: number,
    type: PriceType
  }
  variantSizes: Array<{
    filterCode: Sizes,
  }>,
  defaultArticle: {
    color: {
      text: string
      code?: string
      rgbColor?: string
    },
    code: string,
    images: Array<{
      url: string
    }>
  }
}