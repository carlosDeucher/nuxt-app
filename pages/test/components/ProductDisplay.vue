<script setup lang="ts">
import { ref, computed } from 'vue'
const productName = "Socks";

const currentVariationIndex = ref(0);

const updateCurrentVariation = (index: number) => {
    currentVariationIndex.value = index;
}

const variants = [
    { id: 1, color: 'green', quantity: 11 },
    { id: 2, color: 'red', quantity: 8 },
    { id: 3, color: 'blue', quantity: 0 }
]

const currentVariation = computed(() => variants[currentVariationIndex.value]);
const inStock = computed(() => currentVariation.value.quantity > 0);

const emit = defineEmits<{
    "add-to-cart": [number]
}>();

const addToCart = (id: number) => {
    emit('add-to-cart', id);
}
</script>
<template>
    <div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h1>Product: {{ productName }}</h1>
        </div>

        <p v-if="currentVariation.quantity > 10">In stock</p>
        <p v-else-if="currentVariation.quantity <= 10 && currentVariation.quantity > 0">Almost out of stock</p>
        <p v-else>Out of stock</p>

        <ul>
            <li v-for="(variant, index) in variants" :key="variant.id" @click="updateCurrentVariation(index)"
                class="color-circle"
                :style="{ backgroundColor: variant.color, border: currentVariationIndex === index ? '2px solid white' : '' }">
            </li>
        </ul>

        <button @click="addToCart(currentVariation.id)" :disabled="!inStock"
            :class="[!inStock ? 'disabledButton' : 'activeButton']">Adicionar ao
            carrinho</button>
    </div>
</template>