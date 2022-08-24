import https from 'https'
import assert from 'assert';

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

const readJSONStream = stream => 
  readStream(stream).then(JSON.parse);

const getJSON = url => get(url).then(readJSONStream);

export const get_user_by_id = async uid => {
  const url = `https://www.iesdouyin.com/web/api/v2/user/info/?sec_uid=${uid}`;
  const body = await getJSON(url);
  assert.equal(body.status_code, 0);
  return body.user_info;
};

export const get_video_by_id = async id => {
  const url = `https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=${vid}`;
  const res = await getJSON(url);
  assert.equal(res.status_code, 0);
  return res.item_list;
};

export const get_video_id_by_url = async url => {
  const res = await get(url);
  const full_link = res.headers['location'];
  const vid = full_link.split('/')[5];
  return vid;
};

export const get_video_list_by_user_id = async uid => {
  const count = 10;
  const max_cursor = 0;
  const url = `https://www.iesdouyin.com/web/api/v2/aweme/post/?sec_uid=${uid}&count=${count}&max_cursor=${max_cursor}`;
  const body = await getJSON(url);
  return body;
};