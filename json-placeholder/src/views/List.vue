<script setup>
import { reactive, onMounted } from 'vue';
import httpService from '@/services/HttpService';
import Post from '@/components/Post.vue';
import InputPost from '@/components/InputPost.vue';

const state = reactive({
  postList: [],
});

onMounted(() => {
  findAll();
});

const findAll = async () => {
  const data = await httpService.postFindAll();
  console.log('data: ', data);
  state.postList = data;
};

const submit = async (item) => {
  const jsonBody = {
    title: item.title,
    body: item.body,
    userId: 1,
  };
  const data = await httpService.postSave(jsonBody);
  state.postList.unshift(data);
};
</script>

<template>
  <h1>List.vue</h1>
  <input-post @click-submit="submit"></input-post>
  <post v-for="item in state.postList" :key="item.id" :item="item"></post>
</template>

<style scoped></style>
