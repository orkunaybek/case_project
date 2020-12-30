export const Actions = {
  setLanguage: ({ commit }, language) => commit('SET_LANGUAGE', language),
  setUserInfo: ({ commit }, userInfo) => commit('SET_USER_INFO', userInfo),
  setModalStatus: ({ commit }, modalInfo) =>
    commit('SET_MODAL_STATUS', modalInfo),
};
