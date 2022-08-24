const douyin = require('..');

(async () => {

    const dy = douyin();
    const link = `https://v.douyin.com/VxENC1/`;
    const full_link = await dy.shortcut(link);
    const vid = full_link.split('/')[5];
    const video = await dy.get_post(vid);
    console.log(video);

})();