(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p=this||self;function aa(a){a=a.s;const b=encodeURIComponent;let c="";a.platform&&(c+="&uap="+b(a.platform));a.platformVersion&&(c+="&uapv="+b(a.platformVersion));a.uaFullVersion&&(c+="&uafv="+b(a.uaFullVersion));a.architecture&&(c+="&uaa="+b(a.architecture));a.model&&(c+="&uam="+b(a.model));a.bitness&&(c+="&uab="+b(a.bitness));a.fullVersionList&&(c+="&uafvl="+b(a.fullVersionList.map(d=>b(d.brand)+";"+b(d.version)).join("|")));"undefined"!==typeof a.wow64&&(c+="&uaw="+Number(a.wow64));return c}
function ba(a,b){return a.h?a.m.slice(0,a.h.index)+b+a.m.slice(a.h.index):a.m+b}function da(a){let b="&act=1&ri=1";a.i&&a.s&&(b+=aa(a));return ba(a,b)}function ea(a,b){return a.i&&a.j||a.o?1==b?a.i?a.j:ba(a,"&dct=1"):2==b?ba(a,"&ri=2"):ba(a,"&ri=16"):a.m}
var fa=class{constructor({url:a,W:b}){this.m=a;this.s=b;b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){let c;try{c=decodeURIComponent(this.h[1])}catch(d){c=null}this.j=c}}};var q=class{constructor(a,b){this.h=b===ha?a:""}toString(){return this.h.toString()}};q.prototype.i=!0;var ia;try{new URL("s://g"),ia=!0}catch(a){ia=!1}var ka=ia,ha={},la=new q("about:invalid#zClosurez",ha);function ma(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let f=0;f<c;f++)if(f in d&&b.call(void 0,d[f],f,a)){b=f;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};var na,oa;a:{for(var pa=["CLOSURE_FLAGS"],qa=p,ra=0;ra<pa.length;ra++)if(qa=qa[pa[ra]],null==qa){oa=null;break a}oa=qa}var sa=oa&&oa[610401301];na=null!=sa?sa:!1;var r;const ta=p.navigator;r=ta?ta.userAgentData||null:null;function ua(a){return na?r?r.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function u(a){var b;a:{if(b=p.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function v(){return na?!!r&&0<r.brands.length:!1}function va(){return v()?ua("Chromium"):(u("Chrome")||u("CriOS"))&&!(v()?0:u("Edge"))||u("Silk")};function wa(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function xa(a,b){if(!(b instanceof q||b instanceof q)){b="object"==typeof b&&b.i?b.h.toString():String(b);b:{var c=b;if(ka){try{var d=new URL(c)}catch(f){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(f){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"===c&&(b="about:invalid#zClosurez");b=new q(b,ha)}a.href=b instanceof q&&b.constructor===q?b.h:"type_error:SafeUrl"};/*

 SPDX-License-Identifier: Apache-2.0
*/
class ya{constructor(a){this.da=a}}function w(a){return new ya(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const za=new ya(a=>/^[^:]*([/?#]|$)/.test(a));var Aa=w("http"),Ba=w("https"),Ca=w("ftp"),Da=w("mailto"),Ea=w("intent"),Fa=w("market"),Ha=w("itms"),Ia=w("itms-appss");const Ja=[w("data"),Aa,Ba,Da,Ca,za];function Ka(a,b=Ja){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof ya&&d.da(a))return new q(a,ha)}}function La(a,b=Ja){return Ka(a,b)||la};function Ma(){return u("iPhone")&&!u("iPod")&&!u("iPad")};function Na(a){Na[" "](a);return a}Na[" "]=function(){};var Oa=Ma(),Pa=u("iPad");var Qa=Ma()||u("iPod"),Ra=u("iPad");!u("Android")||va();va();u("Safari")&&(va()||(v()?0:u("Coast"))||(v()?0:u("Opera"))||(v()?0:u("Edge"))||(v()?ua("Microsoft Edge"):u("Edg/"))||v()&&ua("Opera"));var Sa={},Ta=null;const y=Symbol();function z(a,b){if(y)return a[y]|=b;if(void 0!==a.h)return a.h|=b;Object.defineProperties(a,{h:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function Ua(a){y?a[y]&&(a[y]&=-17):void 0!==a.h&&(a.h&=-17)}function A(a){let b;y?b=a[y]:b=a.h;return null==b?0:b}function B(a,b){y?a[y]=b:void 0!==a.h?a.h=b:Object.defineProperties(a,{h:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}function Va(a){z(a,1);return a}function C(a){return!!(A(a)&2)}
function D(a){z(a,18);return a}function Wa(a){z(a,16);return a}function Xa(a,b){B(b,(a|0)&-51)}function Ya(a,b){B(b,(a|18)&-41)};var Za={};function $a(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let ab;var bb=Object.freeze(B([],23));class cb{constructor(a){this.R=0;this.P=a}next(){return this.R<this.P.length?{done:!1,value:this.P[this.R++]}:{done:!0,value:void 0}}[Symbol.iterator](){return this}}function db(a){var b=a.length;(b=b?a[b-1]:void 0)&&$a(b)?b.g=1:a.push({g:1})};function eb(a,b,c,d){let f=!1;if(null!=a&&"object"===typeof a&&!(f=Array.isArray(a))&&a.I===Za)return a;if(!f)return c?d&2?(a=b[fb])?b=a:(a=new b,D(a.l),b=b[fb]=a):b=new b:b=void 0,b;gb(a,d);return new b(a)}function gb(a,b){const c=A(a);let d=c;0===d&&(d|=b&16);d|=b&2;d!==c&&B(a,d)}const fb=Symbol();function ib(a){return a}function jb(a,b,c){return"string"===typeof a?a:c?"":void 0};function pb(a,b=qb){const c=Array.from(a.h.keys());for(let d=0;d<c.length;d++){const f=c[d],e=a.h.get(c[d]);c[d]=[b(f),b(e)]}return c}function rb(a,b=qb){const c=[];a=a.h.entries();for(var d;!(d=a.next()).done;)d=d.value,d[0]=b(d[0]),d[1]=b(d[1]),c.push(d);return c}
var E=class{constructor(a,b,c=ib,d=ib){let f=A(a);f|=32;B(a,f);this.j=f;this.i=b;this.m=c||ib;this.o=this.i?sb:d||ib;const e=new Map;this.h=e;for(let g=0;g<a.length;g++){const h=a[g],l=c(h[0],!1,!0);let k=h[1];b||(k=d(h[1],!1,!0,void 0,void 0,f));null!=l&&e.set(l,k)}this.size=e.size}entries(){const a=Array.from(this.h.keys());for(let b=0;b<a.length;b++){const c=a[b];a[b]=[c,this.get(c)]}return new cb(a)}keys(){return this.h.keys()}values(){const a=Array.from(this.h.keys());for(let b=0;b<a.length;b++)a[b]=
this.get(a[b]);return new cb(a)}forEach(a,b){this.h.forEach((c,d)=>{a.call(b,this.get(d),d,this)})}set(a,b){if(this.j&2)throw Error("Cannot mutate an immutable Map");const c=this.h;a=this.m(a,!0,!1);if(null==a)return this;if(null==b)return c.delete(a),this;c.set(a,this.o(b,!0,!0,this.i,!1,this.j));this.size=c.size;return this}get(a){a=this.m(a,!1,!1);const b=this.h,c=b.get(a);if(void 0!==c){var d=this.j,f=this.i;return f?(Array.isArray(c)&&d&16&&Wa(c),d=this.o(c,!1,!0,f,this.s,d),d!==c&&b.set(a,d),
d):c}}has(a){return this.i?null!=this.get(a):this.h.has(a)}[Symbol.iterator](){return this.entries()}};function sb(a,b,c,d,f,e){a=eb(a,d,c,e);f&&(a=tb(a));return a}function qb(a){return a};function ub(a){const b=a.i+a.v;return a.u||(a.u=a.l[b]={})}function F(a,b,c){return-1===b?null:b>=a.i?a.u?a.u[b]:void 0:c&&a.u&&(c=a.u[b],null!=c)?c:a.l[b+a.v]}function G(a,b,c,d){if(A(a.l)&2)throw Error();return H(a,b,c,d)}function H(a,b,c,d){a.j&&(a.j=void 0);if(b>=a.i||d)return ub(a)[b]=c,a;a.l[b+a.v]=c;(c=a.u)&&b in c&&delete c[b];return a}
function vb(a,b,c,d){let f=F(a,b);Array.isArray(f)||(f=bb);const e=A(f);e&1||Va(f);if(d)e&2||D(f),c&1||Object.freeze(f);else{d=!(c&2);const g=e&2;c&1||!g?d&&e&16&&!g&&Ua(f):(f=Va(Array.prototype.slice.call(f)),H(a,b,f))}return f}function I(a,b){a=F(a,b);return K(null==a?a:!!a,!1)}let wb;
function xb(a,b,c,d,f){const e=C(a.l);a:{var g=b;b=!1;if(null==g){if(e){a=wb||(wb=new E(D([])));break a}g=[]}else if(g.constructor===E){if(0==(g.j&2)||e){a=g;break a}g=rb(g)}else Array.isArray(g)?b=C(g):g=[];if(e){if(!g.length){a=wb||(wb=new E(D([])));break a}b||(b=!0,D(g))}else if(b){b=!1;g=Array.prototype.slice.call(g);for(let h=0;h<g.length;h++){const l=g[h]=Array.prototype.slice.call(g[h]);Array.isArray(l[1])&&(l[1]=D(l[1]))}}b||(A(g)&32?Ua(g):A(a.l)&16&&Wa(g));f=new E(g,d,jb,f);H(a,c,f,!1);a=
f}if(null==a)return a;!e&&d&&(a.s=!0);return a}function yb(a,b){return xb(a,F(a,b),b,void 0,jb)}function L(a,b,c){const d=F(a,c,!1);b=eb(d,b,!1,A(a.l));b!==d&&null!=b&&H(a,c,b,!1);return b}function M(a,b,c){b=L(a,b,c);if(null==b)return b;if(!C(a.l)){const d=tb(b);d!==b&&(b=d,H(a,c,b,!1))}return b}
function zb(a){var b=A(a.l),c=!!(b&2);var d=c?1:2;var f=Ab,e=!!(b&2);a.h||(a.h={});var g=a.h[7],h=vb(a,7,3,e);if(g)3===d||e||((e=Object.isFrozen(g),1!==d||e)?2===d&&e&&(g=Array.prototype.slice.call(g),a.h[7]=g):Object.freeze(g)),d=g;else{var l=h;g=[];e=!!(b&2);h=!!(A(l)&2);const t=l;!e&&h&&(l=Array.prototype.slice.call(l));var k=b|(h?2:0);b=h;let x=0;for(;x<l.length;x++){var n=l[x];var m=f;Array.isArray(n)?(gb(n,k),n=new m(n)):n=void 0;void 0!==n&&(b||(b=!!(2&A(n.l))),g.push(n))}a.h[7]=g;k=A(l);f=
k|33;f=b?f&-9:f|8;k!=f&&(b=l,Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),B(b,f),l=b);t!==l&&H(a,7,l);(e||1===d&&h)&&D(g);(e||1===d)&&Object.freeze(g);d=g}a=vb(a,7,3,c);if(!(c||A(a)&8)){for(c=0;c<d.length;c++)g=d[c],e=tb(g),g!==e&&(d[c]=e,a[c]=e.l);z(a,8)}return d}
function Bb(a,b,c,d){if(A(a.l)&2)throw Error();var f=null==c?bb:Va([]);if(null!=c){var e=!!c.length;for(var g=0;g<c.length;g++){const h=c[g];e=e&&!C(h.l);f[g]=h.l}e=(e?8:0)|1;g=A(f);(g&e)!==e&&(Object.isFrozen(f)&&(f=Array.prototype.slice.call(f)),B(f,g|e));a.h||(a.h={});a.h[b]=c}else a.h&&(a.h[b]=void 0);return H(a,b,f,d)}
function Cb(a,b){{const c=C(a.l);let d=vb(a,b,1,c),f=A(d);if(!(f&4)){Object.isFrozen(d)&&(d=Va(d.slice()),H(a,b,d));let e=0,g=0;for(;e<d.length;e++){const h=d[e];null!=h&&(d[g++]=h)}g<e&&(d.length=g);f|=5;c&&(f|=18);B(d,f);f&2&&Object.freeze(d)}!c&&(f&2||Object.isFrozen(d))&&(d=Array.prototype.slice.call(d),z(d,5),H(a,b,d));a=d}return a}function K(a,b){return null==a?b:a}function P(a,b){return K(F(a,b),"")}function Q(a,b,c=0){return K(F(a,b),c)};let Db;function Eb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(A(a)&128))return a=Array.prototype.slice.call(a),db(a),a}else{if(null!=a&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}if(a instanceof E)return pb(a)}}return a};function Fb(a,b,c,d,f,e){if(null!=a){if(Array.isArray(a))a=f&&0==a.length&&A(a)&1?void 0:e&&A(a)&2?a:Gb(a,b,c,void 0!==d,f,e);else if($a(a)){const g={};for(let h in a)g[h]=Fb(a[h],b,c,d,f,e);a=g}else a=b(a,d);return a}}function Gb(a,b,c,d,f,e){const g=A(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(let h=0;h<a.length;h++)a[h]=Fb(a[h],b,c,d,f,e);c(g,a);return a}function Hb(a){return Fb(a,Ib,Jb,void 0,!1,!1)}function Ib(a){return a.I===Za?a.toJSON():a instanceof E?pb(a,Hb):Eb(a)}
function Jb(a,b){a&128&&db(b)};function Kb(a,b,c=Ya){if(null!=a){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const d=A(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return B(a,d|18),a;a=Gb(a,Kb,d&4?Ya:c,!0,!1,!0);b=A(a);b&4&&b&2&&Object.freeze(a);return a}a.I===Za?a=Lb(a):a instanceof E&&(b=D(rb(a,Kb)),a=new E(b,a.i,a.m,a.o));return a}}
function Mb(a,b,c,d,f,e,g){(a=a.h&&a.h[c])?(d=A(a),d&2?d=a:(e=Array.prototype.map.call(a,Lb,void 0),Ya(d,e),Object.freeze(e),d=e),Bb(b,c,d,f)):G(b,c,Kb(d,e,g),f)}function Lb(a){if(C(a.l))return a;a=Nb(a,!0);D(a.l);return a}
function Nb(a,b){const c=a.l;var d=Wa([]),f=a.constructor.h;f&&d.push(f);f=a.u;if(f){d.length=c.length;var e={};d[d.length-1]=e}0!==(A(c)&128)&&db(d);b=b||C(a.l)?Ya:Xa;e=a.constructor;Db=d;d=new e(d);Db=void 0;a.T&&(d.T=a.T.slice());e=!!(A(c)&16);const g=f?c.length-1:c.length;for(let h=0;h<g;h++)Mb(a,d,h-a.v,c[h],!1,e,b);if(f)for(const h in f)Mb(a,d,+h,f[h],!0,e,b);return d}function tb(a){if(!C(a.l))return a;const b=Nb(a,!1);b.j=a;return b};function Ob(a){ab=!0;try{return JSON.stringify(a.toJSON(),Pb)}finally{ab=!1}}
var S=class{constructor(a,b,c){null==a&&(a=Db);Db=void 0;var d=this.constructor.h;if(null==a){a=d?[d]:[];var f=!0;B(a,48)}else{if(!Array.isArray(a))throw Error();if(d&&d!==a[0])throw Error();var e=z(a,0)|32;f=0!==(16&e);if(128&e)throw Error();B(a,e)}this.v=d?0:-1;this.h=void 0;this.l=a;a:{e=this.l.length;d=e-1;if(e&&(e=this.l[d],$a(e))){this.u=e;this.i=d-this.v;break a}void 0!==b&&-1<b?(this.i=Math.max(b,d+1-this.v),this.u=void 0):this.i=Number.MAX_VALUE}if(this.u&&"g"in this.u)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(c){b=f&&!0;f=this.i;let h;for(d=0;d<c.length;d++)if(e=c[d],e<f){e+=this.v;var g=a[e];g?Qb(g,b):a[e]=bb}else h||(h=ub(this)),(g=h[e])?Qb(g,b):h[e]=bb}}toJSON(){const a=this.l;var b;ab?b=a:b=Gb(a,Ib,Jb,void 0,!1,!1);return b}};function Qb(a,b){if(Array.isArray(a)){var c=A(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&B(a,c|d)}}S.prototype.I=Za;S.prototype.toString=function(){return this.l.toString()};function Pb(a,b){return Eb(b)};var Rb=class extends S{constructor(){super()}};var Sb=class extends S{constructor(a){super(a)}};var Tb=class extends S{constructor(a){super(a)}};var Ab=class extends S{constructor(a){super(a)}A(){return P(this,3)}V(a){G(this,5,a)}};var T=class extends S{constructor(a){super(a)}A(){return P(this,1)}V(a){G(this,2,a)}};var Ub=class extends S{constructor(a){super(a)}};var Wb=class extends S{constructor(a){super(a,-1,Vb)}},Vb=[6,7];var Yb=class extends S{constructor(a){super(a,-1,Xb)}},Xb=[17];var Zb=class extends S{constructor(a){super(a)}};var $b=class extends S{constructor(){super()}};var ac={capture:!0},bc={passive:!0},cc=wa(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});p.addEventListener("test",null,b)}catch(b){}return a});function dc(a){return a?a.passive&&cc()?a:a.capture||!1:!1}function U(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,dc(d))};function ec(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};var fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gc(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.slice(0,c),d,a.slice(b)]}function hc(a,b){return b?a?a+"&"+b:b:a}function ic(a,b){if(!b)return a;a=gc(a);a[1]=hc(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function jc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)jc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function kc(a){var b=[],c;for(c in a)jc(c,a[c],b);return b.join("&")}function lc(){var a=ec();a=null!=a?"="+encodeURIComponent(String(a)):"";return ic("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+a)}var mc=/#|$/;
function nc(a,b){var c=a.search(mc);a:{var d=0;for(var f=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var e=a.charCodeAt(d-1);if(38==e||63==e)if(e=a.charCodeAt(d+f),!e||61==e||38==e||35==e)break a;d+=f+1}d=-1}if(0>d)return null;f=a.indexOf("&",d);if(0>f||f>c)f=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==f?f:0).replace(/\+/g," "))}
function oc(a,b){a=gc(a);var c=a[1],d=[];c&&c.split("&").forEach(function(f){var e=f.indexOf("=");b.hasOwnProperty(0<=e?f.slice(0,e):f)||d.push(f)});a[1]=hc(d.join("&"),kc(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function pc(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}var qc=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};let rc=[];const sc=()=>{const a=rc;rc=[];for(const b of a)try{b()}catch(c){}};
var tc=a=>{rc.push(a);1==rc.length&&(window.Promise?Promise.resolve().then(sc):window.setImmediate?setImmediate(sc):setTimeout(sc,0))},uc=a=>{var b=V;"complete"===b.readyState||"interactive"===b.readyState?tc(a):b.addEventListener("DOMContentLoaded",a)},vc=a=>{var b=window;"complete"===b.document.readyState?tc(a):b.addEventListener("load",a)};function wc(a=document){return a.createElement("img")};function Bc(a,b,c=null,d=!1){Cc(a,b,c,d)}function Cc(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const f=wc(a.document);if(c||d){const e=g=>{c&&c(g);if(d){g=a.google_image_requests;const h=Array.prototype.indexOf.call(g,f,void 0);0<=h&&Array.prototype.splice.call(g,h,1)}f.removeEventListener&&f.removeEventListener("load",e,dc());f.removeEventListener&&f.removeEventListener("error",e,dc())};U(f,"load",e);U(f,"error",e)}f.src=b;a.google_image_requests.push(f)}
function Dc(a,b){var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):Bc(a,b,void 0,!1)};let Ec=0;function Fc(a){return(a=Gc(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Gc(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function Hc(a){if(!(.01<Math.random())){const b=Gc(a,document.currentScript);a=`https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Fc(a)}&sample=${.01}`;Dc(window,a)}};var V=document,W=window;const Ic=[Aa,Ba,Da,Ca,za,Fa,Ha,Ea,Ia];function Jc(a,b){if(a instanceof q)return a;const c=La(a,Ic);c===la&&b(a);return c}var Kc=a=>{var b=`${"http:"===W.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=kc({id:"unsafeurl",ctx:a,url:c});c=ic(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var Lc=a=>{var b=V;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class Mc{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Nc=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Oc=class{constructor(a,b){this.h=a;this.i=b}},Pc=class{constructor(a,b){this.url=a;this.U=!!b;this.depth=null}};function Qc(a,b){const c={};c[a]=b;return[c]}function Rc(a,b,c,d,f){const e=[];pc(a,function(g,h){(g=Sc(g,b,c,d,f))&&e.push(h+"="+g)});return e.join(b)}
function Sc(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const e=[];for(let g=0;g<a.length;g++)e.push(Sc(a[g],b,c,d+1,f));return e.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(Rc(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))}function Tc(a){let b=1;for(const c in a.i)b=c.length>b?c.length:b;return 3997-b-a.j.length-1}
function Uc(a,b){let c="https://pagead2.googlesyndication.com"+b,d=Tc(a)-b.length;if(0>d)return"";a.h.sort(function(e,g){return e-g});b=null;let f="";for(let e=0;e<a.h.length;e++){const g=a.h[e],h=a.i[g];for(let l=0;l<h.length;l++){if(!d){b=null==b?g:b;break}let k=Rc(h[l],a.j,",$");if(k){k=f+k;if(d>=k.length){d-=k.length;c+=k;f=a.j;break}b=null==b?g:b}}}a="";null!=b&&(a=f+"trn="+b);return c+a}class Vc{constructor(){this.j="&";this.i={};this.m=0;this.h=[]}};function Wc(){var a=Xc,b=window.google_srt;0<=b&&1>=b&&(a.h=b)}function Yc(a,b,c,d=!1,f){if((d?a.h:Math.random())<(f||.01))try{let e;c instanceof Vc?e=c:(e=new Vc,pc(c,(h,l)=>{var k=e;const n=k.m++;h=Qc(l,h);k.h.push(n);k.i[n]=h}));const g=Uc(e,"/pagead/gen_204?id="+b+"&");g&&Bc(p,g)}catch(e){}}class Zc{constructor(){this.h=Math.random()}};let $c=null;function ad(){const a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function bd(){const a=p.performance;return a&&a.now?a.now():null};class cd{constructor(a,b){var c=bd()||ad();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0}};const X=p.performance,dd=!!(X&&X.mark&&X.measure&&X.clearMarks),ed=wa(()=>{var a;if(a=dd){var b;if(null===$c){$c="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&($c=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=$c;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function fd(a){a&&X&&ed()&&(X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class gd{constructor(){var a=window;this.i=[];this.j=a||p;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.i=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.h=ed()||(null!=b?b:1>Math.random())}start(a,b){if(!this.h)return null;a=new cd(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;X&&ed()&&X.mark(b);return a}end(a){if(this.h&&"number"===typeof a.value){a.duration=(bd()||ad())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;X&&ed()&&X.mark(b);!this.h||
2048<this.i.length||this.i.push(a)}}};function hd(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b}
function id(a,b,c){let d,f;try{a.h&&a.h.h?(f=a.h.start(b.toString(),3),d=c(),a.h.end(f)):d=c()}catch(e){c=!0;try{fd(f),c=a.s(b,new Mc(e,{message:hd(e)}),void 0,void 0)}catch(g){a.o(217,g)}if(c){let g,h;null==(g=window.console)||null==(h=g.error)||h.call(g,e)}else throw e;}return d}function jd(a,b){var c=kd;return(...d)=>id(c,a,()=>b.apply(void 0,d))}
class ld{constructor(a=null){this.j=Xc;this.i=null;this.s=this.o;this.h=a;this.m=!1}pinger(){return this.j}o(a,b,c,d,f){f=f||"jserror";let e;try{const N=new Vc;var g=N;g.h.push(1);g.i[1]=Qc("context",a);b.error&&b.meta&&b.id||(b=new Mc(b,{message:hd(b)}));if(b.msg){g=N;var h=b.msg.substring(0,512);g.h.push(2);g.i[2]=Qc("msg",h)}var l=b.meta||{};b=l;if(this.i)try{this.i(b)}catch(J){}if(d)try{d(b)}catch(J){}d=N;l=[l];d.h.push(3);d.i[3]=l;d=p;l=[];let Ga;b=null;do{var k=d;try{var n;if(n=!!k&&null!=k.location.href)b:{try{Na(k.foo);
n=!0;break b}catch(J){}n=!1}var m=n}catch(J){m=!1}m?(Ga=k.location.href,b=k.document&&k.document.referrer||null):(Ga=b,b=null);l.push(new Pc(Ga||""));try{d=k.parent}catch(J){d=null}}while(d&&k!=d);for(let J=0,xc=l.length-1;J<=xc;++J)l[J].depth=xc-J;k=p;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==l.length-1)for(m=1;m<l.length;++m){var t=l[m];t.url||(t.url=k.location.ancestorOrigins[m-1]||"",t.U=!0)}var x=l;let kb=new Pc(p.location.href,!1);k=null;const lb=x.length-
1;for(t=lb;0<=t;--t){var O=x[t];!k&&Nc.test(O.url)&&(k=O);if(O.url&&!O.U){kb=O;break}}O=null;const Dd=x.length&&x[lb].url;0!=kb.depth&&Dd&&(O=x[lb]);e=new Oc(kb,O);if(e.i){x=N;var R=e.i.url||"";x.h.push(4);x.i[4]=Qc("top",R)}var nb={url:e.h.url||""};if(e.h.url){var ob=e.h.url.match(fc),ca=ob[1],yc=ob[3],zc=ob[4];R="";ca&&(R+=ca+":");yc&&(R+="//",R+=yc,zc&&(R+=":"+zc));var Ac=R}else Ac="";ca=N;nb=[nb,{url:Ac}];ca.h.push(5);ca.i[5]=nb;Yc(this.j,f,N,this.m,c)}catch(N){try{Yc(this.j,f,{context:"ecmserr",
rctx:a,msg:hd(N),url:e&&e.h.url},this.m,c)}catch(Ga){}}return!0}};class md{};let Xc,kd;const Y=new gd;var nd=()=>{window.google_measure_js_timing||(Y.h=!1,Y.i!=Y.j.google_js_reporting_queue&&(ed()&&Array.prototype.forEach.call(Y.i,fd,void 0),Y.i.length=0))};(a=>{Xc=null!=a?a:new Zc;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());Wc();kd=new ld(Y);kd.i=b=>{const c=Ec;0!==c&&(b.jc=String(c),b.shv=Fc(c))};kd.m=!0;"complete"==window.document.readyState?nd():Y.h&&U(window,"load",()=>{nd()})})();
var Z=(a,b)=>jd(a,b),od=a=>{var b=md;var c="S";b.S&&b.hasOwnProperty(c)||(c=new b,b.S=c);b=[];!a.eid&&b.length&&(a.eid=b.toString());Yc(Xc,"gdn-asoch",a,!0)};function pd(a=window){return a};var qd=(a,b)=>{b=P(a,2)||b;if(!b)return"";if(I(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];yb(a,4).forEach((f,e)=>{d.push(encodeURIComponent(e)+"="+encodeURIComponent(f)+"&")});d.push(b.slice(c.index+1));return d.join("")},rd=(a,b=[])=>{b=0<b.length?b:Lc("data-asoch-targets");a=xb(a,F(a,1),1,Wb);const c=[];for(let h=0;h<b.length;++h){var d=b[h].getAttribute("data-asoch-targets"),f=d.split(","),e=!0;for(let l of f)if(!a.has(l)){e=!1;break}if(e){e=
a.get(f[0]);for(d=1;d<f.length;++d){var g=a.get(f[d]);e=Nb(e,!1).toJSON();g=g.toJSON();const l=Math.max(e.length,g.length);for(let k=0;k<l;++k)null==e[k]&&(e[k]=g[k]);e=new Wb(e)}f=yb(e,4);null!=F(e,5)&&f.set("nb",Q(e,5,0).toString());c.push({element:b[h],data:e})}else od({type:1,data:d})}return c},ud=(a,b,c,d)=>{c=qd(b,c);if(0!==c.length){if("2"===nc(c,"ase")&&1087!==d){const e=609===d;let g;if(e)g=4;else{var f;g=(null==(f=V.featurePolicy)?0:f.allowedFeatures().includes("attribution-reporting"))?
6:5}f="";sd(c)&&!e?f=td(da(new fa({url:c})),"nis",g.toString()):c=td(c,"nis",g.toString());a.setAttribute("attributionsrc",f)}xa(a,Jc(c,Kc(d)));a.target||(a.target=null!=F(b,11)?P(b,11):"_top")}},vd=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!I(a,1)){const c=b.element;ud(c,a,c.href,609)}},sd=a=>!/[?&]dsh=1(&|$)/.test(a)&&/[?&]ae=1(&|$)/.test(a),wd=a=>{const b=p.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&void 0!==L(a,Ub,8)){const d=P(M(a,Ub,8),4);if(d){b.fetchAppStoreOverlay(d,
void 0,P(M(a,Ub,8),6));break}}},xd=(a,b=500)=>{const c=[],d=[];for(var f of a)(a=f.data)&&void 0!==L(a,T,12)&&(d.push(M(a,T,12)),c.push(M(a,T,12).A()));f=(e,g)=>{if(g)for(const h of d)g[h.A()]&&h.V(!0)};a=p.oneAfmaInstance;for(const e of c){let g;null==(g=a)||g.canOpenAndroidApp(e,f,()=>{},b)}},zd=(a,b,c,d,f)=>{if(!b||void 0===L(b,Ub,8))return!1;const e=M(b,Ub,8);let g=P(e,2);yb(b,10).forEach((k,n)=>{var m=g;n=encodeURIComponent(n);const t=encodeURIComponent(k);k=new RegExp("[?&]"+n+"=([^&]+)");const x=
k.exec(m);console.log(x);n=n+"="+t;g=x?m.replace(k,x[0].charAt(0)+n):m.replace("?","?"+n+"&")});yd(b)&&I(b,15)&&!/[?&]label=/.test(c)&&(c=td(c,"label","deep_link_fallback"));const h=k=>d.openStoreOverlay(k,void 0,P(e,6)),l=k=>Dc(W,k);return d.redirectForStoreU2({clickUrl:c,trackingUrl:P(e,3),finalUrl:g,pingFunc:f?l:d.click,openFunc:(null==a?0:I(a,1))?h:d.openIntentOrNativeApp,isExternalClickUrl:I(b,13)})},Bd=(a,b,c,d,f,e,g,h=!1)=>{f=I(f,15);const l=sd(e);!a||!b||f&&l||(e=h?Ad(e):Ad(e,g.click));e&&
e.startsWith("intent:")?g.openIntentOrNativeApp(e):c?d?g.openBrowser(e):g.openChromeCustomTab(e):g.openSystemBrowser(e,{useFirstPackage:!0,useRunningProcess:!0})},Ad=(a,b=null)=>{if(null!==b){const c=new fa({url:a});if(c.i&&c.j||c.o)return b(da(c)),ea(c,1)}else return{W:b}={},b=new fa({url:a,W:b}),b.i&&b.j||b.o?navigator.sendBeacon?navigator.sendBeacon(da(b),"")?ea(b,1):ea(b,2):ea(b,0):a;return a},Cd=(a,b=!0,c=!1)=>{let d=!1;c&&W.navigator&&W.navigator.sendBeacon&&(d=W.navigator.sendBeacon(a));d||
(b&&W.fetch?W.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(f=>{f.ok||Bc(W,a)}):Bc(W,a))},td=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},yd=a=>{for(const b of zb(a))if(3===Q(b,1,0)&&P(b,2))return!0;return!1};var Ed=(a,b)=>a&&(a=a.match(b+"=([^&]+)"))&&2==a.length?a[1]:"";var Fd=class extends S{constructor(){super()}};function Gd(a,b){return G(a,2,b)}function Hd(a,b){return G(a,3,b)}function Id(a,b){return G(a,4,b)}function Jd(a,b){return G(a,5,b)}function Kd(a,b){return G(a,9,b)}function Ld(a,b){return Bb(a,10,b)}function Md(a,b){return G(a,11,b)}function Nd(a,b){return G(a,1,b)}function Od(a,b){return G(a,7,b)}var Qd=class extends S{constructor(){super(void 0,-1,Pd)}},Pd=[10,6];const Rd="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Sd(a){let b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function Td(a){let b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Ud(){var a=window;if(!Td(a))return null;const b=Sd(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Rd).then(c=>{null!=b.uach||(b.uach=c);return c});return b.uach_promise=a}
function Vd(a){let b;return Md(Ld(Jd(Gd(Nd(Id(Od(Kd(Hd(new Qd,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(c=>{var d=new Fd;d=G(d,1,c.brand);return G(d,2,c.version)}))||[]),a.wow64||!1)}function Wd(){let a,b;return null!=(b=null==(a=Ud())?void 0:a.then(c=>Vd(c)))?b:null};function Xd(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null==F(c,2)&&G(c,2,a.href)}}function Yd(a,b){return ma(a,c=>c.element===b)}function Zd(a){uc(Z(556,()=>{new $d(a||{})}))}
function ae(a,b,c,d){if(!I(d,13)){var f=c.href;var e=/[?&]adurl=([^&]+)/.exec(f);f=e?[f.slice(0,e.index),f.slice(e.index)]:[f,""];for(xa(c,Jc(f[0],Kc(557)));!c.id;)if(e="asoch-id-"+ec(),!V.getElementById(e)){c.id=e;break}e=c.id;"function"===typeof window.xy&&window.xy(b,c,V.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(e);"function"===typeof window.ja&&window.ja(e,d?Q(d,5,0):0);"function"===typeof window.vti&&window.vti(e);a.o&&"function"===typeof window.ss&&
(a.N?window.ss(e,1,a.o):window.ss(a.o,1));0<f.length&&(a=0<a.C.length&&(null==d||null==F(d,19))?c.href+"&uach="+encodeURIComponent(a.C)+f[1]:c.href+f[1],xa(c,Jc(a,Kc(557))))}}async function be(a,b,c,d){let f="";var e=p.oneAfmaInstance;if(e&&(b.preventDefault(),f=await e.appendClickSignalsAsync(c.href)||"",a.K&&(e=await e.getNativeClickMeta()))){if(e.customClickGestureEligible)return;f=td(f,"nas",e.encodedNas)}ce(a,b,c,d,f)}
function ce(a,b,c,d,f){const e=I(a.i,2),g=e&&300<Date.now()-a.M,h=p.oneAfmaInstance;h?(qc(b),(()=>{let l=I(d,13)?f:h.logScionEventAndAddParam(f);if(!a.s&&d&&void 0!==L(d,T,12)){var k=M(d,T,12).A();if(0<zb(d).length)for(const n of zb(d));I(M(d,T,12),2)?(h.click(l),h.openAndroidApp(k),k=!0):k=!1}else k=!1;k||zd(a.B,d,l,h,a.Y)||Bd(e,g,a.aa,a.s,d,l,h,a.Z)})()):(I(a.i,21)&&c.href&&"_blank"!==c.target&&(a.m=nc(c.href,"ai")||"")&&(a.j="clicked"),b=window,a.X&&b.pawsig&&"function"===typeof b.pawsig.clk?b.pawsig.clk(c):
g&&(b="2"===nc(c.href,"ase")&&sd(c.href)?Ad(c.href,()=>{}):a.ba?Ad(c.href,l=>{W.fetch(l,{method:"GET",keepalive:!0,mode:"no-cors"})}):Ad(c.href),b!==c.href&&xa(c,Jc(b,Kc(599)))));g&&(a.M=Date.now());Hc(a.L)}
var $d=class{constructor(a){this.s=Qa||Oa||Ra||Pa;var b=Lc("data-asoch-meta");if(1!==b.length)od({type:2,data:b.length});else{this.L=70;this.i=new Yb(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.J=a["extra-meta"]?new Yb(JSON.parse(a["extra-meta"])):null;this.K="true"===a["is-fsn"];this.B=a["ios-store-overlay-config"]?new Zb(JSON.parse(a["ios-store-overlay-config"])):null;this.aa="true"===a["use-cct-over-browser"];this.Y="true"===a["send-ac-click-ping-by-js"];this.O="true"===a["correct-redirect-url-for-och-15-click"];
this.Z="true"===a["send-click-ping-by-js-in-och"];this.X="true"===a["enable-paw"];this.ba="true"===a["async-using-fetch"];this.j=this.m="";this.F=this.D=-1;this.C="";b=Wd();null!=b&&b.then(d=>{var f=Ob(d);d=[];for(var e=0,g=0;g<f.length;g++){var h=f.charCodeAt(g);255<h&&(d[e++]=h&255,h>>=8);d[e++]=h}f=3;void 0===f&&(f=0);if(!Ta)for(Ta={},e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),g=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var l=e.concat(g[h].split(""));Sa[h]=l;
for(var k=0;k<l.length;k++){var n=l[k];void 0===Ta[n]&&(Ta[n]=k)}}f=Sa[f];e=Array(Math.floor(d.length/3));g=f[64]||"";for(h=l=0;l<d.length-2;l+=3){var m=d[l],t=d[l+1];n=d[l+2];k=f[m>>2];m=f[(m&3)<<4|t>>4];t=f[(t&15)<<2|n>>6];n=f[n&63];e[h++]=k+m+t+n}k=0;n=g;switch(d.length-l){case 2:k=d[l+1],n=f[(k&15)<<2]||g;case 1:d=d[l],e[h]=f[d>>2]+f[(d&3)<<4|k>>4]+n+g}this.C=e.join("")});this.h=rd(this.i);this.ca=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.M=-Infinity;this.o=P(this.i,5)||
"";this.N=I(this.i,11);this.J&&(this.N=I(this.J,11));this.H=this.G=null;I(this.i,3)||(vd(this.h),G(this.i,3,!0));Xd(this.h);a=p.oneAfmaInstance;!this.s&&a&&xd(this.h,this.ca);var c;if(a&&(null==(c=this.B)?0:I(c,2)))switch(c=()=>{const d=K(F(this.B,4),0);0<d?p.setTimeout(()=>{wd(this.h)},d):wd(this.h)},Q(this.B,3,0)){case 1:a.runOnOnShowEvent(c);break;case 2:vc(c);break;default:wd(this.h)}U(V,"click",Z(557,d=>{a:if(!d.defaultPrevented||this.G===d){for(var f,e,g=d.target;(!f||!e)&&g;){e||"A"!=g.tagName||
(e=g);var h=g.hasAttribute("data-asoch-targets"),l=g.hasAttribute("data-asoch-fixed-value");if(!f)if(l)f=new Wb(JSON.parse(g.getAttribute("data-asoch-fixed-value"))||[]);else if("A"==g.tagName||h)if(h=h&&"true"===g.getAttribute("data-asoch-is-dynamic")?rd(this.i,[g]):this.h,h=Yd(h,g))f=h.data;g=g.parentElement}if(g=f&&!I(f,1)){if(d.defaultPrevented){var k=e,n=f;if(this.G===d&&this.H){e=new Tb(this.H);f=P(n,9);var m="";switch(Q(e,4,1)){case 2:if(K(F(e,2),0))m="blocked_fast_click";else if(P(e,1)||P(e,
7))m="blocked_border_click";break;case 3:m=V,m=m.getElementById?m.getElementById("common_15click_anchor"):null,"function"===typeof window.copfcChm&&m&&(n=Nb(n,!1),G(n,5,12),yb(n,4).set("nb",(12).toString()),(g=Yd(this.h,m))?g.data=n:this.h.push({element:m,data:n}),!this.O&&k&&(ae(this,d,k,n),G(n,2,k.href)),window.copfcChm(d,qd(n,m.href),null,void 0!==L(e,Sb,10)?Ob(M(e,Sb,10)):null),this.O&&ae(this,d,m,n)),m="onepointfiveclick_first_click"}f&&m&&Cd(f+"&label="+m,!1);Hc(this.L)}break a}h=f;for(m of Cb(h,
6))Cd(m)}if(e&&g){f=g?f:null;(m=Yd(this.h,e))?m=m.data:(m=new Wb,G(m,2,e.href),G(m,11,e.target||"_top"),this.h.push({element:e,data:m}));ud(e,f||m,P(m,2),557);ae(this,d,e,f);for(n of Cb(this.i,17))m=n,g=V.body,h={},"function"===typeof window.CustomEvent?l=new CustomEvent(m,h):(l=document.createEvent("CustomEvent"),l.initCustomEvent(m,!!h.bubbles,!!h.cancelable,h.detail)),g.dispatchEvent(l);if(null==f?0:null!=F(f,19)){n=new Rb;G(n,1,Q(f,5,0));m=Ed(e.href,"nx");""!=m&&G(n,2,+m);m=Ed(e.href,"ny");""!=
m&&G(n,3,+m);m=Ed(e.href,"bg");""!=m&&G(n,4,m);m=Ed(e.href,"nm");""!=m&&G(n,5,+m);m=Ed(e.href,"mb");""!=m&&G(n,6,+m);m=P(f,19);b:if(g=F(f,20),null!=g){switch(typeof g){case "string":g=+g;break b;case "number":break b}g=void 0}g=null!=g?K(F(f,20),0):null;n=Ob(n);h=this.C;l=pd(p);const t=new $b;G(t,1,m);null!==g&&G(t,2,g);null!==h&&G(t,3,h);G(t,4,n);null==l||null==(k=l.fence)||k.reportEvent({eventType:"click",eventData:JSON.stringify(t),destination:["buyer"]})}I(this.i,16)||this.K?be(this,d,e,f):(k=
"",(n=p.oneAfmaInstance)&&(k=n.appendClickSignals(e.href)),ce(this,d,e,f,k))}}}),ac);!a&&I(this.i,21)&&(U(W,"pagehide",Z(1037,()=>{if(this.m&&this.j&&(this.j+="+pagehide",this.F=Date.now(),-1!==this.D)){var d={id:"visibilityBeforePagehide",payload:this.j,delay:this.F-this.D,isios:this.s,clickstring:this.m};Cd(oc(lc(),d),!1,!0)}})),U(V,"visibilitychange",Z(1067,()=>{if("visible"===V.visibilityState)this.m=this.j="",this.F=this.D=-1;else if("hidden"===V.visibilityState&&this.j&&this.m){this.D=Date.now();
var d={id:"visibilityhidden",payload:this.j,isios:this.s,clickstring:this.m};Cd(oc(lc(),d),!1,!0)}})));this.o&&"function"===typeof window.ss&&U(V.body,"mouseover",Z(626,()=>{window.ss(this.o,0)}),bc);"function"===typeof window.ivti&&window.ivti(window);c=window;c.googqscp&&"function"===typeof c.googqscp.registerCallback&&c.googqscp.registerCallback((d,f)=>{this.G=d;this.H=f})}}};var de=Z(555,a=>Zd(a));Ec=70;const ee=Gc(70,document.currentScript);if(null==ee)throw Error("JSC not found 70");const fe={},ge=ee.attributes;for(let a=ge.length-1;0<=a;a--){const b=ge[a].name;0===b.indexOf("data-jcp-")&&(fe[b.substring(9)]=ge[a].value)}de(fe);}).call(this);
