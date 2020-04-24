module.exports = {
  "title": "Thyiad's Blog",
  "description": "I saw, I write",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  plugins: [
    'vuepress-plugin-dehydrate',
    {
      // 禁用 SSR
      noSSR: '404.html',
      // 移除 scripts
      noScript: [
        '_posts/**/*.html',
        'categories/**/*.html',
        'tag/**/*.html',
        'tags/**/*.html',
        'timeline/**/*.html',
        '**/static.html',
      ],
    },
  ],
  "theme": "reco",
  "themeConfig": {
    "noFoundPageByTencent": false,
    "valineConfig": {
      "appId": '...',// your appId
      "appKey": '...', // your appKey
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/thyiad",
            "icon": "reco-github"
          },
          {
            "text": "博客园",
            "link": "https://www.cnblogs.com/thyong/",
            "icon": "reco-bokeyuan"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Thyiad",
    "authorAvatar": "/avatar.png",
    "startYear": "2018",
    // 备案
    record: '',
    recordLink: '',
    cyberSecurityRecord: '',
    cyberSecurityLink: '',
  },
  "markdown": {
    "lineNumbers": true,
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    // extendMarkdown: md => {
    //   // 使用更多的 markdown-it 插件!
    //   md.use(require('markdown-it-xxx'))
    // }
  }
}