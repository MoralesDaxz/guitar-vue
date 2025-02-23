<script setup lang="ts">
  import { computed, ref, type PropType } from "vue";
  import Guitar from "./Guitar.vue";

  interface Guitar {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    cantidad: number;
  }
  const props = defineProps({
    cart: {
      type: Array as PropType<Guitar[]>,
      required: true,
    },
    addItem: {
      type: Function as PropType<(param: Guitar) => void>,
      required: true,
    },
    subItem: {
      type: Function as PropType<(param: Guitar) => void>,
      required: true,
    },
    deleteItem: {
      type: Function as PropType<(param: Guitar) => void>,
      required: true,
    },
    clearCart: {
      type: Function as PropType<() => void>,
      required: true,
    },
  });
  const isModalOpen = ref(false);
  console.log(isModalOpen.value);

  const totalPay = computed(() => {
    return props.cart.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
  });
</script>
<template>
  <button
    v-if="cart.length > 0 && !isModalOpen"
    class="position-fixed z-1 mt-2 end-0 btn btn-info"
    title="Carrito de Compras"
    @click="isModalOpen = true"
  >
    <img src="/icons/cart.png" style="width: 15px; height: 15px" />
  </button>
  <div
    v-else
    class="position-fixed z-1 mt-1 end-0 bg-black rounded-2 p-1"
    id="cart"
  >
    <h4 class="text-center mt-4">Carrito de Compras</h4>
    <button
      class="position-absolute top-0 end-0 mt-1 me-1 btn ms-auto"
      title="Cerrar"
      @click="isModalOpen = false"
    >
      <img
        src="/icons/close.png"
        class="bg-danger rounded-2 position-absolute top-0 end-0 mt-1 me-1"
        style="width: 16px; height: 16px"
      />
    </button>
   

    <p v-if="cart.length === 0" class="text-center">Carrito vacio...</p>
    <div
      v-else
      class="table-responsive overflow-y-scroll"
      style="height: 300px"
    >
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Ref</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cart in cart" :key="cart.id" class="align-middle fs-6">
            <td>
              <img
                :src="'/img/' + cart.imagen + '.jpg'"
                :alt="cart.nombre"
                style="height: 50px"
                class="rounded-2"
              />
            </td>
            <td>{{ cart.nombre }}</td>
            <td>{{ cart.precio }} €</td>
            <td>
              <button
                class="btn btn-info fw-bolder rounded-4 w-auto me-1"
                style="font-size: 1em;"
                @click="addItem(cart)"
              >
                +</button
              >{{ cart.cantidad
              }}<button
                class="btn btn-secondary fw-bolder rounded-4 w-auto ms-1"
                style="font-size: 1em;"
                @click="subItem(cart)"
              >
                -
              </button>
            </td>
            <td>{{ cart.precio * cart.cantidad }} €</td>
            <td>
              <button
                class="btn btn-danger rounded-4"
                style="font-size: 1em;"
                @click="deleteItem(cart)"
              >
                x
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-between">
      <button class="btn btn-danger" @click="clearCart" v-if="cart.length > 0">
        Vaciar Carrito
      </button>
      <p class="m-0 p-1 text-end">
        Total a pagar: <strong>{{ totalPay }}</strong> €
      </p>
    </div>
  </div>
</template>

<style scoped></style>
