const puppeteer = require('puppeteer');
require('dotenv').config()

const Discord = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const client = new Discord.Client();

const scrapeing_googleimg = async (word) => {
  const browser = await puppeteer.launch();
  // google画像検索をwordで開く
  const page = await browser.newPage();
  const url = 'https://www.google.com/search?as_st=y&tbm=isch&hl=ja&as_q=' + word + '+mtg+imagesize%3A223x311+%7C+imagesize%3A223x310&as_epq=&as_oq=&as_eq=&cr=&safe=images&tbs=iar:t';
  await page.goto(url,{ waitUntil: 'domcontentloaded' });

  //最初の画像を取得
  const target = 'div[jscontroller=Mimmmd] > div:first-child > span > div > div > div > a > div > img';
  //src内を取得
  const src = target;
  target.match(/src=(.*)"/g);
  console.log(src);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.content.startsWith('!i')) {

    function _googleImageSearch(word)

    message.channel.send({ embeds: [{ image: { url: file.url } }] })
  }
});

client.login(process.env.TOKEN);