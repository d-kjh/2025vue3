<script setup>
import { ref, reactive, nextTick } from 'vue';

const pushUp = ref(0); // ref메소드는 반응형 상태 객체 주소값을 리턴, 초기값을 value속성에 저장
const increasePushUp = () => {
  pushUp.value++;
  nextTick(() => {
    console.log(document.querySelector('#pushUp').innerText);
  });
  console.log('푸시업 이벤트 발생', pushUp.value);
};

const state = reactive({
  sitUp: 0,
});
const increaseSitUp = () => {
  state.sitUp++;
  console.log('싯업 이벤트 발생!', state.sitUp);
};
</script>

<template>
  <h1>Chapter5.vue - 반응형 상태</h1>
  <hr />
  <div id="pushUp">팔 굽혀 펴기 : {{ pushUp }}</div>
  <div id="sitUp">윗몸 일으키기 : {{ state.sitUp }}</div>
  <hr />
  <button @click="increasePushUp">팔 굽혀 펴기 증가</button>
  <button @click="increaseSitUp">윗몸 일으키기 증가</button>
</template>

<style scoped></style>
