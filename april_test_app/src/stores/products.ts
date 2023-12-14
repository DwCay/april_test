import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useLoadingStore } from './loading';
import { usePaginationStore } from './pagination';
import { getProductsList, getProductDetail } from '../../api/fetchWrapper';
import { type Product, type DisplayType } from '../utils/types';

export const useProductsStore = defineStore('products', () => {
  const displayType: Ref<DisplayType> = ref("list")
  const products: Ref<Array<Product> | null> = ref(null);
  const filtredProducts: Ref<Array<Product> | null | undefined> = ref(null);
  const productId: Ref<number | undefined> = ref();
  const product: Ref<Product | null> = ref(null);
  const loadingStore = useLoadingStore();
  const pagination = usePaginationStore();
  const valueToFilter = ref('');

  function setProductId(id: number): void {
    productId.value = id
  }

  function getCurrentPage () {
    const page = pagination.currentPage === 1 ? 
    filtredProducts?.value?.slice(0, pagination.pageSize) : 
    filtredProducts?.value?.slice((pagination.currentPage - 1) * pagination.pageSize, pagination.currentPage * pagination.pageSize);
    pagination.changePagination({
      lastPage: filtredProducts?.value ? Math.ceil(filtredProducts?.value?.length / pagination.pageSize) : 1,
    })
    return page
  }

  function filterProducts(): void {
    if (valueToFilter.value === '') {
      filtredProducts.value = products.value;
    } else {
      const filterKeys: Array<string> = ['title', 'price', 'category']
      filtredProducts.value = products.value?.filter((product: Product) => {
        return filterKeys.some((key: string) => {
          const value = key === 'category' ? product[key].name : product[key]
          return value.toString().toLowerCase().includes(valueToFilter.value.toLowerCase())
        })
      })
    }
    pagination.changePagination({
      currentPage: 1
    })
  }

  function changeDisplayType(type: DisplayType): void {
    displayType.value = type
  }
  async function getProducts(): Promise<void> {
    loadingStore.start('#wrapper');
    await getProductsList().then((res) => res).then((res) => {
      products.value = res.data;
      filtredProducts.value = res.data;
    })
    loadingStore.stop();
  };

  async function getProduct(): Promise<void> {
    loadingStore.start('#detail');
    await getProductDetail({id: productId.value}).then((res) => res.data).then((data) => {
      product.value = data
    })
    loadingStore.stop();
  };
  return { 
    products, 
    product, 
    displayType, 
    valueToFilter, 
    filtredProducts,
    productId,
    setProductId,
    filterProducts, 
    getCurrentPage, 
    changeDisplayType, 
    getProducts, 
    getProduct 
  }
})
