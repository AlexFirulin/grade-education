<script setup lang="ts">
import RatingCard from './components/RatingCard.vue'
import BaseButton from './components/Buttons/BaseButton.vue'
import RatingCardHeader from './components/Headers.vue/RatingCardHeader.vue'
import { ref, watch } from 'vue'
import { useProductStore } from '@/store/someRating'
import DefaultReview from './components/Reviews/DefaultReview.vue'
const store = useProductStore()

const id = ref(1)

watch(
  id,
  async (newId) => {
    await store.fetchProduct(newId)
  },
  { immediate: true },
)

const moveTo = () => {
  window.location.href = 'https:///google.com'
}
</script>

<template>
  <main>
    <RatingCard v-model:product="store.product">
      <template #rating="{ product }">
        <div class="card-items">
          <div class="card-header">
            <RatingCardHeader />
            <DefaultReview :rating="product?.rating" :reviews="product?.reviews" />
          </div>
          <div class="card-cta">
            <BaseButton
              :text="$t('changeProduct')"
              :primary="true"
              @update:model-value="id++"
            />
            <BaseButton :text="$t('visitGoogle')" :primary="false" @update:model-value="moveTo" />
          </div>
        </div>
      </template>
    </RatingCard>
  </main>
</template>

<style scoped>
.card-items {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.card-header {
  display: flex;
  gap: 30px;
}
.card-cta {
  display: flex;
  gap: 10px;
}

@media (max-width: 1199px) {
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  }

  @media (min-width: 360px) and (max-width: 576px) {
    .card-items {
     flex-direction: column;
     gap: 20px  ;
    }

    .card-cta {
      flex-direction: column;
      width: 100%;
}
  }
}
</style>
