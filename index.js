const { get, ensureStatusCode } = require('tiny-network');

const douyin = () => {
  return {
    search(keyword) {

    },
    trending() {

    },
    video(vid) {

    },
    music(mid) {

    },
    user() {
      
    },
    shortcut(code) {
      const url = `https://v.douyin.com/${code}/`;
      return Promise
      .resolve()
      .then(() => get(url))
      .then(ensureStatusCode(302))
      .then(res => res.headers['location'])
    }
  };
};

module.exports = douyin;