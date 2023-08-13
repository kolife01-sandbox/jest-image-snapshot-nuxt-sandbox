import { mount } from '@vue/test-utils';
import AppAlert from '../components/AppAlert.vue';
import { captureScreenshot } from './helpers/screenshot';

describe('AppAlert', () => {
  it('matches snapshot', async() => {
    const wrapper = mount(AppAlert);
    const html = wrapper.html();
    const screenshot = await captureScreenshot(html);
    expect(screenshot).toMatchImageSnapshot();
  });
});