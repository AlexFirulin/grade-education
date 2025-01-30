<script setup lang="ts">
import { computed, toRefs } from 'vue'

interface IRating {
  rating: number | undefined
}
const props = defineProps<IRating>()

const { rating } = toRefs(props)

const calculateRating = computed(() => {
  return typeof rating.value !== 'undefined' ? (rating.value / 5) * 100 : 0
})
</script>

<template>
  <div class="rating">
    {{ calculateRating }}
    <div class="rating_body">
      <div class="rating_active" :style="{ width: calculateRating + '%' }"></div>

      <div class="rating-items">
        <input
          v-for="item in 5"
          :key="item"
          type="radio"
          :value="item"
          class="rating_item"
          name="rating"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.rating {
  display: flex;
  font-size: 0; 
}

.rating_body {
  position: relative;
  display: flex;
  height: 30px;
}

.rating_body::before {
  content: '★★★★★';
  display: block;
  font-size: 30px;
  line-height: 30px;
  color: #ccc;
}

.rating-items {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.rating_item {
  flex: 0 0 20%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
  z-index: 1;
}

.rating_active {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.rating_active::before {
  content: '★★★★★';
  display: block;
  font-size: 30px;
  line-height: 30px;
  color: #fcc141;
}
</style>
