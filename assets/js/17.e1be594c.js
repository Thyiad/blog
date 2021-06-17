(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{472:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[s._v("前言")]),s._v(" "),n("p",[s._v("此处记录一下mongodb开启身份验证的步骤")]),s._v(" "),n("h2",{attrs:{id:"具体步骤"}},[s._v("具体步骤")]),s._v(" "),n("ul",[n("li",[s._v("安装mongodb")])]),s._v(" "),n("blockquote",[n("p",[s._v("mac下直接使用homebrew安装即可：brew install mongodb，windows则下载对应的安装包")])]),s._v(" "),n("ul",[n("li",[s._v("创建用户")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 超级管理员")]),s._v("\nuse admin\ndb.createUser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    user: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(",\n    pwd: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pwd"')]),s._v(",\n    customData: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("description: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"管理员用户"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    roles: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 业务数据库用户")]),s._v("\nuse tradition\ndb.createUser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    user: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tradition"')]),s._v(",\n    pwd: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pwd"')]),s._v(",\n    roles:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWrite"')]),s._v(", db:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tradition"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dbAdmin"')]),s._v(", db:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tradition"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ul",[n("li",[s._v("开启验证")])]),s._v(" "),n("blockquote",[n("p",[s._v("mac需要修改 /usr/local/etc/mongod.conf，windows修改安装目录下的mongod.cfg，添加以下两行配置")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("security:\n  authorization: enabled\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);