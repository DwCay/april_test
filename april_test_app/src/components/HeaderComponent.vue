<template>
  <div class="header">
    <p class="title">Products Store</p>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
  }
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: var(--background-color-blue);
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
  }
  .title {
    color: var(--font-white-color);
    font-family:'Courier New', Courier, monospace;
    font-style: italic;
    font-weight: 800;
    font-size: 5vh;
    white-space: nowrap;
    padding-left: 5vh;
  }
</style>