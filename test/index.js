const assert = require('assert');
const test = require('./test');
const douyin = require('..');

(async () => {

  const dy = douyin();

  let vid;
  const link = `https://v.douyin.com/VxENC1/`;
  await test('douyin#shortcut', async () => {
    full_link = await dy.shortcut(link);
    assert.equal(full_link.indexOf('https://www.iesdouyin.com/share/video'), 0);
    vid = full_link.split('/')[5];
    assert.ok(/^\d+$/.test(vid));
  });

  await test('douyin#get_post', async () => {
    const obj = await dy.get_post(vid);
  });

})();