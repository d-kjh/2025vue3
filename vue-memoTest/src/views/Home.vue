<script setup>
import { reactive, onMounted } from 'vue';
import httpservice from '@/services/httpservice';
import MemoList from '@/components/MemoList.vue';

const state = reactive({
  memos: [],
});

onMounted(() => {
  memoAll({});
});

const memoAll = async (param) => {
  console.log('param', param);
  const data = await httpservice.memoAll(param);
  console.log('data', data);
  state.memos = data.resultData;
  console.log('resultData', data.resultData);
};

const model = {
  searchText: '',
};

const search = () => {
  const params = {
    search_text: model.searchText,
  };
  memoAll(params);
};
</script>

<template>

  <iframe
    class="star_walkin"
    width="550"
    height="315"
    src="https://www.youtube-nocookie.com/embed/HYsz1hP0BFo?si=iESYWItd-H1BVhES?autoplay=1&mute=1&controls=0"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
  <div class="memo-list">
    <div class="mb-3 mt-3 d-flex search">
      <input
        type="text"
        id="title"
        class="form-control p-3"
        v-model="model.searchText"
        @keyup.enter="search"
      />
      <button class="btn" @click="search">🔍</button>
    </div>
    <MemoList v-for="m in state.memos" :item="m" :key="m.id" />
    <router-link to="/memo_test/add" class="add btn btn-light">
      + 추가하기
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.memo-list {
  .item {
    background-color: #f8f9fa;
    border: 1px solid #eee;
    display: block;
    color: #000;
    text-decoration: none;
    padding: 20px 30px;
    margin: 15px 0;

    &:hover {
      border-color: #aaa;
    }
  }
}
.add {
  display: block;
  padding: 25px;
  border: 1px solid #eee;
}

.btn {
  font-size: 30px;
}

.star_walkin {
  //   width: 0;
  //   height: 0;
  //   overflow: hidden;
  //   position: absolute;
}

</style>
