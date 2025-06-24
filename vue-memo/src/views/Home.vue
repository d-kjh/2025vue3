<script setup>
import { reactive } from 'vue';
import { HttpService } from '@/services/HttpService';

const httpservice = new HttpService();
</script>

<template>
  <div class="memo-list">
    <router-link to="/memos/add" class="add btn btn-light">
      + 추가하기
    </router-link>
  </div>
</template>

<style lang="scss" scoped></style>
