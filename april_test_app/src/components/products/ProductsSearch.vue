<template>
  <div class="input-wrapper">
    <input 
      placeholder="Введите характеристику"
      v-model="productsStore.valueToFilter"
      @input="() => productsStore.filterProducts()"
      />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useProductsStore } from '~/src/stores/products';

export default defineComponent({
  setup() {
    const productsStore = useProductsStore();

    return { productsStore }
  },
})
</script>

<style lang="scss" scoped>
.input-wrapper {
  width: 30%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  & input {
    height: 100%;
    width: 100%;
    font-size: 24px;
    outline: none;
    border: none;
  }
}
</style>