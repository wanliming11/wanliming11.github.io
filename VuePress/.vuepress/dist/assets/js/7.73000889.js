(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{361:function(s,t,e){"use strict";e.r(t);var a=e(42),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress-使用说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-使用说明"}},[s._v("#")]),s._v(" VuePress 使用说明")]),s._v(" "),e("h2",{attrs:{id:"文档中心框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档中心框架"}},[s._v("#")]),s._v(" 文档中心框架")]),s._v(" "),e("p",[s._v("使用"),e("code",[s._v("VuePress")]),s._v(" 构建 -- "),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress.vuejs.org/zh/"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"文档规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档规范"}},[s._v("#")]),s._v(" 文档规范")]),s._v(" "),e("ul",[e("li",[s._v("文档有且只有一个h1标题 标题将会显示在左侧的侧边栏（文档的h2、h3标题会在点击h1标题之后被提取显示）")])]),s._v(" "),e("h2",{attrs:{id:"使用说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[s._v("#")]),s._v(" 使用说明")]),s._v(" "),e("h3",{attrs:{id:"添加文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加文档"}},[s._v("#")]),s._v(" 添加文档")]),s._v(" "),e("p",[s._v("在"),e("code",[s._v("docs")]),s._v("目录下合适的位置添加文档即可")]),s._v(" "),e("p",[s._v("侧边栏配置："),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%A4%9A%E4%B8%AA%E4%BE%A7%E8%BE%B9%E6%A0%8F",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%A4%9A%E4%B8%AA%E4%BE%A7%E8%BE%B9%E6%A0%8F"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"快速调试预览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速调试预览"}},[s._v("#")]),s._v(" 快速调试预览")]),s._v(" "),e("blockquote",[e("p",[s._v("首次运行需要预先装好npm 或者yarn")]),s._v(" "),e("p",[s._v("然后安装vuepress：yarn global add vuepress # 或者：npm install -g vuepress")])]),s._v(" "),e("ol",[e("li",[s._v("命令行输入：")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:dev\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("浏览器打开："),e("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080/"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("修改文档，保存，浏览器会自动刷新预览")])]),s._v(" "),e("h3",{attrs:{id:"服务开机自启"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务开机自启"}},[s._v("#")]),s._v(" 服务开机自启")]),s._v(" "),e("p",[s._v("这里采用"),e("code",[s._v("pm2")]),s._v("作为进程管理工具")]),s._v(" "),e("p",[e("strong",[s._v("全局安装")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2 -g\n")])])]),e("p",[e("strong",[s._v("开机自启")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("pm2 startup\n")])])]),e("p",[s._v("然后根据输出的提示输入命令行")]),s._v(" "),e("p",[e("strong",[s._v("文档加入开机自启")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("pm2 start docs.js\n")])])]),e("p",[e("strong",[s._v("log查看")])]),s._v(" "),e("p",[s._v("如果 pm2 管理进程出错，文档服务没有正常启动，可以使用：")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("pm2 logs docs\n")])])]),e("p",[s._v("排查相关log")]),s._v(" "),e("p",[s._v("更多 pm2 用法 Google 一下。")]),s._v(" "),e("h3",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),e("p",[s._v("由于最终是链接到了 "),e("code",[s._v("GitHub")]),s._v(", 所以需要把 "),e("code",[s._v("docs\\.vuepress\\dist\\")]),s._v(" 里面的内容拷贝到根目录。")])])}),[],!1,null,null,null);t.default=r.exports}}]);