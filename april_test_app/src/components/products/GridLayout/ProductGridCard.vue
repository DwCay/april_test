<template>
  <div class="product-card">
    <img
      width="100%"
      height="180px"
      :src="imageСheck(props.images[0])"
      alt="productImage"
    />
    <div>
      <span class="price">{{ `$ ${props.price}` }}</span>
    </div>
    <div class="product-name">
      <p>{{ props.title }}</p>
    </div>
    <div class="more-info">
      <div class="info">
        <span class="title">{{ `${ProductTitles.category}:` }}</span>
        <span class="value">{{ props.category.name }}</span>
      </div>
    </div>
    <div class="hover-info">
      <span>{{ props.description }}</span>
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
    return { props, ProductTitles, imageСheck }
  }
})
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  max-width: 200px;
  flex-direction: column;
  background-color: var(--background-color-white);
  gap: 10px;
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
.price {
  font-size: 18px;
  font-weight: 600;
}
.product-name {
  font-size: 16px;
  font-weight: 500;
}
.more-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  & span {
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

img {
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 17px -4px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 17px -4px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 17px -4px rgba(34, 60, 80, 0.2);
}
</style>