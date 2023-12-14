<template>
  <div id="wrapper">
    <div 
      class="page-wrapper"
      v-if="productsStore.filtredProducts"
      >
      <div class="content-block">
        <div class="content-interface ">
          <products-search/>
          <div class="display-type">
            <Icon 
              :class="{'icon': true, 'active': productsStore.displayType === 'list'}"
              @click="() => productsStore.changeDisplayType('list')"
              width="45px"
              height="45px"
              name="gridicons:align-justify"
            />
            <Icon 
            :class="{'icon': true, 'active': productsStore.displayType === 'grid'}"
            @click="() => productsStore.changeDisplayType('grid')"
            width="40px" 
            height="40px" 
            name="gridicons:grid"
            />
          </div>
        </div>
        <products-list-layout v-if="productsStore.displayType === 'list'"/>
        <products-grid-layout v-if="productsStore.displayType === 'grid'"/>
        <modal-component v-if="modalStore.showModal">
          <product-detail />
        </modal-component>
      </div>
      <pagination-component/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useProductsStore } from '~/src/stores/products';
import { useLoadingStore } from '~/src/stores/loading';
import { useModalStore } from '~/src/stores/modal';
import ProductsListLayout from '../products/ListLayout/ProductsListLayout.vue';
import ProductsGridLayout from '../products/GridLayout/ProductsGridLayout.vue';
import PaginationComponent from '../PaginationComponent.vue';
import ProductDetail from '../products/ProductDetail.vue';
import ModalComponent from '../ModalComponent.vue';
import ProductsSearch from '../products/ProductsSearch.vue';

export default defineComponent({
  components: { 
    ProductDetail, 
    ModalComponent,
    ProductsListLayout, 
    ProductsGridLayout, 
    PaginationComponent, 
    ProductsSearch 
  },
  setup() {
    const productsStore = useProductsStore();
    const loadingStore = useLoadingStore();
    const modalStore = useModalStore();

    return { productsStore, loadingStore, modalStore }
  }
})
</script>

<style lang="scss" scoped>
#wrapper {
  width: 100%;
  height: 90%;
  position: relative;
}
.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 90vh;
  padding: 50px 30px 200px 30px
}
.content-block {
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.content-interface {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.display-type {
  display: flex;
  border: 3px solid var(--border-color);
  padding: 5px;
  border-radius: 8px;
  height: 45px;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
}

.icon {
  cursor: pointer;
  height: 100%;
  width: 45px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  color: var(--font-grey-color);
}

.active {
  background-color: var(--background-color-blue);
  color: var(--font-white-color);
}
</style>
