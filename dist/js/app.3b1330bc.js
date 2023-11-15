(function(){var t={4108:function(t,e,s){"use strict";var n={};s.r(n),s.d(n,{comment:function(){return it},like:function(){return ot},post:function(){return rt}});var a={};s.r(a),s.d(a,{computedArticles:function(){return lt},getArticlesByFilter:function(){return ut},getArticlesByUid:function(){return ct}});var r=s(144),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"wrap"}},[e("TheHeader"),e("div",{staticClass:"container main-container",attrs:{id:"main-container"}},[e("router-view")],1),e("TheFooter")],1)},i=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar navbar-default topnav"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-header"},[e("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"})]),e("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[e("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),e("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])]),e("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[e("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,(function(s,n){return e("li",{class:{active:n===t.activeNavIndex}},[e("a",{attrs:{href:"#"},on:{click:function(e){return t.changeNavIndex(n)}}},[t._v(t._s(s))])])})),0),e("div",{staticClass:"navbar-right"},[e("TheEntry")],1)])])])},c=[],u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar-right"},[t.auth?e("ul",{staticClass:"nav navbar-nav github-login"},[e("li",[e("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-plus text-md"})]),e("ul",{staticClass:"dropdown-menu"},[e("li",[e("router-link",{attrs:{to:"/articles/create"}},[e("i",{staticClass:"fa fa-paint-brush text-md"}),t._v(" 创作文章 ")])],1)])]),e("li",[e("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[t.user?e("span",[t.user.avatar?e("img",{staticClass:"avatar-topnav",attrs:{src:t.user.avatar}}):t._e(),t.user.name?e("span",[t._v(t._s(t.user.name))]):t._e()]):e("span",[t._v("佚名")]),e("span",{staticClass:"caret"})]),e("ul",{staticClass:"dropdown-menu"},[t.user?e("li",[e("router-link",{attrs:{to:`/${t.user.name}`}},[e("i",{staticClass:"fa fa-list-ul text-md i-middle"}),t._v(" 个人专栏 ")])],1):t._e(),e("li",[e("router-link",{attrs:{to:"/users/1/edit"}},[e("i",{staticClass:"fa fa-cog text-md i-middle"}),t._v(" 编辑资料 ")])],1),e("li",[e("a",{attrs:{href:"javascript:;"},on:{click:t.logout}},[e("i",{staticClass:"fa fa-sign-out text-md"}),t._v("退出")])])])])]):e("div",{staticClass:"nav navbar-nav github-login"},[e("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/login"}},[e("i",{staticClass:"fa fa-user"}),t._v(" 登 录 ")]),e("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/register"}},[e("i",{staticClass:"fa fa-user-plus"}),t._v(" 注 册 ")])],1)])},d=[],m=s(629),p={name:"TheEntry",computed:{...(0,m.rn)(["auth","user"])},methods:{logout(){this.$swal({text:"你确定要退出吗?",confirmButtonText:"退出"}).then((t=>{t.value&&this.$store.dispatch("logout")}))}}},f=p,h=s(1001),v=(0,h.Z)(f,u,d,!1,null,"2b3aac08",null),g=v.exports,b={name:"TheHeader",components:{TheEntry:g},data(){return{logo:{src:`${this.uploadsUrl}/communities/hIZjRRdF8oVYZy69XJnT.png`,title:"Learnku Vue.js"},navList:["社区","头条","问答","教程"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate(){this.uploadsUrl="https://cdn.learnku.com/uploads/"},methods:{changeNavIndex(t){this.activeNavIndex=t},toggleNav(){this.showCollapsedNav=!this.showCollapsedNav}}},y=b,j=(0,h.Z)(y,l,c,!1,null,"17840a90",null),k=j.exports,w=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row footer-top"},[e("div",{staticClass:"col-sm-5 col-lg-5"},[e("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),e("div",{staticClass:"text-md"},t._l(t.contacts,(function(s){return e("a",{directives:[{name:"title",rawName:"v-title",value:s.title,expression:"item.title"}],style:t.contactStyle,attrs:{href:s.link,target:"_blank"}},[e("i",{class:`fa fa-${s.icon}`})])})),0),e("br"),e("span",{domProps:{innerHTML:t._s(t.designer)}})]),e("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("h4",[t._v(t._s(t.sponsor.title))]),e("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,(function(t){return e("li",[e("a",{attrs:{href:t.link,target:"_blank"}},[e("img",{directives:[{name:"title",rawName:"v-title",value:t.title,expression:"item.title"}],staticClass:"footer-sponsor-link",attrs:{src:t.logo,alt:t.title,width:"98"}})])])})),0)]),e("div",{staticClass:"col-sm-4"},[e("h4",[t._v(t._s(t.statistics.title))]),e("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,(function(s){return e("li",[t._v(t._s(s.title)+": "+t._s(s.description))])})),0)]),e("div",{staticClass:"col-sm-4"},[e("h4",[t._v(t._s(t.other.title))]),e("ul",{staticClass:"list-unstyled"},t._l(t.other.list,(function(s){return e("li",[e("a",{attrs:{href:s.link,title:s.title,target:"_blank"}},[e("i",{class:`fa fa-${s.icon}`}),t._v(" "+t._s(s.title)+" ")])])})),0)])])])])])])},C=[];function _(t,e){const s=A(),n=s.style;if(void 0===e)n.display="none";else{const a=t.getBoundingClientRect(),r=window.getComputedStyle(t,null),o=parseInt(r.getPropertyValue("padding-right"))||0,i=parseInt(r.getPropertyValue("padding-top"))||0;n.visibility="hidden",n.display="block",s.querySelector(".popover-content").textContent=e,n.left=a.left-s.offsetWidth/2+(t.offsetWidth-o)/2+"px",n.top=a.top-s.offsetHeight+i+"px",n.display="block",n.visibility="visible"}}function A(){let t=document.querySelector(".title-popover");if(!t){const e='\n      <div class="popover title-popover top fade in" style="position:fixed;">\n        <div class="arrow"></div>\n        <div class="popover-content"></div>\n      </div>\n    ',s=document.createRange().createContextualFragment(e);document.body.appendChild(s),t=document.querySelector(".title-popover")}return t}var I={bind(t,e,s){const n=["mouseenter","mouseleave","click"],a=s=>{"mouseenter"===s.type?_(t,e.value):_()};n.forEach((e=>{t.addEventListener(e,a,!1)})),t.destroy=()=>{n.forEach((e=>{t.removeEventListener(e,a,!1)})),t.destroy=null}},unbind(t){t.destroy()}},E={name:"TheFooter",directives:{title:I},data(){return{description:"Learnku Vue.js 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:summer@yousails.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/1837553744/profile?topnav=1&wvr=6"},{icon:"weixin",title:"加我微信",link:"https://learnku.com/vuejs/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n        <span style="font-size:0.9em">Designed by\n          <span style="color: #e27575;font-size: 14px;">❤</span>\n          <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>\n        </span>\n      ',sponsor:{title:"赞助商",list:[{logo:"https://cdn.learnku.com/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://cdn.learnku.com/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://cdn.learnku.com/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"},{logo:"https://cdn.learnku.com/uploads/banners/JpTCK6OKYBIrBIWdtob8.png",title:"订阅邮件赞助商：SendCloud",link:"http://www.sendcloud.net/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://learnku.com/vuejs/contact"},{icon:"globe",title:"推荐网站",link:"https://learnku.com/vuejs/sites"}]}}}},x=E,T=(0,h.Z)(x,w,C,!1,null,"91c41fc8",null),S=T.exports,P={name:"App",components:{TheHeader:k,TheFooter:S}},U=P,L=(0,h.Z)(U,o,i,!1,null,null,null),N=L.exports,O=s(8345),Z=[{path:"/auth/register",name:"Register",component:()=>s.e(690).then(s.bind(s,690))},{path:"/",name:"Home",alias:"/topics",component:()=>s.e(650).then(s.bind(s,7650))},{path:"*",redirect:"/"},{path:"/auth/login",name:"Login",component:()=>s.e(46).then(s.bind(s,4046))},{path:"/users/1/edit",component:()=>s.e(360).then(s.bind(s,9360)),children:[{path:"",name:"EditProfile",component:()=>s.e(740).then(s.bind(s,2740)),meta:{auth:!0}},{path:"/users/1/edit_avatar",name:"EditAvatar",component:()=>s.e(581).then(s.bind(s,7581)),meta:{auth:!0}},{path:"/users/1/edit_password",name:"EditPassword",component:()=>s.e(2).then(s.bind(s,3002)),meta:{auth:!0}},{path:"/articles/create",name:"Create",component:()=>Promise.all([s.e(413),s.e(777)]).then(s.bind(s,7777)),meta:{auth:!0}},{path:"/articles/:articleId/edit",name:"Edit",component:()=>Promise.all([s.e(413),s.e(777)]).then(s.bind(s,7777)),meta:{auth:!0}},{path:"/:user",component:()=>s.e(721).then(s.bind(s,7721)),children:[{path:"",name:"Column",component:()=>s.e(236).then(s.bind(s,9002))},{path:"/articles/:articleId/content",name:"Content",component:()=>Promise.all([s.e(413),s.e(701)]).then(s.bind(s,701))}]}]}];r.ZP.use(O.Z);const z=new O.Z({mode:"history",linkExactActiveClass:"active",scrollBehavior(t,e,s){return t.hash?{selector:t.hash}:s||{x:0,y:0}},routes:Z});z.beforeEach(((t,e,s)=>{const n=z.app,a=n.$options.store,r=a.state.auth,o=t.params.articleId,i=a.state.user&&a.state.user.name,l=t.params.user;console.log(i),console.log(l),n.$message.hide(),r&&-1!==t.path.indexOf("/auth/")||!r&&t.meta.auth||o&&!a.getters.getArticleById(o)||l&&l!==i&&!a.getters.getArticlesByUid(null,l).length?s("/"):s()})),z.afterEach(((t,e)=>{const s=z.app,n=(s.$options.store,t.params.showMsg);n&&("string"===typeof n?s.$message.show(n):s.$message.show("操作成功"))}));var D=z;function $(t,e,s){s=s&&"object"===typeof s?s:{};const n="string"===typeof t.value?t.value.trim():"",{title:a="该项",error:r}=s;let o="";if(e.required&&""===n)o=`${a}不能为空`;else if(s.target){const t=document.querySelector(s.target),e=t?t.value:null;e!==n&&(o=`输入的${a}不匹配`)}else if(s.regex)try{s.regex.test(n)||(o=`${a}格式不正确`)}catch(i){}o?B(t,void 0===r?o:r):B(t)}function B(t,e){const s=t.parentElement,n=R(t);void 0===e?(n.style.display="none",s.classList.remove("has-error")):(n.textContent=e,n.style.display="block",s.classList.add("has-error"))}function R(t){const e=t.parentElement;let s=e.querySelector(".help-block");if(!s){const t='<span class="help-block"></span>',n=document.createRange().createContextualFragment(t);e.appendChild(n),s=e.querySelector(".help-block")}return s}var M={bind(t,e,s){const{value:n,arg:a,modifiers:r}=e,o=-1!==["change","blur","input"].indexOf(a)?a:"change",i=()=>{B(t)},l=()=>{$(t,r,n)};t.addEventListener("input",i,!1),t.addEventListener(o,l,!1),t.destroy=()=>{t.removeEventListener("input",i,!1),t.removeEventListener(o,l,!1),t.destroy=null}},inserted(t,e,s){const{value:n,modifiers:a}=e,r=t.closest("[data-validator-form]"),o=r?r.querySelector("[type=submit]"):null;if(o){const e=()=>{$(t,a,n);const e=r.querySelectorAll(".has-error");e.length?o.canSubmit=!1:o.canSubmit=!0};o.addEventListener("click",e,!1),t.destroySubmitBtn=()=>{o.removeEventListener("click",e,!1),t.destroySubmitBtn=null}}},unbind(t){t.destroy(),t.destroySubmitBtn&&t.destroySubmitBtn()}},q={bind(t,e,s){const n=()=>{t.parentElement.classList.toggle("open")},a=e=>{const s=e.target;s.isSameNode(t)||t.contains(s)||t.parentElement.classList.remove("open")};t.addEventListener("click",n,!1),document.addEventListener("click",a,!1),t.destroy=()=>{t.removeEventListener("click",n,!1),document.removeEventListener("click",a,!1),t.destroy=null}},unbind(t){t.destroy()}};const F={validator:M,dropdown:q,title:I};for(const[Lt,Nt]of Object.entries(F))r.ZP.directive(Lt,Nt);var H=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:`alert alert-${t.type} alert-dismissible`},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.close}},[e("span",[t._v("×")])]),t._v(" "+t._s(t.msg)+" ")])},V=[],J={name:"Message",props:{show:{type:Boolean,default:!1},type:{type:String,default:"success"},msg:{type:String,default:""}},watch:{show(t){t&&this.$nextTick((()=>{this.$el.scrollIntoView(!0)}))}},methods:{close(){this.$emit("update:show",!1)}}},W=J,K=(0,h.Z)(W,H,V,!1,null,"1ffc9abd",null),Y=K.exports,Q=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal",staticStyle:{display:"block"},on:{click:function(e){return e.target!==e.currentTarget?null:t.close.apply(null,arguments)}}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",on:{click:t.close}},[t._v("×")]),e("h4",{staticClass:"modal-title"},[t._t("header")],2)]),e("div",{staticClass:"modal-body"},[t._t("default")],2),e("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])]),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-backdrop fade in",on:{click:t.close}})])],1)},X=[],G={name:"Modal",props:{show:{type:Boolean,default:!1}},methods:{close(){this.$emit("update:show",!1)}},watch:{show(t){const e=document.body.classList;t?e.add("modal-open"):e.remove("modal-open")}}},tt=G,et=(0,h.Z)(tt,Q,X,!1,null,"cf7f8f7a",null),st=et.exports;const nt={Message:Y,Modal:st};for(const[Lt,Nt]of Object.entries(nt))r.ZP.component(Lt,Nt);s(7658);var at=s(9898);const rt=({commit:t,state:e},{article:s,articleId:n})=>{let a=e.articles;if(Array.isArray(a)||(a=[]),s){const e=1,{title:r,content:o}=s,i=new Date;if(void 0===n){const t=a[a.length-1];n=t?parseInt(t.articleId)+1:a.length+1,a.push({uid:e,articleId:n,title:r,content:o,date:i})}else for(let t of a)if(parseInt(t.articleId)===parseInt(n)){t.title=r,t.content=o;break}t("UPDATE_ARTICLES",a),D.push({name:"Content",params:{articleId:n,showMsg:!0}})}else{for(let t of a)if(parseInt(t.articleId)===parseInt(n)){a.splice(a.indexOf(t),1);break}t("UPDATE_ARTICLES",a),D.push({name:"Home",params:{showMsg:!0}})}},ot=({commit:t,state:e},{articleId:s,isAdd:n})=>{let a=e.articles,r=[];const o=1;Array.isArray(a)||(a=[]);for(let i of a)if(parseInt(i.articleId)===parseInt(s)){if(r=Array.isArray(i.likeUsers)?i.likeUsers:r,n){const t=r.some((t=>parseInt(t.uid)===o));t||r.push({uid:o})}else for(let t of r)if(parseInt(t.uid)===o){r.splice(r.indexOf(t),1);break}i.likeUsers=r;break}return t("UPDATE_ARTICLES",a),r},it=({commit:t,state:e},{articleId:s,comment:n,commentId:a})=>{let r=e.articles,o=[];Array.isArray(r)||(r=[]);for(let i of r)if(parseInt(i.articleId)===parseInt(s)){if(o=Array.isArray(i.comments)?i.comments:o,n){const{uid:t=1,content:e}=n,s=new Date;if(void 0===a){const n=o[o.length-1];a=n?parseInt(n.commentId)+1:o.length+1,o.push({uid:t,commentId:a,content:e,date:s})}else for(let n of o)if(parseInt(n.commentId)===parseInt(a)){n.content=e;break}}else for(let t of o)if(parseInt(t.commentId)===parseInt(a)){o.splice(o.indexOf(t),1);break}i.comments=o;break}return t("UPDATE_ARTICLES",r),o},lt=t=>{let e=t.articles,s=[];const n=function(e){const s=t.user&&t.user.name,n=t.user&&t.user.avatar,a="https://api.adorable.io/avatars/200/";e?(this.uname=s,this.uavatar=n):this.uavatar=`${a}${this.uname}`};return Array.isArray(e)&&(s=JSON.parse(JSON.stringify(e)),s.forEach((t=>{const e=t.comments,s=t.likeUsers;1===t.uid?n.call(t,!0):n.call(t),Array.isArray(e)&&e.forEach((t=>{1===t.uid?n.call(t,!0):n.call(t)})),Array.isArray(s)&&s.forEach((t=>{1===t.uid?n.call(t,!0):n.call(t)}))}))),s},ct=(t,e)=>(t,s)=>{let n=e.computedArticles;if(Array.isArray(n)){if(s)for(const e of n)if(e.uname===s){t=e.uid;break}n=n.filter((e=>parseInt(t)===parseInt(e.uid)))}else n=[];return n},ut=(t,e)=>t=>{let s=e.computedArticles,n=[];if(Array.isArray(s))switch(n=s.map((t=>({...t}))),t){case"excellent":n=e.getArticlesByUid(1);break;case"vote":n.sort(((t,e)=>{const s=Array.isArray(t.likeUsers)?t.likeUsers:[],n=Array.isArray(e.likeUsers)?e.likeUsers:[];return n.length-s.length}));break;case"recent":n.reverse();break;case"noreply":n.sort(((t,e)=>{const s=Array.isArray(t.comments)?t.comments:[],n=Array.isArray(e.comments)?e.comments:[];return s.length-n.length}));break;default:n.sort(((t,e)=>{const s=Array.isArray(t.comments)?t.comments:[],n=Array.isArray(e.comments)?e.comments:[],a=s.length,r=n.length;return a>0?r>0?new Date(n[r-1].date)-new Date(s[a-1].date):-1:1}));break}return n};r.ZP.use(m.ZP);const dt={user:at.Z.getItem("user"),auth:at.Z.getItem("auth"),articles:at.Z.getItem("articles")},mt={UPDATE_USER(t,e){t.user=e,at.Z.setItem("user",e)},UPDATE_AUTH(t,e){t.auth=e,at.Z.setItem("auth",e)},UPDATE_ARTICLES(t,e){t.articles=e,at.Z.setItem("articles",e)}},pt={login({commit:t},e){e&&t("UPDATE_USER",e),t("UPDATE_AUTH",!0),D.push("/")},logout({commit:t}){t("UPDATE_AUTH",!1),D.push({name:"Home",params:{logout:!0}})},updateUser({state:t,commit:e},s){const n=t.user;n&&"object"===typeof n&&(s={...n,...s}),e("UPDATE_USER",s)},...n},ft={getArticleById:t=>t=>{let e=ft.computedArticles;return Array.isArray(e)?(e=e.filter((e=>parseInt(t)===parseInt(e.articleId))),e.length?e[0]:null):null},...a},ht=new m.ZP.Store({state:dt,getters:ft,mutations:mt,actions:pt});var vt=ht,gt=s(6455),bt=s.n(gt),yt={install:t=>{bt().setDefaults({type:"warning",showCancelButton:!0,confirmButtonColor:"rgb(140,212,245)",cancelButtonColor:"rgb(193,193,193)"}),t.swal=bt(),t.prototype.$swal=bt()}},jt={install:t=>{const e=t.extend(Y),s=new e,n=s.$mount().$el;t.nextTick((()=>{document.querySelector("#main-container").prepend(n)})),s.$on("update:show",(t=>{s.show=t}));const a={show(e="",n="success"){s.msg=e,s.type=n,s.show=!1,t.nextTick((()=>{s.show=!0}))},hide(){t.nextTick((()=>{s.show=!1}))}};t.prototype.$message=a}},kt=s(381),wt=s.n(kt);function Ct(t,...e){const s=t;if(wt()(s).isValid()){const n=e.shift();if("string"===typeof n)switch(n){case"from":t=wt()(s).from();const a=e.shift();a&&"object"===typeof a&&(t=wt()(s).startOf(a.startOf).from());break;default:t=wt()(s).format(n)}}return t}wt().locale("zh-cn"),r.ZP.filter("moment",Ct);var _t=s(5623),At=s.n(_t);const It=At().Random,Et=at.Z.getItem("articles"),xt=at.Z.getItem("user"),Tt=xt?xt.name:void 0;let St=1;Array.isArray(Et)&&Et.length&&(St=parseInt(Et[Et.length-1].articleId)+1);const Pt=(t=10)=>{const e=[Tt,"topics"];let s=[],n=[];t=t>60?60:t;[...Array(t)].forEach(((t,a)=>{let r=It.first();while(-1!==n.indexOf(r)||-1!==e.indexOf(r))r=It.first();n.push(r),s.push({uid:a+2,articleId:St+a,title:It.ctitle(10,20),content:It.cparagraph(3,5),date:new Date,likeUsers:[],comments:[],uname:r})}));return s.forEach(((t,e)=>{let n=[],a=[],r=Ut(s);r.forEach(((t,e)=>{n.push({uid:t.uid,uname:t.uname})})),r=Ut(s),r.forEach(((t,e)=>{a.push({uid:t.uid,commentId:e+1,content:It.csentence(5,10),date:t.date,uname:t.uname})})),t.likeUsers=n,t.comments=a})),s};function Ut(t,e=5){const s=Math.floor(Math.random()*e+1),n=[...Array(s)].map((()=>t[Math.floor(Math.random()*t.length)]));return[...new Set(n)]}r.ZP.use(yt),r.ZP.use(jt),r.ZP.config.productionTip=!1;(()=>{const t=!0;let e=at.Z.getItem("articles");e=Array.isArray(e)?e.filter((t=>1===parseInt(t.uid))):[],t?vt.commit("UPDATE_ARTICLES",[...e,...Pt(10)]):vt.commit("UPDATE_ARTICLES",e)})();new r.ZP({router:D,store:vt,render:t=>t(N)}).$mount("#app")},9898:function(t,e){"use strict";const s=localStorage;e.Z={setItem(t,e){s.setItem(t,JSON.stringify(e))},getItem(t){try{return JSON.parse(s.getItem(t))}catch(e){return null}},removeItem(t){s.removeItem(t)}}},6700:function(t,e,s){var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":941,"./en-il.js":941,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function a(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id=6700}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,r){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],r=t[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[l])}))?n.splice(l--,1):(i=!1,r<o&&(o=r));if(i){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,n){return s.f[n](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{2:"1e279fb9",46:"12c544c5",236:"06f7ff35",360:"3fdf8282",413:"7525cbd3",581:"4c9c1568",650:"2ea94521",690:"c011d05d",701:"501b223e",721:"5041caa8",740:"8719c1a1",777:"42e1b4ea"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{581:"f9e81eb5",690:"2b13cab4",701:"44358649",721:"e49e0ea7",777:"7dc4f5d2"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vuejs-practice:";s.l=function(n,a,r,o){if(t[n])t[n].push(a);else{var i,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+r){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",e+r),i.src=n),t[n]=[a];var m=function(e,s){i.onerror=i.onload=null,clearTimeout(p);var a=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(s)})),e)return e(s)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){s.p="/vuejs-practice/dist/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,s,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(s){if(r.onerror=r.onload=null,"load"===s.type)n();else{var o=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=i,r.parentNode&&r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=o,r.href=e,s?s.parentNode.insertBefore(r,s.nextSibling):document.head.appendChild(r),r},e=function(t,e){for(var s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var a=s[n],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===t||r===e))return a}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){a=o[n],r=a.getAttribute("data-href");if(r===t||r===e)return a}},n=function(n){return new Promise((function(a,r){var o=s.miniCssF(n),i=s.p+o;if(e(o,i))return a();t(n,i,null,a,r)}))},a={143:0};s.f.miniCss=function(t,e){var s={581:1,690:1,701:1,721:1,777:1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=n(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}}(),function(){var t={143:0};s.f.j=function(e,n){var a=s.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(s,n){a=t[e]=[s,n]}));n.push(a[2]=r);var o=s.p+s.u(e),i=new Error,l=function(n){if(s.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}};s.l(o,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,o=n[0],i=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(l)var u=l(s)}for(e&&e(n);c<o.length;c++)r=o[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},n=self["webpackChunkvuejs_practice"]=self["webpackChunkvuejs_practice"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(4108)}));n=s.O(n)})();
//# sourceMappingURL=app.3b1330bc.js.map