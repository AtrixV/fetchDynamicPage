const puppeteer = require('puppeteer');

(async () => {
  const url = process.env.WEBSITE_URL; // Получаем URL из переменных окружения
  const duration = process.env.DURSTION;
  if (!url) {
    console.error('No URL provided');
    process.exit(1);
  }

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  await page.goto(url);

  // Ожидание 5 секунд
  await page.waitForTimeout(duration*1000);

  // Закрытие браузера
  await browser.close();

  console.log('Website rendered and closed after 5 seconds.');
})();
