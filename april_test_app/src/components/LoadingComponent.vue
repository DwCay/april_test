<template>
  <teleport v-if="loadingStore.loading" :to="loadingStore.teleportId">
    <div class="loading">
      <div class="spinner"></div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLoadingStore } from '../stores/loading';

export default defineComponent({
  setup() {
    const loadingStore = useLoadingStore();

    return { loadingStore } 
  }
})
</script>

<style lang="scss" scoped>
.loading {
  background-color: var(--background-color-white);
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.spinner {
  color: var(--background-color-blue);
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner:after {
  animation: changeContent 1s linear infinite;
  display: block;
  content: "    ";
  font-size: 80px;
}

@keyframes changeContent {
  10% { content: "·   "; }
  20% { content: "··  "; }
  30% { content: "··· "; }
  40% { content: "····"; }
}
</style>