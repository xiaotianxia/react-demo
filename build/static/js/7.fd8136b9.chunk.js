(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[7],{176:function(e,t,n){"use strict";var a=n(179),r=n(177),o="https://api.github.com";function c(e,t){return new Promise((function(n,c){var i=Object(r.b)(o+e,t);i=i+"?"+Object(r.c)(Object(a.a)({},t,{client_id:"aa18248a5e12eca15a6f",client_secret:"389eac9e777a6ced5127b45193640580174c426d"})),fetch(i).then((function(e){return e.text().then((function(e){n(JSON.parse(e))}))})).catch((function(e){c(e)}))}))}t.a={getUser:function(e){return c("/users/{{username}}",e)},getRepos:function(e){return c("/users/{{username}}/repos",e)},getFollowing:function(e){return c("/users/{{username}}/following",e)},getFollowers:function(e){return c("/users/{{username}}/followers",e)},getInfo:function(e){return c("/users/{{username}}",e)},getRepoDetail:function(e){return c("/repos/{{username}}/{{repo}}",e)},getEvents:function(e){return c("/users/{{username}}/events",e)}}},177:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var a=function(e,t){return e.replace(/\{\{(.*?)\}\}/g,(function(e,n){return t[n.trim()]}))},r=function(e){return Object.entries(e).map((function(e){return"".concat(e[0],"=").concat(e[1])})).join("&")},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return e&&e.length>t?"".concat(e.substr(0,t),"..."):e}},180:function(e,t,n){},196:function(e,t,n){},198:function(e,t,n){"use strict";var a=n(178),r=n.n(a),o=n(179),c=n(72),i=n(73),s=n(75),l=n(74),u=n(76),f=n(0),p=n.n(f),m=n(77),h=n(322),g=n(173),b=n(8),d=n.n(b),y=n(170);function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},_=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=w(this,S(t).apply(this,arguments))).state={scale:1,mounted:!1,isImgExist:!0},e.setScale=function(){if(e.avatarChildren&&e.avatarNode){var t=e.avatarChildren.offsetWidth,n=e.avatarNode.offsetWidth;0===t||0===n||e.lastChildrenWidth===t&&e.lastNodeWidth===n||(e.lastChildrenWidth=t,e.lastNodeWidth=n,e.setState({scale:n-8<t?(n-8)/t:1}))}},e.handleImgLoadError=function(){var t=e.props.onError;!1!==(t?t():void 0)&&e.setState({isImgExist:!1})},e.renderAvatar=function(t){var n,a,r=t.getPrefixCls,o=e.props,c=o.prefixCls,i=o.shape,s=o.size,l=o.src,u=o.srcSet,p=o.icon,h=o.className,g=o.alt,b=C(o,["prefixCls","shape","size","src","srcSet","icon","className","alt"]),y=e.state,v=y.isImgExist,j=y.scale,w=(y.mounted,r("avatar",c)),S=d()((O(n={},"".concat(w,"-lg"),"large"===s),O(n,"".concat(w,"-sm"),"small"===s),n)),P=d()(w,h,S,(O(a={},"".concat(w,"-").concat(i),i),O(a,"".concat(w,"-image"),l&&v),O(a,"".concat(w,"-icon"),p),a)),_="number"===typeof s?{width:s,height:s,lineHeight:"".concat(s,"px"),fontSize:p?s/2:18}:{},k=e.props.children;if(l&&v)k=f.createElement("img",{src:l,srcSet:u,onError:e.handleImgLoadError,alt:g});else if(p)k="string"===typeof p?f.createElement(m.a,{type:p}):p;else{if(e.avatarChildren||1!==j){var N="scale(".concat(j,") translateX(-50%)"),x={msTransform:N,WebkitTransform:N,transform:N},I="number"===typeof s?{lineHeight:"".concat(s,"px")}:{};k=f.createElement("span",{className:"".concat(w,"-string"),ref:function(t){return e.avatarChildren=t},style:E(E({},I),x)},k)}else{k=f.createElement("span",{className:"".concat(w,"-string"),style:{opacity:0},ref:function(t){return e.avatarChildren=t}},k)}}return f.createElement("span",E({},b,{style:E(E({},_),b.style),className:P,ref:function(t){return e.avatarNode=t}}),k)},e}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.setScale(),this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(e){this.setScale(),e.src!==this.props.src&&this.setState({isImgExist:!0,scale:1})}},{key:"render",value:function(){return f.createElement(y.a,null,this.renderAvatar)}}])&&j(n.prototype,a),r&&j(n,r),t}(f.Component);_.defaultProps={shape:"circle",size:"default"};var k=n(317),N=(n(196),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.userInfo;return console.log(e),p.a.createElement("div",{className:"info-card"},p.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},p.a.createElement(_,{src:e.avatar_url})),p.a.createElement("span",{className:"info-card-bio"},e.bio||"He/She says nothing."),p.a.createElement("div",{className:"info-card-tags"},p.a.createElement(k.a,{title:"followers",color:"#2db7f5"},p.a.createElement(m.a,{type:"user"}),"\xa0",e.followers||0),p.a.createElement(k.a,{title:"following",color:"#2db7f5"},p.a.createElement(m.a,{type:"user-add"}),"\xa0",e.following||0)),e.blog&&p.a.createElement(p.a.Fragment,null,p.a.createElement(m.a,{type:"dribbble"})," \xa0",p.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},e.blog)),e.email&&p.a.createElement("p",null,p.a.createElement(m.a,{type:"global"}),"\xa0",e.email),e.location&&p.a.createElement("p",null,p.a.createElement(m.a,{type:"environment",theme:"filled"}),"\xa0",e.location),e.company&&p.a.createElement("p",null,p.a.createElement(m.a,{type:"bank"}),"\xa0",e.company))}}]),t}(p.a.Component)),x=n(176),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={popoverContent:p.a.createElement(m.a,{type:"loading"})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onMouseOver",value:function(e,t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log(t),!t){a.next=6;break}return a.next=4,r.a.awrap(x.a.getInfo({username:e}));case 4:n=a.sent,this.setState({popoverContent:p.a.createElement(N,{userInfo:n})});case 6:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props,t=e.login,n=e.avatar_url,a=e.html_url;return p.a.createElement("li",{className:"item"},p.a.createElement(h.a,{bordered:!1},p.a.createElement(g.a,{content:this.state.popoverContent,title:t,mouseEnterDelay:.5,onVisibleChange:this.onMouseOver.bind(this,t)},p.a.createElement(h.a.Meta,{avatar:p.a.createElement(_,{src:n}),title:t})),p.a.createElement("p",{className:"description"},p.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"visit"))))}}]),t}(p.a.Component),M=n(34),W=n(172),D=(n(180),n(78));n.d(t,"a",(function(){return L}));var L=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,list:[],pageParam:{page:1,per_page:10}},n.componentDidMount=function(){n.getList()},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getList",value:function(){var e,t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return this.setState({loading:!0,list:[]}),e=this.props.listMethod,n.next=4,r.a.awrap(e(Object(o.a)({},this.state.pageParam,{username:D.a.get("my_github_app_username")})));case 4:t=n.sent,this.setState({loading:!1,list:t});case 6:case"end":return n.stop()}}),null,this)}},{key:"onPageChange",value:function(e){"pre"===e?this.setState({pageParam:Object(o.a)({},this.state.pageParam,{page:this.state.pageParam.page-1})}):this.setState({pageParam:Object(o.a)({},this.state.pageParam,{page:this.state.pageParam.page+1})}),this.getList()}},{key:"render",value:function(){var e=this.state.list,t=p.a.createElement("div",null,e.length>0&&p.a.createElement("ul",{className:"list following-list"},e.map((function(e){return p.a.createElement(I,Object.assign({key:e.id},e))}))),0===e.length&&p.a.createElement(M.a,{image:M.a.PRESENTED_IMAGE_SIMPLE}),p.a.createElement("div",{className:"list-page"},p.a.createElement(W.a.Group,null,p.a.createElement(W.a,{onClick:this.onPageChange.bind(this,"pre"),disabled:this.state.pageParam.page<=0},p.a.createElement(m.a,{type:"arrow-left"})),p.a.createElement("span",{style:{fontSize:"10px"}},"\xa0",this.state.pageParam.page,"\xa0"),p.a.createElement(W.a,{onClick:this.onPageChange.bind(this,"next"),disabled:!e.length},p.a.createElement(m.a,{type:"arrow-right"})))));return p.a.createElement("div",{className:"repos"},this.state.loading?p.a.createElement(m.a,{type:"loading"}):t)}}]),t}(p.a.Component)},320:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(72),r=n(73),o=n(75),c=n(74),i=n(76),s=n(0),l=n.n(s),u=n(198),f=n(176),p=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"following"},l.a.createElement(u.a,{listMethod:f.a.getFollowing}))}}]),t}(l.a.Component)}}]);
//# sourceMappingURL=7.fd8136b9.chunk.js.map