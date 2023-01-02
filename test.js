const puppeteer = require('puppeteer');

const scrapeing_googleimg = async (word) => {
  const browser = await puppeteer.launch();
  // google画像検索をwordで開く
  const page = await browser.newPage();
  const url = 'https://www.google.com/search?as_st=y&tbm=isch&hl=ja&as_q=' + word + '+mtg+imagesize%3A223x311+%7C+imagesize%3A223x310&as_epq=&as_oq=&as_eq=&cr=&safe=images&tbs=iar:t';
  await page.goto(url,{ waitUntil: 'domcontentloaded' });

  //最初の画像を取得
  const target = 'div[data-ved]:first-of-type > a > div > img';
  const links = await page.$$eval(target, links => {
    return links.map(link => link.textContent);
  });
  links.forEach( function( item ) {
    console.log( item ); 
  });
  browser.close();
  //src内を取得
  const src = target;
  //console.log(target.match(/src=\"(.*)\"/g));
  //console.log(src);
}

scrapeing_googleimg();