<script setup>
const fruits = ['apple', 'banana', 'pear'];
const sports = [
  { id: 1, name: '농구' },
  { id: 2, name: '축구' },
  { id: 3, name: '야구' },
];

const pop = (message) => alert(message);
const pop2 = () => alert('파라미터 없음');
</script>

<template>
  <h1>Chapter4.vue</h1>
  <hr />
  <div :key="idx" v-for="(item, idx) in fruits">{{ idx + 1 }}. {{ item }}</div>
  <select>
    <option :key="item.id" v-for="item in sports" :value="item.id">
      {{ item.name }}
    </option>
  </select>

  <button @click="pop('반가워')">Hello pop</button>
  <button v-on:click="pop2">Hello pop2</button>
</template>

<style scoped></style>
