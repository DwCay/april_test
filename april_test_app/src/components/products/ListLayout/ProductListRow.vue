<template>
  <div class="row">
    <div 
      v-for="key in rowKeys" :key="key"
      class="cell"
      >
      <img 
        class="product-img" 
        v-if="key === 'images'" 
        :src="imageСheck(props[key][0])"
        alt="productImage"
      />
      <div v-else-if="key === 'price'" class="prices">
        <p class="price">{{ `$ ${props.price}` }}</p>
      </div>
      <p v-else-if="key === 'category'">{{ props[key].name }}</p>
      <p v-else-if="key === 'title'">{{ props.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProductTitles } from '~/src/utils/types';
import { propsTypes } from '~/src/utils/propsTypes';
import { imageСheck } from '~/src/utils/imageСheck';

export default defineComponent({
  props: propsTypes,
  setup(props) {
    const rowKeys = Object.keys(ProductTitles);
    return { props, rowKeys, imageСheck };
  }
})
</script>

<style lang="scss" scoped>
.row {
  height: 40px;
  width: 100%;
  padding: 10px 0px 20px 0px;
  display: grid;
  border-bottom: 1px solid var(--border-color);
  grid-template-columns: repeat(4, 1fr);
  cursor: pointer;
  &:hover {
    background-color: var(--hover-color);
  }
  &:last-child {
    border-bottom: none;
  }
}
.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--border-color);
  &:last-child {
    border-right: none;
  }
}
.prices {
  display: flex;
  align-items: center;
  gap: 10px;
}
.price {
  font-size: 16px;
  font-weight: 600;
}
.white-price {
  font-size: 14px;
  color: var(--font-grey-color);
  text-decoration: line-through;
}
.sizes {
  color: var(--font-blue-color);
  position: relative;
  display: flex;
  justify-content: center;
  &:hover {
    & p {
      opacity: 0.5;
    }
    .sizes-popap {
      display: flex;
      gap: 5px;
    }
  }
}
.sizes-popap {
  top: -35px;
  z-index: 1000;
  display: none;
  position: absolute;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 0px 10px;
  white-space: nowrap;
  background-color: var(--background-color-white);
  color: var(--font-default-black);
  -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
}
.product-img {
  width: 40px;
  height: 40px;
}
.product-color {
  @extend .product-img;
  border-radius: 50%;
  border: 1px solid var(--border-color);
}
</style>