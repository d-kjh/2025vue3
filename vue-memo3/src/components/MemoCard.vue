<script setup>
import httpService from '@/services/HttpService.js';

const props = defineProps({
  item: Object,
});

// 삭제버튼 누르면 콘솔에 id값 출력되게 해주세요
const remove = async () => {
  console.log('id: ', props.item.id);
  if (confirm('삭제하시겠습니까?')) {
    console.log('삭제완');
    const params = { id: props.item.id };
    const data = httpService.deleteMemo(params);
  }
};
</script>

<template>
  <router-link class="item" :to="`/memos/${props.item.id}`">
    <div class="d-flex pt-3">
      <div class="pb-3 mb-0 w-100">
        <div class="d-flex \-content-between">
          <!-- 메모 제목 -->
          <b>{{ props.item.title }}</b>
          <div>
            <!-- prevent 자식에서 시작된 이벤트가 부모까지 영향 주는 버블링 현상 막기위해서는거 -->
            <span role="button" @click.prevent="remove">삭제</span
            ><!--추후 구현-->
          </div>
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
  margin: 15px 0px;

  /* //   // 아이템 위에 마우스가 올라갔을떄 */
  &:hover {
    border-color: #aaa;
  }
}
</style>
