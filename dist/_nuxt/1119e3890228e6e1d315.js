(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{347:function(t,e,r){t.exports=r.p+"img/f88a414.jpg"},406:function(t,e,r){"use strict";r.r(e);r(19),r(17),r(16),r(11),r(18);var n=r(0),c=(r(77),r(26)),o={props:{blog:{type:Object}},data:function(){return{image:"",category:{}}},created:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var img,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/media/".concat(t.blog.featured_media,"?_fields=media_details"));case 2:return img=e.sent,t.image=img.media_details.sizes.large.source_url,e.next=6,t.$axios.$get("/categories?post=".concat(t.blog.id,"&_fields=id,name"));case 6:r=e.sent,t.category=r;case 8:case"end":return e.stop()}}),e)})))()}},l=r(42),d=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.category,(function(e){return n("b-badge",{key:e.id,staticClass:"text-uppercase mb-3",attrs:{variant:"red"}},[t._v(t._s(e.name))])})),n("br"),t._v(" "),n("div",{},[n("b-img",{staticClass:"mb-4",attrs:{alt:"image",fluid:"",src:t.image}})],1),t._v(" "),n("h3",{},[n("b-link",{attrs:{to:{path:"/blog/"+t.blog.slug}}},[t._v(t._s(t.blog.title.rendered))])],1),t._v(" "),n("div",{staticClass:"d-flex align-items-center mb-2"},[n("b-avatar",{staticClass:"mr-2",attrs:{size:"1rem",src:r(347)}}),t._v(" "),n("p",{staticClass:"mb-0 text-muted text-uppercase"},[t._v("\n      STARTERS AFRICA "),n("span",{staticClass:"font-weight-bolder text-primary"},[t._v("-")]),t._v(" "+t._s(t.$moment(t.blog.date).fromNow())+"\n      "),n("span",{staticClass:"font-weight-bolder text-primary"},[t._v("-")]),t._v(" "),n("DisqusCount",{attrs:{identifier:"/blog/"+t.blog.slug}})],1)],1),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.blog.excerpt.rendered)}}),t._v(" "),n("hr",{staticClass:"my-5"})],2)}),[],!1,null,"08fef24f",null).exports,f=r(150);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={head:function(){return{title:"Blog - Starters Africa",meta:[]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,t.params,t.$axios,e.next=3,r.store.dispatch("getPosts");case 3:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)(["posts"])),components:{BlogItem:d}},_=Object(l.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{},[this._m(0),this._v(" "),e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row"},this._l(this.posts,(function(t){return e("div",{key:t.id,staticClass:"col-md-6"},[e("blog-item",{attrs:{blog:t}})],1)})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-darker-25 py-3"},[e("div",{staticClass:"container"},[e("h3",{staticClass:"text-darker"},[this._v("BLOG")])])])}],!1,null,"75f86d8c",null);e.default=_.exports}}]);