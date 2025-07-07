<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['click-save']);

const state = reactive({
  comment: '',
});

const addComment = () => {
  // emit 처리
  emit('click-save', state.comment);
  state.comment = '';
};
</script>

<template>
  <label>댓글: <input type="text" v-model="state.comment" /></label>
  <button @click="addComment">저장</button>
</template>

<style scoped></style>
