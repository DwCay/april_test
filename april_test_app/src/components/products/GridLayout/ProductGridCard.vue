<template>
  <div class="product-card">
    <img
      width="100%"
      height="180px"
      :src="props.img"
    />
    <div class="prices">
      <p class="price">{{ `$ ${props.price}` }}</p>
      <p 
        v-if="props.whitePrice"
        class="white-price"
        >
        {{ `$ ${props.whitePrice}` }}
      </p>
    </div>
    <div class="product-name">
      <p>{{ props.name }}</p>
    </div>
    <div class="more-info">
      <div class="info">
        <p class="title">{{ `${ProductTitles.brandName}:` }}</p>
        <p class="value">{{ props.brandName }}</p>
      </div>
      <div class="info">
        <p class="title">{{ `${ProductTitles.category}:` }}</p>
        <p class="value">{{ props.category }}</p>
      </div>
    </div>
    <div class="hover-info">
      <div 
        class="product-color" 
        :style="{backgroundColor: `#${props.color?.code}`}"/>
      <div 
        class="product-sizes">
        <p v-for="size in props.sizes" :key="size">{{ size }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProductTitles } from '~/src/store/types';
import { propsTypes } from '~/src/assets/propsTypes';

export default defineComponent({
  props: propsTypes,
  setup(props) {
    return { props, ProductTitles }
  }
})
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-white);
  gap: 5px;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  & .product-name p {
    margin-top: -10px;
    margin-bottom: -10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    & .product-name p {
      white-space: normal;
      overflow: visible;
      text-overflow: unset;
    }
    & .hover-info {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    height: fit-content;
    z-index: 99;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  }
}
.prices {
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 0;
}
.price {
  font-size: 18px;
  font-weight: 600;
}
.white-price {
  font-size: 14px;
  color: var(--font-grey-color);
  text-decoration: line-through;
}
.product-name {
  font-size: 16px;
  font-weight: 500;
}
.more-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  & p {
    margin-top: -3px;
    margin-bottom: -3px;
  }
  margin-top: 10px;
}
.info {
  display: flex;
  align-items: center;
  gap: 5px
}
.title {
  font-size: 14px;
  color: var(--font-grey-color);
}
.value {
  font-size: 14px;
  font-weight: 500;
}
.hover-info {
  display: none;
}
.product-color {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
}
.product-sizes {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  color: var(--font-grey-color);
  & p {
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    line-height: 0px;
  }
}

img {
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 17px -4px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 17px -4px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 17px -4px rgba(34, 60, 80, 0.2);
}
</style>