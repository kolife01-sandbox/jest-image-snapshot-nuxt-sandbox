import puppeteer, { Browser, Page } from 'puppeteer';
import "expect-puppeteer";

describe('puppeteer test', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: 'new' });
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display "Text" text on page', async () => {
    console.log('page', page);
    const image = await page.screenshot();
    await expect(page).toMatchTextContent('Welcome to the homepage page Index');
    expect(image).toMatchImageSnapshot();
  });
});
