<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import httpservice from '@/services/httpservice';

const route = useRoute();
const router = useRouter();

const state = reactive({
  memo: {
    id: 0,
    title: '',
    content: '',
    createdTime: '',
  },
});

const moveForm = () => {
  const json = JSON.stringify(state.memo); // 직렬화
  if (confirm('수정 ㄱㄱ?')) {
    router.push({
      path: '/memo_test/add',
      state: {
        data: json,
      },
    });
  }
};

const remove = async (id) => {
  console.log('id', id);
  if (confirm('삭제 ㄱㄱ?')) {
    const params = { id };
    const data = await httpservice.delete(params);
    if (data.resultData === 1) {
      router.push({ path: '/' });
    }
  }
};

onMounted(async () => {
  const id = route.params.id;
  const data = await httpservice.memoOne(id);
  state.memo = data.resultData;
});
</script>

<template>
  <div class="header">
    <div class="d-flex mb-3 dateFont">
      등록일시: {{ state.memo.createdTime }}
    </div>
  </div>
  <h1 class="d-flex mb-3 title">제목: {{ state.memo.title }}</h1>
  <div class="mb-3 content">
    내용:
    <p>{{ state.memo.content }}</p>
  </div>
  <div class="butt">
    <button type="button" class="btn btn-primary" @click="moveForm">
      수정
    </button>
    <button type="button" class="btn" @click.prevent="remove(state.memo.id)">
      삭제
    </button>
  </div>
  <div>추천, 비추천</div>
</template>

<style scoped>
.dateFont {
  font-size: 12px;
  justify-content: right;
}
.title {
  font-size: 30px;
  justify-content: left;
}
.content {
  font-size: large;
}
p {
  height: 200px;
  overflow-y: scroll;
}
.butt {
  display: flex;
  justify-content: right;
}
.butt button:last-child {
  background-color: tomato;
  color: red;
  margin-left: 10px;
}
</style>
