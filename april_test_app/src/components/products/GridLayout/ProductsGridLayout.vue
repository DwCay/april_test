<template>
  <div class="grid-layout" id="grid">
    <product-grid-card 
      v-for="product in productsStore.products" 
      :key="product.code"
      @click="() => modalStore.open(product.code, '#detail')"
      v-bind="product"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useProductsStore } from '~/src/store/products';
import { useModalStore } from '~/src/store/modal';
import ProductGridCard from './ProductGridCard.vue';

export default defineComponent({
  components: { ProductGridCard },
  setup() {
    const productsStore = useProductsStore();
    const modalStore = useModalStore();

    return { productsStore, modalStore }
  }
})
</script>

<style lang="scss" scoped>
.grid-layout {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 280px;
  grid-gap: 10px;
  overflow-y: auto;
  -ms-overflow-style: none;
      scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
}
</style>