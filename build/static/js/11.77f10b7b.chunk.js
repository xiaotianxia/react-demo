(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[11],{184:function(e,t,n){"use strict";var r=n(55),a=n(185),s=n(332),c=n(42),o="https://api.github.com";function u(e,t){return c.a.get("my_github_app_username")||(window.location.href="#/login"),new Promise((function(n,c){var u=Object(a.b)(o+e,t);u=u+"?"+Object(a.c)(Object(r.a)({},t,{client_id:"aa18248a5e12eca15a6f",client_secret:"389eac9e777a6ced5127b45193640580174c426d"})),fetch(u).then((function(e){return e.text().then((function(e){(e=JSON.parse(e)).message&&s.a.error(e.message||"\u63a5\u53e3\u51fa\u9519"),n(e)}))})).catch((function(e){c(e)}))}))}t.a={getUser:function(e){return u("/users/{{username}}",e)},getRepos:function(e){return u("/users/{{username}}/repos",e)},getFollowing:function(e){return u("/users/{{username}}/following",e)},getFollowers:function(e){return u("/users/{{username}}/followers",e)},getInfo:function(e){return u("/users/{{username}}",e)},getRepoDetail:function(e){return u("/repos/{{username}}/{{repo}}",e)},getEvents:function(e){return u("/users/{{username}}/events",e)}}},185:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s}));var r=function(e,t){return e.replace(/\{\{(.*?)\}\}/g,(function(e,n){return t[n.trim()]}))},a=function(e){return Object.entries(e).map((function(e){return"".concat(e[0],"=").concat(e[1])})).join("&")},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return e&&e.length>t?"".concat(e.substr(0,t),"..."):e}},213:function(e,t,n){},326:function(e,t,n){"use strict";n.r(t);var r=n(186),a=n.n(r),s=n(81),c=n(82),o=n(84),u=n(83),i=n(85),l=n(0),m=n.n(l),f=n(330),p=n(331),g=n(86),h=n(180),d=(n(213),n(184)),b=n(20),v=n(50),j=n(94),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={loading:!1},n.handleSubmit=function(e){e.preventDefault(),n.props.form.validateFields((function(e,t){e||(n.setState({loading:!0}),n.getUser(t.username))}))},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"getUser",value:function(e){var t;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(d.a.getUser({username:e}));case 2:t=n.sent,this.setState({loading:!1}),t.id&&this.props.dispatch(Object(j.a)({username:t.login}));case 5:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return this.props.logined?m.a.createElement(b.a,{to:"repos"}):m.a.createElement("div",{className:"login"},m.a.createElement(f.a,{onSubmit:this.handleSubmit,className:"login-form"},m.a.createElement(f.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(m.a.createElement(p.a,{prefix:m.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username",allowClear:!0}))),m.a.createElement(f.a.Item,{style:{textAlign:"center"}},m.a.createElement(h.a,{type:"primary",loading:this.state.loading,htmlType:"submit"},"Log in"))),m.a.createElement("div",{className:"login-mask"}))}}]),t}(m.a.Component),y=f.a.create({name:"login"})(w),O=Object(b.f)(y);t.default=Object(v.b)((function(e){return e.loginUserChange}))(O)}}]);
//# sourceMappingURL=11.77f10b7b.chunk.js.map