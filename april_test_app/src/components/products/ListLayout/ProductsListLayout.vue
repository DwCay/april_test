<template>
  <div class="list-layout">
    <div class="hedaer-list">
      <div
        v-for="(value, key) in titles" :key="key" 
        class="product-title">
        <span>{{ value }}</span>
      </div>
    </div>
    <div class="products-list">
      <product-list-row 
        v-for="product in productsStore.getCurrentPage()" 
        :key="product.id"
        @click="() => {
          modalStore.open(); 
          productsStore.setProductId(product.id);
        }"
        v-bind="product"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProductTitles } from '~/src/utils/types';
import { useProductsStore } from '~/src/stores/products';
import { useModalStore } from '~/src/stores/modal';
import ProductListRow from './ProductListRow.vue';

export default defineComponent({
  components: { ProductListRow },
  setup() {
    const titles = ProductTitles;
    const productsStore = useProductsStore();
    const modalStore = useModalStore();

    return { productsStore, modalStore, titles }
  },
})
</script>

<style lang="scss" scoped>
.list-layout {
  display: flex;
  position: relative;
  width: 100%;
  max-height: 100%;
  height: fit-content;
  flex-direction: column;
  border: solid 2px var(--border-color);
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
}
.hedaer-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  height: 50px;
  color: var(--font-grey-color);
  font-weight: 500;
  font-size: 18px;
  padding: 10px 0px 10px 0px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom: solid 3px var(--border-color);
  -webkit-box-shadow: 0px -5px 25px -14px rgba(168, 172, 174, 0.6) inset;
  -moz-box-shadow: 0px -5px 25px -14px rgba(168, 172, 174, 0.6) inset;
  box-shadow: 0px -5px 25px -14px rgba(168, 172, 174, 0.6) inset;
}
.product-title {
  display: flex;
  align-items: center;  
  justify-content: center;
  white-space: nowrap;
  border-right: 1px solid var(--border-color);
  &:last-child {
    border-right: none;
  }
}
.products-list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -ms-overflow-style: none;
      scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  -webkit-box-shadow: 0px 21px 57px -42px rgba(34, 60, 80, 0.42) inset;
  -moz-box-shadow: 0px 21px 57px -42px rgba(34, 60, 80, 0.42) inset;
  box-shadow: 0px 21px 57px -42px rgba(34, 60, 80, 0.42) inset;
}
@media (min-height: 1600px) {
  .list-layout {
    height: fit-content;
  }
}
</style>