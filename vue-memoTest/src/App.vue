<script setup></script>

<template>
  <div class="app">
    <div class="container py-4">
      <header class="pt-2 pb-2 mb-2 border-bottom">
        <router-link to="/" class="text-dark text-decoration-none">
          <img src="/image/다운로드.jpg" alt="" />
        </router-link>
        <div class="member d-flex">
          <p class="">Lil Nas X - Star Walkin’</p>
          <div>
            <router-link to="/memo_test/login">
              <button class="login" type="button">로그인</button>
            </router-link>
            <router-link to="/memo_test/sign_up">
              <button class="signUp" type="button">회원가입</button>
            </router-link>
          </div>
        </div>
      </header>

      <main>
        <router-view />
      </main>

      <footer class="pt-4 mt-4 border-top">
        &copy; Lil Nas X - Star Walkin’ <img src="/image/drk.jpg" alt="" />
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app .container {
  max-width: 576px;
}
header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000; /* 다른 요소 위에 표시 */
  // padding: 10px;
  // background-image: url('/image/다운로드.jpg');
  background-size: cover;
}
img {
  width: 100%;
}
.member {
  justify-content: space-between;
}
.login,
.signUp {
  margin-top: 10px;
  font-size: 10px;
  border: 1px #fff;
  background-color: ghostwhite;
}
</style>
