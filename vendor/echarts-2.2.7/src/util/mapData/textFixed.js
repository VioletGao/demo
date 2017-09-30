/**
 * 地图文本位置修正
 */
define(function() {
    // fix = [xFixed, yFixed, scale]
    // textX += fix[0];
    // textY += fix[1];
    return {
        //'南海诸岛' : [32, 83],
        // 全国
        '广东': [0, -10],
        '香港': [10, 10],
        '澳门': [-10, 18],
        '黑龙江' : [0, 20],
        //'北京': [-10, 0],
        '天津': [5, 5],
        // 广东
        '深圳市': [-35, 0],
        // 云南
        '红河哈尼族彝族自治州' : [0, 20],
        '楚雄彝族自治州': [-5, 15],
        // 新疆
        '石河子市': [-5, 5],
        '五家渠市': [0, -10],
        '昌吉回族自治州': [10, 10],
        // 海南
        '昌江黎族自治县': [0,20],
        '陵水黎族自治县': [0,20],
        '东方市': [0,20],
        // 陕西
        '渭南市': [0,20]
    };
});