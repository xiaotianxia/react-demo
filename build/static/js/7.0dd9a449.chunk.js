(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[7],{184:function(e,t,n){"use strict";var r=n(55),a=n(185),o=n(332),c=n(42),i="https://api.github.com";function u(e,t){return c.a.get("my_github_app_username")||(window.location.href="/#/login"),new Promise((function(n,c){var u=Object(a.b)(i+e,t);u=u+"?"+Object(a.c)(Object(r.a)({},t,{client_id:"aa18248a5e12eca15a6f",client_secret:"389eac9e777a6ced5127b45193640580174c426d"})),fetch(u).then((function(e){return e.text().then((function(e){(e=JSON.parse(e)).message&&o.a.error(e.message||"\u63a5\u53e3\u51fa\u9519"),n(e)}))})).catch((function(e){c(e)}))}))}t.a={getUser:function(e){return u("/users/{{username}}",e)},getRepos:function(e){return u("/users/{{username}}/repos",e)},getFollowing:function(e){return u("/users/{{username}}/following",e)},getFollowers:function(e){return u("/users/{{username}}/followers",e)},getInfo:function(e){return u("/users/{{username}}",e)},getRepoDetail:function(e){return u("/repos/{{username}}/{{repo}}",e)},getEvents:function(e){return u("/users/{{username}}/events",e)}}},185:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var r=function(e,t){return e.replace(/\{\{(.*?)\}\}/g,(function(e,n){return t[n.trim()]}))},a=function(e){return Object.entries(e).map((function(e){return"".concat(e[0],"=").concat(e[1])})).join("&")},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return e&&e.length>t?"".concat(e.substr(0,t),"..."):e}},187:function(e,t,n){},203:function(e,t,n){"use strict";var r=["second","minute","hour","day","week","month","year"],a=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"],o={},c=function(e,t){o[e]=t},i=function(e){return o[e]||o.en_US},u=[60,60,24,7,365/7/12,12];function l(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function s(e,t){for(var n=e<0?1:0,r=e=Math.abs(e),a=0;e>=u[a]&&a<u.length;a++)e/=u[a];return(e=Math.floor(e))>(0===(a*=2)?9:1)&&(a+=1),t(e,a,r)[n].replace("%s",e.toString())}function p(e,t){return(+(t?l(t):new Date)-+l(e))/1e3}var f=function(e,t,n){return s(p(e,n&&n.relativeDate),i(t))};n.d(t,"a",(function(){return f})),c("en_US",(function(e,t){if(0===t)return["just now","right now"];var n=r[Math.floor(t/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]})),c("zh_CN",(function(e,t){if(0===t)return["\u521a\u521a","\u7247\u523b\u540e"];var n=a[~~(t/2)];return[e+" "+n+"\u524d",e+" "+n+"\u540e"]}))},314:function(e,t,n){"use strict";var r=n(315).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=o(n(0)),a=o(n(316));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n,o,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,l=new Array(u),f=0;f<u;f++)l[f]=arguments[f];return o=this,i=(e=s(t)).call.apply(e,[this].concat(l)),n=!i||"object"!==c(i)&&"function"!==typeof i?p(o):i,d(p(n),"onClick",(function(e){var t=n.props,o=t.text,c=t.onCopy,i=t.children,u=t.options,l=r.default.Children.only(i),s=(0,a.default)(o,u);c&&c(o,s),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(e)})),n}var n,o,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,["text","onCopy","options","children"]),a=r.default.Children.only(t);return r.default.cloneElement(a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&l(n.prototype,o),m&&l(n,m),t}(r.default.PureComponent);t.CopyToClipboard=m,d(m,"defaultProps",{onCopy:void 0,options:void 0})},316:function(e,t,n){"use strict";var r=n(317),a="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var n,o,c,i,u,l,s=!1;t||(t={}),n=t.debug||!1;try{if(c=r(),i=document.createRange(),u=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){n.stopPropagation(),t.format&&(n.preventDefault(),n.clipboardData.clearData(),n.clipboardData.setData(t.format,e))})),document.body.appendChild(l),i.selectNodeContents(l),u.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),s=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:a),window.prompt(o,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(i):u.removeAllRanges()),l&&document.body.removeChild(l),c()}return s}},317:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},318:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var r=n(186),a=n.n(r),o=n(81),c=n(82),i=n(84),u=n(83),l=n(85),s=n(0),p=n.n(s),f=n(86),d=n(329),m=n(181),y=n(324),b=n(332),g=n(203),h=n(314),v=n(185),O=(n(318),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"onCopied",value:function(){b.a.success("copied to clipboard!")}},{key:"render",value:function(){var e=this,t=this.props.detailInfo;return p.a.createElement("div",{className:"detail-card"},p.a.createElement("div",{className:"info-card-bio",title:t.description},Object(v.a)(t.description)||"It says nothing."),t.homepage&&p.a.createElement("div",null,p.a.createElement(f.a,{type:"link"})," \xa0",p.a.createElement("a",{href:t.homepage,target:"_blank",rel:"noopener noreferrer"},Object(v.a)(t.homepage,30))),t.clone_url&&p.a.createElement("div",null,p.a.createElement(h.CopyToClipboard,{text:t.clone_url,onCopy:function(){return e.onCopied()}},p.a.createElement("div",null,p.a.createElement("a",{href:"void:0"},Object(v.a)(t.clone_url,30)),"\xa0",p.a.createElement(f.a,{type:"copy"})))),p.a.createElement("div",{className:"detail-card-tags"},p.a.createElement(y.a,{color:"#2db7f5"},p.a.createElement(f.a,{type:"code"})," ",t.language),p.a.createElement(y.a,{color:"#87d068"},p.a.createElement(f.a,{type:"eye"})," ",t.watchers_count),p.a.createElement(y.a,{color:"#108ee9"},p.a.createElement(f.a,{type:"star"})," ",t.stargazers_count),p.a.createElement(y.a,{color:"#f50"},p.a.createElement(f.a,{type:"fork"})," ",t.forks_count)),p.a.createElement("div",null,"created: ",Object(g.a)(t.created_at)),p.a.createElement("div",null,"updated: ",Object(g.a)(t.updated_at)))}}]),t}(p.a.Component)),E=n(184),w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={popoverContent:p.a.createElement(f.a,{type:"loading"})},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"onMouseOver",value:function(e,t,n){var r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!n){o.next=5;break}return o.next=3,a.a.awrap(E.a.getRepoDetail({username:e,repo:t}));case 3:r=o.sent,this.setState({popoverContent:p.a.createElement(O,{detailInfo:r})});case 5:case"end":return o.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.description,r=e.language,a=e.html_url,o=e.watchers_count,c=e.stargazers_count,i=e.forks_count,u=e.owner;return p.a.createElement("li",{className:"item"},p.a.createElement(d.a,{title:t},p.a.createElement(m.a,{content:this.state.popoverContent,title:t,mouseEnterDelay:.5,onVisibleChange:this.onMouseOver.bind(this,(u||{}).login,t)},p.a.createElement("p",{className:"description",title:n},p.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},Object(v.a)(n))),p.a.createElement(y.a,{color:"#2db7f5"},p.a.createElement(f.a,{type:"code"})," ",r),p.a.createElement(y.a,{color:"#87d068"},p.a.createElement(f.a,{type:"eye"})," ",o),p.a.createElement(y.a,{color:"#108ee9"},p.a.createElement(f.a,{type:"star"})," ",c),p.a.createElement(y.a,{color:"#f50"},p.a.createElement(f.a,{type:"fork"})," ",i))))}}]),t}(p.a.Component),j=n(36),C=(n(187),n(42));n.d(t,"default",(function(){return _}));var _=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){n.getList()},n.state={list:[]},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"getList",value:function(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(E.a.getRepos({username:C.a.get("my_github_app_username")}));case 2:e=t.sent,this.setState({list:this.state.list.concat(e)});case 4:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.list,t=null;return t=e.length?p.a.createElement("ul",{className:"list repos-list"},e.map((function(e){return p.a.createElement(w,Object.assign({key:e.id},e))}))):p.a.createElement(j.a,{image:j.a.PRESENTED_IMAGE_SIMPLE}),p.a.createElement("div",{className:"repos"},t)}}]),t}(p.a.Component)}}]);
//# sourceMappingURL=7.0dd9a449.chunk.js.map