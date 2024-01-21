const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2023-09-16', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '世界上只有一种真正的英雄主义，那就是在认识生活的真相后依然热爱生活'},
    { title: 'There is only one heroism in the world: to see the world as it is and to love it😶'},
  ],

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'Serendipity',
  HEO_HERO_TITLE_2: '❤',
  HEO_HERO_TITLE_3: '\"你好，美好时光\"',
  HEO_HERO_TITLE_4: 'MengXiangHui',
  HEO_HERO_TITLE_5: '和美好不期而遇！',
  HEO_HERO_TITLE_LINK: 'https://space.bilibili.com/495067749',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: true, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],
  HEO_INFO_CARD_URL: 'https://www.301top.top/', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'allegro',
      img_1: 'https://pic.imgdb.cn/item/658f6b2ac458853aef97fc98.webp',
      color_1: '#ffffff',
      title_2: 'Capture',
      img_2: 'https://pic.imgdb.cn/item/658f6b2ac458853aef97fccf.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Altium Designer',
      img_1: 'https://pic.imgdb.cn/item/658f6b2ac458853aef97fcb3.webp',
      color_1: '#F0F0F0',
      title_2: 'Clion',
      img_2: 'https://pic.imgdb.cn/item/658f6b2ac458853aef97fd03.webp',
      color_2: '#F0F0F0'
    },
    {
      title_1: 'CubeMX',
      img_1: 'https://pic.imgdb.cn/item/658f6b34c458853aef981629.webp',
      color_1: '#ffffff',
      title_2: 'Keil',
      img_2: 'https://pic.imgdb.cn/item/658f7026c458853aefa5f9d3.webp',
      color_2: '#F0F0F0'
    },
    {
      title_1: 'lceda-pro',
      img_1: 'https://pic.imgdb.cn/item/658f6b34c458853aef981678.webp',
      color_1: '#ffffff',
      title_2: 'RT-Thread Studio',
      img_2: 'https://pic.imgdb.cn/item/658f6b3cc458853aef98286e.webp',
      color_2: '#ffffff'
    }
    // {
    //   title_1: 'illustrator',
    //   img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
    //   color_1: '#f29e39',
    //   title_2: 'CSS3',
    //   img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
    //   color_2: '#2c51db'
    // },
    // {
    //   title_1: 'JS',
    //   img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
    //   color_1: '#f7cb4f',
    //   title_2: 'HTML',
    //   img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
    //   color_2: '#e9572b'
    // },
    // {
    //   title_1: 'Git',
    //   img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
    //   color_1: '#df5b40',
    //   title_2: 'Rhino',
    //   img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
    //   color_2: '#1f1f1f'
    // }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '添加我的个人微信',
  HEO_SOCIAL_CARD_TITLE_3: 'M_36N120E',
  HEO_SOCIAL_CARD_URL: 'https://www.301top.top/',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: true, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: true, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: true, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
