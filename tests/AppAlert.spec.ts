import { mount } from '@vue/test-utils';
import AppAlert from '../components/AppAlert.vue';

describe('AppAlert', () => {

  it('matches snapshot', () => {
    const wrapper = mount(AppAlert);
    const image = wrapper.html();
    expect(image).toMatchImageSnapshot();
  });
});