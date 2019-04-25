(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Vuex-ORM-GraphQL is a plugin for the amazing "),s("a",{attrs:{href:"https://github.com/vuex-orm/vuex-orm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex-ORM"),s("OutboundLink")],1),t._v(", which brings\nObject-Relational Mapping access to the Vuex Store. Vuex-ORM-GraphQL enhances Vuex-ORM to let you sync your Vuex state\nvia the Vuex-ORM models with your server via a "),s("a",{attrs:{href:"http://graphql.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraphQL API"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("You should have basic knowledge of "),s("a",{attrs:{href:"http://graphql.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraphQL"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue"),s("OutboundLink")],1),t._v(",\n"),s("a",{attrs:{href:"https://vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex-ORM"),s("OutboundLink")],1),t._v(" before reading this documentation.")])]),t._v(" "),s("hr"),t._v(" "),s("p"),t._m(2),s("p"),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("While using Vuex-ORM with the GraphQL plugin you have to distinguish between two types of Vuex actions:")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("The following table lists all actions and what they do:")]),t._v(" "),s("table",[t._m(5),t._v(" "),s("tbody",[s("tr",[t._m(6),t._v(" "),s("td",[s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/guide/store/retrieving-data.html#get-single-data",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("find()")]),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/guide/store/retrieving-data.html#get-all-data",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("all()")]),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/guide/store/retrieving-data.html#query-builder",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("query()")]),s("OutboundLink")],1)]),t._v(" "),s("td",[s("router-link",{attrs:{to:"./fetch.html"}},[s("code",[t._v("fetch()")])])],1)]),t._v(" "),s("tr",[t._m(7),t._v(" "),s("td",[s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/guide/store/inserting-and-updating-data.html#inserts",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("create()")]),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/guide/store/inserting-and-updating-data.html#inserts",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("insert()")]),s("OutboundLink")],1)]),t._v(" "),s("td",[s("router-link",{attrs:{to:"./persist.html"}},[s("code",[t._v("$persist()")])])],1)]),t._v(" "),s("tr",[t._m(8),t._v(" "),s("td",[s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/guide/store/inserting-and-updating-data.html#updates",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("$update()")]),s("OutboundLink")],1)]),t._v(" "),s("td",[s("router-link",{attrs:{to:"./push.html"}},[s("code",[t._v("$push()")])])],1)]),t._v(" "),s("tr",[t._m(9),t._v(" "),s("td",[s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/guide/store/deleting-data.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("$delete()")]),s("OutboundLink")],1)]),t._v(" "),s("td",[s("router-link",{attrs:{to:"./destroy.html"}},[s("code",[t._v("$destroy()")])])],1)])])]),t._v(" "),s("p",[t._v("See the example below to get an idea of how this plugin interacts with Vuex-ORM.")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("After "),s("router-link",{attrs:{to:"./setup.html"}},[t._v("installing")]),t._v(" this plugin you can load data in your component:")],1),t._v(" "),t._m(11),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Vuex-ORM-GraphQL works with the "),s("a",{attrs:{href:"https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apollo Dev Tools"),s("OutboundLink")],1),t._v("!")])]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("It seems that there are several standards within the GraphQL community how connections (fields that returns multiple\nrecords) are designed. Some do this via a "),s("code",[t._v("nodes")]),t._v(" field, some via a "),s("code",[t._v("edges { nodes }")]),t._v(" query and some do neither of them.\nVuex-ORM-GraphQL tries to be flexible and supports all of them, but the example queries in the documentation work with\nthe "),s("code",[t._v("nodes")]),t._v(" query, don't be irritated. You'll find "),s("router-link",{attrs:{to:"./connection-mode.html"}},[t._v("more details here")]),t._v(".")],1),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("Vuex-ORM-GraphQL is open-sourced software licensed under the\n"),s("a",{attrs:{href:"https://github.com/phortx/vuex-orm-graphql/blob/master/LICENSE.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT license"),s("OutboundLink")],1),t._v(".")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The plugin will automatically generate GraphQL queries and mutations based on your model definitions and by\nreading your and GraphQL schema from your server. Thus it hides the specifics of Network Communication, GraphQL,\nCaching, De- and Serialization of your Data and so on from the developer. Getting a record of a model from the server\nis as easy as calling "),a("code",[this._v("Product.fetch()")]),this._v(". This allows you to write sophisticated Single-Page Applications fast and\nefficient without worrying about GraphQL.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#actions"}},[this._v("Actions")])]),a("li",[a("a",{attrs:{href:"#example-usage"}},[this._v("Example usage")])]),a("li",[a("a",{attrs:{href:"#connection-mode"}},[this._v("Connection Mode")])]),a("li",[a("a",{attrs:{href:"#license"}},[this._v("License")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Vuex-ORM actions: Retrieve data from or save data to Vuex ("),a("code",[this._v("Vue Component <--\x3e Vuex Store")]),this._v(")")]),this._v(" "),a("li",[this._v("Persistence actions: Load data from or persist data to the GraphQL API ("),a("code",[this._v("Vuex Store <--\x3e GraphQL Server")]),this._v(")")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("CRUD")]),this._v(" "),a("th",[this._v("Vuex Only")]),this._v(" "),a("th",[this._v("Persist to GraphQL API")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("strong",[this._v("R")]),this._v("EAD")])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("strong",[this._v("C")]),this._v("REATE")])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("strong",[this._v("U")]),this._v("PDATE")])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("strong",[this._v("D")]),this._v("ELETE")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Example usage")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user in users"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":key")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user.id"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      {{user.name}}\n\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click.prevent")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("destroy(user)"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("x"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" User "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'data/models/user'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    computed"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n       * Returns all users with reactivity.\n       */")]),t._v("\n      users"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" User"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("query")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("withAll")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("all")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("mounted")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// Load all users from the server")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" User"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("fetch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\n    methods"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n      * Deletes the user from Vuex Store and from the server.\n      */")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("destroy")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" user"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("$deleteAndDestroy")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"connection-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection Mode")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);a.default=e.exports}}]);