<template>
  <div class="page-wrapper">
    <header-component/>
    <home-page/>
  </div>
</template>

<script lang="ts">
  import './src/assets/main.scss'
  import { defineComponent, onMounted } from 'vue';
  import { useProductsStore } from './src/store/products';
  import HomePage from './src/components/pages/HomePage.vue';
  import HeaderComponent from './src/components/HeaderComponent.vue';

  export default defineComponent({
  components: { HomePage, HeaderComponent },
    setup() {
      onMounted(() => {
        useProductsStore().getProducts({pagesize: 15})
      })
    }
  })
</script>

<style lang="scss" scoped>
  .page-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
