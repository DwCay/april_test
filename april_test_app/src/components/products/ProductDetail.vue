<template>
  <div 
    class="container"
    id="detail">
    <div class="product-info">
      <div class="images-block">
        <button 
          class="button-scroll"
          @click="() => onScroll('left')">
            {{ '◀' }}
        </button>
        <div class="images" ref="images">
          <img 
            v-for="img in product?.images" 
            :key="img?.id" 
            :src="img?.baseUrl"/>
        </div>
        <button 
          class="button-scroll"
          @click="() => onScroll('right')">
          {{ '▶' }}
        </button>
      </div>
      <div class="color-block">
        {{ 'sdasdasd'}}
        <div 
          v-for="color in product?.colors"
          :key="color?.code"
          :style="{backgroundColor: `#${color?.code}`}"
          class="color"/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useProductsStore } from '~/src/store/products';
import { storeToRefs } from 'pinia';

export default defineComponent({
  setup() {
    const dataDetail = useProductsStore();
    const { product } = storeToRefs(dataDetail);
    const images = ref(null);

    function onScroll(direction) {
      if (direction === 'left') {
        images.value.scrollLeft -= 50
      }
      if (direction === 'right') {
        images.value.scrollLeft += 50
      }
    }

    return { product, onScroll, images }
  },
})
</script>

<style lang="scss" scoped>
.container {
  height: 500px;
  width: 500px;
  position: relative;
}
.product-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.images-block {
  width: 100%;
  display: flex;
  gap: 20px;
}
.color-block {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.color {
  width: 40px;
  height: 40px;
}
.images {
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  gap: 10px;
  -ms-overflow-style: none;
      scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  & img {
    border-radius: 8px;
    min-width: 80px;
    height: 80px;
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