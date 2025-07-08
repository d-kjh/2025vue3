<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { join } from '@/services/accountService';

const router = useRouter();
const state = reactive({
  form: {
    name: '',
    loginId: '',
    loginPw: '',
  },
});

const submit = async () => {
  const res = await join(state.form);

  if (res.status === 200) {
    alert('회원가입을 축하합니다.');
    await router.push('/');
  }
};
</script>

<template>
  <div class="join">
    <div class="container">
      <form
        action=""
        class="py-5 d-flex flex-column gap-3"
        @submit.prevent="submit"
      >
        <h1 class="h5 mb-3">회원가입</h1>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="이름"
            v-model="state.form.name"
          />
          <label for="name">이름</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="loginId"
            placeholder="아이디"
            v-model="state.form.loginId"
          />
          <label for="loginId">아이디</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="loginPw"
            placeholder="패스워드"
            autocomplete="off"
            v-model="state.form.loginPw"
          />
          <label for="loginPw">패스워드</label>
        </div>
        <button class="w-100 h6 btn py-3 btn-primary">회원가입</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.join > .container {
  max-width: 576px;
}
</style>
