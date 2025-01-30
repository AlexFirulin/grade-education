import { defineStore } from 'pinia'
import type { Product,  } from '@/types/models'
import { fetchProduct } from '@/services/api'

interface storeProduct {
  product: Product
}
const state = (): storeProduct => ({
  product: {
    id: 0,
    title: '',
    description: '',
    category: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    tags: [],
    brand: '',
    sku: '',
    weight: 0,
    dimensions: null,
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    reviews: [],
    returnPolicy: '',
    minimumOrderQuantity: 0,
    meta: null,
    thumbnail: '',
    images: [],
  },
})

export const useProductStore = defineStore('productStore', {
  state,
  actions: {
    async fetchProduct(id: number = 1): Promise<void> {
      try {
        const res = await fetchProduct(id)
        this.product = res
      } catch (e) {
        console.error(e)
      }
    },
  },
  getters: {},
})
