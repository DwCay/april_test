<template>
  <div class="pagination-wrapper">
    <div class="pagination">
      <div 
      :class="{'pagination-button': true, 'disabled': pagination.currentPage === 1}"
        @click="() => changeCurrentPage(1)"
        >
        <span>{{ '<<' }}</span>
      </div>
      <div 
      :class="{'pagination-button': true, 'disabled': pagination.currentPage === 1}"
        @click="() => changeCurrentPage(pagination.currentPage - 1)"
        >
        <span>{{ '<' }}</span>
      </div>
      <div 
        class="ellipsis"
        v-if="pagination.currentPage-1 > 1"
        >
        <span>...</span>
      </div>
      <div 
        class="pagination-button"
        v-if="pagination.currentPage > 1"
        @click="() => changeCurrentPage(pagination.currentPage - 1)"
        >
        <span>{{ pagination.currentPage - 1 }}</span>
      </div>
      <div class="pagination-button current">
        <span>{{ pagination.currentPage }}</span>
      </div>
      <div 
        class="pagination-button"
        v-if="pagination.currentPage < pagination.lastPage"
        @click="() => changeCurrentPage(pagination.currentPage + 1)"
        >
        <span>{{ pagination.currentPage + 1 }}</span>
      </div>
      <div 
        class="ellipsis"
        v-if="pagination.currentPage+1 < pagination.lastPage"
        >
        <span>...</span>
      </div>
      <div 
        :class="{'pagination-button': true, 'disabled': pagination.currentPage === pagination.lastPage}"
        @click="() => changeCurrentPage(pagination.currentPage + 1)"
        >
        <span>{{ '>' }}</span>
      </div>
      <div 
      :class="{'pagination-button': true, 'disabled': pagination.currentPage === pagination.lastPage}"
        @click="() => changeCurrentPage(pagination.lastPage)"
        >
        <span>{{ '>>' }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePaginationStore } from '../stores/pagination';

export default defineComponent({
  setup() {
    const pagination = usePaginationStore();
    function changeCurrentPage(to: number) {
      pagination.changePagination({ currentPage: to })
    }

    return { pagination, changeCurrentPage }
  }
})
</script>

<style lang="scss" scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}
.pagination {
  display: flex;
  height: 100%;
  gap: 5px;
  font-size: 24px;
  font-weight: 400;
  color: var(--font-grey-color);
  text-align: end;
}

.disabled {
  pointer-events: none;
}
.ellipsis {
  display: flex;
  height: 100%;
  text-align: end;
  font-size: 40px;
}
.pagination-button {
  height: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 40px;
  border: 2px solid var(--border-color);
  cursor: pointer;
  border-radius: 6px;
  & span {
    margin-bottom: 2px;
  }
  &:hover {
    border-color: var(--button-hover-color);
    color: var(--button-hover-color);
  }
}

.current {
  border-color: var(--button-hover-color);
  color: var(--button-hover-color);
}
</style>