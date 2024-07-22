const puppeteer = require('puppeteer');

(async () => {
  const url = process.env.WEBSITE_URL; // Получаем URL из переменных окружения
  if (!url) {
    console.error('No URL provided');
    process.exit(1);
  }

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  await page.goto(url);

  // Ожидание 5 секунд
  await page.waitForTimeout(10000);

  // Закрытие браузера
  const html = await page.content();
  await browser.close();

  console.log(html);
})();
