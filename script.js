const axios = require('axios');
const cheerio = require('cheerio');

async function fetchPage() {
  try {
    const { data } = await axios.get('https://example.com');
    const $ = cheerio.load(data);
    const title = $('title').text();
    console.log(`Title: ${title}`);
  } catch (error) {
    console.error('Error fetching page:', error.message);
  }
}

fetchPage();
