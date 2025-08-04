import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useGlobalErrorStore = defineStore('global-error', () => {
  const state = reactive({
    errorMessage: null,
    isShow: false,
  });

  const setErrorMessage = (val) => {
    state.errorMessage = val;
    state.isShow = true;
  };

  return { state, setErrorMessage };
});
