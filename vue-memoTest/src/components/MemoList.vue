<script setup>
import httpService from '@/services/httpservice';

const props = defineProps({
  item: Object,
});
</script>

<template>
  <router-link class="item" :to="`/memo_test/list/${props.item.id}`">
    <div class="d-flex pt-3">
      <div class="pb-3 mb-0 w-100">
        <div class="d-flex justify-content-between">
          <h4>{{ props.item.title }}</h4>
          <p class="mt-2 dateFont">{{ props.item.createdTime }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.item {
  background-color: #f8f9fa;
  border: 1px solid #eee;
  display: block;
  color: #000;
  text-decoration: none;
  padding: 20px 30px;
  margin: 15px 0;

  //   아이템 위에 마우스가 올라갔을 때
  &:hover {
    border-color: #aaa;
  }
}
.dateFont {
  justify-content: left;
}
</style>
