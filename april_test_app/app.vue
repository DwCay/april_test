<template>
  <div class="page-wrapper" id="app">
    <header-component/>
    <products-page/>
    <loading-component/>
  </div>
</template>

<script lang="ts">
  import './src/assets/main.scss'
  import { defineComponent, onMounted } from 'vue';
  import { useProductsStore } from './src/stores/products';
  import ProductsPage from './src/components/pages/ProductsPage.vue';
  import HeaderComponent from './src/components/HeaderComponent.vue';
  import LoadingComponent from './src/components/LoadingComponent.vue';

  export default defineComponent({
  components: { ProductsPage, HeaderComponent, LoadingComponent },
    setup() {
      onMounted(() => {
        useProductsStore().getProducts()
      })
    }
  })
</script>

<style lang="scss" scoped>
  .page-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
</style>
