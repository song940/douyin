const douyin = require('..');

(async () => {

    const dy = douyin();
    // https://v.douyin.com/VxENC1/
    const link = await dy.shortcut('VxE9Q1');
    console.log(link);

})();