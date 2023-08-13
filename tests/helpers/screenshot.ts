import puppeteer from 'puppeteer';

export const captureScreenshot = async (html: string) =>{
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.setContent(html);
  const screenshot = await page.screenshot();

  await browser.close();

  return screenshot;
}