const http = require('http');
const fs = require('fs');
const cheerio = require('cheerio');

const articleSavePath = './data';
const imgSavePath = './img';
const fetchLimit = process.argv[2] || 50;

if(!fs.existsSync(articleSavePath)){
    fs.mkdirSync(articleSavePath);
}

if(!fs.existsSync(imgSavePath)){
    fs.mkdirSync(imgSavePath);
}

console.log(fetchLimit);
