<script setup>
import { getItems } from '@/services/itemService';
import { reactive, onMounted } from 'vue';
import Card from '@/components/Card.vue';

// 반응형 상태
const state = reactive({
  items: [],
});

// 이 화면이 마운트될 때 딱 한번 getItems 통신하고 통신으로 받아온 데이터를 콘솔에 뿌려라
onMounted(async () => {
  const res = await getItems();
  if (res.status !== 200) {
    return;
  }
  console.log('res.data', res.data);
  state.items = res.data;
});
</script>

<template>
  <div class="home">
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">
          <div class="col" v-for="item in state.items">
            <card :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
