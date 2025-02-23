<script setup lang="ts">
  import { ref } from "vue";
  const isModalOpen = ref(false);
</script>
<template>
  <div class="position-absolute top-0 end-0 mt-2 me-2">
    <button
      class="btn btn-danger"
      @click="(isModalOpen = !isModalOpen), console.log(isModalOpen)"
    >
      Abrir
    </button>
  </div>
</template>

<style scoped></style>
