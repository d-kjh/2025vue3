<script setup>
import httpService from '@/services/HttpService';
import { reactive, onMounted } from 'vue';

const memos = [];

const state = reactive({
  memos: [],
});

onMounted(() => {
  console.log('Home.vue - onMounted 에 보낸 콜백 함수 호출');
  findAll({});
});

const findAll = async (params) => {
  const data = await httpService.findAll(params);
  state.memos = data.resultData;
};

// 버튼을 누르면 findAll을 호출 할때
// 파라미터로 {search_text: '검색 키워드에 적힌 내용을 보내주면 된다'}

const model = {
  searchText: '',
};

const search = () => {
  const params = {
    search_text: model.searchText,
  };
  findAll(params);
};
</script>

<template>
  <div class="memo-list">
    <router-link to="/memo/add" class="add btn btn-light">
      + 추가하기
    </router-link>
    <div class="mb-3 mt-3 d-flex">
      <input
        type="text"
        id="title"
        class="form-control p-3 me-3"
        placeholder="쳐"
        v-model="model.searchText"
        @keyup.enter="search"
      />
      <button class="btn btn-primary" @click="search">검색</button>
    </div>
    <router-link
      v-for="m in state.memos"
      :to="`/memos/${m.id}`"
      class="item"
      :key="m.id"
    >
      <div class="d-flex pt-3">
        <div class="pb-3 mb-0 w-100">
          <div class="d-flex justify-content-between">
            <b>{{ m.title }}</b>
            <div>
              <span role="button" @click.prevent="remove(m.id)">삭제</span>
            </div>
          </div>
          <div class="mt-2">{{ m.content }}</div>
        </div>
      </div>
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
</style>
