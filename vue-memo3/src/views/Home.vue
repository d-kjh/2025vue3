<script setup>
import { reactive, onMounted } from 'vue';
import httpService from '@/services/HttpService.js';
import MemoCard from '@/components/MemoCard.vue';
const state = reactive({
  memos: [],
});

onMounted(() => {
  getItems({});
});

const getItems = async (param) => {
  const data = await httpService.getMemoList({ param });
  state.memos = data.resultData;
  console.log('3번', state.memos);
};
// 검색기능 떄문에 param 이필요한데 delete를 따로 빼놔서 간접적으로 호출을 해야하는데
// 삭제쪽에서 삭제만 되고 다시 화면 표출이 되지않아서 param이랑 delete가 연결이 되는 부분이 있어야
// 삭제버튼을 누르고 삭제가 되고 화면이 재 구성되고 다시 출력되어야함
// getItems 가 화면을 다시 뿌려주는건디 그게 안되니께 지금은 그래서 아래 매소드 만들어서 진행
// @remove-item="removeItem" <- "" 이거 안에 이름은 매소드랑 같아야함
// @remove-item <- 요거는 자동으로 MemoCard에서 카멜 케이스로 변경되어서 deleteItem 으로 된다
const removeItem = async (id) => {
  console.log('removeItem: ', id);

  if (confirm('삭제하시겠습니까?')) {
    console.log('삭제완');
    const params = { id: id };
    const data = await httpService.deleteMemo(params);
    if (data.resultData === 1) {
      // getItems({});
      const deleteIdx = state.memos.findIndex((item) => item.id === id);
      if (deleteIdx >= 0) {
        state.memos.splice(deleteIdx, 1);
      }
    }
  }
};
</script>

<template>
  <div class="memo-list">
    <MemoCard
      v-for="m in state.memos"
      :item="m"
      :key="m.id"
      @delete-item="removeItem"
    />
    <router-link to="/add" class="add btn btn-light"> + 추가하기 </router-link>
    <!-- router-link to="" 이경로로 액션이 들어오면 이경로로 들어가지게 한다 -->
  </div>
</template>

<style lang="scss">
// .memo-list {
//   .item {
//     background-color: #f8f9fa;
//     border: 1px solid #eee;
//     display: block;
//     color: #000;
//     text-decoration: none;
//     padding: 20px 30px;
//     margin: 15px 0px;

//     // 아이템 위에 마우스가 올라갔을떄
//     &:hover {
//       border-color: #aaa;
//     }
//   }
// }
.add {
  display: block;
  padding: 25px;
  border: 1px solid #eee;
}
</style>
