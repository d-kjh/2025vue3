<script setup>
import httpService from '@/services/HttpService';
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter(); //주소값 이동

const state = reactive({
  memo: {
    id: 0,
    title: '',
    content: '',
    createdAt: '',
  },
});

onMounted(() => {
  const passData = history.state.data;
  if (history.state.data) {
    //넘어온 데이터가 있다면
    state.memo = JSON.parse(passData);
  }
});

const procSubmit = async () => {
  const jsonBody = {
    title: state.memo.title,
    content: state.memo.content,
  };
  const data = await httpService.save(jsonBody);

  if (data.resultData === 1) {
    // 주소가 "/"으로 라우팅 처리 하고 싶다.
    router.push({ path: '/' });
  } else {
    alert(data.resultMessage);
  }
};
</script>

<template>
  <form class="detail" @submit.prevent="procSubmit">
    <div class="mb-3" v-if="state.memo.createdAt">
      등록일시: {{ state.memo.createdAt }}
    </div>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        type="text"
        id="title"
        class="form-control p-3"
        v-model="state.memo.title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea
        id="content"
        class="form-control p-3"
        v-model="state.memo.content"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary w-100 py-3">
      {{ state.memo.id > 0 ? '수정' : '저장' }}
    </button>
  </form>
</template>

<style scoped></style>
