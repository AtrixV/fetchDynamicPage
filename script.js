const puppeteer = require('puppeteer');

(async () => {
  const url = process.env.WEBSITE_URL; // Получаем URL из переменных окружения
  const duration = parseInt(process.env.DURATION, 10);
  if (!url) {
    console.error('No URL provided');
    process.exit(1);
  }
   if (!duration) {
    duration = 5;
  }
  
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  await page.goto(url);

  // Ожидание 5 секунд
  await page.waitForTimeout(duration * 1000);

  // Закрытие браузера
  const html = await page.content();
  await browser.close();

  console.log(html);
})();

// const puppeteer = require('puppeteer');

// (async () => {
//   const url = process.env.WEBSITE_URL;
//   if (!url) {
//     console.error('No URL provided');
//     process.exit(1);
//   }

//   try {
//     const browser = await puppeteer.launch({
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--window-size=1920,1080'],
//       headless: true
//     });
//     const page = await browser.newPage();

//     // Логирование ошибок консоли
//     page.on('console', msg => console.log('PAGE LOG:', msg.text()));

//     // Переход на страницу и ожидание загрузки
//     await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 }); // Таймаут 60 секунд

//     // Явное ожидание для динамического контента
//     await page.waitForSelector('#dynamic-element', { visible: true, timeout: 30000 }); // Таймаут 30 секунд

//     // Выполнение JavaScript на странице, если нужно
//     await page.evaluate(() => {
//       console.log('Page loaded and evaluated');
//     });

//     // Ожидание перед закрытием браузера
//     await page.waitForTimeout(10000); // Ожидание 10 секунд
    
//     const html = await page.content();
//     await browser.close();
//     console.log('Website rendered and closed after 10 seconds.');
//   } catch (error) {
//     console.error('Error during page processing:', error);
//   }

//   console.log(html);
// })();


// const puppeteer = require('puppeteer');

// (async () => {
//   const url = process.env.WEBSITE_URL;
//   if (!url) {
//     console.error('No URL provided');
//     process.exit(1);
//   }

//   const browser = await puppeteer.launch({
//     args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--window-size=1920,1080'],
//     headless: true
//   });
//   const page = await browser.newPage();

//   // Переход на страницу и ожидание загрузки
//   await page.goto(url, { waitUntil: 'networkidle2' });

//   // Явное ожидание для динамического контента
//   await page.waitForSelector('#dynamic-element', { visible: true });

//   // Выполнение JavaScript на странице, если нужно
//   await page.evaluate(() => {
//     console.log('Page loaded and evaluated');
//   });

//   // Ожидание перед закрытием браузера
//   await page.waitForTimeout(10000);

//   const html = await page.content();
//   await browser.close();

//   console.log(html);
// })();
