!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports.Select=t(require("React"),require("ReactDOM")):e.Select=t(e.React,e.ReactDOM)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(10);var c=n(1),u=r(c),p=n(11),f=r(p),d=n(4),h=r(d),b=n(3),y=r(b),v=n(7),g=r(v),m=n(2),x=r(m),w=function(e){function t(e){i(this,t);var n=a(this,Object.getPrototypeOf(t).call(this)),r=e.value||e.defaultValue||"";return n._handleSelect=n._handleSelect.bind(n),n._getCurrentText=n._getCurrentText.bind(n),n._handleDocClick=n._handleDocClick.bind(n),n._handleClick=n._handleClick.bind(n),n.state={open:!1,value:r,text:n._getCurrentText(e.children,r)||e.placeholder},n}return l(t,e),s(t,[{key:"componentWillMount",value:function(){window.addEventListener("click",this._handleDocClick,!1)}},{key:"componentWillReceiveProps",value:function(e){if("value"in e&&e.value){var t=e.value,n=this._getCurrentText(e.children,t)||e.placeholder||this.props.placeholder;this.setState({text:n,value:t})}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this._handleDocClick)}},{key:"_getCurrentText",value:function(e,t){var n=this;if(void 0===t)return null;var r=null;return u["default"].Children.forEach(e,function(e){if(e.type===y["default"]){var o=n._getCurrentText(e.props.children,t);null!==o&&(r=o)}else e.props.value===t&&(r=e.props.text||e.props.children)}),r}},{key:"_handleSelect",value:function(e){if(e.value!==this.state.value){var t=e.value;this.setState({open:!1,value:t,text:e.children}),this.props.onChange&&this.props.onChange(t)}}},{key:"_handleDocClick",value:function(e){try{f["default"].findDOMNode(this).contains(e.target)||this.setState({open:!1})}catch(e){}}},{key:"_handleClick",value:function(){var e=this.props;e.disabled||e.readOnly||(this.state.open?this.setState({open:!1}):u["default"].Children.count(e.children)&&this.setState({open:!0}))}},{key:"render",value:function(){var e=this.state,t=this.props,n=(0,x["default"])(o({disabled:t.disabled,open:e.open},t.className,!0));return u["default"].createElement("div",{className:n},u["default"].createElement("input",{name:this.props.name,type:"hidden",value:e.value}),u["default"].createElement("div",{className:"select-body",onClick:this._handleClick},e.text),u["default"].createElement(g["default"],{key:"list",maxHeight:t.maxHeight,onSelect:this._handleSelect,show:e.open,value:e.value},t.children))}}]),t}(u["default"].Component);w.displayName="Select",w.propTypes={children:u["default"].PropTypes.node,className:u["default"].PropTypes.string,defaultValue:u["default"].PropTypes.string,disabled:u["default"].PropTypes.bool,maxHeight:u["default"].PropTypes.number,name:u["default"].PropTypes.string,onChange:u["default"].PropTypes.func,placeholder:u["default"].PropTypes.any,readOnly:u["default"].PropTypes.bool,value:u["default"].PropTypes.string},w.defaultProps={maxHeight:200,children:null,disabled:!1,readOnly:!1,placeholder:"",className:"react-as-select",onChange:function(){}},w.Group=y["default"],w.Option=h["default"],e.exports=w},function(t,n){t.exports=e},function(e,t,n){var r,o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r="undefined"==typeof n?"undefined":i(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)l.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}var l={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=a:"object"===i(n(5))&&n(5)?(r=[],o=function(){return a}.apply(t,r),!(void 0!==o&&(e.exports=o))):window.classNames=a}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),u=r(c),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).call(this))}return a(t,e),s(t,[{key:"render",value:function(){return u["default"].createElement("li",{className:"select-group"},u["default"].createElement("div",{className:"select-group-title"},this.props.title),u["default"].createElement("ul",l({className:"select-group-list"},this.props)))}}]),t}(u["default"].Component);p.displayName="Group",p.propTypes={title:u["default"].PropTypes.string.isRequired},p.defaultProps={title:""},e.exports=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),c=r(s),u=n(2),p=r(u),f=function(e){function t(){o(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e._handleMouseEnter=e._handleMouseEnter.bind(e),e._handleClick=e._handleClick.bind(e),e}return a(t,e),l(t,[{key:"_handleMouseEnter",value:function(){this.props.disabled||this.props.onActive(this)}},{key:"_handleClick",value:function(){this.props.disabled||this.props.onSelect(this)}},{key:"render",value:function(){c["default"].Children.toArray(this.props.children);var e=this.props,t=(0,p["default"])({selected:e.selected,active:e.active,disabled:e.disabled,"select-option":1});return c["default"].createElement("li",{className:t,onClick:this._handleClick,onMouseEnter:this._handleMouseEnter},e.children)}}]),t}(c["default"].Component);f.displayName="Option",f.propTypes={active:c["default"].PropTypes.bool,children:c["default"].PropTypes.string.isRequired,disabled:c["default"].PropTypes.bool,onActive:c["default"].PropTypes.func,onSelect:c["default"].PropTypes.func,selected:c["default"].PropTypes.bool,value:c["default"].PropTypes.string.isRequired},f.defaultProps={active:!1,selected:!1,disabled:!1,onSelect:function(){},onActive:function(){}},e.exports=f},function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),u=r(c),p=n(3),f=r(p),d=n(4),h=r(d),b=function(e){function t(){o(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.state={active:!1},e._handleOptionSelect=e._handleOptionSelect.bind(e),e._handleOptionActive=e._handleOptionActive.bind(e),e._getOptions=e._getOptions.bind(e),e}return a(t,e),s(t,[{key:"_handleOptionActive",value:function(e){this.setState({active:e.props.value})}},{key:"_handleOptionSelect",value:function(e){this.props.onSelect(e.props)}},{key:"_getOptions",value:function(e){var t=this;e=e||this.props.children;var n=[];return u["default"].Children.forEach(e,function(e){if(e.type===f["default"]){var r=t._getOptions(e.props.children);r.length&&n.push(u["default"].createElement(f["default"],l({key:e.props.title},e.props),r))}else if(e.type===h["default"]){var o=e.props.value;n.push(u["default"].createElement(h["default"],l({},e.props,{active:e.props.value===t.state.active,key:o,onActive:t._handleOptionActive,onSelect:t._handleOptionSelect,ref:"option-"+o,selected:e.props.value===t.props.value})))}}),n}},{key:"render",value:function(){return u["default"].createElement("div",null,this.props.show&&u["default"].createElement("ul",{className:"select-list",style:{maxHeight:this.props.maxHeight}},this._getOptions()))}}]),t}(u["default"].Component);b.displayName="List",b.propTypes={children:u["default"].PropTypes.node,maxHeight:u["default"].PropTypes.number,onSelect:u["default"].PropTypes.func,show:u["default"].PropTypes.bool,value:u["default"].PropTypes.any},b.defaultProps={maxHeight:200,children:null,onSelect:function(){},show:!1},e.exports=b},function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".react-as-select{position:relative;display:inline-block;vertical-align:middle;font-family:Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\\\5B8B\\4F53,sans-serif}.react-as-select.open .select-body:after{-webkit-transform:rotate(0);transform:rotate(0)}.react-as-select.open .select-body:before{background-color:#343a41}.react-as-select.disabled .select-body{background-color:#aaa}.react-as-select .select-list{position:absolute;top:40px;left:0;right:0;padding:0;margin:0;line-height:40px;font-size:14px;color:#343a41;background-color:#fff;overflow:auto;z-index:9}.react-as-select .select-list .select-option{padding:0 15px;cursor:pointer;list-style:none}.react-as-select .select-list .select-option.active,.react-as-select .select-list .select-option.selected{background-color:#24afb2;color:#fff}.react-as-select .select-list .select-option.selected{cursor:auto}.react-as-select .select-list .select-option.disabled{color:#aaa;cursor:not-allowed}.react-as-select .select-list .select-option.disabled.active{background-color:#fff}.react-as-select .select-group .select-group-list{padding:0}.react-as-select .select-group .select-group-title{padding-left:15px;color:#343a41;font-weight:bolder}.react-as-select .select-group .select-option{padding-left:30px}.react-as-select .select-body{display:inline-block;position:relative;width:230px;height:40px;line-height:40px;font-size:14px;color:#fff;background-color:#55606e;padding:0 15px;box-sizing:border-box;overflow:hidden;cursor:pointer}.react-as-select .select-body:after,.react-as-select .select-body:before{content:'';position:absolute;top:0;right:0;width:40px;height:40px;-webkit-transition:all .2s ease-in;transition:all .2s ease-in}.react-as-select .select-body:after{background-position:50%;background-repeat:no-repeat;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAKCAYAAABWiWWfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MzE4RTFGOUNGNDcxMUU1OEIxN0I3Nzc5RjhENzQ0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MzE4RTFGQUNGNDcxMUU1OEIxN0I3Nzc5RjhENzQ0MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzMThFMUY3Q0Y0NzExRTU4QjE3Qjc3NzlGOEQ3NDQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzMThFMUY4Q0Y0NzExRTU4QjE3Qjc3NzlGOEQ3NDQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nOhx4wAAAL9JREFUeNpi+P//PwMBHADEV4E4iJBafJJ8QDzvPyqYDxUnyTA7IL7/Hzt4AMT2xBjGDsSdQPwXzYAXaHyQfDdUPVbD9ID4Ipqm70BcBMTMQFwA5SODS0Csj2wYExCXAfEPNIXngFgbzeVaUHFkANJXDjIHpGAXmuQfIG4HYjYc4ckKxK1QdchgD0hyHZLAHSC2JiK5gLAVVD0MrAcJhkM5s4GYl0iDYJgHiGdC9UeCBLiB2JdEQ9CxD8gcgAADAP16ey+8izXsAAAAAElFTkSuQmCC');-webkit-transform:rotate(180deg);transform:rotate(180deg)}",""])},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],l=o[2],s=o[3],c={css:a,media:l,sourceMap:s};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=y(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=g++;n=v||(v=l(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=f.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),r=p.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var l=n[a],s=d[l.id];s.refs--,i.push(s)}if(e){var c=o(e);r(c,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete d[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.id,r,""]]);n(9)(r,{});r.locals&&(e.exports=r.locals)},function(e,n){e.exports=t}])});
//# sourceMappingURL=index.js.map