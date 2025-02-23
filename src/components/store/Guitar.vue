<script setup lang="ts">
  defineProps({
    guitar: {
      type: Object,
      required: true,
    },
    addGuitar: {
      type: Function,
      required: true,
    },
  });
</script>

<template>
  <div
    class="row align-items-center p-1 bg-secondary col-12 col-sm-6 col-lg-4 rounded-2"
  >
    <article
      class="col-6 d-flex flex-column justify-content-between align-items-start h-100 gap-2 pt-2"
    >
      <div>
        <h3 class="text-black text-center text-uppercase">
          {{ guitar.nombre }}
        </h3>
        <p class="text-white">
          {{ guitar.descripcion }}
        </p>
        <p class="fw-bold fs-2 text-warning opacity-75">${{ guitar.precio }}</p>
      </div>
      <div>
        <button
          type="button"
          class="btn btn-dark fs-6 p-1"
          @click="addGuitar(guitar)"
        >
          Agregar
        </button>
      </div>
    </article>

    <img
      class="col-6 img-fluid mx-auto rounded-5"
      :src="'/img/' + guitar.imagen + '.png'"
      :alt="'guitar_' + guitar.nombre"
    />
  </div>
</template>
