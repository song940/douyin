const assert = require('assert');
const https = require('https');

const get = url => 
  new Promise(done => https.get(url, done));

const readStream = stream => {
  const buffer = [];
  return new Promise((resolve, reject) => {
    stream
      .on('error', reject)
      .on('data', chunk => buffer.push(chunk))
      .on('end', () => resolve(Buffer.concat(buffer)))
  });
};

const douyin = () => {
  return {
    get_post(vid) {
      const url = `https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=${vid}`;
      return Promise
        .resolve()
        .then(() => get(url))
        .then(readStream)
        .then(JSON.parse)
        .then(res => {
          assert.equal(res.status_code, 0);
          return res.item_list;
        });
    },
    shortcut(code) {
      const url = `https://v.douyin.com/${code}/`;
      return Promise
      .resolve()
      .then(() => get(url))
      .then(res => res.headers['location'])
    }
  };
};

module.exports = douyin;