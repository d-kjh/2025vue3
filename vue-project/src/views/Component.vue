<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <button @click="counterStore.increment">회전</button>
  <div class="wide">
    <FrontWheel />
    <front-wheel />
  </div>
  <div class="wide">
    <rear-wheel />
    <RearWheel />
  </div>
</template>

<style scoped>
.wide {
  display: flex;
  gap: 10px;
  flex-direction: row;
}
</style>
