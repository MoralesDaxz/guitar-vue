<script setup lang="ts">
  import { db } from "../../data/guitars";
  import Footer from "../footer/Footer.vue";
  import Cart from "./Cart.vue";
  import Guitar from "./Guitar.vue";
  import { onMounted, ref, watch } from "vue";

  interface Props {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
  }
  interface GuitarInfo extends Props {
    cantidad: number;
  }
  const dataGuitars = ref<Props[]>(db);
  const cart = ref<GuitarInfo[]>(
    JSON.parse(localStorage.getItem("compra") || "[]")
  );
  //Ejecutese al iniciar el componente
  onMounted(() => {
    if (!localStorage.getItem("compra")) {
      localStorage.setItem("compra", JSON.stringify([]));
    }
  });
  //Si cambia cart, se ejecuta la funcion anonima
  watch(
    cart,
    () => {
      localStorage.setItem("compra", JSON.stringify(cart.value));
    },
    { deep: true }
  );

  const addToCart = (param: GuitarInfo) => {
    const existGuitar = cart.value.findIndex((item) => item.id === param.id); // nos devuelve el indice del elemento que cumpla la condicion, si no lo encuentra devuelve -1
    if (existGuitar >= 0) {
      cart.value[existGuitar].cantidad += 1;
      return;
    } else {
      param.cantidad = 1;
      cart.value.push(param);
    }
  };

  const subItem = (param: GuitarInfo) => {
    const existingItem = cart.value.find((guitar) => guitar.id === param.id);
    if (existingItem && existingItem.cantidad > 1) {
      existingItem.cantidad--;
    } else {
      cart.value = cart.value.filter((guitar) => guitar.id !== param.id);
    }
  };
  const addItem = (param: GuitarInfo) => {
    const existGuitar = cart.value.findIndex((item) => item.id === param.id);
    if (existGuitar >= 0) {
      cart.value[existGuitar].cantidad += 1;
    } else {
      param.cantidad = 1;
      cart.value.push(param);
    }
  };
  const deleteItem = (param: GuitarInfo) => {
    const existGuitar = cart.value.findIndex((item) => item.id === param.id);
    if (existGuitar >= 0) {
      cart.value.splice(existGuitar, 1);
    }
  };
  const clearCart = () => {
    cart.value = [];
  };
</script>
<template>
  <section class="position-relative d-flex flex-column align-items-center py-4">
    <h1 class="text-center text-warning fw-bolder py-4">Guitar's Store</h1>
    <section
      class="container-fluid row justify-content-center justify-content-sm-around row-gap-1 column-gap-1 bg-body-secondary rounded-1 py-2"
      style="max-width: 1200px"
    >
      <Guitar
        v-for="guitar in dataGuitars"
        :key="guitar.id"
        :guitar="guitar"
        :addGuitar="addToCart"
      />
    </section>
  </section>
  <Cart
    :cart="cart"
    :addItem="addItem"
    :subItem="subItem"
    :deleteItem="deleteItem"
    :clearCart="clearCart"
  />
  <Footer />
</template>
