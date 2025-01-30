<script setup lang="ts">
import type { Product } from '@/types/models'

const product = defineModel<Product>('product')
</script>

<template>
  <div class="card">
    <slot name="rating" :product="product" />
  </div>
</template>

<style scoped>
.card {
  background-color: #ffffff;
  padding: 30px;
  width: 1458px;
  border-radius: 8px;
  box-shadow: 0px 4px 15px 0px #0000000d;
}


@media (min-width: 1200px) and (max-width: 1366px) {
    .card {
    width: 1286px;
  }
}

@media (min-width: 577px) and (max-width: 1199px) {
    .card {
    width: 912px;
  }
}

/* 360–576 */
@media (min-width: 360px) and (max-width: 576px) {
    .card {
    width: 328px;
  }
}
</style>
