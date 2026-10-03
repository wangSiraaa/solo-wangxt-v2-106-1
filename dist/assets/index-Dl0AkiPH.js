(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _u(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ft={},wr=[],_i=()=>{},od=()=>!1,Ha=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ka=n=>n.startsWith("onUpdate:"),an=Object.assign,vu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},km=Object.prototype.hasOwnProperty,wt=(n,e)=>km.call(n,e),lt=Array.isArray,lr=n=>go(n)==="[object Map]",us=n=>go(n)==="[object Set]",ah=n=>go(n)==="[object Date]",ht=n=>typeof n=="function",Xt=n=>typeof n=="string",xi=n=>typeof n=="symbol",Ut=n=>n!==null&&typeof n=="object",ad=n=>(Ut(n)||ht(n))&&ht(n.then)&&ht(n.catch),ld=Object.prototype.toString,go=n=>ld.call(n),Gm=n=>go(n).slice(8,-1),cd=n=>go(n)==="[object Object]",xu=n=>Xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ws=_u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ga=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Wm=/-\w/g,Qn=Ga(n=>n.replace(Wm,e=>e.slice(1).toUpperCase())),Xm=/\B([A-Z])/g,Br=Ga(n=>n.replace(Xm,"-$1").toLowerCase()),ud=Ga(n=>n.charAt(0).toUpperCase()+n.slice(1)),fl=Ga(n=>n?`on${ud(n)}`:""),di=(n,e)=>!Object.is(n,e),fa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},hd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Su=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let lh;const Wa=()=>lh||(lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mu(n){if(lt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Xt(i)?Km(i):Mu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Xt(n)||Ut(n))return n}const $m=/;(?![^(]*\))/g,qm=/:([^]+)/,Ym=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Km(n){const e={};return n.replace(Ym,t=>t.startsWith("/*")?"":t).split($m).forEach(t=>{if(t){const i=t.split(qm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dn(n){let e="";if(Xt(n))e=n;else if(lt(n))for(let t=0;t<n.length;t++){const i=Dn(n[t]);i&&(e+=i+" ")}else if(Ut(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jm=_u(Zm);function fd(n){return!!n||n===""}function jm(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=ms(n[r],e[r],t);return i}function ch(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&ms(s,i[a],t)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function Qm(n,e,t){let i=lr(n),r=lr(e);if(i||r||(i=us(n),r=us(e),i||r))return i&&r?ch(n,e,t):!1;const s=Object.keys(n).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!ms(n[a],e[a],t))return!1}return String(n)===String(e)}function uh(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const o=i(n,e,t);return r.delete(n),s.delete(e),o}function ms(n,e,t){if(n===e)return!0;let i=ah(n),r=ah(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=xi(n),r=xi(e),i||r?n===e:(i=lt(n),r=lt(e),i||r?i&&r?uh(n,e,t,jm):!1:(i=Ut(n),r=Ut(e),i||r?!i||!r?!1:uh(n,e,t,Qm):String(n)===String(e))))}function dd(n,e){return n.findIndex(t=>ms(t,e))}const pd=n=>!!(n&&n.__v_isRef===!0),it=n=>Xt(n)?n:n==null?"":lt(n)||Ut(n)&&(n.toString===ld||!ht(n.toString))?pd(n)?it(n.value):JSON.stringify(n,md,2):String(n),md=(n,e)=>pd(e)?md(n,e.value):lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[dl(i,s)+" =>"]=r,t),{})}:us(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>dl(t))}:xi(e)?dl(e):Ut(e)&&!lt(e)&&!cd(e)?String(e):e,dl=(n,e="")=>{var t;return xi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rn;class eg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&rn&&(rn.active?(this.parent=rn,this.index=(rn.scopes||(rn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=rn;try{return rn=this,e()}finally{rn=t}}}on(){++this._on===1&&(this.prevScope=rn,rn=this)}off(){if(this._on>0&&--this._on===0){if(rn===this)rn=this.prevScope;else{let e=rn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function tg(){return rn}let Ot;const pl=new WeakSet;class gd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rn&&(rn.active?rn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pl.has(this)&&(pl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hh(this),xd(this);const e=Ot,t=ei;Ot=this,ei=!0;try{return this.fn()}finally{Sd(this),Ot=e,ei=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Eu(e);this.deps=this.depsTail=void 0,hh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hc(this)&&this.run()}get dirty(){return hc(this)}}let _d=0,Xs,$s;function vd(n,e=!1){if(n.flags|=8,e){n.next=$s,$s=n;return}n.next=Xs,Xs=n}function yu(){_d++}function bu(){if(--_d>0)return;if($s){let e=$s;for($s=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function xd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Eu(i),ng(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function hc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Md(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Md(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===to)||(n.globalVersion=to,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!hc(n))))return;n.flags|=2;const e=n.dep,t=Ot,i=ei;Ot=n,ei=!0;try{xd(n);const r=n.fn(n._value);(e.version===0||di(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ot=t,ei=i,Sd(n),n.flags&=-3}}function Eu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Eu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ng(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ei=!0;const yd=[];function qi(){yd.push(ei),ei=!1}function Yi(){const n=yd.pop();ei=n===void 0?!0:n}function hh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ot;Ot=void 0;try{e()}finally{Ot=t}}}let to=0;class ig{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ot||!ei||Ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ot)t=this.activeLink=new ig(Ot,this),Ot.deps?(t.prevDep=Ot.depsTail,Ot.depsTail.nextDep=t,Ot.depsTail=t):Ot.deps=Ot.depsTail=t,bd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ot.depsTail,t.nextDep=void 0,Ot.depsTail.nextDep=t,Ot.depsTail=t,Ot.deps===t&&(Ot.deps=i)}return t}trigger(e){this.version++,to++,this.notify(e)}notify(e){yu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bu()}}}function bd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)bd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const fc=new WeakMap,Lr=Symbol(""),dc=Symbol(""),no=Symbol("");function hn(n,e,t){if(ei&&Ot){let i=fc.get(n);i||fc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Tu),r.map=i,r.key=t),r.track()}}function Bi(n,e,t,i,r,s){const o=fc.get(n);if(!o){to++;return}const a=l=>{l&&l.trigger()};if(yu(),e==="clear")o.forEach(a);else{const l=lt(n),c=l&&xu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===no||!xi(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(no)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Lr)),lr(n)&&a(o.get(dc)));break;case"delete":l||(a(o.get(Lr)),lr(n)&&a(o.get(dc)));break;case"set":lr(n)&&a(o.get(Lr));break}}bu()}function zr(n){const e=At(n);return e===n||(hn(e,"iterate",no),Gn(n))?e:Si(n)?cr(n)?e.map(t=>ur(Wn(t))):e.map(ur):e.map(Wn)}function Xa(n){return hn(n=At(n),"iterate",no),n}function ui(n,e){return Si(n)?ur(cr(n)?Wn(e):e):Wn(e)}const rg={__proto__:null,[Symbol.iterator](){return ml(this,Symbol.iterator,n=>ui(this,n))},concat(...n){return zr(this).concat(...n.map(e=>lt(e)?zr(e):e))},entries(){return ml(this,"entries",n=>(n[1]=ui(this,n[1]),n))},every(n,e){return Ri(this,"every",n,e,void 0,arguments)},filter(n,e){return Ri(this,"filter",n,e,t=>t.map(i=>ui(this,i)),arguments)},find(n,e){return Ri(this,"find",n,e,t=>ui(this,t),arguments)},findIndex(n,e){return Ri(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ri(this,"findLast",n,e,t=>ui(this,t),arguments)},findLastIndex(n,e){return Ri(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ri(this,"forEach",n,e,void 0,arguments)},includes(...n){return gl(this,"includes",n)},indexOf(...n){return gl(this,"indexOf",n)},join(n){return zr(this).join(n)},lastIndexOf(...n){return gl(this,"lastIndexOf",n)},map(n,e){return Ri(this,"map",n,e,void 0,arguments)},pop(){return As(this,"pop")},push(...n){return As(this,"push",n)},reduce(n,...e){return fh(this,"reduce",n,e)},reduceRight(n,...e){return fh(this,"reduceRight",n,e)},shift(){return As(this,"shift")},some(n,e){return Ri(this,"some",n,e,void 0,arguments)},splice(...n){return As(this,"splice",n)},toReversed(){return zr(this).toReversed()},toSorted(n){return zr(this).toSorted(n)},toSpliced(...n){return zr(this).toSpliced(...n)},unshift(...n){return As(this,"unshift",n)},values(){return ml(this,"values",n=>ui(this,n))}};function ml(n,e,t){const i=Xa(n),r=i[e]();return i!==n&&!Gn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const sg=Array.prototype;function Ri(n,e,t,i,r,s){const o=Xa(n),a=o!==n&&!Gn(n),l=o[e];if(l!==sg[e]){const f=l.apply(n,s);return a?Wn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,ui(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function fh(n,e,t,i){const r=Xa(n),s=r!==n&&!Gn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=ui(n,c)),t.call(this,c,ui(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](o,...i);return a?ui(n,l):l}function gl(n,e,t){const i=At(n);hn(i,"iterate",no);const r=i[e](...t);return(r===-1||r===!1)&&Ru(t[0])?(t[0]=At(t[0]),i[e](...t)):r}function As(n,e,t=[]){qi(),yu();const i=At(n)[e].apply(n,t);return bu(),Yi(),i}const og=_u("__proto__,__v_isRef,__isVue"),Ed=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(xi));function ag(n){xi(n)||(n=String(n));const e=At(this);return hn(e,"has",n),e.hasOwnProperty(n)}class Td{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?_g:Cd:s?Rd:wd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=lt(e);if(!r){let l;if(o&&(l=rg[t]))return l;if(t==="hasOwnProperty")return ag}const a=Reflect.get(e,t,dn(e)?e:i);if((xi(t)?Ed.has(t):og(t))||(r||hn(e,"get",t),s))return a;if(dn(a)){const l=o&&xu(t)?a:a.value;return r&&Ut(l)?mc(l):l}return Ut(a)?r?mc(a):Bn(a):a}}class Ad extends Td{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=lt(e)&&xu(t);if(!this._isShallow){const c=Si(s);if(!Gn(i)&&!Si(i)&&(s=At(s),i=At(i)),!o&&dn(s)&&!dn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:wt(e,t),l=Reflect.set(e,t,i,dn(e)?e:r);return e===At(r)&&l&&(a?di(i,s)&&Bi(e,"set",t,i):Bi(e,"add",t,i)),l}deleteProperty(e,t){const i=wt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Bi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!xi(t)||!Ed.has(t))&&hn(e,"has",t),i}ownKeys(e){return hn(e,"iterate",lt(e)?"length":Lr),Reflect.ownKeys(e)}}class lg extends Td{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const cg=new Ad,ug=new lg,hg=new Ad(!0);const pc=n=>n,Co=n=>Reflect.getPrototypeOf(n);function fg(n,e,t){return function(...i){const r=this.__v_raw,s=At(r),o=lr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?pc:e?ur:Wn;return!e&&hn(s,"iterate",l?dc:Lr),an(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Po(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function dg(n,e){const t={get(r){const s=this.__v_raw,o=At(s),a=At(r);n||(di(r,a)&&hn(o,"get",r),hn(o,"get",a));const{has:l}=Co(o),c=e?pc:n?ur:Wn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&hn(At(r),"iterate",Lr),r.size},has(r){const s=this.__v_raw,o=At(s),a=At(r);return n||(di(r,a)&&hn(o,"has",r),hn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=At(a),c=e?pc:n?ur:Wn;return!n&&hn(l,"iterate",Lr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return an(t,n?{add:Po("add"),set:Po("set"),delete:Po("delete"),clear:Po("clear")}:{add(r){const s=At(this),o=Co(s),a=At(r),l=!e&&!Gn(r)&&!Si(r)?a:r;return o.has.call(s,l)||di(r,l)&&o.has.call(s,r)||di(a,l)&&o.has.call(s,a)||(s.add(l),Bi(s,"add",l,l)),this},set(r,s){!e&&!Gn(s)&&!Si(s)&&(s=At(s));const o=At(this),{has:a,get:l}=Co(o);let c=a.call(o,r);c||(r=At(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?di(s,u)&&Bi(o,"set",r,s):Bi(o,"add",r,s),this},delete(r){const s=At(this),{has:o,get:a}=Co(s);let l=o.call(s,r);l||(r=At(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Bi(s,"delete",r,void 0),c},clear(){const r=At(this),s=r.size!==0,o=r.clear();return s&&Bi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=fg(r,n,e)}),t}function Au(n,e){const t=dg(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(wt(t,r)&&r in i?t:i,r,s)}const pg={get:Au(!1,!1)},mg={get:Au(!1,!0)},gg={get:Au(!0,!1)};const wd=new WeakMap,Rd=new WeakMap,Cd=new WeakMap,_g=new WeakMap;function vg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bn(n){return Si(n)?n:wu(n,!1,cg,pg,wd)}function xg(n){return wu(n,!1,hg,mg,Rd)}function mc(n){return wu(n,!0,ug,gg,Cd)}function wu(n,e,t,i,r){if(!Ut(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=vg(Gm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function cr(n){return Si(n)?cr(n.__v_raw):!!(n&&n.__v_isReactive)}function Si(n){return!!(n&&n.__v_isReadonly)}function Gn(n){return!!(n&&n.__v_isShallow)}function Ru(n){return n?!!n.__v_raw:!1}function At(n){const e=n&&n.__v_raw;return e?At(e):n}function Sg(n){return!wt(n,"__v_skip")&&Object.isExtensible(n)&&hd(n,"__v_skip",!0),n}const Wn=n=>Ut(n)?Bn(n):n,ur=n=>Ut(n)?mc(n):n;function dn(n){return n?n.__v_isRef===!0:!1}function si(n){return Pd(n,!1)}function dh(n){return Pd(n,!0)}function Pd(n,e){return dn(n)?n:new Mg(n,e)}class Mg{constructor(e,t){this.dep=new Tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:At(e),this._value=t?e:Wn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Gn(e)||Si(e);e=i?e:At(e),di(e,t)&&(this._rawValue=e,this._value=i?e:Wn(e),this.dep.trigger())}}function Zn(n){return dn(n)?n.value:n}const yg={get:(n,e,t)=>e==="__v_raw"?n:Zn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return dn(r)&&!dn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Dd(n){return cr(n)?n:new Proxy(n,yg)}class bg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=to-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ot!==this)return vd(this,!0),!0}get value(){const e=this.dep.track();return Md(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Eg(n,e,t=!1){let i,r;return ht(n)?i=n:(i=n.get,r=n.set),new bg(i,r,t)}const Do={},ya=new WeakMap;let Tr;function Tg(n,e=!1,t=Tr){if(t){let i=ya.get(t);i||ya.set(t,i=[]),i.push(n)}}function Ag(n,e,t=Ft){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=M=>r?M:Gn(M)||r===!1||r===0?zi(M,1):zi(M);let u,f,h,d,v=!1,b=!1;if(dn(n)?(f=()=>n.value,v=Gn(n)):cr(n)?(f=()=>c(n),v=!0):lt(n)?(b=!0,v=n.some(M=>cr(M)||Gn(M)),f=()=>n.map(M=>{if(dn(M))return M.value;if(cr(M))return c(M);if(ht(M))return l?l(M,2):M()})):ht(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){qi();try{h()}finally{Yi()}}const M=Tr;Tr=u;try{return l?l(n,3,[d]):n(d)}finally{Tr=M}}:f=_i,e&&r){const M=f,R=r===!0?1/0:r;f=()=>zi(M(),R)}const m=tg(),p=()=>{u.stop(),m&&m.active&&vu(m.effects,u)};if(s&&e){const M=e;e=(...R)=>{const A=M(...R);return p(),A}}let w=b?new Array(n.length).fill(Do):Do;const P=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const R=u.run();if(M||r||v||(b?R.some((A,O)=>di(A,w[O])):di(R,w))){h&&h();const A=Tr;Tr=u;try{const O=[R,w===Do?void 0:b&&w[0]===Do?[]:w,d];w=R,l?l(e,3,O):e(...O)}finally{Tr=A}}}else u.run()};return a&&a(P),u=new gd(f),u.scheduler=o?()=>o(P,!1):P,d=M=>Tg(M,!1,u),h=u.onStop=()=>{const M=ya.get(u);if(M){if(l)l(M,4);else for(const R of M)R();ya.delete(u)}},e?i?P(!0):w=u.run():o?o(P.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function zi(n,e=1/0,t){if(e<=0||!Ut(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,dn(n))zi(n.value,e,t);else if(lt(n))for(let i=0;i<n.length;i++)zi(n[i],e,t);else if(us(n)||lr(n))n.forEach(i=>{zi(i,e,t)});else if(cd(n)){for(const i in n)zi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&zi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _o(n,e,t,i){try{return i?n(...i):n()}catch(r){$a(r,e,t)}}function ni(n,e,t,i){if(ht(n)){const r=_o(n,e,t,i);return r&&ad(r)&&r.catch(s=>{$a(s,e,t)}),r}if(lt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ni(n[s],e,t,i));return r}}function $a(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){qi(),_o(s,null,10,[n,l,c]),Yi();return}}wg(n,t,r,i,o)}function wg(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const xn=[];let ci=-1;const rs=[];let or=null,Qr=0;const Ld=Promise.resolve();let ba=null;function gc(n){const e=ba||Ld;return n?e.then(this?n.bind(this):n):e}function Rg(n){let e=ci+1,t=xn.length;for(;e<t;){const i=e+t>>>1,r=xn[i],s=io(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Cu(n){if(!(n.flags&1)){const e=io(n),t=xn[xn.length-1];!t||!(n.flags&2)&&e>=io(t)?xn.push(n):xn.splice(Rg(e),0,n),n.flags|=1,Id()}}function Id(){ba||(ba=Ld.then(Nd))}function Cg(n){if(!lt(n))or&&n.id===-1?or.splice(Qr+1,0,n):n.flags&1||(rs.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)rs.push(n[e]);Id()}function ph(n,e,t=ci+1){for(;t<xn.length;t++){const i=xn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;xn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ud(n){if(rs.length){const e=[...new Set(rs)].sort((t,i)=>io(t)-io(i));if(rs.length=0,or){for(let t=0;t<e.length;t++)or.push(e[t]);return}for(or=e,Qr=0;Qr<or.length;Qr++){const t=or[Qr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}or=null,Qr=0}}const io=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Nd(n){try{for(ci=0;ci<xn.length;ci++){const e=xn[ci];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ci<xn.length;ci++){const e=xn[ci];e&&(e.flags&=-2)}ci=-1,xn.length=0,Ud(),ba=null,(xn.length||rs.length)&&Nd()}}let kn=null,Fd=null;function Ea(n){const e=kn;return kn=n,Fd=n&&n.type.__scopeId||null,e}function Pg(n,e=kn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Th(-1);const s=Ea(e),o=Ir.length;let a;try{a=n(...r)}finally{for(let l=Ir.length;l>o;l--)op();Ea(s),i._d&&Th(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ln(n,e){if(kn===null)return n;const t=Ja(kn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Ft]=e[r];s&&(ht(s)&&(s={mounted:s,updated:s}),s.deep&&zi(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function _r(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(qi(),ni(l,t,8,[n.el,a,n,e]),Yi())}}function Dg(n,e){if(Sn){let t=Sn.provides;const i=Sn.parent&&Sn.parent.provides;i===t&&(t=Sn.provides=Object.create(i)),t[n]=e}}function da(n,e,t=!1){const i=C_();if(i||os){let r=os?os._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ht(e)?e.call(i&&i.proxy):e}}const Lg=Symbol.for("v-scx"),Ig=()=>da(Lg);function ss(n,e,t){return Od(n,e,t)}function Od(n,e,t=Ft){const{immediate:i,deep:r,flush:s,once:o}=t,a=an({},t),l=e&&i||!e&&s!=="post";let c;if(oo){if(s==="sync"){const d=Ig();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=_i,d.resume=_i,d.pause=_i,d}}const u=Sn;a.call=(d,v,b)=>ni(d,u,v,b);let f=!1;s==="post"?a.scheduler=d=>{wn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,v)=>{v?d():Cu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Ag(n,e,a);return oo&&(c?c.push(h):l&&h()),h}function Ug(n,e,t){const i=this.proxy,r=Xt(n)?n.includes(".")?Bd(i,n):()=>i[n]:n.bind(i,i);let s;ht(e)?s=e:(s=e.handler,t=e);const o=vo(this),a=Od(r,s.bind(i),t);return o(),a}function Bd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Ng=Symbol("_vte"),qa=n=>n.__isTeleport,_l=Symbol("_leaveCb");function Fg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ki){e=t;break}}return e}function zd(n){if(!Du(n))return qa(n.type)&&n.children?Fg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ht(t.default))return t.default()}}function Pu(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Pu(qa(t.type)&&zd(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Og(n,e){return ht(n)?an({name:n.name},e,{setup:n}):n}function Vd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function mh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ta=new WeakMap;function qs(n,e,t,i,r=!1){if(lt(n)){n.forEach((b,m)=>qs(b,e&&(lt(e)?e[m]:e),t,i,r));return}if(Ys(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&qs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Ja(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ft?a.refs={}:a.refs,f=a.setupState,h=At(f),d=f===Ft?od:b=>mh(u,b)?!1:wt(h,b),v=(b,m)=>!(m&&mh(u,m));if(c!=null&&c!==l){if(gh(e),Xt(c))u[c]=null,d(c)&&(f[c]=null);else if(dn(c)){const b=e;v(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(ht(l))_o(l,a,12,[o,u]);else{const b=Xt(l),m=dn(l);if(b||m){const p=()=>{if(n.f){const w=b?d(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)lt(w)&&vu(w,s);else if(lt(w))w.includes(s)||w.push(s);else if(b)u[l]=[s],d(l)&&(f[l]=u[l]);else{const P=[s];v(l,n.k)&&(l.value=P),n.k&&(u[n.k]=P)}}else b?(u[l]=o,d(l)&&(f[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{p(),Ta.delete(n)};w.id=-1,Ta.set(n,w),wn(w,t)}else gh(n),p()}}}function gh(n){const e=Ta.get(n);e&&(e.flags|=8,Ta.delete(n))}Wa().requestIdleCallback;Wa().cancelIdleCallback;const Ys=n=>!!n.type.__asyncLoader,Du=n=>n.type.__isKeepAlive;function Bg(n,e){Hd(n,"a",e)}function zg(n,e){Hd(n,"da",e)}function Hd(n,e,t=Sn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ya(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Du(r.parent.vnode)&&Vg(i,e,t,r),r=r.parent}}function Vg(n,e,t,i){const r=Ya(e,n,i,!0);kd(()=>{vu(i[e],r)},t)}function Ya(n,e,t=Sn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{qi();const a=vo(t),l=ni(e,t,n,o);return a(),Yi(),l});return i?r.unshift(s):r.push(s),s}}const Ji=n=>(e,t=Sn)=>{(!oo||n==="sp")&&Ya(n,(...i)=>e(...i),t)},Hg=Ji("bm"),_c=Ji("m"),kg=Ji("bu"),Gg=Ji("u"),Wg=Ji("bum"),kd=Ji("um"),Xg=Ji("sp"),$g=Ji("rtg"),qg=Ji("rtc");function Yg(n,e=Sn){Ya("ec",n,e)}const Kg=Symbol.for("v-ndc");function Qt(n,e,t,i){let r;const s=t,o=lt(n);if(o||Xt(n)){const a=o&&cr(n);let l=!1,c=!1;a&&(l=!Gn(n),c=Si(n),n=Xa(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ur(Wn(n[u])):Wn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Ut(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const vc=n=>n?up(n)?Ja(n):vc(n.parent):null,Ks=an(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>vc(n.parent),$root:n=>vc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Wd(n),$forceUpdate:n=>n.f||(n.f=()=>{Cu(n.update)}),$nextTick:n=>n.n||(n.n=gc.bind(n.proxy)),$watch:n=>Ug.bind(n)}),vl=(n,e)=>n!==Ft&&!n.__isScriptSetup&&wt(n,e),Zg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(vl(i,e))return o[e]=1,i[e];if(r!==Ft&&wt(r,e))return o[e]=2,r[e];if(wt(s,e))return o[e]=3,s[e];if(t!==Ft&&wt(t,e))return o[e]=4,t[e];xc&&(o[e]=0)}}const c=Ks[e];let u,f;if(c)return e==="$attrs"&&hn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ft&&wt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,wt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return vl(r,e)?(r[e]=t,!0):i!==Ft&&wt(i,e)?(i[e]=t,!0):wt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Ft&&a[0]!=="$"&&wt(n,a)||vl(e,a)||wt(s,a)||wt(i,a)||wt(Ks,a)||wt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:wt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _h(n){return lt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let xc=!0;function Jg(n){const e=Wd(n),t=n.proxy,i=n.ctx;xc=!1,e.beforeCreate&&vh(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:v,activated:b,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:P,unmounted:M,render:R,renderTracked:A,renderTriggered:O,errorCaptured:y,serverPrefetch:I,expose:z,inheritAttrs:k,components:ne,directives:ie,filters:H}=e;if(c&&jg(c,i,null),o)for(const j in o){const pe=o[j];ht(pe)&&(i[j]=pe.bind(t))}if(r){const j=r.call(t,t);Ut(j)&&(n.data=Bn(j))}if(xc=!0,s)for(const j in s){const pe=s[j],le=ht(pe)?pe.bind(t,t):ht(pe.get)?pe.get.bind(t,t):_i,ve=!ht(pe)&&ht(pe.set)?pe.set.bind(t):_i,me=Bs({get:le,set:ve});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>me.value,set:Ae=>me.value=Ae})}if(a)for(const j in a)Gd(a[j],i,t,j);if(l){const j=ht(l)?l.call(t):l;Reflect.ownKeys(j).forEach(pe=>{Dg(pe,j[pe])})}u&&vh(u,n,"c");function ae(j,pe){lt(pe)?pe.forEach(le=>j(le.bind(t))):pe&&j(pe.bind(t))}if(ae(Hg,f),ae(_c,h),ae(kg,d),ae(Gg,v),ae(Bg,b),ae(zg,m),ae(Yg,y),ae(qg,A),ae($g,O),ae(Wg,w),ae(kd,M),ae(Xg,I),lt(z))if(z.length){const j=n.exposed||(n.exposed={});z.forEach(pe=>{Object.defineProperty(j,pe,{get:()=>t[pe],set:le=>t[pe]=le,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===_i&&(n.render=R),k!=null&&(n.inheritAttrs=k),ne&&(n.components=ne),ie&&(n.directives=ie),I&&Vd(n)}function jg(n,e,t=_i){lt(n)&&(n=Sc(n));for(const i in n){const r=n[i];let s;Ut(r)?"default"in r?s=da(r.from||i,r.default,!0):s=da(r.from||i):s=da(r),dn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function vh(n,e,t){ni(lt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Gd(n,e,t,i){let r=i.includes(".")?Bd(t,i):()=>t[i];if(Xt(n)){const s=e[n];ht(s)&&ss(r,s)}else if(ht(n))ss(r,n.bind(t));else if(Ut(n))if(lt(n))n.forEach(s=>Gd(s,e,t,i));else{const s=ht(n.handler)?n.handler.bind(t):e[n.handler];ht(s)&&ss(r,s,n)}}function Wd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Aa(l,c,o,!0)),Aa(l,e,o)),Ut(e)&&s.set(e,l),l}function Aa(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Aa(n,s,t,!0),r&&r.forEach(o=>Aa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Qg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Qg={data:xh,props:Sh,emits:Sh,methods:Os,computed:Os,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:Os,directives:Os,watch:t_,provide:xh,inject:e_};function xh(n,e){return e?n?function(){return an(ht(n)?n.call(this,this):n,ht(e)?e.call(this,this):e)}:e:n}function e_(n,e){return Os(Sc(n),Sc(e))}function Sc(n){if(lt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function _n(n,e){return n?[...new Set([].concat(n,e))]:e}function Os(n,e){return n?an(Object.create(null),n,e):e}function Sh(n,e){return n?lt(n)&&lt(e)?[...new Set([...n,...e])]:an(Object.create(null),_h(n),_h(e??{})):e}function t_(n,e){if(!n)return e;if(!e)return n;const t=an(Object.create(null),n);for(const i in e)t[i]=_n(n[i],e[i]);return t}function Xd(){return{app:null,config:{isNativeTag:od,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let n_=0;function i_(n,e){return function(i,r=null){ht(i)||(i=an({},i)),r!=null&&!Ut(r)&&(r=null);const s=Xd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:n_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:N_,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ht(u.install)?(o.add(u),u.install(c,...f)):ht(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||ki(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Ja(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ni(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=os;os=c;try{return u()}finally{os=f}}};return c}}let os=null;const r_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Qn(e)}Modifiers`]||n[`${Br(e)}Modifiers`];function s_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ft;let r=t;const s=e.startsWith("update:"),o=s&&r_(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Xt(u)?u.trim():u)),o.number&&(r=r.map(Su)));let a,l=i[a=fl(e)]||i[a=fl(Qn(e))];!l&&s&&(l=i[a=fl(Br(e))]),l&&ni(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ni(c,n,6,r)}}const o_=new WeakMap;function $d(n,e,t=!1){const i=t?o_:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ht(n)){const l=c=>{const u=$d(c,e,!0);u&&(a=!0,an(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Ut(n)&&i.set(n,null),null):(lt(s)?s.forEach(l=>o[l]=null):an(o,s),Ut(n)&&i.set(n,o),o)}function Ka(n,e){return!n||!Ha(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),wt(n,e[0].toLowerCase()+e.slice(1))||wt(n,Br(e))||wt(n,e))}function Mh(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:v,inheritAttrs:b}=n,m=Ea(n);let p,w;try{if(t.shapeFlag&4){const M=r||i,R=M;p=hi(c.call(R,M,u,f,d,h,v)),w=a}else{const M=e;p=hi(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),w=e.props?a:a_(a)}}catch(M){Ir.length=0,$a(M,n,1),p=ki(Ki)}let P=p;if(w&&b!==!1){const M=Object.keys(w),{shapeFlag:R}=P;M.length&&R&7&&(s&&M.some(ka)&&(w=l_(w,s)),P=hs(P,w,!1,!0))}if(t.dirs&&(P=hs(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition){const M=qa(P.type)&&zd(P)||P;Pu(M,t.transition)}return p=P,Ea(m),p}const a_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ha(t))&&((e||(e={}))[t]=n[t]);return e},l_=(n,e)=>{const t={};for(const i in n)(!ka(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function c_(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?yh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(qd(o,i,h)&&!Ka(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?yh(i,o,c):!0:!!o;return!1}function yh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(qd(e,n,s)&&!Ka(t,s))return!0}return!1}function qd(n,e,t){const i=n[t],r=e[t];return t==="style"&&Ut(i)&&Ut(r)?!ms(i,r):i!==r}function u_({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Yd={},Kd=()=>Object.create(Yd),Zd=n=>Object.getPrototypeOf(n)===Yd;function h_(n,e,t,i=!1){const r={},s=Kd();n.propsDefaults=Object.create(null),Jd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:xg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function f_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=At(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ka(n.emitsOptions,h))continue;const d=e[h];if(l)if(wt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const v=Qn(h);r[v]=Mc(l,a,v,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Jd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!wt(e,f)&&((u=Br(f))===f||!wt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Mc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!wt(e,f))&&(delete s[f],c=!0)}c&&Bi(n.attrs,"set","")}function Jd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ws(l))continue;const c=e[l];let u;r&&wt(r,u=Qn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ka(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=At(t),c=a||Ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Mc(r,l,f,c[f],n,!wt(c,f))}}return o}function Mc(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=wt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ht(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=vo(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Br(t))&&(i=!0))}return i}const d_=new WeakMap;function jd(n,e,t=!1){const i=t?d_:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ht(n)){const u=f=>{l=!0;const[h,d]=jd(f,e,!0);an(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Ut(n)&&i.set(n,wr),wr;if(lt(s))for(let u=0;u<s.length;u++){const f=Qn(s[u]);bh(f)&&(o[f]=Ft)}else if(s)for(const u in s){const f=Qn(u);if(bh(f)){const h=s[u],d=o[f]=lt(h)||ht(h)?{type:h}:an({},h),v=d.type;let b=!1,m=!0;if(lt(v))for(let p=0;p<v.length;++p){const w=v[p],P=ht(w)&&w.name;if(P==="Boolean"){b=!0;break}else P==="String"&&(m=!1)}else b=ht(v)&&v.name==="Boolean";d[0]=b,d[1]=m,(b||wt(d,"default"))&&a.push(f)}}const c=[o,a];return Ut(n)&&i.set(n,c),c}function bh(n){return n[0]!=="$"&&!Ws(n)}const Lu=n=>n==="_"||n==="_ctx"||n==="$stable",Iu=n=>lt(n)?n.map(hi):[hi(n)],p_=(n,e,t)=>{if(e._n)return e;const i=Pg((...r)=>Iu(e(...r)),t);return i._c=!1,i},Qd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Lu(r))continue;const s=n[r];if(ht(s))e[r]=p_(r,s,i);else if(s!=null){const o=Iu(s);e[r]=()=>o}}},ep=(n,e)=>{const t=Iu(e);n.slots.default=()=>t},tp=(n,e,t)=>{for(const i in e)(t||!Lu(i))&&(n[i]=e[i])},m_=(n,e,t)=>{const i=n.slots=Kd();if(n.vnode.shapeFlag&32){const r=e._;r?(tp(i,e,t),t&&hd(i,"_",r,!0)):Qd(e,i)}else e&&ep(n,e)},g_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:tp(r,e,t):(s=!e.$stable,Qd(e,r)),o=e}else e&&(ep(n,e),o={default:1});if(s)for(const a in r)!Lu(a)&&o[a]==null&&delete r[a]},wn=M_;function __(n){return v_(n)}function v_(n,e){const t=Wa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=_i,insertStaticContent:v}=n,b=(C,F,U,W=null,X=null,G=null,Q=void 0,fe=null,ce=!!F.dynamicChildren)=>{if(C===F)return;C&&!ws(C,F)&&(W=he(C),Ae(C,X,G,!0),C=null),F.patchFlag===-2&&(ce=!1,F.dynamicChildren=null),F.dynamicChildren&&C&&C.dynamicChildren&&C.dynamicChildren.hasOnce&&(F.dynamicChildren===wr&&(F.dynamicChildren=[]),F.dynamicChildren.hasOnce=!0);const{type:te,ref:B,shapeFlag:_}=F;switch(te){case Za:m(C,F,U,W);break;case Ki:p(C,F,U,W);break;case Sl:C==null&&w(F,U,W,Q);break;case Ct:ne(C,F,U,W,X,G,Q,fe,ce);break;default:_&1?R(C,F,U,W,X,G,Q,fe,ce):_&6?ie(C,F,U,W,X,G,Q,fe,ce):(_&64||_&128)&&te.process(C,F,U,W,X,G,Q,fe,ce,We)}B!=null&&X?qs(B,C&&C.ref,G,F||C,!F):B==null&&C&&C.ref!=null&&qs(C.ref,null,G,C,!0)},m=(C,F,U,W)=>{if(C==null)i(F.el=a(F.children),U,W);else{const X=F.el=C.el;F.children!==C.children&&c(X,F.children)}},p=(C,F,U,W)=>{C==null?i(F.el=l(F.children||""),U,W):F.el=C.el},w=(C,F,U,W)=>{[C.el,C.anchor]=v(C.children,F,U,W,C.el,C.anchor)},P=({el:C,anchor:F},U,W)=>{let X;for(;C&&C!==F;)X=h(C),i(C,U,W),C=X;i(F,U,W)},M=({el:C,anchor:F})=>{let U;for(;C&&C!==F;)U=h(C),r(C),C=U;r(F)},R=(C,F,U,W,X,G,Q,fe,ce)=>{if(F.type==="svg"?Q="svg":F.type==="math"&&(Q="mathml"),C==null)A(F,U,W,X,G,Q,fe,ce);else{const te=C.el&&C.el._isVueCE?C.el:null;try{te&&te._beginPatch(),I(C,F,X,G,Q,fe,ce)}finally{te&&te._endPatch()}}},A=(C,F,U,W,X,G,Q,fe)=>{let ce,te;const{props:B,shapeFlag:_,transition:D,dirs:ge}=C;if(ce=C.el=o(C.type,G,B&&B.is,B),_&8?u(ce,C.children):_&16&&y(C.children,ce,null,W,X,xl(C,G),Q,fe),ge&&_r(C,null,W,"created"),O(ce,C,C.scopeId,Q,W),B){for(const g in B)g!=="value"&&!Ws(g)&&s(ce,g,null,B[g],G,W);"value"in B&&s(ce,"value",null,B.value,G),(te=B.onVnodeBeforeMount)&&oi(te,W,C)}ge&&_r(C,null,W,"beforeMount");const T=x_(X,D);T&&D.beforeEnter(ce),i(ce,F,U),((te=B&&B.onVnodeMounted)||T||ge)&&wn(()=>{try{te&&oi(te,W,C),T&&D.enter(ce),ge&&_r(C,null,W,"mounted")}finally{}},X)},O=(C,F,U,W,X)=>{if(U&&d(C,U),W)for(let G=0;G<W.length;G++)d(C,W[G]);if(X){let G=X.subTree;if(F===G||sp(G.type)&&(G.ssContent===F||G.ssFallback===F)){const Q=X.vnode;O(C,Q,Q.scopeId,Q.slotScopeIds,X.parent)}}},y=(C,F,U,W,X,G,Q,fe,ce=0)=>{for(let te=ce;te<C.length;te++){const B=C[te]=fe?Fi(C[te]):hi(C[te]);b(null,B,F,U,W,X,G,Q,fe)}},I=(C,F,U,W,X,G,Q)=>{const fe=F.el=C.el;let{patchFlag:ce,dynamicChildren:te,dirs:B}=F;ce|=C.patchFlag&16;const _=C.props||Ft,D=F.props||Ft;let ge;if(U&&vr(U,!1),(ge=D.onVnodeBeforeUpdate)&&oi(ge,U,F,C),B&&_r(F,C,U,"beforeUpdate"),U&&vr(U,!0),te&&(!C.dynamicChildren||C.dynamicChildren.length!==te.length)&&(ce=0,Q=!1,te=null),(_.innerHTML&&D.innerHTML==null||_.textContent&&D.textContent==null)&&u(fe,""),te?z(C.dynamicChildren,te,fe,U,W,xl(F,X),G):Q||pe(C,F,fe,null,U,W,xl(F,X),G,!1),ce>0){if(ce&16)k(fe,_,D,U,X);else if(ce&2&&_.class!==D.class&&s(fe,"class",null,D.class,X),ce&4&&s(fe,"style",_.style,D.style,X),ce&8){const T=F.dynamicProps;for(let g=0;g<T.length;g++){const N=T[g],K=_[N],ee=D[N];(ee!==K||N==="value")&&s(fe,N,K,ee,X,U)}}ce&1&&C.children!==F.children&&u(fe,F.children)}else!Q&&te==null&&k(fe,_,D,U,X);((ge=D.onVnodeUpdated)||B)&&wn(()=>{ge&&oi(ge,U,F,C),B&&_r(F,C,U,"updated")},W)},z=(C,F,U,W,X,G,Q)=>{for(let fe=0;fe<F.length;fe++){const ce=C[fe],te=F[fe],B=ce.el&&(ce.type===Ct||!ws(ce,te)||ce.shapeFlag&198)?f(ce.el):U;b(ce,te,B,null,W,X,G,Q,!0)}},k=(C,F,U,W,X)=>{if(F!==U){if(F!==Ft)for(const G in F)!Ws(G)&&!(G in U)&&s(C,G,F[G],null,X,W);for(const G in U){if(Ws(G))continue;const Q=U[G],fe=F[G];Q!==fe&&G!=="value"&&s(C,G,fe,Q,X,W)}"value"in U&&s(C,"value",F.value,U.value,X)}},ne=(C,F,U,W,X,G,Q,fe,ce)=>{const te=F.el=C?C.el:a(""),B=F.anchor=C?C.anchor:a("");let{patchFlag:_,dynamicChildren:D,slotScopeIds:ge}=F;ge&&(fe=fe?fe.concat(ge):ge),C==null?(i(te,U,W),i(B,U,W),y(F.children||[],U,B,X,G,Q,fe,ce)):_>0&&_&64&&D&&C.dynamicChildren&&C.dynamicChildren.length===D.length?(z(C.dynamicChildren,D,U,X,G,Q,fe),(F.key!=null||X&&F===X.subTree)&&np(C,F,!0)):pe(C,F,U,B,X,G,Q,fe,ce)},ie=(C,F,U,W,X,G,Q,fe,ce)=>{F.slotScopeIds=fe,C==null?F.shapeFlag&512?X.ctx.activate(F,U,W,Q,ce):H(F,U,W,X,G,Q,ce):J(C,F,ce)},H=(C,F,U,W,X,G,Q)=>{const fe=C.component=R_(C,W,X);if(Du(C)&&(fe.ctx.renderer=We),P_(fe,!1,Q),fe.asyncDep){if(X&&X.registerDep(fe,ae,Q),!C.el){const ce=fe.subTree=ki(Ki);p(null,ce,F,U),C.placeholder=ce.el}}else ae(fe,C,F,U,X,G,Q)},J=(C,F,U)=>{const W=F.component=C.component;if(c_(C,F,U))if(W.asyncDep&&!W.asyncResolved){F.el=C.el,j(W,F,U);return}else W.next=F,W.update();else F.el=C.el,W.vnode=F},ae=(C,F,U,W,X,G,Q)=>{const fe=()=>{if(C.isMounted){let{next:_,bu:D,u:ge,parent:T,vnode:g}=C;{const Re=ip(C);if(Re){_&&(_.el=g.el,j(C,_,Q)),Re.asyncDep.then(()=>{wn(()=>{C.isUnmounted||te()},X)});return}}let N=_,K;vr(C,!1),_?(_.el=g.el,j(C,_,Q)):_=g,D&&fa(D),(K=_.props&&_.props.onVnodeBeforeUpdate)&&oi(K,T,_,g),vr(C,!0);const ee=Mh(C),we=C.subTree;C.subTree=ee,b(we,ee,f(we.el),he(we),C,X,G),_.el=ee.el,N===null&&u_(C,ee.el),ge&&wn(ge,X),(K=_.props&&_.props.onVnodeUpdated)&&wn(()=>oi(K,T,_,g),X)}else{let _;const{el:D,props:ge}=F,{bm:T,m:g,parent:N,root:K,type:ee}=C,we=Ys(F);vr(C,!1),T&&fa(T),!we&&(_=ge&&ge.onVnodeBeforeMount)&&oi(_,N,F),vr(C,!0);{K.ce&&K.ce._hasShadowRoot()&&K.ce._injectChildStyle(ee,C.parent?C.parent.type:void 0);const Re=C.subTree=Mh(C);b(null,Re,U,W,C,X,G),F.el=Re.el}if(g&&wn(g,X),!we&&(_=ge&&ge.onVnodeMounted)){const Re=F;wn(()=>oi(_,N,Re),X)}(F.shapeFlag&256||N&&Ys(N.vnode)&&N.vnode.shapeFlag&256)&&C.a&&wn(C.a,X),C.isMounted=!0,F=U=W=null}};C.scope.on();const ce=C.effect=new gd(fe);C.scope.off();const te=C.update=ce.run.bind(ce),B=C.job=ce.runIfDirty.bind(ce);B.i=C,B.id=C.uid,ce.scheduler=()=>Cu(B),vr(C,!0),te()},j=(C,F,U)=>{F.component=C;const W=C.vnode.props;C.vnode=F,C.next=null,f_(C,F.props,W,U),g_(C,F.children,U),qi(),ph(C),Yi()},pe=(C,F,U,W,X,G,Q,fe,ce=!1)=>{const te=C&&C.children,B=C?C.shapeFlag:0,_=F.children,{patchFlag:D,shapeFlag:ge}=F;if(D>0){if(D&128){ve(te,_,U,W,X,G,Q,fe,ce);return}else if(D&256){le(te,_,U,W,X,G,Q,fe,ce);return}}ge&8?(B&16&&tt(te,X,G),_!==te&&u(U,_)):B&16?ge&16?ve(te,_,U,W,X,G,Q,fe,ce):tt(te,X,G,!0):(B&8&&u(U,""),ge&16&&y(_,U,W,X,G,Q,fe,ce))},le=(C,F,U,W,X,G,Q,fe,ce)=>{C=C||wr,F=F||wr;const te=C.length,B=F.length,_=Math.min(te,B);let D;for(D=0;D<_;D++){const ge=F[D]=ce?Fi(F[D]):hi(F[D]);b(C[D],ge,U,null,X,G,Q,fe,ce)}te>B?tt(C,X,G,!0,!1,_):y(F,U,W,X,G,Q,fe,ce,_)},ve=(C,F,U,W,X,G,Q,fe,ce)=>{let te=0;const B=F.length;let _=C.length-1,D=B-1;for(;te<=_&&te<=D;){const ge=C[te],T=F[te]=ce?Fi(F[te]):hi(F[te]);if(ws(ge,T))b(ge,T,U,null,X,G,Q,fe,ce);else break;te++}for(;te<=_&&te<=D;){const ge=C[_],T=F[D]=ce?Fi(F[D]):hi(F[D]);if(ws(ge,T))b(ge,T,U,null,X,G,Q,fe,ce);else break;_--,D--}if(te>_){if(te<=D){const ge=D+1,T=ge<B?F[ge].el:W;for(;te<=D;)b(null,F[te]=ce?Fi(F[te]):hi(F[te]),U,T,X,G,Q,fe,ce),te++}}else if(te>D)for(;te<=_;)Ae(C[te],X,G,!0),te++;else{const ge=te,T=te,g=new Map;for(te=T;te<=D;te++){const Ce=F[te]=ce?Fi(F[te]):hi(F[te]);Ce.key!=null&&g.set(Ce.key,te)}let N,K=0;const ee=D-T+1;let we=!1,Re=0;const de=new Array(ee);for(te=0;te<ee;te++)de[te]=0;for(te=ge;te<=_;te++){const Ce=C[te];if(K>=ee){Ae(Ce,X,G,!0);continue}let ke;if(Ce.key!=null)ke=g.get(Ce.key);else for(N=T;N<=D;N++)if(de[N-T]===0&&ws(Ce,F[N])){ke=N;break}ke===void 0?Ae(Ce,X,G,!0):(de[ke-T]=te+1,ke>=Re?Re=ke:we=!0,b(Ce,F[ke],U,null,X,G,Q,fe,ce),K++)}const Me=we?S_(de):wr;for(N=Me.length-1,te=ee-1;te>=0;te--){const Ce=T+te,ke=F[Ce],Fe=F[Ce+1],Ie=Ce+1<B?Fe.el||rp(Fe):W;de[te]===0?b(null,ke,U,Ie,X,G,Q,fe,ce):we&&(N<0||te!==Me[N]?me(ke,U,Ie,2):N--)}}},me=(C,F,U,W,X=null)=>{const{el:G,type:Q,transition:fe,children:ce,shapeFlag:te}=C;if(te&6){me(C.component.subTree,F,U,W);return}if(te&128){C.suspense.move(F,U,W);return}if(te&64){Q.move(C,F,U,We);return}if(Q===Ct){i(G,F,U);for(let _=0;_<ce.length;_++)me(ce[_],F,U,W);i(C.anchor,F,U);return}if(Q===Sl){P(C,F,U);return}if(W!==2&&te&1&&fe)if(W===0)fe.persisted&&!G[_l]?i(G,F,U):(fe.beforeEnter(G),i(G,F,U),wn(()=>fe.enter(G),X));else{const{leave:_,delayLeave:D,afterLeave:ge}=fe,T=()=>{C.ctx.isUnmounted?r(G):i(G,F,U)},g=()=>{const N=G._isLeaving||!!G[_l];G._isLeaving&&G[_l](!0),fe.persisted&&!N?T():_(G,()=>{T(),ge&&ge()})};D?D(G,T,g):g()}else i(G,F,U)},Ae=(C,F,U,W=!1,X=!1)=>{const{type:G,props:Q,ref:fe,children:ce,dynamicChildren:te,shapeFlag:B,patchFlag:_,dirs:D,cacheIndex:ge,memo:T}=C;if((_===-2||te&&te.hasOnce)&&(X=!1),fe!=null&&(qi(),qs(fe,null,U,C,!0),Yi()),ge!=null&&(!C.ctx||C.ctx===F)&&(F.renderCache[ge]=void 0),B&256){F.ctx.deactivate(C);return}const g=B&1&&D,N=!Ys(C);let K;if(N&&(K=Q&&Q.onVnodeBeforeUnmount)&&oi(K,F,C),B&6)st(C.component,U,W);else{if(B&128){C.suspense.unmount(U,W);return}g&&_r(C,null,F,"beforeUnmount"),B&64?C.type.remove(C,F,U,We,W):te&&!te.hasOnce&&(G!==Ct||_>0&&_&64)?tt(te,F,U,!1,!0):(G===Ct&&_&384||!X&&B&16)&&tt(ce,F,U),W&&Be(C)}const ee=T!=null&&ge==null;(N&&(K=Q&&Q.onVnodeUnmounted)||g||ee)&&wn(()=>{K&&oi(K,F,C),g&&_r(C,null,F,"unmounted"),ee&&(C.el=null)},U)},Be=C=>{const{type:F,el:U,anchor:W,transition:X}=C;if(F===Ct){nt(U,W);return}if(F===Sl){M(C),X&&!X.persisted&&X.afterLeave&&X.afterLeave();return}const G=()=>{r(U),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(C.shapeFlag&1&&X&&!X.persisted){const{leave:Q,delayLeave:fe}=X,ce=()=>Q(U,G);fe?fe(C.el,G,ce):ce()}else G()},nt=(C,F)=>{let U;for(;C!==F;)U=h(C),r(C),C=U;r(F)},st=(C,F,U)=>{const{bum:W,scope:X,job:G,subTree:Q,um:fe,m:ce,a:te}=C;Eh(ce),Eh(te),W&&fa(W),X.stop(),G?(G.flags|=8,Ae(Q,C,F,U)):C.vnode.el&&Q&&(Q.transition=C.vnode.transition,Ae(Q,C,F,U)),fe&&wn(fe,F),wn(()=>{C.isUnmounted=!0},F)},tt=(C,F,U,W=!1,X=!1,G=0)=>{for(let Q=G;Q<C.length;Q++)Ae(C[Q],F,U,W,X)},he=C=>{if(C.shapeFlag&6)return he(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const F=h(C.anchor||C.el),U=F&&F[Ng];return U?h(U):F};let oe=!1;const Te=(C,F,U)=>{let W;C==null?F._vnode&&(Ae(F._vnode,null,null,!0),W=F._vnode.component):b(F._vnode||null,C,F,null,null,null,U),F._vnode=C,oe||(oe=!0,ph(W),Ud(),oe=!1)},We={p:b,um:Ae,m:me,r:Be,mt:H,mc:y,pc:pe,pbc:z,n:he,o:n};return{render:Te,hydrate:void 0,createApp:i_(Te)}}function xl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function vr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function x_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function np(n,e,t=!1){const i=n.children,r=e.children;if(lt(i)&&lt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Fi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&np(o,a)),a.type===Za&&(a.patchFlag===-1&&(a=r[s]=Fi(a)),a.el=o.el),a.type===Ki&&!a.el&&(a.el=o.el)}}function S_(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function ip(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ip(e)}function Eh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function rp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?rp(e.subTree):null}const sp=n=>n.__isSuspense;function M_(n,e){e&&e.pendingBranch?lt(n)?e.effects.push(...n):e.effects.push(n):Cg(n)}const Ct=Symbol.for("v-fgt"),Za=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),Sl=Symbol.for("v-stc"),Ir=[];let In=null;function rt(n=!1){Ir.push(In=n?null:[])}function op(){Ir.pop(),In=Ir[Ir.length-1]||null}let ro=1;function Th(n,e=!1){ro+=n,n<0&&In&&e&&(In.hasOnce=!0)}function ap(n){return n.dynamicChildren=ro>0?In||wr:null,op(),ro>0&&In&&In.push(n),n}function ot(n,e,t,i,r,s){return ap(_e(n,e,t,i,r,s,!0))}function y_(n,e,t,i,r){return ap(ki(n,e,t,i,r,!0))}function lp(n){return n?n.__v_isVNode===!0:!1}function ws(n,e){return n.type===e.type&&n.key===e.key}const cp=({key:n})=>n??null,pa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Xt(n)||dn(n)||ht(n)?{i:kn,r:n,k:e,f:!!t}:n:null);function _e(n,e=null,t=null,i=0,r=null,s=n===Ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&cp(e),ref:e&&pa(e),scopeId:Fd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:kn};return a?(wa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Xt(t)?8:16),ro>0&&!o&&In&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&In.push(l),l}const ki=b_;function b_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Kg)&&(n=Ki),lp(n)){const a=hs(n,e,!0);return t&&wa(a,t),ro>0&&!s&&In&&(a.shapeFlag&6?In[In.indexOf(n)]=a:In.push(a)),a.patchFlag=-2,a}if(U_(n)&&(n=n.__vccOpts),e){e=E_(e);let{class:a,style:l}=e;a&&!Xt(a)&&(e.class=Dn(a)),Ut(l)&&(Ru(l)&&!lt(l)&&(l=an({},l)),e.style=Mu(l))}const o=Xt(n)?1:sp(n)?128:qa(n)?64:Ut(n)?4:ht(n)?2:0;return _e(n,e,t,i,r,o,s,!0)}function E_(n){return n?Ru(n)||Zd(n)?an({},n):n:null}function hs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?T_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&cp(c),ref:e&&e.ref?t&&s?lt(s)?s.concat(pa(e)):[s,pa(e)]:pa(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ct?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&hs(n.ssContent),ssFallback:n.ssFallback&&hs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Pu(u,l.clone(u)),u}function St(n=" ",e=0){return ki(Za,null,n,e)}function En(n="",e=!1){return e?(rt(),y_(Ki,null,n)):ki(Ki,null,n)}function hi(n){return n==null||typeof n=="boolean"?ki(Ki):lt(n)?ki(Ct,null,n.slice()):lp(n)?Fi(n):ki(Za,null,String(n))}function Fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:hs(n)}function wa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(lt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),wa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Zd(e)?e._ctx=kn:r===3&&kn&&(kn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ht(e)){if(i&65){wa(n,{default:e});return}e={default:e,_ctx:kn},t=32}else e=String(e),i&64?(t=16,e=[St(e)]):t=8;n.children=e,n.shapeFlag|=t}function T_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Dn([e.class,i.class]));else if(r==="style")e.style=Mu([e.style,i.style]);else if(Ha(r)){const s=e[r],o=i[r];o&&s!==o&&!(lt(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!ka(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function oi(n,e,t,i=null){ni(n,e,7,[t,i])}const A_=Xd();let w_=0;function R_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||A_,s={uid:w_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new eg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jd(i,r),emitsOptions:$d(i,r),emit:null,emitted:null,propsDefaults:Ft,inheritAttrs:i.inheritAttrs,ctx:Ft,data:Ft,props:Ft,attrs:Ft,slots:Ft,refs:Ft,setupState:Ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=s_.bind(null,s),n.ce&&n.ce(s),s}let Sn=null;const C_=()=>Sn||kn;let Ra,so;{const n=Wa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ra=e("__VUE_INSTANCE_SETTERS__",t=>Sn=t),so=e("__VUE_SSR_SETTERS__",t=>oo=t)}const vo=n=>{const e=Sn;return Ra(n),n.scope.on(),()=>{n.scope.off(),Ra(e)}},Ah=()=>{Sn&&Sn.scope.off(),Ra(null)};function up(n){return n.vnode.shapeFlag&4}let oo=!1;function P_(n,e=!1,t=!1){e&&so(e);const{props:i,children:r}=n.vnode,s=up(n);h_(n,i,s,e),m_(n,r,t||e);const o=s?D_(n,e):void 0;return e&&so(!1),o}function D_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zg);const{setup:i}=t;if(i){qi();const r=n.setupContext=i.length>1?I_(n):null,s=vo(n),o=_o(i,n,0,[n.props,r]),a=ad(o);if(Yi(),s(),(a||n.sp)&&!Ys(n)&&Vd(n),a){if(o.then(Ah,Ah),e)return o.then(l=>{so(!0);try{wh(n,l,e)}finally{so(!1)}}).catch(l=>{$a(l,n,0)});n.asyncDep=o}else wh(n,o)}else hp(n)}function wh(n,e,t){ht(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ut(e)&&(n.setupState=Dd(e)),hp(n)}function hp(n,e,t){const i=n.type;n.render||(n.render=i.render||_i);{const r=vo(n);qi();try{Jg(n)}finally{Yi(),r()}}}const L_={get(n,e){return hn(n,"get",""),n[e]}};function I_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,L_),slots:n.slots,emit:n.emit,expose:e}}function Ja(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Dd(Sg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ks)return Ks[t](n)},has(e,t){return t in e||t in Ks}})):n.proxy}function U_(n){return ht(n)&&"__vccOpts"in n}const Bs=(n,e)=>Eg(n,e,oo),N_="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yc;const Rh=typeof window<"u"&&window.trustedTypes;if(Rh)try{yc=Rh.createPolicy("vue",{createHTML:n=>n})}catch{}const fp=yc?n=>yc.createHTML(n):n=>n,F_="http://www.w3.org/2000/svg",O_="http://www.w3.org/1998/Math/MathML",Ni=typeof document<"u"?document:null,Ch=Ni&&Ni.createElement("template"),B_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Ni.createElementNS(F_,n):e==="mathml"?Ni.createElementNS(O_,n):t?Ni.createElement(n,{is:t}):Ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ni.createTextNode(n),createComment:n=>Ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ch.innerHTML=fp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ch.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},z_=Symbol("_vtc");function V_(n,e,t){const i=n[z_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ph=Symbol("_vod"),H_=Symbol("_vsh"),k_=Symbol(""),G_=/(?:^|;)\s*display\s*:/;function W_(n,e,t){const i=n.style,r=Xt(t);let s=!1;if(t&&!r){if(e)if(Xt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&zs(i,a,"")}else for(const o in e)t[o]==null&&zs(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?$_(n,o,!Xt(e)&&e?e[o]:void 0,a)||zs(i,o,a):zs(i,o,"")}}else if(r){if(e!==t){const o=i[k_];o&&(t+=";"+o),i.cssText=t,s=G_.test(t)}}else e&&n.removeAttribute("style");Ph in n&&(n[Ph]=s?i.display:"",n[H_]&&(i.display="none"))}const Lo=/\s*!important$/;function zs(n,e,t){if(lt(t))t.forEach(i=>zs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Lo.test(t)?n.setProperty(e,t.replace(Lo,""),"important"):n.setProperty(e,t);else{const i=X_(n,e);Lo.test(t)?n.setProperty(Br(i),t.replace(Lo,""),"important"):n[i]=t}}const Dh=["Webkit","Moz","ms"],Ml={};function X_(n,e){const t=Ml[e];if(t)return t;let i=Qn(e);if(i!=="filter"&&i in n)return Ml[e]=i;i=ud(i);for(let r=0;r<Dh.length;r++){const s=Dh[r]+i;if(s in n)return Ml[e]=s}return e}function $_(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Xt(i)&&t===i}const Lh="http://www.w3.org/1999/xlink";function Ih(n,e,t,i,r,s=Jm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Lh,e.slice(6,e.length)):n.setAttributeNS(Lh,e,t):t==null||s&&!fd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":xi(t)?String(t):t)}function Uh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?fp(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=fd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Ar(n,e,t,i){n.addEventListener(e,t,i)}function q_(n,e,t,i){n.removeEventListener(e,t,i)}const Nh=Symbol("_vei");function Y_(n,e,t,i,r=null){const s=n[Nh]||(n[Nh]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=J_(e);if(i){const c=s[e]=e0(i,r);Ar(n,a,c,l)}else o&&(q_(n,a,o,l),s[e]=void 0)}}const K_=/(Once|Passive|Capture)$/,Z_=/^on:?(?:Once|Passive|Capture)$/;function J_(n){let e,t;for(;(t=n.match(K_))&&!Z_.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Br(n.slice(2)),e]}let yl=0;const j_=Promise.resolve(),Q_=()=>yl||(j_.then(()=>yl=0),yl=Date.now());function e0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(lt(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&ni(c,e,5,a)}}else ni(r,e,5,[i])};return t.value=n,t.attached=Q_(),t}const Fh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,t0=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?V_(n,i,o):e==="style"?W_(n,t,i):Ha(e)?ka(e)||Y_(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n0(n,e,i,o))?(Uh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ih(n,e,i,o,s,e!=="value")):n._isVueCE&&(i0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Xt(i)))?Uh(n,Qn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ih(n,e,i,o))};function n0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Fh(e)&&ht(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Fh(e)&&Xt(t)?!1:e in n}function i0(n,e){const t=n._def.props;if(!t)return!1;const i=Qn(e);return Array.isArray(t)?t.some(r=>Qn(r)===i):Object.keys(t).some(r=>Qn(r)===i)}const Ca=n=>{const e=n.props["onUpdate:modelValue"]||!1;return lt(e)?t=>fa(e,t):e};function r0(n){n.target.composing=!0}function Oh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Rr=Symbol("_assign"),Io=Symbol("_initialValue");function bl(n,e,t){return e&&(n=n.trim()),t&&(n=Su(n)),n}const Ci={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[Io]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Io]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Rr]=Ca(r);const s=i||r.props&&r.props.type==="number";Ar(n,e?"change":"input",o=>{o.target.composing||n[Rr](bl(n.value,t,s))}),(t||s)&&Ar(n,"change",()=>{n.value=bl(n.value,t,s)}),e||(Ar(n,"compositionstart",r0),Ar(n,"compositionend",Oh),Ar(n,"change",Oh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[Io];delete n[Io],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[Rr](bl(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Rr]=Ca(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Su(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},xr={deep:!0,created(n,e,t){n[Rr]=Ca(t),Ar(n,"change",()=>{const i=n._modelValue,r=s0(n),s=n.checked,o=n[Rr];if(lt(i)){const a=dd(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(us(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(dp(n,s))})},mounted:Bh,beforeUpdate(n,e,t){n[Rr]=Ca(t),Bh(n,e,t)}};function Bh(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(lt(e))r=dd(e,i.props.value)>-1;else if(us(e))r=e.has(i.props.value);else{if(e===t)return;r=ms(e,dp(n,!0))}n.checked!==r&&(n.checked=r)}function s0(n){return"_value"in n?n._value:n.value}function dp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const o0=an({patchProp:t0},B_);let zh;function a0(){return zh||(zh=__(o0))}const l0=((...n)=>{const e=a0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=u0(i);if(!r)return;const s=e._component;!ht(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,c0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function c0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function u0(n){return Xt(n)?document.querySelector(n):n}const El=Math.PI/180,Uo={haStar:1,cStar:.25,rhoFStar:.38};function h0(n,e){return{x:n*(Math.sin(e)-e*Math.cos(e)),y:n*(Math.cos(e)+e*Math.sin(e))}}function f0(n){return Math.tan(n)-n}function Vh(n,e){const t=n/e;return Math.sqrt(Math.max(0,t*t-1))}function Hh(n,e){const t=Math.cos(e),i=Math.sin(e);return{x:n.x*t-n.y*i,y:n.x*i+n.y*t}}function Vs(n,e){return{x:n*Math.cos(e),y:n*Math.sin(e)}}function d0(n,e,t,i){const r=[];for(let s=0;s<=i;s++){const o=e+(t-e)*s/i;r.push(Vs(n,o))}return r}function p0(n,e=16){const{z:t,module:i,alpha:r}=n,s=i*t/2,o=s*Math.cos(r),a=s+Uo.haStar*i,l=s-(Uo.haStar+Uo.cStar)*i,c=Math.PI*i,u=c*Math.cos(r),f=Math.PI*i/2,h=2*Math.PI/t,d=o>l,v=f0(r),b=Math.PI/(2*t)+v,m=Vh(a,o),p=Math.atan(m),w=m-Math.atan(m),P=Math.PI/(2*t)+v-w,M=2*a*P,R=P<=0,A=2/(Math.sin(r)*Math.sin(r)),O=t<A,y=oe=>({x:-oe.x,y:oe.y}),I=d?0:Vh(l,o),z=(oe,Te,We,Le)=>{const C=[];for(let F=0;F<=Le;F++){const U=Te+(We-Te)*F/Le,W=Hh(h0(o,U),b);C.push(oe===1?y(W):W)}return C},k=6,ne=oe=>{const Te=-oe,We=Math.PI/2+Te*b,Le=z(oe,I,I,1);if(!d)return{j:Le[0],jAngle:Math.atan2(Le[0].y,Le[0].x),fillet:[],flankLo:null};const C=Math.PI/2+Te*(h/2),F=(o*o-l*l)/(2*l),U=Math.abs(We-C),W=Math.sin(U),X=W<1?l*W/(1-W):1/0,G=Math.max(0,Math.min(Uo.rhoFStar*i,F*.999,X*.999)),Q=l+G,fe=Math.asin(Math.min(1,G/Q)),ce=oe===1?We-fe:We+fe,te=Vs(Q,ce),B=Vs(l,ce),_=Math.sqrt(Math.max(0,Q*Q-G*G)),D=Vs(_,We),ge=Math.atan2(B.y-te.y,B.x-te.x);let g=Math.atan2(D.y-te.y,D.x-te.x)-ge;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;g=Math.abs(g)*-oe;const N=[];for(let K=0;K<=k;K++){const ee=ge+g*K/k;N.push({x:te.x+G*Math.cos(ee),y:te.y+G*Math.sin(ee)})}return{j:B,jAngle:ce,fillet:N,flankLo:Le[0]}},ie=ne(1),H=ne(-1),J=z(1,I,m,e),ae=z(-1,I,m,e),j=J[e],pe=ae[e],le=Math.atan2(j.y,j.x),ve=Math.atan2(pe.y,pe.x),me=[];me.push(...ie.fillet),ie.flankLo&&me.push(ie.flankLo),me.push(...J.slice(1));let Ae=ve-le;for(;Ae>Math.PI;)Ae-=2*Math.PI;for(;Ae<-Math.PI;)Ae+=2*Math.PI;const Be=Math.max(4,Math.ceil(Math.abs(Ae)/h*24));me.push(...d0(a,le,le+Ae,Be).slice(1));for(let oe=e-1;oe>=0;oe--)me.push(ae[oe]);H.flankLo&&(me.push(H.flankLo),me.push(H.fillet[H.fillet.length-1])),me.push(...H.fillet.slice(0,-1).reverse());const nt=[],st=6,tt=oe=>{const Te=nt[nt.length-1];(!Te||Math.hypot(oe.x-Te.x,oe.y-Te.y)>1e-10)&&nt.push(oe)};for(let oe=0;oe<t;oe++){const Te=oe*h,We=me.map(F=>Hh(F,Te)),Le=H.jAngle+Te,C=ie.jAngle+(oe+1)*h;for(const F of We.slice(0,-1))tt(F);for(let F=1;F<=st;F++){const U=Le+(C-Le)*F/st;tt(Vs(l,U))}}if(nt.length>1){const oe=nt[0],Te=nt[nt.length-1];Math.hypot(oe.x-Te.x,oe.y-Te.y)<1e-10&&nt.pop()}const he=Array.from({length:t},(oe,Te)=>Math.PI/2+Te*h);return{input:n,pitchR:s,baseR:o,addendumR:a,dedendumR:l,baseAboveRoot:d,circularPitch:c,basePitch:u,toothThickness:f,beta:b,taTip:m,zMinValue:A,undercut:O,alphaTip:p,tipThickness:M,pointed:R,toothProfile:me,outline:nt,toothCenterAngles:he,jAngleRight:ie.jAngle,jAngleLeft:H.jAngle}}function kh(n,e,t,i){const r=Math.cos(i),s=Math.sin(i);return n.map(o=>({x:e+o.x*r-o.y*s,y:t+o.x*s+o.y*r}))}function m0(n){const e=[];return(!Number.isFinite(n.z)||n.z<4||Math.abs(n.z-Math.round(n.z))>1e-9)&&e.push("齿数必须为 ≥4 的整数"),(!(n.module>0)||!Number.isFinite(n.module))&&e.push("模数必须 > 0"),(!(n.alpha>0)||n.alpha>=Math.PI/2)&&e.push("压力角必须在 (0°, 90°) 内"),n.faceWidth>0||e.push("齿宽必须 > 0"),e}function Gh(n){const{g1:e,g2:t,centerDistance:i}=n,r=e.pitchR+t.pitchR,s=e.input.alpha,o=Math.min(1,Math.max(-1,r*Math.cos(s)/i)),a=Math.acos(o),l=e.baseR/Math.cos(a),c=t.baseR/Math.cos(a),u=i-r,f=Ae=>Math.tan(Ae)-Ae,h=2*i*(f(a)-f(s)),d=h*Math.cos(a),v=i-e.addendumR-t.dedendumR,b=i-t.addendumR-e.dedendumR,m=Math.abs(e.basePitch-t.basePitch),p=m<1e-6,w=[],P=i<e.addendumR+t.addendumR;P&&w.push("中心距小于两齿顶圆半径之和，齿顶圆交叉，必然实体干涉"),(v<0||b<0)&&w.push("存在齿顶与对方齿根圆交叉（顶隙为负）"),Math.abs(u)>1e-9&&(u>0?w.push(`非标准中心距（+${u.toFixed(3)} mm）：有侧隙安装，啮合角增大，不再是无侧隙啮合`):w.push("中心距小于标准值：无侧隙空间，齿面相互挤压（仅教学演示干涉）")),p||w.push(`两轮基节不等（差 ${m.toFixed(4)} mm），不能正确啮合`);const M={x:l,y:0},R=Math.sin(a),A=Math.cos(a),O=-l*R,y={x:M.x+O*R,y:M.y+O*A},I=c*R,z={x:M.x+I*R,y:M.y+I*A},k=(Ae,Be)=>{const nt=M.x-Ae,st=M.y,tt=2*(nt*R+st*A),he=nt*nt+st*st-Be*Be,oe=tt*tt-4*he;if(oe<0)return[];const Te=Math.sqrt(oe);return[(-tt-Te)/2,(-tt+Te)/2]},ne=k(0,e.addendumR),H=k(i,t.addendumR).filter(Ae=>Ae<=1e-9),J=ne.filter(Ae=>Ae>=-1e-9),ae=H.length?Math.max(...H):O,j=J.length?Math.min(...J):I,pe={x:M.x+ae*R,y:M.y+ae*A},le={x:M.x+j*R,y:M.y+j*A},ve=Math.max(0,j-ae),me=ve/e.basePitch;return{a0:r,a:i,alphaPrime:a,pitchR1:l,pitchR2:c,deltaA:u,backlashTangential:Math.max(0,h),backlashNormal:Math.max(0,d),clearance12:v,clearance21:b,basePitchMatch:p,basePitchDiff:m,addendumOverlap:P,actionLine:{p0:pe,p1:le},tangentLine:{p0:y,p1:z},pitchPoint:M,pathOfContact:ve,contactRatio:me,ok:p&&!P,warnings:w}}function ts(n,e,t,i){const r=n.alphaPrime,s=Math.sin(r),o=Math.cos(r),a=Math.tan(r)+i/e.baseR,l=Math.tan(r)-i/t.baseR,c=a-Math.atan(a),u=l-Math.atan(l),f=Math.PI/2+e.beta-c,h=Math.PI/2+t.beta-u,d=Math.atan2(i*o,n.pitchR1+i*s),v=Math.atan2(i*o,-n.pitchR2+i*s),b=d-f,m=v-h;return{phi1:b,phi2:m,t1:a,t2:l}}function bc(n,e,t){const i=n.alphaPrime,r=Math.sin(i),s=Math.cos(i);let o=0;for(let a=0;a<40;a++){const l=Math.tan(i)+o/e.baseR,c=l-Math.atan(l),u=Math.PI/2+e.beta-c,h=Math.atan2(o*s,n.pitchR1+o*r)-u-t;if(o-=h/(1/e.baseR),Math.abs(h)<1e-13)break}return o}function g0(n,e,t){const i=n.alphaPrime,r=Math.sin(i),s=Math.cos(i);let o=0;for(let a=0;a<40;a++){const l=Math.tan(i)-o/e.baseR,c=l-Math.atan(l),u=Math.PI/2+e.beta-c,h=Math.atan2(o*s,-n.pitchR2+o*r)-u-t;if(o-=h/(-1/e.baseR),Math.abs(h)<1e-13)break}return o}function pp(n){const e=Math.sin(n.alphaPrime),t=Math.cos(n.alphaPrime),i=(n.actionLine.p0.x-n.pitchPoint.x)*e+(n.actionLine.p0.y-n.pitchPoint.y)*t,r=(n.actionLine.p1.x-n.pitchPoint.x)*e+(n.actionLine.p1.y-n.pitchPoint.y)*t;return[Math.min(i,r),Math.max(i,r)]}function Pa(n,e,t){const[i,r]=pp(n);if(!(t>1e-12))return e;const s=(i+r)/2,o=Math.round((e-s)/t);let a=e-o*t;return a<i&&(a=i),a>r&&(a=r),a}const _0=1e-6,v0=1e-8;function x0(n,e){return Math.abs(n-e)<=_0}function S0(n,e){return Math.abs(n-e)<=v0}function M0(n,e){const t=[];if(x0(n.input.module,e.input.module)||t.push(`两轮模数不匹配（m=${n.input.module} vs m=${e.input.module}），基节不等，不能啮合`),!S0(n.input.alpha,e.input.alpha)){const i=r=>(r*180/Math.PI).toFixed(3);t.push(`两轮压力角不匹配（α=${i(n.input.alpha)}° vs α=${i(e.input.alpha)}°），不能啮合`)}return t}function y0(n){const{mode:e,gearInputs:t,centerDistances:i}=n,r=e==="chain"?3:2,s=[[],[],[]],o=[null,null,null];for(let d=0;d<r;d++)s[d]=m0(t[d]),s[d].length||(o[d]=p0(t[d]));const a=[];for(let d=0;d<r;d++)s[d].length&&a.push(`轮 ${d+1} 参数非法：${s[d].join("；")}`);const l=(d,v)=>{const b=o[d],m=o[v];return b&&m?b.pitchR+m.pitchR:0},c=[i[0]??l(0,1),i[1]??l(1,2)],u=[0,c[0],c[0]+c[1]],f=[],h=[{index:0,li:0,ri:1,used:!0},{index:1,li:1,ri:2,used:e==="chain"}];for(const d of h){if(!d.used)continue;const v=o[d.li],b=o[d.ri],m=[];let p=!1,w;!v||!b?(p=!0,m.push("齿轮参数非法，无法形成该段啮合"),w=v&&b?Gh({g1:v,g2:b,centerDistance:c[d.index]}):null):(m.push(...M0(v,b)),p=m.length>0,w=Gh({g1:v,g2:b,centerDistance:c[d.index]})),f.push({index:d.index,leftIndex:d.li,rightIndex:d.ri,offsetX:u[d.li],mesh:w,rejected:p,rejectReasons:m})}for(const d of f)d.rejected&&a.push(...d.rejectReasons.map(v=>`段${d.index+1}：${v}`));return{mode:e,gearCount:r,gears:o,gearErrors:s,centers:u,segments:f,valid:a.length===0,errors:a}}function mp(n){if(!n.valid)throw new Error("传动链未形成（参数不匹配），无严格相位")}function b0(n,e,t){const i=n.segments.find(s=>s.index===e),r=n.gears[i.leftIndex];return Pa(i.mesh,t,r.basePitch)}function Tl(n,e){mp(n);const t=n.segments.find(h=>h.index===0),i=n.gears[0],r=n.gears[1],s=bc(t.mesh,i,e),o=ts(t.mesh,i,r,s).phi2;let a=0,l=0;if(n.mode==="chain"){const h=n.segments.find(v=>v.index===1),d=n.gears[2];a=bc(h.mesh,r,o),l=ts(h.mesh,r,d,a).phi2}const c=b0(n,0,s),u=n.segments.find(h=>h.index===1),f=u?Pa(u.mesh,a,r.basePitch):0;return{pose:[e,o,l],s:[c,f]}}function E0(n,e,t){mp(n);const i=n.segments.find(f=>f.index===0),r=n.gears[0],s=n.gears[1];let o,a,l,c=0,u=0;if(e===0){const f=ts(i.mesh,r,s,t);if(o=f.phi1,a=f.phi2,l=t,n.mode==="chain"){const h=n.segments.find(b=>b.index===1),d=n.gears[2],v=bc(h.mesh,s,a);u=ts(h.mesh,s,d,v).phi2,c=Pa(h.mesh,v,s.basePitch)}}else{const f=n.segments.find(b=>b.index===1),h=n.gears[2],d=ts(f.mesh,s,h,t);a=d.phi1,u=d.phi2,c=t;const v=g0(i.mesh,s,a);o=ts(i.mesh,r,s,v).phi1,l=Pa(i.mesh,v,r.basePitch)}return{pose:[o,a,u],s:[l,c]}}function T0(n){const e=n.segments.map(i=>{const r=n.gears[i.leftIndex].input.z,s=n.gears[i.rightIndex].input.z;return-r/s}),t=e.reduce((i,r)=>i*r,1);return{segmentRatios:e,total:t,sameDirection:t>0}}const A0="modulepreload",w0=function(n,e){return new URL(n,e).href},Wh={},R0=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=o(t.map(u=>{if(u=w0(u,i),u in Wh)return;Wh[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let b=a.length-1;b>=0;b--){const m=a[b];if(m.href===u&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":A0,f||(v.as="script"),v.crossOrigin="",v.href=u,c&&v.setAttribute("nonce",c),document.head.appendChild(v),f)return new Promise((b,m)=>{v.addEventListener("load",b),v.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};async function C0(n={}){var e,t=n,i=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){const{createRequire:S}=await R0(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var o=S(import.meta.url)}var a=import.meta.url,l="";function c(S){return t.locateFile?t.locateFile(S,l):l+S}var u,f;if(s){var h=o("fs");a.startsWith("file:")&&(l=o("path").dirname(o("url").fileURLToPath(a))+"/"),f=S=>{S=m(S)?new URL(S):S;var x=h.readFileSync(S);return x},u=async(S,x=!0)=>{S=m(S)?new URL(S):S;var L=h.readFileSync(S,x?void 0:"utf8");return L},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(i||r){try{l=new URL(".",a).href}catch{}r&&(f=S=>{var x=new XMLHttpRequest;return x.open("GET",S,!1),x.responseType="arraybuffer",x.send(null),new Uint8Array(x.response)}),u=async S=>{if(m(S))return new Promise((L,V)=>{var Z=new XMLHttpRequest;Z.open("GET",S,!0),Z.responseType="arraybuffer",Z.onload=()=>{if(Z.status==200||Z.status==0&&Z.response){L(Z.response);return}V(Z.status)},Z.onerror=V,Z.send(null)});var x=await fetch(S,{credentials:"same-origin"});if(x.ok)return x.arrayBuffer();throw new Error(x.status+" : "+x.url)}}console.log.bind(console);var d=console.error.bind(console),v,b=!1,m=S=>S.startsWith("file://"),p,w,P,M,R,A,O,y,I,z,k,ne,ie=!1;function H(){var S=wo.buffer;P=new Int8Array(S),R=new Int16Array(S),t.HEAPU8=M=new Uint8Array(S),A=new Uint16Array(S),O=new Int32Array(S),y=new Uint32Array(S),I=new Float32Array(S),z=new Float64Array(S),k=new BigInt64Array(S),ne=new BigUint64Array(S)}function J(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Le(t.preRun.shift());he(We)}function ae(){ie=!0,Ts.E()}function j(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Te(t.postRun.shift());he(oe)}function pe(S){t.onAbort?.(S),S="Aborted("+S+")",d(S),b=!0,S+=". Build with -sASSERTIONS for more info.";var x=new WebAssembly.RuntimeError(S);throw w?.(x),x}var le;function ve(){return t.locateFile?c("clipper2z.wasm"):new URL(""+new URL("clipper2z-Cj78y2Ub.wasm",import.meta.url).href,import.meta.url).href}function me(S){if(S==le&&v)return new Uint8Array(v);if(f)return f(S);throw"both async and sync fetching of the wasm failed"}async function Ae(S){if(!v)try{var x=await u(S);return new Uint8Array(x)}catch{}return me(S)}async function Be(S,x){try{var L=await Ae(S),V=await WebAssembly.instantiate(L,x);return V}catch(Z){d(`failed to asynchronously prepare wasm: ${Z}`),pe(Z)}}async function nt(S,x,L){if(!S&&!m(x)&&!s)try{var V=fetch(x,{credentials:"same-origin"}),Z=await WebAssembly.instantiateStreaming(V,L);return Z}catch(xe){d(`wasm streaming compile failed: ${xe}`),d("falling back to ArrayBuffer instantiation")}return Be(x,L)}function st(){var S={a:Um};return S}async function tt(){function S(xe,ye){return Ts=xe.exports,Im(Ts),H(),Ts}function x(xe){return S(xe.instance)}var L=st();if(t.instantiateWasm)return new Promise((xe,ye)=>{t.instantiateWasm(L,(be,Pe)=>{xe(S(be))})});le??=ve();var V=await nt(v,le,L),Z=x(V);return Z}var he=S=>{for(;S.length>0;)S.shift()(t)},oe=[],Te=S=>oe.push(S),We=[],Le=S=>We.push(S);class C{constructor(x){this.excPtr=x,this.ptr=x-24}set_type(x){y[this.ptr+4>>2]=x}get_type(){return y[this.ptr+4>>2]}set_destructor(x){y[this.ptr+8>>2]=x}get_destructor(){return y[this.ptr+8>>2]}set_caught(x){x=x?1:0,P[this.ptr+12]=x}get_caught(){return P[this.ptr+12]!=0}set_rethrown(x){x=x?1:0,P[this.ptr+13]=x}get_rethrown(){return P[this.ptr+13]!=0}init(x,L){this.set_adjusted_ptr(0),this.set_type(x),this.set_destructor(L)}set_adjusted_ptr(x){y[this.ptr+16>>2]=x}get_adjusted_ptr(){return y[this.ptr+16>>2]}}var F=0,U=(S,x,L)=>{var V=new C(S);throw V.init(x,L),F=S,F},W=()=>pe(""),X={},G=S=>{for(;S.length;){var x=S.pop(),L=S.pop();L(x)}};function Q(S){return this.fromWireType(y[S>>2])}var fe={},ce={},te={},B=class extends Error{constructor(x){super(x),this.name="InternalError"}},_=S=>{throw new B(S)},D=(S,x,L)=>{S.forEach(be=>te[be]=x);function V(be){var Pe=L(be);Pe.length!==S.length&&_("Mismatched type converter count");for(var et=0;et<S.length;++et)ee(S[et],Pe[et])}var Z=new Array(x.length),xe=[],ye=0;x.forEach((be,Pe)=>{ce.hasOwnProperty(be)?Z[Pe]=ce[be]:(xe.push(be),fe.hasOwnProperty(be)||(fe[be]=[]),fe[be].push(()=>{Z[Pe]=ce[be],++ye,ye===xe.length&&V(Z)}))}),xe.length===0&&V(Z)},ge=S=>{var x=X[S];delete X[S];var L=x.rawConstructor,V=x.rawDestructor,Z=x.fields,xe=Z.map(ye=>ye.getterReturnType).concat(Z.map(ye=>ye.setterArgumentType));D([S],xe,ye=>{var be={};return Z.forEach((Pe,et)=>{var Qe=Pe.fieldName,Tt=ye[et],Gt=ye[et].optional,yt=Pe.getter,Wt=Pe.getterContext,nn=ye[et+Z.length],$n=Pe.setter,bn=Pe.setterContext;be[Qe]={read:wi=>Tt.fromWireType(yt(Wt,wi)),write:(wi,gn)=>{var Ro=[];$n(bn,wi,nn.toWireType(Ro,gn)),G(Ro)},optional:Gt}}),[{name:x.name,fromWireType:Pe=>{var et={};for(var Qe in be)et[Qe]=be[Qe].read(Pe);return V(Pe),et},toWireType:(Pe,et)=>{for(var Qe in be)if(!(Qe in et)&&!be[Qe].optional)throw new TypeError(`Missing field: "${Qe}"`);var Tt=L();for(Qe in be)be[Qe].write(Tt,et[Qe]);return Pe!==null&&Pe.push(V,Tt),Tt},readValueFromPointer:Q,destructorFunction:V}]})},T=S=>{for(var x="";;){var L=M[S++];if(!L)return x;x+=String.fromCharCode(L)}},g=class extends Error{constructor(x){super(x),this.name="BindingError"}},N=S=>{throw new g(S)};function K(S,x,L={}){var V=x.name;if(S||N(`type "${V}" must have a positive integer typeid pointer`),ce.hasOwnProperty(S)){if(L.ignoreDuplicateRegistrations)return;N(`Cannot register type '${V}' twice`)}if(ce[S]=x,delete te[S],fe.hasOwnProperty(S)){var Z=fe[S];delete fe[S],Z.forEach(xe=>xe())}}function ee(S,x,L={}){return K(S,x,L)}var we=(S,x,L)=>{switch(x){case 1:return L?V=>P[V]:V=>M[V];case 2:return L?V=>R[V>>1]:V=>A[V>>1];case 4:return L?V=>O[V>>2]:V=>y[V>>2];case 8:return L?V=>k[V>>3]:V=>ne[V>>3];default:throw new TypeError(`invalid integer width (${x}): ${S}`)}},Re=(S,x,L,V,Z)=>{x=T(x);const xe=V===0n;let ye=be=>be;if(xe){const be=L*8;ye=Pe=>BigInt.asUintN(be,Pe),Z=ye(Z)}ee(S,{name:x,fromWireType:ye,toWireType:(be,Pe)=>(typeof Pe=="number"&&(Pe=BigInt(Pe)),Pe),readValueFromPointer:we(x,L,!xe),destructorFunction:null})},de=(S,x,L,V)=>{x=T(x),ee(S,{name:x,fromWireType:function(Z){return!!Z},toWireType:function(Z,xe){return xe?L:V},readValueFromPointer:function(Z){return this.fromWireType(M[Z])},destructorFunction:null})},Me=S=>({count:S.count,deleteScheduled:S.deleteScheduled,preservePointerOnDelete:S.preservePointerOnDelete,ptr:S.ptr,ptrType:S.ptrType,smartPtr:S.smartPtr,smartPtrType:S.smartPtrType}),Ce=S=>{function x(L){return L.$$.ptrType.registeredClass.name}N(x(S)+" instance already deleted")},ke=!1,Fe=S=>{},Ie=S=>{S.smartPtr?S.smartPtrType.rawDestructor(S.smartPtr):S.ptrType.registeredClass.rawDestructor(S.ptr)},Ze=S=>{S.count.value-=1;var x=S.count.value===0;x&&Ie(S)},je=S=>globalThis.FinalizationRegistry?(ke=new FinalizationRegistry(x=>{Ze(x.$$)}),je=x=>{var L=x.$$,V=!!L.smartPtr;if(V){var Z={$$:L};ke.register(x,Z,x)}return x},Fe=x=>ke.unregister(x),je(S)):(je=x=>x,S),ct=()=>{let S=Y.prototype;Object.assign(S,{isAliasOf(L){if(!(this instanceof Y)||!(L instanceof Y))return!1;var V=this.$$.ptrType.registeredClass,Z=this.$$.ptr;L.$$=L.$$;for(var xe=L.$$.ptrType.registeredClass,ye=L.$$.ptr;V.baseClass;)Z=V.upcast(Z),V=V.baseClass;for(;xe.baseClass;)ye=xe.upcast(ye),xe=xe.baseClass;return V===xe&&Z===ye},clone(){if(this.$$.ptr||Ce(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var L=je(Object.create(Object.getPrototypeOf(this),{$$:{value:Me(this.$$)}}));return L.$$.count.value+=1,L.$$.deleteScheduled=!1,L},delete(){this.$$.ptr||Ce(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&N("Object already scheduled for deletion"),Fe(this),Ze(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ce(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&N("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const x=Symbol.dispose;x&&(S[x]=S.delete)};function Y(){}var Ue=(S,x)=>Object.defineProperty(x,"name",{value:S}),Se={},Oe=(S,x,L)=>{if(S[x].overloadTable===void 0){var V=S[x];S[x]=function(...Z){return S[x].overloadTable.hasOwnProperty(Z.length)||N(`Function '${L}' called with an invalid number of arguments (${Z.length}) - expects one of (${S[x].overloadTable})!`),S[x].overloadTable[Z.length].apply(this,Z)},S[x].overloadTable=[],S[x].overloadTable[V.argCount]=V}},ze=(S,x,L)=>{t.hasOwnProperty(S)?((L===void 0||t[S].overloadTable!==void 0&&t[S].overloadTable[L]!==void 0)&&N(`Cannot register public name '${S}' twice`),Oe(t,S,S),t[S].overloadTable.hasOwnProperty(L)&&N(`Cannot register multiple overloads of a function with the same number of arguments (${L})!`),t[S].overloadTable[L]=x):(t[S]=x,t[S].argCount=L)},Ee=48,Je=57,Ke=S=>{S=S.replace(/[^a-zA-Z0-9_]/g,"$");var x=S.charCodeAt(0);return x>=Ee&&x<=Je?`_${S}`:S};function Lt(S,x,L,V,Z,xe,ye,be){this.name=S,this.constructor=x,this.instancePrototype=L,this.rawDestructor=V,this.baseClass=Z,this.getActualType=xe,this.upcast=ye,this.downcast=be,this.pureVirtualFunctions=[]}var gt=(S,x,L)=>{for(;x!==L;)x.upcast||N(`Expected null or instance of ${L.name}, got an instance of ${x.name}`),S=x.upcast(S),x=x.baseClass;return S},mn=S=>{if(S===null)return"null";var x=typeof S;return x==="object"||x==="array"||x==="function"?S.toString():""+S};function Nn(S,x){if(x===null)return this.isReference&&N(`null is not a valid ${this.name}`),0;x.$$||N(`Cannot pass "${mn(x)}" as a ${this.name}`),x.$$.ptr||N(`Cannot pass deleted object as a pointer of type ${this.name}`);var L=x.$$.ptrType.registeredClass,V=gt(x.$$.ptr,L,this.registeredClass);return V}function sl(S,x){var L;if(x===null)return this.isReference&&N(`null is not a valid ${this.name}`),this.isSmartPointer?(L=this.rawConstructor(),S!==null&&S.push(this.rawDestructor,L),L):0;(!x||!x.$$)&&N(`Cannot pass "${mn(x)}" as a ${this.name}`),x.$$.ptr||N(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&x.$$.ptrType.isConst&&N(`Cannot convert argument of type ${x.$$.smartPtrType?x.$$.smartPtrType.name:x.$$.ptrType.name} to parameter type ${this.name}`);var V=x.$$.ptrType.registeredClass;if(L=gt(x.$$.ptr,V,this.registeredClass),this.isSmartPointer)switch(x.$$.smartPtr===void 0&&N("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:x.$$.smartPtrType===this?L=x.$$.smartPtr:N(`Cannot convert argument of type ${x.$$.smartPtrType?x.$$.smartPtrType.name:x.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:L=x.$$.smartPtr;break;case 2:if(x.$$.smartPtrType===this)L=x.$$.smartPtr;else{var Z=x.clone();L=this.rawShare(L,Ge.toHandle(()=>Z.delete())),S!==null&&S.push(this.rawDestructor,L)}break;default:N("Unsupporting sharing policy")}return L}function ol(S,x){if(x===null)return this.isReference&&N(`null is not a valid ${this.name}`),0;x.$$||N(`Cannot pass "${mn(x)}" as a ${this.name}`),x.$$.ptr||N(`Cannot pass deleted object as a pointer of type ${this.name}`),x.$$.ptrType.isConst&&N(`Cannot convert argument of type ${x.$$.ptrType.name} to parameter type ${this.name}`);var L=x.$$.ptrType.registeredClass,V=gt(x.$$.ptr,L,this.registeredClass);return V}var xs=(S,x,L)=>{if(x===L)return S;if(L.baseClass===void 0)return null;var V=xs(S,x,L.baseClass);return V===null?null:L.downcast(V)},Ss={},al=(S,x)=>{for(x===void 0&&N("ptr should not be undefined");S.baseClass;)x=S.upcast(x),S=S.baseClass;return x},Mo=(S,x)=>(x=al(S,x),Ss[x]),pr=(S,x)=>{(!x.ptrType||!x.ptr)&&_("makeClassHandle requires ptr and ptrType");var L=!!x.smartPtrType,V=!!x.smartPtr;return L!==V&&_("Both smartPtrType and smartPtr must be specified"),x.count={value:1},je(Object.create(S,{$$:{value:x,writable:!0}}))};function Ti(S){var x=this.getPointee(S);if(!x)return this.destructor(S),null;var L=Mo(this.registeredClass,x);if(L!==void 0){if(L.$$.count.value===0)return L.$$.ptr=x,L.$$.smartPtr=S,L.clone();var V=L.clone();return this.destructor(S),V}function Z(){return this.isSmartPointer?pr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:x,smartPtrType:this,smartPtr:S}):pr(this.registeredClass.instancePrototype,{ptrType:this,ptr:S})}var xe=this.registeredClass.getActualType(x),ye=Se[xe];if(!ye)return Z.call(this);var be;this.isConst?be=ye.constPointerType:be=ye.pointerType;var Pe=xs(x,this.registeredClass,be.registeredClass);return Pe===null?Z.call(this):this.isSmartPointer?pr(be.registeredClass.instancePrototype,{ptrType:be,ptr:Pe,smartPtrType:this,smartPtr:S}):pr(be.registeredClass.instancePrototype,{ptrType:be,ptr:Pe})}var Ms=()=>{Object.assign(mr.prototype,{getPointee(S){return this.rawGetPointee&&(S=this.rawGetPointee(S)),S},destructor(S){this.rawDestructor?.(S)},readValueFromPointer:Q,fromWireType:Ti})};function mr(S,x,L,V,Z,xe,ye,be,Pe,et,Qe){this.name=S,this.registeredClass=x,this.isReference=L,this.isConst=V,this.isSmartPointer=Z,this.pointeeType=xe,this.sharingPolicy=ye,this.rawGetPointee=be,this.rawConstructor=Pe,this.rawShare=et,this.rawDestructor=Qe,!Z&&x.baseClass===void 0?V?(this.toWireType=Nn,this.destructorFunction=null):(this.toWireType=ol,this.destructorFunction=null):this.toWireType=sl}var ys=(S,x,L)=>{t.hasOwnProperty(S)||_("Replacing nonexistent public symbol"),t[S].overloadTable!==void 0&&L!==void 0?t[S].overloadTable[L]=x:(t[S]=x,t[S].argCount=L)},gr=[],yo=S=>{var x=gr[S];return x||(gr[S]=x=th.get(S)),x},Jt=(S,x,L=!1)=>{S=T(S);function V(){var xe=yo(x);return xe}var Z=V();return typeof Z!="function"&&N(`unknown function pointer with signature ${S}: ${x}`),Z};class bo extends Error{}var bs=S=>{var x=eh(S),L=T(x);return er(x),L},ji=(S,x)=>{var L=[],V={};function Z(xe){if(!V[xe]&&!ce[xe]){if(te[xe]){te[xe].forEach(Z);return}L.push(xe),V[xe]=!0}}throw x.forEach(Z),new bo(`${S}: `+L.map(bs).join([", "]))},ll=(S,x,L,V,Z,xe,ye,be,Pe,et,Qe,Tt,Gt)=>{Qe=T(Qe),xe=Jt(Z,xe),be&&=Jt(ye,be),et&&=Jt(Pe,et),Gt=Jt(Tt,Gt);var yt=Ke(Qe);ze(yt,function(){ji(`Cannot construct ${Qe} due to unbound types`,[V])}),D([S,x,L],V?[V]:[],Wt=>{Wt=Wt[0];var nn,$n;V?(nn=Wt.registeredClass,$n=nn.instancePrototype):$n=Y.prototype;var bn=Ue(Qe,function(...hl){if(Object.getPrototypeOf(this)!==wi)throw new g(`Use 'new' to construct ${Qe}`);if(gn.constructor_body===void 0)throw new g(`${Qe} has no accessible constructor`);var oh=gn.constructor_body[hl.length];if(oh===void 0)throw new g(`Tried to invoke ctor of ${Qe} with invalid number of parameters (${hl.length}) - expected (${Object.keys(gn.constructor_body).toString()}) parameters instead!`);return oh.apply(this,hl)}),wi=Object.create($n,{constructor:{value:bn}});bn.prototype=wi;var gn=new Lt(Qe,bn,wi,Gt,nn,xe,be,et);gn.baseClass&&(gn.baseClass.__derivedClasses??=[],gn.baseClass.__derivedClasses.push(gn));var Ro=new mr(Qe,gn,!0,!1,!1),rh=new mr(Qe+"*",gn,!1,!1,!1),sh=new mr(Qe+" const*",gn,!1,!0,!1);return Se[S]={pointerType:rh,constPointerType:sh},ys(yt,bn),[Ro,rh,sh]})},Es=(S,x)=>{for(var L=[],V=0;V<S;V++)L.push(y[x+V*4>>2]);return L};function Eo(S){for(var x=1;x<S.length;++x)if(S[x]!==null&&S[x].destructorFunction===void 0)return!0;return!1}function To(S,x,L,V){var Z=Eo(S),xe=S.length-2,ye=[],be=["fn"];x&&be.push("thisWired");for(var Pe=0;Pe<xe;++Pe)ye.push(`arg${Pe}`),be.push(`arg${Pe}Wired`);ye=ye.join(","),be=be.join(",");var et=`return function (${ye}) {
`;Z&&(et+=`var destructors = [];
`);var Qe=Z?"destructors":"null",Tt=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];x&&(et+=`var thisWired = toClassParamWire(${Qe}, this);
`);for(var Pe=0;Pe<xe;++Pe){var Gt=`toArg${Pe}Wire`;et+=`var arg${Pe}Wired = ${Gt}(${Qe}, arg${Pe});
`,Tt.push(Gt)}if(et+=(L||V?"var rv = ":"")+`invoker(${be});
`,Z)et+=`runDestructors(destructors);
`;else for(var Pe=x?1:2;Pe<S.length;++Pe){var yt=Pe===1?"thisWired":"arg"+(Pe-2)+"Wired";S[Pe].destructorFunction!==null&&(et+=`${yt}_dtor(${yt});
`,Tt.push(`${yt}_dtor`))}return L&&(et+=`var ret = fromRetWire(rv);
return ret;
`),et+=`}
`,new Function(Tt,et)}function E(S,x,L,V,Z,xe){var ye=x.length;ye<2&&N("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var be=x[1]!==null&&L!==null,Pe=Eo(x),et=!x[0].isVoid,Qe=x[0],Tt=x[1],Gt=[S,N,V,Z,G,Qe.fromWireType.bind(Qe),Tt?.toWireType.bind(Tt)],yt=2;yt<ye;++yt){var Wt=x[yt];Gt.push(Wt.toWireType.bind(Wt))}if(!Pe)for(var yt=be?1:2;yt<x.length;++yt)x[yt].destructorFunction!==null&&Gt.push(x[yt].destructorFunction);var $n=To(x,be,et,xe)(...Gt);return Ue(S,$n)}var $=(S,x,L,V,Z,xe)=>{var ye=Es(x,L);Z=Jt(V,Z),D([],[S],be=>{be=be[0];var Pe=`constructor ${be.name}`;if(be.registeredClass.constructor_body===void 0&&(be.registeredClass.constructor_body=[]),be.registeredClass.constructor_body[x-1]!==void 0)throw new g(`Cannot register multiple constructors with identical number of parameters (${x-1}) for class '${be.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return be.registeredClass.constructor_body[x-1]=()=>{ji(`Cannot construct ${be.name} due to unbound types`,ye)},D([],ye,et=>(et.splice(1,0,null),be.registeredClass.constructor_body[x-1]=E(Pe,et,null,Z,xe),[])),[]})},ue=S=>{S=S.trim();const x=S.indexOf("(");return x===-1?S:S.slice(0,x)},se=(S,x,L,V,Z,xe,ye,be,Pe,et)=>{var Qe=Es(L,V);x=T(x),x=ue(x),xe=Jt(Z,xe,Pe),D([],[S],Tt=>{Tt=Tt[0];var Gt=`${Tt.name}.${x}`;x.startsWith("@@")&&(x=Symbol[x.substring(2)]),be&&Tt.registeredClass.pureVirtualFunctions.push(x);function yt(){ji(`Cannot call ${Gt} due to unbound types`,Qe)}var Wt=Tt.registeredClass.instancePrototype,nn=Wt[x];return nn===void 0||nn.overloadTable===void 0&&nn.className!==Tt.name&&nn.argCount===L-2?(yt.argCount=L-2,yt.className=Tt.name,Wt[x]=yt):(Oe(Wt,x,Gt),Wt[x].overloadTable[L-2]=yt),D([],Qe,$n=>{var bn=E(Gt,$n,Tt,xe,ye,Pe);return Wt[x].overloadTable===void 0?(bn.argCount=L-2,Wt[x]=bn):Wt[x].overloadTable[L-2]=bn,[]}),[]})},re=(S,x,L)=>(S instanceof Object||N(`${L} with invalid "this": ${S}`),S instanceof x.registeredClass.constructor||N(`${L} incompatible with "this" of type ${S.constructor.name}`),S.$$.ptr||N(`cannot call emscripten binding method ${L} on deleted object`),gt(S.$$.ptr,S.$$.ptrType.registeredClass,x.registeredClass)),Ve=(S,x,L,V,Z,xe,ye,be,Pe,et)=>{x=T(x),Z=Jt(V,Z),D([],[S],Qe=>{Qe=Qe[0];var Tt=`${Qe.name}.${x}`,Gt={get(){ji(`Cannot access ${Tt} due to unbound types`,[L,ye])},enumerable:!0,configurable:!0};return Pe?Gt.set=()=>ji(`Cannot access ${Tt} due to unbound types`,[L,ye]):Gt.set=yt=>N(Tt+" is a read-only property"),Object.defineProperty(Qe.registeredClass.instancePrototype,x,Gt),D([],Pe?[L,ye]:[L],yt=>{var Wt=yt[0],nn={get(){var bn=re(this,Qe,Tt+" getter");return Wt.fromWireType(Z(xe,bn))},enumerable:!0};if(Pe){Pe=Jt(be,Pe);var $n=yt[1];nn.set=function(bn){var wi=re(this,Qe,Tt+" setter"),gn=[];Pe(et,wi,$n.toWireType(gn,bn)),G(gn)}}return Object.defineProperty(Qe.registeredClass.instancePrototype,x,nn),[]}),[]})},Xe=[],Ne=[0,1,,1,null,1,!0,1,!1,1],qe=S=>{S>9&&--Ne[S+1]===0&&(Ne[S]=void 0,Xe.push(S))},Ge={toValue:S=>(S||N(`Cannot use deleted val. handle = ${S}`),Ne[S]),toHandle:S=>{switch(S){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const x=Xe.pop()||Ne.length;return Ne[x]=S,Ne[x+1]=1,x}}}},ft={name:"emscripten::val",fromWireType:S=>{var x=Ge.toValue(S);return qe(S),x},toWireType:(S,x)=>Ge.toHandle(x),readValueFromPointer:Q,destructorFunction:null},pt=S=>ee(S,ft),Ye=(S,x,L)=>{switch(x){case 1:return L?function(V){return this.fromWireType(P[V])}:function(V){return this.fromWireType(M[V])};case 2:return L?function(V){return this.fromWireType(R[V>>1])}:function(V){return this.fromWireType(A[V>>1])};case 4:return L?function(V){return this.fromWireType(O[V>>2])}:function(V){return this.fromWireType(y[V>>2])};default:throw new TypeError(`invalid integer width (${x}): ${S}`)}},bt=(S,x,L,V)=>{x=T(x);function Z(){}Z.values={},ee(S,{name:x,constructor:Z,fromWireType:function(xe){return this.constructor.values[xe]},toWireType:(xe,ye)=>ye.value,readValueFromPointer:Ye(x,L,V),destructorFunction:null}),ze(x,Z)},zt=(S,x)=>{var L=ce[S];return L===void 0&&N(`${x} has unknown type ${bs(S)}`),L},Nt=(S,x,L)=>{var V=zt(S,"enum");x=T(x);var Z=V.constructor,xe=Object.create(V.constructor.prototype,{value:{value:L},constructor:{value:Ue(`${V.name}_${x}`,function(){})}});Z.values[L]=xe,Z[x]=xe},Rt=(S,x)=>{switch(x){case 4:return function(L){return this.fromWireType(I[L>>2])};case 8:return function(L){return this.fromWireType(z[L>>3])};default:throw new TypeError(`invalid float width (${x}): ${S}`)}},jt=(S,x,L)=>{x=T(x),ee(S,{name:x,fromWireType:V=>V,toWireType:(V,Z)=>Z,readValueFromPointer:Rt(x,L),destructorFunction:null})},$e=(S,x,L,V,Z,xe,ye,be)=>{var Pe=Es(x,L);S=T(S),S=ue(S),Z=Jt(V,Z,ye),ze(S,function(){ji(`Cannot call ${S} due to unbound types`,Pe)},x-1),D([],Pe,et=>{var Qe=[et[0],null].concat(et.slice(1));return ys(S,E(S,Qe,null,Z,xe,ye),x-1),[]})},tn=(S,x,L,V,Z)=>{x=T(x);const xe=V===0;let ye=Pe=>Pe;if(xe){var be=32-8*L;ye=Pe=>Pe<<be>>>be,Z=ye(Z)}ee(S,{name:x,fromWireType:ye,toWireType:(Pe,et)=>et,readValueFromPointer:we(x,L,V!==0),destructorFunction:null})},_t=(S,x,L)=>{var V=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],Z=V[x];function xe(ye){var be=y[ye>>2],Pe=y[ye+4>>2];return new Z(P.buffer,Pe,be)}L=T(L),ee(S,{name:L,fromWireType:xe,readValueFromPointer:xe},{ignoreDuplicateRegistrations:!0})},yn=(S,x,L,V)=>{if(!(V>0))return 0;for(var Z=L,xe=L+V-1,ye=0;ye<S.length;++ye){var be=S.codePointAt(ye);if(be<=127){if(L>=xe)break;x[L++]=be}else if(be<=2047){if(L+1>=xe)break;x[L++]=192|be>>6,x[L++]=128|be&63}else if(be<=65535){if(L+2>=xe)break;x[L++]=224|be>>12,x[L++]=128|be>>6&63,x[L++]=128|be&63}else{if(L+3>=xe)break;x[L++]=240|be>>18,x[L++]=128|be>>12&63,x[L++]=128|be>>6&63,x[L++]=128|be&63,ye++}}return x[L]=0,L-Z},Fn=(S,x,L)=>yn(S,M,x,L),ii=S=>{for(var x=0,L=0;L<S.length;++L){var V=S.charCodeAt(L);V<=127?x++:V<=2047?x+=2:V>=55296&&V<=57343?(x+=4,++L):x+=3}return x},Ai=globalThis.TextDecoder&&new TextDecoder,Et=(S,x,L,V)=>{var Z=x+L;if(V)return Z;for(;S[x]&&!(x>=Z);)++x;return x},Vt=(S,x=0,L,V)=>{var Z=Et(S,x,L,V);if(Z-x>16&&S.buffer&&Ai)return Ai.decode(S.subarray(x,Z));for(var xe="";x<Z;){var ye=S[x++];if(!(ye&128)){xe+=String.fromCharCode(ye);continue}var be=S[x++]&63;if((ye&224)==192){xe+=String.fromCharCode((ye&31)<<6|be);continue}var Pe=S[x++]&63;if((ye&240)==224?ye=(ye&15)<<12|be<<6|Pe:ye=(ye&7)<<18|be<<12|Pe<<6|S[x++]&63,ye<65536)xe+=String.fromCharCode(ye);else{var et=ye-65536;xe+=String.fromCharCode(55296|et>>10,56320|et&1023)}}return xe},ri=(S,x,L)=>S?Vt(M,S,x,L):"",It=(S,x)=>{x=T(x),ee(S,{name:x,fromWireType(L){var V=y[L>>2],Z=L+4,xe;return xe=ri(Z,V,!0),er(L),xe},toWireType(L,V){V instanceof ArrayBuffer&&(V=new Uint8Array(V));var Z,xe=typeof V=="string";xe||ArrayBuffer.isView(V)&&V.BYTES_PER_ELEMENT==1||N("Cannot pass non-string to std::string"),xe?Z=ii(V):Z=V.length;var ye=ul(4+Z+1),be=ye+4;return y[ye>>2]=Z,xe?Fn(V,be,Z+1):M.set(V,be),L!==null&&L.push(er,ye),ye},readValueFromPointer:Q,destructorFunction(L){er(L)}})},Xn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Qi=(S,x,L)=>{var V=S>>1,Z=Et(A,V,x/2,L);if(Z-V>16&&Xn)return Xn.decode(A.subarray(V,Z));for(var xe="",ye=V;ye<Z;++ye){var be=A[ye];xe+=String.fromCharCode(be)}return xe},Ao=(S,x,L)=>{if(L??=2147483647,L<2)return 0;L-=2;for(var V=x,Z=L<S.length*2?L/2:S.length,xe=0;xe<Z;++xe){var ye=S.charCodeAt(xe);R[x>>1]=ye,x+=2}return R[x>>1]=0,x-V},hm=S=>S.length*2,fm=(S,x,L)=>{for(var V="",Z=S>>2,xe=0;!(xe>=x/4);xe++){var ye=y[Z+xe];if(!ye&&!L)break;V+=String.fromCodePoint(ye)}return V},dm=(S,x,L)=>{if(L??=2147483647,L<4)return 0;for(var V=x,Z=V+L-4,xe=0;xe<S.length;++xe){var ye=S.codePointAt(xe);if(ye>65535&&xe++,O[x>>2]=ye,x+=4,x+4>Z)break}return O[x>>2]=0,x-V},pm=S=>{for(var x=0,L=0;L<S.length;++L){var V=S.codePointAt(L);V>65535&&L++,x+=4}return x},mm=(S,x,L)=>{L=T(L);var V,Z,xe;x===2?(V=Qi,Z=Ao,xe=hm):(V=fm,Z=dm,xe=pm),ee(S,{name:L,fromWireType:ye=>{var be=y[ye>>2],Pe=V(ye+4,be*x,!0);return er(ye),Pe},toWireType:(ye,be)=>{typeof be!="string"&&N(`Cannot pass non-string to C++ string type ${L}`);var Pe=xe(be),et=ul(4+Pe+x);return y[et>>2]=Pe/x,Z(be,et+4,Pe+x),ye!==null&&ye.push(er,et),et},readValueFromPointer:Q,destructorFunction(ye){er(ye)}})},gm=(S,x,L,V,Z,xe)=>{X[S]={name:T(x),rawConstructor:Jt(L,V),rawDestructor:Jt(Z,xe),fields:[]}},_m=(S,x,L,V,Z,xe,ye,be,Pe,et)=>{X[S].fields.push({fieldName:T(x),getterReturnType:L,getter:Jt(V,Z),getterContext:xe,setterArgumentType:ye,setter:Jt(be,Pe),setterContext:et})},vm=(S,x)=>{x=T(x),ee(S,{isVoid:!0,name:x,fromWireType:()=>{},toWireType:(L,V)=>{}})},cl=[],xm=S=>{var x=cl.length;return cl.push(S),x},Sm=(S,x)=>{for(var L=new Array(S),V=0;V<S;++V)L[V]=zt(y[x+V*4>>2],`parameter ${V}`);return L},Mm=(S,x,L)=>{var V=[],Z=S(V,L);return V.length&&(y[x>>2]=Ge.toHandle(V)),Z},ym={},Qu=S=>{var x=ym[S];return x===void 0?T(S):x},bm=(S,x,L)=>{var V=8,[Z,...xe]=Sm(S,x),ye=Z.toWireType.bind(Z),be=xe.map(yt=>yt.readValueFromPointer.bind(yt));S--;var Pe={toValue:Ge.toValue},et=be.map((yt,Wt)=>{var nn=`argFromPtr${Wt}`;return Pe[nn]=yt,`${nn}(args${Wt?"+"+Wt*V:""})`}),Qe;switch(L){case 0:Qe="toValue(handle)";break;case 2:Qe="new (toValue(handle))";break;case 3:Qe="";break;case 1:Pe.getStringOrSymbol=Qu,Qe="toValue(handle)[getStringOrSymbol(methodName)]";break}Qe+=`(${et})`,Z.isVoid||(Pe.toReturnWire=ye,Pe.emval_returnValue=Mm,Qe=`return emval_returnValue(toReturnWire, destructorsRef, ${Qe})`),Qe=`return function (handle, methodName, destructorsRef, args) {
  ${Qe}
  }`;var Tt=new Function(Object.keys(Pe),Qe)(...Object.values(Pe)),Gt=`methodCaller<(${xe.map(yt=>yt.name)}) => ${Z.name}>`;return xm(Ue(Gt,Tt))},Em=(S,x)=>(S=Ge.toValue(S),x=Ge.toValue(x),Ge.toHandle(S[x])),Tm=S=>{S>9&&(Ne[S+1]+=1)},Am=(S,x,L,V,Z)=>cl[S](x,L,V,Z),wm=S=>Ge.toHandle(Qu(S)),Rm=S=>{var x=Ge.toValue(S);G(x),qe(S)},Cm=()=>2147483648,Pm=(S,x)=>Math.ceil(S/x)*x,Dm=S=>{var x=wo.buffer.byteLength,L=(S-x+65535)/65536|0;try{return wo.grow(L),H(),1}catch{}},Lm=S=>{var x=M.length;S>>>=0;var L=Cm();if(S>L)return!1;for(var V=1;V<=4;V*=2){var Z=x*(1+.2/V);Z=Math.min(Z,S+100663296);var xe=Math.min(L,Pm(Math.max(S,Z),65536)),ye=Dm(xe);if(ye)return!0}return!1};if(ct(),Ms(),t.noExitRuntime&&t.noExitRuntime,t.print&&t.print,t.printErr&&(d=t.printErr),t.wasmBinary&&(v=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();var eh,ul,er,wo,th;function Im(S){eh=S.F,ul=S.H,er=S.I,wo=S.D,th=S.G}var Um={h:U,x:W,v:ge,u:Re,B:de,e:ll,g:$,a:se,f:Ve,z:pt,n:bt,c:Nt,t:jt,b:$e,i:tn,d:_t,A:It,q:mm,w:gm,p:_m,C:vm,l:bm,m:qe,r:Em,o:Tm,k:Am,s:wm,j:Rm,y:Lm};function Nm(){J();function S(){t.calledRun=!0,!b&&(ae(),p?.(t),t.onRuntimeInitialized?.(),j())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),S()},1)):S()}var Ts;Ts=await tt(),Nm();function Fm(S){if(S.length%2!=0)throw"MakePath64: intArray.length must be even";const x=S.length/2,L=new BigInt64Array(x*3);for(let Z=0,xe=0;Z<S.length;Z+=2,xe+=3){const ye=S[Z],be=S[Z+1];L[xe]=typeof ye=="bigint"?ye:BigInt(ye),L[xe+1]=typeof be=="bigint"?be:BigInt(be)}let V=new t.Path64;return V.assign(L),V}t.MakePath64=Fm;function Om(S){if(S.length%3!=0)throw"MakePathZ64: intArray.length must be multiple of 3";const x=new BigInt64Array(S.length);for(let V=0;V<S.length;V++){const Z=S[V];x[V]=typeof Z=="bigint"?Z:BigInt(Z)}let L=new t.Path64;return L.assign(x),L}t.MakePathZ64=Om;function Bm(S){if(S.length%2!=0)throw"MakePathD: intArray.length must be even";const x=S.length/2,L=new Float64Array(x*3);for(let Z=0,xe=0;Z<S.length;Z+=2,xe+=3)L[xe]=S[Z],L[xe+1]=S[Z+1];let V=new t.PathD;return V.assign(L),V}t.MakePathD=Bm;function zm(S){if(S.length%3!=0)throw"MakePathZD: intArray.length must be multiple of 3";const x=S instanceof Float64Array?S:Float64Array.from(S);let L=new t.PathD;return L.assign(x),L}t.MakePathZD=zm;function nh(S){const x=S.view(),L=new BigInt64Array(x.length);for(let Z=0;Z<x.length;Z++)L[Z]=BigInt(Math.round(x[Z]));let V=new t.Path64;return V.assign(L),V}t.PathDToPath64=nh;function ih(S){const x=S.view(),L=new Float64Array(x.length);for(let Z=0;Z<x.length;Z++)L[Z]=Number(x[Z]);let V=new t.PathD;return V.assign(L),V}t.Path64ToPathD=ih;function Vm(S){let x=new t.PathsD;for(let L=0;L<S.size();L++){const V=S.get(L);let Z=ih(V);x.push_back(Z),Z.delete(),V.delete()}return x}t.Paths64ToPathsD=Vm;function Hm(S){let x=new t.Paths64;for(let L=0;L<S.size();L++){const V=S.get(L);let Z=nh(V);x.push_back(Z),Z.delete(),V.delete()}return x}return t.PathsDToPaths64=Hm,ie?e=t:e=new Promise((S,x)=>{p=S,w=x}),e}let Al=null;function P0(){return Al||(Al=C0()),Al}function D0(n,e){const t=[];for(const i of e)t.push(i.x,i.y);return n.MakePathD(t)}function Xh(n,e){const t=n.PathsD,i=new t;for(const r of e)r.length>=3&&i.push_back(D0(n,r));return i}function L0(n){const e=n.size(),t=[];for(let i=0;i<e;i++){const r=n.get(i);t.push({x:r.x,y:r.y})}return t}function I0(n){const e=[],t=n.size();for(let i=0;i<t;i++)e.push(L0(n.get(i)));return e}async function U0(n,e){const t=await P0(),i=Xh(t,n),r=Xh(t,e),o=t.IntersectD(i,r,t.FillRule.NonZero,6),a=Math.abs(t.AreaPathsD(o));return{regions:I0(o),area:a,intersects:a>1e-8}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uu="186",Gi={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},N0=0,$h=1,F0=2,ma=1,O0=2,Hs=3,Ur=0,Rn=1,pi=2,Wi=0,Zs=1,qh=2,Yh=3,Kh=4,B0=5,es=100,z0=101,V0=102,H0=103,k0=104,G0=200,W0=201,X0=202,$0=203,gp=204,_p=205,q0=206,Y0=207,K0=208,Z0=209,J0=210,j0=211,Q0=212,ev=213,tv=214,Ec=0,Tc=1,Ac=2,ao=3,wc=4,Rc=5,Cc=6,Pc=7,vp=0,nv=1,iv=2,vi=0,xp=1,Sp=2,Mp=3,yp=4,bp=5,Ep=6,Tp=7,Ap=300,Nr=301,fs=302,wl=303,Rl=304,ja=306,Dc=1e3,Vi=1001,Lc=1002,sn=1003,rv=1004,No=1005,fn=1006,Cl=1007,Cr=1008,Ln=1009,wp=1010,Rp=1011,lo=1012,Nu=1013,Mi=1014,mi=1015,yi=1016,Fu=1017,Ou=1018,co=1020,Cp=35902,Pp=35899,Dp=1021,Lp=1022,jn=1023,Zi=1026,Pr=1027,Ip=1028,Bu=1029,Fr=1030,zu=1031,Vu=1033,ga=33776,_a=33777,va=33778,xa=33779,Ic=35840,Uc=35841,Nc=35842,Fc=35843,Oc=36196,Bc=37492,zc=37496,Vc=37488,Hc=37489,Da=37490,kc=37491,Gc=37808,Wc=37809,Xc=37810,$c=37811,qc=37812,Yc=37813,Kc=37814,Zc=37815,Jc=37816,jc=37817,Qc=37818,eu=37819,tu=37820,nu=37821,iu=36492,ru=36494,su=36495,ou=36283,au=36284,La=36285,lu=36286,sv=3200,cu=0,ov=1,ar="",Vn="srgb",Ia="srgb-linear",Ua="linear",Pt="srgb",Pl=7680,av=519,lv=512,cv=513,uv=514,Hu=515,hv=516,fv=517,ku=518,dv=519,pv=35044,Zh="300 es",gi=2e3,uo=2001;function mv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gv(){const n=Na("canvas");return n.style.display="block",n}const Jh={};function jh(...n){const e="THREE."+n.shift();console.log(e,...n)}function Up(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=Up(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Mt(...n){n=Up(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function as(...n){const e=n.join(" ");e in Jh||(Jh[e]=!0,at(...n))}function _v(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const vv={[Ec]:Tc,[Ac]:Cc,[wc]:Pc,[ao]:Rc,[Tc]:Ec,[Cc]:Ac,[Pc]:wc,[Rc]:ao};class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,uu=180/Math.PI;function gs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function xv(n,e){return(n%e+e)%e}function Dl(n,e,t){return(1-t)*n+t*e}function Rs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Sv={DEG2RAD:Js};class De{static{De.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],d=s[o+1],v=s[o+2],b=s[o+3];if(f!==b||l!==h||c!==d||u!==v){let m=l*h+c*d+u*v+f*b;m<0&&(h=-h,d=-d,v=-v,b=-b,m=-m);let p=1-a;if(m<.9995){const w=Math.acos(m),P=Math.sin(w);p=Math.sin(p*w)/P,a=Math.sin(a*w)/P,l=l*p+h*a,c=c*p+d*a,u=u*p+v*a,f=f*p+b*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+v*a,f=f*p+b*a;const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*d-c*h,e[t+1]=l*v+u*h+c*f-a*d,e[t+2]=c*v+u*d+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"YXZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"ZXY":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"ZYX":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"YZX":this._x=h*u*f+c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f-h*d*v;break;case"XZY":this._x=h*u*f-c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f+h*d*v;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{static{q.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ll=new q,Qh=new hr;class ut{static{ut.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],v=i[8],b=r[0],m=r[3],p=r[6],w=r[1],P=r[4],M=r[7],R=r[2],A=r[5],O=r[8];return s[0]=o*b+a*w+l*R,s[3]=o*m+a*P+l*A,s[6]=o*p+a*M+l*O,s[1]=c*b+u*w+f*R,s[4]=c*m+u*P+f*A,s[7]=c*p+u*M+f*O,s[2]=h*b+d*w+v*R,s[5]=h*m+d*P+v*A,s[8]=h*p+d*M+v*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,v=t*f+i*h+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=f*b,e[1]=(r*c-u*i)*b,e[2]=(a*i-r*o)*b,e[3]=h*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-a*t)*b,e[6]=d*b,e[7]=(i*l-c*t)*b,e[8]=(o*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Il.makeScale(e,t)),this}rotate(e){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Il.makeRotation(-e)),this}translate(e,t){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Il=new ut,ef=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tf=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mv(){const n={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Pt&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pt&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?Ua:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ia]:{primaries:e,whitePoint:i,transfer:Ua,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:Pt,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),n}const vt=Mv();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vr;class yv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vr===void 0&&(Vr=Na("canvas")),Vr.width=e.width,Vr.height=e.height;const r=Vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Vr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bv=0;class Gu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ul(r[o].image)):s.push(Ul(r[o]))}else s=Ul(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Ev=0;const Nl=new q;class Mn extends dr{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,i=Vi,r=Vi,s=fn,o=Cr,a=jn,l=Ln,c=Mn.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=gs(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nl).x}get height(){return this.source.getSize(Nl).y}get depth(){return this.source.getSize(Nl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dc:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dc:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Ap;Mn.DEFAULT_ANISOTROPY=1;class Ht{static{Ht.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],v=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,M=(d+1)/2,R=(p+1)/2,A=(u+h)/4,O=(f+b)/4,y=(v+m)/4;return P>M&&P>R?P<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(P),r=A/i,s=O/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=y/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=O/s,r=y/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-v)*(m-v)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(f-b)/w,this.z=(h-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tv extends dr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Mn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gu(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends Tv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Np extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Av extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Bt{static{Bt.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,v,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,v,b,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,v,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=v,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,v=a*u,b=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+v*c,t[5]=h-b*c,t[9]=-a*l,t[2]=b-h*c,t[6]=v+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,v=c*u,b=c*f;t[0]=h+b*a,t[4]=v*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-v,t[6]=b+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,v=c*u,b=c*f;t[0]=h-b*a,t[4]=-o*f,t[8]=v+d*a,t[1]=d+v*a,t[5]=o*u,t[9]=b-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,v=a*u,b=a*f;t[0]=l*u,t[4]=v*c-d,t[8]=h*c+b,t[1]=l*f,t[5]=b*c+h,t[9]=d*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,v=a*l,b=a*c;t[0]=l*u,t[4]=b-h*f,t[8]=v*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+v,t[10]=h-b*f}else if(e.order==="XZY"){const h=o*l,d=o*c,v=a*l,b=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+b,t[5]=o*u,t[9]=d*f-v,t[2]=v*f-d,t[6]=a*u,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wv,e,Rv)}lookAt(e,t,i){const r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),tr.crossVectors(i,Cn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),tr.crossVectors(i,Cn)),tr.normalize(),Fo.crossVectors(Cn,tr),r[0]=tr.x,r[4]=Fo.x,r[8]=Cn.x,r[1]=tr.y,r[5]=Fo.y,r[9]=Cn.y,r[2]=tr.z,r[6]=Fo.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],v=i[2],b=i[6],m=i[10],p=i[14],w=i[3],P=i[7],M=i[11],R=i[15],A=r[0],O=r[4],y=r[8],I=r[12],z=r[1],k=r[5],ne=r[9],ie=r[13],H=r[2],J=r[6],ae=r[10],j=r[14],pe=r[3],le=r[7],ve=r[11],me=r[15];return s[0]=o*A+a*z+l*H+c*pe,s[4]=o*O+a*k+l*J+c*le,s[8]=o*y+a*ne+l*ae+c*ve,s[12]=o*I+a*ie+l*j+c*me,s[1]=u*A+f*z+h*H+d*pe,s[5]=u*O+f*k+h*J+d*le,s[9]=u*y+f*ne+h*ae+d*ve,s[13]=u*I+f*ie+h*j+d*me,s[2]=v*A+b*z+m*H+p*pe,s[6]=v*O+b*k+m*J+p*le,s[10]=v*y+b*ne+m*ae+p*ve,s[14]=v*I+b*ie+m*j+p*me,s[3]=w*A+P*z+M*H+R*pe,s[7]=w*O+P*k+M*J+R*le,s[11]=w*y+P*ne+M*ae+R*ve,s[15]=w*I+P*ie+M*j+R*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],v=e[3],b=e[7],m=e[11],p=e[15],w=l*d-c*h,P=a*d-c*f,M=a*h-l*f,R=o*d-c*u,A=o*h-l*u,O=o*f-a*u;return t*(b*w-m*P+p*M)-i*(v*w-m*R+p*A)+r*(v*P-b*R+p*O)-s*(v*M-b*A+m*O)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],v=e[12],b=e[13],m=e[14],p=e[15],w=t*a-i*o,P=t*l-r*o,M=t*c-s*o,R=i*l-r*a,A=i*c-s*a,O=r*c-s*l,y=u*b-f*v,I=u*m-h*v,z=u*p-d*v,k=f*m-h*b,ne=f*p-d*b,ie=h*p-d*m,H=w*ie-P*ne+M*k+R*z-A*I+O*y;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/H;return e[0]=(a*ie-l*ne+c*k)*J,e[1]=(r*ne-i*ie-s*k)*J,e[2]=(b*O-m*A+p*R)*J,e[3]=(h*A-f*O-d*R)*J,e[4]=(l*z-o*ie-c*I)*J,e[5]=(t*ie-r*z+s*I)*J,e[6]=(m*M-v*O-p*P)*J,e[7]=(u*O-h*M+d*P)*J,e[8]=(o*ne-a*z+c*y)*J,e[9]=(i*z-t*ne-s*y)*J,e[10]=(v*A-b*M+p*w)*J,e[11]=(f*M-u*A-d*w)*J,e[12]=(a*I-o*k-l*y)*J,e[13]=(t*k-i*I+r*y)*J,e[14]=(b*P-v*R-m*w)*J,e[15]=(u*R-f*P+h*w)*J,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,v=s*f,b=o*u,m=o*f,p=a*f,w=l*c,P=l*u,M=l*f,R=i.x,A=i.y,O=i.z;return r[0]=(1-(b+p))*R,r[1]=(d+M)*R,r[2]=(v-P)*R,r[3]=0,r[4]=(d-M)*A,r[5]=(1-(h+p))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(v+P)*O,r[9]=(m-w)*O,r[10]=(1-(h+b))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),l=Hr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),qn.copy(this);const c=1/o,u=1/a,f=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,t.setFromRotationMatrix(qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=gi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let v,b;if(l)v=s/(o-s),b=o*s/(o-s);else if(a===gi)v=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===uo)v=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=gi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let v,b;if(l)v=1/(o-s),b=o/(o-s);else if(a===gi)v=-2/(o-s),b=-(o+s)/(o-s);else if(a===uo)v=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hr=new q,qn=new Bt,wv=new q(0,0,0),Rv=new q(1,1,1),tr=new q,Fo=new q,Cn=new q,nf=new Bt,rf=new hr;class fr{constructor(e=0,t=0,i=0,r=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rf.setFromEuler(this),this.setFromQuaternion(rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class Wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cv=0;const sf=new q,kr=new hr,Pi=new Bt,Oo=new q,Cs=new q,Pv=new q,Dv=new hr,of=new q(1,0,0),af=new q(0,1,0),lf=new q(0,0,1),cf={type:"added"},Lv={type:"removed"},Gr={type:"childadded",child:null},Fl={type:"childremoved",child:null};class on extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new q,t=new fr,i=new hr,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ut}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(of,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(lf,e)}translateOnAxis(e,t){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(of,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oo.copy(e):Oo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Cs,Oo,this.up):Pi.lookAt(Oo,Cs,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(Pi),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lv),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Pv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}on.DEFAULT_UP=new q(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dr extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iv={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,v=.005;c.inputState.pinching&&h>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function Bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=xv(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Bl(o,s,e+1/3),this.g=Bl(o,s,e),this.b=Bl(o,s,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){const i=Fp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return vt.workingToColorSpace(un.copy(this),e),Math.round(mt(un.r*255,0,255))*65536+Math.round(mt(un.g*255,0,255))*256+Math.round(mt(un.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(un.copy(this),t);const i=un.r,r=un.g,s=un.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Vn){vt.workingToColorSpace(un.copy(this),e);const t=un.r,i=un.g,r=un.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(Bo);const i=Dl(nr.h,Bo.h,t),r=Dl(nr.s,Bo.s,t),s=Dl(nr.l,Bo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new xt;xt.NAMES=Fp;class Uv extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yn=new q,Di=new q,zl=new q,Li=new q,Wr=new q,Xr=new q,uf=new q,Vl=new q,Hl=new q,kl=new q,Gl=new Ht,Wl=new Ht,Xl=new Ht;class Hn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),Di.subVectors(i,t),zl.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(Di),l=Yn.dot(zl),c=Di.dot(Di),u=Di.dot(zl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-d-v,v,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Gl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Gl.fromBufferAttribute(e,t),Wl.fromBufferAttribute(e,i),Xl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Gl,s.x),o.addScaledVector(Wl,s.y),o.addScaledVector(Xl,s.z),o}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),Di.subVectors(e,t),Yn.cross(Di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Yn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Wr.subVectors(r,i),Xr.subVectors(s,i),Vl.subVectors(e,i);const l=Wr.dot(Vl),c=Xr.dot(Vl);if(l<=0&&c<=0)return t.copy(i);Hl.subVectors(e,r);const u=Wr.dot(Hl),f=Xr.dot(Hl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Wr,o);kl.subVectors(e,s);const d=Wr.dot(kl),v=Xr.dot(kl);if(v>=0&&d<=v)return t.copy(s);const b=d*c-l*v;if(b<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Xr,a);const m=u*v-d*f;if(m<=0&&f-u>=0&&d-v>=0)return uf.subVectors(s,r),a=(f-u)/(f-u+(d-v)),t.copy(r).addScaledVector(uf,a);const p=1/(m+b+h);return o=b*p,a=h*p,t.copy(i).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xo{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zo.copy(i.boundingBox)),zo.applyMatrix4(e.matrixWorld),this.union(zo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),Vo.subVectors(this.max,Ps),$r.subVectors(e.a,Ps),qr.subVectors(e.b,Ps),Yr.subVectors(e.c,Ps),ir.subVectors(qr,$r),rr.subVectors(Yr,qr),Sr.subVectors($r,Yr);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Sr.z,Sr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Sr.z,0,-Sr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Sr.y,Sr.x,0];return!$l(t,$r,qr,Yr,Vo)||(t=[1,0,0,0,1,0,0,0,1],!$l(t,$r,qr,Yr,Vo))?!1:(Ho.crossVectors(ir,rr),t=[Ho.x,Ho.y,Ho.z],$l(t,$r,qr,Yr,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new q,new q,new q,new q,new q,new q,new q,new q],Kn=new q,zo=new xo,$r=new q,qr=new q,Yr=new q,ir=new q,rr=new q,Sr=new q,Ps=new q,Vo=new q,Ho=new q,Mr=new q;function $l(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mr.fromArray(n,s);const a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $t=new q,ko=new De;let Nv=0;class $i extends dr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pv,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),r=Tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),r=Tn(r,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Op extends $i{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bp extends $i{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends $i{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Fv=new xo,Ds=new q,ql=new q;class Qa{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(ql)),this.expandByPoint(Ds.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ov=0;const On=new Bt,Yl=new on,Kr=new q,Pn=new xo,Ls=new xo,en=new q;class pn extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mv(e)?Bp:Op)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Pn.min,Ls.min),Pn.expandByPoint(en),en.addVectors(Pn.max,Ls.max),Pn.expandByPoint(en)):(Pn.expandByPoint(Ls.min),Pn.expandByPoint(Ls.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),en.add(Kr)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new $i(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new q,l[y]=new q;const c=new q,u=new q,f=new q,h=new De,d=new De,v=new De,b=new q,m=new q;function p(y,I,z){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,I),f.fromBufferAttribute(i,z),h.fromBufferAttribute(s,y),d.fromBufferAttribute(s,I),v.fromBufferAttribute(s,z),u.sub(c),f.sub(c),d.sub(h),v.sub(h);const k=1/(d.x*v.y-v.x*d.y);isFinite(k)&&(b.copy(u).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(k),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(k),a[y].add(b),a[I].add(b),a[z].add(b),l[y].add(m),l[I].add(m),l[z].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let y=0,I=w.length;y<I;++y){const z=w[y],k=z.start,ne=z.count;for(let ie=k,H=k+ne;ie<H;ie+=3)p(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const P=new q,M=new q,R=new q,A=new q;function O(y){R.fromBufferAttribute(r,y),A.copy(R);const I=a[y];P.copy(I),P.sub(R.multiplyScalar(R.dot(I))).normalize(),M.crossVectors(A,I);const k=M.dot(l[y])<0?-1:1;o.setXYZW(y,P.x,P.y,P.z,k)}for(let y=0,I=w.length;y<I;++y){const z=w[y],k=z.start,ne=z.count;for(let ie=k,H=k+ne;ie<H;ie+=3)O(e.getX(ie+0)),O(e.getX(ie+1)),O(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new $i(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){const v=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,v=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*u;for(let p=0;p<u;p++)h[v++]=c[d++]}return new $i(h,u,f)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kl=new q,Bv=new q,zv=new ut;class Oi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Kl.subVectors(i,t).cross(Bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Kl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zv.getNormalMatrix(e),r=this.coplanarPoint(Kl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Vv=0;class _s extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Zs,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gp,this.blendDst=_p,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pl,this.stencilZFail=Pl,this.stencilZPass=Pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new De().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ui=new q,Zl=new q,Go=new q,Wo=new q;class el{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zl.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Wo.copy(this.origin).sub(Zl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Go),a=Wo.dot(this.direction),l=-Wo.dot(Go),c=Wo.lengthSq(),u=Math.abs(1-o*o);let f,h,d,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const b=1/u;f*=b,h*=b,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zl).addScaledVector(Go,h),d}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,d=e.z-o.z,v=t.x-o.x,b=t.y-o.y,m=t.z-o.z,p=i.x-o.x,w=i.y-o.y,P=i.z-o.z,M=Math.abs(l),R=Math.abs(c),A=Math.abs(u);let O,y,I,z,k,ne,ie,H,J,ae,j,pe;if(M>=R&&M>=A?(I=l,ne=f,J=v,pe=p,l>=0?(O=c,y=u,z=h,k=d,ie=b,H=m,ae=w,j=P):(O=u,y=c,z=d,k=h,ie=m,H=b,ae=P,j=w)):R>=A?(I=c,ne=h,J=b,pe=w,c>=0?(O=u,y=l,z=d,k=f,ie=m,H=v,ae=P,j=p):(O=l,y=u,z=f,k=d,ie=v,H=m,ae=p,j=P)):(I=u,ne=d,J=m,pe=P,u>=0?(O=l,y=c,z=f,k=h,ie=v,H=b,ae=p,j=w):(O=c,y=l,z=h,k=f,ie=b,H=v,ae=w,j=p)),I===0)return null;const le=O/I,ve=y/I,me=1/I,Ae=z-le*ne,Be=k-ve*ne,nt=ie-le*J,st=H-ve*J,tt=ae-le*pe,he=j-ve*pe,oe=tt*st-he*nt,Te=Ae*he-Be*tt,We=nt*Be-st*Ae;if(r){if(oe<0||Te<0||We<0)return null}else if((oe<0||Te<0||We<0)&&(oe>0||Te>0||We>0))return null;const Le=oe+Te+We;if(Le===0)return null;const C=me*(oe*ne+Te*J+We*pe);return(Le>0?C<0:C>0)?null:this.at(C/Le,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class js extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hf=new Bt,yr=new el,Xo=new Qa,ff=new q,$o=new q,qo=new q,Yo=new q,Jl=new q,Ko=new q,df=new q,Zo=new q;class Un extends on{constructor(e=new pn,t=new js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Jl.fromBufferAttribute(f,e),o?Ko.addScaledVector(Jl,u):Ko.addScaledVector(Jl.sub(t),u))}t.add(Ko)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(Xo.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Xo,ff)===null||yr.origin.distanceToSquared(ff)>(e.far-e.near)**2))&&(hf.copy(s).invert(),yr.copy(e.ray).applyMatrix4(hf),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,b=h.length;v<b;v++){const m=h[v],p=o[m.materialIndex],w=Math.max(m.start,d.start),P=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,R=P;M<R;M+=3){const A=a.getX(M),O=a.getX(M+1),y=a.getX(M+2);r=Jo(this,p,e,i,c,u,f,A,O,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let m=v,p=b;m<p;m+=3){const w=a.getX(m),P=a.getX(m+1),M=a.getX(m+2);r=Jo(this,o,e,i,c,u,f,w,P,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,b=h.length;v<b;v++){const m=h[v],p=o[m.materialIndex],w=Math.max(m.start,d.start),P=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,R=P;M<R;M+=3){const A=M,O=M+1,y=M+2;r=Jo(this,p,e,i,c,u,f,A,O,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=v,p=b;m<p;m+=3){const w=m,P=m+1,M=m+2;r=Jo(this,o,e,i,c,u,f,w,P,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Hv(n,e,t,i,r,s,o,a){let l;if(e.side===Rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ur,a),l===null)return null;Zo.copy(a),Zo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zo);return c<t.near||c>t.far?null:{distance:c,point:Zo.clone(),object:n}}function Jo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,$o),n.getVertexPosition(l,qo),n.getVertexPosition(c,Yo);const u=Hv(n,e,t,i,$o,qo,Yo,df);if(u){const f=new q;Hn.getBarycoord(df,$o,qo,Yo,f),r&&(u.uv=Hn.getInterpolatedAttribute(r,a,l,c,f,new De)),s&&(u.uv1=Hn.getInterpolatedAttribute(s,a,l,c,f,new De)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,l,c,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new q,materialIndex:0};Hn.getNormal($o,qo,Yo,h.normal),u.face=h,u.barycoord=f}return u}class kv extends Mn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=sn,u=sn,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const br=new Qa,Gv=new De(.5,.5),jo=new q;class Xu{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],v=s[8],b=s[9],m=s[10],p=s[11],w=s[12],P=s[13],M=s[14],R=s[15];if(r[0].setComponents(c-o,d-u,p-v,R-w).normalize(),r[1].setComponents(c+o,d+u,p+v,R+w).normalize(),r[2].setComponents(c+a,d+f,p+b,R+P).normalize(),r[3].setComponents(c-a,d-f,p-b,R-P).normalize(),i)r[4].setComponents(l,h,m,M).normalize(),r[5].setComponents(c-l,d-h,p-m,R-M).normalize();else if(r[4].setComponents(c-l,d-h,p-m,R-M).normalize(),t===gi)r[5].setComponents(c+l,d+h,p+m,R+M).normalize();else if(t===uo)r[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const t=Gv.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(jo.x=r.normal.x>0?e.max.x:e.min.x,jo.y=r.normal.y>0?e.max.y:e.min.y,jo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sa extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fa=new q,Oa=new q,pf=new Bt,Is=new el,Qo=new Qa,jl=new q,mf=new q;class $u extends on{constructor(e=new pn,t=new Sa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Fa.fromBufferAttribute(t,r-1),Oa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Fa.distanceTo(Oa);e.setAttribute("lineDistance",new qt(i,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),Qo.radius+=s,e.ray.intersectsSphere(Qo)===!1)return;pf.copy(r).invert(),Is.copy(e.ray).applyMatrix4(pf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let b=d,m=v-1;b<m;b+=c){const p=u.getX(b),w=u.getX(b+1),P=ea(this,e,Is,l,p,w,b);P&&t.push(P)}if(this.isLineLoop){const b=u.getX(v-1),m=u.getX(d),p=ea(this,e,Is,l,b,m,v-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let b=d,m=v-1;b<m;b+=c){const p=ea(this,e,Is,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=ea(this,e,Is,l,v-1,d,v-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ea(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Fa.fromBufferAttribute(a,r),Oa.fromBufferAttribute(a,s),t.distanceSqToSegment(Fa,Oa,jl,mf)>i)return;jl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(jl);if(!(c<e.near||c>e.far))return{distance:c,point:mf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const gf=new q,_f=new q;class Wv extends $u{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)gf.fromBufferAttribute(t,r),_f.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gf.distanceTo(_f);e.setAttribute("lineDistance",new qt(i,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xv extends $u{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zp extends Mn{constructor(e=[],t=Nr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ho extends Mn{constructor(e,t,i=Mi,r,s,o,a=sn,l=sn,c,u=Zi,f=1){if(u!==Zi&&u!==Pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $v extends ho{constructor(e,t=Mi,i=Nr,r,s,o=sn,a=sn,l,c=Zi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vp extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class So extends pn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function v(b,m,p,w,P,M,R,A,O,y,I){const z=M/O,k=R/y,ne=M/2,ie=R/2,H=A/2,J=O+1,ae=y+1;let j=0,pe=0;const le=new q;for(let ve=0;ve<ae;ve++){const me=ve*k-ie;for(let Ae=0;Ae<J;Ae++){const Be=Ae*z-ne;le[b]=Be*w,le[m]=me*P,le[p]=H,c.push(le.x,le.y,le.z),le[b]=0,le[m]=0,le[p]=A>0?1:-1,u.push(le.x,le.y,le.z),f.push(Ae/O),f.push(1-ve/y),j+=1}}for(let ve=0;ve<y;ve++)for(let me=0;me<O;me++){const Ae=h+me+J*ve,Be=h+me+J*(ve+1),nt=h+(me+1)+J*(ve+1),st=h+(me+1)+J*ve;l.push(Ae,Be,st),l.push(Be,nt,st),pe+=6}a.addGroup(d,pe,I),d+=pe,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const ta=new q,na=new q,Ql=new q,ia=new Hn;class qv extends pn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Js*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:b,b:m,c:p}=ia;if(b.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),ia.getNormal(Ql),f[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let w=0;w<3;w++){const P=(w+1)%3,M=f[w],R=f[P],A=ia[u[w]],O=ia[u[P]],y=`${M}_${R}`,I=`${R}_${M}`;I in h&&h[I]?(Ql.dot(h[I].normal)<=s&&(d.push(A.x,A.y,A.z),d.push(O.x,O.y,O.z)),h[I]=null):y in h||(h[y]={index0:c[w],index1:c[P],normal:Ql.clone()})}}for(const v in h)if(h[v]){const{index0:b,index1:m}=h[v];ta.fromBufferAttribute(a,b),na.fromBufferAttribute(a,m),d.push(ta.x,ta.y,ta.z),d.push(na.x,na.y,na.z)}this.setAttribute("position",new qt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new De:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new q,r=[],s=[],o=[],a=new q,l=new Bt;for(let d=0;d<=e;d++){const v=d/e;r[d]=this.getTangentAt(v,new q)}s[0]=new q,o[0]=new q;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(mt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,v))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(mt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],d*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qu extends Ei{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new De){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Yv extends qu{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yu(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const vf=new q,xf=new q,ec=new Yu,tc=new Yu,nc=new Yu;class Kv extends Ei{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new q){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(xf.subVectors(r[0],r[1]).add(r[0]),c=xf);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(vf.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=vf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),d),b=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);b<1e-4&&(b=1),v<1e-4&&(v=b),m<1e-4&&(m=b),ec.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,v,b,m),tc.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,v,b,m),nc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,v,b,m)}else this.curveType==="catmullrom"&&(ec.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),tc.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),nc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(ec.calc(l),tc.calc(l),nc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new q().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sf(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Zv(n,e){const t=1-n;return t*t*e}function Jv(n,e){return 2*(1-n)*n*e}function jv(n,e){return n*n*e}function Qs(n,e,t,i){return Zv(n,e)+Jv(n,t)+jv(n,i)}function Qv(n,e){const t=1-n;return t*t*t*e}function ex(n,e){const t=1-n;return 3*t*t*n*e}function tx(n,e){return 3*(1-n)*n*n*e}function nx(n,e){return n*n*n*e}function eo(n,e,t,i,r){return Qv(n,e)+ex(n,t)+tx(n,i)+nx(n,r)}class Hp extends Ei{constructor(e=new De,t=new De,i=new De,r=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new De){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(eo(e,r.x,s.x,o.x,a.x),eo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ix extends Ei{constructor(e=new q,t=new q,i=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new q){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(eo(e,r.x,s.x,o.x,a.x),eo(e,r.y,s.y,o.y,a.y),eo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kp extends Ei{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rx extends Ei{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gp extends Ei{constructor(e=new De,t=new De,i=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new De){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Qs(e,r.x,s.x,o.x),Qs(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sx extends Ei{constructor(e=new q,t=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new q){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Qs(e,r.x,s.x,o.x),Qs(e,r.y,s.y,o.y),Qs(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wp extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Sf(a,l.x,c.x,u.x,f.x),Sf(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new De().fromArray(r))}return this}}var hu=Object.freeze({__proto__:null,ArcCurve:Yv,CatmullRomCurve3:Kv,CubicBezierCurve:Hp,CubicBezierCurve3:ix,EllipseCurve:qu,LineCurve:kp,LineCurve3:rx,QuadraticBezierCurve:Gp,QuadraticBezierCurve3:sx,SplineCurve:Wp});class ox extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new hu[r.type]().fromJSON(r))}return this}}class Mf extends ox{constructor(e){super(),this.type="Path",this.currentPoint=new De,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new kp(this.currentPoint.clone(),new De(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Gp(this.currentPoint.clone(),new De(e,t),new De(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Hp(this.currentPoint.clone(),new De(e,t),new De(i,r),new De(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Wp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new qu(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ba extends Mf{constructor(e){super(e),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Mf().fromJSON(r))}return this}}function ax(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Xp(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=fx(n,e,s,t)),n.length>80*t){a=n[0],l=n[1];let u=a,f=l;for(let h=t;h<r;h+=t){const d=n[h],v=n[h+1];d<a&&(a=d),v<l&&(l=v),d>u&&(u=d),v>f&&(f=v)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return fo(s,o,t,a,l,c,0),o}function Xp(n,e,t,i,r){let s;if(r===bx(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=yf(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=yf(o/i|0,n[o],n[o+1],s);return s&&ds(s,s.next)&&(mo(s),s=s.next),s}function Or(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ds(t,t.next)||kt(t.prev,t,t.next)===0)){if(mo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function fo(n,e,t,i,r,s,o){if(!n)return;!o&&s&&_x(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?cx(n,i,r,s):lx(n)){e.push(l.i,n.i,c.i),mo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ux(Or(n),e),fo(n,e,t,i,r,s,2)):o===2&&hx(n,e,t,i,r,s):fo(Or(n),e,t,i,r,s,1);break}}}function lx(n){const e=n.prev,t=n,i=n.next;if(kt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c);let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=f&&v.y<=d&&ks(r,a,s,l,o,c,v.x,v.y)&&kt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function cx(n,e,t,i){const r=n.prev,s=n,o=n.next;if(kt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=Math.min(a,l,c),v=Math.min(u,f,h),b=Math.max(a,l,c),m=Math.max(u,f,h),p=fu(d,v,e,t,i),w=fu(b,m,e,t,i);let P=n.prevZ,M=n.nextZ;for(;P&&P.z>=p&&M&&M.z<=w;){if(P.x>=d&&P.x<=b&&P.y>=v&&P.y<=m&&P!==r&&P!==o&&ks(a,u,l,f,c,h,P.x,P.y)&&kt(P.prev,P,P.next)>=0||(P=P.prevZ,M.x>=d&&M.x<=b&&M.y>=v&&M.y<=m&&M!==r&&M!==o&&ks(a,u,l,f,c,h,M.x,M.y)&&kt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;P&&P.z>=p;){if(P.x>=d&&P.x<=b&&P.y>=v&&P.y<=m&&P!==r&&P!==o&&ks(a,u,l,f,c,h,P.x,P.y)&&kt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;M&&M.z<=w;){if(M.x>=d&&M.x<=b&&M.y>=v&&M.y<=m&&M!==r&&M!==o&&ks(a,u,l,f,c,h,M.x,M.y)&&kt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ux(n,e){let t=n;do{const i=t.prev,r=t.next.next;!ds(i,r)&&qp(i,t,t.next,r)&&po(i,r)&&po(r,i)&&(e.push(i.i,t.i,r.i),mo(t),mo(t.next),t=n=r),t=t.next}while(t!==n);return Or(t)}function hx(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sx(o,a)){let l=Yp(o,a);o=Or(o,o.next),l=Or(l,l.next),fo(o,e,t,i,r,s,0),fo(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function fx(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Xp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(xx(c))}r.sort(dx);for(let s=0;s<r.length;s++)t=px(r[s],t);return t}function dx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function px(n,e){const t=mx(n,e);if(!t)return e;const i=Yp(t,n);return Or(i,i.next),Or(t,t.next)}function mx(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(ds(n,t))return t;do{if(ds(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&$p(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);po(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&gx(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function gx(n,e){return kt(n.prev,n,e.prev)<0&&kt(e.next,n,n.next)<0}function _x(n,e,t,i){let r=n;do r.z===0&&(r.z=fu(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,vx(r)}function vx(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function fu(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function xx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $p(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ks(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&$p(n,e,t,i,r,s,o,a)}function Sx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Mx(n,e)&&(po(n,e)&&po(e,n)&&yx(n,e)&&(kt(n.prev,n,e.prev)||kt(n,e.prev,e))||ds(n,e)&&kt(n.prev,n,n.next)>0&&kt(e.prev,e,e.next)>0)}function kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ds(n,e){return n.x===e.x&&n.y===e.y}function qp(n,e,t,i){const r=sa(kt(n,e,t)),s=sa(kt(n,e,i)),o=sa(kt(t,i,n)),a=sa(kt(t,i,e));return!!(r!==s&&o!==a||r===0&&ra(n,t,e)||s===0&&ra(n,i,e)||o===0&&ra(t,n,i)||a===0&&ra(t,e,i))}function ra(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function sa(n){return n>0?1:n<0?-1:0}function Mx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&qp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function po(n,e){return kt(n.prev,n,n.next)<0?kt(n,e,n.next)>=0&&kt(n,n.prev,e)>=0:kt(n,e,n.prev)<0||kt(n,n.next,e)<0}function yx(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Yp(n,e){const t=du(n.i,n.x,n.y),i=du(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function yf(n,e,t,i){const r=du(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function mo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function du(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bx(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ex{static triangulate(e,t,i=2){return ax(e,t,i)}}class Hi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Hi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];bf(e),Ef(i,e);let o=e.length;t.forEach(bf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Ef(i,t[l]);const a=Ex.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function bf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ef(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ku extends pn{constructor(e=new Ba([new De(.5,.5),new De(-.5,.5),new De(-.5,-.5),new De(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new qt(r,3)),this.setAttribute("uv",new qt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:d-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Tx;let P,M=!1,R,A,O,y;if(p){P=p.getSpacedPoints(u),M=!0,h=!1;const U=p.isCatmullRomCurve3?p.closed:!1;R=p.computeFrenetFrames(u,U),A=new q,O=new q,y=new q}h||(m=0,d=0,v=0,b=0);const I=a.extractPoints(c);let z=I.shape;const k=I.holes;if(!Hi.isClockWise(z)){z=z.reverse();for(let U=0,W=k.length;U<W;U++){const X=k[U];Hi.isClockWise(X)&&(k[U]=X.reverse())}}function ie(U){const X=10000000000000001e-36;let G=U[0];for(let Q=1;Q<=U.length;Q++){const fe=Q%U.length,ce=U[fe],te=ce.x-G.x,B=ce.y-G.y,_=te*te+B*B,D=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(G.x),Math.abs(G.y)),ge=X*D*D;if(_<=ge){U.splice(fe,1),Q--;continue}G=ce}}ie(z),k.forEach(ie);const H=k.length,J=z;for(let U=0;U<H;U++){const W=k[U];z=z.concat(W)}function ae(U,W,X){return W||Mt("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(W,X)}const j=z.length;function pe(U,W,X){let G,Q,fe;const ce=U.x-W.x,te=U.y-W.y,B=X.x-U.x,_=X.y-U.y,D=ce*ce+te*te,ge=ce*_-te*B;if(Math.abs(ge)>Number.EPSILON){const T=Math.sqrt(D),g=Math.sqrt(B*B+_*_),N=W.x-te/T,K=W.y+ce/T,ee=X.x-_/g,we=X.y+B/g,Re=((ee-N)*_-(we-K)*B)/(ce*_-te*B);G=N+ce*Re-U.x,Q=K+te*Re-U.y;const de=G*G+Q*Q;if(de<=2)return new De(G,Q);fe=Math.sqrt(de/2)}else{let T=!1;ce>Number.EPSILON?B>Number.EPSILON&&(T=!0):ce<-Number.EPSILON?B<-Number.EPSILON&&(T=!0):Math.sign(te)===Math.sign(_)&&(T=!0),T?(G=-te,Q=ce,fe=Math.sqrt(D)):(G=ce,Q=te,fe=Math.sqrt(D/2))}return new De(G/fe,Q/fe)}const le=[];for(let U=0,W=J.length,X=W-1,G=U+1;U<W;U++,X++,G++)X===W&&(X=0),G===W&&(G=0),le[U]=pe(J[U],J[X],J[G]);const ve=[];let me,Ae=le.concat();for(let U=0,W=H;U<W;U++){const X=k[U];me=[];for(let G=0,Q=X.length,fe=Q-1,ce=G+1;G<Q;G++,fe++,ce++)fe===Q&&(fe=0),ce===Q&&(ce=0),me[G]=pe(X[G],X[fe],X[ce]);ve.push(me),Ae=Ae.concat(me)}let Be;if(m===0)Be=Hi.triangulateShape(J,k);else{const U=[],W=[];for(let X=0;X<m;X++){const G=X/m,Q=d*Math.cos(G*Math.PI/2),fe=v*Math.sin(G*Math.PI/2)+b;for(let ce=0,te=J.length;ce<te;ce++){const B=ae(J[ce],le[ce],fe);Te(B.x,B.y,-Q),G===0&&U.push(B)}for(let ce=0,te=H;ce<te;ce++){const B=k[ce];me=ve[ce];const _=[];for(let D=0,ge=B.length;D<ge;D++){const T=ae(B[D],me[D],fe);Te(T.x,T.y,-Q),G===0&&_.push(T)}G===0&&W.push(_)}}Be=Hi.triangulateShape(U,W)}const nt=Be.length,st=v+b;for(let U=0;U<j;U++){const W=h?ae(z[U],Ae[U],st):z[U];M?(O.copy(R.normals[0]).multiplyScalar(W.x),A.copy(R.binormals[0]).multiplyScalar(W.y),y.copy(P[0]).add(O).add(A),Te(y.x,y.y,y.z)):Te(W.x,W.y,0)}for(let U=1;U<=u;U++)for(let W=0;W<j;W++){const X=h?ae(z[W],Ae[W],st):z[W];M?(O.copy(R.normals[U]).multiplyScalar(X.x),A.copy(R.binormals[U]).multiplyScalar(X.y),y.copy(P[U]).add(O).add(A),Te(y.x,y.y,y.z)):Te(X.x,X.y,f/u*U)}for(let U=m-1;U>=0;U--){const W=U/m,X=d*Math.cos(W*Math.PI/2),G=v*Math.sin(W*Math.PI/2)+b;for(let Q=0,fe=J.length;Q<fe;Q++){const ce=ae(J[Q],le[Q],G);Te(ce.x,ce.y,f+X)}for(let Q=0,fe=k.length;Q<fe;Q++){const ce=k[Q];me=ve[Q];for(let te=0,B=ce.length;te<B;te++){const _=ae(ce[te],me[te],G);M?Te(_.x,_.y+P[u-1].y,P[u-1].x+X):Te(_.x,_.y,f+X)}}}tt(),he();function tt(){const U=r.length/3;if(h){let W=0,X=j*W;for(let G=0;G<nt;G++){const Q=Be[G];We(Q[2]+X,Q[1]+X,Q[0]+X)}W=u+m*2,X=j*W;for(let G=0;G<nt;G++){const Q=Be[G];We(Q[0]+X,Q[1]+X,Q[2]+X)}}else{for(let W=0;W<nt;W++){const X=Be[W];We(X[2],X[1],X[0])}for(let W=0;W<nt;W++){const X=Be[W];We(X[0]+j*u,X[1]+j*u,X[2]+j*u)}}i.addGroup(U,r.length/3-U,0)}function he(){const U=r.length/3;let W=0;oe(J,W),W+=J.length;for(let X=0,G=k.length;X<G;X++){const Q=k[X];oe(Q,W),W+=Q.length}i.addGroup(U,r.length/3-U,1)}function oe(U,W){let X=U.length;for(;--X>=0;){const G=X;let Q=X-1;Q<0&&(Q=U.length-1);for(let fe=0,ce=u+m*2;fe<ce;fe++){const te=j*fe,B=j*(fe+1),_=W+G+te,D=W+Q+te,ge=W+Q+B,T=W+G+B;Le(_,D,ge,T)}}}function Te(U,W,X){l.push(U),l.push(W),l.push(X)}function We(U,W,X){C(U),C(W),C(X);const G=r.length/3,Q=w.generateTopUV(i,r,G-3,G-2,G-1);F(Q[0]),F(Q[1]),F(Q[2])}function Le(U,W,X,G){C(U),C(W),C(G),C(W),C(X),C(G);const Q=r.length/3,fe=w.generateSideWallUV(i,r,Q-6,Q-3,Q-2,Q-1);F(fe[0]),F(fe[1]),F(fe[3]),F(fe[1]),F(fe[2]),F(fe[3])}function C(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function F(U){s.push(U.x),s.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ax(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new hu[r.type]().fromJSON(r)),new Ku(i,e.options)}}const Tx={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new De(s,o),new De(a,l),new De(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],v=e[r*3+2],b=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new De(o,1-l),new De(c,1-f),new De(h,1-v),new De(b,1-p)]:[new De(a,1-l),new De(u,1-f),new De(d,1-v),new De(m,1-p)]}};function Ax(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class tl extends pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],v=[],b=[],m=[];for(let p=0;p<u;p++){const w=p*h-o;for(let P=0;P<c;P++){const M=P*f-s;v.push(M,-w,0),b.push(0,0,1),m.push(P/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const P=w+c*p,M=w+c*(p+1),R=w+1+c*(p+1),A=w+1+c*p;d.push(P,M,A),d.push(M,R,A)}this.setIndex(d),this.setAttribute("position",new qt(v,3)),this.setAttribute("normal",new qt(b,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zu extends pn{constructor(e=new Ba([new De(0,.5),new De(-.5,-.5),new De(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(s,3)),this.setAttribute("uv",new qt(o,2));function c(u){const f=r.length/3,h=u.extractPoints(t);let d=h.shape;const v=h.holes;Hi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=v.length;m<p;m++){const w=v[m];Hi.isClockWise(w)===!0&&(v[m]=w.reverse())}const b=Hi.triangulateShape(d,v);for(let m=0,p=v.length;m<p;m++){const w=v[m];d=d.concat(w)}for(let m=0,p=d.length;m<p;m++){const w=d[m];r.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let m=0,p=b.length;m<p;m++){const w=b[m],P=w[0]+f,M=w[1]+f,R=w[2]+f;i.push(P,M,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return wx(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Zu(i,e.curveSegments)}}function wx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class za extends pn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new q,h=new q,d=[],v=[],b=[],m=[];for(let p=0;p<=i;p++){const w=[],P=p/i,M=o+P*a,R=e*Math.cos(M),A=Math.sqrt(e*e-R*R);let O=0;p===0&&o===0?O=.5/t:p===i&&l===Math.PI&&(O=-.5/t);for(let y=0;y<=t;y++){const I=y/t,z=r+I*s;f.x=-A*Math.cos(z),f.y=R,f.z=A*Math.sin(z),v.push(f.x,f.y,f.z),h.copy(f).normalize(),b.push(h.x,h.y,h.z),m.push(I+O,1-P),w.push(c++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const P=u[p][w+1],M=u[p][w],R=u[p+1][w],A=u[p+1][w+1];(p!==0||o>0)&&d.push(P,M,A),(p!==i-1||l<Math.PI)&&d.push(M,R,A)}this.setIndex(d),this.setAttribute("position",new qt(v,3)),this.setAttribute("normal",new qt(b,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Tf(r))r.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Tf(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=ps(n[t]);for(const r in i)e[r]=i[r]}return e}function Tf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Cx={clone:ps,merge:vn};var Px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Px,this.fragmentShader=Dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new xt().setHex(r.value);break;case"v2":this.uniforms[i].value=new De().fromArray(r.value);break;case"v3":this.uniforms[i].value=new q().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ht().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Lx extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ix extends _s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ux extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nx extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zp extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ic=new Bt,Af=new q,wf=new q;class Fx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xu,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Af.setFromMatrixPosition(e.matrixWorld),t.position.copy(Af),wf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ic,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===uo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oa=new q,aa=new hr,ai=new q;class Jp extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oa,aa,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(oa,aa,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sr=new q,Rf=new De,Cf=new De;class Jn extends Jp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uu*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Cf),t.subVectors(Cf,Rf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nl extends Jp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ox extends Fx{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bx extends Zp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Ox}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class zx extends Zp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Zr=-90,Jr=1;class Vx extends on{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn(Zr,Jr,e,t);r.layers=this.layers,this.add(r);const s=new Jn(Zr,Jr,e,t);s.layers=this.layers,this.add(s);const o=new Jn(Zr,Jr,e,t);o.layers=this.layers,this.add(o);const a=new Jn(Zr,Jr,e,t);a.layers=this.layers,this.add(a);const l=new Jn(Zr,Jr,e,t);l.layers=this.layers,this.add(l);const c=new Jn(Zr,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Hx extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Pf=new Bt;class kx{constructor(e,t,i=0,r=1/0){this.ray=new el(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Wu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pf),this}intersectObject(e,t=!0,i=[]){return pu(e,this,i,t),i.sort(Df),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)pu(e[r],this,i,t);return i.sort(Df),i}}function Df(n,e){return n.distance-e.distance}function pu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)pu(s[o],e,t,!0)}}class Lf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jp{static{jp.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}class Gx extends dr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function If(n,e,t,i){const r=Wx(i);switch(t){case Dp:return n*e;case Ip:return n*e/r.components*r.byteLength;case Bu:return n*e/r.components*r.byteLength;case Fr:return n*e*2/r.components*r.byteLength;case zu:return n*e*2/r.components*r.byteLength;case Lp:return n*e*3/r.components*r.byteLength;case jn:return n*e*4/r.components*r.byteLength;case Vu:return n*e*4/r.components*r.byteLength;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case va:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uc:case Fc:return Math.max(n,16)*Math.max(e,8)/4;case Ic:case Nc:return Math.max(n,8)*Math.max(e,8)/2;case Oc:case Bc:case Vc:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zc:case Da:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case iu:case ru:case su:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ou:case au:return Math.ceil(n/4)*Math.ceil(e/4)*8;case La:case lu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wx(n){switch(n){case Ln:case wp:return{byteLength:1,components:1};case lo:case Rp:case yi:return{byteLength:2,components:1};case Fu:case Ou:return{byteLength:2,components:4};case Mi:case Nu:case mi:return{byteLength:4,components:1};case Cp:case Pp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uu}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qp(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,v)=>d.start-v.start);let h=0;for(let d=1;d<f.length;d++){const v=f[h],b=f[d];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++h,f[h]=b)}f.length=h+1;for(let d=0,v=f.length;d<v;d++){const b=f[d];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var $x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qx=`#ifdef USE_ALPHAHASH
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
#endif`,Yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
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
#endif`,Qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eS=`#ifdef USE_BATCHING
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
#endif`,tS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sS=`#ifdef USE_IRIDESCENCE
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
#endif`,oS=`#ifdef USE_BUMPMAP
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
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mS=`#define PI 3.141592653589793
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
} // validated`,gS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_S=`vec3 transformedNormal = objectNormal;
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
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yS="gl_FragColor = linearToOutputTexel( gl_FragColor );",bS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ES=`#ifdef USE_ENVMAP
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
#endif`,TS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
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
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IS=`#ifdef USE_GRADIENTMAP
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
}`,US=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,BS=`#ifdef USE_ENVMAP
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
#endif`,zS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GS=`PhysicalMaterial material;
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
#endif`,WS=`uniform sampler2D dfgLUT;
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
}`,XS=`
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
#endif`,$S=`#if defined( RE_IndirectDiffuse )
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
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,KS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nM=`#if defined( USE_POINTS_UV )
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
#endif`,iM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
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
#endif`,cM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mM=`#ifdef USE_NORMALMAP
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
#endif`,gM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DM=`float getShadowMask() {
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
}`,LM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IM=`#ifdef USE_SKINNING
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
#endif`,UM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
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
#endif`,FM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#ifdef USE_TRANSMISSION
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
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qM=`uniform sampler2D t2D;
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
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`#include <common>
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
}`,QM=`#if DEPTH_PACKING == 3200
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
}`,ey=`#define DISTANCE
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
}`,ty=`#define DISTANCE
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`uniform float scale;
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
}`,sy=`uniform vec3 diffuse;
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
}`,oy=`#include <common>
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
}`,ay=`uniform vec3 diffuse;
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
}`,ly=`#define LAMBERT
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
}`,cy=`#define LAMBERT
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
}`,uy=`#define MATCAP
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
}`,hy=`#define MATCAP
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
}`,fy=`#define NORMAL
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
}`,dy=`#define NORMAL
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
}`,py=`#define PHONG
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
}`,my=`#define PHONG
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
}`,gy=`#define STANDARD
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
}`,_y=`#define STANDARD
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
}`,vy=`#define TOON
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
}`,xy=`#define TOON
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
}`,Sy=`uniform float size;
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
}`,My=`uniform vec3 diffuse;
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
}`,yy=`#include <common>
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
}`,by=`uniform vec3 color;
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
}`,Ey=`uniform float rotation;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:$x,alphahash_pars_fragment:qx,alphamap_fragment:Yx,alphamap_pars_fragment:Kx,alphatest_fragment:Zx,alphatest_pars_fragment:Jx,aomap_fragment:jx,aomap_pars_fragment:Qx,batching_pars_vertex:eS,batching_vertex:tS,begin_vertex:nS,beginnormal_vertex:iS,bsdfs:rS,iridescence_fragment:sS,bumpmap_pars_fragment:oS,clipping_planes_fragment:aS,clipping_planes_pars_fragment:lS,clipping_planes_pars_vertex:cS,clipping_planes_vertex:uS,color_fragment:hS,color_pars_fragment:fS,color_pars_vertex:dS,color_vertex:pS,common:mS,cube_uv_reflection_fragment:gS,defaultnormal_vertex:_S,displacementmap_pars_vertex:vS,displacementmap_vertex:xS,emissivemap_fragment:SS,emissivemap_pars_fragment:MS,colorspace_fragment:yS,colorspace_pars_fragment:bS,envmap_fragment:ES,envmap_common_pars_fragment:TS,envmap_pars_fragment:AS,envmap_pars_vertex:wS,envmap_physical_pars_fragment:BS,envmap_vertex:RS,fog_vertex:CS,fog_pars_vertex:PS,fog_fragment:DS,fog_pars_fragment:LS,gradientmap_pars_fragment:IS,lightmap_pars_fragment:US,lights_lambert_fragment:NS,lights_lambert_pars_fragment:FS,lights_pars_begin:OS,lights_toon_fragment:zS,lights_toon_pars_fragment:VS,lights_phong_fragment:HS,lights_phong_pars_fragment:kS,lights_physical_fragment:GS,lights_physical_pars_fragment:WS,lights_fragment_begin:XS,lights_fragment_maps:$S,lights_fragment_end:qS,lightprobes_pars_fragment:YS,logdepthbuf_fragment:KS,logdepthbuf_pars_fragment:ZS,logdepthbuf_pars_vertex:JS,logdepthbuf_vertex:jS,map_fragment:QS,map_pars_fragment:eM,map_particle_fragment:tM,map_particle_pars_fragment:nM,metalnessmap_fragment:iM,metalnessmap_pars_fragment:rM,morphinstance_vertex:sM,morphcolor_vertex:oM,morphnormal_vertex:aM,morphtarget_pars_vertex:lM,morphtarget_vertex:cM,normal_fragment_begin:uM,normal_fragment_maps:hM,normal_pars_fragment:fM,normal_pars_vertex:dM,normal_vertex:pM,normalmap_pars_fragment:mM,clearcoat_normal_fragment_begin:gM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:vM,iridescence_pars_fragment:xM,opaque_fragment:SM,packing:MM,premultiplied_alpha_fragment:yM,project_vertex:bM,dithering_fragment:EM,dithering_pars_fragment:TM,roughnessmap_fragment:AM,roughnessmap_pars_fragment:wM,shadowmap_pars_fragment:RM,shadowmap_pars_vertex:CM,shadowmap_vertex:PM,shadowmask_pars_fragment:DM,skinbase_vertex:LM,skinning_pars_vertex:IM,skinning_vertex:UM,skinnormal_vertex:NM,specularmap_fragment:FM,specularmap_pars_fragment:OM,tonemapping_fragment:BM,tonemapping_pars_fragment:zM,transmission_fragment:VM,transmission_pars_fragment:HM,uv_pars_fragment:kM,uv_pars_vertex:GM,uv_vertex:WM,worldpos_vertex:XM,background_vert:$M,background_frag:qM,backgroundCube_vert:YM,backgroundCube_frag:KM,cube_vert:ZM,cube_frag:JM,depth_vert:jM,depth_frag:QM,distance_vert:ey,distance_frag:ty,equirect_vert:ny,equirect_frag:iy,linedashed_vert:ry,linedashed_frag:sy,meshbasic_vert:oy,meshbasic_frag:ay,meshlambert_vert:ly,meshlambert_frag:cy,meshmatcap_vert:uy,meshmatcap_frag:hy,meshnormal_vert:fy,meshnormal_frag:dy,meshphong_vert:py,meshphong_frag:my,meshphysical_vert:gy,meshphysical_frag:_y,meshtoon_vert:vy,meshtoon_frag:xy,points_vert:Sy,points_frag:My,shadow_vert:yy,shadow_frag:by,sprite_vert:Ey,sprite_frag:Ty},He={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},fi={basic:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:vn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:vn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new xt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:vn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:vn([He.points,He.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:vn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:vn([He.common,He.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:vn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:vn([He.sprite,He.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:vn([He.common,He.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:vn([He.lights,He.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};fi.physical={uniforms:vn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const la={r:0,b:0,g:0},Ay=new Bt,em=new ut;em.set(-1,0,0,0,1,0,0,0,1);function wy(n,e,t,i,r,s){const o=new xt(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function d(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){const M=w.backgroundBlurriness>0;P=e.get(P,M)}return P}function v(w){let P=!1;const M=d(w);M===null?m(o,a):M&&M.isColor&&(m(M,1),P=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(w,P){const M=d(P);M&&(M.isCubeTexture||M.mapping===ja)?(c===void 0&&(c=new Un(new So(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:ps(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(em),c.material.toneMapped=vt.getTransfer(M.colorSpace)!==Pt,(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Un(new tl(2,2),new bi({name:"BackgroundMaterial",uniforms:ps(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=vt.getTransfer(M.colorSpace)!==Pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,P){w.getRGB(la,Kp(n)),t.buffers.color.setClear(la.r,la.g,la.b,P,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,P=1){o.set(w),a=P,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,m(o,a)},render:v,addToRenderList:b,dispose:p}}function Ry(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(k,ne,ie,H,J){let ae=!1;const j=f(k,H,ie,ne);s!==j&&(s=j,c(s.object)),ae=d(k,H,ie,J),ae&&v(k,H,ie,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,M(k,ne,ie,H),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function c(k){return n.bindVertexArray(k)}function u(k){return n.deleteVertexArray(k)}function f(k,ne,ie,H){const J=H.wireframe===!0;let ae=i[ne.id];ae===void 0&&(ae={},i[ne.id]=ae);const j=k.isInstancedMesh===!0?k.id:0;let pe=ae[j];pe===void 0&&(pe={},ae[j]=pe);let le=pe[ie.id];le===void 0&&(le={},pe[ie.id]=le);let ve=le[J];return ve===void 0&&(ve=h(l()),le[J]=ve),ve}function h(k){const ne=[],ie=[],H=[];for(let J=0;J<t;J++)ne[J]=0,ie[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:ie,attributeDivisors:H,object:k,attributes:{},index:null}}function d(k,ne,ie,H){const J=s.attributes,ae=ne.attributes;let j=0;const pe=ie.getAttributes();for(const le in pe)if(pe[le].location>=0){const me=J[le];let Ae=ae[le];if(Ae===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(Ae=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(Ae=k.instanceColor)),me===void 0||me.attribute!==Ae||Ae&&me.data!==Ae.data)return!0;j++}return s.attributesNum!==j||s.index!==H}function v(k,ne,ie,H){const J={},ae=ne.attributes;let j=0;const pe=ie.getAttributes();for(const le in pe)if(pe[le].location>=0){let me=ae[le];me===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(me=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(me=k.instanceColor));const Ae={};Ae.attribute=me,me&&me.data&&(Ae.data=me.data),J[le]=Ae,j++}s.attributes=J,s.attributesNum=j,s.index=H}function b(){const k=s.newAttributes;for(let ne=0,ie=k.length;ne<ie;ne++)k[ne]=0}function m(k){p(k,0)}function p(k,ne){const ie=s.newAttributes,H=s.enabledAttributes,J=s.attributeDivisors;ie[k]=1,H[k]===0&&(n.enableVertexAttribArray(k),H[k]=1),J[k]!==ne&&(n.vertexAttribDivisor(k,ne),J[k]=ne)}function w(){const k=s.newAttributes,ne=s.enabledAttributes;for(let ie=0,H=ne.length;ie<H;ie++)ne[ie]!==k[ie]&&(n.disableVertexAttribArray(ie),ne[ie]=0)}function P(k,ne,ie,H,J,ae,j){j===!0?n.vertexAttribIPointer(k,ne,ie,J,ae):n.vertexAttribPointer(k,ne,ie,H,J,ae)}function M(k,ne,ie,H){b();const J=H.attributes,ae=ie.getAttributes(),j=ne.defaultAttributeValues;for(const pe in ae){const le=ae[pe];if(le.location>=0){let ve=J[pe];if(ve===void 0&&(pe==="instanceMatrix"&&k.instanceMatrix&&(ve=k.instanceMatrix),pe==="instanceColor"&&k.instanceColor&&(ve=k.instanceColor)),ve!==void 0){const me=ve.normalized,Ae=ve.itemSize,Be=e.get(ve);if(Be===void 0)continue;const nt=Be.buffer,st=Be.type,tt=Be.bytesPerElement,he=st===n.INT||st===n.UNSIGNED_INT||ve.gpuType===Nu;if(ve.isInterleavedBufferAttribute){const oe=ve.data,Te=oe.stride,We=ve.offset;if(oe.isInstancedInterleavedBuffer){for(let Le=0;Le<le.locationSize;Le++)p(le.location+Le,oe.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Le=0;Le<le.locationSize;Le++)m(le.location+Le);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Le=0;Le<le.locationSize;Le++)P(le.location+Le,Ae/le.locationSize,st,me,Te*tt,(We+Ae/le.locationSize*Le)*tt,he)}else{if(ve.isInstancedBufferAttribute){for(let oe=0;oe<le.locationSize;oe++)p(le.location+oe,ve.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let oe=0;oe<le.locationSize;oe++)m(le.location+oe);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let oe=0;oe<le.locationSize;oe++)P(le.location+oe,Ae/le.locationSize,st,me,Ae*tt,Ae/le.locationSize*oe*tt,he)}}else if(j!==void 0){const me=j[pe];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(le.location,me);break;case 3:n.vertexAttrib3fv(le.location,me);break;case 4:n.vertexAttrib4fv(le.location,me);break;default:n.vertexAttrib1fv(le.location,me)}}}}w()}function R(){I();for(const k in i){const ne=i[k];for(const ie in ne){const H=ne[ie];for(const J in H){const ae=H[J];for(const j in ae)u(ae[j].object),delete ae[j];delete H[J]}}delete i[k]}}function A(k){if(i[k.id]===void 0)return;const ne=i[k.id];for(const ie in ne){const H=ne[ie];for(const J in H){const ae=H[J];for(const j in ae)u(ae[j].object),delete ae[j];delete H[J]}}delete i[k.id]}function O(k){for(const ne in i){const ie=i[ne];for(const H in ie){const J=ie[H];if(J[k.id]===void 0)continue;const ae=J[k.id];for(const j in ae)u(ae[j].object),delete ae[j];delete J[k.id]}}}function y(k){for(const ne in i){const ie=i[ne],H=k.isInstancedMesh===!0?k.id:0,J=ie[H];if(J!==void 0){for(const ae in J){const j=J[ae];for(const pe in j)u(j[pe].object),delete j[pe];delete J[ae]}delete ie[H],Object.keys(ie).length===0&&delete i[ne]}}}function I(){z(),o=!0,s!==r&&(s=r,c(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:z,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:m,disableUnusedAttributes:w}}function Cy(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Py(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(O){return!(O!==jn&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(O){const y=O===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ln&&O!==mi&&!y&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(at("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:M,maxSamples:R,samples:A}}function Dy(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Oi,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const v=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,P=w*4;let M=p.clippingState||null;l.value=M,M=u(v,h,P,d);for(let R=0;R!==P;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,v){const b=f!==null?f.length:0;let m=null;if(b!==0){if(m=l.value,v!==!0||m===null){const p=d+b*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,M=d;P!==b;++P,M+=4)o.copy(f[P]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const is=4,Ly=6,Iy=20,Uy=256,Us=new nl,Uf=new xt;let rc=null,sc=0,oc=0,ac=!1;const Ny=new q,Er=new q;class Nf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Ny}=s;rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rc,sc,oc),this._renderer.xr.enabled=ac,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:yi,format:jn,colorSpace:Ia,depthBuffer:!1},r=Ff(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ff(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fy(s)),this._blurMaterial=By(s,e,t),this._ggxMaterial=Oy(s,e,t)}return r}_compileMaterial(e){const t=new Un(new pn,e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,i,r,s){const l=new Jn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Uf),f.toneMapping=vi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new So,new js({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let p=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(Uf),p=!0);for(let P=0;P<6;P++){const M=P%3;M===0?(l.up.set(0,c[P],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[P],s.y,s.z)):M===1?(l.up.set(0,0,c[P]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[P],s.z)):(l.up.set(0,c[P],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[P]));const R=this._cubeSize;jr(r,M*R,P>2?R:0,R,R),f.setRenderTarget(r),p&&f.render(b,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Nr||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Us)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:v}=this,b=this._sizeLods[i],m=3*b*(i>v-is?i-v+is:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=v-t,jr(s,m,p,3*b,2*b),r.setRenderTarget(s),r.render(a,Us),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,jr(e,m,p,3*b,2*b),r.setRenderTarget(e),r.render(a,Us)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,t,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-is?r-this._lodMax+is:0),h=4*(this._cubeSize-u);jr(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(l,Us)}}function Fy(n){const e=[],t=[];let i=n;const r=n-is+1+Ly;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,v=new Float32Array(d*h*f),b=new Float32Array(d*h*f);for(let p=0;p<f;p++){const w=p%3*2/3-1,P=p>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(M,d*h*p);for(let R=0;R<h;R++){const A=u[R*2]*2-1,O=u[R*2+1]*2-1;p===0?Er.set(1,O,A):p===1?Er.set(-A,1,-O):p===2?Er.set(-A,O,1):p===3?Er.set(-1,O,-A):p===4?Er.set(-A,-1,O):Er.set(A,O,-1),Er.toArray(b,(p*h+R)*d)}}const m=new pn;m.setAttribute("position",new $i(v,d)),m.setAttribute("outputDirection",new $i(b,d)),t.push(new Un(m,null)),i>is&&i--}return{lodMeshes:t,sizeLods:e}}function Ff(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Oy(n,e,t){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function By(n,e,t){return new bi({name:"SphericalGaussianBlur",defines:{SAMPLES:Iy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Of(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Bf(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class tm extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new So(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Wi});s.uniforms.tEquirect.value=t;const o=new Un(r,s),a=t.minFilter;return t.minFilter===Cr&&(t.minFilter=fn),new Vx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function zy(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===wl||d===Rl)if(e.has(h)){const v=e.get(h).texture;return a(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const b=new tm(v.height);return b.fromEquirectangularTexture(n,h),e.set(h,b),h.addEventListener("dispose",c),a(b.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,v=d===wl||d===Rl,b=d===Nr||d===fs;if(v||b){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Nf(n)),m=v?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const w=h.image;return v&&w&&w.height>0||b&&w&&l(w)?(i===null&&(i=new Nf(n)),m=v?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===wl?h.mapping=Nr:d===Rl&&(h.mapping=fs),h}function l(h){let d=0;const v=6;for(let b=0;b<v;b++)h[b]!==void 0&&d++;return d===v}function c(h){const d=h.target;d.removeEventListener("dispose",c);const v=e.get(d);v!==void 0&&(e.delete(d),v.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Vy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&as("WebGLRenderer: "+i+" extension not supported."),r}}}function Hy(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,v=f.attributes.position;let b=0;if(v===void 0)return;if(d!==null){const w=d.array;b=d.version;for(let P=0,M=w.length;P<M;P+=3){const R=w[P+0],A=w[P+1],O=w[P+2];h.push(R,A,A,O,O,R)}}else{const w=v.array;b=v.version;for(let P=0,M=w.length/3-1;P<M;P+=3){const R=P+0,A=P+1,O=P+2;h.push(R,A,A,O,O,R)}}const m=new(v.count>=65535?Bp:Op)(h,1);m.version=b;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ky(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,s,f*o,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,d);let b=0;for(let m=0;m<d;m++)b+=h[m];t.update(b,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Gy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Mt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Wy(n,e,t){const i=new WeakMap,r=new Ht;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let I=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let P=0;d===!0&&(P=1),v===!0&&(P=2),b===!0&&(P=3);let M=a.attributes.position.count*P,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*R*4*f),O=new Np(A,M,R,f);O.type=mi,O.needsUpdate=!0;const y=P*4;for(let z=0;z<f;z++){const k=m[z],ne=p[z],ie=w[z],H=M*R*4*z;for(let J=0;J<k.count;J++){const ae=J*y;d===!0&&(r.fromBufferAttribute(k,J),A[H+ae+0]=r.x,A[H+ae+1]=r.y,A[H+ae+2]=r.z,A[H+ae+3]=0),v===!0&&(r.fromBufferAttribute(ne,J),A[H+ae+4]=r.x,A[H+ae+5]=r.y,A[H+ae+6]=r.z,A[H+ae+7]=0),b===!0&&(r.fromBufferAttribute(ie,J),A[H+ae+8]=r.x,A[H+ae+9]=r.y,A[H+ae+10]=r.z,A[H+ae+11]=ie.itemSize===4?r.w:1)}}h={count:f,texture:O,size:new De(M,R)},i.set(a,h),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];const v=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Xy(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const $y={[xp]:"LINEAR_TONE_MAPPING",[Sp]:"REINHARD_TONE_MAPPING",[Mp]:"CINEON_TONE_MAPPING",[yp]:"ACES_FILMIC_TONE_MAPPING",[Ep]:"AGX_TONE_MAPPING",[Tp]:"NEUTRAL_TONE_MAPPING",[bp]:"CUSTOM_TONE_MAPPING"};function qy(n,e,t,i,r,s){const o=new ti(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new pn;c.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new qt([0,2,0,0,2,0],2));const u=new Lx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Un(c,u),h=new nl(-1,1,1,-1,0,1);let d=null,v=null,b=!1,m,p=null,w=[],P=!1;this.setSize=function(M,R){o.setSize(M,R),a!==null&&a.setSize(M,R),l!==null&&l.setSize(M,R);for(let A=0;A<w.length;A++){const O=w[A];O.setSize&&O.setSize(M,R)}},this.setEffects=function(M){w=M,P=w.length>0&&w[0].isRenderPass===!0;const R=o.width,A=o.height;w.length>0&&a===null&&(a=new ti(R,A,{type:yi,depthBuffer:!1,stencilBuffer:!1}),l=new ti(R,A,{type:yi,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<w.length;O++){const y=w[O];y.setSize&&y.setSize(R,A)}},this.begin=function(M,R){if(b||M.toneMapping===vi&&w.length===0)return!1;if(p=R,R!==null){const A=R.width,O=R.height;(o.width!==A||o.height!==O)&&this.setSize(A,O)}return P===!1&&M.setRenderTarget(o),m=M.toneMapping,M.toneMapping=vi,!0},this.hasRenderPass=function(){return P},this.end=function(M,R){M.toneMapping=m,b=!0;let A=o,O=a;for(let y=0;y<w.length;y++){const I=w[y];I.enabled!==!1&&(I.render(M,O,A,R),I.needsSwap!==!1&&(A=O,O=O===a?l:a))}if(d!==M.outputColorSpace||v!==M.toneMapping){d=M.outputColorSpace,v=M.toneMapping,u.defines={},vt.getTransfer(d)===Pt&&(u.defines.SRGB_TRANSFER="");const y=$y[v];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,M.setRenderTarget(p),M.render(f,h),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const nm=new Mn,mu=new ho(1,1),im=new Np,rm=new Av,sm=new zp,zf=[],Vf=[],Hf=new Float32Array(16),kf=new Float32Array(9),Gf=new Float32Array(4);function vs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zf[r];if(s===void 0&&(s=new Float32Array(r),zf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rl(n,e){let t=Vf[e];t===void 0&&(t=new Int32Array(e),Vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Yy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function jy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Gf.set(i),n.uniformMatrix2fv(this.addr,!1,Gf),Zt(t,i)}}function Qy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;kf.set(i),n.uniformMatrix3fv(this.addr,!1,kf),Zt(t,i)}}function eb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Hf.set(i),n.uniformMatrix4fv(this.addr,!1,Hf),Zt(t,i)}}function tb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function ib(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function sb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ob(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function cb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(mu.compareFunction=t.isReversedDepthBuffer()?ku:Hu,s=mu):s=nm,t.setTexture2D(e||s,r)}function ub(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||rm,r)}function hb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||sm,r)}function fb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||im,r)}function db(n){switch(n){case 5126:return Yy;case 35664:return Ky;case 35665:return Zy;case 35666:return Jy;case 35674:return jy;case 35675:return Qy;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ob;case 36295:return ab;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return fb}}function pb(n,e){n.uniform1fv(this.addr,e)}function mb(n,e){const t=vs(e,this.size,2);n.uniform2fv(this.addr,t)}function gb(n,e){const t=vs(e,this.size,3);n.uniform3fv(this.addr,t)}function _b(n,e){const t=vs(e,this.size,4);n.uniform4fv(this.addr,t)}function vb(n,e){const t=vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xb(n,e){const t=vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sb(n,e){const t=vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mb(n,e){n.uniform1iv(this.addr,e)}function yb(n,e){n.uniform2iv(this.addr,e)}function bb(n,e){n.uniform3iv(this.addr,e)}function Eb(n,e){n.uniform4iv(this.addr,e)}function Tb(n,e){n.uniform1uiv(this.addr,e)}function Ab(n,e){n.uniform2uiv(this.addr,e)}function wb(n,e){n.uniform3uiv(this.addr,e)}function Rb(n,e){n.uniform4uiv(this.addr,e)}function Cb(n,e,t){const i=this.cache,r=e.length,s=rl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=mu:o=nm;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Pb(n,e,t){const i=this.cache,r=e.length,s=rl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||rm,s[o])}function Db(n,e,t){const i=this.cache,r=e.length,s=rl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||sm,s[o])}function Lb(n,e,t){const i=this.cache,r=e.length,s=rl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||im,s[o])}function Ib(n){switch(n){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return _b;case 35674:return vb;case 35675:return xb;case 35676:return Sb;case 5124:case 35670:return Mb;case 35667:case 35671:return yb;case 35668:case 35672:return bb;case 35669:case 35673:return Eb;case 5125:return Tb;case 36294:return Ab;case 36295:return wb;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Lb}}class Ub{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=db(t.type)}}class Nb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ib(t.type)}}class Fb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function Wf(n,e){n.seq.push(e),n.map[e.id]=e}function Ob(n,e,t){const i=n.name,r=i.length;for(lc.lastIndex=0;;){const s=lc.exec(i),o=lc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wf(t,c===void 0?new Ub(a,n,e):new Nb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Fb(a),Wf(t,f)),t=f}}}class Ma{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Ob(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Xf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bb=37297;let zb=0;function Vb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const $f=new ut;function Hb(n){vt._getMatrix($f,vt.workingColorSpace,n);const e=`mat3( ${$f.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case Ua:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Vb(n.getShaderSource(e),a)}else return s}function kb(n,e){const t=Hb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Gb={[xp]:"Linear",[Sp]:"Reinhard",[Mp]:"Cineon",[yp]:"ACESFilmic",[Ep]:"AgX",[Tp]:"Neutral",[bp]:"Custom"};function Wb(n,e){const t=Gb[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ca=new q;function Xb(){vt.getLuminanceCoefficients(ca);const n=ca.x.toFixed(4),e=ca.y.toFixed(4),t=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $b(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function qb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gs(n){return n!==""}function Yf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(n){return n.replace(Kb,Jb)}const Zb=new Map;function Jb(n,e){let t=dt[e];if(t===void 0){const i=Zb.get(e);if(i!==void 0)t=dt[i],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gu(t)}const jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(n){return n.replace(jb,Qb)}function Qb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const eE={[ma]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function tE(n){return eE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nE={[Nr]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function iE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":nE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const rE={[fs]:"ENVMAP_MODE_REFRACTION"};function sE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":rE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oE={[vp]:"ENVMAP_BLENDING_MULTIPLY",[nv]:"ENVMAP_BLENDING_MIX",[iv]:"ENVMAP_BLENDING_ADD"};function aE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":oE[n.combine]||"ENVMAP_BLENDING_NONE"}function lE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function cE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tE(t),c=iE(t),u=sE(t),f=aE(t),h=lE(t),d=$b(t),v=qb(s),b=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(m=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?dt.tonemapping_pars_fragment:"",t.toneMapping!==vi?Wb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,kb("linearToOutputTexel",t.outputColorSpace),Xb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=gu(o),o=Yf(o,t),o=Kf(o,t),a=gu(a),a=Yf(a,t),a=Kf(a,t),o=Zf(o),a=Zf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=w+m+o,M=w+p+a,R=Xf(r,r.VERTEX_SHADER,P),A=Xf(r,r.FRAGMENT_SHADER,M);r.attachShader(b,R),r.attachShader(b,A),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function O(k){if(n.debug.checkShaderErrors){const ne=r.getProgramInfoLog(b)||"",ie=r.getShaderInfoLog(R)||"",H=r.getShaderInfoLog(A)||"",J=ne.trim(),ae=ie.trim(),j=H.trim();let pe=!0,le=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(pe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,R,A);else{const ve=qf(r,R,"vertex"),me=qf(r,A,"fragment");Mt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+ve+`
`+me)}else J!==""?at("WebGLProgram: Program Info Log:",J):(ae===""||j==="")&&(le=!1);le&&(k.diagnostics={runnable:pe,programLog:J,vertexShader:{log:ae,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(R),r.deleteShader(A),y=new Ma(r,b),I=Yb(r,b)}let y;this.getUniforms=function(){return y===void 0&&O(this),y};let I;this.getAttributes=function(){return I===void 0&&O(this),I};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(b,Bb)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=A,this}let uE=0;class hE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fE(e),t.set(e,i)),i}}class fE{constructor(e){this.id=uE++,this.code=e,this.usedTimes=0}}function dE(n){return n===Fr||n===Da||n===La}function pE(n,e,t,i,r,s){const o=new Wu,a=new hE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,I,z,k,ne,ie){const H=k.fog,J=ne.geometry,ae=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,pe=e.get(y.envMap||ae,j),le=pe&&pe.mapping===ja?pe.image.height:null,ve=d[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&at("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ae=me!==void 0?me.length:0;let Be=0;J.morphAttributes.position!==void 0&&(Be=1),J.morphAttributes.normal!==void 0&&(Be=2),J.morphAttributes.color!==void 0&&(Be=3);let nt,st,tt,he;if(ve){const Lt=fi[ve];nt=Lt.vertexShader,st=Lt.fragmentShader}else{nt=y.vertexShader,st=y.fragmentShader;const Lt=a.getVertexShaderStage(y),gt=a.getFragmentShaderStage(y);a.update(y,Lt,gt),tt=Lt.id,he=gt.id}const oe=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),We=ne.isInstancedMesh===!0,Le=ne.isBatchedMesh===!0,C=!!y.map,F=!!y.matcap,U=!!pe,W=!!y.aoMap,X=!!y.lightMap,G=!!y.bumpMap&&y.wireframe===!1,Q=!!y.normalMap,fe=!!y.displacementMap,ce=!!y.emissiveMap,te=!!y.metalnessMap,B=!!y.roughnessMap,_=y.anisotropy>0,D=y.clearcoat>0,ge=y.dispersion>0,T=y.retroreflectivity>0,g=y.iridescence>0,N=y.sheen>0,K=y.transmission>0,ee=_&&!!y.anisotropyMap,we=D&&!!y.clearcoatMap,Re=D&&!!y.clearcoatNormalMap,de=D&&!!y.clearcoatRoughnessMap,Me=g&&!!y.iridescenceMap,Ce=g&&!!y.iridescenceThicknessMap,ke=N&&!!y.sheenColorMap,Fe=N&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,Ze=!!y.specularColorMap,je=!!y.specularIntensityMap,ct=K&&!!y.transmissionMap,Y=K&&!!y.thicknessMap,Ue=!!y.gradientMap,Se=!!y.alphaMap,Oe=y.alphaTest>0,ze=!!y.alphaHash,Ee=!!y.extensions;let Je=vi;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Je=n.toneMapping);const Ke={shaderID:ve,shaderType:y.type,shaderName:y.name,vertexShader:nt,fragmentShader:st,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Le,batchingColor:Le&&ne._colorsTexture!==null,instancing:We,instancingColor:We&&ne.instanceColor!==null,instancingMorph:We&&ne.morphTexture!==null,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:C,matcap:F,envMap:U,envMapMode:U&&pe.mapping,envMapCubeUVHeight:le,aoMap:W,lightMap:X,bumpMap:G,normalMap:Q,displacementMap:fe,emissiveMap:ce,normalMapObjectSpace:Q&&y.normalMapType===ov,normalMapTangentSpace:Q&&y.normalMapType===cu,packedNormalMap:Q&&y.normalMapType===cu&&dE(y.normalMap.format),metalnessMap:te,roughnessMap:B,anisotropy:_,anisotropyMap:ee,clearcoat:D,clearcoatMap:we,clearcoatNormalMap:Re,clearcoatRoughnessMap:de,dispersion:ge,retroreflection:T,iridescence:g,iridescenceMap:Me,iridescenceThicknessMap:Ce,sheen:N,sheenColorMap:ke,sheenRoughnessMap:Fe,specularMap:Ie,specularColorMap:Ze,specularIntensityMap:je,transmission:K,transmissionMap:ct,thicknessMap:Y,gradientMap:Ue,opaque:y.transparent===!1&&y.blending===Zs&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:Oe,alphaHash:ze,combine:y.combine,mapUv:C&&v(y.map.channel),aoMapUv:W&&v(y.aoMap.channel),lightMapUv:X&&v(y.lightMap.channel),bumpMapUv:G&&v(y.bumpMap.channel),normalMapUv:Q&&v(y.normalMap.channel),displacementMapUv:fe&&v(y.displacementMap.channel),emissiveMapUv:ce&&v(y.emissiveMap.channel),metalnessMapUv:te&&v(y.metalnessMap.channel),roughnessMapUv:B&&v(y.roughnessMap.channel),anisotropyMapUv:ee&&v(y.anisotropyMap.channel),clearcoatMapUv:we&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Re&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(y.sheenRoughnessMap.channel),specularMapUv:Ie&&v(y.specularMap.channel),specularColorMapUv:Ze&&v(y.specularColorMap.channel),specularIntensityMapUv:je&&v(y.specularIntensityMap.channel),transmissionMapUv:ct&&v(y.transmissionMap.channel),thicknessMapUv:Y&&v(y.thicknessMap.channel),alphaMapUv:Se&&v(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Q||_),vertexNormals:!!J.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!J.attributes.uv&&(C||Se),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||J.attributes.normal===void 0&&Q===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Te,skinning:ne.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Be,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,decodeVideoTexture:C&&y.map.isVideoTexture===!0&&vt.getTransfer(y.map.colorSpace)===Pt,decodeVideoTextureEmissive:ce&&y.emissiveMap.isVideoTexture===!0&&vt.getTransfer(y.emissiveMap.colorSpace)===Pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pi,flipSided:y.side===Rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function m(y){const I=[];if(y.shaderID?I.push(y.shaderID):(I.push(y.customVertexShaderID),I.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)I.push(z),I.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(p(I,y),w(I,y),I.push(n.outputColorSpace)),I.push(y.customProgramCacheKey),I.join()}function p(y,I){y.push(I.precision),y.push(I.outputColorSpace),y.push(I.envMapMode),y.push(I.envMapCubeUVHeight),y.push(I.mapUv),y.push(I.alphaMapUv),y.push(I.lightMapUv),y.push(I.aoMapUv),y.push(I.bumpMapUv),y.push(I.normalMapUv),y.push(I.displacementMapUv),y.push(I.emissiveMapUv),y.push(I.metalnessMapUv),y.push(I.roughnessMapUv),y.push(I.anisotropyMapUv),y.push(I.clearcoatMapUv),y.push(I.clearcoatNormalMapUv),y.push(I.clearcoatRoughnessMapUv),y.push(I.iridescenceMapUv),y.push(I.iridescenceThicknessMapUv),y.push(I.sheenColorMapUv),y.push(I.sheenRoughnessMapUv),y.push(I.specularMapUv),y.push(I.specularColorMapUv),y.push(I.specularIntensityMapUv),y.push(I.transmissionMapUv),y.push(I.thicknessMapUv),y.push(I.combine),y.push(I.fogExp2),y.push(I.sizeAttenuation),y.push(I.morphTargetsCount),y.push(I.morphAttributeCount),y.push(I.numSunLights),y.push(I.numDirLights),y.push(I.numPointLights),y.push(I.numSpotLights),y.push(I.numSpotLightMaps),y.push(I.numHemiLights),y.push(I.numRectAreaLights),y.push(I.numSunLightShadows),y.push(I.numDirLightShadows),y.push(I.numPointLightShadows),y.push(I.numSpotLightShadows),y.push(I.numSpotLightShadowsWithMaps),y.push(I.numLightProbes),y.push(I.shadowMapType),y.push(I.toneMapping),y.push(I.numClippingPlanes),y.push(I.numClipIntersection),y.push(I.depthPacking)}function w(y,I){o.disableAll(),I.instancing&&o.enable(0),I.instancingColor&&o.enable(1),I.instancingMorph&&o.enable(2),I.matcap&&o.enable(3),I.envMap&&o.enable(4),I.normalMapObjectSpace&&o.enable(5),I.normalMapTangentSpace&&o.enable(6),I.clearcoat&&o.enable(7),I.iridescence&&o.enable(8),I.alphaTest&&o.enable(9),I.vertexColors&&o.enable(10),I.vertexAlphas&&o.enable(11),I.vertexUv1s&&o.enable(12),I.vertexUv2s&&o.enable(13),I.vertexUv3s&&o.enable(14),I.vertexTangents&&o.enable(15),I.anisotropy&&o.enable(16),I.alphaHash&&o.enable(17),I.batching&&o.enable(18),I.dispersion&&o.enable(19),I.retroreflection&&o.enable(24),I.batchingColor&&o.enable(20),I.gradientMap&&o.enable(21),I.packedNormalMap&&o.enable(22),I.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.reversedDepthBuffer&&o.enable(4),I.skinning&&o.enable(5),I.morphTargets&&o.enable(6),I.morphNormals&&o.enable(7),I.morphColors&&o.enable(8),I.premultipliedAlpha&&o.enable(9),I.shadowMapEnabled&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.transmission&&o.enable(15),I.sheen&&o.enable(16),I.opaque&&o.enable(17),I.pointsUvs&&o.enable(18),I.decodeVideoTexture&&o.enable(19),I.decodeVideoTextureEmissive&&o.enable(20),I.alphaToCoverage&&o.enable(21),I.numLightProbeGrids>0&&o.enable(22),I.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function P(y){const I=d[y.type];let z;if(I){const k=fi[I];z=Cx.clone(k.uniforms)}else z=y.uniforms;return z}function M(y,I){let z=u.get(I);return z!==void 0?++z.usedTimes:(z=new cE(n,I,y,r),c.push(z),u.set(I,z)),z}function R(y){if(--y.usedTimes===0){const I=c.indexOf(y);c[I]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function A(y){a.remove(y)}function O(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:P,acquireProgram:M,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:O}}function mE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function gE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function jf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,v,b,m,p){let w=n[e];return w===void 0?(w={id:h.id,object:h,geometry:d,material:v,materialVariant:o(h),groupOrder:b,renderOrder:h.renderOrder,z:m,group:p},n[e]=w):(w.id=h.id,w.object=h,w.geometry=d,w.material=v,w.materialVariant=o(h),w.groupOrder=b,w.renderOrder=h.renderOrder,w.z=m,w.group=p),e++,w}function l(h,d,v,b,m,p,w){w.reversedDepth===!0&&(m=-m);const P=a(h,d,v,b,m,p);v.transmission>0?i.push(P):v.transparent===!0?r.push(P):t.push(P)}function c(h,d,v,b,m,p){const w=a(h,d,v,b,m,p);v.transmission>0?i.unshift(w):v.transparent===!0?r.unshift(w):t.unshift(w)}function u(h,d){t.length>1&&t.sort(h||gE),i.length>1&&i.sort(d||jf),r.length>1&&r.sort(d||jf)}function f(){for(let h=e,d=n.length;h<d;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function _E(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qf,n.set(i,[o])):r>=s.length?(o=new Qf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function vE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new q,color:new xt};break;case"SpotLight":t={position:new q,direction:new q,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function xE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let SE=0;function ME(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yE(n){const e=new vE,t=xE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Bt,o=new Bt;function a(c){let u=0,f=0,h=0;for(let ne=0;ne<9;ne++)i.probe[ne].set(0,0,0);let d=0,v=0,b=0,m=0,p=0,w=0,P=0,M=0,R=0,A=0,O=0,y=0,I=0,z=0;c.sort(ME);for(let ne=0,ie=c.length;ne<ie;ne++){const H=c[ne],J=H.color,ae=H.intensity,j=H.distance;let pe=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Fr?pe=H.shadow.map.texture:pe=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)u+=J.r*ae,f+=J.g*ae,h+=J.b*ae;else if(H.isLightProbe){for(let le=0;le<9;le++)i.probe[le].addScaledVector(H.sh.coefficients[le],ae);z++}else if(H.isSunLight){const le=e.get(H);if(le.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ve=H.shadow,me=t.get(H);me.shadowIntensity=ve.intensity,me.shadowBias=ve.bias,me.shadowNormalBias=ve.normalBias,me.shadowRadius=ve.radius,me.shadowMapSize.copy(ve.mapSize).multiply(ve.getFrameExtents()),i.sunShadow[v]=me,i.sunShadowMap[v]=pe;const Ae=ve.getViewportCount();for(let Be=0;Be<Ae;Be++)i.sunShadowMatrix[b+Be]=ve.getMatrix(Be),i.sunShadowCascade[b+Be]=ve._cascadeData[Be];b+=Ae,v++}i.sun[d]=le,d++}else if(H.isDirectionalLight){const le=e.get(H);if(le.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ve=H.shadow,me=t.get(H);me.shadowIntensity=ve.intensity,me.shadowBias=ve.bias,me.shadowNormalBias=ve.normalBias,me.shadowRadius=ve.radius,me.shadowMapSize=ve.mapSize,i.directionalShadow[m]=me,i.directionalShadowMap[m]=pe,i.directionalShadowMatrix[m]=H.shadow.matrix,R++}i.directional[m]=le,m++}else if(H.isSpotLight){const le=e.get(H);le.position.setFromMatrixPosition(H.matrixWorld),le.color.copy(J).multiplyScalar(ae),le.distance=j,le.coneCos=Math.cos(H.angle),le.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),le.decay=H.decay,i.spot[w]=le;const ve=H.shadow;if(H.map&&(i.spotLightMap[y]=H.map,y++,ve.updateMatrices(H),H.castShadow&&I++),i.spotLightMatrix[w]=ve.matrix,H.castShadow){const me=t.get(H);me.shadowIntensity=ve.intensity,me.shadowBias=ve.bias,me.shadowNormalBias=ve.normalBias,me.shadowRadius=ve.radius,me.shadowMapSize=ve.mapSize,i.spotShadow[w]=me,i.spotShadowMap[w]=pe,O++}w++}else if(H.isRectAreaLight){const le=e.get(H);le.color.copy(J).multiplyScalar(ae),le.halfWidth.set(H.width*.5,0,0),le.halfHeight.set(0,H.height*.5,0),i.rectArea[P]=le,P++}else if(H.isPointLight){const le=e.get(H);if(le.color.copy(H.color).multiplyScalar(H.intensity),le.distance=H.distance,le.decay=H.decay,H.castShadow){const ve=H.shadow,me=t.get(H);me.shadowIntensity=ve.intensity,me.shadowBias=ve.bias,me.shadowNormalBias=ve.normalBias,me.shadowRadius=ve.radius,me.shadowMapSize=ve.mapSize,me.shadowCameraNear=ve.camera.near,me.shadowCameraFar=ve.camera.far,i.pointShadow[p]=me,i.pointShadowMap[p]=pe,i.pointShadowMatrix[p]=H.shadow.matrix,A++}i.point[p]=le,p++}else if(H.isHemisphereLight){const le=e.get(H);le.skyColor.copy(H.color).multiplyScalar(ae),le.groundColor.copy(H.groundColor).multiplyScalar(ae),i.hemi[M]=le,M++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const k=i.hash;(k.sunLength!==d||k.directionalLength!==m||k.pointLength!==p||k.spotLength!==w||k.rectAreaLength!==P||k.hemiLength!==M||k.numSunShadows!==v||k.numDirectionalShadows!==R||k.numPointShadows!==A||k.numSpotShadows!==O||k.numSpotMaps!==y||k.numLightProbes!==z)&&(i.sun.length=d,i.directional.length=m,i.spot.length=w,i.rectArea.length=P,i.point.length=p,i.hemi.length=M,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=O,i.spotShadowMap.length=O,i.spotLightMatrix.length=O+y-I,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=z,k.sunLength=d,k.directionalLength=m,k.pointLength=p,k.spotLength=w,k.rectAreaLength=P,k.hemiLength=M,k.numSunShadows=v,k.numDirectionalShadows=R,k.numPointShadows=A,k.numSpotShadows=O,k.numSpotMaps=y,k.numLightProbes=z,i.version=SE++)}function l(c,u){let f=0,h=0,d=0,v=0,b=0,m=0;const p=u.matrixWorldInverse;for(let w=0,P=c.length;w<P;w++){const M=c[w];if(M.isSunLight){const R=i.sun[f];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const R=i.directional[h];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),h++}else if(M.isSpotLight){const R=i.spot[v];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),v++}else if(M.isRectAreaLight){const R=i.rectArea[b];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),b++}else if(M.isPointLight){const R=i.point[d];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function ed(n){const e=new yE(n),t=[],i=[],r=[];function s(h){f.camera=h,t.length=0,i.length=0,r.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function bE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ed(n),e.set(r,[a])):s>=o.length?(a=new ed(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const EE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TE=`uniform sampler2D shadow_pass;
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
}`,AE=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],wE=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],td=new Bt,Ns=new q,cc=new q;function RE(n,e,t){let i=new Xu;const r=new De,s=new De,o=new Ht,a=new Ux,l=new Nx,c={},u=t.maxTextureSize,f={[Ur]:Rn,[Rn]:Ur,[pi]:pi},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:EE,fragmentShader:TE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const v=new pn;v.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Un(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let p=this.type;this.render=function(A,O,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===O0&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ma);const I=n.getRenderTarget(),z=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),ne=n.state;ne.setBlending(Wi),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const ie=p!==this.type;ie&&O.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(J=>J.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,J=A.length;H<J;H++){const ae=A[H],j=ae.shadow;if(j===void 0){at("WebGLShadowMap:",ae,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const pe=j.getFrameExtents();r.multiply(pe),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,j.mapSize.y=s.y));const le=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=le,j.map===null||ie===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Hs){if(ae.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new ti(r.x,r.y,{format:Fr,type:yi,minFilter:fn,magFilter:fn,generateMipmaps:!1}),j.map.texture.name=ae.name+".shadowMap",j.map.depthTexture=new ho(r.x,r.y,mi),j.map.depthTexture.name=ae.name+".shadowMapDepth",j.map.depthTexture.format=Zi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=sn,j.map.depthTexture.magFilter=sn}else ae.isPointLight?(j.map=new tm(r.x),j.map.depthTexture=new $v(r.x,Mi)):(j.map=new ti(r.x,r.y),j.map.depthTexture=new ho(r.x,r.y,Mi)),j.map.depthTexture.name=ae.name+".shadowMap",j.map.depthTexture.format=Zi,this.type===ma?(j.map.depthTexture.compareFunction=le?ku:Hu,j.map.depthTexture.minFilter=fn,j.map.depthTexture.magFilter=fn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=sn,j.map.depthTexture.magFilter=sn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);const ve=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();ae.isPointLight!==!0&&j.updateMatrices(ae,y);for(let me=0;me<ve;me++){const Ae=j.getCamera(me);if(ae.isPointLight){const Be=j.camera,nt=j.matrix,st=ae.distance||Be.far;st!==Be.far&&(Be.far=st,Be.updateProjectionMatrix()),Ns.setFromMatrixPosition(ae.matrixWorld),Be.position.copy(Ns),cc.copy(Be.position),cc.add(AE[me]),Be.up.copy(wE[me]),Be.lookAt(cc),Be.updateMatrixWorld(),nt.makeTranslation(-Ns.x,-Ns.y,-Ns.z),td.multiplyMatrices(Be.projectionMatrix,Be.matrixWorldInverse),j._frustum.setFromProjectionMatrix(td,Be.coordinateSystem,Be.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,me),n.clear();else{me===0&&(n.setRenderTarget(j.map),n.clear());const Be=j.getViewport(me);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),ne.viewport(o)}i=j.getFrustum(me),M(O,y,Ae,ae,this.type)}j.isPointLightShadow!==!0&&this.type===Hs&&w(j,y),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(I,z,k)};function w(A,O){const y=e.update(b);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new ti(r.x,r.y,{format:Fr,type:yi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(O,null,y,h,b,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(O,null,y,d,b,null)}function P(A,O,y,I){let z=null;const k=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)z=k;else if(z=y.isPointLight===!0?l:a,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ne=z.uuid,ie=O.uuid;let H=c[ne];H===void 0&&(H={},c[ne]=H);let J=H[ie];J===void 0&&(J=z.clone(),H[ie]=J,O.addEventListener("dispose",R)),z=J}if(z.visible=O.visible,z.wireframe=O.wireframe,I===Hs?z.side=O.shadowSide!==null?O.shadowSide:O.side:z.side=O.shadowSide!==null?O.shadowSide:f[O.side],z.alphaMap=O.alphaMap,z.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,z.map=O.map,z.clipShadows=O.clipShadows,z.clippingPlanes=O.clippingPlanes,z.clipIntersection=O.clipIntersection,z.displacementMap=O.displacementMap,z.displacementScale=O.displacementScale,z.displacementBias=O.displacementBias,z.wireframeLinewidth=O.wireframeLinewidth,z.linewidth=O.linewidth,y.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const ne=n.properties.get(z);ne.light=y}return z}function M(A,O,y,I,z){if(A.visible===!1)return;if(A.layers.test(O.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===Hs)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const ie=e.update(A),H=A.material;if(Array.isArray(H)){const J=ie.groups;for(let ae=0,j=J.length;ae<j;ae++){const pe=J[ae],le=H[pe.materialIndex];if(le&&le.visible){const ve=P(A,le,I,z);A.onBeforeShadow(n,A,O,y,ie,ve,pe),n.renderBufferDirect(y,null,ie,ve,A,pe),A.onAfterShadow(n,A,O,y,ie,ve,pe)}}}else if(H.visible){const J=P(A,H,I,z);A.onBeforeShadow(n,A,O,y,ie,J,null),n.renderBufferDirect(y,null,ie,J,A,null),A.onAfterShadow(n,A,O,y,ie,J,null)}}const ne=A.children;for(let ie=0,H=ne.length;ie<H;ie++)M(ne[ie],O,y,I,z)}function R(A){A.target.removeEventListener("dispose",R);for(const y in c){const I=c[y],z=A.target.uuid;z in I&&(I[z].dispose(),delete I[z])}}}function CE(n,e){function t(){let Y=!1;const Ue=new Ht;let Se=null;const Oe=new Ht(0,0,0,0);return{setMask:function(ze){Se!==ze&&!Y&&(n.colorMask(ze,ze,ze,ze),Se=ze)},setLocked:function(ze){Y=ze},setClear:function(ze,Ee,Je,Ke,Lt){Lt===!0&&(ze*=Ke,Ee*=Ke,Je*=Ke),Ue.set(ze,Ee,Je,Ke),Oe.equals(Ue)===!1&&(n.clearColor(ze,Ee,Je,Ke),Oe.copy(Ue))},reset:function(){Y=!1,Se=null,Oe.set(-1,0,0,0)}}}function i(){let Y=!1,Ue=!1,Se=null,Oe=null,ze=null;return{setReversed:function(Ee){if(Ue!==Ee){const Je=e.get("EXT_clip_control");Ee?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ee;const Ke=ze;ze=null,this.setClear(Ke)}},getReversed:function(){return Ue},setTest:function(Ee){Ee?oe(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(Ee){Se!==Ee&&!Y&&(n.depthMask(Ee),Se=Ee)},setFunc:function(Ee){if(Ue&&(Ee=vv[Ee]),Oe!==Ee){switch(Ee){case Ec:n.depthFunc(n.NEVER);break;case Tc:n.depthFunc(n.ALWAYS);break;case Ac:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case wc:n.depthFunc(n.EQUAL);break;case Rc:n.depthFunc(n.GEQUAL);break;case Cc:n.depthFunc(n.GREATER);break;case Pc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=Ee}},setLocked:function(Ee){Y=Ee},setClear:function(Ee){ze!==Ee&&(ze=Ee,Ue&&(Ee=1-Ee),n.clearDepth(Ee))},reset:function(){Y=!1,Se=null,Oe=null,ze=null,Ue=!1}}}function r(){let Y=!1,Ue=null,Se=null,Oe=null,ze=null,Ee=null,Je=null,Ke=null,Lt=null;return{setTest:function(gt){Y||(gt?oe(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(gt){Ue!==gt&&!Y&&(n.stencilMask(gt),Ue=gt)},setFunc:function(gt,mn,Nn){(Se!==gt||Oe!==mn||ze!==Nn)&&(n.stencilFunc(gt,mn,Nn),Se=gt,Oe=mn,ze=Nn)},setOp:function(gt,mn,Nn){(Ee!==gt||Je!==mn||Ke!==Nn)&&(n.stencilOp(gt,mn,Nn),Ee=gt,Je=mn,Ke=Nn)},setLocked:function(gt){Y=gt},setClear:function(gt){Lt!==gt&&(n.clearStencil(gt),Lt=gt)},reset:function(){Y=!1,Ue=null,Se=null,Oe=null,ze=null,Ee=null,Je=null,Ke=null,Lt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,v=[],b=null,m=!1,p=null,w=null,P=null,M=null,R=null,A=null,O=null,y=new xt(0,0,0),I=0,z=!1,k=null,ne=null,ie=null,H=null,J=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,pe=0;const le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(le)[1]),j=pe>=1):le.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),j=pe>=2);let ve=null,me={};const Ae=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),nt=new Ht().fromArray(Ae),st=new Ht().fromArray(Be);function tt(Y,Ue,Se,Oe){const ze=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(Y,Ee),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<Se;Je++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Ue,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(Ue+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return Ee}const he={};he[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(ao),G(!1),Q($h),oe(n.CULL_FACE),W(Wi);function oe(Y){u[Y]!==!0&&(n.enable(Y),u[Y]=!0)}function Te(Y){u[Y]!==!1&&(n.disable(Y),u[Y]=!1)}function We(Y,Ue){return h[Y]!==Ue?(n.bindFramebuffer(Y,Ue),h[Y]=Ue,Y===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ue),Y===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Le(Y,Ue){let Se=v,Oe=!1;if(Y){Se=d.get(Ue),Se===void 0&&(Se=[],d.set(Ue,Se));const ze=Y.textures;if(Se.length!==ze.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Je=ze.length;Ee<Je;Ee++)Se[Ee]=n.COLOR_ATTACHMENT0+Ee;Se.length=ze.length,Oe=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(Se)}function C(Y){return b!==Y?(n.useProgram(Y),b=Y,!0):!1}const F={[es]:n.FUNC_ADD,[z0]:n.FUNC_SUBTRACT,[V0]:n.FUNC_REVERSE_SUBTRACT};F[H0]=n.MIN,F[k0]=n.MAX;const U={[G0]:n.ZERO,[W0]:n.ONE,[X0]:n.SRC_COLOR,[gp]:n.SRC_ALPHA,[J0]:n.SRC_ALPHA_SATURATE,[K0]:n.DST_COLOR,[q0]:n.DST_ALPHA,[$0]:n.ONE_MINUS_SRC_COLOR,[_p]:n.ONE_MINUS_SRC_ALPHA,[Z0]:n.ONE_MINUS_DST_COLOR,[Y0]:n.ONE_MINUS_DST_ALPHA,[j0]:n.CONSTANT_COLOR,[Q0]:n.ONE_MINUS_CONSTANT_COLOR,[ev]:n.CONSTANT_ALPHA,[tv]:n.ONE_MINUS_CONSTANT_ALPHA};function W(Y,Ue,Se,Oe,ze,Ee,Je,Ke,Lt,gt){if(Y===Wi){m===!0&&(Te(n.BLEND),m=!1);return}if(m===!1&&(oe(n.BLEND),m=!0),Y!==B0){if(Y!==p||gt!==z){if((w!==es||R!==es)&&(n.blendEquation(n.FUNC_ADD),w=es,R=es),gt)switch(Y){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qh:n.blendFunc(n.ONE,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Mt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yh:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kh:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",Y);break}P=null,M=null,A=null,O=null,y.set(0,0,0),I=0,p=Y,z=gt}return}ze=ze||Ue,Ee=Ee||Se,Je=Je||Oe,(Ue!==w||ze!==R)&&(n.blendEquationSeparate(F[Ue],F[ze]),w=Ue,R=ze),(Se!==P||Oe!==M||Ee!==A||Je!==O)&&(n.blendFuncSeparate(U[Se],U[Oe],U[Ee],U[Je]),P=Se,M=Oe,A=Ee,O=Je),(Ke.equals(y)===!1||Lt!==I)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Lt),y.copy(Ke),I=Lt),p=Y,z=!1}function X(Y,Ue){Y.side===pi?Te(n.CULL_FACE):oe(n.CULL_FACE);let Se=Y.side===Rn;Ue&&(Se=!Se),G(Se),Y.blending===Zs&&Y.transparent===!1?W(Wi):W(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),s.setMask(Y.colorWrite);const Oe=Y.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ce(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(Y){k!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),k=Y)}function Q(Y){Y!==N0?(oe(n.CULL_FACE),Y!==ne&&(Y===$h?n.cullFace(n.BACK):Y===F0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),ne=Y}function fe(Y){Y!==ie&&(j&&n.lineWidth(Y),ie=Y)}function ce(Y,Ue,Se){Y?(oe(n.POLYGON_OFFSET_FILL),(H!==Ue||J!==Se)&&(H=Ue,J=Se,o.getReversed()&&(Ue=-Ue),n.polygonOffset(Ue,Se))):Te(n.POLYGON_OFFSET_FILL)}function te(Y){Y?oe(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function B(Y){Y===void 0&&(Y=n.TEXTURE0+ae-1),ve!==Y&&(n.activeTexture(Y),ve=Y)}function _(Y,Ue,Se){Se===void 0&&(ve===null?Se=n.TEXTURE0+ae-1:Se=ve);let Oe=me[Se];Oe===void 0&&(Oe={type:void 0,texture:void 0},me[Se]=Oe),(Oe.type!==Y||Oe.texture!==Ue)&&(ve!==Se&&(n.activeTexture(Se),ve=Se),n.bindTexture(Y,Ue||he[Y]),Oe.type=Y,Oe.texture=Ue)}function D(){const Y=me[ve];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ge(){try{n.compressedTexImage2D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function g(){try{n.texSubImage2D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function N(){try{n.texSubImage3D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function ee(){try{n.compressedTexSubImage3D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function we(){try{n.texStorage2D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function Re(){try{n.texStorage3D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function de(){try{n.texImage2D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function Me(){try{n.texImage3D(...arguments)}catch(Y){Mt("WebGLState:",Y)}}function Ce(Y){return f[Y]!==void 0?f[Y]:n.getParameter(Y)}function ke(Y,Ue){f[Y]!==Ue&&(n.pixelStorei(Y,Ue),f[Y]=Ue)}function Fe(Y){nt.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),nt.copy(Y))}function Ie(Y){st.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),st.copy(Y))}function Ze(Y,Ue){let Se=c.get(Ue);Se===void 0&&(Se=new WeakMap,c.set(Ue,Se));let Oe=Se.get(Y);Oe===void 0&&(Oe=n.getUniformBlockIndex(Ue,Y.name),Se.set(Y,Oe))}function je(Y,Ue){const Oe=c.get(Ue).get(Y);l.get(Ue)!==Oe&&(n.uniformBlockBinding(Ue,Oe,Y.__bindingPointIndex),l.set(Ue,Oe))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ve=null,me={},h={},d=new WeakMap,v=[],b=null,m=!1,p=null,w=null,P=null,M=null,R=null,A=null,O=null,y=new xt(0,0,0),I=0,z=!1,k=null,ne=null,ie=null,H=null,J=null,nt.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Te,bindFramebuffer:We,drawBuffers:Le,useProgram:C,setBlending:W,setMaterial:X,setFlipSided:G,setCullFace:Q,setLineWidth:fe,setPolygonOffset:ce,setScissorTest:te,activeTexture:B,bindTexture:_,unbindTexture:D,compressedTexImage2D:ge,compressedTexImage3D:T,texImage2D:de,texImage3D:Me,pixelStorei:ke,getParameter:Ce,updateUBOMapping:Ze,uniformBlockBinding:je,texStorage2D:we,texStorage3D:Re,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:K,compressedTexSubImage3D:ee,scissor:Fe,viewport:Ie,reset:ct}}function PE(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,g){return v?new OffscreenCanvas(T,g):Na("canvas")}function m(T,g,N){let K=1;const ee=ge(T);if((ee.width>N||ee.height>N)&&(K=N/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const we=Math.floor(K*ee.width),Re=Math.floor(K*ee.height);h===void 0&&(h=b(we,Re));const de=g?b(we,Re):h;return de.width=we,de.height=Re,de.getContext("2d").drawImage(T,0,0,we,Re),at("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+we+"x"+Re+")."),de}else return"data"in T&&at("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function p(T){return T.generateMipmaps}function w(T){n.generateMipmap(T)}function P(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,g,N,K,ee,we=!1){if(T!==null){if(n[T]!==void 0)return n[T];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Re;K&&(Re=e.get("EXT_texture_norm16"),Re||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=g;if(g===n.RED&&(N===n.FLOAT&&(de=n.R32F),N===n.HALF_FLOAT&&(de=n.R16F),N===n.UNSIGNED_BYTE&&(de=n.R8),N===n.UNSIGNED_SHORT&&Re&&(de=Re.R16_EXT),N===n.SHORT&&Re&&(de=Re.R16_SNORM_EXT)),g===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(de=n.R8UI),N===n.UNSIGNED_SHORT&&(de=n.R16UI),N===n.UNSIGNED_INT&&(de=n.R32UI),N===n.BYTE&&(de=n.R8I),N===n.SHORT&&(de=n.R16I),N===n.INT&&(de=n.R32I)),g===n.RG&&(N===n.FLOAT&&(de=n.RG32F),N===n.HALF_FLOAT&&(de=n.RG16F),N===n.UNSIGNED_BYTE&&(de=n.RG8),N===n.UNSIGNED_SHORT&&Re&&(de=Re.RG16_EXT),N===n.SHORT&&Re&&(de=Re.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(de=n.RG8UI),N===n.UNSIGNED_SHORT&&(de=n.RG16UI),N===n.UNSIGNED_INT&&(de=n.RG32UI),N===n.BYTE&&(de=n.RG8I),N===n.SHORT&&(de=n.RG16I),N===n.INT&&(de=n.RG32I)),g===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(de=n.RGB8UI),N===n.UNSIGNED_SHORT&&(de=n.RGB16UI),N===n.UNSIGNED_INT&&(de=n.RGB32UI),N===n.BYTE&&(de=n.RGB8I),N===n.SHORT&&(de=n.RGB16I),N===n.INT&&(de=n.RGB32I)),g===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),N===n.UNSIGNED_INT&&(de=n.RGBA32UI),N===n.BYTE&&(de=n.RGBA8I),N===n.SHORT&&(de=n.RGBA16I),N===n.INT&&(de=n.RGBA32I)),g===n.RGB&&(N===n.UNSIGNED_SHORT&&Re&&(de=Re.RGB16_EXT),N===n.SHORT&&Re&&(de=Re.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),g===n.RGBA){const Me=we?Ua:vt.getTransfer(ee);N===n.FLOAT&&(de=n.RGBA32F),N===n.HALF_FLOAT&&(de=n.RGBA16F),N===n.UNSIGNED_BYTE&&(de=Me===Pt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&Re&&(de=Re.RGBA16_EXT),N===n.SHORT&&Re&&(de=Re.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(T,g){let N;return T?g===null||g===Mi||g===co?N=n.DEPTH24_STENCIL8:g===mi?N=n.DEPTH32F_STENCIL8:g===lo&&(N=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Mi||g===co?N=n.DEPTH_COMPONENT24:g===mi?N=n.DEPTH_COMPONENT32F:g===lo&&(N=n.DEPTH_COMPONENT16),N}function A(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==sn&&T.minFilter!==fn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function O(T){const g=T.target;g.removeEventListener("dispose",O),I(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function y(T){const g=T.target;g.removeEventListener("dispose",y),k(g)}function I(T){const g=i.get(T);if(g.__webglInit===void 0)return;const N=T.source,K=d.get(N);if(K){const ee=K[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(T),Object.keys(K).length===0&&d.delete(N)}i.remove(T)}function z(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const N=T.source,K=d.get(N);delete K[g.__cacheKey],o.memory.textures--}function k(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let ee=0;ee<g.__webglFramebuffer[K].length;ee++)n.deleteFramebuffer(g.__webglFramebuffer[K][ee]);else n.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)n.deleteFramebuffer(g.__webglFramebuffer[K]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=T.textures;for(let K=0,ee=N.length;K<ee;K++){const we=i.get(N[K]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(N[K])}i.remove(T)}let ne=0;function ie(){ne=0}function H(){return ne}function J(T){ne=T}function ae(){const T=ne;return T>=r.maxTextures&&at("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),ne+=1,T}function j(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function pe(T,g){const N=i.get(T);if(T.isVideoTexture&&_(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const K=T.image;if(K===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(N,T,g);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+g)}function le(T,g){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Te(N,T,g);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+g)}function ve(T,g){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Te(N,T,g);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+g)}function me(T,g){const N=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){We(N,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+g)}const Ae={[Dc]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[Lc]:n.MIRRORED_REPEAT},Be={[sn]:n.NEAREST,[rv]:n.NEAREST_MIPMAP_NEAREST,[No]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Cl]:n.LINEAR_MIPMAP_NEAREST,[Cr]:n.LINEAR_MIPMAP_LINEAR},nt={[lv]:n.NEVER,[dv]:n.ALWAYS,[cv]:n.LESS,[Hu]:n.LEQUAL,[uv]:n.EQUAL,[ku]:n.GEQUAL,[hv]:n.GREATER,[fv]:n.NOTEQUAL};function st(T,g){if(g.type===mi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===fn||g.magFilter===Cl||g.magFilter===No||g.magFilter===Cr||g.minFilter===fn||g.minFilter===Cl||g.minFilter===No||g.minFilter===Cr)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Ae[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Ae[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Ae[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Be[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Be[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,nt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===sn||g.minFilter!==No&&g.minFilter!==Cr||g.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function tt(T,g){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",O));const K=g.source;let ee=d.get(K);ee===void 0&&(ee={},d.set(K,ee));const we=j(g);if(we!==T.__cacheKey){ee[we]===void 0&&(ee[we]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ee[we].usedTimes++;const Re=ee[T.__cacheKey];Re!==void 0&&(ee[T.__cacheKey].usedTimes--,Re.usedTimes===0&&z(g)),T.__cacheKey=we,T.__webglTexture=ee[we].texture}return N}function he(T,g,N){return Math.floor(Math.floor(T/N)/g)}function oe(T,g,N,K){const we=T.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,N,K,g.data);else{we.sort((ke,Fe)=>ke.start-Fe.start);let Re=0;for(let ke=1;ke<we.length;ke++){const Fe=we[Re],Ie=we[ke],Ze=Fe.start+Fe.count,je=he(Ie.start,g.width,4),ct=he(Fe.start,g.width,4);Ie.start<=Ze+1&&je===ct&&he(Ie.start+Ie.count-1,g.width,4)===je?Fe.count=Math.max(Fe.count,Ie.start+Ie.count-Fe.start):(++Re,we[Re]=Ie)}we.length=Re+1;const de=t.getParameter(n.UNPACK_ROW_LENGTH),Me=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ke=0,Fe=we.length;ke<Fe;ke++){const Ie=we[ke],Ze=Math.floor(Ie.start/4),je=Math.ceil(Ie.count/4),ct=Ze%g.width,Y=Math.floor(Ze/g.width),Ue=je,Se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(n.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(n.TEXTURE_2D,0,ct,Y,Ue,Se,N,K,g.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,de),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function Te(T,g,N){let K=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=n.TEXTURE_3D);const ee=tt(T,g),we=g.source;t.bindTexture(K,T.__webglTexture,n.TEXTURE0+N);const Re=i.get(we);if(we.version!==Re.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Se=vt.getPrimaries(vt.workingColorSpace),Oe=g.colorSpace===ar?null:vt.getPrimaries(g.colorSpace),ze=g.colorSpace===ar||Se===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Me=m(g.image,!1,r.maxTextureSize);Me=D(g,Me);const Ce=s.convert(g.format,g.colorSpace),ke=s.convert(g.type);let Fe=M(g.internalFormat,Ce,ke,g.normalized,g.colorSpace,g.isVideoTexture);st(K,g);let Ie;const Ze=g.mipmaps,je=g.isVideoTexture!==!0,ct=Re.__version===void 0||ee===!0,Y=we.dataReady,Ue=A(g,Me);if(g.isDepthTexture)Fe=R(g.format===Pr,g.type),ct&&(je?t.texStorage2D(n.TEXTURE_2D,1,Fe,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,Fe,Me.width,Me.height,0,Ce,ke,null));else if(g.isDataTexture)if(Ze.length>0){je&&ct&&t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Ze[0].width,Ze[0].height);for(let Se=0,Oe=Ze.length;Se<Oe;Se++)Ie=Ze[Se],je?Y&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ce,ke,Ie.data):t.texImage2D(n.TEXTURE_2D,Se,Fe,Ie.width,Ie.height,0,Ce,ke,Ie.data);g.generateMipmaps=!1}else je?(ct&&t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Me.width,Me.height),Y&&oe(g,Me,Ce,ke)):t.texImage2D(n.TEXTURE_2D,0,Fe,Me.width,Me.height,0,Ce,ke,Me.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){je&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Fe,Ze[0].width,Ze[0].height,Me.depth);for(let Se=0,Oe=Ze.length;Se<Oe;Se++)if(Ie=Ze[Se],g.format!==jn)if(Ce!==null)if(je){if(Y)if(g.layerUpdates.size>0){const ze=If(Ie.width,Ie.height,g.format,g.type);for(const Ee of g.layerUpdates){const Je=Ie.data.subarray(Ee*ze/Ie.data.BYTES_PER_ELEMENT,(Ee+1)*ze/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,Ee,Ie.width,Ie.height,1,Ce,Je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,Me.depth,Ce,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,Fe,Ie.width,Ie.height,Me.depth,0,Ie.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?Y&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,Me.depth,Ce,ke,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,Fe,Ie.width,Ie.height,Me.depth,0,Ce,ke,Ie.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{je&&ct&&t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Ze[0].width,Ze[0].height);for(let Se=0,Oe=Ze.length;Se<Oe;Se++)Ie=Ze[Se],g.format!==jn?Ce!==null?je?Y&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ce,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,Fe,Ie.width,Ie.height,0,Ie.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Y&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ce,ke,Ie.data):t.texImage2D(n.TEXTURE_2D,Se,Fe,Ie.width,Ie.height,0,Ce,ke,Ie.data)}else if(g.isDataArrayTexture)if(je){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Fe,Me.width,Me.height,Me.depth),Y)if(g.layerUpdates.size>0){const Se=If(Me.width,Me.height,g.format,g.type);for(const Oe of g.layerUpdates){const ze=Me.data.subarray(Oe*Se/Me.data.BYTES_PER_ELEMENT,(Oe+1)*Se/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Oe,Me.width,Me.height,1,Ce,ke,ze)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ce,ke,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,Me.width,Me.height,Me.depth,0,Ce,ke,Me.data);else if(g.isData3DTexture)je?(ct&&t.texStorage3D(n.TEXTURE_3D,Ue,Fe,Me.width,Me.height,Me.depth),Y&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ce,ke,Me.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,Me.width,Me.height,Me.depth,0,Ce,ke,Me.data);else if(g.isFramebufferTexture){if(ct)if(je)t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Me.width,Me.height);else{let Se=Me.width,Oe=Me.height;for(let ze=0;ze<Ue;ze++)t.texImage2D(n.TEXTURE_2D,ze,Fe,Se,Oe,0,Ce,ke,null),Se>>=1,Oe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const Se=n.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),Me.parentNode!==Se){Se.appendChild(Me),f.add(g),Se.onpaint=Oe=>{const ze=Oe.changedElements;for(const Ee of f)ze.includes(Ee.image)&&(Ee.needsUpdate=!0)},Se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Me);else{const ze=n.RGBA,Ee=n.RGBA,Je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,Ee,Je,Me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(je&&ct){const Se=ge(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Se.width,Se.height)}for(let Se=0,Oe=Ze.length;Se<Oe;Se++)Ie=Ze[Se],je?Y&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ce,ke,Ie):t.texImage2D(n.TEXTURE_2D,Se,Fe,Ce,ke,Ie);g.generateMipmaps=!1}else if(je){if(ct){const Se=ge(Me);t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Se.width,Se.height)}Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,ke,Me)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Ce,ke,Me);p(g)&&w(K),Re.__version=we.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function We(T,g,N){if(g.image.length!==6)return;const K=tt(T,g),ee=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+N);const we=i.get(ee);if(ee.version!==we.__version||K===!0){t.activeTexture(n.TEXTURE0+N);const Re=vt.getPrimaries(vt.workingColorSpace),de=g.colorSpace===ar?null:vt.getPrimaries(g.colorSpace),Me=g.colorSpace===ar||Re===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,ke=g.image[0]&&g.image[0].isDataTexture,Fe=[];for(let Ee=0;Ee<6;Ee++)!Ce&&!ke?Fe[Ee]=m(g.image[Ee],!0,r.maxCubemapSize):Fe[Ee]=ke?g.image[Ee].image:g.image[Ee],Fe[Ee]=D(g,Fe[Ee]);const Ie=Fe[0],Ze=s.convert(g.format,g.colorSpace),je=s.convert(g.type),ct=M(g.internalFormat,Ze,je,g.normalized,g.colorSpace),Y=g.isVideoTexture!==!0,Ue=we.__version===void 0||K===!0,Se=ee.dataReady;let Oe=A(g,Ie);st(n.TEXTURE_CUBE_MAP,g);let ze;if(Ce){Y&&Ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,ct,Ie.width,Ie.height);for(let Ee=0;Ee<6;Ee++){ze=Fe[Ee].mipmaps;for(let Je=0;Je<ze.length;Je++){const Ke=ze[Je];g.format!==jn?Ze!==null?Y?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,0,0,Ke.width,Ke.height,Ze,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,ct,Ke.width,Ke.height,0,Ke.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,0,0,Ke.width,Ke.height,Ze,je,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,ct,Ke.width,Ke.height,0,Ze,je,Ke.data)}}}else{if(ze=g.mipmaps,Y&&Ue){ze.length>0&&Oe++;const Ee=ge(Fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,ct,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(ke){Y?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Fe[Ee].width,Fe[Ee].height,Ze,je,Fe[Ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ct,Fe[Ee].width,Fe[Ee].height,0,Ze,je,Fe[Ee].data);for(let Je=0;Je<ze.length;Je++){const Lt=ze[Je].image[Ee].image;Y?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,0,0,Lt.width,Lt.height,Ze,je,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,ct,Lt.width,Lt.height,0,Ze,je,Lt.data)}}else{Y?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ze,je,Fe[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ct,Ze,je,Fe[Ee]);for(let Je=0;Je<ze.length;Je++){const Ke=ze[Je];Y?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,0,0,Ze,je,Ke.image[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,ct,Ze,je,Ke.image[Ee])}}}p(g)&&w(n.TEXTURE_CUBE_MAP),we.__version=ee.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Le(T,g,N,K,ee,we){const Re=s.convert(N.format,N.colorSpace),de=s.convert(N.type),Me=M(N.internalFormat,Re,de,N.normalized,N.colorSpace),Ce=i.get(g),ke=i.get(N);if(ke.__renderTarget=g,!Ce.__hasExternalTextures){const Fe=Math.max(1,g.width>>we),Ie=Math.max(1,g.height>>we);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,we,Me,Fe,Ie,g.depth,0,Re,de,null):t.texImage2D(ee,we,Me,Fe,Ie,0,Re,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),B(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ee,ke.__webglTexture,0,te(g)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ee,ke.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(T,g,N){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const K=g.depthTexture,ee=K&&K.isDepthTexture?K.type:null,we=R(g.stencilBuffer,ee),Re=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;B(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te(g),we,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,te(g),we,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,we,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,T)}else{const K=g.textures;for(let ee=0;ee<K.length;ee++){const we=K[ee],Re=s.convert(we.format,we.colorSpace),de=s.convert(we.type),Me=M(we.internalFormat,Re,de,we.normalized,we.colorSpace);B(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te(g),Me,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,te(g),Me,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Me,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(T,g,N){const K=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(g.depthTexture);if(ee.__renderTarget=g,(!ee.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,g.depthTexture.addEventListener("dispose",O)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),st(n.TEXTURE_CUBE_MAP,g.depthTexture);const Ce=s.convert(g.depthTexture.format),ke=s.convert(g.depthTexture.type);let Fe;g.depthTexture.format===Zi?Fe=n.DEPTH_COMPONENT24:g.depthTexture.format===Pr&&(Fe=n.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Fe,g.width,g.height,0,Ce,ke,null)}}else pe(g.depthTexture,0);const we=ee.__webglTexture,Re=te(g),de=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Me=g.depthTexture.format===Pr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Zi)B(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,de,we,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,Me,de,we,0);else if(g.depthTexture.format===Pr)B(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,de,we,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,Me,de,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U(T){const g=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){const ee=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),g.__depthDisposeCallback=ee}g.__boundDepthTexture=K}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let K=0;K<6;K++)F(g.__webglFramebuffer[K],T,K);else{const K=T.texture.mipmaps;K&&K.length>0?F(g.__webglFramebuffer[0],T,0):F(g.__webglFramebuffer,T,0)}else if(N){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=n.createRenderbuffer(),C(g.__webglDepthbuffer[K],T,!1);else{const ee=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=g.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,we)}}else{const K=T.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),C(g.__webglDepthbuffer,T,!1);else{const ee=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,we)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(T,g,N){const K=i.get(T);g!==void 0&&Le(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&U(T)}function X(T){const g=T.texture,N=i.get(T),K=i.get(g);T.addEventListener("dispose",y);const ee=T.textures,we=T.isWebGLCubeRenderTarget===!0,Re=ee.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=g.version,o.memory.textures++),we){N.__webglFramebuffer=[];for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[de]=[];for(let Me=0;Me<g.mipmaps.length;Me++)N.__webglFramebuffer[de][Me]=n.createFramebuffer()}else N.__webglFramebuffer[de]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)N.__webglFramebuffer[de]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Re)for(let de=0,Me=ee.length;de<Me;de++){const Ce=i.get(ee[de]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&B(T)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const Me=ee[de];N.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[de]);const Ce=s.convert(Me.format,Me.colorSpace),ke=s.convert(Me.type),Fe=M(Me.internalFormat,Ce,ke,Me.normalized,Me.colorSpace,T.isXRRenderTarget===!0),Ie=te(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,N.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),C(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),st(n.TEXTURE_CUBE_MAP,g);for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)Le(N.__webglFramebuffer[de][Me],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me);else Le(N.__webglFramebuffer[de],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(g)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,Me=ee.length;de<Me;de++){const Ce=ee[de],ke=i.get(Ce);let Fe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Fe,ke.__webglTexture),st(Fe,Ce),Le(N.__webglFramebuffer,T,Ce,n.COLOR_ATTACHMENT0+de,Fe,0),p(Ce)&&w(Fe)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,K.__webglTexture),st(de,g),g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)Le(N.__webglFramebuffer[Me],T,g,n.COLOR_ATTACHMENT0,de,Me);else Le(N.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,de,0);p(g)&&w(de),t.unbindTexture()}T.depthBuffer&&U(T)}function G(T){const g=T.textures;for(let N=0,K=g.length;N<K;N++){const ee=g[N];if(p(ee)){const we=P(T),Re=i.get(ee).__webglTexture;t.bindTexture(we,Re),w(we),t.unbindTexture()}}}const Q=[],fe=[];function ce(T){if(T.samples>0){if(B(T)===!1){const g=T.textures,N=T.width,K=T.height;let ee=n.COLOR_BUFFER_BIT;const we=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(T),de=g.length>1;if(de)for(let Ce=0;Ce<g.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Me=T.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ce=0;Ce<g.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const ke=i.get(g[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,N,K,0,0,N,K,ee,n.NEAREST),l===!0&&(Q.length=0,fe.length=0,Q.push(n.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(Q.push(we),fe.push(we),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Ce=0;Ce<g.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const ke=i.get(g[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function te(T){return Math.min(r.maxSamples,T.samples)}function B(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function _(T){const g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function D(T,g){const N=T.colorSpace,K=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Ia&&N!==ar&&(vt.getTransfer(N)===Pt?(K!==jn||ee!==Ln)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",N)),g}function ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=ie,this.getTextureUnits=H,this.setTextureUnits=J,this.setTexture2D=pe,this.setTexture2DArray=le,this.setTexture3D=ve,this.setTextureCube=me,this.rebindTextures=W,this.setupRenderTarget=X,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=B,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function DE(n,e){function t(i,r=ar){let s;const o=vt.getTransfer(r);if(i===Ln)return n.UNSIGNED_BYTE;if(i===Fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ou)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wp)return n.BYTE;if(i===Rp)return n.SHORT;if(i===lo)return n.UNSIGNED_SHORT;if(i===Nu)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===Dp)return n.ALPHA;if(i===Lp)return n.RGB;if(i===jn)return n.RGBA;if(i===Zi)return n.DEPTH_COMPONENT;if(i===Pr)return n.DEPTH_STENCIL;if(i===Ip)return n.RED;if(i===Bu)return n.RED_INTEGER;if(i===Fr)return n.RG;if(i===zu)return n.RG_INTEGER;if(i===Vu)return n.RGBA_INTEGER;if(i===ga||i===_a||i===va||i===xa)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ic||i===Uc||i===Nc||i===Fc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oc||i===Bc||i===zc||i===Vc||i===Hc||i===Da||i===kc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Oc||i===Bc)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vc)return s.COMPRESSED_R11_EAC;if(i===Hc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Da)return s.COMPRESSED_RG11_EAC;if(i===kc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gc||i===Wc||i===Xc||i===$c||i===qc||i===Yc||i===Kc||i===Zc||i===Jc||i===jc||i===Qc||i===eu||i===tu||i===nu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$c)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===iu||i===ru||i===su)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===iu)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ru)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===su)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ou||i===au||i===La||i===lu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ou)return s.COMPRESSED_RED_RGTC1_EXT;if(i===au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===La)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===co?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const LE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
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

}`;class UE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Vp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bi({vertexShader:LE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new tl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NE extends dr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,v=null;const b=typeof XRWebGLBinding<"u",m=new UE,p={},w=t.getContextAttributes();let P=null,M=null;const R=[],A=[],O=new De;let y=null,I=null;const z=new Jn;z.viewport=new Ht;const k=new Jn;k.viewport=new Ht;const ne=[z,k],ie=new Hx;let H=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let oe=R[he];return oe===void 0&&(oe=new Ol,R[he]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(he){let oe=R[he];return oe===void 0&&(oe=new Ol,R[he]=oe),oe.getGripSpace()},this.getHand=function(he){let oe=R[he];return oe===void 0&&(oe=new Ol,R[he]=oe),oe.getHandSpace()};function ae(he){const oe=A.indexOf(he.inputSource);if(oe===-1)return;const Te=R[oe];Te!==void 0&&(Te.update(he.inputSource,he.frame,c||o),Te.dispatchEvent({type:he.type,data:he.inputSource}))}function j(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",pe);for(let he=0;he<R.length;he++){const oe=A[he];oe!==null&&(A[he]=null,R[he].disconnect(oe))}H=null,J=null,m.reset();for(const he in p)delete p[he];if(e.setRenderTarget(P),d=null,h=null,f=null,r=null,M=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(O.width,O.height,!1),I!==null){const he=I.camera;he.fov=I.fov,he.zoom=I.zoom,he.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){a=he,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(he){c=he},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",j),r.addEventListener("inputsourceschange",pe),w.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,We=null,Le=null;w.depth&&(Le=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=w.stencil?Pr:Zi,We=w.stencil?co:Mi);const C={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(C),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new ti(h.textureWidth,h.textureHeight,{format:jn,type:Ln,depthTexture:new ho(h.textureWidth,h.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ti(d.framebufferWidth,d.framebufferHeight,{format:jn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pe(he){for(let oe=0;oe<he.removed.length;oe++){const Te=he.removed[oe],We=A.indexOf(Te);We>=0&&(A[We]=null,R[We].disconnect(Te))}for(let oe=0;oe<he.added.length;oe++){const Te=he.added[oe];let We=A.indexOf(Te);if(We===-1){for(let C=0;C<R.length;C++)if(C>=A.length){A.push(Te),We=C;break}else if(A[C]===null){A[C]=Te,We=C;break}if(We===-1)break}const Le=R[We];Le&&Le.connect(Te)}}const le=new q,ve=new q;function me(he,oe,Te){le.setFromMatrixPosition(oe.matrixWorld),ve.setFromMatrixPosition(Te.matrixWorld);const We=le.distanceTo(ve),Le=oe.projectionMatrix.elements,C=Te.projectionMatrix.elements,F=Le[14]/(Le[10]-1),U=Le[14]/(Le[10]+1),W=(Le[9]+1)/Le[5],X=(Le[9]-1)/Le[5],G=(Le[8]-1)/Le[0],Q=(C[8]+1)/C[0],fe=F*G,ce=F*Q,te=We/(-G+Q),B=te*-G;if(oe.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(B),he.translateZ(te),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),Le[10]===-1)he.projectionMatrix.copy(oe.projectionMatrix),he.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const _=F+te,D=U+te,ge=fe-B,T=ce+(We-B),g=W*U/D*_,N=X*U/D*_;he.projectionMatrix.makePerspective(ge,T,g,N,_,D),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function Ae(he,oe){oe===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(oe.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let oe=he.near,Te=he.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),ie.near=k.near=z.near=oe,ie.far=k.far=z.far=Te,(H!==ie.near||J!==ie.far)&&(r.updateRenderState({depthNear:ie.near,depthFar:ie.far}),H=ie.near,J=ie.far),ie.layers.mask=he.layers.mask|6,z.layers.mask=ie.layers.mask&-5,k.layers.mask=ie.layers.mask&-3;const We=he.parent,Le=ie.cameras;Ae(ie,We);for(let C=0;C<Le.length;C++)Ae(Le[C],We);Le.length===2?me(ie,z,k):ie.projectionMatrix.copy(z.projectionMatrix),I===null&&he.isPerspectiveCamera&&(I={camera:he,fov:he.fov,zoom:he.zoom}),Be(he,ie,We)};function Be(he,oe,Te){Te===null?he.matrix.copy(oe.matrixWorld):(he.matrix.copy(Te.matrixWorld),he.matrix.invert(),he.matrix.multiply(oe.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(oe.projectionMatrix),he.projectionMatrixInverse.copy(oe.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=uu*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(he){l=he,h!==null&&(h.fixedFoveation=he),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=he)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ie)},this.getCameraTexture=function(he){return p[he]};let nt=null;function st(he,oe){if(u=oe.getViewerPose(c||o),v=oe,u!==null){const Te=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let We=!1;Te.length!==ie.cameras.length&&(ie.cameras.length=0,We=!0);for(let U=0;U<Te.length;U++){const W=Te[U];let X=null;if(d!==null)X=d.getViewport(W);else{const Q=f.getViewSubImage(h,W);X=Q.viewport,U===0&&(e.setRenderTargetTextures(M,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(M))}let G=ne[U];G===void 0&&(G=new Jn,G.layers.enable(U),G.viewport=new Ht,ne[U]=G),G.matrix.fromArray(W.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(W.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(X.x,X.y,X.width,X.height),U===0&&(ie.matrix.copy(G.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),We===!0&&ie.cameras.push(G)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const U=f.getDepthInformation(Te[0]);U&&U.isValid&&U.texture&&m.init(U,r.renderState)}if(Le&&Le.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let U=0;U<Te.length;U++){const W=Te[U].camera;if(W){let X=p[W];X||(X=new Vp,p[W]=X);const G=f.getCameraImage(W);X.sourceTexture=G}}}}for(let Te=0;Te<R.length;Te++){const We=A[Te],Le=R[Te];We!==null&&Le!==void 0&&Le.update(We,oe,c||o)}nt&&nt(he,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const tt=new Qp;tt.setAnimationLoop(st),this.setAnimationLoop=function(he){nt=he},this.dispose=function(){}}}const FE=new Bt,om=new ut;om.set(-1,0,0,0,1,0,0,0,1);function OE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Kp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,P,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,P):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),P=w.envMap,M=w.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(FE.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(om),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=P*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,R){const A=R.program;i.uniformBlockBinding(M,A)}function c(M,R){let A=r[M.id];A===void 0&&(m(M),A=u(M),r[M.id]=A,M.addEventListener("dispose",w));const O=R.program;i.updateUBOMapping(M,O);const y=e.render.frame;s[M.id]!==y&&(h(M),s[M.id]=y)}function u(M){const R=f();M.__bindingPointIndex=R;const A=n.createBuffer(),O=M.__size,y=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,O,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,A),A}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const R=r[M.id],A=M.uniforms,O=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let y=0,I=A.length;y<I;y++){const z=A[y];if(Array.isArray(z))for(let k=0,ne=z.length;k<ne;k++)d(z[k],y,k,O);else d(z,y,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,R,A,O){if(b(M,R,A,O)===!0){const y=M.__offset,I=M.value;if(Array.isArray(I)){let z=0;for(let k=0;k<I.length;k++){const ne=I[k],ie=p(ne);v(ne,M.__data,z),typeof ne!="number"&&typeof ne!="boolean"&&!ne.isMatrix3&&!ArrayBuffer.isView(ne)&&(z+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(I,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,M.__data)}}function v(M,R,A){typeof M=="number"||typeof M=="boolean"?R[0]=M:M.isMatrix3?(R[0]=M.elements[0],R[1]=M.elements[1],R[2]=M.elements[2],R[3]=0,R[4]=M.elements[3],R[5]=M.elements[4],R[6]=M.elements[5],R[7]=0,R[8]=M.elements[6],R[9]=M.elements[7],R[10]=M.elements[8],R[11]=0):ArrayBuffer.isView(M)?R.set(new M.constructor(M.buffer,M.byteOffset,R.length)):M.toArray(R,A)}function b(M,R,A,O){const y=M.value,I=R+"_"+A;if(O[I]===void 0)return typeof y=="number"||typeof y=="boolean"?O[I]=y:ArrayBuffer.isView(y)?O[I]=y.slice():O[I]=y.clone(),!0;{const z=O[I];if(typeof y=="number"||typeof y=="boolean"){if(z!==y)return O[I]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(z.equals(y)===!1)return z.copy(y),!0}}return!1}function m(M){const R=M.uniforms;let A=0;const O=16;for(let I=0,z=R.length;I<z;I++){const k=Array.isArray(R[I])?R[I]:[R[I]];for(let ne=0,ie=k.length;ne<ie;ne++){const H=k[ne],J=Array.isArray(H.value)?H.value:[H.value];for(let ae=0,j=J.length;ae<j;ae++){const pe=J[ae],le=p(pe),ve=A%O,me=ve%le.boundary,Ae=ve+me;A+=me,Ae!==0&&O-Ae<le.storage&&(A+=O-Ae),H.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=A,A+=le.storage}}}const y=A%O;return y>0&&(A+=O-y),M.__size=A,M.__cache={},this}function p(M){const R={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(R.boundary=4,R.storage=4):M.isVector2?(R.boundary=8,R.storage=8):M.isVector3||M.isColor?(R.boundary=16,R.storage=12):M.isVector4?(R.boundary=16,R.storage=16):M.isMatrix3?(R.boundary=48,R.storage=48):M.isMatrix4?(R.boundary=64,R.storage=64):M.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(R.boundary=16,R.storage=M.byteLength):at("WebGLRenderer: Unsupported uniform value type.",M),R}function w(M){const R=M.target;R.removeEventListener("dispose",w);const A=o.indexOf(R.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function P(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:P}}const zE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function VE(){return li===null&&(li=new kv(zE,16,16,Fr,yi),li.name="DFG_LUT",li.minFilter=fn,li.magFilter=fn,li.wrapS=Vi,li.wrapT=Vi,li.generateMipmaps=!1,li.needsUpdate=!0),li}class HE{constructor(e={}){const{canvas:t=gv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Ln}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const b=d,m=new Set([Vu,zu,Bu]),p=new Set([Ln,Mi,lo,co,Fu,Ou]),w=new Uint32Array(4),P=new Int32Array(4),M=new q;let R=null,A=null;const O=[],y=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let k=!1,ne=null,ie=null,H=null,J=null;this._outputColorSpace=Vn;let ae=0,j=0,pe=null,le=-1,ve=null;const me=new Ht,Ae=new Ht;let Be=null;const nt=new xt(0);let st=0,tt=t.width,he=t.height,oe=1,Te=null,We=null;const Le=new Ht(0,0,tt,he),C=new Ht(0,0,tt,he);let F=!1;const U=new Xu;let W=!1,X=!1;const G=new Bt,Q=new q,fe=new Ht,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function B(){return pe===null?oe:1}let _=i;function D(E,$){return t.getContext(E,$)}let ge,T,g,N,K,ee,we,Re,de,Me,Ce,ke,Fe,Ie,Ze,je,ct,Y,Ue,Se,Oe,ze,Ee;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uu}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",mn,!1),_===null){const $="webgl2";if(_=D($,E),_===null)throw D($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(E){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),Mt("WebGLRenderer: "+E.message),E}function Je(){ge=new Vy(_),ge.init(),Oe=new DE(_,ge),T=new Py(_,ge,e,Oe),g=new CE(_,ge),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),ie=_.createFramebuffer(),H=_.createFramebuffer(),J=_.createFramebuffer(),N=new Gy(_),K=new mE,ee=new PE(_,ge,g,K,T,Oe,N),we=new zy(z),Re=new Xx(_),ze=new Ry(_,Re),de=new Hy(_,Re,N,ze),Me=new Xy(_,de,Re,ze,N),Y=new Wy(_,T,ee),Ze=new Dy(K),Ce=new pE(z,we,ge,T,ze,Ze),ke=new OE(z,K),Fe=new _E,Ie=new bE(ge),ct=new wy(z,we,g,Me,v,l),je=new RE(z,Me,T),Ee=new BE(_,N,T,g),Ue=new Cy(_,ge,N),Se=new ky(_,ge,N),N.programs=Ce.programs,z.capabilities=T,z.extensions=ge,z.properties=K,z.renderLists=Fe,z.shadowMap=je,z.state=g,z.info=N}b!==Ln&&(I=new qy(b,t.width,t.height,a,r,s));const Ke=new NE(z,_);this.xr=Ke,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const E=ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(E){E!==void 0&&(oe=E,this.setSize(tt,he,!1))},this.getSize=function(E){return E.set(tt,he)},this.setSize=function(E,$,ue=!0){if(Ke.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=E,he=$,t.width=Math.floor(E*oe),t.height=Math.floor($*oe),ue===!0&&(t.style.width=E+"px",t.style.height=$+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,E,$)},this.getDrawingBufferSize=function(E){return E.set(tt*oe,he*oe).floor()},this.setDrawingBufferSize=function(E,$,ue){tt=E,he=$,oe=ue,t.width=Math.floor(E*ue),t.height=Math.floor($*ue),this.setViewport(0,0,E,$)},this.setEffects=function(E){if(b===Ln){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let $=0;$<E.length;$++)if(E[$].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(me)},this.getViewport=function(E){return E.copy(Le)},this.setViewport=function(E,$,ue,se){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,$,ue,se),g.viewport(me.copy(Le).multiplyScalar(oe).round())},this.getScissor=function(E){return E.copy(C)},this.setScissor=function(E,$,ue,se){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,$,ue,se),g.scissor(Ae.copy(C).multiplyScalar(oe).round())},this.getScissorTest=function(){return F},this.setScissorTest=function(E){g.setScissorTest(F=E)},this.setOpaqueSort=function(E){Te=E},this.setTransparentSort=function(E){We=E},this.getClearColor=function(E){return E.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(E=!0,$=!0,ue=!0){let se=0;if(E){let re=!1;if(pe!==null){const Ve=pe.texture.format;re=m.has(Ve)}if(re){const Ve=pe.texture.type,Xe=p.has(Ve),Ne=ct.getClearColor(),qe=ct.getClearAlpha(),Ge=Ne.r,ft=Ne.g,pt=Ne.b;Xe?(w[0]=Ge,w[1]=ft,w[2]=pt,w[3]=qe,_.clearBufferuiv(_.COLOR,0,w)):(P[0]=Ge,P[1]=ft,P[2]=pt,P[3]=qe,_.clearBufferiv(_.COLOR,0,P))}else se|=_.COLOR_BUFFER_BIT}$&&(se|=_.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(se|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&_.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),ne=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),ct.dispose(),Fe.dispose(),Ie.dispose(),K.dispose(),we.dispose(),Me.dispose(),ze.dispose(),Ee.dispose(),Ce.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Mo),Ke.removeEventListener("sessionend",pr),Ti.stop()};function Lt(E){E.preventDefault(),jh("WebGLRenderer: Context Lost."),k=!0}function gt(){jh("WebGLRenderer: Context Restored."),k=!1;const E=N.autoReset,$=je.enabled,ue=je.autoUpdate,se=je.needsUpdate,re=je.type;Je(),N.autoReset=E,je.enabled=$,je.autoUpdate=ue,je.needsUpdate=se,je.type=re}function mn(E){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Nn(E){const $=E.target;$.removeEventListener("dispose",Nn),sl($)}function sl(E){ol(E),K.remove(E)}function ol(E){const $=K.get(E).programs;$!==void 0&&($.forEach(function(ue){Ce.releaseProgram(ue)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,$,ue,se,re,Ve){$===null&&($=ce);const Xe=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ne=ll(E,$,ue,se,re);g.setMaterial(se,Xe);let qe=ue.index,Ge=1;if(se.wireframe===!0){if(qe=de.getWireframeAttribute(ue),qe===void 0)return;Ge=2}const ft=ue.drawRange,pt=ue.attributes.position;let Ye=ft.start*Ge,bt=(ft.start+ft.count)*Ge;Ve!==null&&(Ye=Math.max(Ye,Ve.start*Ge),bt=Math.min(bt,(Ve.start+Ve.count)*Ge)),qe!==null?(Ye=Math.max(Ye,0),bt=Math.min(bt,qe.count)):pt!=null&&(Ye=Math.max(Ye,0),bt=Math.min(bt,pt.count));const zt=bt-Ye;if(zt<0||zt===1/0)return;ze.setup(re,se,Ne,ue,qe);let Nt,Rt=Ue;if(qe!==null&&(Nt=Re.get(qe),Rt=Se,Rt.setIndex(Nt)),re.isMesh)se.wireframe===!0?(g.setLineWidth(se.wireframeLinewidth*B()),Rt.setMode(_.LINES)):Rt.setMode(_.TRIANGLES);else if(re.isLine){let jt=se.linewidth;jt===void 0&&(jt=1),g.setLineWidth(jt*B()),re.isLineSegments?Rt.setMode(_.LINES):re.isLineLoop?Rt.setMode(_.LINE_LOOP):Rt.setMode(_.LINE_STRIP)}else re.isPoints?Rt.setMode(_.POINTS):re.isSprite&&Rt.setMode(_.TRIANGLES);if(re.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Rt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const jt=re._multiDrawStarts,$e=re._multiDrawCounts,tn=re._multiDrawCount,_t=qe?Re.get(qe).bytesPerElement:1,yn=K.get(se).currentProgram.getUniforms();for(let Fn=0;Fn<tn;Fn++)yn.setValue(_,"_gl_DrawID",Fn),Rt.render(jt[Fn]/_t,$e[Fn])}else if(re.isInstancedMesh)Rt.renderInstances(Ye,zt,re.count);else if(ue.isInstancedBufferGeometry){const jt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,$e=Math.min(ue.instanceCount,jt);Rt.renderInstances(Ye,zt,$e)}else Rt.render(Ye,zt)};function xs(E,$,ue,se){ne!==null&&E.isNodeMaterial&&ne.setObject(se,E),W===!0&&Ze.setState(E,ue,!1),E.transparent===!0&&E.side===pi&&E.forceSinglePass===!1?(E.side=Rn,E.needsUpdate=!0,Jt(E,$,se),E.side=Ur,E.needsUpdate=!0,Jt(E,$,se),E.side=pi):Jt(E,$,se)}this.compile=function(E,$,ue=null){ue===null&&(ue=E),ne!==null&&ne.renderStart(E,$,ue),A=Ie.get(ue),A.init($),y.push(A),ue.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(A.pushLight(re),re.castShadow&&A.pushShadow(re))}),E!==ue&&E.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(A.pushLight(re),re.castShadow&&A.pushShadow(re))}),A.setupLights(),ne!==null&&ne.updateLights(A.state.lightsArray),X=this.localClippingEnabled,W=Ze.init(this.clippingPlanes,X),W===!0&&Ze.setGlobalState(this.clippingPlanes,$),ne!==null&&je.render(A.state.shadowsArray,ue,$);const se=new Set;return E.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ve=re.material;if(Ve)if(Array.isArray(Ve))for(let Xe=0;Xe<Ve.length;Xe++){const Ne=Ve[Xe];xs(Ne,ue,$,re),se.add(Ne)}else xs(Ve,ue,$,re),se.add(Ve)}),A=y.pop(),ne!==null&&ne.renderEnd(),se},this.compileAsync=function(E,$,ue=null){const se=this.compile(E,$,ue);return new Promise(re=>{function Ve(){if(se.forEach(function(Xe){const qe=K.get(Xe).currentProgram;(qe===void 0||qe.isReady())&&se.delete(Xe)}),se.size===0){re(E);return}setTimeout(Ve,10)}ge.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Ss=null;function al(E){Ss&&Ss(E)}function Mo(){Ti.stop()}function pr(){Ti.start()}const Ti=new Qp;Ti.setAnimationLoop(al),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(E){Ss=E,Ke.setAnimationLoop(E),E===null?Ti.stop():Ti.start()},Ke.addEventListener("sessionstart",Mo),Ke.addEventListener("sessionend",pr),this.render=function(E,$){if($!==void 0&&$.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;ne!==null&&ne.renderStart(E,$);const ue=Ke.enabled===!0&&Ke.isPresenting===!0,se=I!==null&&(pe===null||ue)&&I.begin(z,pe);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera($),$=Ke.getCamera()),E.isScene===!0&&E.onBeforeRender(z,E,$,pe),A=Ie.get(E,y.length),A.init($),A.state.textureUnits=ee.getTextureUnits(),y.push(A),G.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),U.setFromProjectionMatrix(G,gi,$.reversedDepth),X=this.localClippingEnabled,W=Ze.init(this.clippingPlanes,X),R=Fe.get(E,O.length),R.init(),O.push(R),Ke.enabled===!0&&Ke.isPresenting===!0){const Xe=z.xr.getDepthSensingMesh();Xe!==null&&Ms(Xe,$,-1/0,z.sortObjects)}Ms(E,$,0,z.sortObjects),R.finish(),ne!==null&&ne.updateLights(A.state.lightsArray),z.sortObjects===!0&&R.sort(Te,We),te=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,te&&ct.addToRenderList(R,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&Ze.beginShadows();const re=A.state.shadowsArray;if(je.render(re,E,$),W===!0&&Ze.endShadows(),(se&&I.hasRenderPass())===!1){const Xe=R.opaque,Ne=R.transmissive;if(A.setupLights(),$.isArrayCamera){const qe=$.cameras;if(Ne.length>0)for(let Ge=0,ft=qe.length;Ge<ft;Ge++){const pt=qe[Ge];ys(Xe,Ne,E,pt)}te&&ct.render(E);for(let Ge=0,ft=qe.length;Ge<ft;Ge++){const pt=qe[Ge];mr(R,E,pt,pt.viewport)}}else Ne.length>0&&ys(Xe,Ne,E,$),te&&ct.render(E),mr(R,E,$)}pe!==null&&j===0&&(ee.updateMultisampleRenderTarget(pe),ee.updateRenderTargetMipmap(pe)),se&&I.end(z),E.isScene===!0&&E.onAfterRender(z,E,$),ze.resetDefaultState(),le=-1,ve=null,y.pop(),y.length>0?(A=y[y.length-1],ee.setTextureUnits(A.state.textureUnits),W===!0&&Ze.setGlobalState(z.clippingPlanes,A.state.camera)):A=null,O.pop(),O.length>0?R=O[O.length-1]:R=null,ne!==null&&ne.renderEnd()};function Ms(E,$,ue,se){if(E.visible===!1)return;if(E.layers.test($.layers)){if(E.isGroup)ue=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update($);else if(E.isLightProbeGrid)A.pushLightProbeGrid(E);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(U)){se&&fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);const Xe=Me.update(E),Ne=E.material;Ne.visible&&R.push(E,Xe,Ne,ue,fe.z,null,$)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(U))){const Xe=Me.update(E),Ne=E.material;if(se&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),fe.copy(E.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),fe.copy(Xe.boundingSphere.center)),fe.applyMatrix4(E.matrixWorld).applyMatrix4(G)),Array.isArray(Ne)){const qe=Xe.groups;for(let Ge=0,ft=qe.length;Ge<ft;Ge++){const pt=qe[Ge],Ye=Ne[pt.materialIndex];Ye&&Ye.visible&&R.push(E,Xe,Ye,ue,fe.z,pt,$)}}else Ne.visible&&R.push(E,Xe,Ne,ue,fe.z,null,$)}}const Ve=E.children;for(let Xe=0,Ne=Ve.length;Xe<Ne;Xe++)Ms(Ve[Xe],$,ue,se)}function mr(E,$,ue,se){const{opaque:re,transmissive:Ve,transparent:Xe}=E;A.setupLightsView(ue),W===!0&&Ze.setGlobalState(z.clippingPlanes,ue),se&&g.viewport(me.copy(se)),re.length>0&&gr(re,$,ue),Ve.length>0&&gr(Ve,$,ue),Xe.length>0&&gr(Xe,$,ue),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ys(E,$,ue,se){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[se.id]===void 0){const Ye=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[se.id]=new ti(1,1,{generateMipmaps:!0,type:Ye?yi:Ln,minFilter:Cr,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ve=A.state.transmissionRenderTarget[se.id],Xe=se.viewport||me;Ve.setSize(Xe.z*z.transmissionResolutionScale,Xe.w*z.transmissionResolutionScale);const Ne=z.getRenderTarget(),qe=z.getActiveCubeFace(),Ge=z.getActiveMipmapLevel();z.setRenderTarget(Ve),z.getClearColor(nt),st=z.getClearAlpha(),st<1&&z.setClearColor(16777215,.5),z.clear(),te&&ct.render(ue);const ft=z.toneMapping;z.toneMapping=vi;const pt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),A.setupLightsView(se),W===!0&&Ze.setGlobalState(z.clippingPlanes,se),gr(E,ue,se),ee.updateMultisampleRenderTarget(Ve),ee.updateRenderTargetMipmap(Ve),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let bt=0,zt=$.length;bt<zt;bt++){const Nt=$[bt],{object:Rt,geometry:jt,material:$e,group:tn}=Nt;if($e.side===pi&&Rt.layers.test(se.layers)){const _t=$e.side;$e.side=Rn,$e.needsUpdate=!0,yo(Rt,ue,se,jt,$e,tn),$e.side=_t,$e.needsUpdate=!0,Ye=!0}}Ye===!0&&(ee.updateMultisampleRenderTarget(Ve),ee.updateRenderTargetMipmap(Ve))}z.setRenderTarget(Ne,qe,Ge),z.setClearColor(nt,st),pt!==void 0&&(se.viewport=pt),z.toneMapping=ft}function gr(E,$,ue){const se=$.isScene===!0?$.overrideMaterial:null;for(let re=0,Ve=E.length;re<Ve;re++){const Xe=E[re],{object:Ne,geometry:qe,group:Ge}=Xe;let ft=Xe.material;ft.allowOverride===!0&&se!==null&&(ft=se),Ne.layers.test(ue.layers)&&yo(Ne,$,ue,qe,ft,Ge)}}function yo(E,$,ue,se,re,Ve){ne!==null&&re.isNodeMaterial&&ne.setObject(E,re),E.onBeforeRender(z,$,ue,se,re,Ve),E.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),re.onBeforeRender(z,$,ue,se,E,Ve),re.transparent===!0&&re.side===pi&&re.forceSinglePass===!1?(re.side=Rn,re.needsUpdate=!0,z.renderBufferDirect(ue,$,se,re,E,Ve),re.side=Ur,re.needsUpdate=!0,z.renderBufferDirect(ue,$,se,re,E,Ve),re.side=pi):z.renderBufferDirect(ue,$,se,re,E,Ve),E.onAfterRender(z,$,ue,se,re,Ve)}function Jt(E,$,ue){$.isScene!==!0&&($=ce);const se=K.get(E),re=A.state.lights,Ve=A.state.shadowsArray,Xe=re.state.version,Ne=Ce.getParameters(E,re.state,Ve,$,ue,A.state.lightProbeGridArray),qe=Ce.getProgramCacheKey(Ne);let Ge=se.programs;se.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?$.environment:null,se.fog=$.fog;const ft=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;se.envMap=we.get(E.envMap||se.environment,ft),se.envMapRotation=se.environment!==null&&E.envMap===null?$.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",Nn),Ge=new Map,se.programs=Ge);let pt=Ge.get(qe);if(pt!==void 0){if(se.currentProgram===pt&&se.lightsStateVersion===Xe)return bs(E,Ne),pt}else Ne.uniforms=Ce.getUniforms(E),ne!==null&&E.isNodeMaterial&&ne.build(E,ue,Ne),E.onBeforeCompile(Ne,z),pt=Ce.acquireProgram(Ne,qe),Ge.set(qe,pt),se.uniforms=Ne.uniforms;const Ye=se.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ye.clippingPlanes=Ze.uniform),bs(E,Ne),se.needsLights=Eo(E),se.lightsStateVersion=Xe,se.needsLights&&(Ye.ambientLightColor.value=re.state.ambient,Ye.lightProbe.value=re.state.probe,Ye.sunLights.value=re.state.sun,Ye.sunLightShadows.value=re.state.sunShadow,Ye.directionalLights.value=re.state.directional,Ye.directionalLightShadows.value=re.state.directionalShadow,Ye.spotLights.value=re.state.spot,Ye.spotLightShadows.value=re.state.spotShadow,Ye.rectAreaLights.value=re.state.rectArea,Ye.ltc_1.value=re.state.rectAreaLTC1,Ye.ltc_2.value=re.state.rectAreaLTC2,Ye.pointLights.value=re.state.point,Ye.pointLightShadows.value=re.state.pointShadow,Ye.hemisphereLights.value=re.state.hemi,Ye.sunShadowMatrix.value=re.state.sunShadowMatrix,Ye.sunShadowCascade.value=re.state.sunShadowCascade,Ye.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ye.spotLightMatrix.value=re.state.spotLightMatrix,Ye.spotLightMap.value=re.state.spotLightMap,Ye.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=A.state.lightProbeGridArray.length>0,se.currentProgram=pt,se.uniformsList=null,pt}function bo(E){if(E.uniformsList===null){const $=E.currentProgram.getUniforms();E.uniformsList=Ma.seqWithValue($.seq,E.uniforms)}return E.uniformsList}function bs(E,$){const ue=K.get(E);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function ji(E,$){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition($.matrixWorld);for(let ue=0,se=E.length;ue<se;ue++){const re=E[ue];if(re.texture!==null&&re.boundingBox.containsPoint(M))return re}return null}function ll(E,$,ue,se,re){$.isScene!==!0&&($=ce),ee.resetTextureUnits();const Ve=$.fog,Xe=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?$.environment:null,Ne=pe===null?z.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:vt.workingColorSpace,qe=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Ge=we.get(se.envMap||Xe,qe),ft=se.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pt=!!ue.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ye=!!ue.morphAttributes.position,bt=!!ue.morphAttributes.normal,zt=!!ue.morphAttributes.color;let Nt=vi;se.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Nt=z.toneMapping);const Rt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,jt=Rt!==void 0?Rt.length:0,$e=K.get(se),tn=A.state.lights;if(W===!0&&(X===!0||E!==ve)){const It=E===ve&&se.id===le;Ze.setState(se,E,It)}let _t=!1;se.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==tn.state.version||$e.outputColorSpace!==Ne||re.isBatchedMesh&&$e.batching===!1||!re.isBatchedMesh&&$e.batching===!0||re.isBatchedMesh&&$e.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&$e.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&$e.instancing===!1||!re.isInstancedMesh&&$e.instancing===!0||re.isSkinnedMesh&&$e.skinning===!1||!re.isSkinnedMesh&&$e.skinning===!0||re.isInstancedMesh&&$e.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&$e.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&$e.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&$e.instancingMorph===!1&&re.morphTexture!==null||$e.envMap!==Ge||se.fog===!0&&$e.fog!==Ve||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ze.numPlanes||$e.numIntersection!==Ze.numIntersection)||$e.vertexAlphas!==ft||$e.vertexTangents!==pt||$e.morphTargets!==Ye||$e.morphNormals!==bt||$e.morphColors!==zt||$e.toneMapping!==Nt||$e.morphTargetsCount!==jt||!!$e.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,$e.__version=se.version);let yn=$e.currentProgram;_t===!0&&(yn=Jt(se,$,re),ne&&se.isNodeMaterial&&ne.onUpdateProgram(se,yn,$e));let Fn=!1,ii=!1,Ai=!1;const Et=yn.getUniforms(),Vt=$e.uniforms;if(g.useProgram(yn.program)&&(Fn=!0,ii=!0,Ai=!0),se.id!==le&&(le=se.id,ii=!0),$e.needsLights){const It=ji(A.state.lightProbeGridArray,re);$e.lightProbeGrid!==It&&($e.lightProbeGrid=It,ii=!0)}if(Fn||ve!==E){g.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Et.setValue(_,"projectionMatrix",E.projectionMatrix),Et.setValue(_,"viewMatrix",E.matrixWorldInverse);const Xn=Et.map.cameraPosition;Xn!==void 0&&Xn.setValue(_,Q.setFromMatrixPosition(E.matrixWorld)),T.logarithmicDepthBuffer&&Et.setValue(_,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Et.setValue(_,"isOrthographic",E.isOrthographicCamera===!0),ve!==E&&(ve=E,ii=!0,Ai=!0)}if($e.needsLights&&(tn.state.sunShadowMap.length>0&&Et.setValue(_,"sunShadowMap",tn.state.sunShadowMap,ee),tn.state.directionalShadowMap.length>0&&Et.setValue(_,"directionalShadowMap",tn.state.directionalShadowMap,ee),tn.state.spotShadowMap.length>0&&Et.setValue(_,"spotShadowMap",tn.state.spotShadowMap,ee),tn.state.pointShadowMap.length>0&&Et.setValue(_,"pointShadowMap",tn.state.pointShadowMap,ee)),re.isSkinnedMesh){Et.setOptional(_,re,"bindMatrix"),Et.setOptional(_,re,"bindMatrixInverse");const It=re.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Et.setValue(_,"boneTexture",It.boneTexture,ee))}re.isBatchedMesh&&(Et.setOptional(_,re,"batchingTexture"),Et.setValue(_,"batchingTexture",re._matricesTexture,ee),Et.setOptional(_,re,"batchingIdTexture"),Et.setValue(_,"batchingIdTexture",re._indirectTexture,ee),Et.setOptional(_,re,"batchingColorTexture"),re._colorsTexture!==null&&Et.setValue(_,"batchingColorTexture",re._colorsTexture,ee));const ri=ue.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&Y.update(re,ue,yn),(ii||$e.receiveShadow!==re.receiveShadow)&&($e.receiveShadow=re.receiveShadow,Et.setValue(_,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&$.environment!==null&&(Vt.envMapIntensity.value=$.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=VE()),ii){if(Et.setValue(_,"toneMappingExposure",z.toneMappingExposure),$e.needsLights&&Es(Vt,Ai),Ve&&se.fog===!0&&ke.refreshFogUniforms(Vt,Ve),ke.refreshMaterialUniforms(Vt,se,oe,he,A.state.transmissionRenderTarget[E.id]),$e.needsLights&&$e.lightProbeGrid){const It=$e.lightProbeGrid;Vt.probesSH.value=It.texture,Vt.probesMin.value.copy(It.boundingBox.min),Vt.probesMax.value.copy(It.boundingBox.max),Vt.probesResolution.value.copy(It.resolution)}Ma.upload(_,bo($e),Vt,ee)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ma.upload(_,bo($e),Vt,ee),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Et.setValue(_,"center",re.center),Et.setValue(_,"modelViewMatrix",re.modelViewMatrix),Et.setValue(_,"normalMatrix",re.normalMatrix),Et.setValue(_,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const It=se.uniformsGroups;for(let Xn=0,Qi=It.length;Xn<Qi;Xn++){const Ao=It[Xn];Ee.update(Ao,yn),Ee.bind(Ao,yn)}}return yn}function Es(E,$){E.ambientLightColor.needsUpdate=$,E.lightProbe.needsUpdate=$,E.sunLights.needsUpdate=$,E.sunLightShadows.needsUpdate=$,E.directionalLights.needsUpdate=$,E.directionalLightShadows.needsUpdate=$,E.pointLights.needsUpdate=$,E.pointLightShadows.needsUpdate=$,E.spotLights.needsUpdate=$,E.spotLightShadows.needsUpdate=$,E.rectAreaLights.needsUpdate=$,E.hemisphereLights.needsUpdate=$}function Eo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return pe},this.setRenderTargetTextures=function(E,$,ue){const se=K.get(E);se.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),K.get(E.texture).__webglTexture=$,K.get(E.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ue,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,$){const ue=K.get(E);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(E,$=0,ue=0){pe=E,ae=$,j=ue;let se=null,re=!1,Ve=!1;if(E){const Ne=K.get(E);if(Ne.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(_.FRAMEBUFFER,Ne.__webglFramebuffer),me.copy(E.viewport),Ae.copy(E.scissor),Be=E.scissorTest,g.viewport(me),g.scissor(Ae),g.setScissorTest(Be),le=-1;return}else if(Ne.__webglFramebuffer===void 0)ee.setupRenderTarget(E);else if(Ne.__hasExternalTextures)ee.rebindTextures(E,K.get(E.texture).__webglTexture,K.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ft=E.depthTexture;if(Ne.__boundDepthTexture!==ft){if(ft!==null&&K.has(ft)&&(E.width!==ft.image.width||E.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(E)}}const qe=E.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ve=!0);const Ge=K.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[$])?se=Ge[$][ue]:se=Ge[$],re=!0):E.samples>0&&ee.useMultisampledRTT(E)===!1?se=K.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?se=Ge[ue]:se=Ge,me.copy(E.viewport),Ae.copy(E.scissor),Be=E.scissorTest}else me.copy(Le).multiplyScalar(oe).floor(),Ae.copy(C).multiplyScalar(oe).floor(),Be=F;if(ue!==0&&(se=ie),g.bindFramebuffer(_.FRAMEBUFFER,se)&&g.drawBuffers(E,se),g.viewport(me),g.scissor(Ae),g.setScissorTest(Be),re){const Ne=K.get(E.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ne.__webglTexture,ue)}else if(Ve){const Ne=$;for(let qe=0;qe<E.textures.length;qe++){const Ge=K.get(E.textures[qe]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+qe,Ge.__webglTexture,ue,Ne)}}else if(E!==null&&ue!==0){const Ne=K.get(E.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ne.__webglTexture,ue)}le=-1};function To(E){const $=K.get(E);return($.__readFormat!==E.format||$.__readType!==E.type)&&($.__readFormat=E.format,$.__readType=E.type,$.__formatReadable=T.textureFormatReadable(E.format),$.__typeReadable=T.textureTypeReadable(E.type)),$}this.readRenderTargetPixels=function(E,$,ue,se,re,Ve,Xe,Ne=0){if(!(E&&E.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){g.bindFramebuffer(_.FRAMEBUFFER,qe);try{const Ge=E.textures[Ne],ft=Ge.format,pt=Ge.type;E.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ne);const Ye=To(Ge);if(Ye.__formatReadable===!1){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=E.width-se&&ue>=0&&ue<=E.height-re&&_.readPixels($,ue,se,re,Oe.convert(ft),Oe.convert(pt),Ve)}finally{const Ge=pe!==null?K.get(pe).__webglFramebuffer:null;g.bindFramebuffer(_.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(E,$,ue,se,re,Ve,Xe,Ne=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe)if($>=0&&$<=E.width-se&&ue>=0&&ue<=E.height-re){g.bindFramebuffer(_.FRAMEBUFFER,qe);const Ge=E.textures[Ne],ft=Ge.format,pt=Ge.type;E.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ne);const Ye=To(Ge);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,bt),_.bufferData(_.PIXEL_PACK_BUFFER,Ve.byteLength,_.STREAM_READ),_.readPixels($,ue,se,re,Oe.convert(ft),Oe.convert(pt),0),_.bindBuffer(_.PIXEL_PACK_BUFFER,null);const zt=pe!==null?K.get(pe).__webglFramebuffer:null;g.bindFramebuffer(_.FRAMEBUFFER,zt);const Nt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await _v(_,Nt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,bt),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,Ve),_.bindBuffer(_.PIXEL_PACK_BUFFER,null),_.deleteBuffer(bt),_.deleteSync(Nt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,$=null,ue=0){const se=Math.pow(2,-ue),re=Math.floor(E.image.width*se),Ve=Math.floor(E.image.height*se),Xe=$!==null?$.x:0,Ne=$!==null?$.y:0;ee.setTexture2D(E,0),_.copyTexSubImage2D(_.TEXTURE_2D,ue,0,0,Xe,Ne,re,Ve),g.unbindTexture()},this.copyTextureToTexture=function(E,$,ue=null,se=null,re=0,Ve=0){let Xe,Ne,qe,Ge,ft,pt,Ye,bt,zt;const Nt=E.isCompressedTexture?E.mipmaps[Ve]:E.image;if(ue!==null)Xe=ue.max.x-ue.min.x,Ne=ue.max.y-ue.min.y,qe=ue.isBox3?ue.max.z-ue.min.z:1,Ge=ue.min.x,ft=ue.min.y,pt=ue.isBox3?ue.min.z:0;else{const Vt=Math.pow(2,-re);Xe=Math.floor(Nt.width*Vt),Ne=Math.floor(Nt.height*Vt),E.isDataArrayTexture?qe=Nt.depth:E.isData3DTexture?qe=Math.floor(Nt.depth*Vt):qe=1,Ge=0,ft=0,pt=0}se!==null?(Ye=se.x,bt=se.y,zt=se.z):(Ye=0,bt=0,zt=0);const Rt=Oe.convert($.format),jt=Oe.convert($.type);let $e;$.isData3DTexture?(ee.setTexture3D($,0),$e=_.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ee.setTexture2DArray($,0),$e=_.TEXTURE_2D_ARRAY):(ee.setTexture2D($,0),$e=_.TEXTURE_2D),g.activeTexture(_.TEXTURE0),g.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(_.UNPACK_ALIGNMENT,$.unpackAlignment);const tn=g.getParameter(_.UNPACK_ROW_LENGTH),_t=g.getParameter(_.UNPACK_IMAGE_HEIGHT),yn=g.getParameter(_.UNPACK_SKIP_PIXELS),Fn=g.getParameter(_.UNPACK_SKIP_ROWS),ii=g.getParameter(_.UNPACK_SKIP_IMAGES);g.pixelStorei(_.UNPACK_ROW_LENGTH,Nt.width),g.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Nt.height),g.pixelStorei(_.UNPACK_SKIP_PIXELS,Ge),g.pixelStorei(_.UNPACK_SKIP_ROWS,ft),g.pixelStorei(_.UNPACK_SKIP_IMAGES,pt);const Ai=E.isDataArrayTexture||E.isData3DTexture,Et=$.isDataArrayTexture||$.isData3DTexture;if(E.isDepthTexture){const Vt=K.get(E),ri=K.get($),It=K.get(Vt.__renderTarget),Xn=K.get(ri.__renderTarget);g.bindFramebuffer(_.READ_FRAMEBUFFER,It.__webglFramebuffer),g.bindFramebuffer(_.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let Qi=0;Qi<qe;Qi++)Ai&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,K.get(E).__webglTexture,re,pt+Qi),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,K.get($).__webglTexture,Ve,zt+Qi)),_.blitFramebuffer(Ge,ft,Xe,Ne,Ye,bt,Xe,Ne,_.DEPTH_BUFFER_BIT,_.NEAREST);g.bindFramebuffer(_.READ_FRAMEBUFFER,null),g.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(re!==0||E.isRenderTargetTexture||K.has(E)){const Vt=K.get(E),ri=K.get($);g.bindFramebuffer(_.READ_FRAMEBUFFER,H),g.bindFramebuffer(_.DRAW_FRAMEBUFFER,J);for(let It=0;It<qe;It++)Ai?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Vt.__webglTexture,re,pt+It):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Vt.__webglTexture,re),Et?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ri.__webglTexture,Ve,zt+It):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,ri.__webglTexture,Ve),re!==0?_.blitFramebuffer(Ge,ft,Xe,Ne,Ye,bt,Xe,Ne,_.COLOR_BUFFER_BIT,_.NEAREST):Et?_.copyTexSubImage3D($e,Ve,Ye,bt,zt+It,Ge,ft,Xe,Ne):_.copyTexSubImage2D($e,Ve,Ye,bt,Ge,ft,Xe,Ne);g.bindFramebuffer(_.READ_FRAMEBUFFER,null),g.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Et?E.isDataTexture||E.isData3DTexture?_.texSubImage3D($e,Ve,Ye,bt,zt,Xe,Ne,qe,Rt,jt,Nt.data):$.isCompressedArrayTexture?_.compressedTexSubImage3D($e,Ve,Ye,bt,zt,Xe,Ne,qe,Rt,Nt.data):_.texSubImage3D($e,Ve,Ye,bt,zt,Xe,Ne,qe,Rt,jt,Nt):E.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Ve,Ye,bt,Xe,Ne,Rt,jt,Nt.data):E.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Ve,Ye,bt,Nt.width,Nt.height,Rt,Nt.data):_.texSubImage2D(_.TEXTURE_2D,Ve,Ye,bt,Xe,Ne,Rt,jt,Nt);g.pixelStorei(_.UNPACK_ROW_LENGTH,tn),g.pixelStorei(_.UNPACK_IMAGE_HEIGHT,_t),g.pixelStorei(_.UNPACK_SKIP_PIXELS,yn),g.pixelStorei(_.UNPACK_SKIP_ROWS,Fn),g.pixelStorei(_.UNPACK_SKIP_IMAGES,ii),Ve===0&&$.generateMipmaps&&_.generateMipmap($e),g.unbindTexture()},this.initRenderTarget=function(E){K.get(E).__webglFramebuffer===void 0&&ee.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ee.setTextureCube(E,0):E.isData3DTexture?ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ee.setTexture2DArray(E,0):ee.setTexture2D(E,0),g.unbindTexture()},this.resetState=function(){ae=0,j=0,pe=null,g.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const nd={type:"change"},Ju={type:"start"},am={type:"end"},ua=new el,id=new Oi,kE=Math.cos(70*Sv.DEG2RAD),Yt=new q,An=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uc=1e-6;class GE extends Gx{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new hr,this._lastTargetPosition=new q,this._quat=new hr().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lf,this._sphericalDelta=new Lf,this._scale=1,this._panOffset=new q,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new q,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XE.bind(this),this._onPointerDown=WE.bind(this),this._onPointerUp=$E.bind(this),this._onContextMenu=QE.bind(this),this._onMouseWheel=KE.bind(this),this._onKeyDown=ZE.bind(this),this._onTouchStart=JE.bind(this),this._onTouchMove=jE.bind(this),this._onMouseDown=qE.bind(this),this._onMouseMove=YE.bind(this),this._interceptControlDown=eT.bind(this),this._interceptControlUp=tT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Dt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nd),this.update(),this.state=Dt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=An:i>Math.PI&&(i-=An),r<-Math.PI?r+=An:r>Math.PI&&(r-=An),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Yt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ua.origin.copy(this.object.position),ua.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ua.direction))<kE?this.object.lookAt(this.target):(id.setFromNormalAndCoplanarPoint(this.object.up,this.target),ua.intersectPlane(id,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>uc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uc||this._lastTargetPosition.distanceToSquared(this.target)>uc?(this.dispatchEvent(nd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?An/60*this.autoRotateSpeed*e:An/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Yt.copy(r).sub(this.target);let s=Yt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(An*this._rotateDelta.x/t.clientHeight),this._rotateUp(An*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(An*this._rotateDelta.x/t.clientHeight),this._rotateUp(An*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function WE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function XE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function $E(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(am),this.state=Dt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Dt.DOLLY;break;case Gi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Dt.ROTATE}break;case Gi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Ju)}function YE(n){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function KE(n){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(n.preventDefault(),this.dispatchEvent(Ju),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(am))}function ZE(n){this.enabled!==!1&&this._handleKeyDown(n)}function JE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Dt.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Dt.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Ju)}function jE(n){switch(this._trackPointer(n),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Dt.NONE}}function QE(n){this.enabled!==!1&&n.preventDefault()}function eT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rd=[7252222,10320895,16758894];class nT{renderer;scene;camera;controls;gears=[];overlayGroup;interferenceGroup;raycaster=new kx;container;resizeObs;constructor(e){this.container=e;const t=e.clientWidth||800,i=e.clientHeight||600;this.renderer=new HE({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i),e.appendChild(this.renderer.domElement),this.scene=new Uv,this.scene.background=new xt(1053464);const r=t/i,s=80;this.camera=new nl(-s*r/2,s*r/2,s/2,-s/2,.1,2e3),this.camera.position.set(0,0,120),this.camera.lookAt(0,0,0),this.controls=new GE(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN};const o=new zx(16777215,.65),a=new Bx(16777215,.9);a.position.set(40,60,100),this.scene.add(o,a),this.overlayGroup=new Dr,this.interferenceGroup=new Dr,this.scene.add(this.overlayGroup,this.interferenceGroup),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.animate()}makeCircleLine(e,t,i=.02,r=160){const s=[];for(let l=0;l<=r;l++){const c=l/r*Math.PI*2;s.push(new q(e*Math.cos(c),e*Math.sin(c),i))}const o=new pn().setFromPoints(s),a=new Sa({color:t,transparent:!0,opacity:.8});return new Xv(o,a)}buildGearMesh(e,t){const i=new Dr,r=new Ba,s=e.outline;r.moveTo(s[0].x,s[0].y);for(let h=1;h<s.length;h++)r.lineTo(s[h].x,s[h].y);r.closePath();const o=e.input.faceWidth,a=new Ku(r,{depth:o,bevelEnabled:!1,curveSegments:1});a.translate(0,0,-o/2),a.computeVertexNormals();const l=new Ix({color:t,metalness:.35,roughness:.55}),c=new Un(a,l);i.add(c);const u=new Wv(new qv(a,12),new Sa({color:2239027,transparent:!0,opacity:.5}));i.add(u);const f={pitch:this.makeCircleLine(e.pitchR,4891647,o/2+.02),base:this.makeCircleLine(e.baseR,2605194,o/2+.02),addendum:this.makeCircleLine(e.addendumR,16765286,o/2+.02),dedendum:this.makeCircleLine(e.dedendumR,16748451,o/2+.02)};return Object.values(f).forEach(h=>i.add(h)),{group:i,body:c,refs:f}}setTrain(e,t){this.clearOverlay();for(const s of this.gears)this.scene.remove(s.group);this.gears=[];let i=10,r=0;e.forEach((s,o)=>{if(!s)return;const a=this.buildGearMesh(s,rd[o%rd.length]);a.group.position.x=t[o]??0,this.scene.add(a.group),this.gears[o]=a,i=Math.max(i,s.addendumR),r=Math.max(r,(t[o]??0)+s.addendumR)}),this.frameView(t,e,i)}frameView(e,t,i){let r=1/0,s=-1/0;t.forEach((f,h)=>{f&&(r=Math.min(r,(e[h]??0)-f.addendumR),s=Math.max(s,(e[h]??0)+f.addendumR))}),isFinite(r)||(r=-40,s=40);const o=(r+s)/2,a=(this.container.clientWidth||800)/(this.container.clientHeight||600),l=s-r+2*Math.max(8,i*.4),c=2*i+20,u=Math.max(c,l/a,80);this.camera.left=-u*a/2,this.camera.right=u*a/2,this.camera.top=u/2,this.camera.bottom=-u/2,this.camera.updateProjectionMatrix(),this.controls.target.set(o,0,0),this.camera.position.set(o,0,140)}setAngles(e){e.forEach((t,i)=>{this.gears[i]&&(this.gears[i].group.rotation.z=t)})}bodyDepth(e){e.body.geometry.computeBoundingBox();const t=e.body.geometry.boundingBox;return t?t.max.z-t.min.z:0}setReferenceVisibility(e){for(const t of this.gears)t&&(t.refs.pitch.visible=!!e.showPitchCircle,t.refs.base.visible=!!e.showBaseCircle,t.refs.addendum.visible=!!e.showAddendumCircle,t.refs.dedendum.visible=!!e.showDedendumCircle)}setChainOverlay(e,t){if(this.clearOverlay(),this.setReferenceVisibility(t),!e)return;let i=0;for(const s of this.gears)s&&(i=Math.max(i,this.bodyDepth(s)));const r=i/2+1;for(const s of e.segments){if(s.rejected||!s.mesh)continue;const o=t.segments[s.index];o&&this.drawSegment(s,o,r)}for(const s of e.segments){const o=t.segments[s.index];if(o)for(const a of o.regions){if(a.length<3)continue;const l=new Ba;l.moveTo(a[0].x,a[0].y);for(let h=1;h<a.length;h++)l.lineTo(a[h].x,a[h].y);l.closePath();const c=new Zu(l),u=new js({color:o.active?16723285:16747100,transparent:!0,opacity:o.active?.5:.3,side:pi,depthTest:!1}),f=new Un(c,u);f.position.z=r+1,f.renderOrder=999,this.interferenceGroup.add(f)}}}drawSegment(e,t,i){const r=e.mesh,s=e.offsetX,l=t.active?3794539:6058120,c=t.active?.95:.45,u=(f,h,d,v,b)=>{const m=new pn().setFromPoints([new q(f.x+s,f.y,i),new q(h.x+s,h.y,i)]),p=new $u(m,new Sa({color:d,transparent:!0,opacity:v,depthTest:!1}));p.renderOrder=b,this.overlayGroup.add(p)};if(t.showActionLine){u(r.tangentLine.p0,r.tangentLine.p1,8950691,t.active?.55:.25,50),u(r.actionLine.p0,r.actionLine.p1,l,c,51);const f=new za(.7,16,16),h=new Un(f,new js({color:l,depthTest:!1}));h.position.set(r.pitchPoint.x+s,r.pitchPoint.y,i),h.renderOrder=52,this.overlayGroup.add(h)}if(t.showContact){const f=r.alphaPrime,h=Math.sin(f),d=Math.cos(f),v={x:r.pitchPoint.x+t.contactS*h+s,y:r.pitchPoint.y+t.contactS*d},b=new za(t.active?1:.8,20,20),m=new Un(b,new js({color:t.active?16726891:16752700,depthTest:!1}));m.position.set(v.x,v.y,i+.5),m.renderOrder=60,this.overlayGroup.add(m)}}clearOverlay(){for(;this.overlayGroup.children.length;)this.overlayGroup.children.pop().geometry?.dispose();for(;this.interferenceGroup.children.length;)this.interferenceGroup.children.pop().geometry?.dispose()}pick(e,t){return this.raycaster,null}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t);const i=e/t,s=(this.camera.top-this.camera.bottom)/1/2;this.camera.left=-s*i,this.camera.right=s*i,this.camera.updateProjectionMatrix()}animate=()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)};dispose(){this.resizeObs.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const zn={mm:{id:"mm",label:"mm",factor:1,step:.1,decimals:3},cm:{id:"cm",label:"cm",factor:.1,step:.01,decimals:4},m:{id:"m",label:"m",factor:.001,step:.001,decimals:5},in:{id:"in",label:"in",factor:1/25.4,step:.01,decimals:4}};function lm(n,e){return n*zn[e].factor}function iT(n,e){return n/zn[e].factor}function rT(n,e){return`${lm(n,e).toFixed(zn[e].decimals)} ${zn[e].label}`}const cs=2,cm=1,sT="spur-gear-lab",Va="cases";let ha=null;function oT(){return ha||(ha=new Promise((n,e)=>{const t=indexedDB.open(sT,1);t.onupgradeneeded=()=>{const i=t.result;i.objectStoreNames.contains(Va)||i.createObjectStore(Va,{keyPath:"id"}).createIndex("updatedAt","updatedAt")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}),ha)}function ju(n,e){return oT().then(t=>new Promise((i,r)=>{const s=t.transaction(Va,n),o=e(s.objectStore(Va));o.onsuccess=()=>i(o.result),o.onerror=()=>r(o.error)}))}async function sd(n){await ju("readwrite",e=>e.put({...n,updatedAt:Date.now()}))}async function aT(n){await ju("readwrite",e=>e.delete(n))}async function lT(){return[...await ju("readonly",e=>e.getAll())].map(e=>e.schemaVersion===cm?um(e):e).sort((e,t)=>t.updatedAt-e.updatedAt)}function cT(){return`case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function um(n){return{schemaVersion:cs,id:n.id,name:n.name,createdAt:n.createdAt,updatedAt:n.updatedAt,note:n.note,mode:"pair",gear1:{...n.gear1},gear2:{...n.gear2},gear3:{...n.gear1},centerDistance1:n.centerDistance,centerDistance2:null,unit:n.unit||"mm",outlines:n.outlines?{gear1:n.outlines.gear1,gear2:n.outlines.gear2}:void 0}}function uT(n){return JSON.stringify(n,null,2)}function Fs(n,e){if(!n||!(n.z>=4)||!(n.module>0)||!(n.alphaDeg>0)||!(n.faceWidth>0))throw new Error(`案例${e}参数不合法（z≥4, m>0, α>0, b>0）`)}function hT(n){const e=JSON.parse(n);if(!e||typeof e!="object")throw new Error("案例文件不是合法 JSON 对象");if(e.schemaVersion===cm){const i=e;if(!i.gear1||!i.gear2)throw new Error("旧版案例缺少齿轮参数");return Fs(i.gear1,"齿轮1"),Fs(i.gear2,"齿轮2"),um(i)}if(e.schemaVersion!==cs)throw new Error(`不支持的案例版本（需要 schemaVersion=${cs}）`);const t=e;if(t.mode!=="pair"&&t.mode!=="chain")throw new Error("案例模式字段非法（mode）");if(Fs(t.gear1,"齿轮1"),Fs(t.gear2,"齿轮2"),t.mode==="chain"&&Fs(t.gear3,"齿轮3（惰轮之后）"),t.checks){for(const i of Object.values(t.checks))if(!i||!(i.area>=0)||!Array.isArray(i.regions))throw new Error("案例中的分段检查结果损坏")}return t}function fT(n){const e=new Blob([uT(n)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t;const r=(n.name||"gear-case").replace(/[^\w一-龥-]+/g,"_");i.download=`${r}.json`,i.click(),URL.revokeObjectURL(t)}const dT={class:"app"},pT={class:"panel"},mT={class:"units"},gT={class:"units"},_T=["onClick"],vT={class:"gearhead"},xT={class:"two"},ST=["onUpdate:modelValue"],MT=["onUpdate:modelValue","step"],yT={class:"two"},bT=["onUpdate:modelValue"],ET=["onUpdate:modelValue","step"],TT={key:0,class:"err"},AT={key:1,class:"warn-text"},wT={class:"row"},RT=["onUpdate:modelValue"],CT={key:0},PT=["onUpdate:modelValue","step"],DT={key:1,class:"err"},LT={class:"row"},IT=["disabled"],UT=["disabled"],NT={key:0,class:"segselect"},FT=["onClick"],OT=["disabled","min","max"],BT=["onClick","disabled"],zT={key:0,class:"report"},VT={key:1,class:"err chain-err"},HT={class:"row"},kT={class:"row"},GT={class:"row"},WT={class:"row"},XT={class:"row"},$T={class:"row"},qT={class:"samples"},YT={class:"viewport"},KT={class:"readouts"},ZT={key:0,class:"dim-grid"},JT={key:0,class:"mesh-report"},jT={key:0,class:"warns"},QT={class:"panel right"},eA={class:"row"},tA={class:"row"},nA={class:"wide filebtn"},iA={class:"caselist"},rA={class:"ci"},sA={key:0,class:"chk-tag"},oA={class:"ca"},aA=["onClick"],lA=["onClick"],cA=["onClick"],uA={key:0,class:"empty"},hA=Og({__name:"App",setup(n){const e=si("mm"),t=Bn([{z:20,m:2,alphaDeg:20,faceWidth:10},{z:20,m:2,alphaDeg:20,faceWidth:10},{z:40,m:2,alphaDeg:20,faceWidth:10}]),i=si("chain"),r=Bn([!0,!0]),s=Bn([40,60]),o=dh(null),a=dh([null,null,null]);function l(B){const _=t[B];return{z:Math.round(_.z),module:_.m,alpha:_.alphaDeg*El,faceWidth:_.faceWidth}}function c(){const B=y0({mode:i.value,gearInputs:[l(0),l(1),l(2)],centerDistances:[r[0]?null:s[0],r[1]?null:s[1]]});return o.value=B,B}const u=Bs(()=>o.value?.segments??[]),f=(B,_)=>Bs({get:()=>lm(B(),e.value),set:D=>_(iT(D,e.value))}),h=Bn(t.map(B=>f(()=>B.m,_=>B.m=_))),d=Bn(t.map(B=>f(()=>B.faceWidth,_=>B.faceWidth=_))),v=Bn([f(()=>s[0],B=>s[0]=B),f(()=>s[1],B=>s[1]=B)]),b=si(!0),m=si(0),p=si(.25);let w=0;const P=Bn([0,0]),M=si(0),R=Bn({showPitchCircle:!0,showBaseCircle:!0,showAddendumCircle:!1,showDedendumCircle:!1,showActionLine:!0,showContact:!0}),A=Bn([{area:null,regions:[],busy:!1},{area:null,regions:[],busy:!1}]);let O=[0,0];function y(B,_){return a.value[B]??_.outline}async function I(B){const _=o.value;if(!_||!_.valid)return;const D=_.segments.find(de=>de.index===B);if(!D)return;const ge=_.gears[D.leftIndex],T=_.gears[D.rightIndex],g=Tl(_,m.value),N=g.pose[D.leftIndex],K=g.pose[D.rightIndex],ee=[kh(y(D.leftIndex,ge),_.centers[D.leftIndex],0,N)],we=[kh(y(D.rightIndex,T),_.centers[D.rightIndex],0,K)],Re=++O[B];A[B].busy=!0;try{const de=await U0(ee,we);if(Re!==O[B])return;A[B].area=de.area,A[B].regions=de.regions}finally{Re===O[B]&&(A[B].busy=!1)}}const z=si();let k=null;function ne(){const B=o.value;if(!B)return null;const _={};for(const D of B.segments)D.rejected||(_[D.index]={showActionLine:R.showActionLine,showContact:R.showContact,contactS:P[D.index],regions:A[D.index].regions,active:D.index===M.value});return{...R,segments:_}}function ie(){const B=ne();k&&o.value&&B&&k.setChainOverlay(o.value,B)}function H(){const B=o.value;if(!k||!B)return;const _=B.gears.slice(0,B.gearCount);k.setTrain(_,B.centers)}_c(()=>{c(),k=new nT(z.value),H();const B=_=>{const D=Math.min(.05,(_-w)/1e3||0);w=_;const ge=o.value;if(ge?.valid){if(b.value){m.value+=p.value*D;const g=2*Math.PI/ge.gears[0].input.z;m.value=(m.value%g+g)%g}const T=Tl(ge,m.value);k.setAngles(T.pose);for(const g of ge.segments)g.rejected||(P[g.index]=T.s[g.index]);ie()}else k.setAngles([0,0,0]),ie();requestAnimationFrame(B)};requestAnimationFrame(B)});let J=!1;ss(()=>[i.value,JSON.stringify(t),r[0],r[1],s[0],s[1]],()=>{J||(a.value=[null,null,null],c(),H(),m.value=0,P[0]=0,P[1]=0,A[0].area=null,A[0].regions=[],A[1].area=null,A[1].regions=[])}),ss(R,ie,{deep:!0}),ss(M,ie);function ae(){b.value=!1}function j(){b.value=!0}function pe(){const B=o.value;if(b.value||!B?.valid)return;const _=E0(B,M.value,P[M.value]);m.value=_.pose[0],k?.setAngles(_.pose);for(const D of B.segments)P[D.index]=_.s[D.index];ie()}function le(B){M.value=B}const ve=Bs(()=>o.value?.valid?T0(o.value):null),me=Bs(()=>{const _=o.value?.segments.find(T=>T.index===M.value);if(!_||_.rejected)return[-30,30];const[D,ge]=pp(_.mesh);return[Math.floor(D*10)/10,Math.ceil(ge*10)/10]});function Ae(B){return rT(B,e.value)}function Be(B,_,D=2,ge=20){i.value="pair",t[0]={z:B,m:D,alphaDeg:ge,faceWidth:10},t[1]={z:_,m:D,alphaDeg:ge,faceWidth:10},t[2]={z:B,m:D,alphaDeg:ge,faceWidth:10},r[0]=!0}function nt(B,_,D,ge=2,T=20){i.value="chain",t[0]={z:B,m:ge,alphaDeg:T,faceWidth:10},t[1]={z:_,m:ge,alphaDeg:T,faceWidth:10},t[2]={z:D,m:ge,alphaDeg:T,faceWidth:10},r[0]=!0,r[1]=!0}function st(){i.value="chain",t[0]={z:20,m:2,alphaDeg:20,faceWidth:10},t[1]={z:20,m:2.5,alphaDeg:20,faceWidth:10},t[2]={z:40,m:2,alphaDeg:20,faceWidth:10},r[0]=!0,r[1]=!0}const tt=si([]),he=si("未命名案例"),oe=si("");async function Te(){tt.value=await lT()}_c(Te);function We(){return[0,1,2].map(B=>({z:Math.round(t[B].z),module:t[B].m,alpha:t[B].alphaDeg*El,alphaDeg:t[B].alphaDeg,faceWidth:t[B].faceWidth}))}function Le(B){const _=o.value,[D,ge,T]=We(),g={};if(_?.valid)for(const K of _.segments){const ee=A[K.index];ee.area!==null&&(g[String(K.index)]={s:P[K.index],phi1:m.value,area:ee.area,regions:ee.regions,checkedAt:Date.now()})}const N={schemaVersion:cs,id:cT(),name:he.value,createdAt:Date.now(),updatedAt:Date.now(),note:oe.value,mode:i.value,gear1:D,gear2:ge,gear3:T,centerDistance1:r[0]||!_?null:_.segments.find(K=>K.index===0).mesh.a,centerDistance2:i.value==="chain"&&!r[1]&&_?_.segments.find(K=>K.index===1).mesh.a:null,unit:e.value,pose:{phi1:m.value,activeSegment:M.value,s:[P[0],P[1]],paused:!b.value},checks:Object.keys(g).length?g:void 0};return B&&_&&(N.outlines={gear1:y(0,_.gears[0]),gear2:y(1,_.gears[1]),gear3:i.value==="chain"?y(2,_.gears[2]):void 0}),N}async function C(B){await sd(Le(B)),await Te()}function F(B){fT(Le(B))}function U(B,_){t[B].z=_.z,t[B].m=_.module,t[B].alphaDeg=_.alphaDeg,t[B].faceWidth=_.faceWidth}async function W(B){J=!0,i.value=B.mode,U(0,B.gear1),U(1,B.gear2),U(2,B.gear3),B.centerDistance1==null?r[0]=!0:(r[0]=!1,s[0]=B.centerDistance1),B.centerDistance2==null?r[1]=!0:(r[1]=!1,s[1]=B.centerDistance2),e.value=B.unit||"mm",he.value=B.name,oe.value=B.note,a.value=[B.outlines?.gear1??null,B.outlines?.gear2??null,B.outlines?.gear3??null];const _=c();if(H(),A[0].area=B.checks?.["0"]?.area??null,A[0].regions=B.checks?.["0"]?.regions??[],A[1].area=B.checks?.["1"]?.area??null,A[1].regions=B.checks?.["1"]?.regions??[],M.value=B.pose?.activeSegment??0,m.value=B.pose?.phi1??0,b.value=B.pose?!B.pose.paused:!0,_?.valid){const D=Tl(_,m.value);k?.setAngles(D.pose);for(const ge of _.segments)P[ge.index]=D.s[ge.index]}ie(),await gc(),J=!1}async function X(B){await aT(B),await Te()}function G(B){const _=B.target,D=_.files?.[0];if(!D)return;const ge=new FileReader;ge.onload=async()=>{try{const T=hT(String(ge.result));await sd(T),await W(T),await Te()}catch(T){alert("导入失败："+T.message)}},ge.readAsText(D),_.value=""}async function Q(B){J=!0,i.value="chain",U(0,B.gear1),U(1,B.gear2),U(2,{...B.gear1}),r[0]=B.centerDistance1==null,r[1]=!0,a.value=[B.outlines?.gear1??null,B.outlines?.gear2??null,null],c(),H(),m.value=0,b.value=!0,P[0]=0,P[1]=0,A[0].area=null,A[0].regions=[],A[1].area=null,A[1].regions=[],await gc(),J=!1}function fe(B){const _=B.mode==="chain"?`${B.gear1.z}/${B.gear2.z}/${B.gear3.z}`:`${B.gear1.z}/${B.gear2.z}`,D=B.schemaVersion===cs?"":`（旧v${B.schemaVersion}）`;return`${_} · m=${B.gear1.module} · α=${B.gear1.alphaDeg}°${B.outlines?" · 含轮廓":""}${D}`}const ce=["轮1（主动）","轮2（惰轮）","轮3（末轮）"],te=["啮合副 A：轮1–轮2","啮合副 B：轮2–轮3"];return(B,_)=>(rt(),ot("div",dT,[_[64]||(_[64]=_e("header",null,[_e("h1",null,"直齿圆柱齿轮传动链实验室"),_e("div",{class:"sub"}," 外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）——惰轮为何改变方向：两段真实啮合同时决定 ")],-1)),_e("main",null,[_e("aside",pT,[_e("section",null,[_[21]||(_[21]=_e("h2",null,"轮系模式",-1)),_e("div",mT,[_e("button",{class:Dn({active:i.value==="chain"}),onClick:_[0]||(_[0]=D=>i.value="chain")},"三轮链（含惰轮）",2),_e("button",{class:Dn({active:i.value==="pair"}),onClick:_[1]||(_[1]=D=>i.value="pair")},"一对齿轮（旧实验）",2)])]),_e("section",null,[_[22]||(_[22]=_e("h2",null,"显示单位（不改变实际尺寸）",-1)),_e("div",gT,[(rt(!0),ot(Ct,null,Qt(Object.keys(Zn(zn)),D=>(rt(),ot("button",{key:D,class:Dn({active:e.value===D}),onClick:ge=>e.value=D},it(Zn(zn)[D].label),11,_T))),128))])]),_e("section",null,[_[25]||(_[25]=_e("h2",null,"齿轮参数（模数/压力角各轮独立，不匹配将拒绝成链）",-1)),(rt(!0),ot(Ct,null,Qt(i.value==="chain"?3:2,D=>(rt(),ot("div",{key:D,class:"gearcard"},[_e("div",vT,it(ce[D-1]),1),_e("div",xT,[_e("label",null,[_[23]||(_[23]=St("z ",-1)),ln(_e("input",{type:"number","onUpdate:modelValue":ge=>t[D-1].z=ge,min:"4",step:"1"},null,8,ST),[[Ci,t[D-1].z,void 0,{number:!0}]])]),_e("label",null,[St("m（"+it(Zn(zn)[e.value].label)+"） ",1),ln(_e("input",{type:"number","onUpdate:modelValue":ge=>h[D-1]=ge,step:Zn(zn)[e.value].step},null,8,MT),[[Ci,h[D-1],void 0,{number:!0}]])])]),_e("div",yT,[_e("label",null,[_[24]||(_[24]=St("α（度） ",-1)),ln(_e("input",{type:"number","onUpdate:modelValue":ge=>t[D-1].alphaDeg=ge,min:"1",max:"45",step:"0.5"},null,8,bT),[[Ci,t[D-1].alphaDeg,void 0,{number:!0}]])]),_e("label",null,[St("b（"+it(Zn(zn)[e.value].label)+"） ",1),ln(_e("input",{type:"number","onUpdate:modelValue":ge=>d[D-1]=ge,step:Zn(zn)[e.value].step},null,8,ET),[[Ci,d[D-1],void 0,{number:!0}]])])]),o.value?.gearErrors[D-1]?.length?(rt(),ot("div",TT,it(o.value.gearErrors[D-1].join("；")),1)):En("",!0),o.value?.gears[D-1]?.undercut?(rt(),ot("div",AT," ⚠️ z="+it(t[D-1].z)+" 低于 "+it(o.value.gears[D-1].zMinValue.toFixed(1))+"，根切风险（根部仅教学近似） ",1)):En("",!0)]))),128))]),_e("section",null,[_[26]||(_[26]=_e("h2",null,"各段中心距（独立）",-1)),(rt(!0),ot(Ct,null,Qt(u.value,D=>(rt(),ot(Ct,{key:D.index},[_e("label",wT,[ln(_e("input",{type:"checkbox","onUpdate:modelValue":ge=>r[D.index]=ge},null,8,RT),[[xr,r[D.index]]]),St(" "+it(te[D.index])+"：用标准中心距 a₀ = m(z左+z右)/2 ",1)]),r[D.index]?En("",!0):(rt(),ot("label",CT,[St("实际中心距 a（"+it(Zn(zn)[e.value].label)+"） ",1),ln(_e("input",{type:"number","onUpdate:modelValue":ge=>v[D.index]=ge,step:Zn(zn)[e.value].step},null,8,PT),[[Ci,v[D.index],void 0,{number:!0}]])])),D.rejected?(rt(),ot("div",DT,it(D.rejectReasons.join("；")),1)):En("",!0)],64))),128))]),_e("section",null,[_[32]||(_[32]=_e("h2",null,"运动 / 检查",-1)),_e("div",LT,[_e("button",{onClick:ae,disabled:!b.value||!o.value?.valid},"暂停",8,IT),_e("button",{onClick:j,disabled:b.value||!o.value?.valid},"继续",8,UT)]),_e("label",null,[_[27]||(_[27]=St("轮1 角速度（rad/s） ",-1)),ln(_e("input",{type:"range","onUpdate:modelValue":_[2]||(_[2]=D=>p.value=D),min:"0",max:"1.5",step:"0.01"},null,512),[[Ci,p.value,void 0,{number:!0}]])]),i.value==="chain"?(rt(),ot("div",NT,[(rt(),ot(Ct,null,Qt([0,1],D=>_e("button",{key:D,class:Dn({active:M.value===D}),onClick:ge=>le(D)}," 检查"+it(D===0?"副 A":"副 B"),11,FT)),64))])):En("",!0),_e("label",null,[St("接触点沿"+it(i.value==="chain"?M.value===0?"副 A":"副 B":"啮合线")+" s（mm，暂停可拖动） ",1),ln(_e("input",{type:"range",disabled:b.value||!o.value?.valid,"onUpdate:modelValue":_[3]||(_[3]=D=>P[M.value]=D),min:me.value[0],max:me.value[1],step:"0.05",onInput:pe},null,40,OT),[[Ci,P[M.value],void 0,{number:!0}]])]),(rt(!0),ot(Ct,null,Qt(u.value,D=>(rt(),ot("div",{key:"chk"+D.index},[_e("button",{class:"wide",onClick:ge=>I(D.index),disabled:b.value||!o.value?.valid||A[D.index].busy},it(A[D.index].busy?"Clipper 求交中…":`在当前帧检查${D.index===0?"副 A":"副 B"}实体干涉（Clipper2）`),9,BT),A[D.index].area!==null?(rt(),ot("div",zT,[St(it(D.index===0?"副 A":"副 B")+" 重叠面积 = "+it(A[D.index].area.toExponential(3))+" mm² ",1),_e("b",{class:Dn(A[D.index].area>1e-6?"bad":"good")},it(A[D.index].area>1e-6?"存在实体干涉 ❗":"当前帧无干涉 ✅"),3)])):En("",!0)]))),128)),o.value&&!o.value.valid?(rt(),ot("div",VT,[_[29]||(_[29]=St(" 传动链未形成（拒绝半成品）：",-1)),_[30]||(_[30]=_e("br",null,null,-1)),(rt(!0),ot(Ct,null,Qt(o.value.errors,(D,ge)=>(rt(),ot("span",{key:ge},[St("• "+it(D),1),_[28]||(_[28]=_e("br",null,null,-1))]))),128)),_[31]||(_[31]=St(" 请让每段两轮模数、压力角分别相等。 ",-1))])):En("",!0)]),_e("section",null,[_[39]||(_[39]=_e("h2",null,"显示选项",-1)),_e("label",HT,[ln(_e("input",{type:"checkbox","onUpdate:modelValue":_[4]||(_[4]=D=>R.showPitchCircle=D)},null,512),[[xr,R.showPitchCircle]]),_[33]||(_[33]=St(" 节圆/分度圆",-1))]),_e("label",kT,[ln(_e("input",{type:"checkbox","onUpdate:modelValue":_[5]||(_[5]=D=>R.showBaseCircle=D)},null,512),[[xr,R.showBaseCircle]]),_[34]||(_[34]=St(" 基圆",-1))]),_e("label",GT,[ln(_e("input",{type:"checkbox","onUpdate:modelValue":_[6]||(_[6]=D=>R.showAddendumCircle=D)},null,512),[[xr,R.showAddendumCircle]]),_[35]||(_[35]=St(" 齿顶圆",-1))]),_e("label",WT,[ln(_e("input",{type:"checkbox","onUpdate:modelValue":_[7]||(_[7]=D=>R.showDedendumCircle=D)},null,512),[[xr,R.showDedendumCircle]]),_[36]||(_[36]=St(" 齿根圆",-1))]),_e("label",XT,[ln(_e("input",{type:"checkbox","onUpdate:modelValue":_[8]||(_[8]=D=>R.showActionLine=D)},null,512),[[xr,R.showActionLine]]),_[37]||(_[37]=St(" 啮合线（两段同时）",-1))]),_e("label",$T,[ln(_e("input",{type:"checkbox","onUpdate:modelValue":_[9]||(_[9]=D=>R.showContact=D)},null,512),[[xr,R.showContact]]),_[38]||(_[38]=St(" 接触点（两段同时）",-1))])]),_e("section",null,[_[40]||(_[40]=_e("h2",null,"核对样本",-1)),_e("div",qT,[_e("button",{onClick:_[10]||(_[10]=D=>nt(20,20,40))},"链 20/20/40 标准"),_e("button",{onClick:_[11]||(_[11]=D=>nt(20,30,40))},"链 20/30/40"),_e("button",{onClick:_[12]||(_[12]=D=>st())},"链 m 不匹配（拒绝）"),_e("button",{onClick:_[13]||(_[13]=D=>Be(20,40))},"对 20/40 标准"),_e("button",{onClick:_[14]||(_[14]=D=>Be(16,40))},"对 16/40 根切")])])]),_e("section",YT,[_e("div",{ref_key:"host",ref:z,class:"canvas-host"},null,512),_e("div",KT,[o.value?(rt(),ot("div",ZT,[_e("table",null,[_e("thead",null,[_e("tr",null,[_[41]||(_[41]=_e("th",null,null,-1)),(rt(!0),ot(Ct,null,Qt(o.value.gearCount,D=>(rt(),ot("th",{key:D},it(ce[D-1])+"（z="+it(t[D-1].z)+"） ",1))),128))])]),_e("tbody",null,[_e("tr",null,[_[42]||(_[42]=_e("td",null,"模数 m",-1)),(rt(!0),ot(Ct,null,Qt(o.value.gearCount,D=>(rt(),ot("td",{key:"m"+D},it(Ae(t[D-1].m)),1))),128))]),_e("tr",null,[_[43]||(_[43]=_e("td",null,"分度圆直径 d",-1)),(rt(!0),ot(Ct,null,Qt(o.value.gearCount,D=>(rt(),ot("td",{key:"d"+D},it(o.value.gears[D-1]?Ae(o.value.gears[D-1].pitchR*2):"—"),1))),128))]),_e("tr",null,[_[44]||(_[44]=_e("td",null,"基圆直径 d_b",-1)),(rt(!0),ot(Ct,null,Qt(o.value.gearCount,D=>(rt(),ot("td",{key:"db"+D},it(o.value.gears[D-1]?Ae(o.value.gears[D-1].baseR*2):"—"),1))),128))]),_e("tr",null,[_[45]||(_[45]=_e("td",null,"齿顶圆 d_a",-1)),(rt(!0),ot(Ct,null,Qt(o.value.gearCount,D=>(rt(),ot("td",{key:"da"+D},it(o.value.gears[D-1]?Ae(o.value.gears[D-1].addendumR*2):"—"),1))),128))]),_e("tr",null,[_[46]||(_[46]=_e("td",null,"齿根圆 d_f",-1)),(rt(!0),ot(Ct,null,Qt(o.value.gearCount,D=>(rt(),ot("td",{key:"df"+D},it(o.value.gears[D-1]?Ae(o.value.gears[D-1].dedendumR*2):"—"),1))),128))]),_e("tr",null,[_[47]||(_[47]=_e("td",null,"基节 p_b = πm·cosα",-1)),(rt(!0),ot(Ct,null,Qt(o.value.gearCount,D=>(rt(),ot("td",{key:"pb"+D},it(o.value.gears[D-1]?Ae(o.value.gears[D-1].basePitch):"—"),1))),128))]),_e("tr",null,[_[48]||(_[48]=_e("td",null,"根切风险",-1)),(rt(!0),ot(Ct,null,Qt(o.value.gearCount,D=>(rt(),ot("td",{key:"uc"+D,class:Dn(o.value.gears[D-1]?.undercut?"bad":"good")},it(o.value.gears[D-1]?o.value.gears[D-1].undercut?"根切 ❗":"安全":"—"),3))),128))])])]),ve.value?(rt(),ot("div",JT,[_[51]||(_[51]=_e("h3",null,"轮系速比（由各段外啮合关系相乘，非直接套末轮）",-1)),(rt(!0),ot(Ct,null,Qt(u.value,(D,ge)=>(rt(),ot("div",{key:"r"+D.index},[St(" 段"+it(D.index+1)+" 有向速比 Δφ右/Δφ左 = −z左/z右 = ",1),_e("b",null,it(ve.value.segmentRatios[ge].toFixed(4)),1)]))),128)),_e("div",null,[_[49]||(_[49]=St("总速比 Δφ末/Δ首 = ",-1)),_e("b",null,it(ve.value.total.toFixed(4)),1),St(" （= "+it(ve.value.segmentRatios.map(D=>D.toFixed(3)).join(" × "))+"） ",1)]),_e("div",null,[_[50]||(_[50]=St("首末轮转向： ",-1)),_e("b",{class:Dn(ve.value.sameDirection?"good":"bad")},it(i.value==="chain"?ve.value.sameDirection?"相同 ✅（两次外啮合，方向反转两次）":"相反":"相反 ✅（一次外啮合）"),3)])])):En("",!0),(rt(!0),ot(Ct,null,Qt(u.value,D=>(rt(),ot("div",{key:"rep"+D.index,class:Dn(["mesh-report",{dimmed:i.value==="chain"&&M.value!==D.index}])},[_e("h3",null,it(te[D.index])+" 啮合检查",1),D.rejected?En("",!0):(rt(),ot(Ct,{key:0},[_e("div",null,[_[52]||(_[52]=St("标准中心距 a₀：",-1)),_e("b",null,it(Ae(D.mesh.a0)),1)]),_e("div",null,[_[53]||(_[53]=St("实际中心距 a：",-1)),_e("b",null,it(Ae(D.mesh.a)),1),St("（Δa = "+it(Ae(D.mesh.deltaA))+"）",1)]),_e("div",null,[_[54]||(_[54]=St("啮合角 α′：",-1)),_e("b",null,it((D.mesh.alphaPrime/Zn(El)).toFixed(3))+"°",1)]),_e("div",null,[_[55]||(_[55]=St("节圆半径 r左′/r右′：",-1)),_e("b",null,it(Ae(D.mesh.pitchR1))+" / "+it(Ae(D.mesh.pitchR2)),1)]),_e("div",null,[_[56]||(_[56]=St("实际啮合线长度 g_α：",-1)),_e("b",null,it(Ae(D.mesh.pathOfContact)),1)]),_e("div",null,[_[57]||(_[57]=St("重合度 ε_α： ",-1)),_e("b",{class:Dn(D.mesh.contactRatio<1?"bad":"good")},it(D.mesh.contactRatio.toFixed(3)),3)]),_e("div",null,[_[58]||(_[58]=St("圆周/法向侧隙：",-1)),_e("b",null,it(Ae(D.mesh.backlashTangential))+" / "+it(Ae(D.mesh.backlashNormal)),1)]),_e("div",null,[_[59]||(_[59]=St("顶隙 c：",-1)),_e("b",null,it(Ae(D.mesh.clearance12)),1)]),_e("div",null,[_[60]||(_[60]=St("基节一致： ",-1)),_e("b",{class:Dn(D.mesh.basePitchMatch?"good":"bad")},it(D.mesh.basePitchMatch?"是 ✅":"否 ❌"),3)]),D.mesh.warnings.length?(rt(),ot("ul",jT,[(rt(!0),ot(Ct,null,Qt(D.mesh.warnings,(ge,T)=>(rt(),ot("li",{key:T},"⚠️ "+it(ge),1))),128))])):En("",!0)],64))],2))),128)),_[61]||(_[61]=_e("div",{class:"formula"}," 每段严格相位：t左=tanα′+s/rb左，t右=tanα′−s/rb右；rb左·Δφ左 = −rb右·Δφ右。 惰轮只有一个本体转角，必须同时满足两段；故末轮姿态由 φ₁→s₁→φ₂→s₂→φ₃ 严格级联得到。 ",-1))])):En("",!0)])]),_e("aside",QT,[_e("section",null,[_e("h2",null,"案例（IndexedDB，schema v"+it(Zn(cs))+"）",1),ln(_e("input",{"onUpdate:modelValue":_[15]||(_[15]=D=>he.value=D),placeholder:"案例名称"},null,512),[[Ci,he.value]]),ln(_e("textarea",{"onUpdate:modelValue":_[16]||(_[16]=D=>oe.value=D),placeholder:"备注（可选）",rows:"2"},null,512),[[Ci,oe.value]]),_e("div",eA,[_e("button",{onClick:_[17]||(_[17]=D=>C(!0))},"保存（含轮廓）"),_e("button",{onClick:_[18]||(_[18]=D=>C(!1))},"仅参数")]),_e("div",tA,[_e("button",{onClick:_[19]||(_[19]=D=>F(!0))},"导出 JSON+轮廓"),_e("button",{onClick:_[20]||(_[20]=D=>F(!1))},"导出参数")]),_e("label",nA,[_[62]||(_[62]=St("导入 JSON（旧双轮案例自动迁移） ",-1)),_e("input",{type:"file",accept:"application/json,.json",onChange:G,hidden:""},null,32)])]),_e("section",null,[_[63]||(_[63]=_e("h2",null,"已存案例",-1)),_e("ul",iA,[(rt(!0),ot(Ct,null,Qt(tt.value,D=>(rt(),ot("li",{key:D.id},[_e("div",rA,[_e("b",null,it(D.name),1),_e("span",null,it(D.mode==="chain"?"三轮链":"双轮")+" · "+it(fe(D)),1),D.checks&&Object.keys(D.checks).length?(rt(),ot("span",sA," 含"+it(Object.keys(D.checks).length)+"段检查 ",1)):En("",!0)]),_e("div",oA,[_e("button",{onClick:ge=>W(D)},"载入",8,aA),D.mode==="pair"?(rt(),ot("button",{key:0,title:"复制为三轮链（轮3 默认复制轮1，需主动另存）",onClick:ge=>Q(D)},"扩为三轮链",8,lA)):En("",!0),_e("button",{class:"del",onClick:ge=>X(D.id)},"删",8,cA)])]))),128)),tt.value.length?En("",!0):(rt(),ot("li",uA,"暂无案例"))])])])])]))}});l0(hA).mount("#app");
