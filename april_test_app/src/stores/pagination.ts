import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { type Pagination } from '../utils/types';

export const usePaginationStore = defineStore('pagination', () => {
  const currentPage: Ref<number> = ref(1);
  const pageSize: Ref<number> = ref(15);
  const lastPage: Ref<number> = ref(1);

  function changePagination(paramsPagination: Pagination): void {
    currentPage.value = paramsPagination.currentPage || currentPage.value;
    pageSize.value = paramsPagination.pageSize || pageSize.value;
    lastPage.value = paramsPagination.lastPage || lastPage.value;
  }

  return { currentPage, pageSize, lastPage, changePagination }
})