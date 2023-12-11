import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useLoadingStore } from './loading';
import { getProductsList, getProductDetail, type Params } from '../../api/fetchWrapper';
import type { Product, ProductDetail, RequestDetail, RequestProduct, Sizes, Color, DisplayType } from './types';

export const useProductsStore = defineStore('products', () => {
  const displayType: Ref<DisplayType> =ref("list")
  const products: Ref<Array<Product> | null> = ref(null);
  const product: Ref<ProductDetail | null> = ref(null);
  const loadingStore = useLoadingStore();

  function changeDisplayType(type: DisplayType): void {
    displayType.value = type
  }
  async function getProducts(param: Params): Promise<void> {
    await getProductsList(param).then((res) => res.data).then((data) => {
      products.value = data.results.map((product: RequestProduct) => ({
        name: product.name,
        brandName: product.brandName,
        category: product.categoryName,
        price: product.price.value,
        whitePrice: product.price.type === 'RED' ? product.whitePrice.value : null,
        sizes:  product.variantSizes.map((size: {filterCode: Sizes}) => size.filterCode),
        color: {...product.defaultArticle.color},
        code: product.defaultArticle.code,
        img: product.defaultArticle.images[0].url
      }))
    })
  };

  async function getProduct(param: Params, elemId: string): Promise<void> {
    loadingStore.start(elemId);
    await getProductDetail(param).then((res) => res.data.product).then((data: RequestDetail) => {
      product.value = {
        name: data.name,
        description: data.description,
        customerGroup: data.customerGroup,
        ageGender: data?.ageGender,
        price: data?.redPrice ? data.redPrice.price : data.whitePrice.price,
        whitePrice: data?.redPrice && data.whitePrice.price,
        images: data.articlesList.map((article) => article.galleryDetails[0]),
        colors: data.articlesList.map((article) => article.color),
        sizes: data.articlesList[0].variantsList.map((variant) => variant.size.name),
        year: data.yearOfProduction,
        country: data.productCountryOfProduction,
        code: data.code,
      }
    })
    loadingStore.stop();
  };
  return { products, product, displayType, changeDisplayType, getProducts, getProduct }
})
