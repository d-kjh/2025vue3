<script setup>
import { reactive, onMounted } from 'vue';
import httpService from '@/services/HttpService.js';
import MemoCard from '@/components/MemoCard.vue';
const state = reactive({
  memos: [],
});

onMounted(() => {
  getItems();
});

const getItems = async (param) => {
  const data = await httpService.getMemoList({ param });
  state.memos = data.resultData;
  console.log('state.memos: ', state.memos);
};
</script>

<template>
  <div class="memo-list">
    <MemoCard v-for="m in state.memos" :item="m" :key="m.id" />

    <!-- router-link to="" 이경로로 액션이 들어오면 이경로로 들어가지게 한다 -->
    <router-link to="/memos/add" class="add btn btn-light">
      + 추가하기
    </router-link>
  </div>
</template>

<style lang="scss">
// .memo-list {
//   .item {
//     background-color: #f8f9fa;
//     border: 1px solid #eee;
//     display: block;
//     color: #000;
//     text-decoration: none;
//     padding: 20px 30px;
//     margin: 15px 0px;

//     // 아이템 위에 마우스가 올라갔을떄
//     &:hover {
//       border-color: #aaa;
//     }
//   }
// }
.add {
  display: block;
  padding: 25px;
  border: 1px solid #eee;
}
</style>
