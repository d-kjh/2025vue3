<script setup>
import { ref } from 'vue';

const fruits = 'apple avocado';
const fruitArr = ['banana', 'blueberry'];

const visible = ref({ fruit: true });
const hidden = { fruit: false };

const changeVisible = () => {
  console.log(visible.fruit);
  visible.value.fruit = !visible.value.fruit;
};

//데이터가 많은데 문자열
const rect = 'background-color: grey; width: 200px; height: 100px;';
const rectObj = {
  backgroundColor: 'white',
  width: '200px',
  height: '100px',
  marginTop: '10px',
};
rectObj.backgroundColor = 'blue';

let loading = true;
</script>

<template>
  <h1>Chapter3.vue</h1>
  <hr />
  <div :class="fruits">사과 / 아보카도</div>
  <div :class="fruitArr" :title="fruitArr">바나나 / 아보카도</div>
  <hr />
  <div :class="visible" class="pointer" @click="changeVisible">사과</div>
  <div :class="hidden">오이</div>
  <div :style="rect">rect</div>
  <div :style="rectObj">rectObj</div>
  <hr />
  <div v-if="loading">로딩 즁!</div>
  <!-- false일때 태그 삭제 -->
  <div v-else>로딩 꿑!</div>
  <!-- <div v-if="!loading">로dsafasd!</div> -->
  <div v-show="loading">show loading</div>
  <!-- false일때 display none처리 -->
</template>

<style scoped>
.fruit {
  color: red;
}
</style>
