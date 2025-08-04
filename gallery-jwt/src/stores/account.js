import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useAccountStore = defineStore(
  'account',
  () => {
    const state = reactive({
      signedUser: null,
      isSigned: false,
    });
    const setSignedUser = (val) => {
      state.signedUser = val;
      state.isSigned = true;
    };

    const logout = () => {
      state.signedUser = null;
      state.isSigned = false;
    };

    return { state, setSignedUser, logout };
  },
  { persist: true }
);
