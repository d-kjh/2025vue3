<script setup>
const message = 'There';
const messageObj = { name: 'Kim', age: 20 };
const pageId = 'history';
let loading = false;
const parent = 'fruits';
const child = 'item';
const fruitList = ['사과', '바나나', '딸기', '배'];
</script>

<template>
  <h1>Mustache.vue</h1>
  <hr />
  <div>
    Hello, <span>{{ message }}</span>
  </div>
  <!-- v-text는 directive '디렉티브'라고 부른다
      v- 시작하는 속성은 전부 디렉티브이다 -->
  <div>Hello, <span v-text="message"></span></div>
  <div>Hello, <span v-text="messageObj"></span></div>
  <div>Hello, messageObj.name : <span v-text="messageObj.name"> </span></div>
  <div v-bind:id="pageId">페이지 아이디 div</div>
  <div :id="pageId">페이지 아이디 div2</div>

  <input type="text" placeholder="아이디" :readonly="loading" />
  <input type="password" placeholder="비밀번호" :readonly="loading" />
  <button :disabled="loading">로그인</button>

  <ul :class="parent">
    <li :key="idx" v-for="(item, idx) in fruitList" :class="child">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped>
#history {
  color: red;
}
</style>
