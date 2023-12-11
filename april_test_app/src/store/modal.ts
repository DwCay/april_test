import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useProductsStore } from '~/src/store/products';

export const useModalStore = defineStore('modal', () => {
  const showModal: Ref<boolean> = ref(false);
  const productsStore = useProductsStore();
  function open(id: string, elemId: string): void {
    showModal.value = true;
    productsStore.getProduct({productcode: id}, elemId);
  }

  function close(): void {
    showModal.value = false
  }
  return { showModal, open, close }
})