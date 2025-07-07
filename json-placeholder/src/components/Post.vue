<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  item: Object,
});

const moveToDetail = () => {
  //라우팅 처리
  // props.item 을 JSON 문자열로 변경하여 state.data에 대힙해야함
  const json = JSON.stringify(props.item);

  router.push({
    path: '/detail',
    state: {
      data: json,
      
    },
  });
};
</script>

<template>
  <div class="card mb-3 pointer" @click="moveToDetail">
    <div class="card-body">
      <h3 class="card-title">{{ props.item.title }}</h3>
      <div class="card-subtitle text-muted">{{ props.item.body }}</div>
    </div>
  </div>
</template>

<style scoped></style>
