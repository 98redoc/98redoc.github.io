(function(t){function e(e){for(var o,a,s=e[0],u=e[1],l=e[2],c=0,p=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},a={app:0},r={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9360ed5d"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"54696b01"}[t]+".css",r=u.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===o||c===r))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],c=l.getAttribute("data-href");if(c===o||c===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){a[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(t);var p=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},2380:function(t,e,n){},"2b0b":function(t,e,n){},"2c38":function(t,e,n){"use strict";var o=n("ee56"),a=n.n(o);a.a},"44ba":function(t,e,n){"use strict";var o=n("9d75"),a=n.n(o);a.a},5202:function(t,e,n){t.exports=n.p+"img/avatar_98redoc.d9ef0347.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("2f62"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vue-navigation-bar",{attrs:{options:this.$store.state.navbarOptions}}),n("router-view",{staticClass:"main"})],1)},i=[],s=(n("b0c0"),{components:{},methods:{disableLoginButton:function(){console.log("Hello"),console.log(this.navbarOptions.menuOptionsRight)}},watch:{$route:function(t,e){"Login"==t.name&&this.$store.commit("visitLoginPage"),"Login"==e.name&&this.$store.commit("leaveLoginPage")}}}),u=s,l=(n("034f"),n("2877")),c=Object(l["a"])(u,r,i,!1,null,null,null),p=c.exports,d=(n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("h1",[t._v("Tensor Blogs")]),n("p",{staticClass:"intro"},[t._v("Writing is the ultimate way to improve my skills and knowledge. So, these technical notes and tutorials are important footprints in my journey of exploring the mystery world of computer science and deep learning. ")]),t.blogs?n("div",{staticClass:"blog-card-grid"},t._l(t.blogs.slice(0,6*t.page),(function(t){return n("blog-card",{key:t.id,attrs:{title:t.title,url:t._links.self}})})),1):t._e(),t.blogs&&6*t.page<t.blogs.length?n("button",{staticClass:"btn btn--red btn--go",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.loadMore(e)}}},[t._v("LOAD MORE")]):t._e()])},m=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"blog-card selector selector--black",attrs:{href:t.url}},[n("div",{staticClass:"blog-card__title"},[t.title?n("h2",[t._v(t._s(t.title))]):n("h2",[t._v("Title is not found")])]),t._m(0)])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"blog-card__readmore"},[t._v("READ MORE "),n("span",{staticClass:"rightarrow"},[t._v("→")])])}],v={name:"BlogCard",props:["url","title"]},b=v,w=(n("9d4a"),Object(l["a"])(b,h,f,!1,null,"c6e9ff10",null)),_=w.exports,y={APP_URL:"https://98redoc.pythonanywhere.com/"},L=n("bc3a"),O=n.n(L),P={name:"Blog",components:{BlogCard:_},data:function(){return{isMore:!0,blogs:null,page:1}},created:function(){this.getBlogs()},methods:{getBlogs:function(){var t=this;O.a.get(y.APP_URL+"api/blogs").then((function(e){t.blogs=e.data.blogs}))},loadMore:function(){this.page=this.page+1}}},k=P,x=(n("8d8a"),Object(l["a"])(k,g,m,!1,null,"2af0216d",null)),C=x.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-page"},[n("vue-element-loading",{attrs:{active:t.status.loggingIn,text:"Logging In ...",spinner:"bar-fade-scale","is-full-screen":!0}}),n("h1",[t._v("Login")]),n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form__input",class:{"is-invalid":t.submitted&&!t.username},attrs:{type:"text",name:"username",placeholder:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.submitted&&!t.username,expression:"submitted && !username"}],staticClass:"invalid-feedback"},[t._v("Username is required")])]),n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form__input",class:{"is-invalid":t.submitted&&!t.password},attrs:{type:"password",name:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.submitted&&!t.password,expression:"submitted && !password"}],staticClass:"invalid-feedback"},[t._v("Password is required")])]),n("div",{staticClass:"form"},[n("button",{staticClass:"form__button",attrs:{disabled:t.status.logginIn||!t.username||!t.password},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Login")])]),n("p",{staticClass:"form__message"},[t._v(t._s(t.message))])],1)},M=[],E=n("6ad0"),$=n.n(E),j={data:function(){return{username:"",password:"",submitted:!1,message:"",status:{loggingIn:!1}}},mounted:function(){this.$store.commit("visitLoginPage")},components:{VueElementLoading:$.a},methods:{login:function(){var t=this;this.status.logginIn=!0,this.message="";var e=new FormData;console.log(this.navbarOptions),e.append("username",this.username),e.append("password",this.password),O.a.post(y.APP_URL+"api/login",e).then((function(e){t.$store.commit("updateUser",e.data),t.$store.commit("loggedIn")})).catch((function(e){t.message=e.response.data.error})),this.status.logginIn=!1,this.$router.push({name:"Blog"})}}},R=j,T=(n("44ba"),Object(l["a"])(R,B,M,!1,null,"6a96cbcd",null)),A=T.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"writer"},[n("vue-element-loading",{attrs:{active:t.status.isPublishing,text:"Publishing ..."}}),n("h1",[t._v("Your Blog: "+t._s(t.title))]),n("div",{attrs:{id:"editor"}},[n("textarea",{domProps:{value:t.input},on:{input:t.update}}),n("div",{domProps:{innerHTML:t._s(t.compiledMarkdown)}})]),n("button",{staticClass:"btn btn--green btn--go",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.publish(e)}}},[t._v("Publish")])],1)},S=[],N=(n("4de4"),n("ac1f"),n("466d"),n("1276"),n("498a"),n("0e54")),U=n.n(N),D=n("2ef0"),q=n.n(D),W={data:function(){return{input:"# Your Blog Title",title:"Your Blog Title",status:{isPublishing:!1}}},computed:{compiledMarkdown:function(){return U()(this.input)}},methods:{update:q.a.debounce((function(t){this.input=t.target.value,this.title=this.getTitleMarkdown(t.target.value)}),300),getTitleMarkdown:function(t){var e=/^#+(.*)$/,n=t.split("\n"),o=n.filter((function(t){return t.length>0}));if(0===o.length)throw new Error("no content");var a=o[0],r=a.match(e);if(null!=r){var i=r&&r[1];return i.trim()}},publish:function(){this.status.isPublishing=!0;var t=new FormData,e=this.$store.state.user.token;t.append("title",this.title),t.append("body",this.input),O.a.post(y.APP_URL+"api/blogs",t,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){console.log(t.data)})).catch((function(t){return console.log(t.response.data.error)})),this.status.isPublishing=!1,this.$router.push({name:"Blog"})}},components:{VueElementLoading:$.a}},F=W,H=(n("2c38"),Object(l["a"])(F,I,S,!1,null,"023bf209",null)),V=H.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Logout")])},J=[],z={created:function(){console.log("Logout"),this.$store.commit("clearState"),this.$router.push({name:"Blog"})}},G=z,K=Object(l["a"])(G,Y,J,!1,null,null,null),Q=K.exports;o["a"].use(d["a"]);var X=[{path:"*",redirect:"/"},{path:"/",name:"Blog",component:C},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:A},{path:"/logout",name:"Logout",component:Q},{path:"/writer",name:"BlogWriter",component:V}],Z=new d["a"]({mode:"hash",base:"/",routes:X}),tt=Z,et=n("0e44"),nt=n("c235");n("debc"),n("7f10");o["a"].config.productionTip=!1,o["a"].use(a["a"]);var ot=new a["a"].Store({plugins:[Object(et["a"])()],state:{atLoginPage:!1,user:null,navbarOptions:{elementId:"main-navbar",isUsingVueRouter:!0,mobileBreakpoint:992,brandImagePath:"./",brandImage:n("5202"),brandImageAltText:"98redoc",collapseButtonOpenColor:"#661c23",collapseButtonCloseColor:"#661c23",showBrandImageInMobilePopup:!0,ariaLabelMainNav:"Main Navigation",tooltipAnimationType:"shift-away",menuOptionsLeft:[{type:"link",text:"TENSOR BLOG",path:{name:"Blog"}},{type:"link",text:"ABOUT ME",path:{name:"About"}}],menuOptionsRight:[{type:"button",text:"Login",path:{name:"Login"},iconRight:'<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'}]}},mutations:{updateMenuOptionsRight:function(t,e){t.navbarOptions.menuOptionsRight=e},visitLoginPage:function(){this.commit("updateMenuOptionsRight",null)},leaveLoginPage:function(){this.commit("updateMenuOptionsRight",[{type:"button",text:"Login",path:{name:"Login"},iconRight:'<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'}])},loggedIn:function(){this.commit("updateMenuOptionsRight",[{type:"link",text:this.state.user.username,iconRight:'<i class="fa fa-user fa-2x"></i>',subMenuOptions:[{type:"link",text:"Write Blog",path:{name:"BlogWriter"}},{type:"hr"},{type:"link",text:"Logout",path:{name:"Logout"}}]}])},updateUser:function(t,e){t.user=e},clearState:function(){this.state.user=null,this.commit("leaveLoginPage")}}});o["a"].component("vue-navigation-bar",nt["a"]),new o["a"]({router:tt,store:ot,render:function(t){return t(p)},watch:{$route:{handler:function(t){document.title=t.meta.title||"98redoC's Blogs"},immediate:!0}}}).$mount("#app")},"85ec":function(t,e,n){},"8d8a":function(t,e,n){"use strict";var o=n("2380"),a=n.n(o);a.a},"9d4a":function(t,e,n){"use strict";var o=n("2b0b"),a=n.n(o);a.a},"9d75":function(t,e,n){},ee56:function(t,e,n){}});
//# sourceMappingURL=app.f43a158e.js.map