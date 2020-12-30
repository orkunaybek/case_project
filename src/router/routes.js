function load(component) {
  return () => import(`@/views/pages/${component}.vue`);
}
export const routes = [
  {
    title: 'Home',
    key: 'home',
    name: 'home',
    path: '/',
    component: load('Home'),
  },
  {
    title: 'Contact',
    key: 'contact',
    name: 'contact',
    path: '/contact',
    component: load('Contact'),
  },
];
