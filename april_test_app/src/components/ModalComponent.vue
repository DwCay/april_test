<template>
  <teleport to="#app">
    <div 
      class="backdrop"
      >
      <div class="modal">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useModalStore } from '../stores/modal';

export default defineComponent({
  setup(){
    const modalStore = useModalStore();

    function clickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target.className === 'backdrop') {
        modalStore.close();
      }
    }

    onMounted(() => {
      window.addEventListener('click',clickOutside);
    })

    return { modalStore }
  }
})
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  z-index: 1000;
  width: 500px;
  background-color: var(--background-color-white);
  padding: 20px;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 72px 14px rgba(34, 60, 80, 0.24);
  -moz-box-shadow: 0px 0px 72px 14px rgba(34, 60, 80, 0.24);
  box-shadow: 0px 0px 72px 14px rgba(34, 60, 80, 0.24);
}
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
}
</style>