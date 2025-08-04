<script setup>
import { onMounted, reactive, computed, ref } from 'vue';
import { getItems, removeItem, clearItem } from '@/services/cartService';

const baseUrl = ref(import.meta.env.VITE_BASE_URL);

const state = reactive({
  items: [],
});

const totalPrice = computed(() => {
  let sum = 0;
  state.items.forEach((i) => {
    sum += i.price - (i.price * i.discountPer) / 100;
  });

  return sum;
});

const load = async () => {
  const res = await getItems();
  state.items = res.data;
  console.log('state.items : ', state.items);
};

const remove = async (cartId) => {
  console.log('cartId', cartId);

  if (confirm('삭제 ㄱㄱ?')) {
    const res = await removeItem(cartId);
    alert('삭제완');
    if (res === undefined || res.status !== 200) {
      return;
    }
    // 다시 리로딩 or 방금 삭제한 객체만 state.items에서 삭제
    load();
  }
};

const clear = async () => {
  if (confirm('전체 삭제 ㄱㄱ?')) {
    const res = await clearItem();
    console.log('삭제 갯수: ', res.data);
  }
  alert('전체 삭제 완');
  state.items = [];
};

onMounted(() => {
  load();
});
</script>

<template>
  <div class="cart">
    <div class="container">
      <template v-if="state.items.length">
        <ul class="items">
          <li v-for="i in state.items" :key="i.id">
            <img
              :src="`${baseUrl}/pic/item/${i.imgPath}`"
              alt="`상품 사진(${i.name})`"
            />
            <b class="name">{{ i.name }}</b>
            <span class="price"
              >{{
                (i.price - (i.price * i.discountPer) / 100).toLocaleString()
              }}원</span
            >
            <span class="remove float-end" @click="remove(i.id)" title="삭제"
              >&times;</span
            >
          </li>
          <div class="total">
            합계 금액 : {{ totalPrice.toLocaleString('ko-KR') }} 원
          </div>
        </ul>
        <div class="act d-flex justify-content-around">
          <button @click="clear()" class="btn btn-danger">
            장바구니 비우기
          </button>
          <router-link to="/order" class="btn btn-primary"
            >주문하기</router-link
          >
        </div>
      </template>
      <template v-else>
        <div class="text-center py-5">장바구니가 비어있습니다.</div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  .items {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    border: 1px solid #eee;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  img {
    width: 150px;
    height: 150px;
  }
  .name {
    margin-left: 25px;
  }
  .price {
    margin-left: 25px;
  }
  .remove {
    cursor: pointer;
    font-size: 20px;
    padding: 5px 15px;
  }
}

.act .btn {
  width: 300px;
  display: block;
  max-width: 0 auto;
  padding: 30px 50px;
  font-size: 20px;
}

.total {
  margin-bottom: 30px;
}
</style>
