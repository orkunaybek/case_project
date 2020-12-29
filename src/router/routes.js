function load(component) {
  return () => import(`@/views/pages/${component}.vue`);
}
export const routes = [
  {
    title: 'Home',
    key: 'home',
    path: '/',
    component: load('Home'),
  },
  {
    title: 'Contact',
    key: 'contact',
    path: '/contact',
    component: load('Contact'),
  },
];
