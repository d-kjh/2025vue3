<script setup>
import Tire from './Tire.vue';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="front-wheel">
    <span>Front Wheel</span>
    <Tire color="Red" />
    <div>TIMES: {{ counterStore.count }}</div>
  </div>
</template>

<style scoped>
.front-wheel {
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
