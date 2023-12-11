<template>
  <div class="content-wrapper">
    <div class="table-interface ">
      <div>asdasd</div>
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
    <base-modal>
      <product-detail />
    </base-modal>
    <base-loading />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useProductsStore } from '~/src/store/products';
import ProductsListLayout from '../products/ListLayout/ProductsListLayout.vue';
import ProductsGridLayout from '../products/GridLayout/ProductsGridLayout.vue';
import ProductDetail from '../products/ProductDetail.vue';
import BaseModal from '../BaseModal.vue';
import BaseLoading from '../BaseLoading.vue';

export default defineComponent({
  components: { ProductDetail, BaseModal, ProductsListLayout, ProductsGridLayout, BaseLoading },
  setup() {
    const productsStore = useProductsStore();

    return { productsStore }
  }
})
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding: 50px 30px 100px 30px
}
.table-interface {
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
