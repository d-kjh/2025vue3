<script setup></script>

<template>
  <div class="panel">
    <div>
      <input type="text" placeholder="아이디" class="id" />
      <input type="password" placeholder="비밀번호" class="pw" />
    </div>
    <button>로그인</button>
  </div>
  <div class="d-flex justify-content-center">
    <button>비밀번호 찾기</button>
    <li></li>
    <button>아이디 찾기</button>
    <li></li>
    <router-link to="/memo_test/sign_up">
      <button class="signUp">회원가입</button>
    </router-link>
  </div>
</template>

<style scoped>
.panel {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
div input {
  position: relative;
  display: block;
  height: 30px;
  color: #1e1e23;
  border-radius: 7px;
  background-color: ghostwhite;
  border: 1px;
}
button {
  background-color: ghostwhite;
  border: 1px;
  border-radius: 7px;
}
.signUp {
}
li::marker {
  color: #fff;
}
li::before {
  content: '|';
  padding-right: 20px;
  background-color: #fff;
}
</style>
