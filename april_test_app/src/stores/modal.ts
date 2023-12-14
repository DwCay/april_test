import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useProductsStore } from '~/src/stores/products';

export const useModalStore = defineStore('modal', () => {
  const showModal: Ref<boolean> = ref(false);
  const productsStore = useProductsStore();
  function open(): void {
    showModal.value = true;
  }

  function close(): void {
    showModal.value = false
  }
  return { showModal, open, close }
})