import puppeteer, { Browser, Page } from 'puppeteer';
import "expect-puppeteer";

describe('Google', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: 'new' });
    page = await browser.newPage();
    await page.goto('https://google.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatchTextContent('google');
  });
});
