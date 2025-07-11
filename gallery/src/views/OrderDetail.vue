<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getDetail } from '@/services/orderService';

const route = useRoute();

const state = reactive({
  order: {
    id: 0,
    name: '',
    address: '',
    payment: '',
    amount: 0,
    created: '',
    items: [],
  },
});

onMounted(async () => {
  const orderId = route.params.id;
  const res = await getDetail(orderId);
  console.log('Detail res : ', res);
  if (res === undefined || res.status !== 200) {
    alert('오류 발생');
    return;
  }
  state.order = res.data;
});
</script>

<template>
  <div class="order-detail py-5">
    <div class="container">
      <div class="row">
        <div class="order col-lg-8">
          <div class="h5 mb-4">
            <b>주문 내용</b>
          </div>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th>주문 ID</th>
                <td>{{ state.order.id }}</td>
              </tr>
              <tr>
                <th>주문자명</th>
                <td>{{ state.order.name }}</td>
              </tr>
              <tr>
                <th>주소</th>
                <td>{{ state.order.address }}</td>
              </tr>
              <tr>
                <th>결제 금액</th>
                <td>{{ state.order.amount.toLocaleString() }}원</td>
              </tr>
              <tr>
                <th>결제 수단</th>
                <td>
                  {{
                    state.order.payment === 'card'
                      ? '카드'
                      : '무통장입금(카카오뱅크 김주현 123-456789-777)'
                  }}
                </td>
              </tr>
              <tr>
                <th>결제 일시</th>
                <td>{{ state.order.created.toLocaleString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="items col-lg-4">
          <div class="h5 mb-4">
            <b>주문 상품</b>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>번호</th>
                <td>상품명</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in state.order.items">
                <td>{{ idx + 1 }}</td>
                <td>{{ item.name }}</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-detail {
  > .container {
    table {
      th,
      td {
        padding: 15px 25px;
      }

      th {
        background: #f7f7f7;
      }
    }
  }
}
</style>
