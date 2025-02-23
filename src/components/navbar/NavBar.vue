<template>
  <nav class="navbar bg-secondary w-100 text-white text-center py-1 d-flex justify-content-center ">
      <ul class="nav nav-pills" >
        <li class="nav-item" >
          <router-link class="nav-link " :to="route.home">Inicio</router-link>
        </li>
        <li class="nav-item" >
          <router-link class="nav-link" :to="route.store">Tienda</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
</template>

<script setup lang="ts">
import { route } from '../../router/definition';




</script>

