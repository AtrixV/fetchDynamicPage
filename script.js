// const puppeteer = require('puppeteer');

// (async () => {
//   const url = process.env.WEBSITE_URL; // Получаем URL из переменных окружения
//   if (!url) {
//     console.error('No URL provided');
//     process.exit(1);
//   }

//   const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
//   const page = await browser.newPage();

//   await page.goto(url);

//   // Ожидание 5 секунд
//   await page.waitForTimeout(10000);

//   // Закрытие браузера
//   const html = await page.content();
//   await browser.close();

//   console.log(html);
// })();

const puppeteer = require('puppeteer');

(async () => {
  const url = process.env.WEBSITE_URL;
  if (!url) {
    console.error('No URL provided');
    process.exit(1);
  }

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  // Ожидание полной загрузки страницы
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Дополнительное ожидание, если нужно
  await page.waitForTimeout(10000);

  // Проверка на наличие ошибок в консоли страницы
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  // Опционально: выполнение дополнительного JavaScript на странице
  await page.evaluate(() => {
    console.log('Page loaded and evaluated');
    // Добавьте здесь код для взаимодействия с DOM
  });

  const html = await page.content();
  await browser.close();

  console.log(html);
})();
