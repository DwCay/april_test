import type { Sizes, Color } from "../store/types"


type PropTypes = {
  [key: string]: any
}
export const propsTypes: PropTypes = {
  name: String,
  brandName: String,
  category: String,
  price: Number,
  whitePrice: Number || null,
  sizes: Array<Sizes>,
  color: Object as () => Color,
  code: String,
  img: String
}