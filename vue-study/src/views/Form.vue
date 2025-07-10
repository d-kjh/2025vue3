<script setup>
import { reactive, registerRuntimeCompiler } from 'vue';
import HttpService from '@/services/HttpService';
import { useRouter } from 'vue-router';

const router = useRouter();
const state = reactive({
  memo: {
    id: 0,
    title: '',
    content: '',
    createdAt: '',
  },
});
const json = {
  title: state.memo.title,
  content: state.memo.content,
};
const submit = async () => {
  const title = state.memo.title.trim();
  const content = state.memo.content.trim();

  if (title.length > 20 || title.length === 0) {
    alert(title.length === 0 ? '제목 쓰셈' : '제목 20자 아래로 써라');
    return;
  } else if (content.length === 0 || content.length > 200) {
    alert(content.length === 0 ? '내용 쓰셈' : '내용 200자 아래로 쓰셈');
    return;
  }

  const data = await HttpService.save(json);
  console.log(data);

  if (data.resultD === 1) {
    console.log(data.resultD);
    router.push('/');
  } else {
    console.log(data.resultM);
  }
};
</script>

<template>
  <form class="detail" @submit.prevent="submit">
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
    <button type="submit" class="btn btn-primary w-100 py-3">저장</button>
  </form>
</template>

<style scoped></style>
