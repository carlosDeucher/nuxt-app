<script setup lang="ts">
import { ref } from 'vue'
import ProductDisplay from './components/ProductDisplay.vue';

const cart = ref<number[]>([]);

const updateCart = (id: number) => {
  cart.value.push(id);

  console.log("Updated cart: ", cart.value);
}
</script>

<template>
  <div style="padding: 20px;">
    <div style="display:flex; justify-content:end; align-items:center;">
      <h2>Cart({{ cart.length }})</h2>
    </div>

    <ProductDisplay @add-to-cart="updateCart" />
    <ProductDisplay @add-to-cart="updateCart" />
    <ProductDisplay @add-to-cart="updateCart" />

  </div>

</template>