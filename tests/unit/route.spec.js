import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';
import routes from '@/router/routes';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Actions.vue', () => {
  const router = new VueRouter({
    mode: 'history',
    routes,
  });
  const wrapper = mount(App, { localVue, router });

  it('route path: /, component: Home', async () => {
    router.push('/');
    await wrapper.vm.$nextTick();
    expect(wrapper.find(Home).exists()).toBe(true);
  });
  it('route path: /about, component: About', async () => {
    router.push('/about');
    await wrapper.vm.$nextTick();
    expect(wrapper.find(About).exists()).toBe(true);
  });
});
