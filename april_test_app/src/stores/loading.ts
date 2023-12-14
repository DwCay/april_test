import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const loading: Ref<boolean> = ref(false);
  const teleportId: Ref<string | null> = ref(null);

  function start(elemId: string): void {
    loading.value = true;
    teleportId.value = elemId;
  }
  function stop(): void {
    loading.value = false;
  }
  return { loading, teleportId, start, stop }
})