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

const submit = async () => {
  const title = (state.memo.title ?? '').trim();
  const content = (state.memo.content ?? '').trim();

  if (title.length === 0 || title.length > 50) {
    alert(title.length === 0 ? '제목 써라' : '50자 아래로 제목 써라');
    return;
  } else if (content.length === 0 || content.length > 500) {
    alert(content.length === 0 ? '내용 써라' : '500자 이내로 내용 써라');
    return;
  }

  const json = {
    title: state.memo.title,
    content: state.memo.content,
  };

  let data = null;
  let path = '/';

  if (state.memo.id) {
    json.id = state.memo.id;
    path = `/memo_test/list/${state.memo.id}`;
    data = await httpservice.update(json);
  } else {
    data = await httpservice.save(json);
  }

  if (data.resultData === 1) {
    router.push({ path });
  } else {
    alert(data.resultMessage);
  }
};

onMounted(() => {
  console.log('history', history.state.data);
  if (history.state.data) {
    state.memo = JSON.parse(history.state.data);
  }
});
</script>

<template>
  <form class="detail" @submit.prevent="submit">
    <div class="mb-3" v-if="state.memo.createdTime">
      등록일시: {{ state.memo.createdTime }}
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

<style scoped>
textarea {
  height: 300px;
  overflow-y: scroll;
}
</style>
