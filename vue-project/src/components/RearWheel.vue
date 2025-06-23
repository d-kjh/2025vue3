<script setup>
import Tire from './Tire.vue';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="rear-wheel">
    <span>Rear Wheel</span>
    <Tire color="Green" />
    <div>TIMES: {{ counterStore.count }}</div>
  </div>
</template>

<style scoped>
.rear-wheel {
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}
</style>
