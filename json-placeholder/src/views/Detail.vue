<script setup>
import Post from '@/components/Post.vue';
import Comment from '@/components/Comment.vue';
import { reactive, onMounted } from 'vue';
import httpService from '@/services/HttpService';
import InputComment from '@/components/InputComment.vue';

const state = reactive({
  post: {
    id: 0,
    title: '',
    body: '',
    userId: 0,
  },
  comments: [],
});

onMounted(async () => {
  const passJson = history.state.data;
  if (passJson) {
    // passJson을 객체로 바꿔서 state.post에 넣기
    state.post = JSON.parse(passJson);

    const commentData = await httpService.postCommentFindAll(state.post.id);
    state.comments = commentData;
  }
});

const addComment = async (comment) => {
  console.log('comment', comment);
  const jsonBody = {
    postId: state.post.id,
    comment,
    userId: 1,
  };
  const data = {
    postId: state.post.id,
    id: 74,
    name: 'ut non illum pariatur dolor',
    email: 'Gussie_Kunde@sharon.biz',
    body: comment,
  };
  state.comments.push(data);
  // const data = await httpService.postSave(jsonBody);
};
</script>

<template>
  <h1>Detail.vue</h1>
  <post :item="state.post"></post>
  <hr />
  <h3>댓글들</h3>
  <input-comment @click-save="addComment"></input-comment>
  <comment v-for="item in state.comments" :item="item" :id="item.id"></comment>
</template>

<style scoped></style>
