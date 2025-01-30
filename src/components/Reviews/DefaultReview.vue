<script setup lang="ts">
import type { Review } from '@/types/models'
import RatingStars from './RatingStars.vue'

interface IProductRating {
  rating: number | undefined
  reviews: Review[] | undefined
}

defineProps<IProductRating>()
</script>

<template>
  <div class="card-header-rating">
    <div class="rating-numeric">{{ rating }}</div>
    <RatingStars :rating="rating" />
    <div class="rating-reviews">{{ reviews?.length }} {{ $t('reviews') }}</div>
  </div>
</template>

<style scoped>
.card-header-rating {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

}
.rating-numeric {
  color: #394155;
  font-family: Greenwich;
  font-size: 36px;
  font-weight: 500;
  line-height: 44px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.rating-reviews {
  font-family: Formular;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #798595;
}

@media (max-width: 1199px) {
  .card-header-rating {
    justify-content: flex-start;
  }
  .rating-numeric {
    font-family: Greenwich;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
}
</style>
