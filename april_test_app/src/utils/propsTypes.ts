import type { Category, KeysType} from "../utils/types"

export const propsTypes: KeysType = {
  title: String,
  description: String,
  category: Object as () => Category,
  price: Number,
  images: Array<String>
}