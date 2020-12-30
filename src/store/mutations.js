export const Mutations = {
  SET_LANGUAGE: (state, language) => {
    state.language = language;
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo;
  },
  SET_MODAL_STATUS: (state, modalInfo) => {
    state.modals[modalInfo.modalName] = modalInfo.modalStatus;
  },
};
