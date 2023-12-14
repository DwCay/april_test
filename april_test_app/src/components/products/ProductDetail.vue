<template>
  <div 
    class="container"
    id="detail">
    <div class="product-info">
      <div class="images-block">
        <button 
          class="button-scroll"
          @click="() => slideTo('previous')">
            {{ '◀' }}
        </button>
        <div class="image">
          <img 
            :src="product?.images[currentImage] ? imageСheck(product?.images[currentImage]) : imageСheck('')"
            slt="productImage"
            />
        </div>
        <button 
          class="button-scroll"
          @click="() => slideTo('next')">
          {{ '▶' }}
        </button>
      </div>
      <div class="feature">
        <span class="title">{{ `${titles.price}:` }}</span>
        <span class="value">{{ `$ ${product?.price}` }}</span>
      </div>
      <div class="feature">
        <span class="title">{{ `${titles.title}:` }}</span>
        <span class="value">{{ product?.title }}</span>
      </div>
      <div class="feature">
        <span class="title">{{ `${titles.category}:` }}</span>
        <span class="value">{{ product?.category?.name }}</span>
      </div>
      <div class="description">
        <span class="title">Описание:</span>
        <span class="value">{{ product?.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductsStore } from '~/src/stores/products';
import { ProductTitles } from '~/src/utils/types';
import { imageСheck } from '~/src/utils/imageСheck';

export default defineComponent({
  setup() {
    const productStore = useProductsStore();
    const { product } = storeToRefs(productStore);
    const currentImage = ref(0);
    const titles = ProductTitles;
    onMounted(() => {
      productStore.getProduct();
    })
    
    function slideTo(direction) {
      if (direction === 'next' && currentImage.value < product.value.images.length - 1) {
        currentImage.value+=1
      }
      if (direction === 'previous' && currentImage.value > 0) {
        currentImage.value-=1
      }
    }

    return { product, currentImage, titles, slideTo, imageСheck }
  },
})
</script>

<style lang="scss" scoped>
.container {
  height: fit-content;
  width: 100%;
  height: 100%;
  position: relative;
}
.product-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}
.feature {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  word-wrap: break-word;
}
.description {
  @extend .feature;
  gap: 5px;
  flex-direction: column;
  align-items: start;
}
.title {
  color: var(--font-grey-color);
}
.value {
  font-size: 20px;
  font-weight: 500;
  max-width: 100%;
}

.images-block {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.image {
  padding: 10px;
  & img {
    border-radius: 8px;
    min-width: 180px;
    height: 180px;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  }
}
.button-scroll {
  height: 100px;
  color: var(--font-grey-color);
  background-color: var(--background-color-white);
  border-radius: 4px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  &:hover {
    border-color: var(--font-blue-color);
    color: var(--font-blue-color);
  }
}
</style>