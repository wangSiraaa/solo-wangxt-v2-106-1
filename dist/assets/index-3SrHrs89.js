(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _u(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ft={},Rr=[],gi=()=>{},id=()=>!1,ko=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Go=n=>n.startsWith("onUpdate:"),ln=Object.assign,vu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hm=Object.prototype.hasOwnProperty,wt=(n,e)=>Hm.call(n,e),ot=Array.isArray,lr=n=>da(n)==="[object Map]",cs=n=>da(n)==="[object Set]",oh=n=>da(n)==="[object Date]",ht=n=>typeof n=="function",Xt=n=>typeof n=="string",vi=n=>typeof n=="symbol",It=n=>n!==null&&typeof n=="object",rd=n=>(It(n)||ht(n))&&ht(n.then)&&ht(n.catch),sd=Object.prototype.toString,da=n=>sd.call(n),km=n=>da(n).slice(8,-1),ad=n=>da(n)==="[object Object]",xu=n=>Xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ks=_u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Gm=/-\w/g,Qn=Wo(n=>n.replace(Gm,e=>e.slice(1).toUpperCase())),Wm=/\B([A-Z])/g,Br=Wo(n=>n.replace(Wm,"-$1").toLowerCase()),od=Wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),dl=Wo(n=>n?`on${od(n)}`:""),fi=(n,e)=>!Object.is(n,e),uo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ld=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Su=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let lh;const Xo=()=>lh||(lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mu(n){if(ot(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Xt(i)?Ym(i):Mu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Xt(n)||It(n))return n}const Xm=/;(?![^(]*\))/g,$m=/:([^]+)/,qm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Ym(n){const e={};return n.replace(qm,t=>t.startsWith("/*")?"":t).split(Xm).forEach(t=>{if(t){const i=t.split($m);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function On(n){let e="";if(Xt(n))e=n;else if(ot(n))for(let t=0;t<n.length;t++){const i=On(n[t]);i&&(e+=i+" ")}else if(It(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Km="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zm=_u(Km);function cd(n){return!!n||n===""}function Jm(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=ps(n[r],e[r],t);return i}function ch(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let a=-1;for(let o=0;o<i.length;o++)if(!r[o]&&ps(s,i[o],t)){a=o;break}if(a<0)return!1;r[a]=1}return!0}function Qm(n,e,t){let i=lr(n),r=lr(e);if(i||r||(i=cs(n),r=cs(e),i||r))return i&&r?ch(n,e,t):!1;const s=Object.keys(n).length,a=Object.keys(e).length;if(s!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ps(n[o],e[o],t))return!1}return String(n)===String(e)}function uh(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const a=i(n,e,t);return r.delete(n),s.delete(e),a}function ps(n,e,t){if(n===e)return!0;let i=oh(n),r=oh(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=vi(n),r=vi(e),i||r?n===e:(i=ot(n),r=ot(e),i||r?i&&r?uh(n,e,t,Jm):!1:(i=It(n),r=It(e),i||r?!i||!r?!1:uh(n,e,t,Qm):String(n)===String(e))))}function ud(n,e){return n.findIndex(t=>ps(t,e))}const hd=n=>!!(n&&n.__v_isRef===!0),Ze=n=>Xt(n)?n:n==null?"":ot(n)||It(n)&&(n.toString===sd||!ht(n.toString))?hd(n)?Ze(n.value):JSON.stringify(n,fd,2):String(n),fd=(n,e)=>hd(e)?fd(n,e.value):lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[pl(i,s)+" =>"]=r,t),{})}:cs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>pl(t))}:vi(e)?pl(e):It(e)&&!ot(e)&&!ad(e)?String(e):e,pl=(n,e="")=>{var t;return vi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class jm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&sn&&(sn.active?(this.parent=sn,this.index=(sn.scopes||(sn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=sn;try{return sn=this,e()}finally{sn=t}}}on(){++this._on===1&&(this.prevScope=sn,sn=this)}off(){if(this._on>0&&--this._on===0){if(sn===this)sn=this.prevScope;else{let e=sn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function eg(){return sn}let Ot;const ml=new WeakSet;class dd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,sn&&(sn.active?sn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ml.has(this)&&(ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||md(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hh(this),gd(this);const e=Ot,t=jn;Ot=this,jn=!0;try{return this.fn()}finally{_d(this),Ot=e,jn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Eu(e);this.deps=this.depsTail=void 0,hh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fc(this)&&this.run()}get dirty(){return fc(this)}}let pd=0,Gs,Ws;function md(n,e=!1){if(n.flags|=8,e){n.next=Ws,Ws=n;return}n.next=Gs,Gs=n}function yu(){pd++}function bu(){if(--pd>0)return;if(Ws){let e=Ws;for(Ws=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Gs;){let e=Gs;for(Gs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function gd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _d(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Eu(i),tg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function fc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function vd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===js)||(n.globalVersion=js,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!fc(n))))return;n.flags|=2;const e=n.dep,t=Ot,i=jn;Ot=n,jn=!0;try{gd(n);const r=n.fn(n._value);(e.version===0||fi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ot=t,jn=i,_d(n),n.flags&=-3}}function Eu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Eu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function tg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let jn=!0;const xd=[];function $i(){xd.push(jn),jn=!1}function qi(){const n=xd.pop();jn=n===void 0?!0:n}function hh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ot;Ot=void 0;try{e()}finally{Ot=t}}}let js=0;class ng{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ot||!jn||Ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ot)t=this.activeLink=new ng(Ot,this),Ot.deps?(t.prevDep=Ot.depsTail,Ot.depsTail.nextDep=t,Ot.depsTail=t):Ot.deps=Ot.depsTail=t,Sd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ot.depsTail,t.nextDep=void 0,Ot.depsTail.nextDep=t,Ot.depsTail=t,Ot.deps===t&&(Ot.deps=i)}return t}trigger(e){this.version++,js++,this.notify(e)}notify(e){yu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bu()}}}function Sd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Sd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const dc=new WeakMap,Dr=Symbol(""),pc=Symbol(""),ea=Symbol("");function hn(n,e,t){if(jn&&Ot){let i=dc.get(n);i||dc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Tu),r.map=i,r.key=t),r.track()}}function Oi(n,e,t,i,r,s){const a=dc.get(n);if(!a){js++;return}const o=l=>{l&&l.trigger()};if(yu(),e==="clear")a.forEach(o);else{const l=ot(n),c=l&&xu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===ea||!vi(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ea)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Dr)),lr(n)&&o(a.get(pc)));break;case"delete":l||(o(a.get(Dr)),lr(n)&&o(a.get(pc)));break;case"set":lr(n)&&o(a.get(Dr));break}}bu()}function zr(n){const e=At(n);return e===n||(hn(e,"iterate",ea),kn(n))?e:xi(n)?cr(n)?e.map(t=>ur(Gn(t))):e.map(ur):e.map(Gn)}function $o(n){return hn(n=At(n),"iterate",ea),n}function ci(n,e){return xi(n)?ur(cr(n)?Gn(e):e):Gn(e)}const ig={__proto__:null,[Symbol.iterator](){return gl(this,Symbol.iterator,n=>ci(this,n))},concat(...n){return zr(this).concat(...n.map(e=>ot(e)?zr(e):e))},entries(){return gl(this,"entries",n=>(n[1]=ci(this,n[1]),n))},every(n,e){return wi(this,"every",n,e,void 0,arguments)},filter(n,e){return wi(this,"filter",n,e,t=>t.map(i=>ci(this,i)),arguments)},find(n,e){return wi(this,"find",n,e,t=>ci(this,t),arguments)},findIndex(n,e){return wi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return wi(this,"findLast",n,e,t=>ci(this,t),arguments)},findLastIndex(n,e){return wi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return wi(this,"forEach",n,e,void 0,arguments)},includes(...n){return _l(this,"includes",n)},indexOf(...n){return _l(this,"indexOf",n)},join(n){return zr(this).join(n)},lastIndexOf(...n){return _l(this,"lastIndexOf",n)},map(n,e){return wi(this,"map",n,e,void 0,arguments)},pop(){return Ts(this,"pop")},push(...n){return Ts(this,"push",n)},reduce(n,...e){return fh(this,"reduce",n,e)},reduceRight(n,...e){return fh(this,"reduceRight",n,e)},shift(){return Ts(this,"shift")},some(n,e){return wi(this,"some",n,e,void 0,arguments)},splice(...n){return Ts(this,"splice",n)},toReversed(){return zr(this).toReversed()},toSorted(n){return zr(this).toSorted(n)},toSpliced(...n){return zr(this).toSpliced(...n)},unshift(...n){return Ts(this,"unshift",n)},values(){return gl(this,"values",n=>ci(this,n))}};function gl(n,e,t){const i=$o(n),r=i[e]();return i!==n&&!kn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const rg=Array.prototype;function wi(n,e,t,i,r,s){const a=$o(n),o=a!==n&&!kn(n),l=a[e];if(l!==rg[e]){const f=l.apply(n,s);return o?Gn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,ci(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function fh(n,e,t,i){const r=$o(n),s=r!==n&&!kn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=ci(n,c)),t.call(this,c,ci(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?ci(n,l):l}function _l(n,e,t){const i=At(n);hn(i,"iterate",ea);const r=i[e](...t);return(r===-1||r===!1)&&Ru(t[0])?(t[0]=At(t[0]),i[e](...t)):r}function Ts(n,e,t=[]){$i(),yu();const i=At(n)[e].apply(n,t);return bu(),qi(),i}const sg=_u("__proto__,__v_isRef,__isVue"),Md=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(vi));function ag(n){vi(n)||(n=String(n));const e=At(this);return hn(e,"has",n),e.hasOwnProperty(n)}class yd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?gg:Ad:s?Td:Ed).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ot(e);if(!r){let l;if(a&&(l=ig[t]))return l;if(t==="hasOwnProperty")return ag}const o=Reflect.get(e,t,dn(e)?e:i);if((vi(t)?Md.has(t):sg(t))||(r||hn(e,"get",t),s))return o;if(dn(o)){const l=a&&xu(t)?o:o.value;return r&&It(l)?gc(l):l}return It(o)?r?gc(o):ar(o):o}}class bd extends yd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=ot(e)&&xu(t);if(!this._isShallow){const c=xi(s);if(!kn(i)&&!xi(i)&&(s=At(s),i=At(i)),!a&&dn(s)&&!dn(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:wt(e,t),l=Reflect.set(e,t,i,dn(e)?e:r);return e===At(r)&&l&&(o?fi(i,s)&&Oi(e,"set",t,i):Oi(e,"add",t,i)),l}deleteProperty(e,t){const i=wt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Oi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!vi(t)||!Md.has(t))&&hn(e,"has",t),i}ownKeys(e){return hn(e,"iterate",ot(e)?"length":Dr),Reflect.ownKeys(e)}}class og extends yd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lg=new bd,cg=new og,ug=new bd(!0);const mc=n=>n,Aa=n=>Reflect.getPrototypeOf(n);function hg(n,e,t){return function(...i){const r=this.__v_raw,s=At(r),a=lr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?mc:e?ur:Gn;return!e&&hn(s,"iterate",l?pc:Dr),ln(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function wa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function fg(n,e){const t={get(r){const s=this.__v_raw,a=At(s),o=At(r);n||(fi(r,o)&&hn(a,"get",r),hn(a,"get",o));const{has:l}=Aa(a),c=e?mc:n?ur:Gn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&hn(At(r),"iterate",Dr),r.size},has(r){const s=this.__v_raw,a=At(s),o=At(r);return n||(fi(r,o)&&hn(a,"has",r),hn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=At(o),c=e?mc:n?ur:Gn;return!n&&hn(l,"iterate",Dr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return ln(t,n?{add:wa("add"),set:wa("set"),delete:wa("delete"),clear:wa("clear")}:{add(r){const s=At(this),a=Aa(s),o=At(r),l=!e&&!kn(r)&&!xi(r)?o:r;return a.has.call(s,l)||fi(r,l)&&a.has.call(s,r)||fi(o,l)&&a.has.call(s,o)||(s.add(l),Oi(s,"add",l,l)),this},set(r,s){!e&&!kn(s)&&!xi(s)&&(s=At(s));const a=At(this),{has:o,get:l}=Aa(a);let c=o.call(a,r);c||(r=At(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?fi(s,u)&&Oi(a,"set",r,s):Oi(a,"add",r,s),this},delete(r){const s=At(this),{has:a,get:o}=Aa(s);let l=a.call(s,r);l||(r=At(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Oi(s,"delete",r,void 0),c},clear(){const r=At(this),s=r.size!==0,a=r.clear();return s&&Oi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=hg(r,n,e)}),t}function Au(n,e){const t=fg(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(wt(t,r)&&r in i?t:i,r,s)}const dg={get:Au(!1,!1)},pg={get:Au(!1,!0)},mg={get:Au(!0,!1)};const Ed=new WeakMap,Td=new WeakMap,Ad=new WeakMap,gg=new WeakMap;function _g(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ar(n){return xi(n)?n:wu(n,!1,lg,dg,Ed)}function vg(n){return wu(n,!1,ug,pg,Td)}function gc(n){return wu(n,!0,cg,mg,Ad)}function wu(n,e,t,i,r){if(!It(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=_g(km(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function cr(n){return xi(n)?cr(n.__v_raw):!!(n&&n.__v_isReactive)}function xi(n){return!!(n&&n.__v_isReadonly)}function kn(n){return!!(n&&n.__v_isShallow)}function Ru(n){return n?!!n.__v_raw:!1}function At(n){const e=n&&n.__v_raw;return e?At(e):n}function xg(n){return!wt(n,"__v_skip")&&Object.isExtensible(n)&&ld(n,"__v_skip",!0),n}const Gn=n=>It(n)?ar(n):n,ur=n=>It(n)?gc(n):n;function dn(n){return n?n.__v_isRef===!0:!1}function Rn(n){return wd(n,!1)}function vl(n){return wd(n,!0)}function wd(n,e){return dn(n)?n:new Sg(n,e)}class Sg{constructor(e,t){this.dep=new Tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:At(e),this._value=t?e:Gn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||kn(e)||xi(e);e=i?e:At(e),fi(e,t)&&(this._rawValue=e,this._value=i?e:Gn(e),this.dep.trigger())}}function Kn(n){return dn(n)?n.value:n}const Mg={get:(n,e,t)=>e==="__v_raw"?n:Kn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return dn(r)&&!dn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Rd(n){return cr(n)?n:new Proxy(n,Mg)}class yg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ot!==this)return md(this,!0),!0}get value(){const e=this.dep.track();return vd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function bg(n,e,t=!1){let i,r;return ht(n)?i=n:(i=n.get,r=n.set),new yg(i,r,t)}const Ra={},yo=new WeakMap;let Tr;function Eg(n,e=!1,t=Tr){if(t){let i=yo.get(t);i||yo.set(t,i=[]),i.push(n)}}function Tg(n,e,t=Ft){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=y=>r?y:kn(y)||r===!1||r===0?Bi(y,1):Bi(y);let u,f,h,p,v=!1,b=!1;if(dn(n)?(f=()=>n.value,v=kn(n)):cr(n)?(f=()=>c(n),v=!0):ot(n)?(b=!0,v=n.some(y=>cr(y)||kn(y)),f=()=>n.map(y=>{if(dn(y))return y.value;if(cr(y))return c(y);if(ht(y))return l?l(y,2):y()})):ht(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){$i();try{h()}finally{qi()}}const y=Tr;Tr=u;try{return l?l(n,3,[p]):n(p)}finally{Tr=y}}:f=gi,e&&r){const y=f,A=r===!0?1/0:r;f=()=>Bi(y(),A)}const g=eg(),m=()=>{u.stop(),g&&g.active&&vu(g.effects,u)};if(s&&e){const y=e;e=(...A)=>{const w=y(...A);return m(),w}}let T=b?new Array(n.length).fill(Ra):Ra;const I=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(y||r||v||(b?A.some((w,O)=>fi(w,T[O])):fi(A,T))){h&&h();const w=Tr;Tr=u;try{const O=[A,T===Ra?void 0:b&&T[0]===Ra?[]:T,p];T=A,l?l(e,3,O):e(...O)}finally{Tr=w}}}else u.run()};return o&&o(I),u=new dd(f),u.scheduler=a?()=>a(I,!1):I,p=y=>Eg(y,!1,u),h=u.onStop=()=>{const y=yo.get(u);if(y){if(l)l(y,4);else for(const A of y)A();yo.delete(u)}},e?i?I(!0):T=u.run():a?a(I.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Bi(n,e=1/0,t){if(e<=0||!It(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,dn(n))Bi(n.value,e,t);else if(ot(n))for(let i=0;i<n.length;i++)Bi(n[i],e,t);else if(cs(n)||lr(n))n.forEach(i=>{Bi(i,e,t)});else if(ad(n)){for(const i in n)Bi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Bi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pa(n,e,t,i){try{return i?n(...i):n()}catch(r){qo(r,e,t)}}function ti(n,e,t,i){if(ht(n)){const r=pa(n,e,t,i);return r&&rd(r)&&r.catch(s=>{qo(s,e,t)}),r}if(ot(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ti(n[s],e,t,i));return r}}function qo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ft;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){$i(),pa(s,null,10,[n,l,c]),qi();return}}Ag(n,t,r,i,a)}function Ag(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const xn=[];let li=-1;const rs=[];let sr=null,jr=0;const Cd=Promise.resolve();let bo=null;function wg(n){const e=bo||Cd;return n?e.then(this?n.bind(this):n):e}function Rg(n){let e=li+1,t=xn.length;for(;e<t;){const i=e+t>>>1,r=xn[i],s=ta(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Cu(n){if(!(n.flags&1)){const e=ta(n),t=xn[xn.length-1];!t||!(n.flags&2)&&e>=ta(t)?xn.push(n):xn.splice(Rg(e),0,n),n.flags|=1,Pd()}}function Pd(){bo||(bo=Cd.then(Dd))}function Cg(n){if(!ot(n))sr&&n.id===-1?sr.splice(jr+1,0,n):n.flags&1||(rs.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)rs.push(n[e]);Pd()}function dh(n,e,t=li+1){for(;t<xn.length;t++){const i=xn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;xn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ld(n){if(rs.length){const e=[...new Set(rs)].sort((t,i)=>ta(t)-ta(i));if(rs.length=0,sr){for(let t=0;t<e.length;t++)sr.push(e[t]);return}for(sr=e,jr=0;jr<sr.length;jr++){const t=sr[jr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}sr=null,jr=0}}const ta=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Dd(n){try{for(li=0;li<xn.length;li++){const e=xn[li];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;li<xn.length;li++){const e=xn[li];e&&(e.flags&=-2)}li=-1,xn.length=0,Ld(),bo=null,(xn.length||rs.length)&&Dd()}}let Hn=null,Id=null;function Eo(n){const e=Hn;return Hn=n,Id=n&&n.type.__scopeId||null,e}function Pg(n,e=Hn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Eh(-1);const s=Eo(e),a=Ir.length;let o;try{o=n(...r)}finally{for(let l=Ir.length;l>a;l--)ip();Eo(s),i._d&&Eh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function nn(n,e){if(Hn===null)return n;const t=Qo(Hn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=Ft]=e[r];s&&(ht(s)&&(s={mounted:s,updated:s}),s.deep&&Bi(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function _r(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&($i(),ti(l,t,8,[n.el,o,n,e]),qi())}}function Lg(n,e){if(Sn){let t=Sn.provides;const i=Sn.parent&&Sn.parent.provides;i===t&&(t=Sn.provides=Object.create(i)),t[n]=e}}function ho(n,e,t=!1){const i=C_();if(i||as){let r=as?as._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ht(e)?e.call(i&&i.proxy):e}}const Dg=Symbol.for("v-scx"),Ig=()=>ho(Dg);function ss(n,e,t){return Ud(n,e,t)}function Ud(n,e,t=Ft){const{immediate:i,deep:r,flush:s,once:a}=t,o=ln({},t),l=e&&i||!e&&s!=="post";let c;if(ra){if(s==="sync"){const p=Ig();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=gi,p.resume=gi,p.pause=gi,p}}const u=Sn;o.call=(p,v,b)=>ti(p,u,v,b);let f=!1;s==="post"?o.scheduler=p=>{An(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,v)=>{v?p():Cu(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Tg(n,e,o);return ra&&(c?c.push(h):l&&h()),h}function Ug(n,e,t){const i=this.proxy,r=Xt(n)?n.includes(".")?Nd(i,n):()=>i[n]:n.bind(i,i);let s;ht(e)?s=e:(s=e.handler,t=e);const a=ma(this),o=Ud(r,s.bind(i),t);return a(),o}function Nd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Ng=Symbol("_vte"),Yo=n=>n.__isTeleport,xl=Symbol("_leaveCb");function Fg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Yi){e=t;break}}return e}function Fd(n){if(!Lu(n))return Yo(n.type)&&n.children?Fg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ht(t.default))return t.default()}}function Pu(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Pu(Yo(t.type)&&Fd(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Og(n,e){return ht(n)?ln({name:n.name},e,{setup:n}):n}function Od(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ph(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const To=new WeakMap;function Xs(n,e,t,i,r=!1){if(ot(n)){n.forEach((b,g)=>Xs(b,e&&(ot(e)?e[g]:e),t,i,r));return}if($s(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Xs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Qo(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ft?o.refs={}:o.refs,f=o.setupState,h=At(f),p=f===Ft?id:b=>ph(u,b)?!1:wt(h,b),v=(b,g)=>!(g&&ph(u,g));if(c!=null&&c!==l){if(mh(e),Xt(c))u[c]=null,p(c)&&(f[c]=null);else if(dn(c)){const b=e;v(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(ht(l))pa(l,o,12,[a,u]);else{const b=Xt(l),g=dn(l);if(b||g){const m=()=>{if(n.f){const T=b?p(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)ot(T)&&vu(T,s);else if(ot(T))T.includes(s)||T.push(s);else if(b)u[l]=[s],p(l)&&(f[l]=u[l]);else{const I=[s];v(l,n.k)&&(l.value=I),n.k&&(u[n.k]=I)}}else b?(u[l]=a,p(l)&&(f[l]=a)):g&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const T=()=>{m(),To.delete(n)};T.id=-1,To.set(n,T),An(T,t)}else mh(n),m()}}}function mh(n){const e=To.get(n);e&&(e.flags|=8,To.delete(n))}Xo().requestIdleCallback;Xo().cancelIdleCallback;const $s=n=>!!n.type.__asyncLoader,Lu=n=>n.type.__isKeepAlive;function Bg(n,e){Bd(n,"a",e)}function zg(n,e){Bd(n,"da",e)}function Bd(n,e,t=Sn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ko(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Lu(r.parent.vnode)&&Vg(i,e,t,r),r=r.parent}}function Vg(n,e,t,i){const r=Ko(e,n,i,!0);zd(()=>{vu(i[e],r)},t)}function Ko(n,e,t=Sn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{$i();const o=ma(t),l=ti(e,t,n,a);return o(),qi(),l});return i?r.unshift(s):r.push(s),s}}const Zi=n=>(e,t=Sn)=>{(!ra||n==="sp")&&Ko(n,(...i)=>e(...i),t)},Hg=Zi("bm"),_c=Zi("m"),kg=Zi("bu"),Gg=Zi("u"),Wg=Zi("bum"),zd=Zi("um"),Xg=Zi("sp"),$g=Zi("rtg"),qg=Zi("rtc");function Yg(n,e=Sn){Ko("ec",n,e)}const Kg=Symbol.for("v-ndc");function rn(n,e,t,i){let r;const s=t,a=ot(n);if(a||Xt(n)){const o=a&&cr(n);let l=!1,c=!1;o&&(l=!kn(n),c=xi(n),n=$o(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ur(Gn(n[u])):Gn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(It(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const vc=n=>n?op(n)?Qo(n):vc(n.parent):null,qs=ln(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>vc(n.parent),$root:n=>vc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Hd(n),$forceUpdate:n=>n.f||(n.f=()=>{Cu(n.update)}),$nextTick:n=>n.n||(n.n=wg.bind(n.proxy)),$watch:n=>Ug.bind(n)}),Sl=(n,e)=>n!==Ft&&!n.__isScriptSetup&&wt(n,e),Zg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Sl(i,e))return a[e]=1,i[e];if(r!==Ft&&wt(r,e))return a[e]=2,r[e];if(wt(s,e))return a[e]=3,s[e];if(t!==Ft&&wt(t,e))return a[e]=4,t[e];xc&&(a[e]=0)}}const c=qs[e];let u,f;if(c)return e==="$attrs"&&hn(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Ft&&wt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,wt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Sl(r,e)?(r[e]=t,!0):i!==Ft&&wt(i,e)?(i[e]=t,!0):wt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==Ft&&o[0]!=="$"&&wt(n,o)||Sl(e,o)||wt(s,o)||wt(i,o)||wt(qs,o)||wt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:wt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function gh(n){return ot(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let xc=!0;function Jg(n){const e=Hd(n),t=n.proxy,i=n.ctx;xc=!1,e.beforeCreate&&_h(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:b,deactivated:g,beforeDestroy:m,beforeUnmount:T,destroyed:I,unmounted:y,render:A,renderTracked:w,renderTriggered:O,errorCaptured:M,serverPrefetch:C,expose:B,inheritAttrs:V,components:J,directives:ie,filters:k}=e;if(c&&Qg(c,i,null),a)for(const te in a){const de=a[te];ht(de)&&(i[te]=de.bind(t))}if(r){const te=r.call(t,t);It(te)&&(n.data=ar(te))}if(xc=!0,s)for(const te in s){const de=s[te],oe=ht(de)?de.bind(t,t):ht(de.get)?de.get.bind(t,t):gi,_e=!ht(de)&&ht(de.set)?de.set.bind(t):gi,me=Ar({get:oe,set:_e});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>me.value,set:De=>me.value=De})}if(o)for(const te in o)Vd(o[te],i,t,te);if(l){const te=ht(l)?l.call(t):l;Reflect.ownKeys(te).forEach(de=>{Lg(de,te[de])})}u&&_h(u,n,"c");function he(te,de){ot(de)?de.forEach(oe=>te(oe.bind(t))):de&&te(de.bind(t))}if(he(Hg,f),he(_c,h),he(kg,p),he(Gg,v),he(Bg,b),he(zg,g),he(Yg,M),he(qg,w),he($g,O),he(Wg,T),he(zd,y),he(Xg,C),ot(B))if(B.length){const te=n.exposed||(n.exposed={});B.forEach(de=>{Object.defineProperty(te,de,{get:()=>t[de],set:oe=>t[de]=oe,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===gi&&(n.render=A),V!=null&&(n.inheritAttrs=V),J&&(n.components=J),ie&&(n.directives=ie),C&&Od(n)}function Qg(n,e,t=gi){ot(n)&&(n=Sc(n));for(const i in n){const r=n[i];let s;It(r)?"default"in r?s=ho(r.from||i,r.default,!0):s=ho(r.from||i):s=ho(r),dn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function _h(n,e,t){ti(ot(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vd(n,e,t,i){let r=i.includes(".")?Nd(t,i):()=>t[i];if(Xt(n)){const s=e[n];ht(s)&&ss(r,s)}else if(ht(n))ss(r,n.bind(t));else if(It(n))if(ot(n))n.forEach(s=>Vd(s,e,t,i));else{const s=ht(n.handler)?n.handler.bind(t):e[n.handler];ht(s)&&ss(r,s,n)}}function Hd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ao(l,c,a,!0)),Ao(l,e,a)),It(e)&&s.set(e,l),l}function Ao(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ao(n,s,t,!0),r&&r.forEach(a=>Ao(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=jg[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const jg={data:vh,props:xh,emits:xh,methods:Fs,computed:Fs,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:Fs,directives:Fs,watch:t_,provide:vh,inject:e_};function vh(n,e){return e?n?function(){return ln(ht(n)?n.call(this,this):n,ht(e)?e.call(this,this):e)}:e:n}function e_(n,e){return Fs(Sc(n),Sc(e))}function Sc(n){if(ot(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function _n(n,e){return n?[...new Set([].concat(n,e))]:e}function Fs(n,e){return n?ln(Object.create(null),n,e):e}function xh(n,e){return n?ot(n)&&ot(e)?[...new Set([...n,...e])]:ln(Object.create(null),gh(n),gh(e??{})):e}function t_(n,e){if(!n)return e;if(!e)return n;const t=ln(Object.create(null),n);for(const i in e)t[i]=_n(n[i],e[i]);return t}function kd(){return{app:null,config:{isNativeTag:id,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let n_=0;function i_(n,e){return function(i,r=null){ht(i)||(i=ln({},i)),r!=null&&!It(r)&&(r=null);const s=kd(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:n_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:N_,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ht(u.install)?(a.add(u),u.install(c,...f)):ht(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Hi(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Qo(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(ti(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=as;as=c;try{return u()}finally{as=f}}};return c}}let as=null;const r_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Qn(e)}Modifiers`]||n[`${Br(e)}Modifiers`];function s_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ft;let r=t;const s=e.startsWith("update:"),a=s&&r_(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Xt(u)?u.trim():u)),a.number&&(r=r.map(Su)));let o,l=i[o=dl(e)]||i[o=dl(Qn(e))];!l&&s&&(l=i[o=dl(Br(e))]),l&&ti(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,ti(c,n,6,r)}}const a_=new WeakMap;function Gd(n,e,t=!1){const i=t?a_:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ht(n)){const l=c=>{const u=Gd(c,e,!0);u&&(o=!0,ln(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(It(n)&&i.set(n,null),null):(ot(s)?s.forEach(l=>a[l]=null):ln(a,s),It(n)&&i.set(n,a),a)}function Zo(n,e){return!n||!ko(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),wt(n,e[0].toLowerCase()+e.slice(1))||wt(n,Br(e))||wt(n,e))}function Sh(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:b}=n,g=Eo(n);let m,T;try{if(t.shapeFlag&4){const y=r||i,A=y;m=ui(c.call(A,y,u,f,p,h,v)),T=o}else{const y=e;m=ui(y.length>1?y(f,{attrs:o,slots:a,emit:l}):y(f,null)),T=e.props?o:o_(o)}}catch(y){Ir.length=0,qo(y,n,1),m=Hi(Yi)}let I=m;if(T&&b!==!1){const y=Object.keys(T),{shapeFlag:A}=I;y.length&&A&7&&(s&&y.some(Go)&&(T=l_(T,s)),I=us(I,T,!1,!0))}if(t.dirs&&(I=us(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(t.dirs):t.dirs),t.transition){const y=Yo(I.type)&&Fd(I)||I;Pu(y,t.transition)}return m=I,Eo(g),m}const o_=n=>{let e;for(const t in n)(t==="class"||t==="style"||ko(t))&&((e||(e={}))[t]=n[t]);return e},l_=(n,e)=>{const t={};for(const i in n)(!Go(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function c_(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Mh(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Wd(a,i,h)&&!Zo(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Mh(i,a,c):!0:!!a;return!1}function Mh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Wd(e,n,s)&&!Zo(t,s))return!0}return!1}function Wd(n,e,t){const i=n[t],r=e[t];return t==="style"&&It(i)&&It(r)?!ps(i,r):i!==r}function u_({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Xd={},$d=()=>Object.create(Xd),qd=n=>Object.getPrototypeOf(n)===Xd;function h_(n,e,t,i=!1){const r={},s=$d();n.propsDefaults=Object.create(null),Yd(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:vg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function f_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=At(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Zo(n.emitsOptions,h))continue;const p=e[h];if(l)if(wt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=Qn(h);r[v]=Mc(l,o,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Yd(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!wt(e,f)&&((u=Br(f))===f||!wt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Mc(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!wt(e,f))&&(delete s[f],c=!0)}c&&Oi(n.attrs,"set","")}function Yd(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ks(l))continue;const c=e[l];let u;r&&wt(r,u=Qn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Zo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=At(t),c=o||Ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Mc(r,l,f,c[f],n,!wt(c,f))}}return a}function Mc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=wt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ht(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ma(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Br(t))&&(i=!0))}return i}const d_=new WeakMap;function Kd(n,e,t=!1){const i=t?d_:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ht(n)){const u=f=>{l=!0;const[h,p]=Kd(f,e,!0);ln(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return It(n)&&i.set(n,Rr),Rr;if(ot(s))for(let u=0;u<s.length;u++){const f=Qn(s[u]);yh(f)&&(a[f]=Ft)}else if(s)for(const u in s){const f=Qn(u);if(yh(f)){const h=s[u],p=a[f]=ot(h)||ht(h)?{type:h}:ln({},h),v=p.type;let b=!1,g=!0;if(ot(v))for(let m=0;m<v.length;++m){const T=v[m],I=ht(T)&&T.name;if(I==="Boolean"){b=!0;break}else I==="String"&&(g=!1)}else b=ht(v)&&v.name==="Boolean";p[0]=b,p[1]=g,(b||wt(p,"default"))&&o.push(f)}}const c=[a,o];return It(n)&&i.set(n,c),c}function yh(n){return n[0]!=="$"&&!ks(n)}const Du=n=>n==="_"||n==="_ctx"||n==="$stable",Iu=n=>ot(n)?n.map(ui):[ui(n)],p_=(n,e,t)=>{if(e._n)return e;const i=Pg((...r)=>Iu(e(...r)),t);return i._c=!1,i},Zd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Du(r))continue;const s=n[r];if(ht(s))e[r]=p_(r,s,i);else if(s!=null){const a=Iu(s);e[r]=()=>a}}},Jd=(n,e)=>{const t=Iu(e);n.slots.default=()=>t},Qd=(n,e,t)=>{for(const i in e)(t||!Du(i))&&(n[i]=e[i])},m_=(n,e,t)=>{const i=n.slots=$d();if(n.vnode.shapeFlag&32){const r=e._;r?(Qd(i,e,t),t&&ld(i,"_",r,!0)):Zd(e,i)}else e&&Jd(n,e)},g_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ft;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Qd(r,e,t):(s=!e.$stable,Zd(e,r)),a=e}else e&&(Jd(n,e),a={default:1});if(s)for(const o in r)!Du(o)&&a[o]==null&&delete r[o]},An=M_;function __(n){return v_(n)}function v_(n,e){const t=Xo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=gi,insertStaticContent:v}=n,b=(R,F,N,G=null,W=null,H=null,Q=void 0,ue=null,se=!!F.dynamicChildren)=>{if(R===F)return;R&&!As(R,F)&&(G=ce(R),De(R,W,H,!0),R=null),F.patchFlag===-2&&(se=!1,F.dynamicChildren=null),F.dynamicChildren&&R&&R.dynamicChildren&&R.dynamicChildren.hasOnce&&(F.dynamicChildren===Rr&&(F.dynamicChildren=[]),F.dynamicChildren.hasOnce=!0);const{type:ne,ref:Te,shapeFlag:L}=F;switch(ne){case Jo:g(R,F,N,G);break;case Yi:m(R,F,N,G);break;case yl:R==null&&T(F,N,G,Q);break;case Nt:J(R,F,N,G,W,H,Q,ue,se);break;default:L&1?A(R,F,N,G,W,H,Q,ue,se):L&6?ie(R,F,N,G,W,H,Q,ue,se):(L&64||L&128)&&ne.process(R,F,N,G,W,H,Q,ue,se,ke)}Te!=null&&W?Xs(Te,R&&R.ref,H,F||R,!F):Te==null&&R&&R.ref!=null&&Xs(R.ref,null,H,R,!0)},g=(R,F,N,G)=>{if(R==null)i(F.el=o(F.children),N,G);else{const W=F.el=R.el;F.children!==R.children&&c(W,F.children)}},m=(R,F,N,G)=>{R==null?i(F.el=l(F.children||""),N,G):F.el=R.el},T=(R,F,N,G)=>{[R.el,R.anchor]=v(R.children,F,N,G,R.el,R.anchor)},I=({el:R,anchor:F},N,G)=>{let W;for(;R&&R!==F;)W=h(R),i(R,N,G),R=W;i(F,N,G)},y=({el:R,anchor:F})=>{let N;for(;R&&R!==F;)N=h(R),r(R),R=N;r(F)},A=(R,F,N,G,W,H,Q,ue,se)=>{if(F.type==="svg"?Q="svg":F.type==="math"&&(Q="mathml"),R==null)w(F,N,G,W,H,Q,ue,se);else{const ne=R.el&&R.el._isVueCE?R.el:null;try{ne&&ne._beginPatch(),C(R,F,W,H,Q,ue,se)}finally{ne&&ne._endPatch()}}},w=(R,F,N,G,W,H,Q,ue)=>{let se,ne;const{props:Te,shapeFlag:L,transition:K,dirs:U}=R;if(se=R.el=a(R.type,H,Te&&Te.is,Te),L&8?u(se,R.children):L&16&&M(R.children,se,null,G,W,Ml(R,H),Q,ue),U&&_r(R,null,G,"created"),O(se,R,R.scopeId,Q,G),Te){for(const d in Te)d!=="value"&&!ks(d)&&s(se,d,null,Te[d],H,G);"value"in Te&&s(se,"value",null,Te.value,H),(ne=Te.onVnodeBeforeMount)&&si(ne,G,R)}U&&_r(R,null,G,"beforeMount");const _=x_(W,K);_&&K.beforeEnter(se),i(se,F,N),((ne=Te&&Te.onVnodeMounted)||_||U)&&An(()=>{try{ne&&si(ne,G,R),_&&K.enter(se),U&&_r(R,null,G,"mounted")}finally{}},W)},O=(R,F,N,G,W)=>{if(N&&p(R,N),G)for(let H=0;H<G.length;H++)p(R,G[H]);if(W){let H=W.subTree;if(F===H||np(H.type)&&(H.ssContent===F||H.ssFallback===F)){const Q=W.vnode;O(R,Q,Q.scopeId,Q.slotScopeIds,W.parent)}}},M=(R,F,N,G,W,H,Q,ue,se=0)=>{for(let ne=se;ne<R.length;ne++){const Te=R[ne]=ue?Ni(R[ne]):ui(R[ne]);b(null,Te,F,N,G,W,H,Q,ue)}},C=(R,F,N,G,W,H,Q)=>{const ue=F.el=R.el;let{patchFlag:se,dynamicChildren:ne,dirs:Te}=F;se|=R.patchFlag&16;const L=R.props||Ft,K=F.props||Ft;let U;if(N&&vr(N,!1),(U=K.onVnodeBeforeUpdate)&&si(U,N,F,R),Te&&_r(F,R,N,"beforeUpdate"),N&&vr(N,!0),ne&&(!R.dynamicChildren||R.dynamicChildren.length!==ne.length)&&(se=0,Q=!1,ne=null),(L.innerHTML&&K.innerHTML==null||L.textContent&&K.textContent==null)&&u(ue,""),ne?B(R.dynamicChildren,ne,ue,N,G,Ml(F,W),H):Q||de(R,F,ue,null,N,G,Ml(F,W),H,!1),se>0){if(se&16)V(ue,L,K,N,W);else if(se&2&&L.class!==K.class&&s(ue,"class",null,K.class,W),se&4&&s(ue,"style",L.style,K.style,W),se&8){const _=F.dynamicProps;for(let d=0;d<_.length;d++){const P=_[d],Y=L[P],j=K[P];(j!==Y||P==="value")&&s(ue,P,Y,j,W,N)}}se&1&&R.children!==F.children&&u(ue,F.children)}else!Q&&ne==null&&V(ue,L,K,N,W);((U=K.onVnodeUpdated)||Te)&&An(()=>{U&&si(U,N,F,R),Te&&_r(F,R,N,"updated")},G)},B=(R,F,N,G,W,H,Q)=>{for(let ue=0;ue<F.length;ue++){const se=R[ue],ne=F[ue],Te=se.el&&(se.type===Nt||!As(se,ne)||se.shapeFlag&198)?f(se.el):N;b(se,ne,Te,null,G,W,H,Q,!0)}},V=(R,F,N,G,W)=>{if(F!==N){if(F!==Ft)for(const H in F)!ks(H)&&!(H in N)&&s(R,H,F[H],null,W,G);for(const H in N){if(ks(H))continue;const Q=N[H],ue=F[H];Q!==ue&&H!=="value"&&s(R,H,ue,Q,W,G)}"value"in N&&s(R,"value",F.value,N.value,W)}},J=(R,F,N,G,W,H,Q,ue,se)=>{const ne=F.el=R?R.el:o(""),Te=F.anchor=R?R.anchor:o("");let{patchFlag:L,dynamicChildren:K,slotScopeIds:U}=F;U&&(ue=ue?ue.concat(U):U),R==null?(i(ne,N,G),i(Te,N,G),M(F.children||[],N,Te,W,H,Q,ue,se)):L>0&&L&64&&K&&R.dynamicChildren&&R.dynamicChildren.length===K.length?(B(R.dynamicChildren,K,N,W,H,Q,ue),(F.key!=null||W&&F===W.subTree)&&jd(R,F,!0)):de(R,F,N,Te,W,H,Q,ue,se)},ie=(R,F,N,G,W,H,Q,ue,se)=>{F.slotScopeIds=ue,R==null?F.shapeFlag&512?W.ctx.activate(F,N,G,Q,se):k(F,N,G,W,H,Q,se):ee(R,F,se)},k=(R,F,N,G,W,H,Q)=>{const ue=R.component=R_(R,G,W);if(Lu(R)&&(ue.ctx.renderer=ke),P_(ue,!1,Q),ue.asyncDep){if(W&&W.registerDep(ue,he,Q),!R.el){const se=ue.subTree=Hi(Yi);m(null,se,F,N),R.placeholder=se.el}}else he(ue,R,F,N,W,H,Q)},ee=(R,F,N)=>{const G=F.component=R.component;if(c_(R,F,N))if(G.asyncDep&&!G.asyncResolved){F.el=R.el,te(G,F,N);return}else G.next=F,G.update();else F.el=R.el,G.vnode=F},he=(R,F,N,G,W,H,Q)=>{const ue=()=>{if(R.isMounted){let{next:L,bu:K,u:U,parent:_,vnode:d}=R;{const we=ep(R);if(we){L&&(L.el=d.el,te(R,L,Q)),we.asyncDep.then(()=>{An(()=>{R.isUnmounted||ne()},W)});return}}let P=L,Y;vr(R,!1),L?(L.el=d.el,te(R,L,Q)):L=d,K&&uo(K),(Y=L.props&&L.props.onVnodeBeforeUpdate)&&si(Y,_,L,d),vr(R,!0);const j=Sh(R),Ae=R.subTree;R.subTree=j,b(Ae,j,f(Ae.el),ce(Ae),R,W,H),L.el=j.el,P===null&&u_(R,j.el),U&&An(U,W),(Y=L.props&&L.props.onVnodeUpdated)&&An(()=>si(Y,_,L,d),W)}else{let L;const{el:K,props:U}=F,{bm:_,m:d,parent:P,root:Y,type:j}=R,Ae=$s(F);vr(R,!1),_&&uo(_),!Ae&&(L=U&&U.onVnodeBeforeMount)&&si(L,P,F),vr(R,!0);{Y.ce&&Y.ce._hasShadowRoot()&&Y.ce._injectChildStyle(j,R.parent?R.parent.type:void 0);const we=R.subTree=Sh(R);b(null,we,N,G,R,W,H),F.el=we.el}if(d&&An(d,W),!Ae&&(L=U&&U.onVnodeMounted)){const we=F;An(()=>si(L,P,we),W)}(F.shapeFlag&256||P&&$s(P.vnode)&&P.vnode.shapeFlag&256)&&R.a&&An(R.a,W),R.isMounted=!0,F=N=G=null}};R.scope.on();const se=R.effect=new dd(ue);R.scope.off();const ne=R.update=se.run.bind(se),Te=R.job=se.runIfDirty.bind(se);Te.i=R,Te.id=R.uid,se.scheduler=()=>Cu(Te),vr(R,!0),ne()},te=(R,F,N)=>{F.component=R;const G=R.vnode.props;R.vnode=F,R.next=null,f_(R,F.props,G,N),g_(R,F.children,N),$i(),dh(R),qi()},de=(R,F,N,G,W,H,Q,ue,se=!1)=>{const ne=R&&R.children,Te=R?R.shapeFlag:0,L=F.children,{patchFlag:K,shapeFlag:U}=F;if(K>0){if(K&128){_e(ne,L,N,G,W,H,Q,ue,se);return}else if(K&256){oe(ne,L,N,G,W,H,Q,ue,se);return}}U&8?(Te&16&&je(ne,W,H),L!==ne&&u(N,L)):Te&16?U&16?_e(ne,L,N,G,W,H,Q,ue,se):je(ne,W,H,!0):(Te&8&&u(N,""),U&16&&M(L,N,G,W,H,Q,ue,se))},oe=(R,F,N,G,W,H,Q,ue,se)=>{R=R||Rr,F=F||Rr;const ne=R.length,Te=F.length,L=Math.min(ne,Te);let K;for(K=0;K<L;K++){const U=F[K]=se?Ni(F[K]):ui(F[K]);b(R[K],U,N,null,W,H,Q,ue,se)}ne>Te?je(R,W,H,!0,!1,L):M(F,N,G,W,H,Q,ue,se,L)},_e=(R,F,N,G,W,H,Q,ue,se)=>{let ne=0;const Te=F.length;let L=R.length-1,K=Te-1;for(;ne<=L&&ne<=K;){const U=R[ne],_=F[ne]=se?Ni(F[ne]):ui(F[ne]);if(As(U,_))b(U,_,N,null,W,H,Q,ue,se);else break;ne++}for(;ne<=L&&ne<=K;){const U=R[L],_=F[K]=se?Ni(F[K]):ui(F[K]);if(As(U,_))b(U,_,N,null,W,H,Q,ue,se);else break;L--,K--}if(ne>L){if(ne<=K){const U=K+1,_=U<Te?F[U].el:G;for(;ne<=K;)b(null,F[ne]=se?Ni(F[ne]):ui(F[ne]),N,_,W,H,Q,ue,se),ne++}}else if(ne>K)for(;ne<=L;)De(R[ne],W,H,!0),ne++;else{const U=ne,_=ne,d=new Map;for(ne=_;ne<=K;ne++){const Re=F[ne]=se?Ni(F[ne]):ui(F[ne]);Re.key!=null&&d.set(Re.key,ne)}let P,Y=0;const j=K-_+1;let Ae=!1,we=0;const ge=new Array(j);for(ne=0;ne<j;ne++)ge[ne]=0;for(ne=U;ne<=L;ne++){const Re=R[ne];if(Y>=j){De(Re,W,H,!0);continue}let Ge;if(Re.key!=null)Ge=d.get(Re.key);else for(P=_;P<=K;P++)if(ge[P-_]===0&&As(Re,F[P])){Ge=P;break}Ge===void 0?De(Re,W,H,!0):(ge[Ge-_]=ne+1,Ge>=we?we=Ge:Ae=!0,b(Re,F[Ge],N,null,W,H,Q,ue,se),Y++)}const Se=Ae?S_(ge):Rr;for(P=Se.length-1,ne=j-1;ne>=0;ne--){const Re=_+ne,Ge=F[Re],Fe=F[Re+1],Ie=Re+1<Te?Fe.el||tp(Fe):G;ge[ne]===0?b(null,Ge,N,Ie,W,H,Q,ue,se):Ae&&(P<0||ne!==Se[P]?me(Ge,N,Ie,2):P--)}}},me=(R,F,N,G,W=null)=>{const{el:H,type:Q,transition:ue,children:se,shapeFlag:ne}=R;if(ne&6){me(R.component.subTree,F,N,G);return}if(ne&128){R.suspense.move(F,N,G);return}if(ne&64){Q.move(R,F,N,ke);return}if(Q===Nt){i(H,F,N);for(let L=0;L<se.length;L++)me(se[L],F,N,G);i(R.anchor,F,N);return}if(Q===yl){I(R,F,N);return}if(G!==2&&ne&1&&ue)if(G===0)ue.persisted&&!H[xl]?i(H,F,N):(ue.beforeEnter(H),i(H,F,N),An(()=>ue.enter(H),W));else{const{leave:L,delayLeave:K,afterLeave:U}=ue,_=()=>{R.ctx.isUnmounted?r(H):i(H,F,N)},d=()=>{const P=H._isLeaving||!!H[xl];H._isLeaving&&H[xl](!0),ue.persisted&&!P?_():L(H,()=>{_(),U&&U()})};K?K(H,_,d):d()}else i(H,F,N)},De=(R,F,N,G=!1,W=!1)=>{const{type:H,props:Q,ref:ue,children:se,dynamicChildren:ne,shapeFlag:Te,patchFlag:L,dirs:K,cacheIndex:U,memo:_}=R;if((L===-2||ne&&ne.hasOnce)&&(W=!1),ue!=null&&($i(),Xs(ue,null,N,R,!0),qi()),U!=null&&(!R.ctx||R.ctx===F)&&(F.renderCache[U]=void 0),Te&256){F.ctx.deactivate(R);return}const d=Te&1&&K,P=!$s(R);let Y;if(P&&(Y=Q&&Q.onVnodeBeforeUnmount)&&si(Y,F,R),Te&6)nt(R.component,N,G);else{if(Te&128){R.suspense.unmount(N,G);return}d&&_r(R,null,F,"beforeUnmount"),Te&64?R.type.remove(R,F,N,ke,G):ne&&!ne.hasOnce&&(H!==Nt||L>0&&L&64)?je(ne,F,N,!1,!0):(H===Nt&&L&384||!W&&Te&16)&&je(se,F,N),G&&Be(R)}const j=_!=null&&U==null;(P&&(Y=Q&&Q.onVnodeUnmounted)||d||j)&&An(()=>{Y&&si(Y,F,R),d&&_r(R,null,F,"unmounted"),j&&(R.el=null)},N)},Be=R=>{const{type:F,el:N,anchor:G,transition:W}=R;if(F===Nt){rt(N,G);return}if(F===yl){y(R),W&&!W.persisted&&W.afterLeave&&W.afterLeave();return}const H=()=>{r(N),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(R.shapeFlag&1&&W&&!W.persisted){const{leave:Q,delayLeave:ue}=W,se=()=>Q(N,H);ue?ue(R.el,H,se):se()}else H()},rt=(R,F)=>{let N;for(;R!==F;)N=h(R),r(R),R=N;r(F)},nt=(R,F,N)=>{const{bum:G,scope:W,job:H,subTree:Q,um:ue,m:se,a:ne}=R;bh(se),bh(ne),G&&uo(G),W.stop(),H?(H.flags|=8,De(Q,R,F,N)):R.vnode.el&&Q&&(Q.transition=R.vnode.transition,De(Q,R,F,N)),ue&&An(ue,F),An(()=>{R.isUnmounted=!0},F)},je=(R,F,N,G=!1,W=!1,H=0)=>{for(let Q=H;Q<R.length;Q++)De(R[Q],F,N,G,W)},ce=R=>{if(R.shapeFlag&6)return ce(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const F=h(R.anchor||R.el),N=F&&F[Ng];return N?h(N):F};let re=!1;const be=(R,F,N)=>{let G;R==null?F._vnode&&(De(F._vnode,null,null,!0),G=F._vnode.component):b(F._vnode||null,R,F,null,null,null,N),F._vnode=R,re||(re=!0,dh(G),Ld(),re=!1)},ke={p:b,um:De,m:me,r:Be,mt:k,mc:M,pc:de,pbc:B,n:ce,o:n};return{render:be,hydrate:void 0,createApp:i_(be)}}function Ml({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function vr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function x_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function jd(n,e,t=!1){const i=n.children,r=e.children;if(ot(i)&&ot(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ni(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&jd(a,o)),o.type===Jo&&(o.patchFlag===-1&&(o=r[s]=Ni(o)),o.el=a.el),o.type===Yi&&!o.el&&(o.el=a.el)}}function S_(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function ep(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ep(e)}function bh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function tp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?tp(e.subTree):null}const np=n=>n.__isSuspense;function M_(n,e){e&&e.pendingBranch?ot(n)?e.effects.push(...n):e.effects.push(n):Cg(n)}const Nt=Symbol.for("v-fgt"),Jo=Symbol.for("v-txt"),Yi=Symbol.for("v-cmt"),yl=Symbol.for("v-stc"),Ir=[];let Dn=null;function at(n=!1){Ir.push(Dn=n?null:[])}function ip(){Ir.pop(),Dn=Ir[Ir.length-1]||null}let na=1;function Eh(n,e=!1){na+=n,n<0&&Dn&&e&&(Dn.hasOnce=!0)}function rp(n){return n.dynamicChildren=na>0?Dn||Rr:null,ip(),na>0&&Dn&&Dn.push(n),n}function lt(n,e,t,i,r,s){return rp(pe(n,e,t,i,r,s,!0))}function y_(n,e,t,i,r){return rp(Hi(n,e,t,i,r,!0))}function sp(n){return n?n.__v_isVNode===!0:!1}function As(n,e){return n.type===e.type&&n.key===e.key}const ap=({key:n})=>n??null,fo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Xt(n)||dn(n)||ht(n)?{i:Hn,r:n,k:e,f:!!t}:n:null);function pe(n,e=null,t=null,i=0,r=null,s=n===Nt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ap(e),ref:e&&fo(e),scopeId:Id,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Hn};return o?(wo(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Xt(t)?8:16),na>0&&!a&&Dn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Dn.push(l),l}const Hi=b_;function b_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Kg)&&(n=Yi),sp(n)){const o=us(n,e,!0);return t&&wo(o,t),na>0&&!s&&Dn&&(o.shapeFlag&6?Dn[Dn.indexOf(n)]=o:Dn.push(o)),o.patchFlag=-2,o}if(U_(n)&&(n=n.__vccOpts),e){e=E_(e);let{class:o,style:l}=e;o&&!Xt(o)&&(e.class=On(o)),It(l)&&(Ru(l)&&!ot(l)&&(l=ln({},l)),e.style=Mu(l))}const a=Xt(n)?1:np(n)?128:Yo(n)?64:It(n)?4:ht(n)?2:0;return pe(n,e,t,i,r,a,s,!0)}function E_(n){return n?Ru(n)||qd(n)?ln({},n):n:null}function us(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?T_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ap(c),ref:e&&e.ref?t&&s?ot(s)?s.concat(fo(e)):[s,fo(e)]:fo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&us(n.ssContent),ssFallback:n.ssFallback&&us(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Pu(u,l.clone(u)),u}function Tt(n=" ",e=0){return Hi(Jo,null,n,e)}function ri(n="",e=!1){return e?(at(),y_(Yi,null,n)):Hi(Yi,null,n)}function ui(n){return n==null||typeof n=="boolean"?Hi(Yi):ot(n)?Hi(Nt,null,n.slice()):sp(n)?Ni(n):Hi(Jo,null,String(n))}function Ni(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:us(n)}function wo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ot(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),wo(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!qd(e)?e._ctx=Hn:r===3&&Hn&&(Hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ht(e)){if(i&65){wo(n,{default:e});return}e={default:e,_ctx:Hn},t=32}else e=String(e),i&64?(t=16,e=[Tt(e)]):t=8;n.children=e,n.shapeFlag|=t}function T_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=On([e.class,i.class]));else if(r==="style")e.style=Mu([e.style,i.style]);else if(ko(r)){const s=e[r],a=i[r];a&&s!==a&&!(ot(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!Go(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function si(n,e,t,i=null){ti(n,e,7,[t,i])}const A_=kd();let w_=0;function R_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||A_,s={uid:w_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kd(i,r),emitsOptions:Gd(i,r),emit:null,emitted:null,propsDefaults:Ft,inheritAttrs:i.inheritAttrs,ctx:Ft,data:Ft,props:Ft,attrs:Ft,slots:Ft,refs:Ft,setupState:Ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=s_.bind(null,s),n.ce&&n.ce(s),s}let Sn=null;const C_=()=>Sn||Hn;let Ro,ia;{const n=Xo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Ro=e("__VUE_INSTANCE_SETTERS__",t=>Sn=t),ia=e("__VUE_SSR_SETTERS__",t=>ra=t)}const ma=n=>{const e=Sn;return Ro(n),n.scope.on(),()=>{n.scope.off(),Ro(e)}},Th=()=>{Sn&&Sn.scope.off(),Ro(null)};function op(n){return n.vnode.shapeFlag&4}let ra=!1;function P_(n,e=!1,t=!1){e&&ia(e);const{props:i,children:r}=n.vnode,s=op(n);h_(n,i,s,e),m_(n,r,t||e);const a=s?L_(n,e):void 0;return e&&ia(!1),a}function L_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zg);const{setup:i}=t;if(i){$i();const r=n.setupContext=i.length>1?I_(n):null,s=ma(n),a=pa(i,n,0,[n.props,r]),o=rd(a);if(qi(),s(),(o||n.sp)&&!$s(n)&&Od(n),o){if(a.then(Th,Th),e)return a.then(l=>{ia(!0);try{Ah(n,l,e)}finally{ia(!1)}}).catch(l=>{qo(l,n,0)});n.asyncDep=a}else Ah(n,a)}else lp(n)}function Ah(n,e,t){ht(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:It(e)&&(n.setupState=Rd(e)),lp(n)}function lp(n,e,t){const i=n.type;n.render||(n.render=i.render||gi);{const r=ma(n);$i();try{Jg(n)}finally{qi(),r()}}}const D_={get(n,e){return hn(n,"get",""),n[e]}};function I_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,D_),slots:n.slots,emit:n.emit,expose:e}}function Qo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Rd(xg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qs)return qs[t](n)},has(e,t){return t in e||t in qs}})):n.proxy}function U_(n){return ht(n)&&"__vccOpts"in n}const Ar=(n,e)=>bg(n,e,ra),N_="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yc;const wh=typeof window<"u"&&window.trustedTypes;if(wh)try{yc=wh.createPolicy("vue",{createHTML:n=>n})}catch{}const cp=yc?n=>yc.createHTML(n):n=>n,F_="http://www.w3.org/2000/svg",O_="http://www.w3.org/1998/Math/MathML",Ui=typeof document<"u"?document:null,Rh=Ui&&Ui.createElement("template"),B_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Ui.createElementNS(F_,n):e==="mathml"?Ui.createElementNS(O_,n):t?Ui.createElement(n,{is:t}):Ui.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ui.createTextNode(n),createComment:n=>Ui.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ui.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Rh.innerHTML=cp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Rh.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},z_=Symbol("_vtc");function V_(n,e,t){const i=n[z_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Co=Symbol("_vod"),up=Symbol("_vsh"),H_={name:"show",beforeMount(n,{value:e},{transition:t}){n[Co]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ws(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ws(n,!0),i.enter(n)):i.leave(n,()=>{ws(n,!1)}):ws(n,e))},beforeUnmount(n,{value:e}){ws(n,e)}};function ws(n,e){n.style.display=e?n[Co]:"none",n[up]=!e}const k_=Symbol(""),G_=/(?:^|;)\s*display\s*:/;function W_(n,e,t){const i=n.style,r=Xt(t);let s=!1;if(t&&!r){if(e)if(Xt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Os(i,o,"")}else for(const a in e)t[a]==null&&Os(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?$_(n,a,!Xt(e)&&e?e[a]:void 0,o)||Os(i,a,o):Os(i,a,"")}}else if(r){if(e!==t){const a=i[k_];a&&(t+=";"+a),i.cssText=t,s=G_.test(t)}}else e&&n.removeAttribute("style");Co in n&&(n[Co]=s?i.display:"",n[up]&&(i.display="none"))}const Ca=/\s*!important$/;function Os(n,e,t){if(ot(t))t.forEach(i=>Os(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Ca.test(t)?n.setProperty(e,t.replace(Ca,""),"important"):n.setProperty(e,t);else{const i=X_(n,e);Ca.test(t)?n.setProperty(Br(i),t.replace(Ca,""),"important"):n[i]=t}}const Ch=["Webkit","Moz","ms"],bl={};function X_(n,e){const t=bl[e];if(t)return t;let i=Qn(e);if(i!=="filter"&&i in n)return bl[e]=i;i=od(i);for(let r=0;r<Ch.length;r++){const s=Ch[r]+i;if(s in n)return bl[e]=s}return e}function $_(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Xt(i)&&t===i}const Ph="http://www.w3.org/1999/xlink";function Lh(n,e,t,i,r,s=Zm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ph,e.slice(6,e.length)):n.setAttributeNS(Ph,e,t):t==null||s&&!cd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":vi(t)?String(t):t)}function Dh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?cp(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=cd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function wr(n,e,t,i){n.addEventListener(e,t,i)}function q_(n,e,t,i){n.removeEventListener(e,t,i)}const Ih=Symbol("_vei");function Y_(n,e,t,i,r=null){const s=n[Ih]||(n[Ih]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=J_(e);if(i){const c=s[e]=e0(i,r);wr(n,o,c,l)}else a&&(q_(n,o,a,l),s[e]=void 0)}}const K_=/(Once|Passive|Capture)$/,Z_=/^on:?(?:Once|Passive|Capture)$/;function J_(n){let e,t;for(;(t=n.match(K_))&&!Z_.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Br(n.slice(2)),e]}let El=0;const Q_=Promise.resolve(),j_=()=>El||(Q_.then(()=>El=0),El=Date.now());function e0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(ot(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&ti(c,e,5,o)}}else ti(r,e,5,[i])};return t.value=n,t.attached=j_(),t}const Uh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,t0=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?V_(n,i,a):e==="style"?W_(n,t,i):ko(e)?Go(e)||Y_(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n0(n,e,i,a))?(Dh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lh(n,e,i,a,s,e!=="value")):n._isVueCE&&(i0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Xt(i)))?Dh(n,Qn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Lh(n,e,i,a))};function n0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Uh(e)&&ht(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Uh(e)&&Xt(t)?!1:e in n}function i0(n,e){const t=n._def.props;if(!t)return!1;const i=Qn(e);return Array.isArray(t)?t.some(r=>Qn(r)===i):Object.keys(t).some(r=>Qn(r)===i)}const Po=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ot(e)?t=>uo(e,t):e};function r0(n){n.target.composing=!0}function Nh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cr=Symbol("_assign"),Pa=Symbol("_initialValue");function Tl(n,e,t){return e&&(n=n.trim()),t&&(n=Su(n)),n}const Ri={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[Pa]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Pa]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Cr]=Po(r);const s=i||r.props&&r.props.type==="number";wr(n,e?"change":"input",a=>{a.target.composing||n[Cr](Tl(n.value,t,s))}),(t||s)&&wr(n,"change",()=>{n.value=Tl(n.value,t,s)}),e||(wr(n,"compositionstart",r0),wr(n,"compositionend",Nh),wr(n,"change",Nh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[Pa];delete n[Pa],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[Cr](Tl(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[Cr]=Po(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Su(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},xr={deep:!0,created(n,e,t){n[Cr]=Po(t),wr(n,"change",()=>{const i=n._modelValue,r=s0(n),s=n.checked,a=n[Cr];if(ot(i)){const o=ud(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(cs(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(hp(n,s))})},mounted:Fh,beforeUpdate(n,e,t){n[Cr]=Po(t),Fh(n,e,t)}};function Fh(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(ot(e))r=ud(e,i.props.value)>-1;else if(cs(e))r=e.has(i.props.value);else{if(e===t)return;r=ps(e,hp(n,!0))}n.checked!==r&&(n.checked=r)}function s0(n){return"_value"in n?n._value:n.value}function hp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const a0=ln({patchProp:t0},B_);let Oh;function o0(){return Oh||(Oh=__(a0))}const l0=((...n)=>{const e=o0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=u0(i);if(!r)return;const s=e._component;!ht(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,c0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function c0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function u0(n){return Xt(n)?document.querySelector(n):n}const La=Math.PI/180,Da={haStar:1,cStar:.25,rhoFStar:.38};function h0(n,e){return{x:n*(Math.sin(e)-e*Math.cos(e)),y:n*(Math.cos(e)+e*Math.sin(e))}}function f0(n){return Math.tan(n)-n}function Bh(n,e){const t=n/e;return Math.sqrt(Math.max(0,t*t-1))}function zh(n,e){const t=Math.cos(e),i=Math.sin(e);return{x:n.x*t-n.y*i,y:n.x*i+n.y*t}}function Bs(n,e){return{x:n*Math.cos(e),y:n*Math.sin(e)}}function d0(n,e,t,i){const r=[];for(let s=0;s<=i;s++){const a=e+(t-e)*s/i;r.push(Bs(n,a))}return r}function p0(n,e=16){const{z:t,module:i,alpha:r}=n,s=i*t/2,a=s*Math.cos(r),o=s+Da.haStar*i,l=s-(Da.haStar+Da.cStar)*i,c=Math.PI*i,u=c*Math.cos(r),f=Math.PI*i/2,h=2*Math.PI/t,p=a>l,v=f0(r),b=Math.PI/(2*t)+v,g=Bh(o,a),m=Math.atan(g),T=g-Math.atan(g),I=Math.PI/(2*t)+v-T,y=2*o*I,A=I<=0,w=2/(Math.sin(r)*Math.sin(r)),O=t<w,M=re=>({x:-re.x,y:re.y}),C=p?0:Bh(l,a),B=(re,be,ke,Le)=>{const R=[];for(let F=0;F<=Le;F++){const N=be+(ke-be)*F/Le,G=zh(h0(a,N),b);R.push(re===1?M(G):G)}return R},V=6,J=re=>{const be=-re,ke=Math.PI/2+be*b,Le=B(re,C,C,1);if(!p)return{j:Le[0],jAngle:Math.atan2(Le[0].y,Le[0].x),fillet:[],flankLo:null};const R=Math.PI/2+be*(h/2),F=(a*a-l*l)/(2*l),N=Math.abs(ke-R),G=Math.sin(N),W=G<1?l*G/(1-G):1/0,H=Math.max(0,Math.min(Da.rhoFStar*i,F*.999,W*.999)),Q=l+H,ue=Math.asin(Math.min(1,H/Q)),se=re===1?ke-ue:ke+ue,ne=Bs(Q,se),Te=Bs(l,se),L=Math.sqrt(Math.max(0,Q*Q-H*H)),K=Bs(L,ke),U=Math.atan2(Te.y-ne.y,Te.x-ne.x);let d=Math.atan2(K.y-ne.y,K.x-ne.x)-U;for(;d>Math.PI;)d-=2*Math.PI;for(;d<-Math.PI;)d+=2*Math.PI;d=Math.abs(d)*-re;const P=[];for(let Y=0;Y<=V;Y++){const j=U+d*Y/V;P.push({x:ne.x+H*Math.cos(j),y:ne.y+H*Math.sin(j)})}return{j:Te,jAngle:se,fillet:P,flankLo:Le[0]}},ie=J(1),k=J(-1),ee=B(1,C,g,e),he=B(-1,C,g,e),te=ee[e],de=he[e],oe=Math.atan2(te.y,te.x),_e=Math.atan2(de.y,de.x),me=[];me.push(...ie.fillet),ie.flankLo&&me.push(ie.flankLo),me.push(...ee.slice(1));let De=_e-oe;for(;De>Math.PI;)De-=2*Math.PI;for(;De<-Math.PI;)De+=2*Math.PI;const Be=Math.max(4,Math.ceil(Math.abs(De)/h*24));me.push(...d0(o,oe,oe+De,Be).slice(1));for(let re=e-1;re>=0;re--)me.push(he[re]);k.flankLo&&(me.push(k.flankLo),me.push(k.fillet[k.fillet.length-1])),me.push(...k.fillet.slice(0,-1).reverse());const rt=[],nt=6,je=re=>{const be=rt[rt.length-1];(!be||Math.hypot(re.x-be.x,re.y-be.y)>1e-10)&&rt.push(re)};for(let re=0;re<t;re++){const be=re*h,ke=me.map(F=>zh(F,be)),Le=k.jAngle+be,R=ie.jAngle+(re+1)*h;for(const F of ke.slice(0,-1))je(F);for(let F=1;F<=nt;F++){const N=Le+(R-Le)*F/nt;je(Bs(l,N))}}if(rt.length>1){const re=rt[0],be=rt[rt.length-1];Math.hypot(re.x-be.x,re.y-be.y)<1e-10&&rt.pop()}const ce=Array.from({length:t},(re,be)=>Math.PI/2+be*h);return{input:n,pitchR:s,baseR:a,addendumR:o,dedendumR:l,baseAboveRoot:p,circularPitch:c,basePitch:u,toothThickness:f,beta:b,taTip:g,zMinValue:w,undercut:O,alphaTip:m,tipThickness:y,pointed:A,toothProfile:me,outline:rt,toothCenterAngles:ce,jAngleRight:ie.jAngle,jAngleLeft:k.jAngle}}function Vh(n,e,t,i){const r=Math.cos(i),s=Math.sin(i);return n.map(a=>({x:e+a.x*r-a.y*s,y:t+a.x*s+a.y*r}))}function m0(n){const e=[];return(!Number.isFinite(n.z)||n.z<4||Math.abs(n.z-Math.round(n.z))>1e-9)&&e.push("齿数必须为 ≥4 的整数"),(!(n.module>0)||!Number.isFinite(n.module))&&e.push("模数必须 > 0"),(!(n.alpha>0)||n.alpha>=Math.PI/2)&&e.push("压力角必须在 (0°, 90°) 内"),n.faceWidth>0||e.push("齿宽必须 > 0"),e}const g0="modulepreload",_0=function(n,e){return new URL(n,e).href},Hh={},v0=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let a=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=a(t.map(u=>{if(u=_0(u,i),u in Hh)return;Hh[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let b=o.length-1;b>=0;b--){const g=o[b];if(g.href===u&&(!f||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":g0,f||(v.as="script"),v.crossOrigin="",v.href=u,c&&v.setAttribute("nonce",c),document.head.appendChild(v),f)return new Promise((b,g)=>{v.addEventListener("load",b),v.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};async function x0(n={}){var e,t=n,i=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){const{createRequire:S}=await v0(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var a=S(import.meta.url)}var o=import.meta.url,l="";function c(S){return t.locateFile?t.locateFile(S,l):l+S}var u,f;if(s){var h=a("fs");o.startsWith("file:")&&(l=a("path").dirname(a("url").fileURLToPath(o))+"/"),f=S=>{S=g(S)?new URL(S):S;var x=h.readFileSync(S);return x},u=async(S,x=!0)=>{S=g(S)?new URL(S):S;var D=h.readFileSync(S,x?void 0:"utf8");return D},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(i||r){try{l=new URL(".",o).href}catch{}r&&(f=S=>{var x=new XMLHttpRequest;return x.open("GET",S,!1),x.responseType="arraybuffer",x.send(null),new Uint8Array(x.response)}),u=async S=>{if(g(S))return new Promise((D,z)=>{var Z=new XMLHttpRequest;Z.open("GET",S,!0),Z.responseType="arraybuffer",Z.onload=()=>{if(Z.status==200||Z.status==0&&Z.response){D(Z.response);return}z(Z.status)},Z.onerror=z,Z.send(null)});var x=await fetch(S,{credentials:"same-origin"});if(x.ok)return x.arrayBuffer();throw new Error(x.status+" : "+x.url)}}console.log.bind(console);var p=console.error.bind(console),v,b=!1,g=S=>S.startsWith("file://"),m,T,I,y,A,w,O,M,C,B,V,J,ie=!1;function k(){var S=Ea.buffer;I=new Int8Array(S),A=new Int16Array(S),t.HEAPU8=y=new Uint8Array(S),w=new Uint16Array(S),O=new Int32Array(S),M=new Uint32Array(S),C=new Float32Array(S),B=new Float64Array(S),V=new BigInt64Array(S),J=new BigUint64Array(S)}function ee(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Le(t.preRun.shift());ce(ke)}function he(){ie=!0,Es.E()}function te(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)be(t.postRun.shift());ce(re)}function de(S){t.onAbort?.(S),S="Aborted("+S+")",p(S),b=!0,S+=". Build with -sASSERTIONS for more info.";var x=new WebAssembly.RuntimeError(S);throw T?.(x),x}var oe;function _e(){return t.locateFile?c("clipper2z.wasm"):new URL(""+new URL("clipper2z-Cj78y2Ub.wasm",import.meta.url).href,import.meta.url).href}function me(S){if(S==oe&&v)return new Uint8Array(v);if(f)return f(S);throw"both async and sync fetching of the wasm failed"}async function De(S){if(!v)try{var x=await u(S);return new Uint8Array(x)}catch{}return me(S)}async function Be(S,x){try{var D=await De(S),z=await WebAssembly.instantiate(D,x);return z}catch(Z){p(`failed to asynchronously prepare wasm: ${Z}`),de(Z)}}async function rt(S,x,D){if(!S&&!g(x)&&!s)try{var z=fetch(x,{credentials:"same-origin"}),Z=await WebAssembly.instantiateStreaming(z,D);return Z}catch(ve){p(`wasm streaming compile failed: ${ve}`),p("falling back to ArrayBuffer instantiation")}return Be(x,D)}function nt(){var S={a:Im};return S}async function je(){function S(ve,Me){return Es=ve.exports,Dm(Es),k(),Es}function x(ve){return S(ve.instance)}var D=nt();if(t.instantiateWasm)return new Promise((ve,Me)=>{t.instantiateWasm(D,(ye,Ce)=>{ve(S(ye))})});oe??=_e();var z=await rt(v,oe,D),Z=x(z);return Z}var ce=S=>{for(;S.length>0;)S.shift()(t)},re=[],be=S=>re.push(S),ke=[],Le=S=>ke.push(S);class R{constructor(x){this.excPtr=x,this.ptr=x-24}set_type(x){M[this.ptr+4>>2]=x}get_type(){return M[this.ptr+4>>2]}set_destructor(x){M[this.ptr+8>>2]=x}get_destructor(){return M[this.ptr+8>>2]}set_caught(x){x=x?1:0,I[this.ptr+12]=x}get_caught(){return I[this.ptr+12]!=0}set_rethrown(x){x=x?1:0,I[this.ptr+13]=x}get_rethrown(){return I[this.ptr+13]!=0}init(x,D){this.set_adjusted_ptr(0),this.set_type(x),this.set_destructor(D)}set_adjusted_ptr(x){M[this.ptr+16>>2]=x}get_adjusted_ptr(){return M[this.ptr+16>>2]}}var F=0,N=(S,x,D)=>{var z=new R(S);throw z.init(x,D),F=S,F},G=()=>de(""),W={},H=S=>{for(;S.length;){var x=S.pop(),D=S.pop();D(x)}};function Q(S){return this.fromWireType(M[S>>2])}var ue={},se={},ne={},Te=class extends Error{constructor(x){super(x),this.name="InternalError"}},L=S=>{throw new Te(S)},K=(S,x,D)=>{S.forEach(ye=>ne[ye]=x);function z(ye){var Ce=D(ye);Ce.length!==S.length&&L("Mismatched type converter count");for(var it=0;it<S.length;++it)j(S[it],Ce[it])}var Z=new Array(x.length),ve=[],Me=0;x.forEach((ye,Ce)=>{se.hasOwnProperty(ye)?Z[Ce]=se[ye]:(ve.push(ye),ue.hasOwnProperty(ye)||(ue[ye]=[]),ue[ye].push(()=>{Z[Ce]=se[ye],++Me,Me===ve.length&&z(Z)}))}),ve.length===0&&z(Z)},U=S=>{var x=W[S];delete W[S];var D=x.rawConstructor,z=x.rawDestructor,Z=x.fields,ve=Z.map(Me=>Me.getterReturnType).concat(Z.map(Me=>Me.setterArgumentType));K([S],ve,Me=>{var ye={};return Z.forEach((Ce,it)=>{var tt=Ce.fieldName,Et=Me[it],Gt=Me[it].optional,Mt=Ce.getter,Wt=Ce.getterContext,tn=Me[it+Z.length],Xn=Ce.setter,bn=Ce.setterContext;ye[tt]={read:Ai=>Et.fromWireType(Mt(Wt,Ai)),write:(Ai,gn)=>{var Ta=[];Xn(bn,Ai,tn.toWireType(Ta,gn)),H(Ta)},optional:Gt}}),[{name:x.name,fromWireType:Ce=>{var it={};for(var tt in ye)it[tt]=ye[tt].read(Ce);return z(Ce),it},toWireType:(Ce,it)=>{for(var tt in ye)if(!(tt in it)&&!ye[tt].optional)throw new TypeError(`Missing field: "${tt}"`);var Et=D();for(tt in ye)ye[tt].write(Et,it[tt]);return Ce!==null&&Ce.push(z,Et),Et},readValueFromPointer:Q,destructorFunction:z}]})},_=S=>{for(var x="";;){var D=y[S++];if(!D)return x;x+=String.fromCharCode(D)}},d=class extends Error{constructor(x){super(x),this.name="BindingError"}},P=S=>{throw new d(S)};function Y(S,x,D={}){var z=x.name;if(S||P(`type "${z}" must have a positive integer typeid pointer`),se.hasOwnProperty(S)){if(D.ignoreDuplicateRegistrations)return;P(`Cannot register type '${z}' twice`)}if(se[S]=x,delete ne[S],ue.hasOwnProperty(S)){var Z=ue[S];delete ue[S],Z.forEach(ve=>ve())}}function j(S,x,D={}){return Y(S,x,D)}var Ae=(S,x,D)=>{switch(x){case 1:return D?z=>I[z]:z=>y[z];case 2:return D?z=>A[z>>1]:z=>w[z>>1];case 4:return D?z=>O[z>>2]:z=>M[z>>2];case 8:return D?z=>V[z>>3]:z=>J[z>>3];default:throw new TypeError(`invalid integer width (${x}): ${S}`)}},we=(S,x,D,z,Z)=>{x=_(x);const ve=z===0n;let Me=ye=>ye;if(ve){const ye=D*8;Me=Ce=>BigInt.asUintN(ye,Ce),Z=Me(Z)}j(S,{name:x,fromWireType:Me,toWireType:(ye,Ce)=>(typeof Ce=="number"&&(Ce=BigInt(Ce)),Ce),readValueFromPointer:Ae(x,D,!ve),destructorFunction:null})},ge=(S,x,D,z)=>{x=_(x),j(S,{name:x,fromWireType:function(Z){return!!Z},toWireType:function(Z,ve){return ve?D:z},readValueFromPointer:function(Z){return this.fromWireType(y[Z])},destructorFunction:null})},Se=S=>({count:S.count,deleteScheduled:S.deleteScheduled,preservePointerOnDelete:S.preservePointerOnDelete,ptr:S.ptr,ptrType:S.ptrType,smartPtr:S.smartPtr,smartPtrType:S.smartPtrType}),Re=S=>{function x(D){return D.$$.ptrType.registeredClass.name}P(x(S)+" instance already deleted")},Ge=!1,Fe=S=>{},Ie=S=>{S.smartPtr?S.smartPtrType.rawDestructor(S.smartPtr):S.ptrType.registeredClass.rawDestructor(S.ptr)},Je=S=>{S.count.value-=1;var x=S.count.value===0;x&&Ie(S)},et=S=>globalThis.FinalizationRegistry?(Ge=new FinalizationRegistry(x=>{Je(x.$$)}),et=x=>{var D=x.$$,z=!!D.smartPtr;if(z){var Z={$$:D};Ge.register(x,Z,x)}return x},Fe=x=>Ge.unregister(x),et(S)):(et=x=>x,S),ct=()=>{let S=q.prototype;Object.assign(S,{isAliasOf(D){if(!(this instanceof q)||!(D instanceof q))return!1;var z=this.$$.ptrType.registeredClass,Z=this.$$.ptr;D.$$=D.$$;for(var ve=D.$$.ptrType.registeredClass,Me=D.$$.ptr;z.baseClass;)Z=z.upcast(Z),z=z.baseClass;for(;ve.baseClass;)Me=ve.upcast(Me),ve=ve.baseClass;return z===ve&&Z===Me},clone(){if(this.$$.ptr||Re(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var D=et(Object.create(Object.getPrototypeOf(this),{$$:{value:Se(this.$$)}}));return D.$$.count.value+=1,D.$$.deleteScheduled=!1,D},delete(){this.$$.ptr||Re(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&P("Object already scheduled for deletion"),Fe(this),Je(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Re(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&P("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const x=Symbol.dispose;x&&(S[x]=S.delete)};function q(){}var Ue=(S,x)=>Object.defineProperty(x,"name",{value:S}),xe={},Oe=(S,x,D)=>{if(S[x].overloadTable===void 0){var z=S[x];S[x]=function(...Z){return S[x].overloadTable.hasOwnProperty(Z.length)||P(`Function '${D}' called with an invalid number of arguments (${Z.length}) - expects one of (${S[x].overloadTable})!`),S[x].overloadTable[Z.length].apply(this,Z)},S[x].overloadTable=[],S[x].overloadTable[z.argCount]=z}},ze=(S,x,D)=>{t.hasOwnProperty(S)?((D===void 0||t[S].overloadTable!==void 0&&t[S].overloadTable[D]!==void 0)&&P(`Cannot register public name '${S}' twice`),Oe(t,S,S),t[S].overloadTable.hasOwnProperty(D)&&P(`Cannot register multiple overloads of a function with the same number of arguments (${D})!`),t[S].overloadTable[D]=x):(t[S]=x,t[S].argCount=D)},Ee=48,Qe=57,Ke=S=>{S=S.replace(/[^a-zA-Z0-9_]/g,"$");var x=S.charCodeAt(0);return x>=Ee&&x<=Qe?`_${S}`:S};function Lt(S,x,D,z,Z,ve,Me,ye){this.name=S,this.constructor=x,this.instancePrototype=D,this.rawDestructor=z,this.baseClass=Z,this.getActualType=ve,this.upcast=Me,this.downcast=ye,this.pureVirtualFunctions=[]}var gt=(S,x,D)=>{for(;x!==D;)x.upcast||P(`Expected null or instance of ${D.name}, got an instance of ${x.name}`),S=x.upcast(S),x=x.baseClass;return S},mn=S=>{if(S===null)return"null";var x=typeof S;return x==="object"||x==="array"||x==="function"?S.toString():""+S};function Un(S,x){if(x===null)return this.isReference&&P(`null is not a valid ${this.name}`),0;x.$$||P(`Cannot pass "${mn(x)}" as a ${this.name}`),x.$$.ptr||P(`Cannot pass deleted object as a pointer of type ${this.name}`);var D=x.$$.ptrType.registeredClass,z=gt(x.$$.ptr,D,this.registeredClass);return z}function al(S,x){var D;if(x===null)return this.isReference&&P(`null is not a valid ${this.name}`),this.isSmartPointer?(D=this.rawConstructor(),S!==null&&S.push(this.rawDestructor,D),D):0;(!x||!x.$$)&&P(`Cannot pass "${mn(x)}" as a ${this.name}`),x.$$.ptr||P(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&x.$$.ptrType.isConst&&P(`Cannot convert argument of type ${x.$$.smartPtrType?x.$$.smartPtrType.name:x.$$.ptrType.name} to parameter type ${this.name}`);var z=x.$$.ptrType.registeredClass;if(D=gt(x.$$.ptr,z,this.registeredClass),this.isSmartPointer)switch(x.$$.smartPtr===void 0&&P("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:x.$$.smartPtrType===this?D=x.$$.smartPtr:P(`Cannot convert argument of type ${x.$$.smartPtrType?x.$$.smartPtrType.name:x.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:D=x.$$.smartPtr;break;case 2:if(x.$$.smartPtrType===this)D=x.$$.smartPtr;else{var Z=x.clone();D=this.rawShare(D,We.toHandle(()=>Z.delete())),S!==null&&S.push(this.rawDestructor,D)}break;default:P("Unsupporting sharing policy")}return D}function ol(S,x){if(x===null)return this.isReference&&P(`null is not a valid ${this.name}`),0;x.$$||P(`Cannot pass "${mn(x)}" as a ${this.name}`),x.$$.ptr||P(`Cannot pass deleted object as a pointer of type ${this.name}`),x.$$.ptrType.isConst&&P(`Cannot convert argument of type ${x.$$.ptrType.name} to parameter type ${this.name}`);var D=x.$$.ptrType.registeredClass,z=gt(x.$$.ptr,D,this.registeredClass);return z}var vs=(S,x,D)=>{if(x===D)return S;if(D.baseClass===void 0)return null;var z=vs(S,x,D.baseClass);return z===null?null:D.downcast(z)},xs={},ll=(S,x)=>{for(x===void 0&&P("ptr should not be undefined");S.baseClass;)x=S.upcast(x),S=S.baseClass;return x},va=(S,x)=>(x=ll(S,x),xs[x]),pr=(S,x)=>{(!x.ptrType||!x.ptr)&&L("makeClassHandle requires ptr and ptrType");var D=!!x.smartPtrType,z=!!x.smartPtr;return D!==z&&L("Both smartPtrType and smartPtr must be specified"),x.count={value:1},et(Object.create(S,{$$:{value:x,writable:!0}}))};function Ei(S){var x=this.getPointee(S);if(!x)return this.destructor(S),null;var D=va(this.registeredClass,x);if(D!==void 0){if(D.$$.count.value===0)return D.$$.ptr=x,D.$$.smartPtr=S,D.clone();var z=D.clone();return this.destructor(S),z}function Z(){return this.isSmartPointer?pr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:x,smartPtrType:this,smartPtr:S}):pr(this.registeredClass.instancePrototype,{ptrType:this,ptr:S})}var ve=this.registeredClass.getActualType(x),Me=xe[ve];if(!Me)return Z.call(this);var ye;this.isConst?ye=Me.constPointerType:ye=Me.pointerType;var Ce=vs(x,this.registeredClass,ye.registeredClass);return Ce===null?Z.call(this):this.isSmartPointer?pr(ye.registeredClass.instancePrototype,{ptrType:ye,ptr:Ce,smartPtrType:this,smartPtr:S}):pr(ye.registeredClass.instancePrototype,{ptrType:ye,ptr:Ce})}var Ss=()=>{Object.assign(mr.prototype,{getPointee(S){return this.rawGetPointee&&(S=this.rawGetPointee(S)),S},destructor(S){this.rawDestructor?.(S)},readValueFromPointer:Q,fromWireType:Ei})};function mr(S,x,D,z,Z,ve,Me,ye,Ce,it,tt){this.name=S,this.registeredClass=x,this.isReference=D,this.isConst=z,this.isSmartPointer=Z,this.pointeeType=ve,this.sharingPolicy=Me,this.rawGetPointee=ye,this.rawConstructor=Ce,this.rawShare=it,this.rawDestructor=tt,!Z&&x.baseClass===void 0?z?(this.toWireType=Un,this.destructorFunction=null):(this.toWireType=ol,this.destructorFunction=null):this.toWireType=al}var Ms=(S,x,D)=>{t.hasOwnProperty(S)||L("Replacing nonexistent public symbol"),t[S].overloadTable!==void 0&&D!==void 0?t[S].overloadTable[D]=x:(t[S]=x,t[S].argCount=D)},gr=[],xa=S=>{var x=gr[S];return x||(gr[S]=x=th.get(S)),x},Jt=(S,x,D=!1)=>{S=_(S);function z(){var ve=xa(x);return ve}var Z=z();return typeof Z!="function"&&P(`unknown function pointer with signature ${S}: ${x}`),Z};class Sa extends Error{}var ys=S=>{var x=eh(S),D=_(x);return ji(x),D},Ji=(S,x)=>{var D=[],z={};function Z(ve){if(!z[ve]&&!se[ve]){if(ne[ve]){ne[ve].forEach(Z);return}D.push(ve),z[ve]=!0}}throw x.forEach(Z),new Sa(`${S}: `+D.map(ys).join([", "]))},cl=(S,x,D,z,Z,ve,Me,ye,Ce,it,tt,Et,Gt)=>{tt=_(tt),ve=Jt(Z,ve),ye&&=Jt(Me,ye),it&&=Jt(Ce,it),Gt=Jt(Et,Gt);var Mt=Ke(tt);ze(Mt,function(){Ji(`Cannot construct ${tt} due to unbound types`,[z])}),K([S,x,D],z?[z]:[],Wt=>{Wt=Wt[0];var tn,Xn;z?(tn=Wt.registeredClass,Xn=tn.instancePrototype):Xn=q.prototype;var bn=Ue(tt,function(...fl){if(Object.getPrototypeOf(this)!==Ai)throw new d(`Use 'new' to construct ${tt}`);if(gn.constructor_body===void 0)throw new d(`${tt} has no accessible constructor`);var ah=gn.constructor_body[fl.length];if(ah===void 0)throw new d(`Tried to invoke ctor of ${tt} with invalid number of parameters (${fl.length}) - expected (${Object.keys(gn.constructor_body).toString()}) parameters instead!`);return ah.apply(this,fl)}),Ai=Object.create(Xn,{constructor:{value:bn}});bn.prototype=Ai;var gn=new Lt(tt,bn,Ai,Gt,tn,ve,ye,it);gn.baseClass&&(gn.baseClass.__derivedClasses??=[],gn.baseClass.__derivedClasses.push(gn));var Ta=new mr(tt,gn,!0,!1,!1),rh=new mr(tt+"*",gn,!1,!1,!1),sh=new mr(tt+" const*",gn,!1,!0,!1);return xe[S]={pointerType:rh,constPointerType:sh},Ms(Mt,bn),[Ta,rh,sh]})},bs=(S,x)=>{for(var D=[],z=0;z<S;z++)D.push(M[x+z*4>>2]);return D};function Ma(S){for(var x=1;x<S.length;++x)if(S[x]!==null&&S[x].destructorFunction===void 0)return!0;return!1}function ya(S,x,D,z){var Z=Ma(S),ve=S.length-2,Me=[],ye=["fn"];x&&ye.push("thisWired");for(var Ce=0;Ce<ve;++Ce)Me.push(`arg${Ce}`),ye.push(`arg${Ce}Wired`);Me=Me.join(","),ye=ye.join(",");var it=`return function (${Me}) {
`;Z&&(it+=`var destructors = [];
`);var tt=Z?"destructors":"null",Et=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];x&&(it+=`var thisWired = toClassParamWire(${tt}, this);
`);for(var Ce=0;Ce<ve;++Ce){var Gt=`toArg${Ce}Wire`;it+=`var arg${Ce}Wired = ${Gt}(${tt}, arg${Ce});
`,Et.push(Gt)}if(it+=(D||z?"var rv = ":"")+`invoker(${ye});
`,Z)it+=`runDestructors(destructors);
`;else for(var Ce=x?1:2;Ce<S.length;++Ce){var Mt=Ce===1?"thisWired":"arg"+(Ce-2)+"Wired";S[Ce].destructorFunction!==null&&(it+=`${Mt}_dtor(${Mt});
`,Et.push(`${Mt}_dtor`))}return D&&(it+=`var ret = fromRetWire(rv);
return ret;
`),it+=`}
`,new Function(Et,it)}function E(S,x,D,z,Z,ve){var Me=x.length;Me<2&&P("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ye=x[1]!==null&&D!==null,Ce=Ma(x),it=!x[0].isVoid,tt=x[0],Et=x[1],Gt=[S,P,z,Z,H,tt.fromWireType.bind(tt),Et?.toWireType.bind(Et)],Mt=2;Mt<Me;++Mt){var Wt=x[Mt];Gt.push(Wt.toWireType.bind(Wt))}if(!Ce)for(var Mt=ye?1:2;Mt<x.length;++Mt)x[Mt].destructorFunction!==null&&Gt.push(x[Mt].destructorFunction);var Xn=ya(x,ye,it,ve)(...Gt);return Ue(S,Xn)}var X=(S,x,D,z,Z,ve)=>{var Me=bs(x,D);Z=Jt(z,Z),K([],[S],ye=>{ye=ye[0];var Ce=`constructor ${ye.name}`;if(ye.registeredClass.constructor_body===void 0&&(ye.registeredClass.constructor_body=[]),ye.registeredClass.constructor_body[x-1]!==void 0)throw new d(`Cannot register multiple constructors with identical number of parameters (${x-1}) for class '${ye.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return ye.registeredClass.constructor_body[x-1]=()=>{Ji(`Cannot construct ${ye.name} due to unbound types`,Me)},K([],Me,it=>(it.splice(1,0,null),ye.registeredClass.constructor_body[x-1]=E(Ce,it,null,Z,ve),[])),[]})},fe=S=>{S=S.trim();const x=S.indexOf("(");return x===-1?S:S.slice(0,x)},le=(S,x,D,z,Z,ve,Me,ye,Ce,it)=>{var tt=bs(D,z);x=_(x),x=fe(x),ve=Jt(Z,ve,Ce),K([],[S],Et=>{Et=Et[0];var Gt=`${Et.name}.${x}`;x.startsWith("@@")&&(x=Symbol[x.substring(2)]),ye&&Et.registeredClass.pureVirtualFunctions.push(x);function Mt(){Ji(`Cannot call ${Gt} due to unbound types`,tt)}var Wt=Et.registeredClass.instancePrototype,tn=Wt[x];return tn===void 0||tn.overloadTable===void 0&&tn.className!==Et.name&&tn.argCount===D-2?(Mt.argCount=D-2,Mt.className=Et.name,Wt[x]=Mt):(Oe(Wt,x,Gt),Wt[x].overloadTable[D-2]=Mt),K([],tt,Xn=>{var bn=E(Gt,Xn,Et,ve,Me,Ce);return Wt[x].overloadTable===void 0?(bn.argCount=D-2,Wt[x]=bn):Wt[x].overloadTable[D-2]=bn,[]}),[]})},ae=(S,x,D)=>(S instanceof Object||P(`${D} with invalid "this": ${S}`),S instanceof x.registeredClass.constructor||P(`${D} incompatible with "this" of type ${S.constructor.name}`),S.$$.ptr||P(`cannot call emscripten binding method ${D} on deleted object`),gt(S.$$.ptr,S.$$.ptrType.registeredClass,x.registeredClass)),Ve=(S,x,D,z,Z,ve,Me,ye,Ce,it)=>{x=_(x),Z=Jt(z,Z),K([],[S],tt=>{tt=tt[0];var Et=`${tt.name}.${x}`,Gt={get(){Ji(`Cannot access ${Et} due to unbound types`,[D,Me])},enumerable:!0,configurable:!0};return Ce?Gt.set=()=>Ji(`Cannot access ${Et} due to unbound types`,[D,Me]):Gt.set=Mt=>P(Et+" is a read-only property"),Object.defineProperty(tt.registeredClass.instancePrototype,x,Gt),K([],Ce?[D,Me]:[D],Mt=>{var Wt=Mt[0],tn={get(){var bn=ae(this,tt,Et+" getter");return Wt.fromWireType(Z(ve,bn))},enumerable:!0};if(Ce){Ce=Jt(ye,Ce);var Xn=Mt[1];tn.set=function(bn){var Ai=ae(this,tt,Et+" setter"),gn=[];Ce(it,Ai,Xn.toWireType(gn,bn)),H(gn)}}return Object.defineProperty(tt.registeredClass.instancePrototype,x,tn),[]}),[]})},Xe=[],Ne=[0,1,,1,null,1,!0,1,!1,1],qe=S=>{S>9&&--Ne[S+1]===0&&(Ne[S]=void 0,Xe.push(S))},We={toValue:S=>(S||P(`Cannot use deleted val. handle = ${S}`),Ne[S]),toHandle:S=>{switch(S){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const x=Xe.pop()||Ne.length;return Ne[x]=S,Ne[x+1]=1,x}}}},ft={name:"emscripten::val",fromWireType:S=>{var x=We.toValue(S);return qe(S),x},toWireType:(S,x)=>We.toHandle(x),readValueFromPointer:Q,destructorFunction:null},pt=S=>j(S,ft),Ye=(S,x,D)=>{switch(x){case 1:return D?function(z){return this.fromWireType(I[z])}:function(z){return this.fromWireType(y[z])};case 2:return D?function(z){return this.fromWireType(A[z>>1])}:function(z){return this.fromWireType(w[z>>1])};case 4:return D?function(z){return this.fromWireType(O[z>>2])}:function(z){return this.fromWireType(M[z>>2])};default:throw new TypeError(`invalid integer width (${x}): ${S}`)}},yt=(S,x,D,z)=>{x=_(x);function Z(){}Z.values={},j(S,{name:x,constructor:Z,fromWireType:function(ve){return this.constructor.values[ve]},toWireType:(ve,Me)=>Me.value,readValueFromPointer:Ye(x,D,z),destructorFunction:null}),ze(x,Z)},zt=(S,x)=>{var D=se[S];return D===void 0&&P(`${x} has unknown type ${ys(S)}`),D},Ut=(S,x,D)=>{var z=zt(S,"enum");x=_(x);var Z=z.constructor,ve=Object.create(z.constructor.prototype,{value:{value:D},constructor:{value:Ue(`${z.name}_${x}`,function(){})}});Z.values[D]=ve,Z[x]=ve},Rt=(S,x)=>{switch(x){case 4:return function(D){return this.fromWireType(C[D>>2])};case 8:return function(D){return this.fromWireType(B[D>>3])};default:throw new TypeError(`invalid float width (${x}): ${S}`)}},Qt=(S,x,D)=>{x=_(x),j(S,{name:x,fromWireType:z=>z,toWireType:(z,Z)=>Z,readValueFromPointer:Rt(x,D),destructorFunction:null})},$e=(S,x,D,z,Z,ve,Me,ye)=>{var Ce=bs(x,D);S=_(S),S=fe(S),Z=Jt(z,Z,Me),ze(S,function(){Ji(`Cannot call ${S} due to unbound types`,Ce)},x-1),K([],Ce,it=>{var tt=[it[0],null].concat(it.slice(1));return Ms(S,E(S,tt,null,Z,ve,Me),x-1),[]})},en=(S,x,D,z,Z)=>{x=_(x);const ve=z===0;let Me=Ce=>Ce;if(ve){var ye=32-8*D;Me=Ce=>Ce<<ye>>>ye,Z=Me(Z)}j(S,{name:x,fromWireType:Me,toWireType:(Ce,it)=>it,readValueFromPointer:Ae(x,D,z!==0),destructorFunction:null})},_t=(S,x,D)=>{var z=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],Z=z[x];function ve(Me){var ye=M[Me>>2],Ce=M[Me+4>>2];return new Z(I.buffer,Ce,ye)}D=_(D),j(S,{name:D,fromWireType:ve,readValueFromPointer:ve},{ignoreDuplicateRegistrations:!0})},yn=(S,x,D,z)=>{if(!(z>0))return 0;for(var Z=D,ve=D+z-1,Me=0;Me<S.length;++Me){var ye=S.codePointAt(Me);if(ye<=127){if(D>=ve)break;x[D++]=ye}else if(ye<=2047){if(D+1>=ve)break;x[D++]=192|ye>>6,x[D++]=128|ye&63}else if(ye<=65535){if(D+2>=ve)break;x[D++]=224|ye>>12,x[D++]=128|ye>>6&63,x[D++]=128|ye&63}else{if(D+3>=ve)break;x[D++]=240|ye>>18,x[D++]=128|ye>>12&63,x[D++]=128|ye>>6&63,x[D++]=128|ye&63,Me++}}return x[D]=0,D-Z},Nn=(S,x,D)=>yn(S,y,x,D),ni=S=>{for(var x=0,D=0;D<S.length;++D){var z=S.charCodeAt(D);z<=127?x++:z<=2047?x+=2:z>=55296&&z<=57343?(x+=4,++D):x+=3}return x},Ti=globalThis.TextDecoder&&new TextDecoder,bt=(S,x,D,z)=>{var Z=x+D;if(z)return Z;for(;S[x]&&!(x>=Z);)++x;return x},Vt=(S,x=0,D,z)=>{var Z=bt(S,x,D,z);if(Z-x>16&&S.buffer&&Ti)return Ti.decode(S.subarray(x,Z));for(var ve="";x<Z;){var Me=S[x++];if(!(Me&128)){ve+=String.fromCharCode(Me);continue}var ye=S[x++]&63;if((Me&224)==192){ve+=String.fromCharCode((Me&31)<<6|ye);continue}var Ce=S[x++]&63;if((Me&240)==224?Me=(Me&15)<<12|ye<<6|Ce:Me=(Me&7)<<18|ye<<12|Ce<<6|S[x++]&63,Me<65536)ve+=String.fromCharCode(Me);else{var it=Me-65536;ve+=String.fromCharCode(55296|it>>10,56320|it&1023)}}return ve},ii=(S,x,D)=>S?Vt(y,S,x,D):"",Dt=(S,x)=>{x=_(x),j(S,{name:x,fromWireType(D){var z=M[D>>2],Z=D+4,ve;return ve=ii(Z,z,!0),ji(D),ve},toWireType(D,z){z instanceof ArrayBuffer&&(z=new Uint8Array(z));var Z,ve=typeof z=="string";ve||ArrayBuffer.isView(z)&&z.BYTES_PER_ELEMENT==1||P("Cannot pass non-string to std::string"),ve?Z=ni(z):Z=z.length;var Me=hl(4+Z+1),ye=Me+4;return M[Me>>2]=Z,ve?Nn(z,ye,Z+1):y.set(z,ye),D!==null&&D.push(ji,Me),Me},readValueFromPointer:Q,destructorFunction(D){ji(D)}})},Wn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Qi=(S,x,D)=>{var z=S>>1,Z=bt(w,z,x/2,D);if(Z-z>16&&Wn)return Wn.decode(w.subarray(z,Z));for(var ve="",Me=z;Me<Z;++Me){var ye=w[Me];ve+=String.fromCharCode(ye)}return ve},ba=(S,x,D)=>{if(D??=2147483647,D<2)return 0;D-=2;for(var z=x,Z=D<S.length*2?D/2:S.length,ve=0;ve<Z;++ve){var Me=S.charCodeAt(ve);A[x>>1]=Me,x+=2}return A[x>>1]=0,x-z},um=S=>S.length*2,hm=(S,x,D)=>{for(var z="",Z=S>>2,ve=0;!(ve>=x/4);ve++){var Me=M[Z+ve];if(!Me&&!D)break;z+=String.fromCodePoint(Me)}return z},fm=(S,x,D)=>{if(D??=2147483647,D<4)return 0;for(var z=x,Z=z+D-4,ve=0;ve<S.length;++ve){var Me=S.codePointAt(ve);if(Me>65535&&ve++,O[x>>2]=Me,x+=4,x+4>Z)break}return O[x>>2]=0,x-z},dm=S=>{for(var x=0,D=0;D<S.length;++D){var z=S.codePointAt(D);z>65535&&D++,x+=4}return x},pm=(S,x,D)=>{D=_(D);var z,Z,ve;x===2?(z=Qi,Z=ba,ve=um):(z=hm,Z=fm,ve=dm),j(S,{name:D,fromWireType:Me=>{var ye=M[Me>>2],Ce=z(Me+4,ye*x,!0);return ji(Me),Ce},toWireType:(Me,ye)=>{typeof ye!="string"&&P(`Cannot pass non-string to C++ string type ${D}`);var Ce=ve(ye),it=hl(4+Ce+x);return M[it>>2]=Ce/x,Z(ye,it+4,Ce+x),Me!==null&&Me.push(ji,it),it},readValueFromPointer:Q,destructorFunction(Me){ji(Me)}})},mm=(S,x,D,z,Z,ve)=>{W[S]={name:_(x),rawConstructor:Jt(D,z),rawDestructor:Jt(Z,ve),fields:[]}},gm=(S,x,D,z,Z,ve,Me,ye,Ce,it)=>{W[S].fields.push({fieldName:_(x),getterReturnType:D,getter:Jt(z,Z),getterContext:ve,setterArgumentType:Me,setter:Jt(ye,Ce),setterContext:it})},_m=(S,x)=>{x=_(x),j(S,{isVoid:!0,name:x,fromWireType:()=>{},toWireType:(D,z)=>{}})},ul=[],vm=S=>{var x=ul.length;return ul.push(S),x},xm=(S,x)=>{for(var D=new Array(S),z=0;z<S;++z)D[z]=zt(M[x+z*4>>2],`parameter ${z}`);return D},Sm=(S,x,D)=>{var z=[],Z=S(z,D);return z.length&&(M[x>>2]=We.toHandle(z)),Z},Mm={},ju=S=>{var x=Mm[S];return x===void 0?_(S):x},ym=(S,x,D)=>{var z=8,[Z,...ve]=xm(S,x),Me=Z.toWireType.bind(Z),ye=ve.map(Mt=>Mt.readValueFromPointer.bind(Mt));S--;var Ce={toValue:We.toValue},it=ye.map((Mt,Wt)=>{var tn=`argFromPtr${Wt}`;return Ce[tn]=Mt,`${tn}(args${Wt?"+"+Wt*z:""})`}),tt;switch(D){case 0:tt="toValue(handle)";break;case 2:tt="new (toValue(handle))";break;case 3:tt="";break;case 1:Ce.getStringOrSymbol=ju,tt="toValue(handle)[getStringOrSymbol(methodName)]";break}tt+=`(${it})`,Z.isVoid||(Ce.toReturnWire=Me,Ce.emval_returnValue=Sm,tt=`return emval_returnValue(toReturnWire, destructorsRef, ${tt})`),tt=`return function (handle, methodName, destructorsRef, args) {
  ${tt}
  }`;var Et=new Function(Object.keys(Ce),tt)(...Object.values(Ce)),Gt=`methodCaller<(${ve.map(Mt=>Mt.name)}) => ${Z.name}>`;return vm(Ue(Gt,Et))},bm=(S,x)=>(S=We.toValue(S),x=We.toValue(x),We.toHandle(S[x])),Em=S=>{S>9&&(Ne[S+1]+=1)},Tm=(S,x,D,z,Z)=>ul[S](x,D,z,Z),Am=S=>We.toHandle(ju(S)),wm=S=>{var x=We.toValue(S);H(x),qe(S)},Rm=()=>2147483648,Cm=(S,x)=>Math.ceil(S/x)*x,Pm=S=>{var x=Ea.buffer.byteLength,D=(S-x+65535)/65536|0;try{return Ea.grow(D),k(),1}catch{}},Lm=S=>{var x=y.length;S>>>=0;var D=Rm();if(S>D)return!1;for(var z=1;z<=4;z*=2){var Z=x*(1+.2/z);Z=Math.min(Z,S+100663296);var ve=Math.min(D,Cm(Math.max(S,Z),65536)),Me=Pm(ve);if(Me)return!0}return!1};if(ct(),Ss(),t.noExitRuntime&&t.noExitRuntime,t.print&&t.print,t.printErr&&(p=t.printErr),t.wasmBinary&&(v=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();var eh,hl,ji,Ea,th;function Dm(S){eh=S.F,hl=S.H,ji=S.I,Ea=S.D,th=S.G}var Im={h:N,x:G,v:U,u:we,B:ge,e:cl,g:X,a:le,f:Ve,z:pt,n:yt,c:Ut,t:Qt,b:$e,i:en,d:_t,A:Dt,q:pm,w:mm,p:gm,C:_m,l:ym,m:qe,r:bm,o:Em,k:Tm,s:Am,j:wm,y:Lm};function Um(){ee();function S(){t.calledRun=!0,!b&&(he(),m?.(t),t.onRuntimeInitialized?.(),te())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),S()},1)):S()}var Es;Es=await je(),Um();function Nm(S){if(S.length%2!=0)throw"MakePath64: intArray.length must be even";const x=S.length/2,D=new BigInt64Array(x*3);for(let Z=0,ve=0;Z<S.length;Z+=2,ve+=3){const Me=S[Z],ye=S[Z+1];D[ve]=typeof Me=="bigint"?Me:BigInt(Me),D[ve+1]=typeof ye=="bigint"?ye:BigInt(ye)}let z=new t.Path64;return z.assign(D),z}t.MakePath64=Nm;function Fm(S){if(S.length%3!=0)throw"MakePathZ64: intArray.length must be multiple of 3";const x=new BigInt64Array(S.length);for(let z=0;z<S.length;z++){const Z=S[z];x[z]=typeof Z=="bigint"?Z:BigInt(Z)}let D=new t.Path64;return D.assign(x),D}t.MakePathZ64=Fm;function Om(S){if(S.length%2!=0)throw"MakePathD: intArray.length must be even";const x=S.length/2,D=new Float64Array(x*3);for(let Z=0,ve=0;Z<S.length;Z+=2,ve+=3)D[ve]=S[Z],D[ve+1]=S[Z+1];let z=new t.PathD;return z.assign(D),z}t.MakePathD=Om;function Bm(S){if(S.length%3!=0)throw"MakePathZD: intArray.length must be multiple of 3";const x=S instanceof Float64Array?S:Float64Array.from(S);let D=new t.PathD;return D.assign(x),D}t.MakePathZD=Bm;function nh(S){const x=S.view(),D=new BigInt64Array(x.length);for(let Z=0;Z<x.length;Z++)D[Z]=BigInt(Math.round(x[Z]));let z=new t.Path64;return z.assign(D),z}t.PathDToPath64=nh;function ih(S){const x=S.view(),D=new Float64Array(x.length);for(let Z=0;Z<x.length;Z++)D[Z]=Number(x[Z]);let z=new t.PathD;return z.assign(D),z}t.Path64ToPathD=ih;function zm(S){let x=new t.PathsD;for(let D=0;D<S.size();D++){const z=S.get(D);let Z=ih(z);x.push_back(Z),Z.delete(),z.delete()}return x}t.Paths64ToPathsD=zm;function Vm(S){let x=new t.Paths64;for(let D=0;D<S.size();D++){const z=S.get(D);let Z=nh(z);x.push_back(Z),Z.delete(),z.delete()}return x}return t.PathsDToPaths64=Vm,ie?e=t:e=new Promise((S,x)=>{m=S,T=x}),e}let Al=null;function S0(){return Al||(Al=x0()),Al}function M0(n,e){const t=[];for(const i of e)t.push(i.x,i.y);return n.MakePathD(t)}function kh(n,e){const t=n.PathsD,i=new t;for(const r of e)r.length>=3&&i.push_back(M0(n,r));return i}function y0(n){const e=n.size(),t=[];for(let i=0;i<e;i++){const r=n.get(i);t.push({x:r.x,y:r.y})}return t}function b0(n){const e=[],t=n.size();for(let i=0;i<t;i++)e.push(y0(n.get(i)));return e}async function E0(n,e){const t=await S0(),i=kh(t,n),r=kh(t,e),a=t.IntersectD(i,r,t.FillRule.NonZero,6),o=Math.abs(t.AreaPathsD(a));return{regions:b0(a),area:o,intersects:o>1e-8}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uu="186",ki={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},T0=0,Gh=1,A0=2,po=1,w0=2,zs=3,Ur=0,wn=1,di=2,Gi=0,Ys=1,Wh=2,Xh=3,$h=4,R0=5,es=100,C0=101,P0=102,L0=103,D0=104,I0=200,U0=201,N0=202,F0=203,fp=204,dp=205,O0=206,B0=207,z0=208,V0=209,H0=210,k0=211,G0=212,W0=213,X0=214,bc=0,Ec=1,Tc=2,sa=3,Ac=4,wc=5,Rc=6,Cc=7,pp=0,$0=1,q0=2,_i=0,mp=1,gp=2,_p=3,vp=4,xp=5,Sp=6,Mp=7,yp=300,Nr=301,hs=302,wl=303,Rl=304,jo=306,Pc=1e3,zi=1001,Lc=1002,an=1003,Y0=1004,Ia=1005,fn=1006,Cl=1007,Pr=1008,Ln=1009,bp=1010,Ep=1011,aa=1012,Nu=1013,Si=1014,pi=1015,Mi=1016,Fu=1017,Ou=1018,oa=1020,Tp=35902,Ap=35899,wp=1021,Rp=1022,Jn=1023,Ki=1026,Lr=1027,Cp=1028,Bu=1029,Fr=1030,zu=1031,Vu=1033,mo=33776,go=33777,_o=33778,vo=33779,Dc=35840,Ic=35841,Uc=35842,Nc=35843,Fc=36196,Oc=37492,Bc=37496,zc=37488,Vc=37489,Lo=37490,Hc=37491,kc=37808,Gc=37809,Wc=37810,Xc=37811,$c=37812,qc=37813,Yc=37814,Kc=37815,Zc=37816,Jc=37817,Qc=37818,jc=37819,eu=37820,tu=37821,nu=36492,iu=36494,ru=36495,su=36283,au=36284,Do=36285,ou=36286,K0=3200,lu=0,Z0=1,or="",zn="srgb",Io="srgb-linear",Uo="linear",Ct="srgb",Pl=7680,J0=519,Q0=512,j0=513,ev=514,Hu=515,tv=516,nv=517,ku=518,iv=519,rv=35044,qh="300 es",mi=2e3,la=2001;function sv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function No(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function av(){const n=No("canvas");return n.style.display="block",n}const Yh={};function Kh(...n){const e="THREE."+n.shift();console.log(e,...n)}function Pp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=Pp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function St(...n){n=Pp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function os(...n){const e=n.join(" ");e in Yh||(Yh[e]=!0,st(...n))}function ov(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const lv={[bc]:Ec,[Tc]:Rc,[Ac]:Cc,[sa]:wc,[Ec]:bc,[Rc]:Tc,[Cc]:Ac,[wc]:sa};class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,cu=180/Math.PI;function ms(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function cv(n,e){return(n%e+e)%e}function Ll(n,e,t){return(1-t)*n+t*e}function Rs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const uv={DEG2RAD:Ks};class Pe{static{Pe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],p=s[a+1],v=s[a+2],b=s[a+3];if(f!==b||l!==h||c!==p||u!==v){let g=l*h+c*p+u*v+f*b;g<0&&(h=-h,p=-p,v=-v,b=-b,g=-g);let m=1-o;if(g<.9995){const T=Math.acos(g),I=Math.sin(T);m=Math.sin(m*T)/I,o=Math.sin(o*T)/I,l=l*m+h*o,c=c*m+p*o,u=u*m+v*o,f=f*m+b*o}else{l=l*m+h*o,c=c*m+p*o,u=u*m+v*o,f=f*m+b*o;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-o*p,e[t+2]=c*v+u*p+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${static{$.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dl.copy(this).projectOnVector(e),this.sub(Dl)}reflect(e){return this.sub(Dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dl=new $,Zh=new hr;class ut{static{ut.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],b=r[0],g=r[3],m=r[6],T=r[1],I=r[4],y=r[7],A=r[2],w=r[5],O=r[8];return s[0]=a*b+o*T+l*A,s[3]=a*g+o*I+l*w,s[6]=a*m+o*y+l*O,s[1]=c*b+u*T+f*A,s[4]=c*g+u*I+f*w,s[7]=c*m+u*y+f*O,s[2]=h*b+p*T+v*A,s[5]=h*g+p*I+v*w,s[8]=h*m+p*y+v*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=f*b,e[1]=(r*c-u*i)*b,e[2]=(o*i-r*a)*b,e[3]=h*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-o*t)*b,e[6]=p*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Il.makeScale(e,t)),this}rotate(e){return os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Il.makeRotation(-e)),this}translate(e,t){return os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Il=new ut,Jh=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hv(){const n={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ct&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===or?Uo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Io]:{primaries:e,whitePoint:i,transfer:Uo,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),n}const vt=hv();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vr;class fv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vr===void 0&&(Vr=No("canvas")),Vr.width=e.width,Vr.height=e.height;const r=Vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Vr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=No("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dv=0;class Gu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ul(r[a].image)):s.push(Ul(r[a]))}else s=Ul(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let pv=0;const Nl=new $;class Mn extends dr{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,i=zi,r=zi,s=fn,a=Pr,o=Jn,l=Ln,c=Mn.DEFAULT_ANISOTROPY,u=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=ms(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nl).x}get height(){return this.source.getSize(Nl).y}get depth(){return this.source.getSize(Nl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pc:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pc:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=yp;Mn.DEFAULT_ANISOTROPY=1;class Ht{static{Ht.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(c+1)/2,y=(p+1)/2,A=(m+1)/2,w=(u+h)/4,O=(f+b)/4,M=(v+g)/4;return I>y&&I>A?I<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(I),r=w/i,s=O/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=M/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=O/s,r=M/s),this.set(i,r,s,t),this}let T=Math.sqrt((g-v)*(g-v)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(g-v)/T,this.y=(f-b)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mv extends dr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Mn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gu(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends mv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lp extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gv extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Bt{static{Bt.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,l,c,u,f,h,p,v,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,b,g)}set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,b,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=p,m[7]=v,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,v=o*u,b=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,b=c*f;t[0]=h+b*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=b+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,b=c*f;t[0]=h-b*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=b-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,v=o*u,b=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+b,t[1]=l*f,t[5]=b*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=b-h*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-b*f}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+b,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_v,e,vv)}lookAt(e,t,i){const r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),er.crossVectors(i,Cn),er.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),er.crossVectors(i,Cn)),er.normalize(),Ua.crossVectors(Cn,er),r[0]=er.x,r[4]=Ua.x,r[8]=Cn.x,r[1]=er.y,r[5]=Ua.y,r[9]=Cn.y,r[2]=er.z,r[6]=Ua.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],b=i[6],g=i[10],m=i[14],T=i[3],I=i[7],y=i[11],A=i[15],w=r[0],O=r[4],M=r[8],C=r[12],B=r[1],V=r[5],J=r[9],ie=r[13],k=r[2],ee=r[6],he=r[10],te=r[14],de=r[3],oe=r[7],_e=r[11],me=r[15];return s[0]=a*w+o*B+l*k+c*de,s[4]=a*O+o*V+l*ee+c*oe,s[8]=a*M+o*J+l*he+c*_e,s[12]=a*C+o*ie+l*te+c*me,s[1]=u*w+f*B+h*k+p*de,s[5]=u*O+f*V+h*ee+p*oe,s[9]=u*M+f*J+h*he+p*_e,s[13]=u*C+f*ie+h*te+p*me,s[2]=v*w+b*B+g*k+m*de,s[6]=v*O+b*V+g*ee+m*oe,s[10]=v*M+b*J+g*he+m*_e,s[14]=v*C+b*ie+g*te+m*me,s[3]=T*w+I*B+y*k+A*de,s[7]=T*O+I*V+y*ee+A*oe,s[11]=T*M+I*J+y*he+A*_e,s[15]=T*C+I*ie+y*te+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],b=e[7],g=e[11],m=e[15],T=l*p-c*h,I=o*p-c*f,y=o*h-l*f,A=a*p-c*u,w=a*h-l*u,O=a*f-o*u;return t*(b*T-g*I+m*y)-i*(v*T-g*A+m*w)+r*(v*I-b*A+m*O)-s*(v*y-b*w+g*O)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],b=e[13],g=e[14],m=e[15],T=t*o-i*a,I=t*l-r*a,y=t*c-s*a,A=i*l-r*o,w=i*c-s*o,O=r*c-s*l,M=u*b-f*v,C=u*g-h*v,B=u*m-p*v,V=f*g-h*b,J=f*m-p*b,ie=h*m-p*g,k=T*ie-I*J+y*V+A*B-w*C+O*M;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/k;return e[0]=(o*ie-l*J+c*V)*ee,e[1]=(r*J-i*ie-s*V)*ee,e[2]=(b*O-g*w+m*A)*ee,e[3]=(h*w-f*O-p*A)*ee,e[4]=(l*B-a*ie-c*C)*ee,e[5]=(t*ie-r*B+s*C)*ee,e[6]=(g*y-v*O-m*I)*ee,e[7]=(u*O-h*y+p*I)*ee,e[8]=(a*J-o*B+c*M)*ee,e[9]=(i*B-t*J-s*M)*ee,e[10]=(v*w-b*y+m*T)*ee,e[11]=(f*y-u*w-p*T)*ee,e[12]=(o*C-a*V-l*M)*ee,e[13]=(t*V-i*C+r*M)*ee,e[14]=(b*I-v*A-g*T)*ee,e[15]=(u*A-f*I+h*T)*ee,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,v=s*f,b=a*u,g=a*f,m=o*f,T=l*c,I=l*u,y=l*f,A=i.x,w=i.y,O=i.z;return r[0]=(1-(b+m))*A,r[1]=(p+y)*A,r[2]=(v-I)*A,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+m))*w,r[6]=(g+T)*w,r[7]=0,r[8]=(v+I)*O,r[9]=(g-T)*O,r[10]=(1-(h+b))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Hr.set(r[0],r[1],r[2]).length();const o=Hr.set(r[4],r[5],r[6]).length(),l=Hr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),$n.copy(this);const c=1/a,u=1/o,f=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=mi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let v,b;if(l)v=s/(a-s),b=a*s/(a-s);else if(o===mi)v=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===la)v=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=mi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,b;if(l)v=1/(a-s),b=a/(a-s);else if(o===mi)v=-2/(a-s),b=-(a+s)/(a-s);else if(o===la)v=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hr=new $,$n=new Bt,_v=new $(0,0,0),vv=new $(1,1,1),er=new $,Ua=new $,Cn=new $,jh=new Bt,ef=new hr;class fr{constructor(e=0,t=0,i=0,r=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class Wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xv=0;const tf=new $,kr=new hr,Ci=new Bt,Na=new $,Cs=new $,Sv=new $,Mv=new hr,nf=new $(1,0,0),rf=new $(0,1,0),sf=new $(0,0,1),af={type:"added"},yv={type:"removed"},Gr={type:"childadded",child:null},Fl={type:"childremoved",child:null};class on extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new $,t=new fr,i=new hr,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ut}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Na.copy(e):Na.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Cs,Na,this.up):Ci.lookAt(Na,Cs,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(Ci),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(af),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yv),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(af),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}on.DEFAULT_UP=new $(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ns extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,i),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=cv(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Bl(a,s,e+1/3),this.g=Bl(a,s,e),this.b=Bl(a,s,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=zn){function i(s){s!==void 0&&parseFloat(s)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zn){const i=Dp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return vt.workingToColorSpace(un.copy(this),e),Math.round(mt(un.r*255,0,255))*65536+Math.round(mt(un.g*255,0,255))*256+Math.round(mt(un.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(un.copy(this),t);const i=un.r,r=un.g,s=un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=zn){vt.workingToColorSpace(un.copy(this),e);const t=un.r,i=un.g,r=un.b;return e!==zn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(Fa);const i=Ll(tr.h,Fa.h,t),r=Ll(tr.s,Fa.s,t),s=Ll(tr.l,Fa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new xt;xt.NAMES=Dp;class Ev extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qn=new $,Pi=new $,zl=new $,Li=new $,Wr=new $,Xr=new $,of=new $,Vl=new $,Hl=new $,kl=new $,Gl=new Ht,Wl=new Ht,Xl=new Ht;class Vn{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qn.subVectors(r,t),Pi.subVectors(i,t),zl.subVectors(e,t);const a=qn.dot(qn),o=qn.dot(Pi),l=qn.dot(zl),c=Pi.dot(Pi),u=Pi.dot(zl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Gl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Gl.fromBufferAttribute(e,t),Wl.fromBufferAttribute(e,i),Xl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gl,s.x),a.addScaledVector(Wl,s.y),a.addScaledVector(Xl,s.z),a}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),Pi.subVectors(e,t),qn.cross(Pi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),qn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),Xr.subVectors(s,i),Vl.subVectors(e,i);const l=Wr.dot(Vl),c=Xr.dot(Vl);if(l<=0&&c<=0)return t.copy(i);Hl.subVectors(e,r);const u=Wr.dot(Hl),f=Xr.dot(Hl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Wr,a);kl.subVectors(e,s);const p=Wr.dot(kl),v=Xr.dot(kl);if(v>=0&&p<=v)return t.copy(s);const b=p*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Xr,o);const g=u*v-p*f;if(g<=0&&f-u>=0&&p-v>=0)return of.subVectors(s,r),o=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(of,o);const m=1/(g+b+h);return a=b*m,o=h*m,t.copy(i).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ga{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),Ba.subVectors(this.max,Ps),$r.subVectors(e.a,Ps),qr.subVectors(e.b,Ps),Yr.subVectors(e.c,Ps),nr.subVectors(qr,$r),ir.subVectors(Yr,qr),Sr.subVectors($r,Yr);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Sr.z,Sr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Sr.z,0,-Sr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Sr.y,Sr.x,0];return!$l(t,$r,qr,Yr,Ba)||(t=[1,0,0,0,1,0,0,0,1],!$l(t,$r,qr,Yr,Ba))?!1:(za.crossVectors(nr,ir),t=[za.x,za.y,za.z],$l(t,$r,qr,Yr,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Di=[new $,new $,new $,new $,new $,new $,new $,new $],Yn=new $,Oa=new ga,$r=new $,qr=new $,Yr=new $,nr=new $,ir=new $,Sr=new $,Ps=new $,Ba=new $,za=new $,Mr=new $;function $l(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Mr.fromArray(n,s);const o=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const $t=new $,Va=new Pe;let Tv=0;class Xi extends dr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rv,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ip extends Xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Up extends Xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends Xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Av=new ga,Ls=new $,ql=new $;class el{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Av.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(ql)),this.expandByPoint(Ls.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wv=0;const Fn=new Bt,Yl=new on,Kr=new $,Pn=new ga,Ds=new ga,jt=new $;class pn extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sv(e)?Up:Ip)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Pn.min,Ds.min),Pn.expandByPoint(jt),jt.addVectors(Pn.max,Ds.max),Pn.expandByPoint(jt)):(Pn.expandByPoint(Ds.min),Pn.expandByPoint(Ds.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(Kr.fromBufferAttribute(e,c),jt.add(Kr)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Xi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let M=0;M<i.count;M++)o[M]=new $,l[M]=new $;const c=new $,u=new $,f=new $,h=new Pe,p=new Pe,v=new Pe,b=new $,g=new $;function m(M,C,B){c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,B),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,C),v.fromBufferAttribute(s,B),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const V=1/(p.x*v.y-v.x*p.y);isFinite(V)&&(b.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(V),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(V),o[M].add(b),o[C].add(b),o[B].add(b),l[M].add(g),l[C].add(g),l[B].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let M=0,C=T.length;M<C;++M){const B=T[M],V=B.start,J=B.count;for(let ie=V,k=V+J;ie<k;ie+=3)m(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const I=new $,y=new $,A=new $,w=new $;function O(M){A.fromBufferAttribute(r,M),w.copy(A);const C=o[M];I.copy(C),I.sub(A.multiplyScalar(A.dot(C))).normalize(),y.crossVectors(w,C);const V=y.dot(l[M])<0?-1:1;a.setXYZW(M,I.x,I.y,I.z,V)}for(let M=0,C=T.length;M<C;++M){const B=T[M],V=B.start,J=B.count;for(let ie=V,k=V+J;ie<k;ie+=3)O(e.getX(ie+0)),O(e.getX(ie+1)),O(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),b=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*u;for(let m=0;m<u;m++)h[v++]=c[p++]}return new Xi(h,u,f)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kl=new $,Rv=new $,Cv=new ut;class Fi{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Kl.subVectors(i,t).cross(Rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Kl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cv.getNormalMatrix(e),r=this.coplanarPoint(Kl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Pv=0;class gs extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Ys,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fp,this.blendDst=dp,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pl,this.stencilZFail=Pl,this.stencilZPass=Pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Pe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ii=new $,Zl=new $,Ha=new $,ka=new $;class tl{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zl.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),ka.copy(this.origin).sub(Zl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ha),o=ka.dot(this.direction),l=-ka.dot(Ha),c=ka.lengthSq(),u=Math.abs(1-a*a);let f,h,p,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const b=1/u;f*=b,h*=b,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zl).addScaledVector(Ha,h),p}intersectSphere(e,t){if(e.radius<0)return null;Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,p=e.z-a.z,v=t.x-a.x,b=t.y-a.y,g=t.z-a.z,m=i.x-a.x,T=i.y-a.y,I=i.z-a.z,y=Math.abs(l),A=Math.abs(c),w=Math.abs(u);let O,M,C,B,V,J,ie,k,ee,he,te,de;if(y>=A&&y>=w?(C=l,J=f,ee=v,de=m,l>=0?(O=c,M=u,B=h,V=p,ie=b,k=g,he=T,te=I):(O=u,M=c,B=p,V=h,ie=g,k=b,he=I,te=T)):A>=w?(C=c,J=h,ee=b,de=T,c>=0?(O=u,M=l,B=p,V=f,ie=g,k=v,he=I,te=m):(O=l,M=u,B=f,V=p,ie=v,k=g,he=m,te=I)):(C=u,J=p,ee=g,de=I,u>=0?(O=l,M=c,B=f,V=h,ie=v,k=b,he=m,te=T):(O=c,M=l,B=h,V=f,ie=b,k=v,he=T,te=m)),C===0)return null;const oe=O/C,_e=M/C,me=1/C,De=B-oe*J,Be=V-_e*J,rt=ie-oe*ee,nt=k-_e*ee,je=he-oe*de,ce=te-_e*de,re=je*nt-ce*rt,be=De*ce-Be*je,ke=rt*Be-nt*De;if(r){if(re<0||be<0||ke<0)return null}else if((re<0||be<0||ke<0)&&(re>0||be>0||ke>0))return null;const Le=re+be+ke;if(Le===0)return null;const R=me*(re*J+be*ee+ke*de);return(Le>0?R<0:R>0)?null:this.at(R/Le,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zs extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=pp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lf=new Bt,yr=new tl,Ga=new el,cf=new $,Wa=new $,Xa=new $,$a=new $,Jl=new $,qa=new $,uf=new $,Ya=new $;class In extends on{constructor(e=new pn,t=new Zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Jl.fromBufferAttribute(f,e),a?qa.addScaledVector(Jl,u):qa.addScaledVector(Jl.sub(t),u))}t.add(qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(Ga.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Ga,cf)===null||yr.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(lf.copy(s).invert(),yr.copy(e.ray).applyMatrix4(lf),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,b=h.length;v<b;v++){const g=h[v],m=a[g.materialIndex],T=Math.max(g.start,p.start),I=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,A=I;y<A;y+=3){const w=o.getX(y),O=o.getX(y+1),M=o.getX(y+2);r=Ka(this,m,e,i,c,u,f,w,O,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let g=v,m=b;g<m;g+=3){const T=o.getX(g),I=o.getX(g+1),y=o.getX(g+2);r=Ka(this,a,e,i,c,u,f,T,I,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,b=h.length;v<b;v++){const g=h[v],m=a[g.materialIndex],T=Math.max(g.start,p.start),I=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,A=I;y<A;y+=3){const w=y,O=y+1,M=y+2;r=Ka(this,m,e,i,c,u,f,w,O,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let g=v,m=b;g<m;g+=3){const T=g,I=g+1,y=g+2;r=Ka(this,a,e,i,c,u,f,T,I,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Lv(n,e,t,i,r,s,a,o){let l;if(e.side===wn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ur,o),l===null)return null;Ya.copy(o),Ya.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:n}}function Ka(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Wa),n.getVertexPosition(l,Xa),n.getVertexPosition(c,$a);const u=Lv(n,e,t,i,Wa,Xa,$a,uf);if(u){const f=new $;Vn.getBarycoord(uf,Wa,Xa,$a,f),r&&(u.uv=Vn.getInterpolatedAttribute(r,o,l,c,f,new Pe)),s&&(u.uv1=Vn.getInterpolatedAttribute(s,o,l,c,f,new Pe)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new $,materialIndex:0};Vn.getNormal(Wa,Xa,$a,h.normal),u.face=h,u.barycoord=f}return u}class Dv extends Mn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=an,u=an,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const br=new el,Iv=new Pe(.5,.5),Za=new $;class Xu{constructor(e=new Fi,t=new Fi,i=new Fi,r=new Fi,s=new Fi,a=new Fi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],v=s[8],b=s[9],g=s[10],m=s[11],T=s[12],I=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-a,p-u,m-v,A-T).normalize(),r[1].setComponents(c+a,p+u,m+v,A+T).normalize(),r[2].setComponents(c+o,p+f,m+b,A+I).normalize(),r[3].setComponents(c-o,p-f,m-b,A-I).normalize(),i)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(c-l,p-h,m-g,A-y).normalize();else if(r[4].setComponents(c-l,p-h,m-g,A-y).normalize(),t===mi)r[5].setComponents(c+l,p+h,m+g,A+y).normalize();else if(t===la)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const t=Iv.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Za.x=r.normal.x>0?e.max.x:e.min.x,Za.y=r.normal.y>0?e.max.y:e.min.y,Za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xo extends gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fo=new $,Oo=new $,hf=new Bt,Is=new tl,Ja=new el,Ql=new $,ff=new $;class $u extends on{constructor(e=new pn,t=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Fo.fromBufferAttribute(t,r-1),Oo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Fo.distanceTo(Oo);e.setAttribute("lineDistance",new qt(i,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;hf.copy(r).invert(),Is.copy(e.ray).applyMatrix4(hf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let b=p,g=v-1;b<g;b+=c){const m=u.getX(b),T=u.getX(b+1),I=Qa(this,e,Is,l,m,T,b);I&&t.push(I)}if(this.isLineLoop){const b=u.getX(v-1),g=u.getX(p),m=Qa(this,e,Is,l,b,g,v-1);m&&t.push(m)}}else{const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let b=p,g=v-1;b<g;b+=c){const m=Qa(this,e,Is,l,b,b+1,b);m&&t.push(m)}if(this.isLineLoop){const b=Qa(this,e,Is,l,v-1,p,v-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Qa(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Fo.fromBufferAttribute(o,r),Oo.fromBufferAttribute(o,s),t.distanceSqToSegment(Fo,Oo,Ql,ff)>i)return;Ql.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ql);if(!(c<e.near||c>e.far))return{distance:c,point:ff.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const df=new $,pf=new $;class Uv extends $u{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)df.fromBufferAttribute(t,r),pf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+df.distanceTo(pf);e.setAttribute("lineDistance",new qt(i,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nv extends $u{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Np extends Mn{constructor(e=[],t=Nr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ca extends Mn{constructor(e,t,i=Si,r,s,a,o=an,l=an,c,u=Ki,f=1){if(u!==Ki&&u!==Lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Fv extends ca{constructor(e,t=Si,i=Nr,r,s,a=an,o=an,l,c=Ki){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fp extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _a extends pn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function v(b,g,m,T,I,y,A,w,O,M,C){const B=y/O,V=A/M,J=y/2,ie=A/2,k=w/2,ee=O+1,he=M+1;let te=0,de=0;const oe=new $;for(let _e=0;_e<he;_e++){const me=_e*V-ie;for(let De=0;De<ee;De++){const Be=De*B-J;oe[b]=Be*T,oe[g]=me*I,oe[m]=k,c.push(oe.x,oe.y,oe.z),oe[b]=0,oe[g]=0,oe[m]=w>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(De/O),f.push(1-_e/M),te+=1}}for(let _e=0;_e<M;_e++)for(let me=0;me<O;me++){const De=h+me+ee*_e,Be=h+me+ee*(_e+1),rt=h+(me+1)+ee*(_e+1),nt=h+(me+1)+ee*_e;l.push(De,Be,nt),l.push(Be,rt,nt),de+=6}o.addGroup(p,de,C),p+=de,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const ja=new $,eo=new $,jl=new $,to=new Vn;class Ov extends pn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Ks*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},p=[];for(let v=0;v<l;v+=3){a?(c[0]=a.getX(v),c[1]=a.getX(v+1),c[2]=a.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:b,b:g,c:m}=to;if(b.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),to.getNormal(jl),f[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let T=0;T<3;T++){const I=(T+1)%3,y=f[T],A=f[I],w=to[u[T]],O=to[u[I]],M=`${y}_${A}`,C=`${A}_${y}`;C in h&&h[C]?(jl.dot(h[C].normal)<=s&&(p.push(w.x,w.y,w.z),p.push(O.x,O.y,O.z)),h[C]=null):M in h||(h[M]={index0:c[T],index1:c[I],normal:jl.clone()})}}for(const v in h)if(h[v]){const{index0:b,index1:g}=h[v];ja.fromBufferAttribute(o,b),eo.fromBufferAttribute(o,g),p.push(ja.x,ja.y,ja.z),p.push(eo.x,eo.y,eo.z)}this.setAttribute("position",new qt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(a-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Pe:new $);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new $,r=[],s=[],a=[],o=new $,l=new Bt;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new $)}s[0]=new $,a[0]=new $;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(mt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(mt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qu extends bi{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Pe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bv extends qu{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Yu(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,p*=u,r(a,o,h,p)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const mf=new $,gf=new $,ec=new Yu,tc=new Yu,nc=new Yu;class zv extends bi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new $){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(gf.subVectors(r[0],r[1]).add(r[0]),c=gf);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(mf.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=mf),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),b=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p);b<1e-4&&(b=1),v<1e-4&&(v=b),g<1e-4&&(g=b),ec.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,v,b,g),tc.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,v,b,g),nc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,v,b,g)}else this.curveType==="catmullrom"&&(ec.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),tc.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),nc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(ec.calc(l),tc.calc(l),nc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new $().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _f(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function Vv(n,e){const t=1-n;return t*t*e}function Hv(n,e){return 2*(1-n)*n*e}function kv(n,e){return n*n*e}function Js(n,e,t,i){return Vv(n,e)+Hv(n,t)+kv(n,i)}function Gv(n,e){const t=1-n;return t*t*t*e}function Wv(n,e){const t=1-n;return 3*t*t*n*e}function Xv(n,e){return 3*(1-n)*n*n*e}function $v(n,e){return n*n*n*e}function Qs(n,e,t,i,r){return Gv(n,e)+Wv(n,t)+Xv(n,i)+$v(n,r)}class Op extends bi{constructor(e=new Pe,t=new Pe,i=new Pe,r=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Pe){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Qs(e,r.x,s.x,a.x,o.x),Qs(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qv extends bi{constructor(e=new $,t=new $,i=new $,r=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new $){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Qs(e,r.x,s.x,a.x,o.x),Qs(e,r.y,s.y,a.y,o.y),Qs(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bp extends bi{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yv extends bi{constructor(e=new $,t=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new $){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zp extends bi{constructor(e=new Pe,t=new Pe,i=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Pe){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Js(e,r.x,s.x,a.x),Js(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kv extends bi{constructor(e=new $,t=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new $){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Js(e,r.x,s.x,a.x),Js(e,r.y,s.y,a.y),Js(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vp extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(_f(o,l.x,c.x,u.x,f.x),_f(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Pe().fromArray(r))}return this}}var uu=Object.freeze({__proto__:null,ArcCurve:Bv,CatmullRomCurve3:zv,CubicBezierCurve:Op,CubicBezierCurve3:qv,EllipseCurve:qu,LineCurve:Bp,LineCurve3:Yv,QuadraticBezierCurve:zp,QuadraticBezierCurve3:Kv,SplineCurve:Vp});class Zv extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new uu[r.type]().fromJSON(r))}return this}}class vf extends Zv{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Bp(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new zp(this.currentPoint.clone(),new Pe(e,t),new Pe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new Op(this.currentPoint.clone(),new Pe(e,t),new Pe(i,r),new Pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Vp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new qu(e,t,i,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bo extends vf{constructor(e){super(e),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new vf().fromJSON(r))}return this}}function Jv(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Hp(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=nx(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let u=o,f=l;for(let h=t;h<r;h+=t){const p=n[h],v=n[h+1];p<o&&(o=p),v<l&&(l=v),p>u&&(u=p),v>f&&(f=v)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return ua(s,a,t,o,l,c,0),a}function Hp(n,e,t,i,r){let s;if(r===dx(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=xf(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=xf(a/i|0,n[a],n[a+1],s);return s&&fs(s,s.next)&&(fa(s),s=s.next),s}function Or(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(fs(t,t.next)||kt(t.prev,t,t.next)===0)){if(fa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ua(n,e,t,i,r,s,a){if(!n)return;!a&&s&&ox(n,i,r,s);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?jv(n,i,r,s):Qv(n)){e.push(l.i,n.i,c.i),fa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=ex(Or(n),e),ua(n,e,t,i,r,s,2)):a===2&&tx(n,e,t,i,r,s):ua(Or(n),e,t,i,r,s,1);break}}}function Qv(n){const e=n.prev,t=n,i=n.next;if(kt(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(r,s,a),f=Math.min(o,l,c),h=Math.max(r,s,a),p=Math.max(o,l,c);let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=f&&v.y<=p&&Vs(r,o,s,l,a,c,v.x,v.y)&&kt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function jv(n,e,t,i){const r=n.prev,s=n,a=n.next;if(kt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,f=s.y,h=a.y,p=Math.min(o,l,c),v=Math.min(u,f,h),b=Math.max(o,l,c),g=Math.max(u,f,h),m=hu(p,v,e,t,i),T=hu(b,g,e,t,i);let I=n.prevZ,y=n.nextZ;for(;I&&I.z>=m&&y&&y.z<=T;){if(I.x>=p&&I.x<=b&&I.y>=v&&I.y<=g&&I!==r&&I!==a&&Vs(o,u,l,f,c,h,I.x,I.y)&&kt(I.prev,I,I.next)>=0||(I=I.prevZ,y.x>=p&&y.x<=b&&y.y>=v&&y.y<=g&&y!==r&&y!==a&&Vs(o,u,l,f,c,h,y.x,y.y)&&kt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;I&&I.z>=m;){if(I.x>=p&&I.x<=b&&I.y>=v&&I.y<=g&&I!==r&&I!==a&&Vs(o,u,l,f,c,h,I.x,I.y)&&kt(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;y&&y.z<=T;){if(y.x>=p&&y.x<=b&&y.y>=v&&y.y<=g&&y!==r&&y!==a&&Vs(o,u,l,f,c,h,y.x,y.y)&&kt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ex(n,e){let t=n;do{const i=t.prev,r=t.next.next;!fs(i,r)&&Gp(i,t,t.next,r)&&ha(i,r)&&ha(r,i)&&(e.push(i.i,t.i,r.i),fa(t),fa(t.next),t=n=r),t=t.next}while(t!==n);return Or(t)}function tx(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ux(a,o)){let l=Wp(a,o);a=Or(a,a.next),l=Or(l,l.next),ua(a,e,t,i,r,s,0),ua(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function nx(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=Hp(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(cx(c))}r.sort(ix);for(let s=0;s<r.length;s++)t=rx(r[s],t);return t}function ix(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function rx(n,e){const t=sx(n,e);if(!t)return e;const i=Wp(t,n);return Or(i,i.next),Or(t,t.next)}function sx(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(fs(n,t))return t;do{if(fs(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&kp(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);ha(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&ax(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function ax(n,e){return kt(n.prev,n,e.prev)<0&&kt(e.next,n,n.next)<0}function ox(n,e,t,i){let r=n;do r.z===0&&(r.z=hu(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,lx(r)}function lx(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function hu(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function cx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function kp(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Vs(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&kp(n,e,t,i,r,s,a,o)}function ux(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!hx(n,e)&&(ha(n,e)&&ha(e,n)&&fx(n,e)&&(kt(n.prev,n,e.prev)||kt(n,e.prev,e))||fs(n,e)&&kt(n.prev,n,n.next)>0&&kt(e.prev,e,e.next)>0)}function kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function fs(n,e){return n.x===e.x&&n.y===e.y}function Gp(n,e,t,i){const r=io(kt(n,e,t)),s=io(kt(n,e,i)),a=io(kt(t,i,n)),o=io(kt(t,i,e));return!!(r!==s&&a!==o||r===0&&no(n,t,e)||s===0&&no(n,i,e)||a===0&&no(t,n,i)||o===0&&no(t,e,i))}function no(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function io(n){return n>0?1:n<0?-1:0}function hx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Gp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ha(n,e){return kt(n.prev,n,n.next)<0?kt(n,e,n.next)>=0&&kt(n,n.prev,e)>=0:kt(n,e,n.prev)<0||kt(n,n.next,e)<0}function fx(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Wp(n,e){const t=fu(n.i,n.x,n.y),i=fu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function xf(n,e,t,i){const r=fu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function fa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dx(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class px{static triangulate(e,t,i=2){return Jv(e,t,i)}}class Vi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Vi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Sf(e),Mf(i,e);let a=e.length;t.forEach(Sf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Mf(i,t[l]);const o=px.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Sf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Mf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ku extends pn{constructor(e=new Bo([new Pe(.5,.5),new Pe(-.5,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new qt(r,3)),this.setAttribute("uv",new qt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:mx;let I,y=!1,A,w,O,M;if(m){I=m.getSpacedPoints(u),y=!0,h=!1;const N=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(u,N),w=new $,O=new $,M=new $}h||(g=0,p=0,v=0,b=0);const C=o.extractPoints(c);let B=C.shape;const V=C.holes;if(!Vi.isClockWise(B)){B=B.reverse();for(let N=0,G=V.length;N<G;N++){const W=V[N];Vi.isClockWise(W)&&(V[N]=W.reverse())}}function ie(N){const W=10000000000000001e-36;let H=N[0];for(let Q=1;Q<=N.length;Q++){const ue=Q%N.length,se=N[ue],ne=se.x-H.x,Te=se.y-H.y,L=ne*ne+Te*Te,K=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(H.x),Math.abs(H.y)),U=W*K*K;if(L<=U){N.splice(ue,1),Q--;continue}H=se}}ie(B),V.forEach(ie);const k=V.length,ee=B;for(let N=0;N<k;N++){const G=V[N];B=B.concat(G)}function he(N,G,W){return G||St("ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(G,W)}const te=B.length;function de(N,G,W){let H,Q,ue;const se=N.x-G.x,ne=N.y-G.y,Te=W.x-N.x,L=W.y-N.y,K=se*se+ne*ne,U=se*L-ne*Te;if(Math.abs(U)>Number.EPSILON){const _=Math.sqrt(K),d=Math.sqrt(Te*Te+L*L),P=G.x-ne/_,Y=G.y+se/_,j=W.x-L/d,Ae=W.y+Te/d,we=((j-P)*L-(Ae-Y)*Te)/(se*L-ne*Te);H=P+se*we-N.x,Q=Y+ne*we-N.y;const ge=H*H+Q*Q;if(ge<=2)return new Pe(H,Q);ue=Math.sqrt(ge/2)}else{let _=!1;se>Number.EPSILON?Te>Number.EPSILON&&(_=!0):se<-Number.EPSILON?Te<-Number.EPSILON&&(_=!0):Math.sign(ne)===Math.sign(L)&&(_=!0),_?(H=-ne,Q=se,ue=Math.sqrt(K)):(H=se,Q=ne,ue=Math.sqrt(K/2))}return new Pe(H/ue,Q/ue)}const oe=[];for(let N=0,G=ee.length,W=G-1,H=N+1;N<G;N++,W++,H++)W===G&&(W=0),H===G&&(H=0),oe[N]=de(ee[N],ee[W],ee[H]);const _e=[];let me,De=oe.concat();for(let N=0,G=k;N<G;N++){const W=V[N];me=[];for(let H=0,Q=W.length,ue=Q-1,se=H+1;H<Q;H++,ue++,se++)ue===Q&&(ue=0),se===Q&&(se=0),me[H]=de(W[H],W[ue],W[se]);_e.push(me),De=De.concat(me)}let Be;if(g===0)Be=Vi.triangulateShape(ee,V);else{const N=[],G=[];for(let W=0;W<g;W++){const H=W/g,Q=p*Math.cos(H*Math.PI/2),ue=v*Math.sin(H*Math.PI/2)+b;for(let se=0,ne=ee.length;se<ne;se++){const Te=he(ee[se],oe[se],ue);be(Te.x,Te.y,-Q),H===0&&N.push(Te)}for(let se=0,ne=k;se<ne;se++){const Te=V[se];me=_e[se];const L=[];for(let K=0,U=Te.length;K<U;K++){const _=he(Te[K],me[K],ue);be(_.x,_.y,-Q),H===0&&L.push(_)}H===0&&G.push(L)}}Be=Vi.triangulateShape(N,G)}const rt=Be.length,nt=v+b;for(let N=0;N<te;N++){const G=h?he(B[N],De[N],nt):B[N];y?(O.copy(A.normals[0]).multiplyScalar(G.x),w.copy(A.binormals[0]).multiplyScalar(G.y),M.copy(I[0]).add(O).add(w),be(M.x,M.y,M.z)):be(G.x,G.y,0)}for(let N=1;N<=u;N++)for(let G=0;G<te;G++){const W=h?he(B[G],De[G],nt):B[G];y?(O.copy(A.normals[N]).multiplyScalar(W.x),w.copy(A.binormals[N]).multiplyScalar(W.y),M.copy(I[N]).add(O).add(w),be(M.x,M.y,M.z)):be(W.x,W.y,f/u*N)}for(let N=g-1;N>=0;N--){const G=N/g,W=p*Math.cos(G*Math.PI/2),H=v*Math.sin(G*Math.PI/2)+b;for(let Q=0,ue=ee.length;Q<ue;Q++){const se=he(ee[Q],oe[Q],H);be(se.x,se.y,f+W)}for(let Q=0,ue=V.length;Q<ue;Q++){const se=V[Q];me=_e[Q];for(let ne=0,Te=se.length;ne<Te;ne++){const L=he(se[ne],me[ne],H);y?be(L.x,L.y+I[u-1].y,I[u-1].x+W):be(L.x,L.y,f+W)}}}je(),ce();function je(){const N=r.length/3;if(h){let G=0,W=te*G;for(let H=0;H<rt;H++){const Q=Be[H];ke(Q[2]+W,Q[1]+W,Q[0]+W)}G=u+g*2,W=te*G;for(let H=0;H<rt;H++){const Q=Be[H];ke(Q[0]+W,Q[1]+W,Q[2]+W)}}else{for(let G=0;G<rt;G++){const W=Be[G];ke(W[2],W[1],W[0])}for(let G=0;G<rt;G++){const W=Be[G];ke(W[0]+te*u,W[1]+te*u,W[2]+te*u)}}i.addGroup(N,r.length/3-N,0)}function ce(){const N=r.length/3;let G=0;re(ee,G),G+=ee.length;for(let W=0,H=V.length;W<H;W++){const Q=V[W];re(Q,G),G+=Q.length}i.addGroup(N,r.length/3-N,1)}function re(N,G){let W=N.length;for(;--W>=0;){const H=W;let Q=W-1;Q<0&&(Q=N.length-1);for(let ue=0,se=u+g*2;ue<se;ue++){const ne=te*ue,Te=te*(ue+1),L=G+H+ne,K=G+Q+ne,U=G+Q+Te,_=G+H+Te;Le(L,K,U,_)}}}function be(N,G,W){l.push(N),l.push(G),l.push(W)}function ke(N,G,W){R(N),R(G),R(W);const H=r.length/3,Q=T.generateTopUV(i,r,H-3,H-2,H-1);F(Q[0]),F(Q[1]),F(Q[2])}function Le(N,G,W,H){R(N),R(G),R(H),R(G),R(W),R(H);const Q=r.length/3,ue=T.generateSideWallUV(i,r,Q-6,Q-3,Q-2,Q-1);F(ue[0]),F(ue[1]),F(ue[3]),F(ue[1]),F(ue[2]),F(ue[3])}function R(N){r.push(l[N*3+0]),r.push(l[N*3+1]),r.push(l[N*3+2])}function F(N){s.push(N.x),s.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return gx(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new uu[r.type]().fromJSON(r)),new Ku(i,e.options)}}const mx={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Pe(s,a),new Pe(o,l),new Pe(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],v=e[r*3+2],b=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Pe(a,1-l),new Pe(c,1-f),new Pe(h,1-v),new Pe(b,1-m)]:[new Pe(o,1-l),new Pe(u,1-f),new Pe(p,1-v),new Pe(g,1-m)]}};function gx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class nl extends pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],v=[],b=[],g=[];for(let m=0;m<u;m++){const T=m*h-a;for(let I=0;I<c;I++){const y=I*f-s;v.push(y,-T,0),b.push(0,0,1),g.push(I/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<o;T++){const I=T+c*m,y=T+c*(m+1),A=T+1+c*(m+1),w=T+1+c*m;p.push(I,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new qt(v,3)),this.setAttribute("normal",new qt(b,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zu extends pn{constructor(e=new Bo([new Pe(0,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(s,3)),this.setAttribute("uv",new qt(a,2));function c(u){const f=r.length/3,h=u.extractPoints(t);let p=h.shape;const v=h.holes;Vi.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=v.length;g<m;g++){const T=v[g];Vi.isClockWise(T)===!0&&(v[g]=T.reverse())}const b=Vi.triangulateShape(p,v);for(let g=0,m=v.length;g<m;g++){const T=v[g];p=p.concat(T)}for(let g=0,m=p.length;g<m;g++){const T=p[g];r.push(T.x,T.y,0),s.push(0,0,1),a.push(T.x,T.y)}for(let g=0,m=b.length;g<m;g++){const T=b[g],I=T[0]+f,y=T[1]+f,A=T[2]+f;i.push(I,y,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _x(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new Zu(i,e.curveSegments)}}function _x(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class zo extends pn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new $,h=new $,p=[],v=[],b=[],g=[];for(let m=0;m<=i;m++){const T=[],I=m/i,y=a+I*o,A=e*Math.cos(y),w=Math.sqrt(e*e-A*A);let O=0;m===0&&a===0?O=.5/t:m===i&&l===Math.PI&&(O=-.5/t);for(let M=0;M<=t;M++){const C=M/t,B=r+C*s;f.x=-w*Math.cos(B),f.y=A,f.z=w*Math.sin(B),v.push(f.x,f.y,f.z),h.copy(f).normalize(),b.push(h.x,h.y,h.z),g.push(C+O,1-I),T.push(c++)}u.push(T)}for(let m=0;m<i;m++)for(let T=0;T<t;T++){const I=u[m][T+1],y=u[m][T],A=u[m+1][T],w=u[m+1][T+1];(m!==0||a>0)&&p.push(I,y,w),(m!==i-1||l<Math.PI)&&p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new qt(v,3)),this.setAttribute("normal",new qt(b,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ds(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(yf(r))r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(yf(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=ds(n[t]);for(const r in i)e[r]=i[r]}return e}function yf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function vx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const xx={clone:ds,merge:vn};var Sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sx,this.fragmentShader=Mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new xt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Pe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ht().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yx extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bx extends gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ex extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tx extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $p extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ic=new Bt,bf=new $,Ef=new $;class Ax{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xu,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(bf),Ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ef),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ic,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===la||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ro=new $,so=new hr,ai=new $;class qp extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ro,so,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,so,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ro,so,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,so,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new $,Tf=new Pe,Af=new Pe;class Zn extends qp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cu*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,Tf,Af),t.subVectors(Af,Tf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class il extends qp{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wx extends Ax{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rx extends $p{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new wx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Cx extends $p{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Zr=-90,Jr=1;class Px extends on{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(Zr,Jr,e,t);r.layers=this.layers,this.add(r);const s=new Zn(Zr,Jr,e,t);s.layers=this.layers,this.add(s);const a=new Zn(Zr,Jr,e,t);a.layers=this.layers,this.add(a);const o=new Zn(Zr,Jr,e,t);o.layers=this.layers,this.add(o);const l=new Zn(Zr,Jr,e,t);l.layers=this.layers,this.add(l);const c=new Zn(Zr,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Lx extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const wf=new Bt;class Dx{constructor(e,t,i=0,r=1/0){this.ray=new tl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Wu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):St("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wf),this}intersectObject(e,t=!0,i=[]){return du(e,this,i,t),i.sort(Rf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)du(e[r],this,i,t);return i.sort(Rf),i}}function Rf(n,e){return n.distance-e.distance}function du(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)du(s[a],e,t,!0)}}class Cf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yp{static{Yp.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}class Ix extends dr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pf(n,e,t,i){const r=Ux(i);switch(t){case wp:return n*e;case Cp:return n*e/r.components*r.byteLength;case Bu:return n*e/r.components*r.byteLength;case Fr:return n*e*2/r.components*r.byteLength;case zu:return n*e*2/r.components*r.byteLength;case Rp:return n*e*3/r.components*r.byteLength;case Jn:return n*e*4/r.components*r.byteLength;case Vu:return n*e*4/r.components*r.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _o:case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:case Nc:return Math.max(n,16)*Math.max(e,8)/4;case Dc:case Uc:return Math.max(n,8)*Math.max(e,8)/2;case Fc:case Oc:case zc:case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Lo:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case eu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nu:case iu:case ru:return Math.ceil(n/4)*Math.ceil(e/4)*16;case su:case au:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Do:case ou:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ux(n){switch(n){case Ln:case bp:return{byteLength:1,components:1};case aa:case Ep:case Mi:return{byteLength:2,components:1};case Fu:case Ou:return{byteLength:2,components:4};case Si:case Nu:case pi:return{byteLength:4,components:1};case Tp:case Ap:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uu}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kp(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Nx(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],b=f[p];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++h,f[h]=b)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const b=f[p];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ox=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,lS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fS="gl_FragColor = linearToOutputTexel( gl_FragColor );",dS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ES=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,RS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,CS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,US=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$S=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,EM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ty=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ry=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,py=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,my=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Fx,alphahash_pars_fragment:Ox,alphamap_fragment:Bx,alphamap_pars_fragment:zx,alphatest_fragment:Vx,alphatest_pars_fragment:Hx,aomap_fragment:kx,aomap_pars_fragment:Gx,batching_pars_vertex:Wx,batching_vertex:Xx,begin_vertex:$x,beginnormal_vertex:qx,bsdfs:Yx,iridescence_fragment:Kx,bumpmap_pars_fragment:Zx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:Qx,clipping_planes_pars_vertex:jx,clipping_planes_vertex:eS,color_fragment:tS,color_pars_fragment:nS,color_pars_vertex:iS,color_vertex:rS,common:sS,cube_uv_reflection_fragment:aS,defaultnormal_vertex:oS,displacementmap_pars_vertex:lS,displacementmap_vertex:cS,emissivemap_fragment:uS,emissivemap_pars_fragment:hS,colorspace_fragment:fS,colorspace_pars_fragment:dS,envmap_fragment:pS,envmap_common_pars_fragment:mS,envmap_pars_fragment:gS,envmap_pars_vertex:_S,envmap_physical_pars_fragment:RS,envmap_vertex:vS,fog_vertex:xS,fog_pars_vertex:SS,fog_fragment:MS,fog_pars_fragment:yS,gradientmap_pars_fragment:bS,lightmap_pars_fragment:ES,lights_lambert_fragment:TS,lights_lambert_pars_fragment:AS,lights_pars_begin:wS,lights_toon_fragment:CS,lights_toon_pars_fragment:PS,lights_phong_fragment:LS,lights_phong_pars_fragment:DS,lights_physical_fragment:IS,lights_physical_pars_fragment:US,lights_fragment_begin:NS,lights_fragment_maps:FS,lights_fragment_end:OS,lightprobes_pars_fragment:BS,logdepthbuf_fragment:zS,logdepthbuf_pars_fragment:VS,logdepthbuf_pars_vertex:HS,logdepthbuf_vertex:kS,map_fragment:GS,map_pars_fragment:WS,map_particle_fragment:XS,map_particle_pars_fragment:$S,metalnessmap_fragment:qS,metalnessmap_pars_fragment:YS,morphinstance_vertex:KS,morphcolor_vertex:ZS,morphnormal_vertex:JS,morphtarget_pars_vertex:QS,morphtarget_vertex:jS,normal_fragment_begin:eM,normal_fragment_maps:tM,normal_pars_fragment:nM,normal_pars_vertex:iM,normal_vertex:rM,normalmap_pars_fragment:sM,clearcoat_normal_fragment_begin:aM,clearcoat_normal_fragment_maps:oM,clearcoat_pars_fragment:lM,iridescence_pars_fragment:cM,opaque_fragment:uM,packing:hM,premultiplied_alpha_fragment:fM,project_vertex:dM,dithering_fragment:pM,dithering_pars_fragment:mM,roughnessmap_fragment:gM,roughnessmap_pars_fragment:_M,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:xM,shadowmap_vertex:SM,shadowmask_pars_fragment:MM,skinbase_vertex:yM,skinning_pars_vertex:bM,skinning_vertex:EM,skinnormal_vertex:TM,specularmap_fragment:AM,specularmap_pars_fragment:wM,tonemapping_fragment:RM,tonemapping_pars_fragment:CM,transmission_fragment:PM,transmission_pars_fragment:LM,uv_pars_fragment:DM,uv_pars_vertex:IM,uv_vertex:UM,worldpos_vertex:NM,background_vert:FM,background_frag:OM,backgroundCube_vert:BM,backgroundCube_frag:zM,cube_vert:VM,cube_frag:HM,depth_vert:kM,depth_frag:GM,distance_vert:WM,distance_frag:XM,equirect_vert:$M,equirect_frag:qM,linedashed_vert:YM,linedashed_frag:KM,meshbasic_vert:ZM,meshbasic_frag:JM,meshlambert_vert:QM,meshlambert_frag:jM,meshmatcap_vert:ey,meshmatcap_frag:ty,meshnormal_vert:ny,meshnormal_frag:iy,meshphong_vert:ry,meshphong_frag:sy,meshphysical_vert:ay,meshphysical_frag:oy,meshtoon_vert:ly,meshtoon_frag:cy,points_vert:uy,points_frag:hy,shadow_vert:fy,shadow_frag:dy,sprite_vert:py,sprite_frag:my},He={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},hi={basic:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:vn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:vn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new xt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:vn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:vn([He.points,He.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:vn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:vn([He.common,He.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:vn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:vn([He.sprite,He.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:vn([He.common,He.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:vn([He.lights,He.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};hi.physical={uniforms:vn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const ao={r:0,b:0,g:0},gy=new Bt,Zp=new ut;Zp.set(-1,0,0,0,1,0,0,0,1);function _y(n,e,t,i,r,s){const a=new xt(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function p(T){let I=T.isScene===!0?T.background:null;if(I&&I.isTexture){const y=T.backgroundBlurriness>0;I=e.get(I,y)}return I}function v(T){let I=!1;const y=p(T);y===null?g(a,o):y&&y.isColor&&(g(y,1),I=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(T,I){const y=p(I);y&&(y.isCubeTexture||y.mapping===jo)?(c===void 0&&(c=new In(new _a(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:ds(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gy.makeRotationFromEuler(I.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zp),c.material.toneMapped=vt.getTransfer(y.colorSpace)!==Ct,(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new In(new nl(2,2),new yi({name:"BackgroundMaterial",uniforms:ds(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=vt.getTransfer(y.colorSpace)!==Ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,I){T.getRGB(ao,Xp(n)),t.buffers.color.setClear(ao.r,ao.g,ao.b,I,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,I=1){a.set(T),o=I,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(a,o)},render:v,addToRenderList:b,dispose:m}}function vy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(V,J,ie,k,ee){let he=!1;const te=f(V,k,ie,J);s!==te&&(s=te,c(s.object)),he=p(V,k,ie,ee),he&&v(V,k,ie,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(he||a)&&(a=!1,y(V,J,ie,k),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(V){return n.bindVertexArray(V)}function u(V){return n.deleteVertexArray(V)}function f(V,J,ie,k){const ee=k.wireframe===!0;let he=i[J.id];he===void 0&&(he={},i[J.id]=he);const te=V.isInstancedMesh===!0?V.id:0;let de=he[te];de===void 0&&(de={},he[te]=de);let oe=de[ie.id];oe===void 0&&(oe={},de[ie.id]=oe);let _e=oe[ee];return _e===void 0&&(_e=h(l()),oe[ee]=_e),_e}function h(V){const J=[],ie=[],k=[];for(let ee=0;ee<t;ee++)J[ee]=0,ie[ee]=0,k[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ie,attributeDivisors:k,object:V,attributes:{},index:null}}function p(V,J,ie,k){const ee=s.attributes,he=J.attributes;let te=0;const de=ie.getAttributes();for(const oe in de)if(de[oe].location>=0){const me=ee[oe];let De=he[oe];if(De===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(De=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(De=V.instanceColor)),me===void 0||me.attribute!==De||De&&me.data!==De.data)return!0;te++}return s.attributesNum!==te||s.index!==k}function v(V,J,ie,k){const ee={},he=J.attributes;let te=0;const de=ie.getAttributes();for(const oe in de)if(de[oe].location>=0){let me=he[oe];me===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(me=V.instanceColor));const De={};De.attribute=me,me&&me.data&&(De.data=me.data),ee[oe]=De,te++}s.attributes=ee,s.attributesNum=te,s.index=k}function b(){const V=s.newAttributes;for(let J=0,ie=V.length;J<ie;J++)V[J]=0}function g(V){m(V,0)}function m(V,J){const ie=s.newAttributes,k=s.enabledAttributes,ee=s.attributeDivisors;ie[V]=1,k[V]===0&&(n.enableVertexAttribArray(V),k[V]=1),ee[V]!==J&&(n.vertexAttribDivisor(V,J),ee[V]=J)}function T(){const V=s.newAttributes,J=s.enabledAttributes;for(let ie=0,k=J.length;ie<k;ie++)J[ie]!==V[ie]&&(n.disableVertexAttribArray(ie),J[ie]=0)}function I(V,J,ie,k,ee,he,te){te===!0?n.vertexAttribIPointer(V,J,ie,ee,he):n.vertexAttribPointer(V,J,ie,k,ee,he)}function y(V,J,ie,k){b();const ee=k.attributes,he=ie.getAttributes(),te=J.defaultAttributeValues;for(const de in he){const oe=he[de];if(oe.location>=0){let _e=ee[de];if(_e===void 0&&(de==="instanceMatrix"&&V.instanceMatrix&&(_e=V.instanceMatrix),de==="instanceColor"&&V.instanceColor&&(_e=V.instanceColor)),_e!==void 0){const me=_e.normalized,De=_e.itemSize,Be=e.get(_e);if(Be===void 0)continue;const rt=Be.buffer,nt=Be.type,je=Be.bytesPerElement,ce=nt===n.INT||nt===n.UNSIGNED_INT||_e.gpuType===Nu;if(_e.isInterleavedBufferAttribute){const re=_e.data,be=re.stride,ke=_e.offset;if(re.isInstancedInterleavedBuffer){for(let Le=0;Le<oe.locationSize;Le++)m(oe.location+Le,re.meshPerAttribute);V.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Le=0;Le<oe.locationSize;Le++)g(oe.location+Le);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let Le=0;Le<oe.locationSize;Le++)I(oe.location+Le,De/oe.locationSize,nt,me,be*je,(ke+De/oe.locationSize*Le)*je,ce)}else{if(_e.isInstancedBufferAttribute){for(let re=0;re<oe.locationSize;re++)m(oe.location+re,_e.meshPerAttribute);V.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let re=0;re<oe.locationSize;re++)g(oe.location+re);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let re=0;re<oe.locationSize;re++)I(oe.location+re,De/oe.locationSize,nt,me,De*je,De/oe.locationSize*re*je,ce)}}else if(te!==void 0){const me=te[de];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(oe.location,me);break;case 3:n.vertexAttrib3fv(oe.location,me);break;case 4:n.vertexAttrib4fv(oe.location,me);break;default:n.vertexAttrib1fv(oe.location,me)}}}}T()}function A(){C();for(const V in i){const J=i[V];for(const ie in J){const k=J[ie];for(const ee in k){const he=k[ee];for(const te in he)u(he[te].object),delete he[te];delete k[ee]}}delete i[V]}}function w(V){if(i[V.id]===void 0)return;const J=i[V.id];for(const ie in J){const k=J[ie];for(const ee in k){const he=k[ee];for(const te in he)u(he[te].object),delete he[te];delete k[ee]}}delete i[V.id]}function O(V){for(const J in i){const ie=i[J];for(const k in ie){const ee=ie[k];if(ee[V.id]===void 0)continue;const he=ee[V.id];for(const te in he)u(he[te].object),delete he[te];delete ee[V.id]}}}function M(V){for(const J in i){const ie=i[J],k=V.isInstancedMesh===!0?V.id:0,ee=ie[k];if(ee!==void 0){for(const he in ee){const te=ee[he];for(const de in te)u(te[de].object),delete te[de];delete ee[he]}delete ie[k],Object.keys(ie).length===0&&delete i[J]}}}function C(){B(),a=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:g,disableUnusedAttributes:T}}function xy(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Sy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(O){return!(O!==Jn&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(O){const M=O===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ln&&O!==pi&&!M&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(st("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:T,maxVaryings:I,maxFragmentUniforms:y,maxSamples:A,samples:w}}function My(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Fi,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,b=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const T=s?0:i,I=T*4;let y=m.clippingState||null;l.value=y,y=u(v,h,I,p);for(let A=0;A!==I;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const b=f!==null?f.length:0;let g=null;if(b!==0){if(g=l.value,v!==!0||g===null){const m=p+b*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<m)&&(g=new Float32Array(m));for(let I=0,y=p;I!==b;++I,y+=4)a.copy(f[I]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}const is=4,yy=6,by=20,Ey=256,Us=new il,Lf=new xt;let rc=null,sc=0,ac=0,oc=!1;const Ty=new $,Er=new $;class Df{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Ty}=s;rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rc,sc,ac),this._renderer.xr.enabled=oc,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Mi,format:Jn,colorSpace:Io,depthBuffer:!1},r=If(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ay(s)),this._blurMaterial=Ry(s,e,t),this._ggxMaterial=wy(s,e,t)}return r}_compileMaterial(e){const t=new In(new pn,e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,i,r,s){const l=new Zn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Lf),f.toneMapping=_i,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new _a,new Zs({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,g=b.material;let m=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,m=!0):(g.color.copy(Lf),m=!0);for(let I=0;I<6;I++){const y=I%3;y===0?(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[I],s.y,s.z)):y===1?(l.up.set(0,0,c[I]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[I],s.z)):(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[I]));const A=this._cubeSize;Qr(r,y*A,I>2?A:0,A,A),f.setRenderTarget(r),m&&f.render(b,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Nr||e.mapping===hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Us)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:v}=this,b=this._sizeLods[i],g=3*b*(i>v-is?i-v+is:0),m=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,Qr(s,g,m,3*b,2*b),r.setRenderTarget(s),r.render(o,Us),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Qr(e,g,m,3*b,2*b),r.setRenderTarget(e),r.render(o,Us)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-is?r-this._lodMax+is:0),h=4*(this._cubeSize-u);Qr(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Us)}}function Ay(n){const e=[],t=[];let i=n;const r=n-is+1+yy;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,v=new Float32Array(p*h*f),b=new Float32Array(p*h*f);for(let m=0;m<f;m++){const T=m%3*2/3-1,I=m>2?0:-1,y=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];v.set(y,p*h*m);for(let A=0;A<h;A++){const w=u[A*2]*2-1,O=u[A*2+1]*2-1;m===0?Er.set(1,O,w):m===1?Er.set(-w,1,-O):m===2?Er.set(-w,O,1):m===3?Er.set(-1,O,-w):m===4?Er.set(-w,-1,O):Er.set(w,O,-1),Er.toArray(b,(m*h+A)*p)}}const g=new pn;g.setAttribute("position",new Xi(v,p)),g.setAttribute("outputDirection",new Xi(b,p)),t.push(new In(g,null)),i>is&&i--}return{lodMeshes:t,sizeLods:e}}function If(n,e,t){const i=new ei(n,e,t);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wy(n,e,t){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ey,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ry(n,e,t){return new yi({name:"SphericalGaussianBlur",defines:{SAMPLES:by,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Uf(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Nf(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jp extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Np(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _a(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Gi});s.uniforms.tEquirect.value=t;const a=new In(r,s),o=t.minFilter;return t.minFilter===Pr&&(t.minFilter=fn),new Px(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Cy(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===wl||p===Rl)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const b=new Jp(v.height);return b.fromEquirectangularTexture(n,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,v=p===wl||p===Rl,b=p===Nr||p===hs;if(v||b){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new Df(n)),g=v?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const T=h.image;return v&&T&&T.height>0||b&&T&&l(T)?(i===null&&(i=new Df(n)),g=v?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,p){return p===wl?h.mapping=Nr:p===Rl&&(h.mapping=hs),h}function l(h){let p=0;const v=6;for(let b=0;b<v;b++)h[b]!==void 0&&p++;return p===v}function c(h){const p=h.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Py(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&os("WebGLRenderer: "+i+" extension not supported."),r}}}function Ly(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,v=f.attributes.position;let b=0;if(v===void 0)return;if(p!==null){const T=p.array;b=p.version;for(let I=0,y=T.length;I<y;I+=3){const A=T[I+0],w=T[I+1],O=T[I+2];h.push(A,w,w,O,O,A)}}else{const T=v.array;b=v.version;for(let I=0,y=T.length/3-1;I<y;I+=3){const A=I+0,w=I+1,O=I+2;h.push(A,w,w,O,O,A)}}const g=new(v.count>=65535?Up:Ip)(h,1);g.version=b;const m=s.get(f);m&&e.remove(m),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Dy(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*a,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let b=0;for(let g=0;g<p;g++)b+=h[g];t.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Iy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:St("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Uy(n,e,t){const i=new WeakMap,r=new Ht;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let C=function(){O.dispose(),i.delete(o),o.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let I=0;p===!0&&(I=1),v===!0&&(I=2),b===!0&&(I=3);let y=o.attributes.position.count*I,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*A*4*f),O=new Lp(w,y,A,f);O.type=pi,O.needsUpdate=!0;const M=I*4;for(let B=0;B<f;B++){const V=g[B],J=m[B],ie=T[B],k=y*A*4*B;for(let ee=0;ee<V.count;ee++){const he=ee*M;p===!0&&(r.fromBufferAttribute(V,ee),w[k+he+0]=r.x,w[k+he+1]=r.y,w[k+he+2]=r.z,w[k+he+3]=0),v===!0&&(r.fromBufferAttribute(J,ee),w[k+he+4]=r.x,w[k+he+5]=r.y,w[k+he+6]=r.z,w[k+he+7]=0),b===!0&&(r.fromBufferAttribute(ie,ee),w[k+he+8]=r.x,w[k+he+9]=r.y,w[k+he+10]=r.z,w[k+he+11]=ie.itemSize===4?r.w:1)}}h={count:f,texture:O,size:new Pe(y,A)},i.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ny(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Fy={[mp]:"LINEAR_TONE_MAPPING",[gp]:"REINHARD_TONE_MAPPING",[_p]:"CINEON_TONE_MAPPING",[vp]:"ACES_FILMIC_TONE_MAPPING",[Sp]:"AGX_TONE_MAPPING",[Mp]:"NEUTRAL_TONE_MAPPING",[xp]:"CUSTOM_TONE_MAPPING"};function Oy(n,e,t,i,r,s){const a=new ei(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new pn;c.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new qt([0,2,0,0,2,0],2));const u=new yx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new In(c,u),h=new il(-1,1,1,-1,0,1);let p=null,v=null,b=!1,g,m=null,T=[],I=!1;this.setSize=function(y,A){a.setSize(y,A),o!==null&&o.setSize(y,A),l!==null&&l.setSize(y,A);for(let w=0;w<T.length;w++){const O=T[w];O.setSize&&O.setSize(y,A)}},this.setEffects=function(y){T=y,I=T.length>0&&T[0].isRenderPass===!0;const A=a.width,w=a.height;T.length>0&&o===null&&(o=new ei(A,w,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),l=new ei(A,w,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<T.length;O++){const M=T[O];M.setSize&&M.setSize(A,w)}},this.begin=function(y,A){if(b||y.toneMapping===_i&&T.length===0)return!1;if(m=A,A!==null){const w=A.width,O=A.height;(a.width!==w||a.height!==O)&&this.setSize(w,O)}return I===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=_i,!0},this.hasRenderPass=function(){return I},this.end=function(y,A){y.toneMapping=g,b=!0;let w=a,O=o;for(let M=0;M<T.length;M++){const C=T[M];C.enabled!==!1&&(C.render(y,O,w,A),C.needsSwap!==!1&&(w=O,O=O===o?l:o))}if(p!==y.outputColorSpace||v!==y.toneMapping){p=y.outputColorSpace,v=y.toneMapping,u.defines={},vt.getTransfer(p)===Ct&&(u.defines.SRGB_TRANSFER="");const M=Fy[v];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(f,h),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Qp=new Mn,pu=new ca(1,1),jp=new Lp,em=new gv,tm=new Np,Ff=[],Of=[],Bf=new Float32Array(16),zf=new Float32Array(9),Vf=new Float32Array(4);function _s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ff[r];if(s===void 0&&(s=new Float32Array(r),Ff[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sl(n,e){let t=Of[e];t===void 0&&(t=new Int32Array(e),Of[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function By(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function Hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function ky(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Vf.set(i),n.uniformMatrix2fv(this.addr,!1,Vf),Zt(t,i)}}function Gy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;zf.set(i),n.uniformMatrix3fv(this.addr,!1,zf),Zt(t,i)}}function Wy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Bf.set(i),n.uniformMatrix4fv(this.addr,!1,Bf),Zt(t,i)}}function Xy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function Yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function Ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function Qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function jy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(pu.compareFunction=t.isReversedDepthBuffer()?ku:Hu,s=pu):s=Qp,t.setTexture2D(e||s,r)}function eb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||em,r)}function tb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tm,r)}function nb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jp,r)}function ib(n){switch(n){case 5126:return By;case 35664:return zy;case 35665:return Vy;case 35666:return Hy;case 35674:return ky;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return $y;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return Ky;case 36294:return Zy;case 36295:return Jy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function rb(n,e){n.uniform1fv(this.addr,e)}function sb(n,e){const t=_s(e,this.size,2);n.uniform2fv(this.addr,t)}function ab(n,e){const t=_s(e,this.size,3);n.uniform3fv(this.addr,t)}function ob(n,e){const t=_s(e,this.size,4);n.uniform4fv(this.addr,t)}function lb(n,e){const t=_s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cb(n,e){const t=_s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ub(n,e){const t=_s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hb(n,e){n.uniform1iv(this.addr,e)}function fb(n,e){n.uniform2iv(this.addr,e)}function db(n,e){n.uniform3iv(this.addr,e)}function pb(n,e){n.uniform4iv(this.addr,e)}function mb(n,e){n.uniform1uiv(this.addr,e)}function gb(n,e){n.uniform2uiv(this.addr,e)}function _b(n,e){n.uniform3uiv(this.addr,e)}function vb(n,e){n.uniform4uiv(this.addr,e)}function xb(n,e,t){const i=this.cache,r=e.length,s=sl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=pu:a=Qp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Sb(n,e,t){const i=this.cache,r=e.length,s=sl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||em,s[a])}function Mb(n,e,t){const i=this.cache,r=e.length,s=sl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tm,s[a])}function yb(n,e,t){const i=this.cache,r=e.length,s=sl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||jp,s[a])}function bb(n){switch(n){case 5126:return rb;case 35664:return sb;case 35665:return ab;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return hb;case 35667:case 35671:return fb;case 35668:case 35672:return db;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return yb}}class Eb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ib(t.type)}}class Tb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bb(t.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function Hf(n,e){n.seq.push(e),n.map[e.id]=e}function wb(n,e,t){const i=n.name,r=i.length;for(lc.lastIndex=0;;){const s=lc.exec(i),a=lc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Hf(t,c===void 0?new Eb(o,n,e):new Tb(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Ab(o),Hf(t,f)),t=f}}}class So{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);wb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function kf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Rb=37297;let Cb=0;function Pb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Gf=new ut;function Lb(n){vt._getMatrix(Gf,vt.workingColorSpace,n);const e=`mat3( ${Gf.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case Uo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Pb(n.getShaderSource(e),o)}else return s}function Db(n,e){const t=Lb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ib={[mp]:"Linear",[gp]:"Reinhard",[_p]:"Cineon",[vp]:"ACESFilmic",[Sp]:"AgX",[Mp]:"Neutral",[xp]:"Custom"};function Ub(n,e){const t=Ib[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oo=new $;function Nb(){vt.getLuminanceCoefficients(oo);const n=oo.x.toFixed(4),e=oo.y.toFixed(4),t=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function Ob(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Bb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Hs(n){return n!==""}function Xf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $f(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(n){return n.replace(zb,Hb)}const Vb=new Map;function Hb(n,e){let t=dt[e];if(t===void 0){const i=Vb.get(e);if(i!==void 0)t=dt[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mu(t)}const kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(n){return n.replace(kb,Gb)}function Gb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Wb={[po]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function Xb(n){return Wb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $b={[Nr]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE_UV"};function qb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$b[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Yb={[hs]:"ENVMAP_MODE_REFRACTION"};function Kb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Yb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zb={[pp]:"ENVMAP_BLENDING_MULTIPLY",[$0]:"ENVMAP_BLENDING_MIX",[q0]:"ENVMAP_BLENDING_ADD"};function Jb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Zb[n.combine]||"ENVMAP_BLENDING_NONE"}function Qb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xb(t),c=qb(t),u=Kb(t),f=Jb(t),h=Qb(t),p=Fb(t),v=Ob(s),b=r.createProgram();let g,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hs).join(`
`),m.length>0&&(m+=`
`)):(g=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),m=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?dt.tonemapping_pars_fragment:"",t.toneMapping!==_i?Ub("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Db("linearToOutputTexel",t.outputColorSpace),Nb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),a=mu(a),a=Xf(a,t),a=$f(a,t),o=mu(o),o=Xf(o,t),o=$f(o,t),a=qf(a),o=qf(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const I=T+g+a,y=T+m+o,A=kf(r,r.VERTEX_SHADER,I),w=kf(r,r.FRAGMENT_SHADER,y);r.attachShader(b,A),r.attachShader(b,w),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function O(V){if(n.debug.checkShaderErrors){const J=r.getProgramInfoLog(b)||"",ie=r.getShaderInfoLog(A)||"",k=r.getShaderInfoLog(w)||"",ee=J.trim(),he=ie.trim(),te=k.trim();let de=!0,oe=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(de=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,A,w);else{const _e=Wf(r,A,"vertex"),me=Wf(r,w,"fragment");St("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ee+`
`+_e+`
`+me)}else ee!==""?st("WebGLProgram: Program Info Log:",ee):(he===""||te==="")&&(oe=!1);oe&&(V.diagnostics={runnable:de,programLog:ee,vertexShader:{log:he,prefix:g},fragmentShader:{log:te,prefix:m}})}r.deleteShader(A),r.deleteShader(w),M=new So(r,b),C=Bb(r,b)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(b,Rb)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=w,this}let eE=0;class tE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nE(e),t.set(e,i)),i}}class nE{constructor(e){this.id=eE++,this.code=e,this.usedTimes=0}}function iE(n){return n===Fr||n===Lo||n===Do}function rE(n,e,t,i,r,s){const a=new Wu,o=new tE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function b(M,C,B,V,J,ie){const k=V.fog,ee=J.geometry,he=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?V.environment:null,te=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,de=e.get(M.envMap||he,te),oe=de&&de.mapping===jo?de.image.height:null,_e=p[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&st("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,De=me!==void 0?me.length:0;let Be=0;ee.morphAttributes.position!==void 0&&(Be=1),ee.morphAttributes.normal!==void 0&&(Be=2),ee.morphAttributes.color!==void 0&&(Be=3);let rt,nt,je,ce;if(_e){const Lt=hi[_e];rt=Lt.vertexShader,nt=Lt.fragmentShader}else{rt=M.vertexShader,nt=M.fragmentShader;const Lt=o.getVertexShaderStage(M),gt=o.getFragmentShaderStage(M);o.update(M,Lt,gt),je=Lt.id,ce=gt.id}const re=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),ke=J.isInstancedMesh===!0,Le=J.isBatchedMesh===!0,R=!!M.map,F=!!M.matcap,N=!!de,G=!!M.aoMap,W=!!M.lightMap,H=!!M.bumpMap&&M.wireframe===!1,Q=!!M.normalMap,ue=!!M.displacementMap,se=!!M.emissiveMap,ne=!!M.metalnessMap,Te=!!M.roughnessMap,L=M.anisotropy>0,K=M.clearcoat>0,U=M.dispersion>0,_=M.retroreflectivity>0,d=M.iridescence>0,P=M.sheen>0,Y=M.transmission>0,j=L&&!!M.anisotropyMap,Ae=K&&!!M.clearcoatMap,we=K&&!!M.clearcoatNormalMap,ge=K&&!!M.clearcoatRoughnessMap,Se=d&&!!M.iridescenceMap,Re=d&&!!M.iridescenceThicknessMap,Ge=P&&!!M.sheenColorMap,Fe=P&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,Je=!!M.specularColorMap,et=!!M.specularIntensityMap,ct=Y&&!!M.transmissionMap,q=Y&&!!M.thicknessMap,Ue=!!M.gradientMap,xe=!!M.alphaMap,Oe=M.alphaTest>0,ze=!!M.alphaHash,Ee=!!M.extensions;let Qe=_i;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Qe=n.toneMapping);const Ke={shaderID:_e,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:nt,defines:M.defines,customVertexShaderID:je,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Le,batchingColor:Le&&J._colorsTexture!==null,instancing:ke,instancingColor:ke&&J.instanceColor!==null,instancingMorph:ke&&J.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:R,matcap:F,envMap:N,envMapMode:N&&de.mapping,envMapCubeUVHeight:oe,aoMap:G,lightMap:W,bumpMap:H,normalMap:Q,displacementMap:ue,emissiveMap:se,normalMapObjectSpace:Q&&M.normalMapType===Z0,normalMapTangentSpace:Q&&M.normalMapType===lu,packedNormalMap:Q&&M.normalMapType===lu&&iE(M.normalMap.format),metalnessMap:ne,roughnessMap:Te,anisotropy:L,anisotropyMap:j,clearcoat:K,clearcoatMap:Ae,clearcoatNormalMap:we,clearcoatRoughnessMap:ge,dispersion:U,retroreflection:_,iridescence:d,iridescenceMap:Se,iridescenceThicknessMap:Re,sheen:P,sheenColorMap:Ge,sheenRoughnessMap:Fe,specularMap:Ie,specularColorMap:Je,specularIntensityMap:et,transmission:Y,transmissionMap:ct,thicknessMap:q,gradientMap:Ue,opaque:M.transparent===!1&&M.blending===Ys&&M.alphaToCoverage===!1,alphaMap:xe,alphaTest:Oe,alphaHash:ze,combine:M.combine,mapUv:R&&v(M.map.channel),aoMapUv:G&&v(M.aoMap.channel),lightMapUv:W&&v(M.lightMap.channel),bumpMapUv:H&&v(M.bumpMap.channel),normalMapUv:Q&&v(M.normalMap.channel),displacementMapUv:ue&&v(M.displacementMap.channel),emissiveMapUv:se&&v(M.emissiveMap.channel),metalnessMapUv:ne&&v(M.metalnessMap.channel),roughnessMapUv:Te&&v(M.roughnessMap.channel),anisotropyMapUv:j&&v(M.anisotropyMap.channel),clearcoatMapUv:Ae&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(M.sheenRoughnessMap.channel),specularMapUv:Ie&&v(M.specularMap.channel),specularColorMapUv:Je&&v(M.specularColorMap.channel),specularIntensityMapUv:et&&v(M.specularIntensityMap.channel),transmissionMapUv:ct&&v(M.transmissionMap.channel),thicknessMapUv:q&&v(M.thicknessMap.channel),alphaMapUv:xe&&v(M.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Q||L),vertexNormals:!!ee.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ee.attributes.uv&&(R||xe),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||ee.attributes.normal===void 0&&Q===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Be,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:R&&M.map.isVideoTexture===!0&&vt.getTransfer(M.map.colorSpace)===Ct,decodeVideoTextureEmissive:se&&M.emissiveMap.isVideoTexture===!0&&vt.getTransfer(M.emissiveMap.colorSpace)===Ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===di,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&M.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function g(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)C.push(B),C.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(m(C,M),T(C,M),C.push(n.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function m(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numSunLights),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numSunLightShadows),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function T(M,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function I(M){const C=p[M.type];let B;if(C){const V=hi[C];B=xx.clone(V.uniforms)}else B=M.uniforms;return B}function y(M,C){let B=u.get(C);return B!==void 0?++B.usedTimes:(B=new jb(n,C,M,r),c.push(B),u.set(C,B)),B}function A(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function w(M){o.remove(M)}function O(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:I,acquireProgram:y,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:O}}function sE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function aE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Kf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,v,b,g,m){let T=n[e];return T===void 0?(T={id:h.id,object:h,geometry:p,material:v,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:g,group:m},n[e]=T):(T.id=h.id,T.object=h,T.geometry=p,T.material=v,T.materialVariant=a(h),T.groupOrder=b,T.renderOrder=h.renderOrder,T.z=g,T.group=m),e++,T}function l(h,p,v,b,g,m,T){T.reversedDepth===!0&&(g=-g);const I=o(h,p,v,b,g,m);v.transmission>0?i.push(I):v.transparent===!0?r.push(I):t.push(I)}function c(h,p,v,b,g,m){const T=o(h,p,v,b,g,m);v.transmission>0?i.unshift(T):v.transparent===!0?r.unshift(T):t.unshift(T)}function u(h,p){t.length>1&&t.sort(h||aE),i.length>1&&i.sort(p||Kf),r.length>1&&r.sort(p||Kf)}function f(){for(let h=e,p=n.length;h<p;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function oE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Zf,n.set(i,[a])):r>=s.length?(a=new Zf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function lE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new xt};break;case"SpotLight":t={position:new $,direction:new $,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function cE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let uE=0;function hE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fE(n){const e=new lE,t=cE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new Bt,a=new Bt;function o(c){let u=0,f=0,h=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let p=0,v=0,b=0,g=0,m=0,T=0,I=0,y=0,A=0,w=0,O=0,M=0,C=0,B=0;c.sort(hE);for(let J=0,ie=c.length;J<ie;J++){const k=c[J],ee=k.color,he=k.intensity,te=k.distance;let de=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Fr?de=k.shadow.map.texture:de=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=ee.r*he,f+=ee.g*he,h+=ee.b*he;else if(k.isLightProbe){for(let oe=0;oe<9;oe++)i.probe[oe].addScaledVector(k.sh.coefficients[oe],he);B++}else if(k.isSunLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const _e=k.shadow,me=t.get(k);me.shadowIntensity=_e.intensity,me.shadowBias=_e.bias,me.shadowNormalBias=_e.normalBias,me.shadowRadius=_e.radius,me.shadowMapSize.copy(_e.mapSize).multiply(_e.getFrameExtents()),i.sunShadow[v]=me,i.sunShadowMap[v]=de;const De=_e.getViewportCount();for(let Be=0;Be<De;Be++)i.sunShadowMatrix[b+Be]=_e.getMatrix(Be),i.sunShadowCascade[b+Be]=_e._cascadeData[Be];b+=De,v++}i.sun[p]=oe,p++}else if(k.isDirectionalLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const _e=k.shadow,me=t.get(k);me.shadowIntensity=_e.intensity,me.shadowBias=_e.bias,me.shadowNormalBias=_e.normalBias,me.shadowRadius=_e.radius,me.shadowMapSize=_e.mapSize,i.directionalShadow[g]=me,i.directionalShadowMap[g]=de,i.directionalShadowMatrix[g]=k.shadow.matrix,A++}i.directional[g]=oe,g++}else if(k.isSpotLight){const oe=e.get(k);oe.position.setFromMatrixPosition(k.matrixWorld),oe.color.copy(ee).multiplyScalar(he),oe.distance=te,oe.coneCos=Math.cos(k.angle),oe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),oe.decay=k.decay,i.spot[T]=oe;const _e=k.shadow;if(k.map&&(i.spotLightMap[M]=k.map,M++,_e.updateMatrices(k),k.castShadow&&C++),i.spotLightMatrix[T]=_e.matrix,k.castShadow){const me=t.get(k);me.shadowIntensity=_e.intensity,me.shadowBias=_e.bias,me.shadowNormalBias=_e.normalBias,me.shadowRadius=_e.radius,me.shadowMapSize=_e.mapSize,i.spotShadow[T]=me,i.spotShadowMap[T]=de,O++}T++}else if(k.isRectAreaLight){const oe=e.get(k);oe.color.copy(ee).multiplyScalar(he),oe.halfWidth.set(k.width*.5,0,0),oe.halfHeight.set(0,k.height*.5,0),i.rectArea[I]=oe,I++}else if(k.isPointLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),oe.distance=k.distance,oe.decay=k.decay,k.castShadow){const _e=k.shadow,me=t.get(k);me.shadowIntensity=_e.intensity,me.shadowBias=_e.bias,me.shadowNormalBias=_e.normalBias,me.shadowRadius=_e.radius,me.shadowMapSize=_e.mapSize,me.shadowCameraNear=_e.camera.near,me.shadowCameraFar=_e.camera.far,i.pointShadow[m]=me,i.pointShadowMap[m]=de,i.pointShadowMatrix[m]=k.shadow.matrix,w++}i.point[m]=oe,m++}else if(k.isHemisphereLight){const oe=e.get(k);oe.skyColor.copy(k.color).multiplyScalar(he),oe.groundColor.copy(k.groundColor).multiplyScalar(he),i.hemi[y]=oe,y++}}I>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const V=i.hash;(V.sunLength!==p||V.directionalLength!==g||V.pointLength!==m||V.spotLength!==T||V.rectAreaLength!==I||V.hemiLength!==y||V.numSunShadows!==v||V.numDirectionalShadows!==A||V.numPointShadows!==w||V.numSpotShadows!==O||V.numSpotMaps!==M||V.numLightProbes!==B)&&(i.sun.length=p,i.directional.length=g,i.spot.length=T,i.rectArea.length=I,i.point.length=m,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=O,i.spotShadowMap.length=O,i.spotLightMatrix.length=O+M-C,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=B,V.sunLength=p,V.directionalLength=g,V.pointLength=m,V.spotLength=T,V.rectAreaLength=I,V.hemiLength=y,V.numSunShadows=v,V.numDirectionalShadows=A,V.numPointShadows=w,V.numSpotShadows=O,V.numSpotMaps=M,V.numLightProbes=B,i.version=uE++)}function l(c,u){let f=0,h=0,p=0,v=0,b=0,g=0;const m=u.matrixWorldInverse;for(let T=0,I=c.length;T<I;T++){const y=c[T];if(y.isSunLight){const A=i.sun[f];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),f++}else if(y.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),h++}else if(y.isSpotLight){const A=i.spot[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),v++}else if(y.isRectAreaLight){const A=i.rectArea[b];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),b++}else if(y.isPointLight){const A=i.point[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){const A=i.hemi[g];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Jf(n){const e=new fE(n),t=[],i=[],r=[];function s(h){f.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function dE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Jf(n),e.set(r,[o])):s>=a.length?(o=new Jf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const pE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gE=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],_E=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Qf=new Bt,Ns=new $,cc=new $;function vE(n,e,t){let i=new Xu;const r=new Pe,s=new Pe,a=new Ht,o=new Ex,l=new Tx,c={},u=t.maxTextureSize,f={[Ur]:wn,[wn]:Ur,[di]:di},h=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:pE,fragmentShader:mE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new pn;v.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new In(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let m=this.type;this.render=function(w,O,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===w0&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=po);const C=n.getRenderTarget(),B=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Gi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ie=m!==this.type;ie&&O.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(ee=>ee.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,ee=w.length;k<ee;k++){const he=w[k],te=he.shadow;if(te===void 0){st("WebGLShadowMap:",he,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;r.copy(te.mapSize);const de=te.getFrameExtents();r.multiply(de),s.copy(te.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,te.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,te.mapSize.y=s.y));const oe=n.state.buffers.depth.getReversed();if(te.camera._reversedDepth=oe,te.map===null||ie===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===zs){if(he.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new ei(r.x,r.y,{format:Fr,type:Mi,minFilter:fn,magFilter:fn,generateMipmaps:!1}),te.map.texture.name=he.name+".shadowMap",te.map.depthTexture=new ca(r.x,r.y,pi),te.map.depthTexture.name=he.name+".shadowMapDepth",te.map.depthTexture.format=Ki,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=an,te.map.depthTexture.magFilter=an}else he.isPointLight?(te.map=new Jp(r.x),te.map.depthTexture=new Fv(r.x,Si)):(te.map=new ei(r.x,r.y),te.map.depthTexture=new ca(r.x,r.y,Si)),te.map.depthTexture.name=he.name+".shadowMap",te.map.depthTexture.format=Ki,this.type===po?(te.map.depthTexture.compareFunction=oe?ku:Hu,te.map.depthTexture.minFilter=fn,te.map.depthTexture.magFilter=fn):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=an,te.map.depthTexture.magFilter=an);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==r.x||te.map.height!==r.y)&&te.map.setSize(r.x,r.y);const _e=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();he.isPointLight!==!0&&te.updateMatrices(he,M);for(let me=0;me<_e;me++){const De=te.getCamera(me);if(he.isPointLight){const Be=te.camera,rt=te.matrix,nt=he.distance||Be.far;nt!==Be.far&&(Be.far=nt,Be.updateProjectionMatrix()),Ns.setFromMatrixPosition(he.matrixWorld),Be.position.copy(Ns),cc.copy(Be.position),cc.add(gE[me]),Be.up.copy(_E[me]),Be.lookAt(cc),Be.updateMatrixWorld(),rt.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Qf.multiplyMatrices(Be.projectionMatrix,Be.matrixWorldInverse),te._frustum.setFromProjectionMatrix(Qf,Be.coordinateSystem,Be.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)n.setRenderTarget(te.map,me),n.clear();else{me===0&&(n.setRenderTarget(te.map),n.clear());const Be=te.getViewport(me);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),J.viewport(a)}i=te.getFrustum(me),y(O,M,De,he,this.type)}te.isPointLightShadow!==!0&&this.type===zs&&T(te,M),te.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(C,B,V)};function T(w,O){const M=e.update(b);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new ei(r.x,r.y,{format:Fr,type:Mi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(O,null,M,h,b,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(O,null,M,p,b,null)}function I(w,O,M,C){let B=null;const V=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(V!==void 0)B=V;else if(B=M.isPointLight===!0?l:o,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=B.uuid,ie=O.uuid;let k=c[J];k===void 0&&(k={},c[J]=k);let ee=k[ie];ee===void 0&&(ee=B.clone(),k[ie]=ee,O.addEventListener("dispose",A)),B=ee}if(B.visible=O.visible,B.wireframe=O.wireframe,C===zs?B.side=O.shadowSide!==null?O.shadowSide:O.side:B.side=O.shadowSide!==null?O.shadowSide:f[O.side],B.alphaMap=O.alphaMap,B.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,B.map=O.map,B.clipShadows=O.clipShadows,B.clippingPlanes=O.clippingPlanes,B.clipIntersection=O.clipIntersection,B.displacementMap=O.displacementMap,B.displacementScale=O.displacementScale,B.displacementBias=O.displacementBias,B.wireframeLinewidth=O.wireframeLinewidth,B.linewidth=O.linewidth,M.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const J=n.properties.get(B);J.light=M}return B}function y(w,O,M,C,B){if(w.visible===!1)return;if(w.layers.test(O.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&B===zs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);const ie=e.update(w),k=w.material;if(Array.isArray(k)){const ee=ie.groups;for(let he=0,te=ee.length;he<te;he++){const de=ee[he],oe=k[de.materialIndex];if(oe&&oe.visible){const _e=I(w,oe,C,B);w.onBeforeShadow(n,w,O,M,ie,_e,de),n.renderBufferDirect(M,null,ie,_e,w,de),w.onAfterShadow(n,w,O,M,ie,_e,de)}}}else if(k.visible){const ee=I(w,k,C,B);w.onBeforeShadow(n,w,O,M,ie,ee,null),n.renderBufferDirect(M,null,ie,ee,w,null),w.onAfterShadow(n,w,O,M,ie,ee,null)}}const J=w.children;for(let ie=0,k=J.length;ie<k;ie++)y(J[ie],O,M,C,B)}function A(w){w.target.removeEventListener("dispose",A);for(const M in c){const C=c[M],B=w.target.uuid;B in C&&(C[B].dispose(),delete C[B])}}}function xE(n,e){function t(){let q=!1;const Ue=new Ht;let xe=null;const Oe=new Ht(0,0,0,0);return{setMask:function(ze){xe!==ze&&!q&&(n.colorMask(ze,ze,ze,ze),xe=ze)},setLocked:function(ze){q=ze},setClear:function(ze,Ee,Qe,Ke,Lt){Lt===!0&&(ze*=Ke,Ee*=Ke,Qe*=Ke),Ue.set(ze,Ee,Qe,Ke),Oe.equals(Ue)===!1&&(n.clearColor(ze,Ee,Qe,Ke),Oe.copy(Ue))},reset:function(){q=!1,xe=null,Oe.set(-1,0,0,0)}}}function i(){let q=!1,Ue=!1,xe=null,Oe=null,ze=null;return{setReversed:function(Ee){if(Ue!==Ee){const Qe=e.get("EXT_clip_control");Ee?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ee;const Ke=ze;ze=null,this.setClear(Ke)}},getReversed:function(){return Ue},setTest:function(Ee){Ee?re(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Ee){xe!==Ee&&!q&&(n.depthMask(Ee),xe=Ee)},setFunc:function(Ee){if(Ue&&(Ee=lv[Ee]),Oe!==Ee){switch(Ee){case bc:n.depthFunc(n.NEVER);break;case Ec:n.depthFunc(n.ALWAYS);break;case Tc:n.depthFunc(n.LESS);break;case sa:n.depthFunc(n.LEQUAL);break;case Ac:n.depthFunc(n.EQUAL);break;case wc:n.depthFunc(n.GEQUAL);break;case Rc:n.depthFunc(n.GREATER);break;case Cc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=Ee}},setLocked:function(Ee){q=Ee},setClear:function(Ee){ze!==Ee&&(ze=Ee,Ue&&(Ee=1-Ee),n.clearDepth(Ee))},reset:function(){q=!1,xe=null,Oe=null,ze=null,Ue=!1}}}function r(){let q=!1,Ue=null,xe=null,Oe=null,ze=null,Ee=null,Qe=null,Ke=null,Lt=null;return{setTest:function(gt){q||(gt?re(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(gt){Ue!==gt&&!q&&(n.stencilMask(gt),Ue=gt)},setFunc:function(gt,mn,Un){(xe!==gt||Oe!==mn||ze!==Un)&&(n.stencilFunc(gt,mn,Un),xe=gt,Oe=mn,ze=Un)},setOp:function(gt,mn,Un){(Ee!==gt||Qe!==mn||Ke!==Un)&&(n.stencilOp(gt,mn,Un),Ee=gt,Qe=mn,Ke=Un)},setLocked:function(gt){q=gt},setClear:function(gt){Lt!==gt&&(n.clearStencil(gt),Lt=gt)},reset:function(){q=!1,Ue=null,xe=null,Oe=null,ze=null,Ee=null,Qe=null,Ke=null,Lt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},p=new WeakMap,v=[],b=null,g=!1,m=null,T=null,I=null,y=null,A=null,w=null,O=null,M=new xt(0,0,0),C=0,B=!1,V=null,J=null,ie=null,k=null,ee=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,de=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(oe)[1]),te=de>=1):oe.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),te=de>=2);let _e=null,me={};const De=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),rt=new Ht().fromArray(De),nt=new Ht().fromArray(Be);function je(q,Ue,xe,Oe){const ze=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(q,Ee),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<xe;Qe++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Ue,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(Ue+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return Ee}const ce={};ce[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(sa),H(!1),Q(Gh),re(n.CULL_FACE),G(Gi);function re(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function be(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function ke(q,Ue){return h[q]!==Ue?(n.bindFramebuffer(q,Ue),h[q]=Ue,q===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ue),q===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Le(q,Ue){let xe=v,Oe=!1;if(q){xe=p.get(Ue),xe===void 0&&(xe=[],p.set(Ue,xe));const ze=q.textures;if(xe.length!==ze.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Qe=ze.length;Ee<Qe;Ee++)xe[Ee]=n.COLOR_ATTACHMENT0+Ee;xe.length=ze.length,Oe=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(xe)}function R(q){return b!==q?(n.useProgram(q),b=q,!0):!1}const F={[es]:n.FUNC_ADD,[C0]:n.FUNC_SUBTRACT,[P0]:n.FUNC_REVERSE_SUBTRACT};F[L0]=n.MIN,F[D0]=n.MAX;const N={[I0]:n.ZERO,[U0]:n.ONE,[N0]:n.SRC_COLOR,[fp]:n.SRC_ALPHA,[H0]:n.SRC_ALPHA_SATURATE,[z0]:n.DST_COLOR,[O0]:n.DST_ALPHA,[F0]:n.ONE_MINUS_SRC_COLOR,[dp]:n.ONE_MINUS_SRC_ALPHA,[V0]:n.ONE_MINUS_DST_COLOR,[B0]:n.ONE_MINUS_DST_ALPHA,[k0]:n.CONSTANT_COLOR,[G0]:n.ONE_MINUS_CONSTANT_COLOR,[W0]:n.CONSTANT_ALPHA,[X0]:n.ONE_MINUS_CONSTANT_ALPHA};function G(q,Ue,xe,Oe,ze,Ee,Qe,Ke,Lt,gt){if(q===Gi){g===!0&&(be(n.BLEND),g=!1);return}if(g===!1&&(re(n.BLEND),g=!0),q!==R0){if(q!==m||gt!==B){if((T!==es||A!==es)&&(n.blendEquation(n.FUNC_ADD),T=es,A=es),gt)switch(q){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wh:n.blendFunc(n.ONE,n.ONE);break;case Xh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $h:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:St("WebGLState: Invalid blending: ",q);break}else switch(q){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xh:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $h:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",q);break}I=null,y=null,w=null,O=null,M.set(0,0,0),C=0,m=q,B=gt}return}ze=ze||Ue,Ee=Ee||xe,Qe=Qe||Oe,(Ue!==T||ze!==A)&&(n.blendEquationSeparate(F[Ue],F[ze]),T=Ue,A=ze),(xe!==I||Oe!==y||Ee!==w||Qe!==O)&&(n.blendFuncSeparate(N[xe],N[Oe],N[Ee],N[Qe]),I=xe,y=Oe,w=Ee,O=Qe),(Ke.equals(M)===!1||Lt!==C)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Lt),M.copy(Ke),C=Lt),m=q,B=!1}function W(q,Ue){q.side===di?be(n.CULL_FACE):re(n.CULL_FACE);let xe=q.side===wn;Ue&&(xe=!xe),H(xe),q.blending===Ys&&q.transparent===!1?G(Gi):G(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),s.setMask(q.colorWrite);const Oe=q.stencilWrite;o.setTest(Oe),Oe&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),se(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(q){V!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),V=q)}function Q(q){q!==T0?(re(n.CULL_FACE),q!==J&&(q===Gh?n.cullFace(n.BACK):q===A0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),J=q}function ue(q){q!==ie&&(te&&n.lineWidth(q),ie=q)}function se(q,Ue,xe){q?(re(n.POLYGON_OFFSET_FILL),(k!==Ue||ee!==xe)&&(k=Ue,ee=xe,a.getReversed()&&(Ue=-Ue),n.polygonOffset(Ue,xe))):be(n.POLYGON_OFFSET_FILL)}function ne(q){q?re(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Te(q){q===void 0&&(q=n.TEXTURE0+he-1),_e!==q&&(n.activeTexture(q),_e=q)}function L(q,Ue,xe){xe===void 0&&(_e===null?xe=n.TEXTURE0+he-1:xe=_e);let Oe=me[xe];Oe===void 0&&(Oe={type:void 0,texture:void 0},me[xe]=Oe),(Oe.type!==q||Oe.texture!==Ue)&&(_e!==xe&&(n.activeTexture(xe),_e=xe),n.bindTexture(q,Ue||ce[q]),Oe.type=q,Oe.texture=Ue)}function K(){const q=me[_e];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function U(){try{n.compressedTexImage2D(...arguments)}catch(q){St("WebGLState:",q)}}function _(){try{n.compressedTexImage3D(...arguments)}catch(q){St("WebGLState:",q)}}function d(){try{n.texSubImage2D(...arguments)}catch(q){St("WebGLState:",q)}}function P(){try{n.texSubImage3D(...arguments)}catch(q){St("WebGLState:",q)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(q){St("WebGLState:",q)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(q){St("WebGLState:",q)}}function Ae(){try{n.texStorage2D(...arguments)}catch(q){St("WebGLState:",q)}}function we(){try{n.texStorage3D(...arguments)}catch(q){St("WebGLState:",q)}}function ge(){try{n.texImage2D(...arguments)}catch(q){St("WebGLState:",q)}}function Se(){try{n.texImage3D(...arguments)}catch(q){St("WebGLState:",q)}}function Re(q){return f[q]!==void 0?f[q]:n.getParameter(q)}function Ge(q,Ue){f[q]!==Ue&&(n.pixelStorei(q,Ue),f[q]=Ue)}function Fe(q){rt.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),rt.copy(q))}function Ie(q){nt.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),nt.copy(q))}function Je(q,Ue){let xe=c.get(Ue);xe===void 0&&(xe=new WeakMap,c.set(Ue,xe));let Oe=xe.get(q);Oe===void 0&&(Oe=n.getUniformBlockIndex(Ue,q.name),xe.set(q,Oe))}function et(q,Ue){const Oe=c.get(Ue).get(q);l.get(Ue)!==Oe&&(n.uniformBlockBinding(Ue,Oe,q.__bindingPointIndex),l.set(Ue,Oe))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},_e=null,me={},h={},p=new WeakMap,v=[],b=null,g=!1,m=null,T=null,I=null,y=null,A=null,w=null,O=null,M=new xt(0,0,0),C=0,B=!1,V=null,J=null,ie=null,k=null,ee=null,rt.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:be,bindFramebuffer:ke,drawBuffers:Le,useProgram:R,setBlending:G,setMaterial:W,setFlipSided:H,setCullFace:Q,setLineWidth:ue,setPolygonOffset:se,setScissorTest:ne,activeTexture:Te,bindTexture:L,unbindTexture:K,compressedTexImage2D:U,compressedTexImage3D:_,texImage2D:ge,texImage3D:Se,pixelStorei:Ge,getParameter:Re,updateUBOMapping:Je,uniformBlockBinding:et,texStorage2D:Ae,texStorage3D:we,texSubImage2D:d,texSubImage3D:P,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:Fe,viewport:Ie,reset:ct}}function SE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(_,d){return v?new OffscreenCanvas(_,d):No("canvas")}function g(_,d,P){let Y=1;const j=U(_);if((j.width>P||j.height>P)&&(Y=P/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const Ae=Math.floor(Y*j.width),we=Math.floor(Y*j.height);h===void 0&&(h=b(Ae,we));const ge=d?b(Ae,we):h;return ge.width=Ae,ge.height=we,ge.getContext("2d").drawImage(_,0,0,Ae,we),st("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Ae+"x"+we+")."),ge}else return"data"in _&&st("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),_;return _}function m(_){return _.generateMipmaps}function T(_){n.generateMipmap(_)}function I(_){return _.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?n.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(_,d,P,Y,j,Ae=!1){if(_!==null){if(n[_]!==void 0)return n[_];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let we;Y&&(we=e.get("EXT_texture_norm16"),we||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=d;if(d===n.RED&&(P===n.FLOAT&&(ge=n.R32F),P===n.HALF_FLOAT&&(ge=n.R16F),P===n.UNSIGNED_BYTE&&(ge=n.R8),P===n.UNSIGNED_SHORT&&we&&(ge=we.R16_EXT),P===n.SHORT&&we&&(ge=we.R16_SNORM_EXT)),d===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(ge=n.R8UI),P===n.UNSIGNED_SHORT&&(ge=n.R16UI),P===n.UNSIGNED_INT&&(ge=n.R32UI),P===n.BYTE&&(ge=n.R8I),P===n.SHORT&&(ge=n.R16I),P===n.INT&&(ge=n.R32I)),d===n.RG&&(P===n.FLOAT&&(ge=n.RG32F),P===n.HALF_FLOAT&&(ge=n.RG16F),P===n.UNSIGNED_BYTE&&(ge=n.RG8),P===n.UNSIGNED_SHORT&&we&&(ge=we.RG16_EXT),P===n.SHORT&&we&&(ge=we.RG16_SNORM_EXT)),d===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(ge=n.RG8UI),P===n.UNSIGNED_SHORT&&(ge=n.RG16UI),P===n.UNSIGNED_INT&&(ge=n.RG32UI),P===n.BYTE&&(ge=n.RG8I),P===n.SHORT&&(ge=n.RG16I),P===n.INT&&(ge=n.RG32I)),d===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(ge=n.RGB8UI),P===n.UNSIGNED_SHORT&&(ge=n.RGB16UI),P===n.UNSIGNED_INT&&(ge=n.RGB32UI),P===n.BYTE&&(ge=n.RGB8I),P===n.SHORT&&(ge=n.RGB16I),P===n.INT&&(ge=n.RGB32I)),d===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(ge=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(ge=n.RGBA16UI),P===n.UNSIGNED_INT&&(ge=n.RGBA32UI),P===n.BYTE&&(ge=n.RGBA8I),P===n.SHORT&&(ge=n.RGBA16I),P===n.INT&&(ge=n.RGBA32I)),d===n.RGB&&(P===n.UNSIGNED_SHORT&&we&&(ge=we.RGB16_EXT),P===n.SHORT&&we&&(ge=we.RGB16_SNORM_EXT),P===n.UNSIGNED_INT_5_9_9_9_REV&&(ge=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&(ge=n.R11F_G11F_B10F)),d===n.RGBA){const Se=Ae?Uo:vt.getTransfer(j);P===n.FLOAT&&(ge=n.RGBA32F),P===n.HALF_FLOAT&&(ge=n.RGBA16F),P===n.UNSIGNED_BYTE&&(ge=Se===Ct?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT&&we&&(ge=we.RGBA16_EXT),P===n.SHORT&&we&&(ge=we.RGBA16_SNORM_EXT),P===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function A(_,d){let P;return _?d===null||d===Si||d===oa?P=n.DEPTH24_STENCIL8:d===pi?P=n.DEPTH32F_STENCIL8:d===aa&&(P=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):d===null||d===Si||d===oa?P=n.DEPTH_COMPONENT24:d===pi?P=n.DEPTH_COMPONENT32F:d===aa&&(P=n.DEPTH_COMPONENT16),P}function w(_,d){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==an&&_.minFilter!==fn?Math.log2(Math.max(d.width,d.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?d.mipmaps.length:1}function O(_){const d=_.target;d.removeEventListener("dispose",O),C(d),d.isVideoTexture&&u.delete(d),d.isHTMLTexture&&f.delete(d)}function M(_){const d=_.target;d.removeEventListener("dispose",M),V(d)}function C(_){const d=i.get(_);if(d.__webglInit===void 0)return;const P=_.source,Y=p.get(P);if(Y){const j=Y[d.__cacheKey];j.usedTimes--,j.usedTimes===0&&B(_),Object.keys(Y).length===0&&p.delete(P)}i.remove(_)}function B(_){const d=i.get(_);n.deleteTexture(d.__webglTexture);const P=_.source,Y=p.get(P);delete Y[d.__cacheKey],a.memory.textures--}function V(_){const d=i.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),i.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(d.__webglFramebuffer[Y]))for(let j=0;j<d.__webglFramebuffer[Y].length;j++)n.deleteFramebuffer(d.__webglFramebuffer[Y][j]);else n.deleteFramebuffer(d.__webglFramebuffer[Y]);d.__webglDepthbuffer&&n.deleteRenderbuffer(d.__webglDepthbuffer[Y])}else{if(Array.isArray(d.__webglFramebuffer))for(let Y=0;Y<d.__webglFramebuffer.length;Y++)n.deleteFramebuffer(d.__webglFramebuffer[Y]);else n.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&n.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&n.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let Y=0;Y<d.__webglColorRenderbuffer.length;Y++)d.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(d.__webglColorRenderbuffer[Y]);d.__webglDepthRenderbuffer&&n.deleteRenderbuffer(d.__webglDepthRenderbuffer)}const P=_.textures;for(let Y=0,j=P.length;Y<j;Y++){const Ae=i.get(P[Y]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),a.memory.textures--),i.remove(P[Y])}i.remove(_)}let J=0;function ie(){J=0}function k(){return J}function ee(_){J=_}function he(){const _=J;return _>=r.maxTextures&&st("WebGLTextures: Trying to use "+(_+1)+" texture units while this GPU supports only "+r.maxTextures),J+=1,_}function te(_){const d=[];return d.push(_.wrapS),d.push(_.wrapT),d.push(_.wrapR||0),d.push(_.magFilter),d.push(_.minFilter),d.push(_.anisotropy),d.push(_.internalFormat),d.push(_.format),d.push(_.type),d.push(_.generateMipmaps),d.push(_.premultiplyAlpha),d.push(_.flipY),d.push(_.unpackAlignment),d.push(_.colorSpace),d.join()}function de(_,d){const P=i.get(_);if(_.isVideoTexture&&L(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&P.__version!==_.version){const Y=_.image;if(Y===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{be(P,_,d);return}}else _.isExternalTexture&&(P.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+d)}function oe(_,d){const P=i.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&P.__version!==_.version){be(P,_,d);return}else _.isExternalTexture&&(P.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+d)}function _e(_,d){const P=i.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&P.__version!==_.version){be(P,_,d);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+d)}function me(_,d){const P=i.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&P.__version!==_.version){ke(P,_,d);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+d)}const De={[Pc]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[Lc]:n.MIRRORED_REPEAT},Be={[an]:n.NEAREST,[Y0]:n.NEAREST_MIPMAP_NEAREST,[Ia]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Cl]:n.LINEAR_MIPMAP_NEAREST,[Pr]:n.LINEAR_MIPMAP_LINEAR},rt={[Q0]:n.NEVER,[iv]:n.ALWAYS,[j0]:n.LESS,[Hu]:n.LEQUAL,[ev]:n.EQUAL,[ku]:n.GEQUAL,[tv]:n.GREATER,[nv]:n.NOTEQUAL};function nt(_,d){if(d.type===pi&&e.has("OES_texture_float_linear")===!1&&(d.magFilter===fn||d.magFilter===Cl||d.magFilter===Ia||d.magFilter===Pr||d.minFilter===fn||d.minFilter===Cl||d.minFilter===Ia||d.minFilter===Pr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(_,n.TEXTURE_WRAP_S,De[d.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,De[d.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,De[d.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,Be[d.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,Be[d.minFilter]),d.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,rt[d.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===an||d.minFilter!==Ia&&d.minFilter!==Pr||d.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||i.get(d).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(_,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,r.getMaxAnisotropy())),i.get(d).__currentAnisotropy=d.anisotropy}}}function je(_,d){let P=!1;_.__webglInit===void 0&&(_.__webglInit=!0,d.addEventListener("dispose",O));const Y=d.source;let j=p.get(Y);j===void 0&&(j={},p.set(Y,j));const Ae=te(d);if(Ae!==_.__cacheKey){j[Ae]===void 0&&(j[Ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),j[Ae].usedTimes++;const we=j[_.__cacheKey];we!==void 0&&(j[_.__cacheKey].usedTimes--,we.usedTimes===0&&B(d)),_.__cacheKey=Ae,_.__webglTexture=j[Ae].texture}return P}function ce(_,d,P){return Math.floor(Math.floor(_/P)/d)}function re(_,d,P,Y){const Ae=_.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,d.width,d.height,P,Y,d.data);else{Ae.sort((Ge,Fe)=>Ge.start-Fe.start);let we=0;for(let Ge=1;Ge<Ae.length;Ge++){const Fe=Ae[we],Ie=Ae[Ge],Je=Fe.start+Fe.count,et=ce(Ie.start,d.width,4),ct=ce(Fe.start,d.width,4);Ie.start<=Je+1&&et===ct&&ce(Ie.start+Ie.count-1,d.width,4)===et?Fe.count=Math.max(Fe.count,Ie.start+Ie.count-Fe.start):(++we,Ae[we]=Ie)}Ae.length=we+1;const ge=t.getParameter(n.UNPACK_ROW_LENGTH),Se=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,d.width);for(let Ge=0,Fe=Ae.length;Ge<Fe;Ge++){const Ie=Ae[Ge],Je=Math.floor(Ie.start/4),et=Math.ceil(Ie.count/4),ct=Je%d.width,q=Math.floor(Je/d.width),Ue=et,xe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(n.UNPACK_SKIP_ROWS,q),t.texSubImage2D(n.TEXTURE_2D,0,ct,q,Ue,xe,P,Y,d.data)}_.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ge),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function be(_,d,P){let Y=n.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),d.isData3DTexture&&(Y=n.TEXTURE_3D);const j=je(_,d),Ae=d.source;t.bindTexture(Y,_.__webglTexture,n.TEXTURE0+P);const we=i.get(Ae);if(Ae.version!==we.__version||j===!0){if(t.activeTexture(n.TEXTURE0+P),(typeof ImageBitmap<"u"&&d.image instanceof ImageBitmap)===!1){const xe=vt.getPrimaries(vt.workingColorSpace),Oe=d.colorSpace===or?null:vt.getPrimaries(d.colorSpace),ze=d.colorSpace===or||xe===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,d.unpackAlignment);let Se=g(d.image,!1,r.maxTextureSize);Se=K(d,Se);const Re=s.convert(d.format,d.colorSpace),Ge=s.convert(d.type);let Fe=y(d.internalFormat,Re,Ge,d.normalized,d.colorSpace,d.isVideoTexture);nt(Y,d);let Ie;const Je=d.mipmaps,et=d.isVideoTexture!==!0,ct=we.__version===void 0||j===!0,q=Ae.dataReady,Ue=w(d,Se);if(d.isDepthTexture)Fe=A(d.format===Lr,d.type),ct&&(et?t.texStorage2D(n.TEXTURE_2D,1,Fe,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,Fe,Se.width,Se.height,0,Re,Ge,null));else if(d.isDataTexture)if(Je.length>0){et&&ct&&t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Je[0].width,Je[0].height);for(let xe=0,Oe=Je.length;xe<Oe;xe++)Ie=Je[xe],et?q&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Re,Ge,Ie.data):t.texImage2D(n.TEXTURE_2D,xe,Fe,Ie.width,Ie.height,0,Re,Ge,Ie.data);d.generateMipmaps=!1}else et?(ct&&t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Se.width,Se.height),q&&re(d,Se,Re,Ge)):t.texImage2D(n.TEXTURE_2D,0,Fe,Se.width,Se.height,0,Re,Ge,Se.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){et&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Fe,Je[0].width,Je[0].height,Se.depth);for(let xe=0,Oe=Je.length;xe<Oe;xe++)if(Ie=Je[xe],d.format!==Jn)if(Re!==null)if(et){if(q)if(d.layerUpdates.size>0){const ze=Pf(Ie.width,Ie.height,d.format,d.type);for(const Ee of d.layerUpdates){const Qe=Ie.data.subarray(Ee*ze/Ie.data.BYTES_PER_ELEMENT,(Ee+1)*ze/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,Ee,Ie.width,Ie.height,1,Re,Qe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,Se.depth,Re,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Fe,Ie.width,Ie.height,Se.depth,0,Ie.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?q&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,Se.depth,Re,Ge,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Fe,Ie.width,Ie.height,Se.depth,0,Re,Ge,Ie.data);d.layerUpdates.size>0&&d.clearLayerUpdates()}else{et&&ct&&t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Je[0].width,Je[0].height);for(let xe=0,Oe=Je.length;xe<Oe;xe++)Ie=Je[xe],d.format!==Jn?Re!==null?et?q&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Re,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Fe,Ie.width,Ie.height,0,Ie.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?q&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Re,Ge,Ie.data):t.texImage2D(n.TEXTURE_2D,xe,Fe,Ie.width,Ie.height,0,Re,Ge,Ie.data)}else if(d.isDataArrayTexture)if(et){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Fe,Se.width,Se.height,Se.depth),q)if(d.layerUpdates.size>0){const xe=Pf(Se.width,Se.height,d.format,d.type);for(const Oe of d.layerUpdates){const ze=Se.data.subarray(Oe*xe/Se.data.BYTES_PER_ELEMENT,(Oe+1)*xe/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Oe,Se.width,Se.height,1,Re,Ge,ze)}d.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Re,Ge,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,Se.width,Se.height,Se.depth,0,Re,Ge,Se.data);else if(d.isData3DTexture)et?(ct&&t.texStorage3D(n.TEXTURE_3D,Ue,Fe,Se.width,Se.height,Se.depth),q&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Re,Ge,Se.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,Se.width,Se.height,Se.depth,0,Re,Ge,Se.data);else if(d.isFramebufferTexture){if(ct)if(et)t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Se.width,Se.height);else{let xe=Se.width,Oe=Se.height;for(let ze=0;ze<Ue;ze++)t.texImage2D(n.TEXTURE_2D,ze,Fe,xe,Oe,0,Re,Ge,null),xe>>=1,Oe>>=1}}else if(d.isHTMLTexture){if("texElementImage2D"in n){const xe=n.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),Se.parentNode!==xe){xe.appendChild(Se),f.add(d),xe.onpaint=Oe=>{const ze=Oe.changedElements;for(const Ee of f)ze.includes(Ee.image)&&(Ee.needsUpdate=!0)},xe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Se);else{const ze=n.RGBA,Ee=n.RGBA,Qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,Ee,Qe,Se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Je.length>0){if(et&&ct){const xe=U(Je[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Fe,xe.width,xe.height)}for(let xe=0,Oe=Je.length;xe<Oe;xe++)Ie=Je[xe],et?q&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Re,Ge,Ie):t.texImage2D(n.TEXTURE_2D,xe,Fe,Re,Ge,Ie);d.generateMipmaps=!1}else if(et){if(ct){const xe=U(Se);t.texStorage2D(n.TEXTURE_2D,Ue,Fe,xe.width,xe.height)}q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ge,Se)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Re,Ge,Se);m(d)&&T(Y),we.__version=Ae.version,d.onUpdate&&d.onUpdate(d)}_.__version=d.version}function ke(_,d,P){if(d.image.length!==6)return;const Y=je(_,d),j=d.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+P);const Ae=i.get(j);if(j.version!==Ae.__version||Y===!0){t.activeTexture(n.TEXTURE0+P);const we=vt.getPrimaries(vt.workingColorSpace),ge=d.colorSpace===or?null:vt.getPrimaries(d.colorSpace),Se=d.colorSpace===or||we===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,d.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Re=d.isCompressedTexture||d.image[0].isCompressedTexture,Ge=d.image[0]&&d.image[0].isDataTexture,Fe=[];for(let Ee=0;Ee<6;Ee++)!Re&&!Ge?Fe[Ee]=g(d.image[Ee],!0,r.maxCubemapSize):Fe[Ee]=Ge?d.image[Ee].image:d.image[Ee],Fe[Ee]=K(d,Fe[Ee]);const Ie=Fe[0],Je=s.convert(d.format,d.colorSpace),et=s.convert(d.type),ct=y(d.internalFormat,Je,et,d.normalized,d.colorSpace),q=d.isVideoTexture!==!0,Ue=Ae.__version===void 0||Y===!0,xe=j.dataReady;let Oe=w(d,Ie);nt(n.TEXTURE_CUBE_MAP,d);let ze;if(Re){q&&Ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,ct,Ie.width,Ie.height);for(let Ee=0;Ee<6;Ee++){ze=Fe[Ee].mipmaps;for(let Qe=0;Qe<ze.length;Qe++){const Ke=ze[Qe];d.format!==Jn?Je!==null?q?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,0,0,Ke.width,Ke.height,Je,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,ct,Ke.width,Ke.height,0,Ke.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,0,0,Ke.width,Ke.height,Je,et,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,ct,Ke.width,Ke.height,0,Je,et,Ke.data)}}}else{if(ze=d.mipmaps,q&&Ue){ze.length>0&&Oe++;const Ee=U(Fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,ct,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ge){q?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Fe[Ee].width,Fe[Ee].height,Je,et,Fe[Ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ct,Fe[Ee].width,Fe[Ee].height,0,Je,et,Fe[Ee].data);for(let Qe=0;Qe<ze.length;Qe++){const Lt=ze[Qe].image[Ee].image;q?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,0,0,Lt.width,Lt.height,Je,et,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,ct,Lt.width,Lt.height,0,Je,et,Lt.data)}}else{q?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Je,et,Fe[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ct,Je,et,Fe[Ee]);for(let Qe=0;Qe<ze.length;Qe++){const Ke=ze[Qe];q?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,0,0,Je,et,Ke.image[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,ct,Je,et,Ke.image[Ee])}}}m(d)&&T(n.TEXTURE_CUBE_MAP),Ae.__version=j.version,d.onUpdate&&d.onUpdate(d)}_.__version=d.version}function Le(_,d,P,Y,j,Ae){const we=s.convert(P.format,P.colorSpace),ge=s.convert(P.type),Se=y(P.internalFormat,we,ge,P.normalized,P.colorSpace),Re=i.get(d),Ge=i.get(P);if(Ge.__renderTarget=d,!Re.__hasExternalTextures){const Fe=Math.max(1,d.width>>Ae),Ie=Math.max(1,d.height>>Ae);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,Ae,Se,Fe,Ie,d.depth,0,we,ge,null):t.texImage2D(j,Ae,Se,Fe,Ie,0,we,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),Te(d)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,j,Ge.__webglTexture,0,ne(d)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,j,Ge.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(_,d,P){if(n.bindRenderbuffer(n.RENDERBUFFER,_),d.depthBuffer){const Y=d.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,Ae=A(d.stencilBuffer,j),we=d.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Te(d)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(d),Ae,d.width,d.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(d),Ae,d.width,d.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,d.width,d.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,_)}else{const Y=d.textures;for(let j=0;j<Y.length;j++){const Ae=Y[j],we=s.convert(Ae.format,Ae.colorSpace),ge=s.convert(Ae.type),Se=y(Ae.internalFormat,we,ge,Ae.normalized,Ae.colorSpace);Te(d)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(d),Se,d.width,d.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(d),Se,d.width,d.height):n.renderbufferStorage(n.RENDERBUFFER,Se,d.width,d.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(_,d,P){const Y=d.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(d.depthTexture);if(j.__renderTarget=d,(!j.__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,d.depthTexture.addEventListener("dispose",O)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),nt(n.TEXTURE_CUBE_MAP,d.depthTexture);const Re=s.convert(d.depthTexture.format),Ge=s.convert(d.depthTexture.type);let Fe;d.depthTexture.format===Ki?Fe=n.DEPTH_COMPONENT24:d.depthTexture.format===Lr&&(Fe=n.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Fe,d.width,d.height,0,Re,Ge,null)}}else de(d.depthTexture,0);const Ae=j.__webglTexture,we=ne(d),ge=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+P:n.TEXTURE_2D,Se=d.depthTexture.format===Lr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(d.depthTexture.format===Ki)Te(d)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,ge,Ae,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,Se,ge,Ae,0);else if(d.depthTexture.format===Lr)Te(d)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,ge,Ae,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,Se,ge,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function N(_){const d=i.get(_),P=_.isWebGLCubeRenderTarget===!0;if(d.__boundDepthTexture!==_.depthTexture){const Y=_.depthTexture;if(d.__depthDisposeCallback&&d.__depthDisposeCallback(),Y){const j=()=>{delete d.__boundDepthTexture,delete d.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),d.__depthDisposeCallback=j}d.__boundDepthTexture=Y}if(_.depthTexture&&!d.__autoAllocateDepthBuffer)if(P)for(let Y=0;Y<6;Y++)F(d.__webglFramebuffer[Y],_,Y);else{const Y=_.texture.mipmaps;Y&&Y.length>0?F(d.__webglFramebuffer[0],_,0):F(d.__webglFramebuffer,_,0)}else if(P){d.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,d.__webglFramebuffer[Y]),d.__webglDepthbuffer[Y]===void 0)d.__webglDepthbuffer[Y]=n.createRenderbuffer(),R(d.__webglDepthbuffer[Y],_,!1);else{const j=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=d.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Ae)}}else{const Y=_.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,d.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer===void 0)d.__webglDepthbuffer=n.createRenderbuffer(),R(d.__webglDepthbuffer,_,!1);else{const j=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=d.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(_,d,P){const Y=i.get(_);d!==void 0&&Le(Y.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&N(_)}function W(_){const d=_.texture,P=i.get(_),Y=i.get(d);_.addEventListener("dispose",M);const j=_.textures,Ae=_.isWebGLCubeRenderTarget===!0,we=j.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=d.version,a.memory.textures++),Ae){P.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(d.mipmaps&&d.mipmaps.length>0){P.__webglFramebuffer[ge]=[];for(let Se=0;Se<d.mipmaps.length;Se++)P.__webglFramebuffer[ge][Se]=n.createFramebuffer()}else P.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){P.__webglFramebuffer=[];for(let ge=0;ge<d.mipmaps.length;ge++)P.__webglFramebuffer[ge]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(we)for(let ge=0,Se=j.length;ge<Se;ge++){const Re=i.get(j[ge]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}if(_.samples>0&&Te(_)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ge=0;ge<j.length;ge++){const Se=j[ge];P.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ge]);const Re=s.convert(Se.format,Se.colorSpace),Ge=s.convert(Se.type),Fe=y(Se.internalFormat,Re,Ge,Se.normalized,Se.colorSpace,_.isXRRenderTarget===!0),Ie=ne(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Fe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,P.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),R(P.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),nt(n.TEXTURE_CUBE_MAP,d);for(let ge=0;ge<6;ge++)if(d.mipmaps&&d.mipmaps.length>0)for(let Se=0;Se<d.mipmaps.length;Se++)Le(P.__webglFramebuffer[ge][Se],_,d,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Se);else Le(P.__webglFramebuffer[ge],_,d,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(d)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ge=0,Se=j.length;ge<Se;ge++){const Re=j[ge],Ge=i.get(Re);let Fe=n.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Fe=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Fe,Ge.__webglTexture),nt(Fe,Re),Le(P.__webglFramebuffer,_,Re,n.COLOR_ATTACHMENT0+ge,Fe,0),m(Re)&&T(Fe)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ge=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,Y.__webglTexture),nt(ge,d),d.mipmaps&&d.mipmaps.length>0)for(let Se=0;Se<d.mipmaps.length;Se++)Le(P.__webglFramebuffer[Se],_,d,n.COLOR_ATTACHMENT0,ge,Se);else Le(P.__webglFramebuffer,_,d,n.COLOR_ATTACHMENT0,ge,0);m(d)&&T(ge),t.unbindTexture()}_.depthBuffer&&N(_)}function H(_){const d=_.textures;for(let P=0,Y=d.length;P<Y;P++){const j=d[P];if(m(j)){const Ae=I(_),we=i.get(j).__webglTexture;t.bindTexture(Ae,we),T(Ae),t.unbindTexture()}}}const Q=[],ue=[];function se(_){if(_.samples>0){if(Te(_)===!1){const d=_.textures,P=_.width,Y=_.height;let j=n.COLOR_BUFFER_BIT;const Ae=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(_),ge=d.length>1;if(ge)for(let Re=0;Re<d.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Se=_.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Re=0;Re<d.length;Re++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Re]);const Ge=i.get(d[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,P,Y,0,0,P,Y,j,n.NEAREST),l===!0&&(Q.length=0,ue.length=0,Q.push(n.COLOR_ATTACHMENT0+Re),_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&(Q.push(Ae),ue.push(Ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Re=0;Re<d.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,we.__webglColorRenderbuffer[Re]);const Ge=i.get(d[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&l){const d=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[d])}}}function ne(_){return Math.min(r.maxSamples,_.samples)}function Te(_){const d=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function L(_){const d=a.render.frame;u.get(_)!==d&&(u.set(_,d),_.update())}function K(_,d){const P=_.colorSpace,Y=_.format,j=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||P!==Io&&P!==or&&(vt.getTransfer(P)===Ct?(Y!==Jn||j!==Ln)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",P)),d}function U(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=he,this.resetTextureUnits=ie,this.getTextureUnits=k,this.setTextureUnits=ee,this.setTexture2D=de,this.setTexture2DArray=oe,this.setTexture3D=_e,this.setTextureCube=me,this.rebindTextures=G,this.setupRenderTarget=W,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ME(n,e){function t(i,r=or){let s;const a=vt.getTransfer(r);if(i===Ln)return n.UNSIGNED_BYTE;if(i===Fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ou)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ap)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bp)return n.BYTE;if(i===Ep)return n.SHORT;if(i===aa)return n.UNSIGNED_SHORT;if(i===Nu)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Mi)return n.HALF_FLOAT;if(i===wp)return n.ALPHA;if(i===Rp)return n.RGB;if(i===Jn)return n.RGBA;if(i===Ki)return n.DEPTH_COMPONENT;if(i===Lr)return n.DEPTH_STENCIL;if(i===Cp)return n.RED;if(i===Bu)return n.RED_INTEGER;if(i===Fr)return n.RG;if(i===zu)return n.RG_INTEGER;if(i===Vu)return n.RGBA_INTEGER;if(i===mo||i===go||i===_o||i===vo)if(a===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dc||i===Ic||i===Uc||i===Nc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fc||i===Oc||i===Bc||i===zc||i===Vc||i===Lo||i===Hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fc||i===Oc)return a===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===zc)return s.COMPRESSED_R11_EAC;if(i===Vc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Lo)return s.COMPRESSED_RG11_EAC;if(i===Hc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kc||i===Gc||i===Wc||i===Xc||i===$c||i===qc||i===Yc||i===Kc||i===Zc||i===Jc||i===Qc||i===jc||i===eu||i===tu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===kc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$c)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nu||i===iu||i===ru)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nu)return a===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===iu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===su||i===au||i===Do||i===ou)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===su)return s.COMPRESSED_RED_RGTC1_EXT;if(i===au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Do)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ou)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const yE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Fp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yi({vertexShader:yE,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new nl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TE extends dr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const b=typeof XRWebGLBinding<"u",g=new EE,m={},T=t.getContextAttributes();let I=null,y=null;const A=[],w=[],O=new Pe;let M=null,C=null;const B=new Zn;B.viewport=new Ht;const V=new Zn;V.viewport=new Ht;const J=[B,V],ie=new Lx;let k=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let re=A[ce];return re===void 0&&(re=new Ol,A[ce]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ce){let re=A[ce];return re===void 0&&(re=new Ol,A[ce]=re),re.getGripSpace()},this.getHand=function(ce){let re=A[ce];return re===void 0&&(re=new Ol,A[ce]=re),re.getHandSpace()};function he(ce){const re=w.indexOf(ce.inputSource);if(re===-1)return;const be=A[re];be!==void 0&&(be.update(ce.inputSource,ce.frame,c||a),be.dispatchEvent({type:ce.type,data:ce.inputSource}))}function te(){r.removeEventListener("select",he),r.removeEventListener("selectstart",he),r.removeEventListener("selectend",he),r.removeEventListener("squeeze",he),r.removeEventListener("squeezestart",he),r.removeEventListener("squeezeend",he),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",de);for(let ce=0;ce<A.length;ce++){const re=w[ce];re!==null&&(w[ce]=null,A[ce].disconnect(re))}k=null,ee=null,g.reset();for(const ce in m)delete m[ce];if(e.setRenderTarget(I),p=null,h=null,f=null,r=null,y=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(O.width,O.height,!1),C!==null){const ce=C.camera;ce.fov=C.fov,ce.zoom=C.zoom,ce.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){s=ce,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ce){if(r=ce,r!==null){if(I=e.getRenderTarget(),r.addEventListener("select",he),r.addEventListener("selectstart",he),r.addEventListener("selectend",he),r.addEventListener("squeeze",he),r.addEventListener("squeezestart",he),r.addEventListener("squeezeend",he),r.addEventListener("end",te),r.addEventListener("inputsourceschange",de),T.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,ke=null,Le=null;T.depth&&(Le=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=T.stencil?Lr:Ki,ke=T.stencil?oa:Si);const R={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(R),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ei(h.textureWidth,h.textureHeight,{format:Jn,type:Ln,depthTexture:new ca(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ei(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function de(ce){for(let re=0;re<ce.removed.length;re++){const be=ce.removed[re],ke=w.indexOf(be);ke>=0&&(w[ke]=null,A[ke].disconnect(be))}for(let re=0;re<ce.added.length;re++){const be=ce.added[re];let ke=w.indexOf(be);if(ke===-1){for(let R=0;R<A.length;R++)if(R>=w.length){w.push(be),ke=R;break}else if(w[R]===null){w[R]=be,ke=R;break}if(ke===-1)break}const Le=A[ke];Le&&Le.connect(be)}}const oe=new $,_e=new $;function me(ce,re,be){oe.setFromMatrixPosition(re.matrixWorld),_e.setFromMatrixPosition(be.matrixWorld);const ke=oe.distanceTo(_e),Le=re.projectionMatrix.elements,R=be.projectionMatrix.elements,F=Le[14]/(Le[10]-1),N=Le[14]/(Le[10]+1),G=(Le[9]+1)/Le[5],W=(Le[9]-1)/Le[5],H=(Le[8]-1)/Le[0],Q=(R[8]+1)/R[0],ue=F*H,se=F*Q,ne=ke/(-H+Q),Te=ne*-H;if(re.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Te),ce.translateZ(ne),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Le[10]===-1)ce.projectionMatrix.copy(re.projectionMatrix),ce.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const L=F+ne,K=N+ne,U=ue-Te,_=se+(ke-Te),d=G*N/K*L,P=W*N/K*L;ce.projectionMatrix.makePerspective(U,_,d,P,L,K),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function De(ce,re){re===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(re.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(r===null)return;let re=ce.near,be=ce.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(be=g.depthFar)),ie.near=V.near=B.near=re,ie.far=V.far=B.far=be,(k!==ie.near||ee!==ie.far)&&(r.updateRenderState({depthNear:ie.near,depthFar:ie.far}),k=ie.near,ee=ie.far),ie.layers.mask=ce.layers.mask|6,B.layers.mask=ie.layers.mask&-5,V.layers.mask=ie.layers.mask&-3;const ke=ce.parent,Le=ie.cameras;De(ie,ke);for(let R=0;R<Le.length;R++)De(Le[R],ke);Le.length===2?me(ie,B,V):ie.projectionMatrix.copy(B.projectionMatrix),C===null&&ce.isPerspectiveCamera&&(C={camera:ce,fov:ce.fov,zoom:ce.zoom}),Be(ce,ie,ke)};function Be(ce,re,be){be===null?ce.matrix.copy(re.matrixWorld):(ce.matrix.copy(be.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(re.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(re.projectionMatrix),ce.projectionMatrixInverse.copy(re.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=cu*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ce){l=ce,h!==null&&(h.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(ie)},this.getCameraTexture=function(ce){return m[ce]};let rt=null;function nt(ce,re){if(u=re.getViewerPose(c||a),v=re,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ke=!1;be.length!==ie.cameras.length&&(ie.cameras.length=0,ke=!0);for(let N=0;N<be.length;N++){const G=be[N];let W=null;if(p!==null)W=p.getViewport(G);else{const Q=f.getViewSubImage(h,G);W=Q.viewport,N===0&&(e.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(y))}let H=J[N];H===void 0&&(H=new Zn,H.layers.enable(N),H.viewport=new Ht,J[N]=H),H.matrix.fromArray(G.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(G.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(W.x,W.y,W.width,W.height),N===0&&(ie.matrix.copy(H.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),ke===!0&&ie.cameras.push(H)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const N=f.getDepthInformation(be[0]);N&&N.isValid&&N.texture&&g.init(N,r.renderState)}if(Le&&Le.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let N=0;N<be.length;N++){const G=be[N].camera;if(G){let W=m[G];W||(W=new Fp,m[G]=W);const H=f.getCameraImage(G);W.sourceTexture=H}}}}for(let be=0;be<A.length;be++){const ke=w[be],Le=A[be];ke!==null&&Le!==void 0&&Le.update(ke,re,c||a)}rt&&rt(ce,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const je=new Kp;je.setAnimationLoop(nt),this.setAnimationLoop=function(ce){rt=ce},this.dispose=function(){}}}const AE=new Bt,nm=new ut;nm.set(-1,0,0,0,1,0,0,0,1);function wE(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Xp(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,T,I,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&p(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),b(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,T,I):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===wn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===wn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const T=e.get(m),I=T.envMap,y=T.envMapRotation;I&&(g.envMap.value=I,g.envMapRotation.value.setFromMatrix4(AE.makeRotationFromEuler(y)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(nm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,T,I){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*T,g.scale.value=I*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,T){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===wn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){const T=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RE(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){const w=A.program;i.uniformBlockBinding(y,w)}function c(y,A){let w=r[y.id];w===void 0&&(g(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",T));const O=A.program;i.updateUBOMapping(y,O);const M=e.render.frame;s[y.id]!==M&&(h(y),s[y.id]=M)}function u(y){const A=f();y.__bindingPointIndex=A;const w=n.createBuffer(),O=y.__size,M=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,O,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,w),w}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const A=r[y.id],w=y.uniforms,O=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let M=0,C=w.length;M<C;M++){const B=w[M];if(Array.isArray(B))for(let V=0,J=B.length;V<J;V++)p(B[V],M,V,O);else p(B,M,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,A,w,O){if(b(y,A,w,O)===!0){const M=y.__offset,C=y.value;if(Array.isArray(C)){let B=0;for(let V=0;V<C.length;V++){const J=C[V],ie=m(J);v(J,y.__data,B),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(B+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(C,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,y.__data)}}function v(y,A,w){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,w)}function b(y,A,w,O){const M=y.value,C=A+"_"+w;if(O[C]===void 0)return typeof M=="number"||typeof M=="boolean"?O[C]=M:ArrayBuffer.isView(M)?O[C]=M.slice():O[C]=M.clone(),!0;{const B=O[C];if(typeof M=="number"||typeof M=="boolean"){if(B!==M)return O[C]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(B.equals(M)===!1)return B.copy(M),!0}}return!1}function g(y){const A=y.uniforms;let w=0;const O=16;for(let C=0,B=A.length;C<B;C++){const V=Array.isArray(A[C])?A[C]:[A[C]];for(let J=0,ie=V.length;J<ie;J++){const k=V[J],ee=Array.isArray(k.value)?k.value:[k.value];for(let he=0,te=ee.length;he<te;he++){const de=ee[he],oe=m(de),_e=w%O,me=_e%oe.boundary,De=_e+me;w+=me,De!==0&&O-De<oe.storage&&(w+=O-De),k.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=oe.storage}}}const M=w%O;return M>0&&(w+=O-M),y.__size=w,y.__cache={},this}function m(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):st("WebGLRenderer: Unsupported uniform value type.",y),A}function T(y){const A=y.target;A.removeEventListener("dispose",T);const w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function I(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:I}}const CE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function PE(){return oi===null&&(oi=new Dv(CE,16,16,Fr,Mi),oi.name="DFG_LUT",oi.minFilter=fn,oi.magFilter=fn,oi.wrapS=zi,oi.wrapT=zi,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class LE{constructor(e={}){const{canvas:t=av(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Ln}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const b=p,g=new Set([Vu,zu,Bu]),m=new Set([Ln,Si,aa,oa,Fu,Ou]),T=new Uint32Array(4),I=new Int32Array(4),y=new $;let A=null,w=null;const O=[],M=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let V=!1,J=null,ie=null,k=null,ee=null;this._outputColorSpace=zn;let he=0,te=0,de=null,oe=-1,_e=null;const me=new Ht,De=new Ht;let Be=null;const rt=new xt(0);let nt=0,je=t.width,ce=t.height,re=1,be=null,ke=null;const Le=new Ht(0,0,je,ce),R=new Ht(0,0,je,ce);let F=!1;const N=new Xu;let G=!1,W=!1;const H=new Bt,Q=new $,ue=new Ht,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Te(){return de===null?re:1}let L=i;function K(E,X){return t.getContext(E,X)}let U,_,d,P,Y,j,Ae,we,ge,Se,Re,Ge,Fe,Ie,Je,et,ct,q,Ue,xe,Oe,ze,Ee;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uu}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",mn,!1),L===null){const X="webgl2";if(L=K(X,E),L===null)throw K(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(E){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),St("WebGLRenderer: "+E.message),E}function Qe(){U=new Py(L),U.init(),Oe=new ME(L,U),_=new Sy(L,U,e,Oe),d=new xE(L,U),_.reversedDepthBuffer&&h&&d.buffers.depth.setReversed(!0),ie=L.createFramebuffer(),k=L.createFramebuffer(),ee=L.createFramebuffer(),P=new Iy(L),Y=new sE,j=new SE(L,U,d,Y,_,Oe,P),Ae=new Cy(B),we=new Nx(L),ze=new vy(L,we),ge=new Ly(L,we,P,ze),Se=new Ny(L,ge,we,ze,P),q=new Uy(L,_,j),Je=new My(Y),Re=new rE(B,Ae,U,_,ze,Je),Ge=new wE(B,Y),Fe=new oE,Ie=new dE(U),ct=new _y(B,Ae,d,Se,v,l),et=new vE(B,Se,_),Ee=new RE(L,P,_,d),Ue=new xy(L,U,P),xe=new Dy(L,U,P),P.programs=Re.programs,B.capabilities=_,B.extensions=U,B.properties=Y,B.renderLists=Fe,B.shadowMap=et,B.state=d,B.info=P}b!==Ln&&(C=new Oy(b,t.width,t.height,o,r,s));const Ke=new TE(B,L);this.xr=Ke,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=U.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=U.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(E){E!==void 0&&(re=E,this.setSize(je,ce,!1))},this.getSize=function(E){return E.set(je,ce)},this.setSize=function(E,X,fe=!0){if(Ke.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}je=E,ce=X,t.width=Math.floor(E*re),t.height=Math.floor(X*re),fe===!0&&(t.style.width=E+"px",t.style.height=X+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(je*re,ce*re).floor()},this.setDrawingBufferSize=function(E,X,fe){je=E,ce=X,re=fe,t.width=Math.floor(E*fe),t.height=Math.floor(X*fe),this.setViewport(0,0,E,X)},this.setEffects=function(E){if(b===Ln){St("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let X=0;X<E.length;X++)if(E[X].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(me)},this.getViewport=function(E){return E.copy(Le)},this.setViewport=function(E,X,fe,le){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,X,fe,le),d.viewport(me.copy(Le).multiplyScalar(re).round())},this.getScissor=function(E){return E.copy(R)},this.setScissor=function(E,X,fe,le){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,X,fe,le),d.scissor(De.copy(R).multiplyScalar(re).round())},this.getScissorTest=function(){return F},this.setScissorTest=function(E){d.setScissorTest(F=E)},this.setOpaqueSort=function(E){be=E},this.setTransparentSort=function(E){ke=E},this.getClearColor=function(E){return E.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(E=!0,X=!0,fe=!0){let le=0;if(E){let ae=!1;if(de!==null){const Ve=de.texture.format;ae=g.has(Ve)}if(ae){const Ve=de.texture.type,Xe=m.has(Ve),Ne=ct.getClearColor(),qe=ct.getClearAlpha(),We=Ne.r,ft=Ne.g,pt=Ne.b;Xe?(T[0]=We,T[1]=ft,T[2]=pt,T[3]=qe,L.clearBufferuiv(L.COLOR,0,T)):(I[0]=We,I[1]=ft,I[2]=pt,I[3]=qe,L.clearBufferiv(L.COLOR,0,I))}else le|=L.COLOR_BUFFER_BIT}X&&(le|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(le|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&L.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),J=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),ct.dispose(),Fe.dispose(),Ie.dispose(),Y.dispose(),Ae.dispose(),Se.dispose(),ze.dispose(),Ee.dispose(),Re.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",va),Ke.removeEventListener("sessionend",pr),Ei.stop()};function Lt(E){E.preventDefault(),Kh("WebGLRenderer: Context Lost."),V=!0}function gt(){Kh("WebGLRenderer: Context Restored."),V=!1;const E=P.autoReset,X=et.enabled,fe=et.autoUpdate,le=et.needsUpdate,ae=et.type;Qe(),P.autoReset=E,et.enabled=X,et.autoUpdate=fe,et.needsUpdate=le,et.type=ae}function mn(E){St("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Un(E){const X=E.target;X.removeEventListener("dispose",Un),al(X)}function al(E){ol(E),Y.remove(E)}function ol(E){const X=Y.get(E).programs;X!==void 0&&(X.forEach(function(fe){Re.releaseProgram(fe)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,fe,le,ae,Ve){X===null&&(X=se);const Xe=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Ne=cl(E,X,fe,le,ae);d.setMaterial(le,Xe);let qe=fe.index,We=1;if(le.wireframe===!0){if(qe=ge.getWireframeAttribute(fe),qe===void 0)return;We=2}const ft=fe.drawRange,pt=fe.attributes.position;let Ye=ft.start*We,yt=(ft.start+ft.count)*We;Ve!==null&&(Ye=Math.max(Ye,Ve.start*We),yt=Math.min(yt,(Ve.start+Ve.count)*We)),qe!==null?(Ye=Math.max(Ye,0),yt=Math.min(yt,qe.count)):pt!=null&&(Ye=Math.max(Ye,0),yt=Math.min(yt,pt.count));const zt=yt-Ye;if(zt<0||zt===1/0)return;ze.setup(ae,le,Ne,fe,qe);let Ut,Rt=Ue;if(qe!==null&&(Ut=we.get(qe),Rt=xe,Rt.setIndex(Ut)),ae.isMesh)le.wireframe===!0?(d.setLineWidth(le.wireframeLinewidth*Te()),Rt.setMode(L.LINES)):Rt.setMode(L.TRIANGLES);else if(ae.isLine){let Qt=le.linewidth;Qt===void 0&&(Qt=1),d.setLineWidth(Qt*Te()),ae.isLineSegments?Rt.setMode(L.LINES):ae.isLineLoop?Rt.setMode(L.LINE_LOOP):Rt.setMode(L.LINE_STRIP)}else ae.isPoints?Rt.setMode(L.POINTS):ae.isSprite&&Rt.setMode(L.TRIANGLES);if(ae.isBatchedMesh)if(U.get("WEBGL_multi_draw"))Rt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Qt=ae._multiDrawStarts,$e=ae._multiDrawCounts,en=ae._multiDrawCount,_t=qe?we.get(qe).bytesPerElement:1,yn=Y.get(le).currentProgram.getUniforms();for(let Nn=0;Nn<en;Nn++)yn.setValue(L,"_gl_DrawID",Nn),Rt.render(Qt[Nn]/_t,$e[Nn])}else if(ae.isInstancedMesh)Rt.renderInstances(Ye,zt,ae.count);else if(fe.isInstancedBufferGeometry){const Qt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,$e=Math.min(fe.instanceCount,Qt);Rt.renderInstances(Ye,zt,$e)}else Rt.render(Ye,zt)};function vs(E,X,fe,le){J!==null&&E.isNodeMaterial&&J.setObject(le,E),G===!0&&Je.setState(E,fe,!1),E.transparent===!0&&E.side===di&&E.forceSinglePass===!1?(E.side=wn,E.needsUpdate=!0,Jt(E,X,le),E.side=Ur,E.needsUpdate=!0,Jt(E,X,le),E.side=di):Jt(E,X,le)}this.compile=function(E,X,fe=null){fe===null&&(fe=E),J!==null&&J.renderStart(E,X,fe),w=Ie.get(fe),w.init(X),M.push(w),fe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(X.layers)&&(w.pushLight(ae),ae.castShadow&&w.pushShadow(ae))}),E!==fe&&E.traverseVisible(function(ae){ae.isLight&&ae.layers.test(X.layers)&&(w.pushLight(ae),ae.castShadow&&w.pushShadow(ae))}),w.setupLights(),J!==null&&J.updateLights(w.state.lightsArray),W=this.localClippingEnabled,G=Je.init(this.clippingPlanes,W),G===!0&&Je.setGlobalState(this.clippingPlanes,X),J!==null&&et.render(w.state.shadowsArray,fe,X);const le=new Set;return E.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Ve=ae.material;if(Ve)if(Array.isArray(Ve))for(let Xe=0;Xe<Ve.length;Xe++){const Ne=Ve[Xe];vs(Ne,fe,X,ae),le.add(Ne)}else vs(Ve,fe,X,ae),le.add(Ve)}),w=M.pop(),J!==null&&J.renderEnd(),le},this.compileAsync=function(E,X,fe=null){const le=this.compile(E,X,fe);return new Promise(ae=>{function Ve(){if(le.forEach(function(Xe){const qe=Y.get(Xe).currentProgram;(qe===void 0||qe.isReady())&&le.delete(Xe)}),le.size===0){ae(E);return}setTimeout(Ve,10)}U.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let xs=null;function ll(E){xs&&xs(E)}function va(){Ei.stop()}function pr(){Ei.start()}const Ei=new Kp;Ei.setAnimationLoop(ll),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){xs=E,Ke.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},Ke.addEventListener("sessionstart",va),Ke.addEventListener("sessionend",pr),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;J!==null&&J.renderStart(E,X);const fe=Ke.enabled===!0&&Ke.isPresenting===!0,le=C!==null&&(de===null||fe)&&C.begin(B,de);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(X),X=Ke.getCamera()),E.isScene===!0&&E.onBeforeRender(B,E,X,de),w=Ie.get(E,M.length),w.init(X),w.state.textureUnits=j.getTextureUnits(),M.push(w),H.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),N.setFromProjectionMatrix(H,mi,X.reversedDepth),W=this.localClippingEnabled,G=Je.init(this.clippingPlanes,W),A=Fe.get(E,O.length),A.init(),O.push(A),Ke.enabled===!0&&Ke.isPresenting===!0){const Xe=B.xr.getDepthSensingMesh();Xe!==null&&Ss(Xe,X,-1/0,B.sortObjects)}Ss(E,X,0,B.sortObjects),A.finish(),J!==null&&J.updateLights(w.state.lightsArray),B.sortObjects===!0&&A.sort(be,ke),ne=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,ne&&ct.addToRenderList(A,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),G===!0&&Je.beginShadows();const ae=w.state.shadowsArray;if(et.render(ae,E,X),G===!0&&Je.endShadows(),(le&&C.hasRenderPass())===!1){const Xe=A.opaque,Ne=A.transmissive;if(w.setupLights(),X.isArrayCamera){const qe=X.cameras;if(Ne.length>0)for(let We=0,ft=qe.length;We<ft;We++){const pt=qe[We];Ms(Xe,Ne,E,pt)}ne&&ct.render(E);for(let We=0,ft=qe.length;We<ft;We++){const pt=qe[We];mr(A,E,pt,pt.viewport)}}else Ne.length>0&&Ms(Xe,Ne,E,X),ne&&ct.render(E),mr(A,E,X)}de!==null&&te===0&&(j.updateMultisampleRenderTarget(de),j.updateRenderTargetMipmap(de)),le&&C.end(B),E.isScene===!0&&E.onAfterRender(B,E,X),ze.resetDefaultState(),oe=-1,_e=null,M.pop(),M.length>0?(w=M[M.length-1],j.setTextureUnits(w.state.textureUnits),G===!0&&Je.setGlobalState(B.clippingPlanes,w.state.camera)):w=null,O.pop(),O.length>0?A=O[O.length-1]:A=null,J!==null&&J.renderEnd()};function Ss(E,X,fe,le){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)fe=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(N)){le&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);const Xe=Se.update(E),Ne=E.material;Ne.visible&&A.push(E,Xe,Ne,fe,ue.z,null,X)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(N))){const Xe=Se.update(E),Ne=E.material;if(le&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ue.copy(E.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ue.copy(Xe.boundingSphere.center)),ue.applyMatrix4(E.matrixWorld).applyMatrix4(H)),Array.isArray(Ne)){const qe=Xe.groups;for(let We=0,ft=qe.length;We<ft;We++){const pt=qe[We],Ye=Ne[pt.materialIndex];Ye&&Ye.visible&&A.push(E,Xe,Ye,fe,ue.z,pt,X)}}else Ne.visible&&A.push(E,Xe,Ne,fe,ue.z,null,X)}}const Ve=E.children;for(let Xe=0,Ne=Ve.length;Xe<Ne;Xe++)Ss(Ve[Xe],X,fe,le)}function mr(E,X,fe,le){const{opaque:ae,transmissive:Ve,transparent:Xe}=E;w.setupLightsView(fe),G===!0&&Je.setGlobalState(B.clippingPlanes,fe),le&&d.viewport(me.copy(le)),ae.length>0&&gr(ae,X,fe),Ve.length>0&&gr(Ve,X,fe),Xe.length>0&&gr(Xe,X,fe),d.buffers.depth.setTest(!0),d.buffers.depth.setMask(!0),d.buffers.color.setMask(!0),d.setPolygonOffset(!1)}function Ms(E,X,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[le.id]===void 0){const Ye=U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[le.id]=new ei(1,1,{generateMipmaps:!0,type:Ye?Mi:Ln,minFilter:Pr,samples:Math.max(4,_.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ve=w.state.transmissionRenderTarget[le.id],Xe=le.viewport||me;Ve.setSize(Xe.z*B.transmissionResolutionScale,Xe.w*B.transmissionResolutionScale);const Ne=B.getRenderTarget(),qe=B.getActiveCubeFace(),We=B.getActiveMipmapLevel();B.setRenderTarget(Ve),B.getClearColor(rt),nt=B.getClearAlpha(),nt<1&&B.setClearColor(16777215,.5),B.clear(),ne&&ct.render(fe);const ft=B.toneMapping;B.toneMapping=_i;const pt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),w.setupLightsView(le),G===!0&&Je.setGlobalState(B.clippingPlanes,le),gr(E,fe,le),j.updateMultisampleRenderTarget(Ve),j.updateRenderTargetMipmap(Ve),U.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let yt=0,zt=X.length;yt<zt;yt++){const Ut=X[yt],{object:Rt,geometry:Qt,material:$e,group:en}=Ut;if($e.side===di&&Rt.layers.test(le.layers)){const _t=$e.side;$e.side=wn,$e.needsUpdate=!0,xa(Rt,fe,le,Qt,$e,en),$e.side=_t,$e.needsUpdate=!0,Ye=!0}}Ye===!0&&(j.updateMultisampleRenderTarget(Ve),j.updateRenderTargetMipmap(Ve))}B.setRenderTarget(Ne,qe,We),B.setClearColor(rt,nt),pt!==void 0&&(le.viewport=pt),B.toneMapping=ft}function gr(E,X,fe){const le=X.isScene===!0?X.overrideMaterial:null;for(let ae=0,Ve=E.length;ae<Ve;ae++){const Xe=E[ae],{object:Ne,geometry:qe,group:We}=Xe;let ft=Xe.material;ft.allowOverride===!0&&le!==null&&(ft=le),Ne.layers.test(fe.layers)&&xa(Ne,X,fe,qe,ft,We)}}function xa(E,X,fe,le,ae,Ve){J!==null&&ae.isNodeMaterial&&J.setObject(E,ae),E.onBeforeRender(B,X,fe,le,ae,Ve),E.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ae.onBeforeRender(B,X,fe,le,E,Ve),ae.transparent===!0&&ae.side===di&&ae.forceSinglePass===!1?(ae.side=wn,ae.needsUpdate=!0,B.renderBufferDirect(fe,X,le,ae,E,Ve),ae.side=Ur,ae.needsUpdate=!0,B.renderBufferDirect(fe,X,le,ae,E,Ve),ae.side=di):B.renderBufferDirect(fe,X,le,ae,E,Ve),E.onAfterRender(B,X,fe,le,ae,Ve)}function Jt(E,X,fe){X.isScene!==!0&&(X=se);const le=Y.get(E),ae=w.state.lights,Ve=w.state.shadowsArray,Xe=ae.state.version,Ne=Re.getParameters(E,ae.state,Ve,X,fe,w.state.lightProbeGridArray),qe=Re.getProgramCacheKey(Ne);let We=le.programs;le.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?X.environment:null,le.fog=X.fog;const ft=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;le.envMap=Ae.get(E.envMap||le.environment,ft),le.envMapRotation=le.environment!==null&&E.envMap===null?X.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",Un),We=new Map,le.programs=We);let pt=We.get(qe);if(pt!==void 0){if(le.currentProgram===pt&&le.lightsStateVersion===Xe)return ys(E,Ne),pt}else Ne.uniforms=Re.getUniforms(E),J!==null&&E.isNodeMaterial&&J.build(E,fe,Ne),E.onBeforeCompile(Ne,B),pt=Re.acquireProgram(Ne,qe),We.set(qe,pt),le.uniforms=Ne.uniforms;const Ye=le.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ye.clippingPlanes=Je.uniform),ys(E,Ne),le.needsLights=Ma(E),le.lightsStateVersion=Xe,le.needsLights&&(Ye.ambientLightColor.value=ae.state.ambient,Ye.lightProbe.value=ae.state.probe,Ye.sunLights.value=ae.state.sun,Ye.sunLightShadows.value=ae.state.sunShadow,Ye.directionalLights.value=ae.state.directional,Ye.directionalLightShadows.value=ae.state.directionalShadow,Ye.spotLights.value=ae.state.spot,Ye.spotLightShadows.value=ae.state.spotShadow,Ye.rectAreaLights.value=ae.state.rectArea,Ye.ltc_1.value=ae.state.rectAreaLTC1,Ye.ltc_2.value=ae.state.rectAreaLTC2,Ye.pointLights.value=ae.state.point,Ye.pointLightShadows.value=ae.state.pointShadow,Ye.hemisphereLights.value=ae.state.hemi,Ye.sunShadowMatrix.value=ae.state.sunShadowMatrix,Ye.sunShadowCascade.value=ae.state.sunShadowCascade,Ye.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ae.state.spotLightMatrix,Ye.spotLightMap.value=ae.state.spotLightMap,Ye.pointShadowMatrix.value=ae.state.pointShadowMatrix),le.lightProbeGrid=w.state.lightProbeGridArray.length>0,le.currentProgram=pt,le.uniformsList=null,pt}function Sa(E){if(E.uniformsList===null){const X=E.currentProgram.getUniforms();E.uniformsList=So.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function ys(E,X){const fe=Y.get(E);fe.outputColorSpace=X.outputColorSpace,fe.batching=X.batching,fe.batchingColor=X.batchingColor,fe.instancing=X.instancing,fe.instancingColor=X.instancingColor,fe.instancingMorph=X.instancingMorph,fe.skinning=X.skinning,fe.morphTargets=X.morphTargets,fe.morphNormals=X.morphNormals,fe.morphColors=X.morphColors,fe.morphTargetsCount=X.morphTargetsCount,fe.numClippingPlanes=X.numClippingPlanes,fe.numIntersection=X.numClipIntersection,fe.vertexAlphas=X.vertexAlphas,fe.vertexTangents=X.vertexTangents,fe.toneMapping=X.toneMapping}function Ji(E,X){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(X.matrixWorld);for(let fe=0,le=E.length;fe<le;fe++){const ae=E[fe];if(ae.texture!==null&&ae.boundingBox.containsPoint(y))return ae}return null}function cl(E,X,fe,le,ae){X.isScene!==!0&&(X=se),j.resetTextureUnits();const Ve=X.fog,Xe=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?X.environment:null,Ne=de===null?B.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:vt.workingColorSpace,qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,We=Ae.get(le.envMap||Xe,qe),ft=le.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pt=!!fe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ye=!!fe.morphAttributes.position,yt=!!fe.morphAttributes.normal,zt=!!fe.morphAttributes.color;let Ut=_i;le.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ut=B.toneMapping);const Rt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Qt=Rt!==void 0?Rt.length:0,$e=Y.get(le),en=w.state.lights;if(G===!0&&(W===!0||E!==_e)){const Dt=E===_e&&le.id===oe;Je.setState(le,E,Dt)}let _t=!1;le.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==en.state.version||$e.outputColorSpace!==Ne||ae.isBatchedMesh&&$e.batching===!1||!ae.isBatchedMesh&&$e.batching===!0||ae.isBatchedMesh&&$e.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&$e.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&$e.instancing===!1||!ae.isInstancedMesh&&$e.instancing===!0||ae.isSkinnedMesh&&$e.skinning===!1||!ae.isSkinnedMesh&&$e.skinning===!0||ae.isInstancedMesh&&$e.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&$e.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&$e.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&$e.instancingMorph===!1&&ae.morphTexture!==null||$e.envMap!==We||le.fog===!0&&$e.fog!==Ve||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Je.numPlanes||$e.numIntersection!==Je.numIntersection)||$e.vertexAlphas!==ft||$e.vertexTangents!==pt||$e.morphTargets!==Ye||$e.morphNormals!==yt||$e.morphColors!==zt||$e.toneMapping!==Ut||$e.morphTargetsCount!==Qt||!!$e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,$e.__version=le.version);let yn=$e.currentProgram;_t===!0&&(yn=Jt(le,X,ae),J&&le.isNodeMaterial&&J.onUpdateProgram(le,yn,$e));let Nn=!1,ni=!1,Ti=!1;const bt=yn.getUniforms(),Vt=$e.uniforms;if(d.useProgram(yn.program)&&(Nn=!0,ni=!0,Ti=!0),le.id!==oe&&(oe=le.id,ni=!0),$e.needsLights){const Dt=Ji(w.state.lightProbeGridArray,ae);$e.lightProbeGrid!==Dt&&($e.lightProbeGrid=Dt,ni=!0)}if(Nn||_e!==E){d.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),bt.setValue(L,"projectionMatrix",E.projectionMatrix),bt.setValue(L,"viewMatrix",E.matrixWorldInverse);const Wn=bt.map.cameraPosition;Wn!==void 0&&Wn.setValue(L,Q.setFromMatrixPosition(E.matrixWorld)),_.logarithmicDepthBuffer&&bt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&bt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),_e!==E&&(_e=E,ni=!0,Ti=!0)}if($e.needsLights&&(en.state.sunShadowMap.length>0&&bt.setValue(L,"sunShadowMap",en.state.sunShadowMap,j),en.state.directionalShadowMap.length>0&&bt.setValue(L,"directionalShadowMap",en.state.directionalShadowMap,j),en.state.spotShadowMap.length>0&&bt.setValue(L,"spotShadowMap",en.state.spotShadowMap,j),en.state.pointShadowMap.length>0&&bt.setValue(L,"pointShadowMap",en.state.pointShadowMap,j)),ae.isSkinnedMesh){bt.setOptional(L,ae,"bindMatrix"),bt.setOptional(L,ae,"bindMatrixInverse");const Dt=ae.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),bt.setValue(L,"boneTexture",Dt.boneTexture,j))}ae.isBatchedMesh&&(bt.setOptional(L,ae,"batchingTexture"),bt.setValue(L,"batchingTexture",ae._matricesTexture,j),bt.setOptional(L,ae,"batchingIdTexture"),bt.setValue(L,"batchingIdTexture",ae._indirectTexture,j),bt.setOptional(L,ae,"batchingColorTexture"),ae._colorsTexture!==null&&bt.setValue(L,"batchingColorTexture",ae._colorsTexture,j));const ii=fe.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&q.update(ae,fe,yn),(ni||$e.receiveShadow!==ae.receiveShadow)&&($e.receiveShadow=ae.receiveShadow,bt.setValue(L,"receiveShadow",ae.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&X.environment!==null&&(Vt.envMapIntensity.value=X.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=PE()),ni){if(bt.setValue(L,"toneMappingExposure",B.toneMappingExposure),$e.needsLights&&bs(Vt,Ti),Ve&&le.fog===!0&&Ge.refreshFogUniforms(Vt,Ve),Ge.refreshMaterialUniforms(Vt,le,re,ce,w.state.transmissionRenderTarget[E.id]),$e.needsLights&&$e.lightProbeGrid){const Dt=$e.lightProbeGrid;Vt.probesSH.value=Dt.texture,Vt.probesMin.value.copy(Dt.boundingBox.min),Vt.probesMax.value.copy(Dt.boundingBox.max),Vt.probesResolution.value.copy(Dt.resolution)}So.upload(L,Sa($e),Vt,j)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(So.upload(L,Sa($e),Vt,j),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&bt.setValue(L,"center",ae.center),bt.setValue(L,"modelViewMatrix",ae.modelViewMatrix),bt.setValue(L,"normalMatrix",ae.normalMatrix),bt.setValue(L,"modelMatrix",ae.matrixWorld),le.uniformsGroups!==void 0){const Dt=le.uniformsGroups;for(let Wn=0,Qi=Dt.length;Wn<Qi;Wn++){const ba=Dt[Wn];Ee.update(ba,yn),Ee.bind(ba,yn)}}return yn}function bs(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.sunLights.needsUpdate=X,E.sunLightShadows.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function Ma(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(E,X,fe){const le=Y.get(E);le.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Y.get(E.texture).__webglTexture=X,Y.get(E.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:fe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,X){const fe=Y.get(E);fe.__webglFramebuffer=X,fe.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(E,X=0,fe=0){de=E,he=X,te=fe;let le=null,ae=!1,Ve=!1;if(E){const Ne=Y.get(E);if(Ne.__useDefaultFramebuffer!==void 0){d.bindFramebuffer(L.FRAMEBUFFER,Ne.__webglFramebuffer),me.copy(E.viewport),De.copy(E.scissor),Be=E.scissorTest,d.viewport(me),d.scissor(De),d.setScissorTest(Be),oe=-1;return}else if(Ne.__webglFramebuffer===void 0)j.setupRenderTarget(E);else if(Ne.__hasExternalTextures)j.rebindTextures(E,Y.get(E.texture).__webglTexture,Y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ft=E.depthTexture;if(Ne.__boundDepthTexture!==ft){if(ft!==null&&Y.has(ft)&&(E.width!==ft.image.width||E.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(E)}}const qe=E.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ve=!0);const We=Y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(We[X])?le=We[X][fe]:le=We[X],ae=!0):E.samples>0&&j.useMultisampledRTT(E)===!1?le=Y.get(E).__webglMultisampledFramebuffer:Array.isArray(We)?le=We[fe]:le=We,me.copy(E.viewport),De.copy(E.scissor),Be=E.scissorTest}else me.copy(Le).multiplyScalar(re).floor(),De.copy(R).multiplyScalar(re).floor(),Be=F;if(fe!==0&&(le=ie),d.bindFramebuffer(L.FRAMEBUFFER,le)&&d.drawBuffers(E,le),d.viewport(me),d.scissor(De),d.setScissorTest(Be),ae){const Ne=Y.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,fe)}else if(Ve){const Ne=X;for(let qe=0;qe<E.textures.length;qe++){const We=Y.get(E.textures[qe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+qe,We.__webglTexture,fe,Ne)}}else if(E!==null&&fe!==0){const Ne=Y.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ne.__webglTexture,fe)}oe=-1};function ya(E){const X=Y.get(E);return(X.__readFormat!==E.format||X.__readType!==E.type)&&(X.__readFormat=E.format,X.__readType=E.type,X.__formatReadable=_.textureFormatReadable(E.format),X.__typeReadable=_.textureTypeReadable(E.type)),X}this.readRenderTargetPixels=function(E,X,fe,le,ae,Ve,Xe,Ne=0){if(!(E&&E.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){d.bindFramebuffer(L.FRAMEBUFFER,qe);try{const We=E.textures[Ne],ft=We.format,pt=We.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ne);const Ye=ya(We);if(Ye.__formatReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-le&&fe>=0&&fe<=E.height-ae&&L.readPixels(X,fe,le,ae,Oe.convert(ft),Oe.convert(pt),Ve)}finally{const We=de!==null?Y.get(de).__webglFramebuffer:null;d.bindFramebuffer(L.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(E,X,fe,le,ae,Ve,Xe,Ne=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe)if(X>=0&&X<=E.width-le&&fe>=0&&fe<=E.height-ae){d.bindFramebuffer(L.FRAMEBUFFER,qe);const We=E.textures[Ne],ft=We.format,pt=We.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ne);const Ye=ya(We);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,yt),L.bufferData(L.PIXEL_PACK_BUFFER,Ve.byteLength,L.STREAM_READ),L.readPixels(X,fe,le,ae,Oe.convert(ft),Oe.convert(pt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const zt=de!==null?Y.get(de).__webglFramebuffer:null;d.bindFramebuffer(L.FRAMEBUFFER,zt);const Ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ov(L,Ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,yt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ve),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(yt),L.deleteSync(Ut),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,X=null,fe=0){const le=Math.pow(2,-fe),ae=Math.floor(E.image.width*le),Ve=Math.floor(E.image.height*le),Xe=X!==null?X.x:0,Ne=X!==null?X.y:0;j.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,fe,0,0,Xe,Ne,ae,Ve),d.unbindTexture()},this.copyTextureToTexture=function(E,X,fe=null,le=null,ae=0,Ve=0){let Xe,Ne,qe,We,ft,pt,Ye,yt,zt;const Ut=E.isCompressedTexture?E.mipmaps[Ve]:E.image;if(fe!==null)Xe=fe.max.x-fe.min.x,Ne=fe.max.y-fe.min.y,qe=fe.isBox3?fe.max.z-fe.min.z:1,We=fe.min.x,ft=fe.min.y,pt=fe.isBox3?fe.min.z:0;else{const Vt=Math.pow(2,-ae);Xe=Math.floor(Ut.width*Vt),Ne=Math.floor(Ut.height*Vt),E.isDataArrayTexture?qe=Ut.depth:E.isData3DTexture?qe=Math.floor(Ut.depth*Vt):qe=1,We=0,ft=0,pt=0}le!==null?(Ye=le.x,yt=le.y,zt=le.z):(Ye=0,yt=0,zt=0);const Rt=Oe.convert(X.format),Qt=Oe.convert(X.type);let $e;X.isData3DTexture?(j.setTexture3D(X,0),$e=L.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(j.setTexture2DArray(X,0),$e=L.TEXTURE_2D_ARRAY):(j.setTexture2D(X,0),$e=L.TEXTURE_2D),d.activeTexture(L.TEXTURE0),d.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,X.flipY),d.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),d.pixelStorei(L.UNPACK_ALIGNMENT,X.unpackAlignment);const en=d.getParameter(L.UNPACK_ROW_LENGTH),_t=d.getParameter(L.UNPACK_IMAGE_HEIGHT),yn=d.getParameter(L.UNPACK_SKIP_PIXELS),Nn=d.getParameter(L.UNPACK_SKIP_ROWS),ni=d.getParameter(L.UNPACK_SKIP_IMAGES);d.pixelStorei(L.UNPACK_ROW_LENGTH,Ut.width),d.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ut.height),d.pixelStorei(L.UNPACK_SKIP_PIXELS,We),d.pixelStorei(L.UNPACK_SKIP_ROWS,ft),d.pixelStorei(L.UNPACK_SKIP_IMAGES,pt);const Ti=E.isDataArrayTexture||E.isData3DTexture,bt=X.isDataArrayTexture||X.isData3DTexture;if(E.isDepthTexture){const Vt=Y.get(E),ii=Y.get(X),Dt=Y.get(Vt.__renderTarget),Wn=Y.get(ii.__renderTarget);d.bindFramebuffer(L.READ_FRAMEBUFFER,Dt.__webglFramebuffer),d.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Qi=0;Qi<qe;Qi++)Ti&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(E).__webglTexture,ae,pt+Qi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(X).__webglTexture,Ve,zt+Qi)),L.blitFramebuffer(We,ft,Xe,Ne,Ye,yt,Xe,Ne,L.DEPTH_BUFFER_BIT,L.NEAREST);d.bindFramebuffer(L.READ_FRAMEBUFFER,null),d.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(ae!==0||E.isRenderTargetTexture||Y.has(E)){const Vt=Y.get(E),ii=Y.get(X);d.bindFramebuffer(L.READ_FRAMEBUFFER,k),d.bindFramebuffer(L.DRAW_FRAMEBUFFER,ee);for(let Dt=0;Dt<qe;Dt++)Ti?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.__webglTexture,ae,pt+Dt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vt.__webglTexture,ae),bt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ii.__webglTexture,Ve,zt+Dt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ii.__webglTexture,Ve),ae!==0?L.blitFramebuffer(We,ft,Xe,Ne,Ye,yt,Xe,Ne,L.COLOR_BUFFER_BIT,L.NEAREST):bt?L.copyTexSubImage3D($e,Ve,Ye,yt,zt+Dt,We,ft,Xe,Ne):L.copyTexSubImage2D($e,Ve,Ye,yt,We,ft,Xe,Ne);d.bindFramebuffer(L.READ_FRAMEBUFFER,null),d.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else bt?E.isDataTexture||E.isData3DTexture?L.texSubImage3D($e,Ve,Ye,yt,zt,Xe,Ne,qe,Rt,Qt,Ut.data):X.isCompressedArrayTexture?L.compressedTexSubImage3D($e,Ve,Ye,yt,zt,Xe,Ne,qe,Rt,Ut.data):L.texSubImage3D($e,Ve,Ye,yt,zt,Xe,Ne,qe,Rt,Qt,Ut):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ve,Ye,yt,Xe,Ne,Rt,Qt,Ut.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ve,Ye,yt,Ut.width,Ut.height,Rt,Ut.data):L.texSubImage2D(L.TEXTURE_2D,Ve,Ye,yt,Xe,Ne,Rt,Qt,Ut);d.pixelStorei(L.UNPACK_ROW_LENGTH,en),d.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t),d.pixelStorei(L.UNPACK_SKIP_PIXELS,yn),d.pixelStorei(L.UNPACK_SKIP_ROWS,Nn),d.pixelStorei(L.UNPACK_SKIP_IMAGES,ni),Ve===0&&X.generateMipmaps&&L.generateMipmap($e),d.unbindTexture()},this.initRenderTarget=function(E){Y.get(E).__webglFramebuffer===void 0&&j.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?j.setTextureCube(E,0):E.isData3DTexture?j.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?j.setTexture2DArray(E,0):j.setTexture2D(E,0),d.unbindTexture()},this.resetState=function(){he=0,te=0,de=null,d.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const jf={type:"change"},Ju={type:"start"},im={type:"end"},lo=new tl,ed=new Fi,DE=Math.cos(70*uv.DEG2RAD),Yt=new $,Tn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uc=1e-6;class IE extends Ix{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new hr,this._lastTargetPosition=new $,this._quat=new hr().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cf,this._sphericalDelta=new Cf,this._scale=1,this._panOffset=new $,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new $,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NE.bind(this),this._onPointerDown=UE.bind(this),this._onPointerUp=FE.bind(this),this._onContextMenu=GE.bind(this),this._onMouseWheel=zE.bind(this),this._onKeyDown=VE.bind(this),this._onTouchStart=HE.bind(this),this._onTouchMove=kE.bind(this),this._onMouseDown=OE.bind(this),this._onMouseMove=BE.bind(this),this._interceptControlDown=WE.bind(this),this._interceptControlUp=XE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Pt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jf),this.update(),this.state=Pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Tn:i>Math.PI&&(i-=Tn),r<-Math.PI?r+=Tn:r>Math.PI&&(r-=Tn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Yt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new $(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(lo.origin.copy(this.object.position),lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lo.direction))<DE?this.object.lookAt(this.target):(ed.setFromNormalAndCoplanarPoint(this.object.up,this.target),lo.intersectPlane(ed,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>uc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uc||this._lastTargetPosition.distanceToSquared(this.target)>uc?(this.dispatchEvent(jf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tn/60*this.autoRotateSpeed*e:Tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Yt.copy(r).sub(this.target);let s=Yt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function UE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function NE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function FE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(im),this.state=Pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function OE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Pt.DOLLY;break;case ki.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}break;case ki.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Ju)}function BE(n){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function zE(n){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(n.preventDefault(),this.dispatchEvent(Ju),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(im))}function VE(n){this.enabled!==!1&&this._handleKeyDown(n)}function HE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Pt.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Pt.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Ju)}function kE(n){switch(this._trackPointer(n),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Pt.NONE}}function GE(n){this.enabled!==!1&&n.preventDefault()}function WE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function XE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $E=[7252222,16758894,7332e3];class qE{renderer;scene;camera;controls;gears=[];actionLine=null;tangentLine=null;pitchPoint=null;contactMarker=null;interferenceGroup;raycaster=new Dx;container;resizeObs;constructor(e){this.container=e;const t=e.clientWidth||800,i=e.clientHeight||600;this.renderer=new LE({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i),e.appendChild(this.renderer.domElement),this.scene=new Ev,this.scene.background=new xt(1053464);const r=t/i,s=80;this.camera=new il(-s*r/2,s*r/2,s/2,-s/2,.1,2e3),this.camera.position.set(0,0,120),this.camera.lookAt(0,0,0),this.controls=new IE(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN};const a=new Cx(16777215,.65),o=new Rx(16777215,.9);o.position.set(40,60,100),this.scene.add(a,o),this.interferenceGroup=new ns,this.scene.add(this.interferenceGroup),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.animate()}makeCircleLine(e,t,i=.02,r=160){const s=[];for(let l=0;l<=r;l++){const c=l/r*Math.PI*2;s.push(new $(e*Math.cos(c),e*Math.sin(c),i))}const a=new pn().setFromPoints(s),o=new xo({color:t,transparent:!0,opacity:.8});return new Nv(a,o)}buildGearMesh(e,t){const i=new ns,r=new Bo,s=e.outline;r.moveTo(s[0].x,s[0].y);for(let h=1;h<s.length;h++)r.lineTo(s[h].x,s[h].y);r.closePath();const a=e.input.faceWidth,o=new Ku(r,{depth:a,bevelEnabled:!1,curveSegments:1});o.translate(0,0,-a/2),o.computeVertexNormals();const l=new bx({color:t,metalness:.35,roughness:.55}),c=new In(o,l);i.add(c);const u=new Uv(new Ov(o,12),new xo({color:2239027,transparent:!0,opacity:.5}));i.add(u);const f={pitch:this.makeCircleLine(e.pitchR,4891647,a/2+.02),base:this.makeCircleLine(e.baseR,2605194,a/2+.02),addendum:this.makeCircleLine(e.addendumR,16765286,a/2+.02),dedendum:this.makeCircleLine(e.dedendumR,16748451,a/2+.02)};return Object.values(f).forEach(h=>i.add(h)),{group:i,body:c,refs:f}}setTrain(e,t){for(const s of this.gears)this.scene.remove(s.group);if(this.gears=e.map((s,a)=>this.buildGearMesh(s,$E[a]??13421772)),this.gears.forEach((s,a)=>{s.group.position.x=t[a],this.scene.add(s.group)}),!e.length)return;const i=t[t.length-1]||0,r=Math.max(...e.map(s=>s.addendumR));this.targetCenter(i/2,r,i+r*2)}targetCenter(e,t,i){const r=(this.container.clientWidth||800)/(this.container.clientHeight||600),s=t*2+40,a=i+40,o=Math.max(s,a/r,80);this.camera.left=-o*r/2,this.camera.right=o*r/2,this.camera.top=o/2,this.camera.bottom=-o/2,this.camera.updateProjectionMatrix(),this.controls.target.set(e,0,0),this.camera.position.set(e,0,140)}setTrainAngles(e){e.forEach((t,i)=>{this.gears[i]&&(this.gears[i].group.rotation.z=t)})}setTrainOverlay(e,t){if(this.clearOverlay(),!this.gears.length)return;const i=e[t.selectedStage]??e[0];if(!i)return;const r=c=>t[c],s=c=>{c.geometry.computeBoundingBox();const u=c.geometry.boundingBox;return u?u.max.z-u.min.z:0},a=Math.max(...this.gears.map(c=>s(c.body)));for(const c of this.gears)c.refs.pitch.visible=!!r("showPitchCircle"),c.refs.base.visible=!!r("showBaseCircle"),c.refs.addendum.visible=!!r("showAddendumCircle"),c.refs.dedendum.visible=!!r("showDedendumCircle");const o=c=>({x:c.x+i.cxLeft,y:c.y});if(r("showActionLine")){const c=a/2+1,u=(h,p,v)=>{const b=new pn().setFromPoints([new $(h.x,h.y,c),new $(p.x,p.y,c)]);return new $u(b,new xo({color:v,transparent:!0,opacity:.9,depthTest:!1}))};this.tangentLine=u(o(i.info.tangentLine.p0),o(i.info.tangentLine.p1),8950691),this.tangentLine.renderOrder=50,this.actionLine=u(o(i.info.actionLine.p0),o(i.info.actionLine.p1),3794539),this.actionLine.renderOrder=51,this.scene.add(this.tangentLine,this.actionLine);const f=o(i.info.pitchPoint);this.pitchPoint=new In(new zo(.7,16,16),new Zs({color:16777215,depthTest:!1})),this.pitchPoint.position.set(f.x,f.y,c),this.pitchPoint.renderOrder=52,this.scene.add(this.pitchPoint)}if(r("showContact")){const c=i.info.alphaPrime,u=o(i.info.pitchPoint),f={x:u.x+t.contactS*Math.sin(c),y:u.y+t.contactS*Math.cos(c)},h=a/2+1.5;this.contactMarker=new In(new zo(1,20,20),new Zs({color:16726891,depthTest:!1})),this.contactMarker.position.set(f.x,f.y,h),this.contactMarker.renderOrder=60,this.scene.add(this.contactMarker)}const l=t.contactRegions[t.selectedStage];if(l)for(const c of l){if(c.length<3)continue;const u=new Bo;u.moveTo(c[0].x,c[0].y);for(let v=1;v<c.length;v++)u.lineTo(c[v].x,c[v].y);u.closePath();const f=new Zu(u),h=new Zs({color:16723285,transparent:!0,opacity:.5,side:di,depthTest:!1}),p=new In(f,h);p.position.z=a/2+2,p.renderOrder=999,this.interferenceGroup.add(p)}}clearOverlay(){for(this.actionLine&&(this.scene.remove(this.actionLine),this.actionLine.geometry.dispose(),this.actionLine=null),this.tangentLine&&(this.scene.remove(this.tangentLine),this.tangentLine.geometry.dispose(),this.tangentLine=null),this.pitchPoint&&(this.scene.remove(this.pitchPoint),this.pitchPoint=null),this.contactMarker&&(this.scene.remove(this.contactMarker),this.contactMarker=null);this.interferenceGroup.children.length;)this.interferenceGroup.children.pop().geometry?.dispose()}pick(e,t){return this.raycaster,null}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t);const i=e/t,s=(this.camera.top-this.camera.bottom)/1/2;this.camera.left=-s*i,this.camera.right=s*i,this.camera.updateProjectionMatrix()}animate=()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)};dispose(){this.resizeObs.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const Bn={mm:{id:"mm",label:"mm",factor:1,step:.1,decimals:3},cm:{id:"cm",label:"cm",factor:.1,step:.01,decimals:4},m:{id:"m",label:"m",factor:.001,step:.001,decimals:5},in:{id:"in",label:"in",factor:1/25.4,step:.01,decimals:4}};function gu(n,e){return n*Bn[e].factor}function td(n,e){return n/Bn[e].factor}function YE(n,e){return`${gu(n,e).toFixed(Bn[e].decimals)} ${Bn[e].label}`}const Vo=2,rm=[1],KE="spur-gear-lab",Ho="cases";function ZE(n){return{schemaVersion:2,id:n.id,name:n.name,createdAt:n.createdAt,updatedAt:n.updatedAt,note:n.note,kind:"pair",gears:[n.gear1,n.gear2],centerDistances:[n.centerDistance??null],unit:n.unit,outlines:n.outlines?{gears:[n.outlines.gear1,n.outlines.gear2]}:void 0}}let co=null;function JE(){return co||(co=new Promise((n,e)=>{const t=indexedDB.open(KE,1);t.onupgradeneeded=()=>{const i=t.result;i.objectStoreNames.contains(Ho)||i.createObjectStore(Ho,{keyPath:"id"}).createIndex("updatedAt","updatedAt")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}),co)}function Qu(n,e){return JE().then(t=>new Promise((i,r)=>{const s=t.transaction(Ho,n),a=e(s.objectStore(Ho));a.onsuccess=()=>i(a.result),a.onerror=()=>r(a.error)}))}async function nd(n){await Qu("readwrite",e=>e.put({...n,updatedAt:Date.now()}))}async function QE(n){await Qu("readwrite",e=>e.delete(n))}async function jE(){return(await Qu("readonly",e=>e.getAll())).map(sm).sort((e,t)=>t.updatedAt-e.updatedAt)}function sm(n){const e=n;if(e&&e.schemaVersion===Vo)return n;if(e&&e.schemaVersion===1)return ZE(n);throw new Error(`不支持的案例版本（得到 ${e?.schemaVersion}，支持 v${Vo} 及迁移 v${rm.join("/")}）`)}function eT(){return`case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function tT(n){return JSON.stringify(n,null,2)}function nT(n){const e=JSON.parse(n);if(!e||typeof e!="object")throw new Error("案例文件内容为空");const t=e.schemaVersion;if(t!==Vo&&!rm.includes(t))throw new Error(`不支持的案例版本（得到 ${t}，需要 v${Vo} 或旧 v1）`);const i=sm(e);if(!Array.isArray(i.gears)||i.gears.length<2)throw new Error("案例缺少齿轮参数");for(const s of i.gears)if(!(s.z>=4)||!(s.module>0)||!(s.alphaDeg>0))throw new Error("案例参数不合法（z≥4, m>0, α>0）");const r=i.kind==="idler"?3:2;if(i.gears.length!==r)throw new Error(`${i.kind==="idler"?"三轮":"双轮"}案例轮位数应为 ${r}`);if(i.centerDistances.length!==r-1)throw new Error("中心距段数与轮数不符");if(i.outlines&&i.outlines.gears.length!==r)throw new Error("轮廓数与轮数不符");return i}function iT(n){const e=new Blob([tT(n)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t;const r=(n.name||"gear-case").replace(/[^\w一-龥-]+/g,"_");i.download=`${r}.json`,i.click(),URL.revokeObjectURL(t)}function rT(n){const{g1:e,g2:t,centerDistance:i}=n,r=e.pitchR+t.pitchR,s=e.input.alpha,a=Math.min(1,Math.max(-1,r*Math.cos(s)/i)),o=Math.acos(a),l=e.baseR/Math.cos(o),c=t.baseR/Math.cos(o),u=i-r,f=nt=>Math.tan(nt)-nt,h=2*i*(f(o)-f(s)),p=h*Math.cos(o),v=i-e.addendumR-t.dedendumR,b=i-t.addendumR-e.dedendumR,g=Math.abs(e.basePitch-t.basePitch),m=g<1e-6,T=[],I=i<e.addendumR+t.addendumR,y=v<0||b<0;y&&T.push("中心距过小：齿顶圆越过对方齿根圆（顶隙为负），必然实体干涉"),i<e.pitchR+t.pitchR-1e-9&&T.push("中心距小于标准值：无侧隙空间，齿面相互挤压（仅教学演示干涉）"),Math.abs(u)>1e-9&&u>0&&T.push(`非标准中心距（+${u.toFixed(3)} mm）：有侧隙安装，啮合角增大，不再是无侧隙啮合`),m||T.push(`两轮基节不等（差 ${g.toFixed(4)} mm），不能正确啮合`);const A={x:l,y:0},w=Math.sin(o),O=Math.cos(o),M=-l*w,C={x:A.x+M*w,y:A.y+M*O},B=c*w,V={x:A.x+B*w,y:A.y+B*O},J=(nt,je)=>{const ce=A.x-nt,re=A.y,be=2*(ce*w+re*O),ke=ce*ce+re*re-je*je,Le=be*be-4*ke;if(Le<0)return[];const R=Math.sqrt(Le);return[(-be-R)/2,(-be+R)/2]},ie=J(0,e.addendumR),k=J(i,t.addendumR),ee=nt=>{const je=nt.filter(ce=>ce<=1e-9);return je.length?je.reduce((ce,re)=>Math.abs(ce)<Math.abs(re)?ce:re):null},he=nt=>{const je=nt.filter(ce=>ce>=-1e-9);return je.length?je.reduce((ce,re)=>Math.abs(ce)<Math.abs(re)?ce:re):null},te=ee(k),de=he(ie),oe=te!=null?Math.max(te,M):M,_e=de!=null?Math.min(de,B):B,me={x:A.x+oe*w,y:A.y+oe*O},De={x:A.x+_e*w,y:A.y+_e*O},Be=Math.max(0,_e-oe),rt=Be/e.basePitch;return{a0:r,a:i,alphaPrime:o,pitchR1:l,pitchR2:c,deltaA:u,backlashTangential:Math.max(0,h),backlashNormal:Math.max(0,p),clearance12:v,clearance21:b,basePitchMatch:m,basePitchDiff:g,addendumOverlap:I,actionLine:{p0:me,p1:De},tangentLine:{p0:C,p1:V},pitchPoint:A,pathOfContact:Be,contactRatio:rt,ok:m&&!y,warnings:T}}function am(n,e,t){const i=n.alphaPrime,r=Math.sin(i),s=Math.cos(i),a=Math.tan(i)+t/e.baseR,o=a-Math.atan(a),l=Math.PI/2+e.beta-o;return Math.atan2(t*s,n.pitchR1+t*r)-l}function om(n,e,t){const i=n.alphaPrime,r=Math.sin(i),s=Math.cos(i),a=Math.tan(i)-t/e.baseR,o=a-Math.atan(a),l=Math.PI/2+e.beta-o;return Math.atan2(t*s,-n.pitchR2+t*r)-l}function Mo(n,e,t,i){const r=n.alphaPrime,s=Math.tan(r)+i/e.baseR,a=Math.tan(r)-i/t.baseR,o=am(n,e,i),l=om(n,t,i);return{phi1:o,phi2:l,t1:s,t2:a}}function lm(n,e,t){let i=0;for(let r=0;r<30;r++){const s=am(n,e,i)-t;if(i-=s/(1/e.baseR),Math.abs(s)<1e-12)break}return i}function sT(n,e,t){let i=0;for(let r=0;r<30;r++){const s=om(n,e,i)-t;if(i-=s/(-1/e.baseR),Math.abs(s)<1e-12)break}return i}const aT=1e-6;function oT(n,e){return Math.abs(n.input.module-e.input.module)>1e-9?`模数不匹配：m=${n.input.module} ≠ m=${e.input.module}`:Math.abs(n.input.alpha-e.input.alpha)>1e-9?`压力角不匹配：α=${n.input.alpha*180/Math.PI}° ≠ α=${e.input.alpha*180/Math.PI}°`:Math.abs(n.basePitch-e.basePitch)>aT?`基节不匹配：pb=${n.basePitch.toFixed(4)} ≠ ${e.basePitch.toFixed(4)}`:null}function lT(n){const e=[],t=n.kind==="idler"?3:2;n.gears.length!==t&&e.push(`${n.kind==="idler"?"三轮":"双轮"}模式需要 ${t} 个轮位参数`),n.centerDistances.length!==t-1&&e.push("中心距配置段数与轮数不符");const i=[];if(n.gears.forEach((f,h)=>{const p=m0(f);if(p.length){e.push(`轮${h+1}：${p.join("；")}`);return}i.push(p0({z:f.z,module:f.module,alpha:f.alpha,faceWidth:f.faceWidth}))}),i.length!==t)return{kind:n.kind,gears:[],centers:[],stages:[],ok:!1,errors:e,warnings:[],total:null};for(let f=0;f<t-1;f++){const h=oT(i[f],i[f+1]);h&&e.push(`第 ${f+1} 段（轮${f+1}–轮${f+2}）${h}，不能构成啮合`)}if(e.length)return{kind:n.kind,gears:[],centers:[],stages:[],ok:!1,errors:e,warnings:[],total:null};const r=[0],s=[];for(let f=0;f<t-1;f++){const h=i[f].pitchR+i[f+1].pitchR,p=n.centerDistances[f]==null?h:n.centerDistances[f];if(!(p>0)||!Number.isFinite(p)){e.push(`第 ${f+1} 段中心距非法`);continue}s.push({info:rT({g1:i[f],g2:i[f+1],centerDistance:p}),a:p}),r.push(r[f]+p)}if(e.length)return{kind:n.kind,gears:[],centers:[],stages:[],ok:!1,errors:e,warnings:[],total:null};const a=[],o=s.map((f,h)=>(a.push(...f.info.warnings.map(p=>`第 ${h+1} 段：${p}`)),{index:h,info:f.info,leftIndex:h,rightIndex:h+1,cxLeft:r[h],cxRight:r[h]+f.a,s:0})),l=t-1,c=(l%2===0?1:-1)*i[0].input.z/i[t-1].input.z,u=o.every(f=>f.info.ok);return{kind:n.kind,gears:i,centers:r,stages:o,ok:u,errors:[],warnings:a,total:{ratio:c,externalMeshCount:l,sameDirection:l%2===0,firstZ:i[0].input.z,lastZ:i[t-1].input.z}}}function hc(n,e){const t=[e],i=[],r=[];for(const s of n.stages){const a=n.gears[s.leftIndex],o=n.gears[s.rightIndex],l=t[s.leftIndex],c=lm(s.info,a,l);i.push(c);const{phi2:u}=Mo(s.info,a,o,c);t[s.rightIndex]=u,r.push({x:s.cxLeft+s.info.pitchPoint.x+c*Math.sin(s.info.alphaPrime),y:s.info.pitchPoint.y+c*Math.cos(s.info.alphaPrime)})}return{angles:t,s:i,contacts:r}}function cT(n,e,t){const i=n.gears.length,r=new Array(i).fill(0),s=new Array(i-1).fill(0),a=n.stages[e],o=n.gears[a.leftIndex],l=n.gears[a.rightIndex],c=Mo(a.info,o,l,t);r[a.leftIndex]=c.phi1,r[a.rightIndex]=c.phi2,s[e]=t;for(let f=e+1;f<n.stages.length;f++){const h=n.stages[f],p=lm(h.info,n.gears[h.leftIndex],r[h.leftIndex]);s[f]=p,r[h.rightIndex]=Mo(h.info,n.gears[h.leftIndex],n.gears[h.rightIndex],p).phi2}for(let f=e-1;f>=0;f--){const h=n.stages[f],p=sT(h.info,n.gears[h.rightIndex],r[h.rightIndex]);s[f]=p,r[h.leftIndex]=Mo(h.info,n.gears[h.leftIndex],n.gears[h.rightIndex],p).phi1}const u=n.stages.map((f,h)=>{const p=f.info.alphaPrime;return{x:f.cxLeft+f.info.pitchPoint.x+s[h]*Math.sin(p),y:f.info.pitchPoint.y+s[h]*Math.cos(p)}});return{angles:r,s,contacts:u}}function cm(n){const e=n.info,t=Math.sin(e.alphaPrime),i=Math.cos(e.alphaPrime),r=(e.actionLine.p0.x-e.pitchPoint.x)*t+(e.actionLine.p0.y-e.pitchPoint.y)*i,s=(e.actionLine.p1.x-e.pitchPoint.x)*t+(e.actionLine.p1.y-e.pitchPoint.y)*i;return[r,s]}function uT(n,e){const[t,i]=cm(n);return i<=t?0:e<t?i-(t-e)%(i-t):e>i?t+(e-i)%(i-t):e}const hT={class:"app"},fT={class:"panel"},dT={class:"units"},pT={class:"units"},mT=["onClick"],gT={class:"gearhead"},_T={class:"two"},vT=["onUpdate:modelValue"],xT=["onUpdate:modelValue"],ST={class:"two"},MT=["onUpdate:modelValue","step"],yT=["onUpdate:modelValue","step"],bT={key:0,class:"err"},ET={key:0,class:"err chainerr"},TT={class:"row"},AT=["onUpdate:modelValue"],wT={key:0},RT=["onUpdate:modelValue","step"],CT={class:"row"},PT=["disabled"],LT=["disabled"],DT={key:0,class:"row"},IT=["onClick"],UT=["disabled","min","max"],NT={class:"row"},FT=["disabled"],OT=["disabled"],BT={class:"row"},zT={class:"row"},VT={class:"row"},HT={class:"row"},kT={class:"row"},GT={class:"row"},WT={class:"samples"},XT={class:"viewport"},$T={class:"readouts"},qT={key:0,class:"dim-grid"},YT={class:"mesh-report"},KT={key:0},ZT={key:1},JT={style:{"margin-top":"8px"}},QT={key:3,class:"warns"},jT={key:1,class:"banned"},eA={class:"panel right"},tA={class:"row"},nA=["disabled"],iA=["disabled"],rA={class:"row"},sA=["disabled"],aA=["disabled"],oA={class:"wide filebtn"},lA=["disabled"],cA={class:"caselist"},uA={class:"ci"},hA={class:"ca"},fA=["onClick"],dA=["onClick"],pA={key:0,class:"empty"},mA=Og({__name:"App",setup(n){const e=Rn("mm"),t=Rn("pair"),i=ar([{z:20,module:2,alphaDeg:20,faceWidth:10},{z:40,module:2,alphaDeg:20,faceWidth:10},{z:30,module:2,alphaDeg:20,faceWidth:10}]),r=ar([!0,!0]),s=ar([60,70]),a=Rn([[],[],[]]),o=Rn([]),l=vl(null);let c=null,u=null,f=!1;function h(){return t.value==="idler"?3:2}function p(){const K=h(),U=i.slice(0,K).map(P=>({z:Math.round(P.z),module:P.module,alpha:P.alphaDeg*La,alphaDeg:P.alphaDeg,faceWidth:P.faceWidth})),_=[];for(let P=0;P<K-1;P++)r[P]?_.push(null):_.push(s[P]);const d=lT({kind:t.value,gears:U,centerDistances:_});if(a.value=[i[0]?v(0):[],i[1]?v(1):[],K===3?v(2):[]],d.ok){l.value=d,o.value=[];for(let P=0;P<d.stages.length;P++)r[P]&&(s[P]=d.stages[P].info.a0)}else{l.value=null,o.value=d.errors,oe?.setTrain([],[]);return}oe?.setTrain(d.gears,d.centers),C.value=Math.min(C.value,d.stages.length-1),A.value=0,M.value=hc(d,0),B.value=M.value.s[C.value]??0,J.value=d.stages.map(()=>null)}function v(K){const U=i[K],_=[];return(!Number.isFinite(U.z)||U.z<4||Math.abs(U.z-Math.round(U.z))>1e-9)&&_.push("齿数须为 ≥4 的整数"),(!(U.module>0)||!Number.isFinite(U.module))&&_.push("模数须 > 0"),(!(U.alphaDeg>0)||U.alphaDeg>=90)&&_.push("压力角须在 (0°,90°)"),U.faceWidth>0||_.push("齿宽须 > 0"),_}function b(K,U){return Ar({get:()=>gu(i[K][U],e.value),set:_=>i[K][U]=td(_,e.value)})}function g(K){return Ar({get:()=>gu(s[K],e.value),set:U=>s[K]=td(U,e.value)})}const m=[b(0,"module"),b(1,"module"),b(2,"module")],T=[b(0,"faceWidth"),b(1,"faceWidth"),b(2,"faceWidth")],I=[g(0),g(1)],y=Rn(!0),A=Rn(0),w=Rn(.25);let O=0;const M=vl({angles:[0,0,0],s:[0,0],contacts:[]}),C=Rn(0),B=Rn(0),V=ar({showPitchCircle:!0,showBaseCircle:!0,showAddendumCircle:!1,showDedendumCircle:!1,showActionLine:!0,showContact:!0}),J=vl([null,null]),ie=ar([!1,!1]);let k=0;function ee(K){return c&&c[K]?c[K]:l.value.gears[K].outline}async function he(K){const U=l.value;if(!U||y.value)return;const _=U.stages[K],d=M.value,P=[Vh(ee(_.leftIndex),U.centers[_.leftIndex],0,d.angles[_.leftIndex])],Y=[Vh(ee(_.rightIndex),U.centers[_.rightIndex],0,d.angles[_.rightIndex])],j=++k;ie[K]=!0;try{const Ae=await E0(P,Y);if(j!==k)return;const we=[...J.value];we[K]={stageIndex:K,angles:[...d.angles],regions:Ae.regions,area:Ae.area},J.value=we}finally{j===k&&(ie[K]=!1)}}async function te(){if(l.value)for(let K=0;K<l.value.stages.length;K++)await he(K)}const de=Rn();let oe=null;const _e=Ar(()=>{const K=l.value;return!K||!K.stages[C.value]?0:uT(K.stages[C.value],M.value.s[C.value]??0)}),me=Ar(()=>{const K=l.value?.stages[C.value];if(!K)return[-30,30];const[U,_]=cm(K);return[Math.floor(U*10)/10,Math.ceil(_*10)/10]});function De(){const K=l.value;if(!oe||!K)return;const U={...V,selectedStage:C.value,contactS:_e.value,contactRegions:K.stages.map((_,d)=>J.value[d]?.regions??[])};oe.setTrainOverlay(K.stages,U)}_c(()=>{p(),oe=new qE(de.value),l.value&&oe.setTrain(l.value.gears,l.value.centers);const K=U=>{const _=Math.min(.05,(U-O)/1e3||0);O=U;const d=l.value;if(y.value&&d){A.value+=w.value*_;const P=2*Math.PI/d.gears[0].input.z;A.value=(A.value%P+P)%P,M.value=hc(d,A.value),B.value=_e.value}d&&oe&&(oe.setTrainAngles(M.value.angles),B.value=_e.value,De()),requestAnimationFrame(K)};requestAnimationFrame(K)}),ss(()=>[t.value,i[0].z,i[0].module,i[0].alphaDeg,i[0].faceWidth,i[1].z,i[1].module,i[1].alphaDeg,i[1].faceWidth,i[2].z,i[2].module,i[2].alphaDeg,i[2].faceWidth,r[0],r[1],s[0],s[1]],()=>{f||(c=null,u=null,p())}),ss(V,De),ss(C,()=>B.value=_e.value);function Be(){y.value=!1}function rt(){y.value=!0}function nt(){const K=l.value;if(y.value||!K)return;const U=cT(K,C.value,B.value);M.value=U,A.value=U.angles[0],J.value=K.stages.map(()=>null)}const je=Rn([]),ce=Rn("未命名案例"),re=Rn("");async function be(){je.value=await jE()}_c(be);function ke(K){const U=l.value,_=h();return{schemaVersion:2,id:u??eT(),name:ce.value,createdAt:Date.now(),updatedAt:Date.now(),note:re.value,kind:t.value,gears:i.slice(0,_).map(P=>({z:Math.round(P.z),module:P.module,alpha:P.alphaDeg*La,alphaDeg:P.alphaDeg,faceWidth:P.faceWidth})),centerDistances:Array.from({length:_-1},(P,Y)=>r[Y]?null:s[Y]),unit:e.value,pose:U?M.value.angles.slice(0,_):void 0,selectedStage:C.value,contactS:U?M.value.s.slice(0,_-1):void 0,outlines:K&&U?{gears:U.gears.map((P,Y)=>ee(Y)),interference:J.value.filter(Boolean)}:void 0}}async function Le(K){if(!l.value)return;const U=ke(K);await nd(U),u=U.id,await be()}function R(K){l.value&&iT(ke(K))}function F(K){f=!0,t.value=K.kind;const U=K.kind==="idler"?3:2;K.gears.forEach((d,P)=>{i[P]={z:d.z,module:d.module,alphaDeg:d.alphaDeg,faceWidth:d.faceWidth}});for(let d=0;d<U-1;d++){const P=K.centerDistances[d];r[d]=P==null,P!=null&&(s[d]=P)}e.value=K.unit||"mm",ce.value=K.name,re.value=K.note,u=K.id,p();const _=l.value;if(_){C.value=Math.min(K.selectedStage??0,_.stages.length-1);const d=K.pose&&K.pose.length===U?K.pose[0]:0;A.value=d,M.value=hc(_,d),B.value=_e.value,c=K.outlines?K.outlines.gears.map(P=>P.map(Y=>({...Y}))):null,J.value=_.stages.map(P=>{const Y=K.outlines?.interference?.find(j=>j.stageIndex===P.index);return Y?{...Y,angles:[...Y.angles],regions:Y.regions.map(j=>j.map(Ae=>({...Ae})))}:null}),y.value=!1}f=!1}async function N(K){F(K)}async function G(K){await QE(K),u===K&&(u=null),await be()}function W(K){const U=K.target,_=U.files?.[0];if(!_)return;const d=new FileReader;d.onload=async()=>{try{const P=nT(String(d.result));await nd(P),F(P),await be()}catch(P){alert("导入失败："+P.message)}},d.readAsText(_),U.value=""}function H(){f=!0,t.value="idler",i[2]={z:30,module:i[0].module,alphaDeg:i[0].alphaDeg,faceWidth:i[0].faceWidth},r[0]=!0,r[1]=!0,C.value=0,J.value=[null,null],c=null,u=null,ce.value=ce.value+"（三轮惰轮链）",p(),f=!1}const Q=Ar(()=>t.value==="idler"?["主动轮 1","惰轮 2","从动轮 3"]:["齿轮 1（z₁）","齿轮 2（z₂）"]),ue=Ar(()=>l.value?.stages[C.value]??null);function se(K){return YE(K,e.value)}function ne(K,U,_=2,d=20){t.value="pair",i[0]={z:K,module:_,alphaDeg:d,faceWidth:10},i[1]={z:U,module:_,alphaDeg:d,faceWidth:10},r[0]=!0}function Te(K,U,_,d=2,P=20){t.value="idler",i[0]={z:K,module:d,alphaDeg:P,faceWidth:10},i[1]={z:U,module:d,alphaDeg:P,faceWidth:10},i[2]={z:_,module:d,alphaDeg:P,faceWidth:10},r[0]=!0,r[1]=!0}function L(K){t.value="idler",Te(20,30,40,2,20),K==="module"?i[1].module=2.1:i[2].alphaDeg=14.5}return(K,U)=>(at(),lt("div",hT,[U[66]||(U[66]=pe("header",null,[pe("h1",null,"直齿圆柱齿轮传动链实验室"),pe("div",{class:"sub"},"外啮合 · 无变位 · 理想刚性 · 渐开线齿廓 · 可配置双轮 / 三轮惰轮链（教学模型）")],-1)),pe("main",null,[pe("aside",fT,[pe("section",null,[U[24]||(U[24]=pe("h2",null,"传动链形式",-1)),pe("div",dT,[pe("button",{class:On({active:t.value==="pair"}),onClick:U[0]||(U[0]=_=>t.value="pair")},"双轮（一对外啮合）",2),pe("button",{class:On({active:t.value==="idler"}),onClick:U[1]||(U[1]=_=>t.value="idler")},"三轮（惰轮链）",2)])]),pe("section",null,[U[25]||(U[25]=pe("h2",null,"显示单位（不改变实际尺寸）",-1)),pe("div",pT,[(at(!0),lt(Nt,null,rn(Object.keys(Kn(Bn)),_=>(at(),lt("button",{key:_,class:On({active:e.value===_}),onClick:d=>e.value=_},Ze(Kn(Bn)[_].label),11,mT))),128))])]),pe("section",null,[U[29]||(U[29]=pe("h2",null,"各轮参数（模数/压力角逐段必须一致）",-1)),(at(!0),lt(Nt,null,rn(h(),_=>(at(),lt("div",{key:_,class:"gearblock"},[pe("div",gT,Ze(Q.value[_-1]),1),pe("div",_T,[pe("label",null,[U[26]||(U[26]=Tt("齿数 z ",-1)),nn(pe("input",{type:"number","onUpdate:modelValue":d=>i[_-1].z=d,min:"4",step:"1"},null,8,vT),[[Ri,i[_-1].z,void 0,{number:!0}]])]),pe("label",null,[U[27]||(U[27]=Tt("压力角 α（度） ",-1)),nn(pe("input",{type:"number","onUpdate:modelValue":d=>i[_-1].alphaDeg=d,min:"1",max:"45",step:"0.5"},null,8,xT),[[Ri,i[_-1].alphaDeg,void 0,{number:!0}]])])]),pe("div",ST,[pe("label",null,[Tt("模数 m（"+Ze(Kn(Bn)[e.value].label)+"） ",1),nn(pe("input",{type:"number","onUpdate:modelValue":d=>m[_-1]=d,step:Kn(Bn)[e.value].step},null,8,MT),[[Ri,m[_-1],void 0,{number:!0}]])]),pe("label",null,[Tt("齿宽 b（"+Ze(Kn(Bn)[e.value].label)+"） ",1),nn(pe("input",{type:"number","onUpdate:modelValue":d=>T[_-1]=d,step:Kn(Bn)[e.value].step},null,8,yT),[[Ri,T[_-1],void 0,{number:!0}]])])]),a.value[_-1].length?(at(),lt("div",bT,Ze(a.value[_-1].join("；")),1)):ri("",!0)]))),128)),o.value.length?(at(),lt("div",ET,[(at(!0),lt(Nt,null,rn(o.value,(_,d)=>(at(),lt("div",{key:d},"⛔ "+Ze(_),1))),128)),U[28]||(U[28]=pe("div",null,"已拒绝形成传动链（不会用总速比硬套末轮产生半成品）。",-1))])):ri("",!0)]),pe("section",null,[U[30]||(U[30]=pe("h2",null,"各段中心距",-1)),(at(!0),lt(Nt,null,rn(h()-1,_=>(at(),lt("div",{key:"c"+_,class:"stageblock"},[pe("label",TT,[nn(pe("input",{type:"checkbox","onUpdate:modelValue":d=>r[_-1]=d},null,8,AT),[[xr,r[_-1]]]),Tt(" 第 "+Ze(_)+" 段使用标准中心距 a₀ = m(z"+Ze(_)+"+z"+Ze(_+1)+")/2 ",1)]),r[_-1]?ri("",!0):(at(),lt("label",wT,[Tt("实际中心距 a（"+Ze(Kn(Bn)[e.value].label)+"） ",1),nn(pe("input",{type:"number","onUpdate:modelValue":d=>I[_-1]=d,step:Kn(Bn)[e.value].step},null,8,RT),[[Ri,I[_-1],void 0,{number:!0}]])]))]))),128))]),pe("section",null,[U[32]||(U[32]=pe("h2",null,"运动 / 检查",-1)),pe("div",CT,[pe("button",{onClick:Be,disabled:!y.value},"暂停",8,PT),pe("button",{onClick:rt,disabled:y.value||!l.value},"继续",8,LT)]),pe("label",null,[U[31]||(U[31]=Tt("首轮角速度（rad/s） ",-1)),nn(pe("input",{type:"range","onUpdate:modelValue":U[2]||(U[2]=_=>w.value=_),min:"0",max:"1.5",step:"0.01"},null,512),[[Ri,w.value,void 0,{number:!0}]])]),l.value?(at(),lt("div",DT,[(at(!0),lt(Nt,null,rn(l.value.stages,(_,d)=>(at(),lt("button",{key:d,class:On({active:C.value===d}),onClick:P=>C.value=d}," 检查第 "+Ze(d+1)+" 段（轮"+Ze(_.leftIndex+1)+"–轮"+Ze(_.rightIndex+1)+"） ",11,IT))),128))])):ri("",!0),pe("label",null,[Tt("第 "+Ze(C.value+1)+" 段接触点 s（mm，暂停可拖动） ",1),nn(pe("input",{type:"range",disabled:y.value||!l.value,"onUpdate:modelValue":U[3]||(U[3]=_=>B.value=_),min:me.value[0],max:me.value[1],step:"0.05",onInput:nt},null,40,UT),[[Ri,B.value,void 0,{number:!0}]])]),pe("div",NT,[pe("button",{onClick:U[4]||(U[4]=_=>he(C.value)),disabled:y.value||!l.value||ie[C.value]},Ze(ie[C.value]?"Clipper 求交中…":`检查第 ${C.value+1} 段局部干涉`),9,FT),pe("button",{onClick:te,disabled:y.value||!l.value},"两段都查",8,OT)]),(at(!0),lt(Nt,null,rn(J.value,(_,d)=>nn((at(),lt("div",{key:d,class:"report"},[Tt(" 第 "+Ze(d+1)+" 段重叠面积 = "+Ze(_?_.area.toExponential(3):"")+" mm² ",1),pe("b",{class:On(_&&_.area>1e-6?"bad":"good")},Ze(_?_.area>1e-6?"存在实体干涉 ❗":"当前帧无干涉 ✅":""),3)])),[[H_,_]])),128))]),pe("section",null,[U[39]||(U[39]=pe("h2",null,"显示选项",-1)),pe("label",BT,[nn(pe("input",{type:"checkbox","onUpdate:modelValue":U[5]||(U[5]=_=>V.showPitchCircle=_)},null,512),[[xr,V.showPitchCircle]]),U[33]||(U[33]=Tt(" 节圆/分度圆",-1))]),pe("label",zT,[nn(pe("input",{type:"checkbox","onUpdate:modelValue":U[6]||(U[6]=_=>V.showBaseCircle=_)},null,512),[[xr,V.showBaseCircle]]),U[34]||(U[34]=Tt(" 基圆",-1))]),pe("label",VT,[nn(pe("input",{type:"checkbox","onUpdate:modelValue":U[7]||(U[7]=_=>V.showAddendumCircle=_)},null,512),[[xr,V.showAddendumCircle]]),U[35]||(U[35]=Tt(" 齿顶圆",-1))]),pe("label",HT,[nn(pe("input",{type:"checkbox","onUpdate:modelValue":U[8]||(U[8]=_=>V.showDedendumCircle=_)},null,512),[[xr,V.showDedendumCircle]]),U[36]||(U[36]=Tt(" 齿根圆",-1))]),pe("label",kT,[nn(pe("input",{type:"checkbox","onUpdate:modelValue":U[9]||(U[9]=_=>V.showActionLine=_)},null,512),[[xr,V.showActionLine]]),U[37]||(U[37]=Tt(" 啮合线（理论/实际）",-1))]),pe("label",GT,[nn(pe("input",{type:"checkbox","onUpdate:modelValue":U[10]||(U[10]=_=>V.showContact=_)},null,512),[[xr,V.showContact]]),U[38]||(U[38]=Tt(" 接触点",-1))])]),pe("section",null,[U[40]||(U[40]=pe("h2",null,"核对样本",-1)),pe("div",WT,[pe("button",{onClick:U[11]||(U[11]=_=>ne(20,40))},"双轮 20/40"),pe("button",{onClick:U[12]||(U[12]=_=>ne(17,17))},"双轮 17/17"),pe("button",{onClick:U[13]||(U[13]=_=>Te(20,30,40))},"三轮 20/30/40"),pe("button",{onClick:U[14]||(U[14]=_=>Te(18,24,36))},"三轮 18/24/36"),pe("button",{onClick:U[15]||(U[15]=_=>Te(12,30,28,3))},"三轮少齿 12/30/28"),pe("button",{class:"del",onClick:U[16]||(U[16]=_=>L("module"))},"模数不匹配演示"),pe("button",{class:"del",onClick:U[17]||(U[17]=_=>L("alpha"))},"压力角不匹配演示")])])]),pe("section",XT,[pe("div",{ref_key:"host",ref:de,class:"canvas-host"},null,512),pe("div",$T,[l.value?(at(),lt("div",qT,[pe("table",null,[pe("thead",null,[pe("tr",null,[U[41]||(U[41]=pe("th",null,null,-1)),(at(!0),lt(Nt,null,rn(l.value.gears,(_,d)=>(at(),lt("th",{key:d},Ze(Q.value[d])+"（z="+Ze(_.input.z)+"）",1))),128))])]),pe("tbody",null,[pe("tr",null,[U[42]||(U[42]=pe("td",null,"分度圆直径 d",-1)),(at(!0),lt(Nt,null,rn(l.value.gears,(_,d)=>(at(),lt("td",{key:d},Ze(se(_.pitchR*2)),1))),128))]),pe("tr",null,[U[43]||(U[43]=pe("td",null,"基圆直径 d_b",-1)),(at(!0),lt(Nt,null,rn(l.value.gears,(_,d)=>(at(),lt("td",{key:d},Ze(se(_.baseR*2)),1))),128))]),pe("tr",null,[U[44]||(U[44]=pe("td",null,"齿顶圆 d_a",-1)),(at(!0),lt(Nt,null,rn(l.value.gears,(_,d)=>(at(),lt("td",{key:d},Ze(se(_.addendumR*2)),1))),128))]),pe("tr",null,[U[45]||(U[45]=pe("td",null,"齿根圆 d_f",-1)),(at(!0),lt(Nt,null,rn(l.value.gears,(_,d)=>(at(),lt("td",{key:d},Ze(se(_.dedendumR*2)),1))),128))]),pe("tr",null,[U[46]||(U[46]=pe("td",null,"基节 p_b = πm·cosα",-1)),(at(!0),lt(Nt,null,rn(l.value.gears,(_,d)=>(at(),lt("td",{key:d},Ze(se(_.basePitch)),1))),128))]),pe("tr",null,[U[47]||(U[47]=pe("td",null,"齿顶压力角 α_a",-1)),(at(!0),lt(Nt,null,rn(l.value.gears,(_,d)=>(at(),lt("td",{key:d},Ze((_.alphaTip/Kn(La)).toFixed(2))+"°",1))),128))]),pe("tr",null,[U[48]||(U[48]=pe("td",null,"根切风险",-1)),(at(!0),lt(Nt,null,rn(l.value.gears,(_,d)=>(at(),lt("td",{key:d,class:On(_.undercut?"bad":"good")},Ze(_.undercut?`z<${_.zMinValue.toFixed(1)} 根切 ❗`:"安全"),3))),128))])])]),pe("div",YT,[U[61]||(U[61]=pe("h3",null,"传动链总关系（由两段真实啮合决定，不是直接套总速比）",-1)),l.value.total?(at(),lt("div",KT,[U[49]||(U[49]=Tt(" 外啮合次数：",-1)),pe("b",null,Ze(l.value.total.externalMeshCount),1),U[50]||(U[50]=Tt("； 首末轮转向：",-1)),pe("b",{class:On(l.value.total.sameDirection?"good":"bad")},Ze(l.value.total.sameDirection?"同向 ✅（惰轮使方向反转两次）":"反向 ✅"),3)])):ri("",!0),l.value.total?(at(),lt("div",ZT,[U[51]||(U[51]=Tt(" 总速比 ω末/ω首 = (−1)^n·z首/z末 = ",-1)),pe("b",null,Ze(l.value.total.ratio.toFixed(5)),1),Tt(" （即 "+Ze((l.value.total.ratio*l.value.total.lastZ/l.value.total.firstZ).toFixed(3))+"·"+Ze(l.value.total.firstZ)+"/"+Ze(l.value.total.lastZ)+"） ",1)])):ri("",!0),(at(!0),lt(Nt,null,rn(l.value.stages,(_,d)=>(at(),lt("div",{key:d,class:"stageline"}," 第 "+Ze(d+1)+" 段速比 ω"+Ze(_.rightIndex+1)+"/ω"+Ze(_.leftIndex+1)+" = −"+Ze(l.value.gears[_.leftIndex].input.z)+"/"+Ze(l.value.gears[_.rightIndex].input.z)+" = "+Ze((-l.value.gears[_.leftIndex].input.z/l.value.gears[_.rightIndex].input.z).toFixed(4))+"（反向） ",1))),128)),ue.value?(at(),lt(Nt,{key:2},[pe("h3",JT,"第 "+Ze(C.value+1)+" 段啮合检查",1),pe("div",null,[U[52]||(U[52]=Tt("标准中心距 a₀：",-1)),pe("b",null,Ze(se(ue.value.info.a0)),1)]),pe("div",null,[U[53]||(U[53]=Tt("实际中心距 a：",-1)),pe("b",null,Ze(se(ue.value.info.a)),1),Tt("（Δa = "+Ze(se(ue.value.info.deltaA))+"）",1)]),pe("div",null,[U[54]||(U[54]=Tt("啮合角 α′：",-1)),pe("b",null,Ze((ue.value.info.alphaPrime/Kn(La)).toFixed(3))+"°",1)]),pe("div",null,[U[55]||(U[55]=Tt("节圆半径 r′：",-1)),pe("b",null,Ze(se(ue.value.info.pitchR1))+" / "+Ze(se(ue.value.info.pitchR2)),1)]),pe("div",null,[U[56]||(U[56]=Tt("实际啮合线长度 g_α：",-1)),pe("b",null,Ze(se(ue.value.info.pathOfContact)),1)]),pe("div",null,[U[57]||(U[57]=Tt("重合度 ε_α：",-1)),pe("b",{class:On(ue.value.info.contactRatio<1?"bad":"good")},Ze(ue.value.info.contactRatio.toFixed(3)),3)]),pe("div",null,[U[58]||(U[58]=Tt("圆周/法向侧隙：",-1)),pe("b",null,Ze(se(ue.value.info.backlashTangential))+" / "+Ze(se(ue.value.info.backlashNormal)),1)]),pe("div",null,[U[59]||(U[59]=Tt("顶隙 c：",-1)),pe("b",null,Ze(se(ue.value.info.clearance12)),1)]),pe("div",null,[U[60]||(U[60]=Tt("基节一致：",-1)),pe("b",{class:On(ue.value.info.basePitchMatch?"good":"bad")},Ze(ue.value.info.basePitchMatch?"是 ✅":"否 ❌"),3)])],64)):ri("",!0),l.value.warnings.length?(at(),lt("ul",QT,[(at(!0),lt(Nt,null,rn(l.value.warnings,(_,d)=>(at(),lt("li",{key:d},"⚠️ "+Ze(_),1))),128))])):ri("",!0),U[62]||(U[62]=pe("div",{class:"formula"}," 每段独立满足：基节相等 + 节点共法线 + 同一条渐开线滚动（r_b左·Δφ左 = −r_b右·Δφ右）。 姿态沿 φ1→s1→φ2→s2→φ3 严格传播；惰轮只改方向、不入总速比幅值。 ",-1))])])):o.value.length?(at(),lt("div",jT," 传动链未形成："+Ze(o.value.join("；")),1)):ri("",!0)])]),pe("aside",eA,[pe("section",null,[U[64]||(U[64]=pe("h2",null,"案例（IndexedDB，schema v2）",-1)),nn(pe("input",{"onUpdate:modelValue":U[18]||(U[18]=_=>ce.value=_),placeholder:"案例名称"},null,512),[[Ri,ce.value]]),nn(pe("textarea",{"onUpdate:modelValue":U[19]||(U[19]=_=>re.value=_),placeholder:"备注（可选）",rows:"2"},null,512),[[Ri,re.value]]),pe("div",tA,[pe("button",{onClick:U[20]||(U[20]=_=>Le(!0)),disabled:!l.value},"保存（含轮廓/检查）",8,nA),pe("button",{onClick:U[21]||(U[21]=_=>Le(!1)),disabled:!l.value},"仅参数",8,iA)]),pe("div",rA,[pe("button",{onClick:U[22]||(U[22]=_=>R(!0)),disabled:!l.value},"导出 JSON+轮廓",8,sA),pe("button",{onClick:U[23]||(U[23]=_=>R(!1)),disabled:!l.value},"导出参数",8,aA)]),pe("label",oA,[U[63]||(U[63]=Tt("导入 JSON（v2 / 旧 v1 自动迁移） ",-1)),pe("input",{type:"file",accept:"application/json,.json",onChange:W,hidden:""},null,32)]),pe("button",{class:"wide",onClick:H,disabled:!l.value||t.value==="idler"},"把当前双轮另存为三轮惰轮链",8,lA)]),pe("section",null,[U[65]||(U[65]=pe("h2",null,"已存案例",-1)),pe("ul",cA,[(at(!0),lt(Nt,null,rn(je.value,_=>(at(),lt("li",{key:_.id},[pe("div",uA,[pe("b",null,Ze(_.name),1),pe("span",null,Ze(_.kind==="idler"?"三轮":"双轮")+" · "+Ze(_.gears.map(d=>d.z).join("/"))+" · m="+Ze(_.gears[0].module)+" · α="+Ze(_.gears[0].alphaDeg)+"°"+Ze(_.outlines?" · 含轮廓":""),1)]),pe("div",hA,[pe("button",{onClick:d=>N(_)},"载入",8,fA),pe("button",{class:"del",onClick:d=>G(_.id)},"删",8,dA)])]))),128)),je.value.length?ri("",!0):(at(),lt("li",pA,"暂无案例"))])])])])]))}});l0(mA).mount("#app");
