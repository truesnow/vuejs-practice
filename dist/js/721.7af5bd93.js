"use strict";(self["webpackChunkvuejs_practice"]=self["webpackChunkvuejs_practice"]||[]).push([[721],{7721:function(t,a,s){s.r(a),s.d(a,{default:function(){return o}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"blog-container"},[a("div",{staticClass:"blog-pages"},[a("router-view"),a("div",{staticClass:"col-md-3 main-col pull-left"},[a("div",{staticClass:"panel panel-default corner-radius"},[a("div",{staticClass:"panel-body text-center topic-author-box blog-info"},[a("div",{staticClass:"image blog-cover"},[a("router-link",{attrs:{to:`/${t.userName}`}},[a("img",{staticClass:"avatar-112 avatar img-thumbnail",attrs:{src:t.userAvatar}})])],1),a("div",{staticClass:"blog-name"},[a("h4",[a("router-link",{attrs:{to:`/${t.userName}`}},[t._v(t._s(t.userName)+" 的专栏")])],1)]),a("hr"),a("router-link",{attrs:{to:`/${t.userName}`}},[a("li",{staticClass:"list-group-item"},[a("i",{staticClass:"text-md fa fa-list-ul"}),t._v(" 专栏文章（"+t._s(t.articleNum)+"）")])])],1)])])],1)])},r=[],i=s(629),l={name:"Column",data(){return{userName:"",userAvatar:"",articles:[]}},computed:{...(0,i.rn)(["user"]),articleNum(){return this.articles.length}},beforeRouteEnter(t,a,s){s((a=>{a.setDataByParams(t.params)}))},watch:{$route(t){this.setDataByParams(t.params)}},methods:{setDataByParams(t){const a=t.user,s=t.articleId,e=this.$store.getters.getArticleById(s);if(e)this.userName=e.uname,this.userAvatar=e.uavatar,this.articles=this.$store.getters.getArticlesByUid(null,e.uname);else if(a){const t=this.$store.getters.getArticlesByUid(null,a);t.length?(this.userName=t[0].uname,this.userAvatar=t[0].uavatar):this.user&&(this.userName=this.user.name,this.userAvatar=this.user.avatar),this.articles=t}}}},u=l,c=s(1001),n=(0,c.Z)(u,e,r,!1,null,"f5c71646",null),o=n.exports}}]);
//# sourceMappingURL=721.7af5bd93.js.map