<script setup lang="ts">
interface IButton {
  text: string
  primary: boolean
}

interface IButtonEmits {
  (e: 'update:model-value'): void
}

const emits = defineEmits<IButtonEmits>()
const props = defineProps<IButton>()
</script>

<template>
  <button :class="[primary ? 'primary' : 'secondary']" @click="emits('update:model-value')">
    <span>{{ props.text }}</span>
  </button>
</template>

<style scoped>
.secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 8px;
  border: 0;
  background: linear-gradient(#3cb9a0, #1786ac);
  font-family: Formular;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  color: #ffffff;
  cursor: pointer;
}

.secondary:hover {
  background-color: #36a8a0;
}

.primary {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 1px solid #aacedb;
  border-radius: 8px;
  cursor: pointer;
  color: #394155;
  font-family: Formular;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
}

.primary:hover {
  background-color: #36a8a0;
}

@media (max-width: 1199px) {
  .primary {
    font-family: Formular;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
}

@media (min-width: 360px) and (max-width: 576px) {
  .primary {
    font-family: Formular;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .secondary {
    font-family: Formular;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
}
</style>
