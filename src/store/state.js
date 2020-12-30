export const DefaultState = () => {
  return {
    language: 'en',
    userInfo: {
      name: '',
      email: '',
      password: '',
    },
    modals: {
      loginModal: false,
    },
  };
};
