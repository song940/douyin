import * as dy from '../index.js'

(async () => {

    // const link = `https://v.douyin.com/VxENC1/`;
    // const full_link = await dy.shortcut(link);
    // const vid = full_link.split('/')[5];
    // const video = await dy.get_post(vid);
    // console.log(video);

    const user = await dy.get_video_list_by_user_id('MS4wLjABAAAAWiOs23d6NtmiUg98zONd6wQhmPsy1WLwZn0jEaCbDL8')
    console.log(user);

})();