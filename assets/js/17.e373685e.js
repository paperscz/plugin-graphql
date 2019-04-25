(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{172:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Installation of the GraphQL plugin is easy. First add the package to your dependencies:")]),t._v(" "),t._m(3),s("p",[t._v("or")]),t._v(" "),t._m(4),s("p",[t._v("After that we setup the plugin. Add this after "),s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/guide/prologue/getting-started.html#register-models-and-modules-to-the-vuex-store",target:"_blank",rel:"noopener noreferrer"}},[t._v("registering your models to the database"),s("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),s("ul",[t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("li",[s("code",[t._v("connectionQueryMode")]),t._v(" (optional, default: "),s("code",[t._v("auto")]),t._v("). One of "),s("code",[t._v("auto | nodes | edges | plain")]),t._v(". See "),s("router-link",{attrs:{to:"./connection-mode.html"}},[t._v("Connection Mode")])],1)]),t._v(" "),s("p",[t._v("More options will come in future releases.")]),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#installation"}},[this._v("Installation")])]),e("li",[e("a",{attrs:{href:"#possible-options"}},[this._v("Possible options")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ yarn add @vuex-orm/plugin-graphql\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" --save @vuex-orm/plugin-graphql\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VuexORMGraphQL "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@vuex-orm/plugin-graphql'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVuexORM"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VuexORMGraphQL"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" database "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"possible-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#possible-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Possible options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("These are the possible options to pass when calling "),e("code",[this._v("VuexORM.use()")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("database")]),this._v(" (required): The Vuex-ORM database.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("debug")]),this._v(" (optional, default: "),e("code",[this._v("false")]),this._v("): Set to true to activate the debug logging.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("url")]),this._v(" (optional, default: "),e("code",[this._v("/graphql")]),this._v("): The URL to the graphql api. Will be passed to apollo-client.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("headers")]),this._v(" (optional, default: "),e("code",[this._v("{}")]),this._v(") HTTP Headers. See\n[apollo-link-http])(https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-http#options).\nThis can be a static object or a function, returning a object, which will be called before a request is made.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("credentials")]),this._v(" (optional, default: "),e("code",[this._v("same-origin")]),this._v(") Credentials Policy. See [apollo-link-http])(https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-http#options)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("useGETForQueries")]),this._v(" (optional, default: "),e("code",[this._v("false")]),this._v(") Use GET for queries (not for mutations). See [apollo-link-http])(https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-http#options)")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("We recommend to activate the debug mode in development env automatically via:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" debug"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);e.default=n.exports}}]);