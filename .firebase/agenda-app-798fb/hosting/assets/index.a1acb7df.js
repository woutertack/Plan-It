var Xh=Object.defineProperty;var Yh=(n,e,t)=>e in n?Xh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var mt=(n,e,t)=>(Yh(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();class Dt{constructor({name:e,model:t,routerPath:s}){mt(this,"name");mt(this,"model");mt(this,"routerPath");mt(this,"reRender");this.name=e,this.model=t,this.routerPath=s}render(){return document.createElement("")}}const E={createButton({textContent:n="",id:e="",className:t="",onClick:s}){const r=document.createElement("button");return r.textContent=n,r.id=e,r.className=t,s&&r.addEventListener("click",()=>{s()}),r},createButtonSecondary({textContent:n="",id:e="",className:t="",onClick:s,children:r=[]}){const i=document.createElement("button");return i.textContent=n,i.id=e,i.className=t,s&&i.addEventListener("click",()=>{s()}),r.length&&r.forEach(o=>{o instanceof Element&&i.appendChild(o)}),i},createInput({id:n="",className:e="",type:t="text",name:s="",placeholder:r="",value:i="",textContent:o=" ",checked:a=!1,required:c=!1}){const u=document.createElement("input");return u.id=n,u.type=t,u.name=s,u.className=e,u.placeholder=r,u.value=i,u.textContent=o,u.checked=a,u.required=c,u},createContainer({id:n="",className:e="",innerHTML:t="",children:s=[],onClick:r}){const i=document.createElement("div");return i.id=n,i.className=e,i.innerHTML=t,r&&i.addEventListener("click",()=>{r()}),s.length&&s.forEach(o=>{o instanceof Element&&i.appendChild(o)}),i},createP({textContent:n=" ",id:e="",className:t=""}){const s=document.createElement("p");return s.id=e,s.className=t,s.textContent=n,s},createBr(){return document.createElement("br")},createSocialMediaButton({id:n="",className:e="",innerHTML:t,onClick:s}){const r=document.createElement("i");return r.id=n,r.className=e,r.innerHTML=t,s&&r.addEventListener("click",()=>{s()}),r},createLogo({id:n="",className:e="",innerHTML:t=""}){const s=document.createElement("i");return s.id=n,s.className=e,s.innerHTML=t,s},createForm({id:n="",className:e="",children:t=[]}){const s=document.createElement("form");return s.id=n,s.className=e,t.length&&t.forEach(r=>{r instanceof Element&&s.appendChild(r)}),s},createCalendar({textContent:n="",type:e="",className:t="",id:s="",value:r="",min:i="",max:o="",required:a=!1}){const c=document.createElement("input");return c.type=e,c.textContent=n,c.className=t,c.id=s,c.value=r,c.min=i,c.max=o,c.required=a,c},createTextarea({id:n="",className:e="",name:t="",placeholder:s="",value:r="",textContent:i=" "}){const o=document.createElement("textarea");return o.id=n,o.name=t,o.className=e,o.placeholder=s,o.value=r,o.textContent=i,o},createLink({id:n="",className:e="",innerHTML:t="",href:s="",textContent:r=" "}){const i=document.createElement("a");return i.id=n,i.className=e,i.innerHTML=t,i.href=s,i.textContent=r,i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Jh=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(t[l],t[h],t[d],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Jh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Zh=function(n){const e=Rc(n);return Dc.encodeByteArray(e,!0)},Ds=function(n){return Zh(n).replace(/\./g,"")},Lc=function(n){try{return Dc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=()=>ed().__FIREBASE_DEFAULTS__,nd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Lc(n[1]);return e&&JSON.parse(e)},Bi=()=>{try{return td()||nd()||sd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Oc=n=>{var e,t;return(t=(e=Bi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},rd=n=>{const e=Oc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},id=()=>{var n;return(n=Bi())===null||n===void 0?void 0:n.config},Pc=n=>{var e;return(e=Bi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ds(JSON.stringify(t)),Ds(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function ud(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hd(){const n=pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function dd(){try{return typeof indexedDB=="object"}catch{return!1}}function fd(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="FirebaseError";class Je extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=pd,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hn.prototype.create)}}class Hn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?md(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Je(r,a,s)}}function md(n,e){return n.replace(gd,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const gd=/\{\$([^}]+)}/g;function yd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ls(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(aa(i)&&aa(o)){if(!Ls(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function aa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function En(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function vd(n,e){const t=new wd(n,e);return t.subscribe.bind(t)}class wd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Ed(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Br),r.error===void 0&&(r.error=Br),r.complete===void 0&&(r.complete=Br);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ed(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Br(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n){return n&&n._delegate?n._delegate:n}class Ct{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new od;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Td(e))try{this.getOrInitializeService({instanceIdentifier:gt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gt){return this.instances.has(e)}getOptions(e=gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(!!s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_d(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gt){return this.component?this.component.multipleInstances?e:gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _d(n){return n===gt?void 0:n}function Td(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Id(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const Cd={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Sd=x.INFO,kd={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Ad=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=kd[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $i{constructor(e){this.name=e,this._logLevel=Sd,this._logHandler=Ad,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const Nd=(n,e)=>e.some(t=>n instanceof t);let ca,ua;function Rd(){return ca||(ca=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dd(){return ua||(ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mc=new WeakMap,ii=new WeakMap,xc=new WeakMap,$r=new WeakMap,qi=new WeakMap;function Ld(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(nt(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Mc.set(t,n)}).catch(()=>{}),qi.set(e,n),e}function Od(n){if(ii.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ii.set(n,e)}let oi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ii.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Pd(n){oi=n(oi)}function Md(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(qr(this),e,...t);return xc.set(s,e.sort?e.sort():[e]),nt(s)}:Dd().includes(n)?function(...e){return n.apply(qr(this),e),nt(Mc.get(this))}:function(...e){return nt(n.apply(qr(this),e))}}function xd(n){return typeof n=="function"?Md(n):(n instanceof IDBTransaction&&Od(n),Nd(n,Rd())?new Proxy(n,oi):n)}function nt(n){if(n instanceof IDBRequest)return Ld(n);if($r.has(n))return $r.get(n);const e=xd(n);return e!==n&&($r.set(n,e),qi.set(e,n)),e}const qr=n=>qi.get(n);function Ud(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=nt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(nt(o.result),c.oldVersion,c.newVersion,nt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Fd=["get","getKey","getAll","getAllKeys","count"],Vd=["put","add","delete","clear"],jr=new Map;function la(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Vd.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Fd.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return jr.set(e,i),i}Pd(n=>({...n,get:(e,t,s)=>la(e,t)||n.get(e,t,s),has:(e,t)=>!!la(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($d(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function $d(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ai="@firebase/app",ha="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new $i("@firebase/app"),qd="@firebase/app-compat",jd="@firebase/analytics-compat",Hd="@firebase/analytics",Gd="@firebase/app-check-compat",Kd="@firebase/app-check",Wd="@firebase/auth",zd="@firebase/auth-compat",Qd="@firebase/database",Xd="@firebase/database-compat",Yd="@firebase/functions",Jd="@firebase/functions-compat",Zd="@firebase/installations",ef="@firebase/installations-compat",tf="@firebase/messaging",nf="@firebase/messaging-compat",sf="@firebase/performance",rf="@firebase/performance-compat",of="@firebase/remote-config",af="@firebase/remote-config-compat",cf="@firebase/storage",uf="@firebase/storage-compat",lf="@firebase/firestore",hf="@firebase/firestore-compat",df="firebase",ff="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="[DEFAULT]",pf={[ai]:"fire-core",[qd]:"fire-core-compat",[Hd]:"fire-analytics",[jd]:"fire-analytics-compat",[Kd]:"fire-app-check",[Gd]:"fire-app-check-compat",[Wd]:"fire-auth",[zd]:"fire-auth-compat",[Qd]:"fire-rtdb",[Xd]:"fire-rtdb-compat",[Yd]:"fire-fn",[Jd]:"fire-fn-compat",[Zd]:"fire-iid",[ef]:"fire-iid-compat",[tf]:"fire-fcm",[nf]:"fire-fcm-compat",[sf]:"fire-perf",[rf]:"fire-perf-compat",[of]:"fire-rc",[af]:"fire-rc-compat",[cf]:"fire-gcs",[uf]:"fire-gcs-compat",[lf]:"fire-fst",[hf]:"fire-fst-compat","fire-js":"fire-js",[df]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new Map,ui=new Map;function mf(n,e){try{n.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qt(n){const e=n.name;if(ui.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;ui.set(e,n);for(const t of Os.values())mf(t,n);return!0}function ji(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},st=new Hn("app","Firebase",gf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw st.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=ff;function Hi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ci,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw st.create("bad-app-name",{appName:String(r)});if(t||(t=id()),!t)throw st.create("no-options");const i=Os.get(r);if(i){if(Ls(t,i.options)&&Ls(s,i.config))return i;throw st.create("duplicate-app",{appName:r})}const o=new bd(r);for(const c of ui.values())o.addComponent(c);const a=new yf(t,s,o);return Os.set(r,a),a}function Uc(n=ci){const e=Os.get(n);if(!e&&n===ci)return Hi();if(!e)throw st.create("no-app",{appName:n});return e}function rt(n,e,t){var s;let r=(s=pf[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}Qt(new Ct(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="firebase-heartbeat-database",wf=1,Rn="firebase-heartbeat-store";let Hr=null;function Fc(){return Hr||(Hr=Ud(vf,wf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rn)}}}).catch(n=>{throw st.create("idb-open",{originalErrorMessage:n.message})})),Hr}async function Ef(n){try{return(await Fc()).transaction(Rn).objectStore(Rn).get(Vc(n))}catch(e){if(e instanceof Je)St.warn(e.message);else{const t=st.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(t.message)}}}async function da(n,e){try{const s=(await Fc()).transaction(Rn,"readwrite");return await s.objectStore(Rn).put(e,Vc(n)),s.done}catch(t){if(t instanceof Je)St.warn(t.message);else{const s=st.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});St.warn(s.message)}}}function Vc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=1024,_f=30*24*60*60*1e3;class Tf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cf(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=_f}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fa(),{heartbeatsToSend:t,unsentEntries:s}=bf(this._heartbeatsCache.heartbeats),r=Ds(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function fa(){return new Date().toISOString().substring(0,10)}function bf(n,e=If){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),pa(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),pa(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Cf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dd()?fd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ef(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return da(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return da(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function pa(n){return Ds(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n){Qt(new Ct("platform-logger",e=>new Bd(e),"PRIVATE")),Qt(new Ct("heartbeat",e=>new Tf(e),"PRIVATE")),rt(ai,ha,n),rt(ai,ha,"esm2017"),rt("fire-js","")}Sf("");function Gi(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function Bc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kf=Bc,$c=new Hn("auth","Firebase",Bc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new $i("@firebase/auth");function Ts(n,...e){ma.logLevel<=x.ERROR&&ma.error(`Auth (${Kn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,...e){throw Ki(n,...e)}function xe(n,...e){return Ki(n,...e)}function qc(n,e,t){const s=Object.assign(Object.assign({},kf()),{[e]:t});return new Hn("auth","Firebase",s).create(e,{appName:n.name})}function Af(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ae(n,"argument-error"),qc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ki(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return $c.create(n,...e)}function S(n,e,...t){if(!n)throw Ki(e,...t)}function je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ts(e),new Error(e)}function We(n,e){n||je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Map;function He(n){We(n instanceof Function,"Expected a class definition");let e=ga.get(n);return e?(We(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ga.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e){const t=ji(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Ls(i,e!=null?e:{}))return r;Ae(r,"already-initialized")}return t.initialize({options:e})}function Rf(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(He);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Df(){return ya()==="http:"||ya()==="https:"}function ya(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Df()||ud()||"connection"in navigator)?navigator.onLine:!0}function Of(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this.shortDelay=e,this.longDelay=t,We(t>e,"Short delay should be less than long delay!"),this.isMobile=cd()||ld()}get(){return Lf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n,e){We(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new Wn(3e4,6e4);function zn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qn(n,e,t,s,r={}){return Hc(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Gn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),jc.fetch()(Gc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Hc(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Pf),e);try{const r=new xf(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gs(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gs(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gs(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw gs(n,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qc(n,l,u);Ae(n,l)}}catch(r){if(r instanceof Je)throw r;Ae(n,"network-request-failed")}}async function Xn(n,e,t,s,r={}){const i=await Qn(n,e,t,s,r);return"mfaPendingCredential"in i&&Ae(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Gc(n,e,t,s){const r=`${e}${t}?${s}`;return n.config.emulator?Wi(n.config,r):`${n.config.apiScheme}://${r}`}class xf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(xe(this.auth,"network-request-failed")),Mf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gs(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=xe(n,e,s);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uf(n,e){return Qn(n,"POST","/v1/accounts:delete",e)}async function Ff(n,e){return Qn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vf(n,e=!1){const t=ne(n),s=await t.getIdToken(e),r=nr(s);S(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Cn(Gr(r.auth_time)),issuedAtTime:Cn(Gr(r.iat)),expirationTime:Cn(Gr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Gr(n){return Number(n)*1e3}function nr(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ts("JWT malformed, contained fewer than 3 sections"),null;try{const r=Lc(t);return r?JSON.parse(r):(Ts("Failed to decode base64 JWT payload"),null)}catch(r){return Ts("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Bf(n){const e=nr(n);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Je&&$f(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function $f({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cn(this.lastLoginAt),this.creationTime=Cn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(n){var e;const t=n.auth,s=await n.getIdToken(),r=await Dn(n,Ff(t,{idToken:s}));S(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gf(i.providerUserInfo):[],a=Hf(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Kc(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function jf(n){const e=ne(n);await Ps(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hf(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Gf(n){return n.map(e=>{var{providerId:t}=e,s=Gi(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(n,e){const t=await Hc(n,{},async()=>{const s=Gn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=Gc(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Kf(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new Ln;return s&&(S(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(S(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(S(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n,e){S(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class _t{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=Gi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Dn(this,this.stsTokenManager.getToken(this.auth,e));return S(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Vf(this,e)}reload(){return jf(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ps(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dn(this,Uf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,a,c,u,l;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,p=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,L=(u=t.createdAt)!==null&&u!==void 0?u:void 0,D=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:K,emailVerified:re,isAnonymous:j,providerData:_e,stsTokenManager:ge}=t;S(K&&ge,e,"internal-error");const Ce=Ln.fromJSON(this.name,ge);S(typeof K=="string",e,"internal-error"),Ze(h,e.name),Ze(d,e.name),S(typeof re=="boolean",e,"internal-error"),S(typeof j=="boolean",e,"internal-error"),Ze(p,e.name),Ze(y,e.name),Ze(C,e.name),Ze(v,e.name),Ze(L,e.name),Ze(D,e.name);const ye=new _t({uid:K,auth:e,email:d,emailVerified:re,displayName:h,isAnonymous:j,photoURL:y,phoneNumber:p,tenantId:C,stsTokenManager:Ce,createdAt:L,lastLoginAt:D});return _e&&Array.isArray(_e)&&(ye.providerData=_e.map(Se=>Object.assign({},Se))),v&&(ye._redirectEventId=v),ye}static async _fromIdTokenResponse(e,t,s=!1){const r=new Ln;r.updateFromServerResponse(t);const i=new _t({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ps(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wc.type="NONE";const va=Wc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(n,e,t){return`firebase:${n}:${e}:${t}`}class jt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=bs(this.userKey,r.apiKey,i),this.fullPersistenceKey=bs("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new jt(He(va),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||He(va);const o=bs(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=_t._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new jt(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new jt(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jc(e))return"Blackberry";if(Zc(e))return"Webos";if(zi(e))return"Safari";if((e.includes("chrome/")||Qc(e))&&!e.includes("edge/"))return"Chrome";if(Yc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function zc(n=pe()){return/firefox\//i.test(n)}function zi(n=pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qc(n=pe()){return/crios\//i.test(n)}function Xc(n=pe()){return/iemobile/i.test(n)}function Yc(n=pe()){return/android/i.test(n)}function Jc(n=pe()){return/blackberry/i.test(n)}function Zc(n=pe()){return/webos/i.test(n)}function sr(n=pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wf(n=pe()){var e;return sr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zf(){return hd()&&document.documentMode===10}function eu(n=pe()){return sr(n)||Yc(n)||Zc(n)||Jc(n)||/windows phone/i.test(n)||Xc(n)}function Qf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(n,e=[]){let t;switch(n){case"Browser":t=wa(pe());break;case"Worker":t=`${wa(pe())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,s){this.app=e,this.heartbeatServiceProvider=t,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ea(this),this.idTokenSubscription=new Ea(this),this.beforeStateQueue=new Xf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=He(t)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await jt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ps(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Of()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ne(e):null;return t&&S(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&He(e)||this._popupRedirectResolver;S(t,this,"argument-error"),this.redirectPersistenceManager=await jt.create(this,[He(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return S(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,s,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(t["X-Firebase-Client"]=s),t}}function an(n){return ne(n)}class Ea{constructor(e){this.auth=e,this.observer=null,this.addObserver=vd(t=>this.observer=t)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Jf(n,e,t){const s=an(n);S(s._canInitEmulator,s,"emulator-config-failed"),S(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),i=nu(e),{host:o,port:a}=Zf(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ep()}function nu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zf(n){const e=nu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Ia(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Ia(o)}}}function Ia(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ep(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return je("not implemented")}_getIdTokenResponse(e){return je("not implemented")}_linkToIdToken(e,t){return je("not implemented")}_getReauthenticationResolver(e){return je("not implemented")}}async function tp(n,e){return Qn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(n,e){return Xn(n,"POST","/v1/accounts:signInWithPassword",zn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(n,e){return Xn(n,"POST","/v1/accounts:signInWithEmailLink",zn(n,e))}async function rp(n,e){return Xn(n,"POST","/v1/accounts:signInWithEmailLink",zn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Qi{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new On(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new On(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return np(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sp(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return tp(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rp(e,{idToken:t,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(n,e){return Xn(n,"POST","/v1/accounts:signInWithIdp",zn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="http://localhost";class kt extends Qi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=Gi(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new kt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ht(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ht(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ht(e,t)}buildRequest(){const e={requestUri:ip,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Gn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ap(n){const e=wn(En(n)).link,t=e?wn(En(e)).deep_link_id:null,s=wn(En(n)).deep_link_id;return(s?wn(En(s)).link:null)||s||t||e||n}class Xi{constructor(e){var t,s,r,i,o,a;const c=wn(En(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=op((r=c.mode)!==null&&r!==void 0?r:null);S(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=ap(e);try{return new Xi(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.providerId=cn.PROVIDER_ID}static credential(e,t){return On._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Xi.parseLink(t);return S(s,"argument-error"),On._fromEmailAndCode(e,s.code,s.tenantId)}}cn.PROVIDER_ID="password";cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Yi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Yn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Be.credential(e.oauthAccessToken)}catch{return null}}}Be.FACEBOOK_SIGN_IN_METHOD="facebook.com";Be.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Yn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return kt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return $e.credential(t,s)}catch{return null}}}$e.GOOGLE_SIGN_IN_METHOD="google.com";$e.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Yn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch{return null}}}qe.GITHUB_SIGN_IN_METHOD="github.com";qe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Yn{constructor(){super("twitter.com")}static credential(e,t){return kt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return et.credential(t,s)}catch{return null}}}et.TWITTER_SIGN_IN_METHOD="twitter.com";et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(n,e){return Xn(n,"POST","/v1/accounts:signUp",zn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await _t._fromIdTokenResponse(e,s,r),o=_a(s);return new At({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=_a(s);return new At({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function _a(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Je{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ms.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Ms(e,t,s,r)}}function su(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ms._fromErrorAndOperation(n,i,e,s):i})}async function up(n,e,t=!1){const s=await Dn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return At._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(n,e,t=!1){const{auth:s}=n,r="reauthenticate";try{const i=await Dn(n,su(s,r,e,n),t);S(i.idToken,s,"internal-error");const o=nr(i.idToken);S(o,s,"internal-error");const{sub:a}=o;return S(n.uid===a,s,"user-mismatch"),At._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ae(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ru(n,e,t=!1){const s="signIn",r=await su(n,s,e),i=await At._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function hp(n,e){return ru(an(n),e)}async function dp(n,e,t){const s=an(n),r=await cp(s,{returnSecureToken:!0,email:e,password:t}),i=await At._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function fp(n,e,t){return hp(ne(n),cn.credential(e,t))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n){var e,t;if(!n)return null;const{providerId:s}=n,r=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},i=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(n==null?void 0:n.idToken)){const o=(t=(e=nr(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Gt(i,a)}}if(!s)return null;switch(s){case"facebook.com":return new mp(i,r);case"github.com":return new gp(i,r);case"google.com":return new yp(i,r);case"twitter.com":return new vp(i,r,n.screenName||null);case"custom":case"anonymous":return new Gt(i,null);default:return new Gt(i,s,r)}}class Gt{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class iu extends Gt{constructor(e,t,s,r){super(e,t,s),this.username=r}}class mp extends Gt{constructor(e,t){super(e,"facebook.com",t)}}class gp extends iu{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class yp extends Gt{constructor(e,t){super(e,"google.com",t)}}class vp extends iu{constructor(e,t,s){super(e,"twitter.com",t,s)}}function ou(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:pp(t)}function wp(n,e,t,s){return ne(n).onIdTokenChanged(e,t,s)}function Ep(n,e,t){return ne(n).beforeAuthStateChanged(e,t)}function Ip(n){return ne(n).signOut()}const xs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xs,"1"),this.storage.removeItem(xs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){const n=pe();return zi(n)||sr(n)}const Tp=1e3,bp=10;class cu extends au{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_p()&&Qf(),this.fallbackToPolling=eu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);zf()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,bp):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Tp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cu.type="LOCAL";const Cp=cu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu extends au{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}uu.type="SESSION";const lu=uu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new rr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await Sp(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ji("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return window}function Ap(n){Ue().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function Np(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Dp(){return hu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="firebaseLocalStorageDb",Lp=1,Us="firebaseLocalStorage",fu="fbase_key";class Jn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ir(n,e){return n.transaction([Us],e?"readwrite":"readonly").objectStore(Us)}function Op(){const n=indexedDB.deleteDatabase(du);return new Jn(n).toPromise()}function hi(){const n=indexedDB.open(du,Lp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Us,{keyPath:fu})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Us)?e(s):(s.close(),await Op(),e(await hi()))})})}async function Ta(n,e,t){const s=ir(n,!0).put({[fu]:e,value:t});return new Jn(s).toPromise()}async function Pp(n,e){const t=ir(n,!1).get(e),s=await new Jn(t).toPromise();return s===void 0?null:s.value}function ba(n,e){const t=ir(n,!0).delete(e);return new Jn(t).toPromise()}const Mp=800,xp=3;class pu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>xp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rr._getInstance(Dp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Np(),!this.activeServiceWorker)return;this.sender=new kp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((t=s[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hi();return await Ta(e,xs,"1"),await ba(e,xs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ta(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Pp(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ba(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ir(r,!1).getAll();return new Jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pu.type="LOCAL";const Up=pu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Vp(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=xe("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Fp().appendChild(s)})}function Bp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Wn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n,e){return e?He(e):(S(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Qi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ht(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ht(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $p(n){return ru(n.auth,new Zi(n),n.bypassAuthState)}function qp(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),lp(t,new Zi(n),n.bypassAuthState)}async function jp(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),up(t,new Zi(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $p;case"linkViaPopup":case"linkViaRedirect":return jp;case"reauthViaPopup":case"reauthViaRedirect":return qp;default:Ae(this.auth,"internal-error")}}resolve(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=new Wn(2e3,1e4);async function eo(n,e,t){const s=an(n);Af(n,e,Yi);const r=mu(s,t);return new yt(s,"signInViaPopup",e,r).executeNotNull()}class yt extends gu{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,yt.currentPopupAction&&yt.currentPopupAction.cancel(),yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){We(this.filter.length===1,"Popup operations only handle one event");const e=Ji();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Hp.get())};e()}}yt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="pendingRedirect",Cs=new Map;class Kp extends gu{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Cs.get(this.auth._key());if(!e){try{const s=await Wp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Cs.set(this.auth._key(),e)}return this.bypassAuthState||Cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wp(n,e){const t=Xp(e),s=Qp(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function zp(n,e){Cs.set(n._key(),e)}function Qp(n){return He(n._redirectPersistence)}function Xp(n){return bs(Gp,n.config.apiKey,n.name)}async function Yp(n,e,t=!1){const s=an(n),r=mu(s,e),o=await new Kp(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=10*60*1e3;class Zp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!em(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!yu(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(xe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ca(e))}saveEventToCache(e){this.cachedEventUids.add(Ca(e)),this.lastProcessedEventTime=Date.now()}}function Ca(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function em(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(n,e={}){return Qn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sm=/^https?/;async function rm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await tm(n);for(const t of e)try{if(im(t))return}catch{}Ae(n,"unauthorized-domain")}function im(n){const e=li(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!sm.test(t))return!1;if(nm.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new Wn(3e4,6e4);function Sa(){const n=Ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function am(n){return new Promise((e,t)=>{var s,r,i;function o(){Sa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sa(),t(xe(n,"network-request-failed"))},timeout:om.get()})}if(!((r=(s=Ue().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ue().gapi)===null||i===void 0)&&i.load)o();else{const a=Bp("iframefcb");return Ue()[a]=()=>{gapi.load?o():t(xe(n,"network-request-failed"))},Vp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Ss=null,e})}let Ss=null;function cm(n){return Ss=Ss||am(n),Ss}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=new Wn(5e3,15e3),lm="__/auth/iframe",hm="emulator/auth/iframe",dm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pm(n){const e=n.config;S(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Wi(e,hm):`https://${n.config.authDomain}/${lm}`,s={apiKey:e.apiKey,appName:n.name,v:Kn},r=fm.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Gn(s).slice(1)}`}async function mm(n){const e=await cm(n),t=Ue().gapi;return S(t,n,"internal-error"),e.open({where:document.body,url:pm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dm,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=xe(n,"network-request-failed"),a=Ue().setTimeout(()=>{i(o)},um.get());function c(){Ue().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ym=500,vm=600,wm="_blank",Em="http://localhost";class ka{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Im(n,e,t,s=ym,r=vm){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gm),{width:s.toString(),height:r.toString(),top:i,left:o}),u=pe().toLowerCase();t&&(a=Qc(u)?wm:t),zc(u)&&(e=e||Em,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(Wf(u)&&a!=="_self")return _m(e||"",a),new ka(null);const h=window.open(e||"",a,l);S(h,n,"popup-blocked");try{h.focus()}catch{}return new ka(h)}function _m(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="__/auth/handler",bm="emulator/auth/handler";function Aa(n,e,t,s,r,i){S(n.config.authDomain,n,"auth-domain-config-required"),S(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Kn,eventId:r};if(e instanceof Yi){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",yd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Yn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Cm(n)}?${Gn(a).slice(1)}`}function Cm({config:n}){return n.emulator?Wi(n,bm):`https://${n.authDomain}/${Tm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="webStorageSupport";class Sm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lu,this._completeRedirectFn=Yp,this._overrideRedirectResult=zp}async _openPopup(e,t,s,r){var i;We((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Aa(e,t,s,li(),r);return Im(e,o,Ji())}async _openRedirect(e,t,s,r){return await this._originValidation(e),Ap(Aa(e,t,s,li(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(We(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await mm(e),s=new Zp(e);return t.register("authEvent",r=>(S(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kr,{type:Kr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Kr];o!==void 0&&t(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eu()||zi()||sr()}}const km=Sm;var Na="@firebase/auth",Ra="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rm(n){Qt(new Ct("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{S(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),S(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tu(n)},l=new Yf(a,c,u);return Rf(l,t),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Qt(new Ct("auth-internal",e=>{const t=an(e.getProvider("auth").getImmediate());return(s=>new Am(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(Na,Ra,Nm(n)),rt(Na,Ra,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=5*60,Lm=Pc("authIdTokenMaxAge")||Dm;let Da=null;const Om=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Lm)return;const r=t==null?void 0:t.token;Da!==r&&(Da=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function un(n=Uc()){const e=ji(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Nf(n,{popupRedirectResolver:km,persistence:[Up,Cp,lu]}),s=Pc("authTokenSyncURL");if(s){const i=Om(s);Ep(t,i,()=>i(t.currentUser)),wp(t,o=>i(o))}const r=Oc("auth");return r&&Jf(t,`http://${r}`),t}Rm("Browser");var Pm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,to=to||{},A=Pm||self;function Fs(){}function or(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Zn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Mm(n){return Object.prototype.hasOwnProperty.call(n,Wr)&&n[Wr]||(n[Wr]=++xm)}var Wr="closure_uid_"+(1e9*Math.random()>>>0),xm=0;function Um(n,e,t){return n.call.apply(n.bind,arguments)}function Fm(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function de(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?de=Um:de=Fm,de.apply(null,arguments)}function ys(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function ce(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function ht(){this.s=this.s,this.o=this.o}var Vm=0;ht.prototype.s=!1;ht.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Vm!=0)&&Mm(this)};ht.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function no(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function La(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(or(s)){const r=n.length||0,i=s.length||0;n.length=r+i;for(let o=0;o<i;o++)n[r+o]=s[o]}else n.push(s)}}function fe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Bm=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{A.addEventListener("test",Fs,e),A.removeEventListener("test",Fs,e)}catch{}return n}();function Vs(n){return/^[\s\xa0]*$/.test(n)}var Oa=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function zr(n,e){return n<e?-1:n>e?1:0}function ar(){var n=A.navigator;return n&&(n=n.userAgent)?n:""}function Pe(n){return ar().indexOf(n)!=-1}function so(n){return so[" "](n),n}so[" "]=Fs;function $m(n){var e=Hm;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var qm=Pe("Opera"),Xt=Pe("Trident")||Pe("MSIE"),wu=Pe("Edge"),di=wu||Xt,Eu=Pe("Gecko")&&!(ar().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge"))&&!(Pe("Trident")||Pe("MSIE"))&&!Pe("Edge"),jm=ar().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge");function Iu(){var n=A.document;return n?n.documentMode:void 0}var Bs;e:{var Qr="",Xr=function(){var n=ar();if(Eu)return/rv:([^\);]+)(\)|;)/.exec(n);if(wu)return/Edge\/([\d\.]+)/.exec(n);if(Xt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(jm)return/WebKit\/(\S+)/.exec(n);if(qm)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Xr&&(Qr=Xr?Xr[1]:""),Xt){var Yr=Iu();if(Yr!=null&&Yr>parseFloat(Qr)){Bs=String(Yr);break e}}Bs=Qr}var Hm={};function Gm(){return $m(function(){let n=0;const e=Oa(String(Bs)).split("."),t=Oa("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var r=e[o]||"",i=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;n=zr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||zr(r[2].length==0,i[2].length==0)||zr(r[2],i[2]),r=r[3],i=i[3]}while(n==0)}return 0<=n})}var fi;if(A.document&&Xt){var Pa=Iu();fi=Pa||parseInt(Bs,10)||void 0}else fi=void 0;var Km=fi;function Pn(n,e){if(fe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Eu){e:{try{so(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Wm[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Pn.X.h.call(this)}}ce(Pn,fe);var Wm={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var es="closure_listenable_"+(1e6*Math.random()|0),zm=0;function Qm(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=r,this.key=++zm,this.ba=this.ea=!1}function cr(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function ro(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function _u(n){const e={};for(const t in n)e[t]=n[t];return e}const Ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tu(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<Ma.length;i++)t=Ma[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function ur(n){this.src=n,this.g={},this.h=0}ur.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=mi(n,e,s,r);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new Qm(e,this.src,i,!!s,r),e.ea=t,n.push(e)),e};function pi(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=vu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(cr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function mi(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==s)return r}return-1}var io="closure_lm_"+(1e6*Math.random()|0),Jr={};function bu(n,e,t,s,r){if(s&&s.once)return Su(n,e,t,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)bu(n,e[i],t,s,r);return null}return t=co(t),n&&n[es]?n.N(e,t,Zn(s)?!!s.capture:!!s,r):Cu(n,e,t,!1,s,r)}function Cu(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=Zn(r)?!!r.capture:!!r,a=ao(n);if(a||(n[io]=a=new ur(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=Xm(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)Bm||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(Au(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Xm(){function n(t){return e.call(n.src,n.listener,t)}const e=Ym;return n}function Su(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Su(n,e[i],t,s,r);return null}return t=co(t),n&&n[es]?n.O(e,t,Zn(s)?!!s.capture:!!s,r):Cu(n,e,t,!0,s,r)}function ku(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ku(n,e[i],t,s,r);else s=Zn(s)?!!s.capture:!!s,t=co(t),n&&n[es]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=mi(i,t,s,r),-1<t&&(cr(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=ao(n))&&(e=n.g[e.toString()],n=-1,e&&(n=mi(e,t,s,r)),(t=-1<n?e[n]:null)&&oo(t))}function oo(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[es])pi(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Au(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=ao(e))?(pi(t,n),t.h==0&&(t.src=null,e[io]=null)):cr(n)}}}function Au(n){return n in Jr?Jr[n]:Jr[n]="on"+n}function Ym(n,e){if(n.ba)n=!0;else{e=new Pn(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&oo(n),n=t.call(s,e)}return n}function ao(n){return n=n[io],n instanceof ur?n:null}var Zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function co(n){return typeof n=="function"?n:(n[Zr]||(n[Zr]=function(e){return n.handleEvent(e)}),n[Zr])}function se(){ht.call(this),this.i=new ur(this),this.P=this,this.I=null}ce(se,ht);se.prototype[es]=!0;se.prototype.removeEventListener=function(n,e,t,s){ku(this,n,e,t,s)};function ae(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new fe(e,n);else if(e instanceof fe)e.target=e.target||n;else{var r=e;e=new fe(s,n),Tu(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=vs(o,s,!0,e)&&r}if(o=e.g=n,r=vs(o,s,!0,e)&&r,r=vs(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=vs(o,s,!1,e)&&r}se.prototype.M=function(){if(se.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)cr(t[s]);delete n.g[e],n.h--}}this.I=null};se.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};se.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function vs(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&pi(n.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var uo=A.JSON.stringify;function Jm(){var n=Du;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Zm{constructor(){this.h=this.g=null}add(e,t){const s=Nu.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var Nu=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new eg,n=>n.reset());class eg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function tg(n){A.setTimeout(()=>{throw n},0)}function Ru(n,e){gi||ng(),yi||(gi(),yi=!0),Du.add(n,e)}var gi;function ng(){var n=A.Promise.resolve(void 0);gi=function(){n.then(sg)}}var yi=!1,Du=new Zm;function sg(){for(var n;n=Jm();){try{n.h.call(n.g)}catch(t){tg(t)}var e=Nu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}yi=!1}function lr(n,e){se.call(this),this.h=n||1,this.g=e||A,this.j=de(this.lb,this),this.l=Date.now()}ce(lr,se);_=lr.prototype;_.ca=!1;_.R=null;_.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ae(this,"tick"),this.ca&&(lo(this),this.start()))}};_.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lo(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}_.M=function(){lr.X.M.call(this),lo(this),delete this.g};function ho(n,e,t){if(typeof n=="function")t&&(n=de(n,t));else if(n&&typeof n.handleEvent=="function")n=de(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(n,e||0)}function Lu(n){n.g=ho(()=>{n.g=null,n.i&&(n.i=!1,Lu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class rg extends ht{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lu(this)}M(){super.M(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mn(n){ht.call(this),this.h=n,this.g={}}ce(Mn,ht);var xa=[];function Ou(n,e,t,s){Array.isArray(t)||(t&&(xa[0]=t.toString()),t=xa);for(var r=0;r<t.length;r++){var i=bu(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Pu(n){ro(n.g,function(e,t){this.g.hasOwnProperty(t)&&oo(e)},n),n.g={}}Mn.prototype.M=function(){Mn.X.M.call(this),Pu(this)};Mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hr(){this.g=!0}hr.prototype.Aa=function(){this.g=!1};function ig(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function og(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function Bt(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+cg(n,t)+(s?" "+s:"")})}function ag(n,e){n.info(function(){return"TIMEOUT: "+e})}hr.prototype.info=function(){};function cg(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return uo(t)}catch{return e}}var Lt={},Ua=null;function dr(){return Ua=Ua||new se}Lt.Pa="serverreachability";function Mu(n){fe.call(this,Lt.Pa,n)}ce(Mu,fe);function xn(n){const e=dr();ae(e,new Mu(e))}Lt.STAT_EVENT="statevent";function xu(n,e){fe.call(this,Lt.STAT_EVENT,n),this.stat=e}ce(xu,fe);function ve(n){const e=dr();ae(e,new xu(e,n))}Lt.Qa="timingevent";function Uu(n,e){fe.call(this,Lt.Qa,n),this.size=e}ce(Uu,fe);function ts(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){n()},e)}var fr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Fu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function fo(){}fo.prototype.h=null;function Fa(n){return n.h||(n.h=n.i())}function Vu(){}var ns={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function po(){fe.call(this,"d")}ce(po,fe);function mo(){fe.call(this,"c")}ce(mo,fe);var vi;function pr(){}ce(pr,fo);pr.prototype.g=function(){return new XMLHttpRequest};pr.prototype.i=function(){return{}};vi=new pr;function ss(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new Mn(this),this.O=ug,n=di?125:void 0,this.T=new lr(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Bu}function Bu(){this.i=null,this.g="",this.h=!1}var ug=45e3,wi={},$s={};_=ss.prototype;_.setTimeout=function(n){this.O=n};function Ei(n,e,t){n.K=1,n.v=gr(ze(e)),n.s=t,n.P=!0,$u(n,null)}function $u(n,e){n.F=Date.now(),rs(n),n.A=ze(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),Qu(t.i,"t",s),n.C=0,t=n.l.H,n.h=new Bu,n.g=gl(n.l,t?e:null,!n.s),0<n.N&&(n.L=new rg(de(n.La,n,n.g),n.N)),Ou(n.S,n.g,"readystatechange",n.ib),e=n.H?_u(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),xn(),ig(n.j,n.u,n.A,n.m,n.U,n.s)}_.ib=function(n){n=n.target;const e=this.L;e&&Ge(n)==3?e.l():this.La(n)};_.La=function(n){try{if(n==this.g)e:{const l=Ge(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||di||this.g&&(this.h.h||this.g.fa()||qa(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?xn(3):xn(2)),mr(this);var t=this.g.aa();this.Y=t;t:if(qu(this)){var s=qa(this.g);n="";var r=s.length,i=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vt(this),Sn(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,og(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vs(a)){var u=a;break t}}u=null}if(t=u)Bt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ii(this,t);else{this.i=!1,this.o=3,ve(12),vt(this),Sn(this);break e}}this.P?(ju(this,l,o),di&&this.i&&l==3&&(Ou(this.S,this.T,"tick",this.hb),this.T.start())):(Bt(this.j,this.m,o,null),Ii(this,o)),l==4&&vt(this),this.i&&!this.I&&(l==4?dl(this.l,this):(this.i=!1,rs(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ve(12)):(this.o=0,ve(13)),vt(this),Sn(this)}}}catch{}finally{}};function qu(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function ju(n,e,t){let s=!0,r;for(;!n.I&&n.C<t.length;)if(r=lg(n,t),r==$s){e==4&&(n.o=4,ve(14),s=!1),Bt(n.j,n.m,null,"[Incomplete Response]");break}else if(r==wi){n.o=4,ve(15),Bt(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else Bt(n.j,n.m,r,null),Ii(n,r);qu(n)&&r!=$s&&r!=wi&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ve(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),_o(e),e.K=!0,ve(11))):(Bt(n.j,n.m,t,"[Invalid Chunked Response]"),vt(n),Sn(n))}_.hb=function(){if(this.g){var n=Ge(this.g),e=this.g.fa();this.C<e.length&&(mr(this),ju(this,n,e),this.i&&n!=4&&rs(this))}};function lg(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?$s:(t=Number(e.substring(t,s)),isNaN(t)?wi:(s+=1,s+t>e.length?$s:(e=e.substr(s,t),n.C=s+t,e)))}_.cancel=function(){this.I=!0,vt(this)};function rs(n){n.V=Date.now()+n.O,Hu(n,n.O)}function Hu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ts(de(n.gb,n),e)}function mr(n){n.B&&(A.clearTimeout(n.B),n.B=null)}_.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(ag(this.j,this.A),this.K!=2&&(xn(),ve(17)),vt(this),this.o=2,Sn(this)):Hu(this,this.V-n)};function Sn(n){n.l.G==0||n.I||dl(n.l,n)}function vt(n){mr(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,lo(n.T),Pu(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Ii(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||_i(t.h,n))){if(!n.J&&_i(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Hs(t),wr(t);else break e;Io(t),ve(18)}}else t.Ba=r[1],0<t.Ba-t.T&&37500>r[2]&&t.L&&t.A==0&&!t.v&&(t.v=ts(de(t.cb,t),6e3));if(1>=Ju(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else wt(t,11)}else if((n.J||t.g==n)&&Hs(t),!Vs(e))for(r=t.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const p=n.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(go(i,i.h),i.h=null))}if(s.D){const C=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.za=C,q(s.F,s.D,C))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=ml(s,s.H?s.ka:null,s.V),o.J){Zu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(mr(a),rs(a)),s.g=o}else ll(s);0<t.i.length&&Er(t)}else u[0]!="stop"&&u[0]!="close"||wt(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?wt(t,7):Eo(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}xn(4)}catch{}}function hg(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(or(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function dg(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(or(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function Gu(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(or(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=dg(n),s=hg(n),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}var Ku=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fg(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Tt(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Tt){this.h=e!==void 0?e:n.h,qs(this,n.j),this.s=n.s,this.g=n.g,js(this,n.m),this.l=n.l,e=n.i;var t=new Un;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Va(this,t),this.o=n.o}else n&&(t=String(n).match(Ku))?(this.h=!!e,qs(this,t[1]||"",!0),this.s=In(t[2]||""),this.g=In(t[3]||"",!0),js(this,t[4]),this.l=In(t[5]||"",!0),Va(this,t[6]||"",!0),this.o=In(t[7]||"")):(this.h=!!e,this.i=new Un(null,this.h))}Tt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(_n(e,Ba,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(_n(e,Ba,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(_n(t,t.charAt(0)=="/"?gg:mg,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",_n(t,vg)),n.join("")};function ze(n){return new Tt(n)}function qs(n,e,t){n.j=t?In(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function js(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Va(n,e,t){e instanceof Un?(n.i=e,wg(n.i,n.h)):(t||(e=_n(e,yg)),n.i=new Un(e,n.h))}function q(n,e,t){n.i.set(e,t)}function gr(n){return q(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function In(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function _n(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,pg),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function pg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ba=/[#\/\?@]/g,mg=/[#\?:]/g,gg=/[#\?]/g,yg=/[#\?@]/g,vg=/#/g;function Un(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function dt(n){n.g||(n.g=new Map,n.h=0,n.i&&fg(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}_=Un.prototype;_.add=function(n,e){dt(this),this.i=null,n=ln(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Wu(n,e){dt(n),e=ln(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function zu(n,e){return dt(n),e=ln(n,e),n.g.has(e)}_.forEach=function(n,e){dt(this),this.g.forEach(function(t,s){t.forEach(function(r){n.call(e,r,s,this)},this)},this)};_.oa=function(){dt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const r=n[s];for(let i=0;i<r.length;i++)t.push(e[s])}return t};_.W=function(n){dt(this);let e=[];if(typeof n=="string")zu(this,n)&&(e=e.concat(this.g.get(ln(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};_.set=function(n,e){return dt(this),this.i=null,n=ln(this,n),zu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};_.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Qu(n,e,t){Wu(n,e),0<t.length&&(n.i=null,n.g.set(ln(n,e),no(t)),n.h+=t.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),n.push(r)}}return this.i=n.join("&")};function ln(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function wg(n,e){e&&!n.j&&(dt(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(Wu(this,s),Qu(this,r,t))},n)),n.j=e}var Eg=class{constructor(n,e){this.h=n,this.g=e}};function Xu(n){this.l=n||Ig,A.PerformanceNavigationTiming?(n=A.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(A.g&&A.g.Ga&&A.g.Ga()&&A.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ig=10;function Yu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Ju(n){return n.h?1:n.g?n.g.size:0}function _i(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function go(n,e){n.g?n.g.add(e):n.h=e}function Zu(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Xu.prototype.cancel=function(){if(this.i=el(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function el(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return no(n.i)}function yo(){}yo.prototype.stringify=function(n){return A.JSON.stringify(n,void 0)};yo.prototype.parse=function(n){return A.JSON.parse(n,void 0)};function _g(){this.g=new yo}function Tg(n,e,t){const s=t||"";try{Gu(n,function(r,i){let o=r;Zn(r)&&(o=uo(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function bg(n,e){const t=new hr;if(A.Image){const s=new Image;s.onload=ys(ws,t,s,"TestLoadImage: loaded",!0,e),s.onerror=ys(ws,t,s,"TestLoadImage: error",!1,e),s.onabort=ys(ws,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=ys(ws,t,s,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function ws(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function is(n){this.l=n.ac||null,this.j=n.jb||!1}ce(is,fo);is.prototype.g=function(){return new yr(this.l,this.j)};is.prototype.i=function(n){return function(){return n}}({});function yr(n,e){se.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=vo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ce(yr,se);var vo=0;_=yr.prototype;_.open=function(n,e){if(this.readyState!=vo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Fn(this)};_.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||A).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=vo};_.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tl(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function tl(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}_.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?os(this):Fn(this),this.readyState==3&&tl(this)}};_.Va=function(n){this.g&&(this.response=this.responseText=n,os(this))};_.Ua=function(n){this.g&&(this.response=n,os(this))};_.ga=function(){this.g&&os(this)};function os(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Fn(n)}_.setRequestHeader=function(n,e){this.v.append(n,e)};_.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Fn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(yr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Cg=A.JSON.parse;function G(n){se.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nl,this.K=this.L=!1}ce(G,se);var nl="",Sg=/^https?$/i,kg=["POST","PUT"];_=G.prototype;_.Ka=function(n){this.L=n};_.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vi.g(),this.C=this.u?Fa(this.u):Fa(vi),this.g.onreadystatechange=de(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){$a(this,i);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)t.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())t.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),r=A.FormData&&n instanceof A.FormData,!(0<=vu(kg,e))||s||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{il(this),0<this.B&&((this.K=Ag(this.g))?(this.g.timeout=this.B,this.g.ontimeout=de(this.qa,this)):this.A=ho(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){$a(this,i)}};function Ag(n){return Xt&&Gm()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}_.qa=function(){typeof to<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ae(this,"timeout"),this.abort(8))};function $a(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,sl(n),vr(n)}function sl(n){n.D||(n.D=!0,ae(n,"complete"),ae(n,"error"))}_.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ae(this,"complete"),ae(this,"abort"),vr(this))};_.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vr(this,!0)),G.X.M.call(this)};_.Ha=function(){this.s||(this.F||this.v||this.l?rl(this):this.fb())};_.fb=function(){rl(this)};function rl(n){if(n.h&&typeof to<"u"&&(!n.C[1]||Ge(n)!=4||n.aa()!=2)){if(n.v&&Ge(n)==4)ho(n.Ha,0,n);else if(ae(n,"readystatechange"),Ge(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var r=String(n.H).match(Ku)[1]||null;if(!r&&A.self&&A.self.location){var i=A.self.location.protocol;r=i.substr(0,i.length-1)}s=!Sg.test(r?r.toLowerCase():"")}t=s}if(t)ae(n,"complete"),ae(n,"success");else{n.m=6;try{var o=2<Ge(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",sl(n)}}finally{vr(n)}}}}function vr(n,e){if(n.g){il(n);const t=n.g,s=n.C[0]?Fs:null;n.g=null,n.C=null,e||ae(n,"ready");try{t.onreadystatechange=s}catch{}}}function il(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(A.clearTimeout(n.A),n.A=null)}function Ge(n){return n.g?n.g.readyState:0}_.aa=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}};_.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Cg(e)}};function qa(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case nl:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}_.Ea=function(){return this.m};_.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ol(n){let e="";return ro(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function wo(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=ol(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):q(n,e,t))}function vn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function al(n){this.Ca=0,this.i=[],this.j=new hr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=vn("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=vn("baseRetryDelayMs",5e3,n),this.bb=vn("retryDelaySeedMs",1e4,n),this.$a=vn("forwardChannelMaxRetries",2,n),this.ta=vn("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Xu(n&&n.concurrentRequestLimit),this.Fa=new _g,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}_=al.prototype;_.ma=8;_.G=1;function Eo(n){if(cl(n),n.G==3){var e=n.U++,t=ze(n.F);q(t,"SID",n.I),q(t,"RID",e),q(t,"TYPE","terminate"),as(n,t),e=new ss(n,n.j,e,void 0),e.K=2,e.v=gr(ze(t)),t=!1,A.navigator&&A.navigator.sendBeacon&&(t=A.navigator.sendBeacon(e.v.toString(),"")),!t&&A.Image&&(new Image().src=e.v,t=!0),t||(e.g=gl(e.l,null),e.g.da(e.v)),e.F=Date.now(),rs(e)}pl(n)}function wr(n){n.g&&(_o(n),n.g.cancel(),n.g=null)}function cl(n){wr(n),n.u&&(A.clearTimeout(n.u),n.u=null),Hs(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&A.clearTimeout(n.m),n.m=null)}function Er(n){Yu(n.h)||n.m||(n.m=!0,Ru(n.Ja,n),n.C=0)}function Ng(n,e){return Ju(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=ts(de(n.Ja,n,e),fl(n,n.C)),n.C++,!0)}_.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const r=new ss(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=_u(i),Tu(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=ul(this,r,e),t=ze(this.F),q(t,"RID",n),q(t,"CVER",22),this.D&&q(t,"X-HTTP-Session-Id",this.D),as(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(ol(i)))+"&"+e:this.o&&wo(t,this.o,i)),go(this.h,r),this.Ya&&q(t,"TYPE","init"),this.O?(q(t,"$req",e),q(t,"SID","null"),r.Z=!0,Ei(r,t,null)):Ei(r,t,e),this.G=2}}else this.G==3&&(n?ja(this,n):this.i.length==0||Yu(this.h)||ja(this))};function ja(n,e){var t;e?t=e.m:t=n.U++;const s=ze(n.F);q(s,"SID",n.I),q(s,"RID",t),q(s,"AID",n.T),as(n,s),n.o&&n.s&&wo(s,n.o,n.s),t=new ss(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=ul(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),go(n.h,t),Ei(t,s,e)}function as(n,e){n.ia&&ro(n.ia,function(t,s){q(e,s,t)}),n.l&&Gu({},function(t,s){q(e,s,t)})}function ul(n,e,t){t=Math.min(n.i.length,t);var s=n.l?de(n.l.Ra,n.l,n):null;e:{var r=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Tg(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function ll(n){n.g||n.u||(n.Z=1,Ru(n.Ia,n),n.A=0)}function Io(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=ts(de(n.Ia,n),fl(n,n.A)),n.A++,!0)}_.Ia=function(){if(this.u=null,hl(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=ts(de(this.eb,this),n)}};_.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ve(10),wr(this),hl(this))};function _o(n){n.B!=null&&(A.clearTimeout(n.B),n.B=null)}function hl(n){n.g=new ss(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=ze(n.sa);q(e,"RID","rpc"),q(e,"SID",n.I),q(e,"CI",n.L?"0":"1"),q(e,"AID",n.T),q(e,"TYPE","xmlhttp"),as(n,e),n.o&&n.s&&wo(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=gr(ze(e)),t.s=null,t.P=!0,$u(t,n)}_.cb=function(){this.v!=null&&(this.v=null,wr(this),Io(this),ve(19))};function Hs(n){n.v!=null&&(A.clearTimeout(n.v),n.v=null)}function dl(n,e){var t=null;if(n.g==e){Hs(n),_o(n),n.g=null;var s=2}else if(_i(n.h,e))t=e.D,Zu(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;s=dr(),ae(s,new Uu(s,t)),Er(n)}else ll(n);else if(r=e.o,r==3||r==0&&0<n.pa||!(s==1&&Ng(n,e)||s==2&&Io(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),r){case 1:wt(n,5);break;case 4:wt(n,10);break;case 3:wt(n,6);break;default:wt(n,2)}}}function fl(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function wt(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=de(n.kb,n);t||(t=new Tt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||qs(t,"https"),gr(t)),bg(t.toString(),s)}else ve(2);n.G=0,n.l&&n.l.va(e),pl(n),cl(n)}_.kb=function(n){n?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function pl(n){if(n.G=0,n.la=[],n.l){const e=el(n.h);(e.length!=0||n.i.length!=0)&&(La(n.la,e),La(n.la,n.i),n.h.i.length=0,no(n.i),n.i.length=0),n.l.ua()}}function ml(n,e,t){var s=t instanceof Tt?ze(t):new Tt(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),js(s,s.m);else{var r=A.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Tt(null,void 0);s&&qs(i,s),e&&(i.g=e),r&&js(i,r),t&&(i.l=t),s=i}return t=n.D,e=n.za,t&&e&&q(s,t,e),q(s,"VER",n.ma),as(n,s),s}function gl(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new G(new is({jb:!0})):new G(n.ra),e.Ka(n.H),e}function yl(){}_=yl.prototype;_.xa=function(){};_.wa=function(){};_.va=function(){};_.ua=function(){};_.Ra=function(){};function Gs(){if(Xt&&!(10<=Number(Km)))throw Error("Environmental error: no available transport.")}Gs.prototype.g=function(n,e){return new be(n,e)};function be(n,e){se.call(this),this.g=new al(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Vs(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vs(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new hn(this)}ce(be,se);be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;ve(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=ml(n,null,n.V),Er(n)};be.prototype.close=function(){Eo(this.g)};be.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=uo(n),n=t);e.i.push(new Eg(e.ab++,n)),e.G==3&&Er(e)};be.prototype.M=function(){this.g.l=null,delete this.j,Eo(this.g),delete this.g,be.X.M.call(this)};function vl(n){po.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ce(vl,po);function wl(){mo.call(this),this.status=1}ce(wl,mo);function hn(n){this.g=n}ce(hn,yl);hn.prototype.xa=function(){ae(this.g,"a")};hn.prototype.wa=function(n){ae(this.g,new vl(n))};hn.prototype.va=function(n){ae(this.g,new wl)};hn.prototype.ua=function(){ae(this.g,"b")};Gs.prototype.createWebChannel=Gs.prototype.g;be.prototype.send=be.prototype.u;be.prototype.open=be.prototype.m;be.prototype.close=be.prototype.close;fr.NO_ERROR=0;fr.TIMEOUT=8;fr.HTTP_ERROR=6;Fu.COMPLETE="complete";Vu.EventType=ns;ns.OPEN="a";ns.CLOSE="b";ns.ERROR="c";ns.MESSAGE="d";se.prototype.listen=se.prototype.N;G.prototype.listenOnce=G.prototype.O;G.prototype.getLastError=G.prototype.Oa;G.prototype.getLastErrorCode=G.prototype.Ea;G.prototype.getStatus=G.prototype.aa;G.prototype.getResponseJson=G.prototype.Sa;G.prototype.getResponseText=G.prototype.fa;G.prototype.send=G.prototype.da;G.prototype.setWithCredentials=G.prototype.Ka;var Rg=function(){return new Gs},Dg=function(){return dr()},ei=fr,Lg=Fu,Og=Lt,Ha={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Pg=is,Es=Vu,Mg=G;const Ga="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new $i("@firebase/firestore");function Ka(){return Nt.logLevel}function T(n,...e){if(Nt.logLevel<=x.DEBUG){const t=e.map(To);Nt.debug(`Firestore (${dn}): ${n}`,...t)}}function Qe(n,...e){if(Nt.logLevel<=x.ERROR){const t=e.map(To);Nt.error(`Firestore (${dn}): ${n}`,...t)}}function Ti(n,...e){if(Nt.logLevel<=x.WARN){const t=e.map(To);Nt.warn(`Firestore (${dn}): ${n}`,...t)}}function To(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(n="Unexpected state"){const e=`FIRESTORE (${dn}) INTERNAL ASSERTION FAILED: `+n;throw Qe(e),new Error(e)}function V(n,e){n||k()}function R(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Je{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ue.UNAUTHENTICATED))}shutdown(){}}class Ug{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Fg{constructor(e){this.t=e,this.currentUser=ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new Ke;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ke,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ke)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(V(typeof s.accessToken=="string"),new El(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return V(e===null||typeof e=="string"),new ue(e)}}class Vg{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(V(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Bg{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r}getToken(){return Promise.resolve(new Vg(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $g{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qg{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=i=>{i.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(V(typeof t.token=="string"),this.A=t.token,new $g(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=jg(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function F(n,e){return n<e?-1:n>e?1:0}function Yt(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Y(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.timestamp=e}static fromTimestamp(e){return new N(e)}static min(){return new N(new Y(0,0))}static max(){return new N(new Y(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,s){t===void 0?t=0:t>e.length&&k(),s===void 0?s=e.length-t:s>e.length-t&&k(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Vn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class $ extends Vn{construct(e,t,s){return new $(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new $(t)}static emptyPath(){return new $([])}}const Hg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends Vn{construct(e,t,s){return new he(e,t,s)}static isValidIdentifier(e){return Hg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new he(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(t)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.path=e}static fromPath(e){return new b($.fromString(e))}static fromName(e){return new b($.fromString(e).popFirst(5))}static empty(){return new b($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return $.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new $(e.slice()))}}function Gg(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=N.fromTimestamp(s===1e9?new Y(t+1,0):new Y(t,s));return new ot(r,b.empty(),e)}function Kg(n){return new ot(n.readTime,n.key,-1)}class ot{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ot(N.min(),b.empty(),-1)}static max(){return new ot(N.max(),b.empty(),-1)}}function Wg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=b.comparator(n.documentKey,e.documentKey),t!==0?t:F(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==zg)throw n;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof g?t:g.resolve(t)}catch(t){return g.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):g.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):g.reject(t)}static resolve(e){return new g((t,s)=>{t(e)})}static reject(e){return new g((t,s)=>{s(e)})}static waitFor(e){return new g((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=g.resolve(!1);for(const s of e)t=t.next(r=>r?g.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new g((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,t){return new g((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function us(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}bo.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,t,s,r,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Bn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ot(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function _l(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n){return n==null}function Ks(n){return n===0&&1/n==-1/0}function Yg(n){return typeof n=="number"&&Number.isInteger(n)&&!Ks(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new me(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const Jg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function at(n){if(V(!!n),typeof n=="string"){let e=0;const t=Jg.exec(n);if(V(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Q(n.seconds),nanos:Q(n.nanos)}}function Q(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function bl(n){const e=n.mapValue.fields.__previous_value__;return Tl(e)?bl(e):e}function $n(n){const e=at(n.mapValue.fields.__local_write_time__.timestampValue);return new Y(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Tl(n)?4:Zg(n)?9007199254740991:10:k()}function Ve(n,e){if(n===e)return!0;const t=Rt(n);if(t!==Rt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return $n(n).isEqual($n(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=at(s.timestampValue),o=at(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return Jt(s.bytesValue).isEqual(Jt(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return Q(s.geoPointValue.latitude)===Q(r.geoPointValue.latitude)&&Q(s.geoPointValue.longitude)===Q(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Q(s.integerValue)===Q(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Q(s.doubleValue),o=Q(r.doubleValue);return i===o?Ks(i)===Ks(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Yt(n.arrayValue.values||[],e.arrayValue.values||[],Ve);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Wa(i)!==Wa(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ve(i[a],o[a])))return!1;return!0}(n,e);default:return k()}}function qn(n,e){return(n.values||[]).find(t=>Ve(t,e))!==void 0}function Zt(n,e){if(n===e)return 0;const t=Rt(n),s=Rt(e);if(t!==s)return F(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return F(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Q(r.integerValue||r.doubleValue),a=Q(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return za(n.timestampValue,e.timestampValue);case 4:return za($n(n),$n(e));case 5:return F(n.stringValue,e.stringValue);case 6:return function(r,i){const o=Jt(r),a=Jt(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=F(o[c],a[c]);if(u!==0)return u}return F(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=F(Q(r.latitude),Q(i.latitude));return o!==0?o:F(Q(r.longitude),Q(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Zt(o[c],a[c]);if(u)return u}return F(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Is.mapValue&&i===Is.mapValue)return 0;if(r===Is.mapValue)return 1;if(i===Is.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=F(a[l],u[l]);if(h!==0)return h;const d=Zt(o[a[l]],c[u[l]]);if(d!==0)return d}return F(a.length,u.length)}(n.mapValue,e.mapValue);default:throw k()}}function za(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return F(n,e);const t=at(n),s=at(e),r=F(t.seconds,s.seconds);return r!==0?r:F(t.nanos,s.nanos)}function en(n){return bi(n)}function bi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=at(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Jt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,b.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=bi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${bi(s.fields[a])}`;return i+"}"}(n.mapValue):k();var e,t}function Qa(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ci(n){return!!n&&"integerValue"in n}function Co(n){return!!n&&"arrayValue"in n}function Xa(n){return!!n&&"nullValue"in n}function Ya(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ks(n){return!!n&&"mapValue"in n}function kn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ot(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=kn(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=kn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Zg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t){this.position=e,this.inclusive=t}}function Ja(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=b.comparator(b.fromName(o.referenceValue),t.key):s=Zt(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Za(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ve(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{}class X extends Cl{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new ty(e,t,s):t==="array-contains"?new ry(e,s):t==="in"?new iy(e,s):t==="not-in"?new oy(e,s):t==="array-contains-any"?new ay(e,s):new X(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new ny(e,s):new sy(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Zt(t,this.value)):t!==null&&Rt(this.value)===Rt(t)&&this.matchesComparison(Zt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Re extends Cl{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Re(e,t)}matches(e){return Sl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Sl(n){return n.op==="and"}function kl(n){return ey(n)&&Sl(n)}function ey(n){for(const e of n.filters)if(e instanceof Re)return!1;return!0}function Si(n){if(n instanceof X)return n.field.canonicalString()+n.op.toString()+en(n.value);if(kl(n))return n.filters.map(e=>Si(e)).join(",");{const e=n.filters.map(t=>Si(t)).join(",");return`${n.op}(${e})`}}function Al(n,e){return n instanceof X?function(t,s){return s instanceof X&&t.op===s.op&&t.field.isEqual(s.field)&&Ve(t.value,s.value)}(n,e):n instanceof Re?function(t,s){return s instanceof Re&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((r,i,o)=>r&&Al(i,s.filters[o]),!0):!1}(n,e):void k()}function Nl(n){return n instanceof X?function(e){return`${e.field.canonicalString()} ${e.op} ${en(e.value)}`}(n):n instanceof Re?function(e){return e.op.toString()+" {"+e.getFilters().map(Nl).join(" ,")+"}"}(n):"Filter"}class ty extends X{constructor(e,t,s){super(e,t,s),this.key=b.fromName(s.referenceValue)}matches(e){const t=b.comparator(e.key,this.key);return this.matchesComparison(t)}}class ny extends X{constructor(e,t){super(e,"in",t),this.keys=Rl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sy extends X{constructor(e,t){super(e,"not-in",t),this.keys=Rl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>b.fromName(s.referenceValue))}class ry extends X{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Co(t)&&qn(t.arrayValue,this.value)}}class iy extends X{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qn(this.value.arrayValue,t)}}class oy extends X{constructor(e,t){super(e,"not-in",t)}matches(e){if(qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!qn(this.value.arrayValue,t)}}class ay extends X{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Co(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>qn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t="asc"){this.field=e,this.dir=t}}function cy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.comparator=e,this.root=t||oe.EMPTY}insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,oe.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _s(this.root,e,this.comparator,!1)}getReverseIterator(){return new _s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _s(this.root,e,this.comparator,!0)}}class _s{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class oe{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:oe.RED,this.left=r!=null?r:oe.EMPTY,this.right=i!=null?i:oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new oe(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return oe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const e=this.left.check();if(e!==this.right.check())throw k();return e+(this.isRed()?0:1)}}oe.EMPTY=null,oe.RED=!0,oe.BLACK=!1;oe.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(n,e,t,s,r){return this}insert(n,e,t){return new oe(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ec(this.data.getIterator())}getIteratorFrom(e){return new ec(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof J)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new J(this.comparator);return t.data=e,t}}class ec{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new Te([])}unionWith(e){let t=new J(he.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Te(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yt(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.value=e}static empty(){return new Ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ks(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=kn(t)}setAll(e){let t=he.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=kn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());ks(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ve(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];ks(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Ot(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ie(kn(this.value))}}function Dl(n){const e=[];return Ot(n.fields,(t,s)=>{const r=new he([t]);if(ks(s)){const i=Dl(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Te(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new le(e,0,N.min(),N.min(),N.min(),Ie.empty(),0)}static newFoundDocument(e,t,s,r){return new le(e,1,t,N.min(),s,r,0)}static newNoDocument(e,t){return new le(e,2,t,N.min(),N.min(),Ie.empty(),0)}static newUnknownDocument(e,t){return new le(e,3,t,N.min(),N.min(),Ie.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function tc(n,e=null,t=[],s=[],r=null,i=null,o=null){return new uy(n,e,t,s,r,i,o)}function So(n){const e=R(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Si(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ir(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>en(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>en(s)).join(",")),e.ft=t}return e.ft}function ko(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!cy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Al(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Za(n.startAt,e.startAt)&&Za(n.endAt,e.endAt)}function ki(n){return b.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function ly(n,e,t,s,r,i,o,a){return new fn(n,e,t,s,r,i,o,a)}function _r(n){return new fn(n)}function nc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ao(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Tr(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Ll(n){return n.collectionGroup!==null}function Wt(n){const e=R(n);if(e.dt===null){e.dt=[];const t=Tr(e),s=Ao(e);if(t!==null&&s===null)t.isKeyField()||e.dt.push(new Kt(t)),e.dt.push(new Kt(he.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Kt(he.keyField(),i))}}}return e.dt}function Xe(n){const e=R(n);if(!e._t)if(e.limitType==="F")e._t=tc(e.path,e.collectionGroup,Wt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Wt(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Kt(i.field,o))}const s=e.endAt?new Ws(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ws(e.startAt.position,e.startAt.inclusive):null;e._t=tc(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e._t}function Ai(n,e){e.getFirstInequalityField(),Tr(n);const t=n.filters.concat([e]);return new fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ni(n,e,t){return new fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function br(n,e){return ko(Xe(n),Xe(e))&&n.limitType===e.limitType}function Ol(n){return`${So(Xe(n))}|lt:${n.limitType}`}function Ri(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>Nl(s)).join(", ")}]`),Ir(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>en(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>en(s)).join(",")),`Target(${t})`}(Xe(n))}; limitType=${n.limitType})`}function No(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):b.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of Wt(t))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=Ja(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,Wt(t),s)||t.endAt&&!function(r,i,o){const a=Ja(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,Wt(t),s))}(n,e)}function hy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pl(n){return(e,t)=>{let s=!1;for(const r of Wt(n)){const i=dy(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function dy(n,e,t){const s=n.field.isKeyField()?b.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Zt(a,c):k()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return k()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(n,e){if(n.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ks(e)?"-0":e}}function xl(n){return{integerValue:""+n}}function fy(n,e){return Yg(e)?xl(e):Ml(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this._=void 0}}function py(n,e,t){return n instanceof jn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof tn?Fl(n,e):n instanceof nn?Vl(n,e):function(s,r){const i=Ul(s,r),o=sc(i)+sc(s.gt);return Ci(i)&&Ci(s.gt)?xl(o):Ml(s.yt,o)}(n,e)}function my(n,e,t){return n instanceof tn?Fl(n,e):n instanceof nn?Vl(n,e):t}function Ul(n,e){return n instanceof zs?Ci(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class jn extends Cr{}class tn extends Cr{constructor(e){super(),this.elements=e}}function Fl(n,e){const t=Bl(e);for(const s of n.elements)t.some(r=>Ve(r,s))||t.push(s);return{arrayValue:{values:t}}}class nn extends Cr{constructor(e){super(),this.elements=e}}function Vl(n,e){let t=Bl(e);for(const s of n.elements)t=t.filter(r=>!Ve(r,s));return{arrayValue:{values:t}}}class zs extends Cr{constructor(e,t){super(),this.yt=e,this.gt=t}}function sc(n){return Q(n.integerValue||n.doubleValue)}function Bl(n){return Co(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.field=e,this.transform=t}}function gy(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof tn&&s instanceof tn||t instanceof nn&&s instanceof nn?Yt(t.elements,s.elements,Ve):t instanceof zs&&s instanceof zs?Ve(t.gt,s.gt):t instanceof jn&&s instanceof jn}(n.transform,e.transform)}class yy{constructor(e,t){this.version=e,this.transformResults=t}}class Ne{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function As(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Sr{}function $l(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Do(n.key,Ne.none()):new ls(n.key,n.data,Ne.none());{const t=n.data,s=Ie.empty();let r=new J(he.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ft(n.key,s,new Te(r.toArray()),Ne.none())}}function vy(n,e,t){n instanceof ls?function(s,r,i){const o=s.value.clone(),a=ic(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof ft?function(s,r,i){if(!As(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ic(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ql(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function An(n,e,t,s){return n instanceof ls?function(r,i,o,a){if(!As(r.precondition,i))return o;const c=r.value.clone(),u=oc(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof ft?function(r,i,o,a){if(!As(r.precondition,i))return o;const c=oc(r.fieldTransforms,a,i),u=i.data;return u.setAll(ql(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(n,e,t,s):function(r,i,o){return As(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function wy(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Ul(s.transform,r||null);i!=null&&(t===null&&(t=Ie.empty()),t.set(s.field,i))}return t||null}function rc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&Yt(t,s,(r,i)=>gy(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ls extends Sr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ft extends Sr{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ql(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function ic(n,e,t){const s=new Map;V(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,my(o,a,t[r]))}return s}function oc(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,py(i,o,e))}return s}class Do extends Sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ey extends Sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z,M;function _y(n){switch(n){default:return k();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function jl(n){if(n===void 0)return Qe("GRPC error has no .code"),f.UNKNOWN;switch(n){case z.OK:return f.OK;case z.CANCELLED:return f.CANCELLED;case z.UNKNOWN:return f.UNKNOWN;case z.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case z.INTERNAL:return f.INTERNAL;case z.UNAVAILABLE:return f.UNAVAILABLE;case z.UNAUTHENTICATED:return f.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case z.NOT_FOUND:return f.NOT_FOUND;case z.ALREADY_EXISTS:return f.ALREADY_EXISTS;case z.PERMISSION_DENIED:return f.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case z.ABORTED:return f.ABORTED;case z.OUT_OF_RANGE:return f.OUT_OF_RANGE;case z.UNIMPLEMENTED:return f.UNIMPLEMENTED;case z.DATA_LOSS:return f.DATA_LOSS;default:return k()}}(M=z||(z={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ot(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return _l(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new Z(b.comparator);function Ye(){return Ty}const Hl=new Z(b.comparator);function Tn(...n){let e=Hl;for(const t of n)e=e.insert(t.key,t);return e}function Gl(n){let e=Hl;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Et(){return Nn()}function Kl(){return Nn()}function Nn(){return new pn(n=>n.toString(),(n,e)=>n.isEqual(e))}const by=new Z(b.comparator),Cy=new J(b.comparator);function O(...n){let e=Cy;for(const t of n)e=e.add(t);return e}const Sy=new J(F);function Wl(){return Sy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,hs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new kr(N.min(),r,Wl(),Ye(),O())}}class hs{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new hs(s,t,O(),O(),O())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,s,r){this.It=e,this.removedTargetIds=t,this.key=s,this.Tt=r}}class zl{constructor(e,t){this.targetId=e,this.Et=t}}class Ql{constructor(e,t,s=me.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class ac{constructor(){this.At=0,this.Rt=uc(),this.bt=me.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=O(),t=O(),s=O();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:k()}}),new hs(this.bt,this.Pt,e,t,s)}xt(){this.vt=!1,this.Rt=uc()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ky{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Ye(),this.qt=cc(),this.Ut=new J(F)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const s=this.Wt(t);switch(e.state){case 0:this.zt(t)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),s.Dt(e.resumeToken));break;default:k()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((s,r)=>{this.zt(r)&&t(r)})}Jt(e){const t=e.targetId,s=e.Et.count,r=this.Yt(t);if(r){const i=r.target;if(ki(i))if(s===0){const o=new b(i.path);this.Qt(t,o,le.newNoDocument(o,N.min()))}else V(s===1);else this.Xt(t)!==s&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&ki(a.target)){const c=new b(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,le.newNoDocument(c,e))}i.St&&(t.set(o,i.Ct()),i.xt())}});let s=O();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new kr(e,t,this.Ut,this.Lt,s);return this.Lt=Ye(),this.qt=cc(),this.Ut=new J(F),r}Gt(e,t){if(!this.zt(e))return;const s=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,s),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),s&&(this.Lt=this.Lt.insert(t,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new ac,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new J(F),this.qt=this.qt.insert(e,t)),t}zt(e){const t=this.Yt(e)!==null;return t||T("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new ac),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function cc(){return new Z(b.comparator)}function uc(){return new Z(b.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ny=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ry=(()=>({and:"AND",or:"OR"}))();class Dy{constructor(e,t){this.databaseId=e,this.wt=t}}function Qs(n,e){return n.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xl(n,e){return n.wt?e.toBase64():e.toUint8Array()}function Ly(n,e){return Qs(n,e.toTimestamp())}function Fe(n){return V(!!n),N.fromTimestamp(function(e){const t=at(e);return new Y(t.seconds,t.nanos)}(n))}function Lo(n,e){return function(t){return new $(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Yl(n){const e=$.fromString(n);return V(th(e)),e}function Di(n,e){return Lo(n.databaseId,e.path)}function ti(n,e){const t=Yl(e);if(t.get(1)!==n.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new b(Jl(t))}function Li(n,e){return Lo(n.databaseId,e)}function Oy(n){const e=Yl(n);return e.length===4?$.emptyPath():Jl(e)}function Oi(n){return new $(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jl(n){return V(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function lc(n,e,t){return{name:Di(n,e),fields:t.value.mapValue.fields}}function Py(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:k()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(V(u===void 0||typeof u=="string"),me.fromBase64String(u||"")):(V(u===void 0||u instanceof Uint8Array),me.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:jl(c.code);return new w(u,c.message||"")}(o);t=new Ql(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ti(n,s.document.name),i=Fe(s.document.updateTime),o=s.document.createTime?Fe(s.document.createTime):N.min(),a=new Ie({mapValue:{fields:s.document.fields}}),c=le.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];t=new Ns(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ti(n,s.document),i=s.readTime?Fe(s.readTime):N.min(),o=le.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Ns([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ti(n,s.document),i=s.removedTargetIds||[];t=new Ns([],i,r,null)}else{if(!("filter"in e))return k();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Iy(r),o=s.targetId;t=new zl(o,i)}}return t}function My(n,e){let t;if(e instanceof ls)t={update:lc(n,e.key,e.value)};else if(e instanceof Do)t={delete:Di(n,e.key)};else if(e instanceof ft)t={update:lc(n,e.key,e.data),updateMask:Hy(e.fieldMask)};else{if(!(e instanceof Ey))return k();t={verify:Di(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof jn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof tn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof nn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof zs)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw k()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Ly(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:k()}(n,e.precondition)),t}function xy(n,e){return n&&n.length>0?(V(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?Fe(s.updateTime):Fe(r);return i.isEqual(N.min())&&(i=Fe(r)),new yy(i,s.transformResults||[])}(t,e))):[]}function Uy(n,e){return{documents:[Li(n,e.path)]}}function Fy(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Li(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Li(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return eh(Re.create(c,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ft(l.field),direction:$y(l.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Ir(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Vy(n){let e=Oy(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){V(s===1);const l=t.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(l){const h=Zl(l);return h instanceof Re&&kl(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Kt(Vt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ir(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ws(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ws(d,h)}(t.endAt)),ly(e,r,o,i,a,"F",c,u)}function By(n,e){const t=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return k()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Vt(e.unaryFilter.field);return X.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=Vt(e.unaryFilter.field);return X.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vt(e.unaryFilter.field);return X.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Vt(e.unaryFilter.field);return X.create(i,"!=",{nullValue:"NULL_VALUE"});default:return k()}}(n):n.fieldFilter!==void 0?function(e){return X.create(Vt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Re.create(e.compositeFilter.filters.map(t=>Zl(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return k()}}(e.compositeFilter.op))}(n):k()}function $y(n){return Ay[n]}function qy(n){return Ny[n]}function jy(n){return Ry[n]}function Ft(n){return{fieldPath:n.canonicalString()}}function Vt(n){return he.fromServerFormat(n.fieldPath)}function eh(n){return n instanceof X?function(e){if(e.op==="=="){if(Ya(e.value))return{unaryFilter:{field:Ft(e.field),op:"IS_NAN"}};if(Xa(e.value))return{unaryFilter:{field:Ft(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ya(e.value))return{unaryFilter:{field:Ft(e.field),op:"IS_NOT_NAN"}};if(Xa(e.value))return{unaryFilter:{field:Ft(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ft(e.field),op:qy(e.op),value:e.value}}}(n):n instanceof Re?function(e){const t=e.getFilters().map(s=>eh(s));return t.length===1?t[0]:{compositeFilter:{op:jy(e.op),filters:t}}}(n):k()}function Hy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function th(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&vy(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=An(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=An(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Kl();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=$l(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(N.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),O())}isEqual(e){return this.batchId===e.batchId&&Yt(this.mutations,e.mutations,(t,s)=>rc(t,s))&&Yt(this.baseMutations,e.baseMutations,(t,s)=>rc(t,s))}}class Oo{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){V(e.mutations.length===s.length);let r=by;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Oo(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s,r,i=N.min(),o=N.min(),a=me.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.ie=e}}function zy(n){const e=Vy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ni(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.Je=new Xy}addToCollectionParentIndex(e,t){return this.Je.add(t),g.resolve()}getCollectionParents(e,t){return g.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return g.resolve()}deleteFieldIndex(e,t){return g.resolve()}getDocumentsMatchingTarget(e,t){return g.resolve(null)}getIndexType(e,t){return g.resolve(0)}getFieldIndexes(e,t){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,t){return g.resolve(ot.min())}getMinOffsetFromCollectionGroup(e,t){return g.resolve(ot.min())}updateCollectionGroup(e,t,s){return g.resolve()}updateIndexEntries(e,t){return g.resolve()}}class Xy{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new J($.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new J($.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new sn(0)}static vn(){return new sn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.changes=new pn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?g.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&An(s.mutation,r,Te.empty(),Y.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,O()).next(()=>s))}getLocalViewOfDocuments(e,t,s=O()){const r=Et();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=Tn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=Et();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,O()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=Ye();const o=Nn(),a=Nn();return t.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ft)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),An(l.mutation,u,l.mutation.getFieldMask(),Y.now())):o.set(u.key,Te.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new Jy(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Nn();let r=new Z((o,a)=>o-a),i=O();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=s.get(c)||Te.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||O()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Kl();l.forEach(d=>{if(!i.has(d)){const p=$l(t.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(r){return b.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ll(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):g.resolve(Et());let a=-1,c=i;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,O())).next(l=>({batchId:a,changes:Gl(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new b(t)).next(s=>{let r=Tn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const r=t.collectionGroup;let i=Tn();return this.indexManager.getCollectionParents(e,r).next(o=>g.forEach(o,a=>{const c=function(u,l){return new fn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,le.newInvalidDocument(u)))});let o=Tn();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&An(u.mutation,c,Te.empty(),Y.now()),No(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return g.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:Fe(s.createTime)}),g.resolve()}getNamedQuery(e,t){return g.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(s){return{name:s.name,query:zy(s.bundledQuery),readTime:Fe(s.readTime)}}(t)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.overlays=new Z(b.comparator),this.es=new Map}getOverlay(e,t){return g.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Et();return g.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.oe(e,t,i)}),g.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),g.resolve()}getOverlaysForCollection(e,t,s){const r=Et(),i=t.length+1,o=new b(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return g.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Z((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Et(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Et(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return g.resolve(a)}oe(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ky(t,s));let i=this.es.get(t);i===void 0&&(i=O(),this.es.set(t,i)),this.es.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.ns=new J(ee.ss),this.rs=new J(ee.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const s=new ee(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.cs(new ee(e,t))}hs(e,t){e.forEach(s=>this.removeReference(s,t))}ls(e){const t=new b(new $([])),s=new ee(t,e),r=new ee(t,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new b(new $([])),s=new ee(t,e),r=new ee(t,e+1);let i=O();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new ee(e,0),s=this.ns.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ee{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return b.comparator(e.key,t.key)||F(e._s,t._s)}static os(e,t){return F(e._s,t._s)||b.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new J(ee.ss)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gy(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new ee(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,t){return g.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ps(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ee(t,0),r=new ee(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new J(F);return t.forEach(r=>{const i=new ee(r,0),o=new ee(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),g.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;b.isDocumentKey(i)||(i=i.child(""));const o=new ee(new b(i),0);let a=new J(F);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),g.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){V(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return g.forEach(t.mutations,r=>{const i=new ee(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){const s=new ee(t,0),r=this.gs.firstAfterOrEqual(s);return g.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.Es=e,this.docs=new Z(b.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return g.resolve(s?s.document.mutableCopy():le.newInvalidDocument(t))}getEntries(e,t){let s=Ye();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():le.newInvalidDocument(r))}),g.resolve(s)}getAllFromCollection(e,t,s){let r=Ye();const i=new b(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||Wg(Kg(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(e,t,s,r){k()}As(e,t){return g.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new rv(this)}getSize(e){return g.resolve(this.size)}}class rv extends Yy{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),g.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.persistence=e,this.Rs=new pn(t=>So(t),ko),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Po,this.targetCount=0,this.vs=sn.Pn()}forEachTarget(e,t){return this.Rs.forEach((s,r)=>t(r)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),g.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new sn(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,g.resolve()}updateTargetData(e,t){return this.Dn(t),g.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,t){const s=this.Rs.get(t)||null;return g.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),g.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),g.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ps.ds(t);return g.resolve(s)}containsKey(e,t){return g.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new bo(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new iv(this),this.indexManager=new Qy,this.remoteDocumentCache=function(s){return new sv(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Wy(t),this.Ns=new ev(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new nv(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){T("MemoryPersistence","Starting transaction:",e);const r=new av(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,t){return g.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class av extends Qg{constructor(e){super(),this.currentSequenceNumber=e}}class Mo{constructor(e){this.persistence=e,this.Fs=new Po,this.$s=null}static Bs(e){return new Mo(e)}get Ls(){if(this.$s)return this.$s;throw k()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),g.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),g.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),g.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ls,s=>{const r=b.fromPath(s);return this.qs(e,r).next(i=>{i||t.removeEntry(r,N.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(s=>{s?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return g.or([()=>g.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=r}static Ci(e,t){let s=O(),r=O();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xo(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,s)).next(i=>i||this.Mi(e,t))}ki(e,t){if(nc(t))return g.resolve(null);let s=Xe(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Ni(t,null,"F"),s=Xe(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=O(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(t,a);return this.$i(t,u,o,c.readTime)?this.ki(e,Ni(t,null,"F")):this.Bi(e,u,t,c)}))})))}Oi(e,t,s,r){return nc(t)||r.isEqual(N.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(t,i);return this.$i(t,o,s,r)?this.Mi(e,t):(Ka()<=x.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ri(t)),this.Bi(e,o,t,Gg(r,-1)))})}Fi(e,t){let s=new J(Pl(e));return t.forEach((r,i)=>{No(e,i)&&(s=s.add(i))}),s}$i(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Ka()<=x.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",Ri(t)),this.Ni.getDocumentsMatchingQuery(e,t,ot.min())}Bi(e,t,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,t,s,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new Z(F),this.Ui=new pn(i=>So(i),ko),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zy(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function lv(n,e,t,s){return new uv(n,e,t,s)}async function nh(n,e){const t=R(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Qi(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=O();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function hv(n,e){const t=R(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=g.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(y=>{const C=c.docVersions.get(p);V(C!==null),y.version.compareTo(C)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=O();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function sh(n){const e=R(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function dv(n,e){const t=R(n),s=e.snapshotVersion;let r=t.qi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});r=t.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(me.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(h,p),function(y,C,v){return y.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,l)&&a.push(t.Cs.updateTargetData(i,p))});let c=Ye(),u=O();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(fv(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(N.min())){const l=t.Cs.getLastRemoteSnapshotVersion(i).next(h=>t.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.qi=r,i))}function fv(n,e,t){let s=O(),r=O();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=Ye();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(N.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function pv(n,e){const t=R(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function mv(n,e){const t=R(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Cs.getTargetData(s,e).next(i=>i?(r=i,g.resolve(r)):t.Cs.allocateTargetId(s).next(o=>(r=new bt(e,o,0,s.currentSequenceNumber),t.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.qi=t.qi.insert(s.targetId,s),t.Ui.set(e,s.targetId)),s})}async function Pi(n,e,t){const s=R(n),r=s.qi.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!us(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function hc(n,e,t){const s=R(n);let r=N.min(),i=O();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=R(a),h=l.Ui.get(u);return h!==void 0?g.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Xe(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,t?r:N.min(),t?i:O())).next(a=>(gv(s,hy(e),a),{documents:a,Hi:i})))}function gv(n,e,t){let s=n.Ki.get(e)||N.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ki.set(e,s)}class dc{constructor(){this.activeTargetIds=Wl()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yv{constructor(){this.Lr=new dc,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,s){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new dc,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,r,i){const o=this.ho(e,t);T("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(T("RestConnection","Received: ",c),c),c=>{throw Ti("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,t,s,r,i,o){return this.ao(e,t,s,r,i)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+dn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,t){const s=wv[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,r){return new Promise((i,o)=>{const a=new Mg;a.setWithCredentials(!0),a.listenOnce(Lg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ei.NO_ERROR:const u=a.getResponseJson();T("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ei.TIMEOUT:T("Connection",'RPC "'+e+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case ei.HTTP_ERROR:const l=a.getStatus();if(T("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(y){const C=y.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(C)>=0?C:f.UNKNOWN}(d.status);o(new w(p,d.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{T("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(t,"POST",c,s,15)})}wo(e,t,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Rg(),o=Dg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Pg({})),this.lo(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const c=r.join("");T("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new Ev({Hr:y=>{h?T("Connection","Not sending because WebChannel is closed:",y):(l||(T("Connection","Opening WebChannel transport."),u.open(),l=!0),T("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),p=(y,C,v)=>{y.listen(C,L=>{try{v(L)}catch(D){setTimeout(()=>{throw D},0)}})};return p(u,Es.EventType.OPEN,()=>{h||T("Connection","WebChannel transport opened.")}),p(u,Es.EventType.CLOSE,()=>{h||(h=!0,T("Connection","WebChannel transport closed"),d.io())}),p(u,Es.EventType.ERROR,y=>{h||(h=!0,Ti("Connection","WebChannel transport errored:",y),d.io(new w(f.UNAVAILABLE,"The operation could not be completed")))}),p(u,Es.EventType.MESSAGE,y=>{var C;if(!h){const v=y.data[0];V(!!v);const L=v,D=L.error||((C=L[0])===null||C===void 0?void 0:C.error);if(D){T("Connection","WebChannel received error:",D);const K=D.status;let re=function(_e){const ge=z[_e];if(ge!==void 0)return jl(ge)}(K),j=D.message;re===void 0&&(re=f.INTERNAL,j="Unknown error status: "+K+" with message "+D.message),h=!0,d.io(new w(re,j)),u.close()}else T("Connection","WebChannel received:",v),d.ro(v)}}),p(o,Og.STAT_EVENT,y=>{y.stat===Ha.PROXY?T("Connection","Detected buffering proxy"):y.stat===Ha.NOPROXY&&T("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function ni(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){return new Dy(n,!0)}class rh{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-s);r>0&&T("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new rh(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(Qe(t.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===t&&this.Go(s,r)},s=>{e(()=>{const r=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,t){const s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return T("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _v extends ih{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=Py(this.yt,e),s=function(r){if(!("targetChange"in r))return N.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?N.min():i.readTime?Fe(i.readTime):N.min()}(e);return this.listener.Wo(t,s)}zo(e){const t={};t.database=Oi(this.yt),t.addTarget=function(r,i){let o;const a=i.target;return o=ki(a)?{documents:Uy(r,a)}:{query:Fy(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Xl(r,i.resumeToken):i.snapshotVersion.compareTo(N.min())>0&&(o.readTime=Qs(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=By(this.yt,e);s&&(t.labels=s),this.Bo(t)}Ho(e){const t={};t.database=Oi(this.yt),t.removeTarget=e,this.Bo(t)}}class Tv extends ih{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(V(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=xy(e.writeResults,e.commitTime),s=Fe(e.commitTime);return this.listener.Zo(s,t)}return V(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Oi(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>My(this.yt,s))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(f.UNKNOWN,r.toString())})}_o(e,t,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,t,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Cv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Qe(t),this.ou=!1):T("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Pt(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=R(a);c._u.add(4),await ds(c),c.gu.set("Unknown"),c._u.delete(4),await Nr(c)}(this))})}),this.gu=new Cv(s,r)}}async function Nr(n){if(Pt(n))for(const e of n.wu)await e(!0)}async function ds(n){for(const e of n.wu)await e(!1)}function oh(n,e){const t=R(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),Vo(t)?Fo(t):mn(t).ko()&&Uo(t,e))}function ah(n,e){const t=R(n),s=mn(t);t.du.delete(e),s.ko()&&ch(t,e),t.du.size===0&&(s.ko()?s.Fo():Pt(t)&&t.gu.set("Unknown"))}function Uo(n,e){n.yu.Ot(e.targetId),mn(n).zo(e)}function ch(n,e){n.yu.Ot(e),mn(n).Ho(e)}function Fo(n){n.yu=new ky({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.du.get(e)||null}),mn(n).start(),n.gu.uu()}function Vo(n){return Pt(n)&&!mn(n).No()&&n.du.size>0}function Pt(n){return R(n)._u.size===0}function uh(n){n.yu=void 0}async function kv(n){n.du.forEach((e,t)=>{Uo(n,e)})}async function Av(n,e){uh(n),Vo(n)?(n.gu.hu(e),Fo(n)):n.gu.set("Unknown")}async function Nv(n,e,t){if(n.gu.set("Online"),e instanceof Ql&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(n,e)}catch(s){T("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xs(n,s)}else if(e instanceof Ns?n.yu.Kt(e):e instanceof zl?n.yu.Jt(e):n.yu.jt(e),!t.isEqual(N.min()))try{const s=await sh(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(me.EMPTY_BYTE_STRING,c.snapshotVersion)),ch(r,a);const u=new bt(c.target,a,1,c.sequenceNumber);Uo(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){T("RemoteStore","Failed to raise snapshot:",s),await Xs(n,s)}}async function Xs(n,e,t){if(!us(e))throw e;n._u.add(1),await ds(n),n.gu.set("Offline"),t||(t=()=>sh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await Nr(n)})}function lh(n,e){return e().catch(t=>Xs(n,t,e))}async function Rr(n){const e=R(n),t=ct(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Rv(e);)try{const r=await pv(e.localStore,s);if(r===null){e.fu.length===0&&t.Fo();break}s=r.batchId,Dv(e,r)}catch(r){await Xs(e,r)}hh(e)&&dh(e)}function Rv(n){return Pt(n)&&n.fu.length<10}function Dv(n,e){n.fu.push(e);const t=ct(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function hh(n){return Pt(n)&&!ct(n).No()&&n.fu.length>0}function dh(n){ct(n).start()}async function Lv(n){ct(n).eu()}async function Ov(n){const e=ct(n);for(const t of n.fu)e.Xo(t.mutations)}async function Pv(n,e,t){const s=n.fu.shift(),r=Oo.from(s,e,t);await lh(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Rr(n)}async function Mv(n,e){e&&ct(n).Yo&&await async function(t,s){if(r=s.code,_y(r)&&r!==f.ABORTED){const i=t.fu.shift();ct(t).Mo(),await lh(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Rr(t)}var r}(n,e),hh(n)&&dh(n)}async function pc(n,e){const t=R(n);t.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const s=Pt(t);t._u.add(3),await ds(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await Nr(t)}async function xv(n,e){const t=R(n);e?(t._u.delete(2),await Nr(t)):e||(t._u.add(2),await ds(t),t.gu.set("Unknown"))}function mn(n){return n.pu||(n.pu=function(e,t,s){const r=R(e);return r.su(),new _v(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(n.datastore,n.asyncQueue,{Yr:kv.bind(null,n),Zr:Av.bind(null,n),Wo:Nv.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),Vo(n)?Fo(n):n.gu.set("Unknown")):(await n.pu.stop(),uh(n))})),n.pu}function ct(n){return n.Iu||(n.Iu=function(e,t,s){const r=R(e);return r.su(),new Tv(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(n.datastore,n.asyncQueue,{Yr:Lv.bind(null,n),Zr:Mv.bind(null,n),tu:Ov.bind(null,n),Zo:Pv.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await Rr(n)):(await n.Iu.stop(),n.fu.length>0&&(T("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new Bo(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $o(n,e){if(Qe("AsyncQueue",`${e}: ${n}`),us(n))return new w(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e?(t,s)=>e(t,s)||b.comparator(t.key,s.key):(t,s)=>b.comparator(t.key,s.key),this.keyedMap=Tn(),this.sortedSet=new Z(this.comparator)}static emptySet(e){return new zt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new zt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.Tu=new Z(b.comparator)}track(e){const t=e.doc.key,s=this.Tu.get(t);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(t):e.type===1&&s.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):k():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class rn{constructor(e,t,s,r,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new rn(e,t,zt.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&br(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(){this.Au=void 0,this.listeners=[]}}class Fv{constructor(){this.queries=new pn(e=>Ol(e),br),this.onlineState="Unknown",this.Ru=new Set}}async function qo(n,e){const t=R(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new Uv),r)try{i.Au=await t.onListen(s)}catch(o){const a=$o(o,`Initialization of query '${Ri(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.bu(t.onlineState),i.Au&&e.Pu(i.Au)&&Ho(t)}async function jo(n,e){const t=R(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function Vv(n,e){const t=R(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Ho(t)}function Bv(n,e,t){const s=R(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function Ho(n){n.Ru.forEach(e=>{e.next()})}class Go{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new rn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this.key=e}}class ph{constructor(e){this.key=e}}class $v{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=O(),this.mutatedKeys=O(),this.Gu=Pl(e),this.Qu=new zt(this.Gu)}get ju(){return this.qu}Wu(e,t){const s=t?t.zu:new mc,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),p=No(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),C=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?y!==C&&(s.track({type:3,doc:p}),v=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(c||u)&&(a=!0)),v&&(p?(o=o.add(p),i=C?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return p(h)-p(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new rn(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new mc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.qu=this.qu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qu=this.qu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=O(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new ph(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new fh(s))}),t}tc(e){this.qu=e.Hi,this.Ku=O();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return rn.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class qv{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class jv{constructor(e){this.key=e,this.nc=!1}}class Hv{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new pn(a=>Ol(a),br),this.rc=new Map,this.oc=new Set,this.uc=new Z(b.comparator),this.cc=new Map,this.ac=new Po,this.hc={},this.lc=new Map,this.fc=sn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Gv(n,e){const t=tw(n);let s,r;const i=t.ic.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await mv(t.localStore,Xe(e));t.isPrimaryClient&&oh(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Kv(t,e,s,a==="current",o.resumeToken)}return r}async function Kv(n,e,t,s,r){n._c=(h,d,p)=>async function(y,C,v,L){let D=C.view.Wu(v);D.$i&&(D=await hc(y.localStore,C.query,!1).then(({documents:j})=>C.view.Wu(j,D)));const K=L&&L.targetChanges.get(C.targetId),re=C.view.applyChanges(D,y.isPrimaryClient,K);return yc(y,C.targetId,re.Xu),re.snapshot}(n,h,d,p);const i=await hc(n.localStore,e,!0),o=new $v(e,i.Hi),a=o.Wu(i.documents),c=hs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);yc(n,t,u.Xu);const l=new qv(e,t,o);return n.ic.set(e,l),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),u.snapshot}async function Wv(n,e){const t=R(n),s=t.ic.get(e),r=t.rc.get(s.targetId);if(r.length>1)return t.rc.set(s.targetId,r.filter(i=>!br(i,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Pi(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),ah(t.remoteStore,s.targetId),Mi(t,s.targetId)}).catch(cs)):(Mi(t,s.targetId),await Pi(t.localStore,s.targetId,!0))}async function zv(n,e,t){const s=nw(n);try{const r=await function(i,o){const a=R(i),c=Y.now(),u=o.reduce((d,p)=>d.add(p.key),O());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Ye(),y=O();return a.Gi.getEntries(d,u).next(C=>{p=C,p.forEach((v,L)=>{L.isValidDocument()||(y=y.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(C=>{l=C;const v=[];for(const L of o){const D=wy(L,l.get(L.key).overlayedDocument);D!=null&&v.push(new ft(L.key,D,Dl(D.value.mapValue),Ne.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(C=>{h=C;const v=C.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(d,C.batchId,v)})}).then(()=>({batchId:h.batchId,changes:Gl(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Z(F)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,t),await fs(s,r.changes),await Rr(s.remoteStore)}catch(r){const i=$o(r,"Failed to persist write");t.reject(i)}}async function mh(n,e){const t=R(n);try{const s=await dv(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.cc.get(i);o&&(V(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?V(o.nc):r.removedDocuments.size>0&&(V(o.nc),o.nc=!1))}),await fs(t,s,e)}catch(s){await cs(s)}}function gc(n,e,t){const s=R(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=R(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Ho(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Qv(n,e,t){const s=R(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Z(b.comparator);o=o.insert(i,le.newNoDocument(i,N.min()));const a=O().add(i),c=new kr(N.min(),new Map,new J(F),o,a);await mh(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Ko(s)}else await Pi(s.localStore,e,!1).then(()=>Mi(s,e,t)).catch(cs)}async function Xv(n,e){const t=R(n),s=e.batch.batchId;try{const r=await hv(t.localStore,e);yh(t,s,null),gh(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await fs(t,r)}catch(r){await cs(r)}}async function Yv(n,e,t){const s=R(n);try{const r=await function(i,o){const a=R(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(V(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);yh(s,e,t),gh(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await fs(s,r)}catch(r){await cs(r)}}function gh(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function yh(n,e,t){const s=R(n);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Mi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.rc.get(e))n.ic.delete(s),t&&n.sc.wc(s,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(s=>{n.ac.containsKey(s)||vh(n,s)})}function vh(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(ah(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),Ko(n))}function yc(n,e,t){for(const s of t)s instanceof fh?(n.ac.addReference(s.key,e),Jv(n,s)):s instanceof ph?(T("SyncEngine","Document no longer in limbo: "+s.key),n.ac.removeReference(s.key,e),n.ac.containsKey(s.key)||vh(n,s.key)):k()}function Jv(n,e){const t=e.key,s=t.path.canonicalString();n.uc.get(t)||n.oc.has(s)||(T("SyncEngine","New document in limbo: "+t),n.oc.add(s),Ko(n))}function Ko(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new b($.fromString(e)),s=n.fc.next();n.cc.set(s,new jv(t)),n.uc=n.uc.insert(t,s),oh(n.remoteStore,new bt(Xe(_r(t.path)),s,2,bo.at))}}async function fs(n,e,t){const s=R(n),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,t).then(u=>{if((u||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=xo.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=R(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,h=>g.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>g.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!us(l))throw l;T("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.qi=u.qi.insert(h,y)}}}(s.localStore,i))}async function Zv(n,e){const t=R(n);if(!t.currentUser.isEqual(e)){T("SyncEngine","User change. New user:",e.toKey());const s=await nh(t.localStore,e);t.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,i))})}),r.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await fs(t,s.ji)}}function ew(n,e){const t=R(n),s=t.cc.get(e);if(s&&s.nc)return O().add(s.key);{let r=O();const i=t.rc.get(e);if(!i)return r;for(const o of i){const a=t.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function tw(n){const e=R(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=mh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ew.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qv.bind(null,e),e.sc.Wo=Vv.bind(null,e.eventManager),e.sc.wc=Bv.bind(null,e.eventManager),e}function nw(n){const e=R(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yv.bind(null,e),e}class sw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ar(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return lv(this.persistence,new cv,e.initialUser,this.yt)}yc(e){return new ov(Mo.Bs,this.yt)}gc(e){return new yv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>gc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zv.bind(null,this.syncEngine),await xv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Fv}createDatastore(e){const t=Ar(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Iv(r));var r;return function(i,o,a,c){return new bv(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>gc(this.syncEngine,a,0),o=fc.C()?new fc:new vv,new Sv(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,c,u){const l=new Hv(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=R(e);T("RemoteStore","RemoteStore shutting down."),t._u.add(5),await ds(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(n,e,t){if(!t)throw new w(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function iw(n,e,t,s){if(e===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vc(n){if(!b.isDocumentKey(n))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wc(n){if(b.isDocumentKey(n))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Dr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":k()}function ke(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Dr(n);throw new w(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new Map;class Ic{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,iw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ic({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ic(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new xg;switch(t.type){case"gapi":const s=t.client;return new Bg(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ec.get(e);t&&(T("ComponentProvider","Removing Datastore"),Ec.delete(e),t.terminate())}(this),Promise.resolve()}}function ow(n,e,t,s={}){var r;const i=(n=ke(n,Lr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ti("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ue.MOCK_USER;else{o=ad(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new w(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ue(c)}n._authCredentials=new Ug(new El(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new it(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}}class pt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new pt(this.firestore,e,this._query)}}class it extends pt{constructor(e,t,s){super(e,t,_r(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new b(e))}withConverter(e){return new it(this.firestore,e,this._path)}}function De(n,e,...t){if(n=ne(n),wh("collection","path",e),n instanceof Lr){const s=$.fromString(e,...t);return wc(s),new it(n,null,s)}{if(!(n instanceof we||n instanceof it))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child($.fromString(e,...t));return wc(s),new it(n.firestore,null,s)}}function ut(n,e,...t){if(n=ne(n),arguments.length===1&&(e=Il.R()),wh("doc","path",e),n instanceof Lr){const s=$.fromString(e,...t);return vc(s),new we(n,null,new b(s))}{if(!(n instanceof we||n instanceof it))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child($.fromString(e,...t));return vc(s),new we(n.firestore,n instanceof it?n.converter:null,new b(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Qe("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=ue.UNAUTHENTICATED,this.clientId=Il.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{T("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(T("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=$o(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function cw(n,e){n.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await nh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function uw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await lw(n);T("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>pc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>pc(e.remoteStore,i)),n.onlineComponents=e}async function lw(n){return n.offlineComponents||(T("FirestoreClient","Using default OfflineComponentProvider"),await cw(n,new sw)),n.offlineComponents}async function Eh(n){return n.onlineComponents||(T("FirestoreClient","Using default OnlineComponentProvider"),await uw(n,new rw)),n.onlineComponents}function hw(n){return Eh(n).then(e=>e.syncEngine)}async function Ys(n){const e=await Eh(n),t=e.eventManager;return t.onListen=Gv.bind(null,e.syncEngine),t.onUnlisten=Wv.bind(null,e.syncEngine),t}function dw(n,e,t={}){const s=new Ke;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Wo({next:h=>{i.enqueueAndForget(()=>jo(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new w(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new w(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Go(_r(o.path),u,{includeMetadataChanges:!0,Nu:!0});return qo(r,l)}(await Ys(n),n.asyncQueue,e,t,s)),s.promise}function fw(n,e,t={}){const s=new Ke;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Wo({next:h=>{i.enqueueAndForget(()=>jo(r,l)),h.fromCache&&a.source==="server"?c.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Go(o,u,{includeMetadataChanges:!0,Nu:!0});return qo(r,l)}(await Ys(n),n.asyncQueue,e,t,s)),s.promise}class pw{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new rh(this,"async_queue_retry"),this.Wc=()=>{const t=ni();t&&T("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=ni();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=ni();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new Ke;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!us(e))throw e;T("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Qe("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=Bo.createAndSchedule(this,e,t,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&k()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function _c(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of t)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class lt extends Lr{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new pw,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ih(this),this._firestoreClient.terminate()}}function mw(n,e){const t=typeof n=="object"?n:Uc(),s=typeof n=="string"?n:e||"(default)",r=ji(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=rd("firestore");i&&ow(r,...i)}return r}function Or(n){return n._firestoreClient||Ih(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ih(n){var e;const t=n._freezeSettings(),s=function(r,i,o,a){return new Xg(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new aw(n._authCredentials,n._appCheckCredentials,n._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this._byteString=e}static fromBase64String(e){try{return new on(me.fromBase64String(e))}catch(t){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new on(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=/^__.*__$/;class yw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new ls(e,this.data,t,this.fieldTransforms)}}class _h{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new ft(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Th(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class Mr{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Mr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Js(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Th(this.sa)&&gw.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class vw{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=s||Ar(e)}da(e,t,s,r=!1){return new Mr({sa:e,methodName:t,fa:s,path:he.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Qo(n){const e=n._freezeSettings(),t=Ar(n._databaseId);return new vw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ww(n,e,t,s,r,i={}){const o=n.da(i.merge||i.mergeFields?2:0,e,t,r);Yo("Data must be an object, but it was:",o,s);const a=Ch(s,o);let c,u;if(i.merge)c=new Te(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=xi(e,h,t);if(!o.contains(d))throw new w(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kh(l,d)||l.push(d)}c=new Te(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new yw(new Ie(a),c,u)}class xr extends gn{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xr}}function bh(n,e,t){return new Mr({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class Xo extends gn{_toFieldTransform(e){return new Ro(e.path,new jn)}isEqual(e){return e instanceof Xo}}class Ew extends gn{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=bh(this,e,!0),s=this._a.map(i=>Mt(i,t)),r=new tn(s);return new Ro(e.path,r)}isEqual(e){return this===e}}class Iw extends gn{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=bh(this,e,!0),s=this._a.map(i=>Mt(i,t)),r=new nn(s);return new Ro(e.path,r)}isEqual(e){return this===e}}function _w(n,e,t,s){const r=n.da(1,e,t);Yo("Data must be an object, but it was:",r,s);const i=[],o=Ie.empty();Ot(s,(c,u)=>{const l=Jo(e,c,t);u=ne(u);const h=r.ca(l);if(u instanceof xr)i.push(l);else{const d=Mt(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Te(i);return new _h(o,a,r.fieldTransforms)}function Tw(n,e,t,s,r,i){const o=n.da(1,e,t),a=[xi(e,s,t)],c=[r];if(i.length%2!=0)throw new w(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(xi(e,i[d])),c.push(i[d+1]);const u=[],l=Ie.empty();for(let d=a.length-1;d>=0;--d)if(!kh(u,a[d])){const p=a[d];let y=c[d];y=ne(y);const C=o.ca(p);if(y instanceof xr)u.push(p);else{const v=Mt(y,C);v!=null&&(u.push(p),l.set(p,v))}}const h=new Te(u);return new _h(l,h,o.fieldTransforms)}function bw(n,e,t,s=!1){return Mt(t,n.da(s?4:3,e))}function Mt(n,e){if(Sh(n=ne(n)))return Yo("Unsupported field value:",e,n),Ch(n,e);if(n instanceof gn)return function(t,s){if(!Th(s.sa))throw s.ha(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=Mt(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=ne(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return fy(s.yt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=Y.fromDate(t);return{timestampValue:Qs(s.yt,r)}}if(t instanceof Y){const r=new Y(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Qs(s.yt,r)}}if(t instanceof zo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof on)return{bytesValue:Xl(s.yt,t._byteString)};if(t instanceof we){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Lo(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ha(`Unsupported field value: ${Dr(t)}`)}(n,e)}function Ch(n,e){const t={};return _l(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ot(n,(s,r)=>{const i=Mt(r,e.ra(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Sh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof zo||n instanceof on||n instanceof we||n instanceof gn)}function Yo(n,e,t){if(!Sh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Dr(t);throw s==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+s)}}function xi(n,e,t){if((e=ne(e))instanceof Pr)return e._internalPath;if(typeof e=="string")return Jo(n,e);throw Js("Field path arguments must be of type string or ",n,!1,void 0,t)}const Cw=new RegExp("[~\\*/\\[\\]]");function Jo(n,e,t){if(e.search(Cw)>=0)throw Js(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Pr(...e.split("."))._internalPath}catch{throw Js(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Js(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new w(f.INVALID_ARGUMENT,a+n+c)}function kh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ur("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Sw extends Ah{data(){return super.data()}}function Ur(n,e){return typeof e=="string"?Jo(n,e):e instanceof Pr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zo{}class Rh extends Zo{}function It(n,e,...t){let s=[];e instanceof Zo&&s.push(e),s=s.concat(t),function(r){const i=r.filter(a=>a instanceof ea).length,o=r.filter(a=>a instanceof Fr).length;if(i>1||i>0&&o>0)throw new w(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Fr extends Rh{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Fr(e,t,s)}_apply(e){const t=this._parse(e);return Dh(e._query,t),new pt(e.firestore,e.converter,Ai(e._query,t))}_parse(e){const t=Qo(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new w(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){bc(l,u);const d=[];for(const p of l)d.push(Tc(a,r,p));h={arrayValue:{values:d}}}else h=Tc(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||bc(l,u),h=bw(o,i,l,u==="in"||u==="not-in");return X.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function $t(n,e,t){const s=e,r=Ur("where",n);return Fr._create(r,s,t)}class ea extends Zo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ea(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Dh(i,a),i=Ai(i,a)}(e._query,t),new pt(e.firestore,e.converter,Ai(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ta extends Rh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ta(e,t)}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new w(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new w(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Kt(r,i);return function(a,c){if(Ao(a)===null){const u=Tr(a);u!==null&&Lh(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new pt(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new fn(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function kw(n,e="asc"){const t=e,s=Ur("orderBy",n);return ta._create(s,t)}function Tc(n,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new w(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ll(e)&&t.indexOf("/")!==-1)throw new w(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child($.fromString(t));if(!b.isDocumentKey(s))throw new w(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Qa(n,new b(s))}if(t instanceof we)return Qa(n,t._key);throw new w(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dr(t)}.`)}function bc(n,e){if(!Array.isArray(n)||n.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new w(f.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Dh(n,e){if(e.isInequality()){const s=Tr(n),r=e.field;if(s!==null&&!s.isEqual(r))throw new w(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Ao(n);i!==null&&Lh(n,r,i)}const t=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new w(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new w(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Lh(n,e,t){if(!t.isEqual(e))throw new w(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Aw{convertValue(e,t="none"){switch(Rt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw k()}}convertObject(e,t){const s={};return Ot(e.fields,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new zo(Q(e.latitude),Q(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=bl(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp($n(e));default:return null}}convertTimestamp(e){const t=at(e);return new Y(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=$.fromString(e);V(th(s));const r=new Bn(s.get(1),s.get(3)),i=new b(s.popFirst(5));return r.isEqual(t)||Qe(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Oh extends Ah{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Rs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ur("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Rs extends Oh{data(e={}){return super.data(e)}}class Ph{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new bn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Rs(this._firestore,this._userDataWriter,s.key,s,new bn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Rs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Rs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Rw(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Rw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n){n=ke(n,we);const e=ke(n.firestore,lt);return dw(Or(e),n._key).then(t=>Fh(e,n,t))}class na extends Aw{constructor(e){super(),this.firestore=e}convertBytes(e){return new on(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,t)}}function qt(n){n=ke(n,pt);const e=ke(n.firestore,lt),t=Or(e),s=new na(e);return Nh(n._query),fw(t,n._query).then(r=>new Ph(e,s,n,r))}function tt(n,e,t,...s){n=ke(n,we);const r=ke(n.firestore,lt),i=Qo(r);let o;return o=typeof(e=ne(e))=="string"||e instanceof Pr?Tw(i,"updateDoc",n._key,e,t,s):_w(i,"updateDoc",n._key,e),sa(r,[o.toMutation(n._key,Ne.exists(!0))])}function xh(n){return sa(ke(n.firestore,lt),[new Do(n._key,Ne.none())])}function ps(n,e){const t=ke(n.firestore,lt),s=ut(n),r=Nw(n.converter,e);return sa(t,[ww(Qo(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,Ne.exists(!1))]).then(()=>s)}function Uh(n,...e){var t,s,r;n=ne(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||_c(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(_c(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(n instanceof we)u=ke(n.firestore,lt),l=_r(n._key.path),c={next:h=>{e[o]&&e[o](Fh(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=ke(n,pt);u=ke(h.firestore,lt),l=h._query;const d=new na(u);c={next:p=>{e[o]&&e[o](new Ph(u,d,h,p))},error:e[o+1],complete:e[o+2]},Nh(n._query)}return function(h,d,p,y){const C=new Wo(y),v=new Go(d,C,p);return h.asyncQueue.enqueueAndForget(async()=>qo(await Ys(h),v)),()=>{C.bc(),h.asyncQueue.enqueueAndForget(async()=>jo(await Ys(h),v))}}(Or(u),l,a,c)}function sa(n,e){return function(t,s){const r=new Ke;return t.asyncQueue.enqueueAndForget(async()=>zv(await hw(t),s,r)),r.promise}(Or(n),e)}function Fh(n,e,t){const s=t.docs.get(e._key),r=new na(n);return new Oh(n,r,e._key,s,new bn(t.hasPendingWrites,t.fromCache),e.converter)}function Dw(){return new Xo("serverTimestamp")}function Ui(...n){return new Ew("arrayUnion",n)}function Lw(...n){return new Iw("arrayRemove",n)}(function(n,e=!0){(function(t){dn=t})(Kn),Qt(new Ct("firestore",(t,{instanceIdentifier:s,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new lt(new Fg(t.getProvider("auth-internal")),new qg(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bn(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),rt(Ga,"3.8.1",n),rt(Ga,"3.8.1","esm2017")})();var Ow="firebase",Pw="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt(Ow,Pw,"app");const Vh={apiKey:"AIzaSyDrf3Ubpo-WY6npIeUalNf8xiAo1aE9qCQ",authDomain:"agenda-app-798fb.firebaseapp.com",projectId:"agenda-app-798fb",storageBucket:"agenda-app-798fb.appspot.com",messagingSenderId:"553615681756",appId:"1:553615681756:web:47e52596026a52b6636c19"},Mw=()=>{Hi(Vh)},xw=Hi(Vh),te=mw(xw);function Uw(){const n=De(te,"users"),e=document.getElementById("register__username").value,t=document.getElementById("register__email").value,s=document.getElementById("register__password").value,r=un();dp(r,t,s).then(()=>{localStorage.setItem("emailUser",t),window.location.replace("./dashboard")}).catch(i=>{console.log(i)}),ps(n,{userEmail:t,userName:e,points:0})}function Fw(){const n=document.getElementById("login__email").value,e=document.getElementById("login__password").value,t=un();fp(t,n,e).then(()=>{localStorage.setItem("emailUser",n),window.location.replace("/dashboard")}).catch(s=>{const r=s.message;alert(`An error has occurred, the error is ${r}!`)})}function Vw(){const n=un(),e=new $e;eo(n,e).then(async t=>{const{email:s}=t.user,r=s==null?void 0:s.substring(0,s.indexOf("@"));ou(t)==!0&&await ps(De(te,"users"),{userEmail:s,userName:r,points:0}),localStorage.setItem("emailUser",s),window.location.replace("/dashboard")}).catch(t=>{const s=t.message;alert(`An error has occurred, the error is ${s}!`)})}function Bw(){const n=un(),e=new Be;eo(n,e).then(async t=>{const{email:s}=t.user;localStorage.setItem("emailUser",s),window.location.replace("/dashboard")}).catch(t=>{alert(t.message),console.log(t.message)})}function $w(){const n=un(),e=new qe;eo(n,e).then(async t=>{const{email:s}=t.user,r=s==null?void 0:s.substring(0,s.indexOf("@"));ou(t)==!0&&await ps(De(te,"users"),{userEmail:s,userName:r,points:0}),localStorage.setItem("emailUser",s),window.location.replace("/dashboard")}).catch(t=>{const s=t.message;alert(`An error has occurred, the error is ${s}!`)})}function qw(){const n=un();Ip(n).then(()=>{window.location.replace("/"),localStorage.clear()}).catch(e=>{console.log(e.message)})}class jw extends Dt{constructor(){super({name:"Login",model:{},routerPath:"/"})}render(){const e=document.createElement("div");e.className="bodyLogin";const t=document.createElement("div");t.className="logincontainer",t.appendChild(E.createLogo({innerHTML:'<i class="fa-solid fa-calendar-days"></i>',className:"logo"})),t.appendChild(E.createP({textContent:"Welcome to Plan It!",className:"title"})),t.appendChild(E.createP({className:"login_header",textContent:"Login"})),t.appendChild(E.createInput({id:"login__email",className:"login__email",placeholder:"Email"})),t.appendChild(E.createInput({id:"login__password",className:"login__password",type:"password",placeholder:"Password"})),t.appendChild(E.createBr()),t.appendChild(E.createButton({className:"loginButton",textContent:"LOGIN",onClick:()=>{Fw()}})),t.appendChild(E.createP({className:"orUse",textContent:"OR USE"}));const s=document.createElement("div");return s.className="socialContainer",s.appendChild(E.createSocialMediaButton({innerHTML:'<i class="fab fa-google-plus-g"></i>',className:"google",onClick:()=>{Vw()}})),s.appendChild(E.createSocialMediaButton({innerHTML:'<i class="fab fa-facebook-f"></i>',className:"facebook",onClick:()=>{Bw()}})),s.appendChild(E.createSocialMediaButton({innerHTML:'<i class="fa-brands fa-github"></i>',className:"github",onClick:()=>{$w()}})),t.appendChild(s),t.appendChild(E.createP({className:"NoAccount",textContent:"Don't have an account yet?"})),t.appendChild(E.createButton({className:"MakeAnAccount",textContent:"Make an account",onClick:()=>{window.location.replace("/register")}})),e.appendChild(t),e}}class Hw extends Dt{constructor(){super({name:"register",routerPath:"/register",model:{}})}render(){const e=document.createElement("div");e.className="bodyRegister";const t=document.createElement("div");return t.className="registercontainer",t.appendChild(E.createLogo({innerHTML:'<i class="fa-solid fa-calendar-days"></i>',className:"logo"})),t.appendChild(E.createP({textContent:"Welcome to Plan It!",className:"title"})),t.appendChild(E.createP({className:"register_header",textContent:"Register"})),t.appendChild(E.createInput({id:"register__username",className:"register__username",type:"text",placeholder:"Username"})),t.appendChild(E.createInput({id:"register__email",className:"register__email",type:"text",placeholder:"Email"})),t.appendChild(E.createInput({id:"register__password",className:"register__password",type:"password",placeholder:"Password"})),t.appendChild(E.createBr()),t.appendChild(E.createButton({className:"registerButton",textContent:"REGISTER",onClick:()=>{Uw()}})),t.appendChild(E.createBr()),t.appendChild(E.createButton({className:"RegisterBackBtn",textContent:"Already have an account? Sign in here!",onClick:()=>{window.location.replace("/")}})),e.appendChild(t),e}}function Vr(){const n=document.createElement("header");n.className="headerContainer";const e=document.createElement("div");e.className="menu-wrap";const t=document.createElement("input");t.type="checkbox",t.className="toggler",e.appendChild(t),t.addEventListener("change",()=>{const i=document.querySelector(".subtaskBtn");t.checked?i.style.display="none":i.style.display="block"});const s=document.createElement("div");s.className="hamburger",s.innerHTML="<div></div>",e.appendChild(s);const r=document.createElement("div");return r.className="menu",r.innerHTML=`
    <div>
      <div>
        <ul class="menuList">
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/leaderboard">Leaderboard</a></li>
          <li><a href="/">Logout</a></li>
        </ul>
      </div>
    </div>
  `,e.appendChild(r),n.appendChild(e),n.appendChild(E.createSocialMediaButton({innerHTML:"Plan It!",className:"logoHeader",onClick:()=>{window.location.replace("/dashboard")}})),n.appendChild(E.createSocialMediaButton({innerHTML:'<i class="fa-solid fa-right-from-bracket"></i>',className:"logoutBtn",onClick:()=>{qw()}})),n}function Gw(){const n=localStorage.getItem("taskId")||"",e=ut(te,"projects",n),t=localStorage.getItem("emailUser");tt(e,{joined_members:Ui(t),invited_members:Lw(t)}).then(()=>{window.location.replace("/task")}).catch(s=>{console.log(s)})}class Kw extends Dt{constructor(){super({name:"dashboard",routerPath:"/dashboard",model:{}})}async getId(){const e=localStorage.getItem("emailUser"),t=It(De(te,"users"),$t("userEmail","==",e));(await qt(t)).forEach(r=>{localStorage.setItem("userId",r.id)})}deleteTask(e){const t=ut(te,"projects",e);xh(t).then(()=>{window.location.replace("/dashboard")}).catch(s=>{console.log(s)})}render(){this.getId();const e=document.createElement("main");e.appendChild(Vr()),this.getId();const t=document.createElement("div");t.className="mainDiv";const s=document.createElement("div");s.className="yourProjectsContainer",s.appendChild(E.createP({textContent:"Your project(s)",className:"label"}));const r=document.createElement("div");r.className="yourProjectsInfo";const i=v=>{const L=v.id,D=document.createElement("div");D.className="headerTask";const K=document.createElement("h3");K.className="nameTask";const re=document.createElement("h4"),j=document.createElement("h5"),_e=document.createElement("h4"),ge=document.createElement("div");if(K.innerHTML=` ${v.data().title}`,D.appendChild(K),v.data().checklist===!0){const Ce=localStorage.getItem("userId")||"",ye=ut(te,"users",Ce),Se=JSON.parse(localStorage.getItem("completedTasks")||"{}");Se[L]===!0?console.log("task  completed "):Mh(ye).then(W=>{var Ut;const ie=parseInt((Ut=W.data())==null?void 0:Ut.points)||0,Ee=parseInt(v.data().points);console.log(ie,Ee),tt(ye,{points:ie+Ee}),Se[L]=!0,localStorage.setItem("completedTasks",JSON.stringify(Se))});const Le=document.createElement("p");Le.className="icon",Le.innerHTML='<i class="fa-regular fa-circle-check"></i>',D.appendChild(Le)}if(ge.appendChild(D),re.innerHTML=`Deadline: ${v.data().deadline}`,ge.appendChild(re),_e.innerHTML=`${v.data().points} points`,ge.appendChild(_e),v.data().createdBy===localStorage.getItem("emailUser")){j.innerHTML="Created by: You";const Ce=document.createElement("button");Ce.className="deleteTask",Ce.innerHTML="Delete task",Ce.addEventListener("click",ye=>{ye==null||ye.stopPropagation(),this.deleteTask(L)}),j.appendChild(Ce)}else j.innerHTML=`Created by: ${v.data().createdBy}`;return ge.appendChild(j),ge},o=localStorage.getItem("emailUser"),a=De(te,"projects"),c=It(a,$t("createdBy","==",o));qt(c).then(v=>{v.docs.forEach(L=>{r.appendChild(E.createButtonSecondary({className:"taskInfo",onClick:()=>{localStorage.setItem("taskId",L.id),window.location.replace("/task")},children:[i(L)]}))})}).catch(v=>{console.log(v.message)}),s.appendChild(r),t.appendChild(s);const u=document.createElement("div");u.className="joinedContainer",u.appendChild(E.createP({textContent:"Joined project(s)",className:"label"}));const l=document.createElement("div");l.className="joinedInfo";const h=It(a,$t("joined_members","array-contains",o));qt(h).then(v=>{v.docs.forEach(L=>{l.appendChild(E.createButtonSecondary({className:"taskInfo",onClick:()=>{localStorage.setItem("taskId",L.id),window.location.replace("/task")},children:[i(L)]}))})}).catch(v=>{console.log(v.message)}),u.appendChild(l),t.appendChild(u);const d=document.createElement("div");d.className="invitedContainer",d.appendChild(E.createP({textContent:"Invited project(s)",className:"label"}));const p=document.createElement("div");p.className="invitedInfo";const y=It(a,$t("invited_members","array-contains",o));qt(y).then(v=>{v.docs.forEach(L=>{p.appendChild(E.createButtonSecondary({className:"taskInfo",onClick:()=>{localStorage.setItem("taskId",L.id),Gw()},children:[i(L)]}))})}).catch(v=>{console.log(v.message)}),d.appendChild(p),t.appendChild(d),e.appendChild(t);const C=document.createElement("div");return C.className="divCreateTask",C.appendChild(E.createButton({textContent:"Create new task",className:"createTaskBtn",onClick:()=>{window.location.replace("./create-task")}})),e.appendChild(C),e}}function Ww(){const n=De(te,"projects"),e=document.getElementById("titleTask").value,t=document.getElementById("calender").value,s=document.getElementById("totalPoints").value,r=localStorage.getItem("emailUser"),i=document.getElementsByName("checkbox"),o=[];for(let a=0;a<i.length;a++)i[a].checked&&o.push(i[a].value);e!==""&&t!==""&&s!==""?ps(n,{title:e,deadline:t,createdAt:Dw(),createdBy:r,invited_members:o,joined_members:"",questions:"",checklist:!1,timer:0,points:s}).then(()=>{window.location.replace("/dashboard")}).catch(a=>{alert(a.message)}):alert("Please fill in all fields!")}class zw extends Dt{constructor(){super({name:"create-task",routerPath:"/create-task",model:{}})}render(){const e=document.createElement("div");e.appendChild(Vr());const t=document.createElement("div");t.className="createTaskContainer",t.appendChild(E.createP({textContent:"Create task here!",className:"CreateTaskText"})),t.appendChild(E.createP({textContent:"Title task",className:"label"})),t.appendChild(E.createInput({className:"titleTask",id:"titleTask",placeholder:"Title task",required:!0})),t.appendChild(E.createP({textContent:"Deadline",className:"label"})),t.appendChild(E.createCalendar({className:"calendar",id:"calender",type:"date",min:"2023-01-01",max:"2025-12-31",required:!0})),t.appendChild(E.createP({textContent:"Total points",className:"label"})),t.appendChild(E.createInput({className:"totalPoints",id:"totalPoints",type:"number",placeholder:"Give a number",required:!0})),t.appendChild(E.createP({textContent:"Invite people",className:"label"})),(async()=>{try{const i=localStorage.getItem("emailUser");(await qt(De(te,"users"))).forEach(a=>{if(a.data().userEmail!==i){const c=document.createElement("div");c.className="usercontainer",c.appendChild(E.createInput({type:"checkbox",className:"checkbox",id:"checkbox",name:"checkbox",value:a.data().userEmail})),c.appendChild(E.createP({textContent:a.data().userEmail,type:"checkbox"})),t.appendChild(c)}})}catch{console.log("error loading members")}})(),e.appendChild(t);const r=document.createElement("div");return r.className="divCreateTask",r.appendChild(E.createButton({textContent:"Create task",className:"createTaskBtn",onClick:()=>{Ww()}})),e.appendChild(r),e}}function Qw(){var s;const n=De(te,"subtasks"),e=localStorage.getItem("taskId")||"",t=(s=document.getElementById("subtaskName"))==null?void 0:s.value;t!==""?ps(n,{task:e,title:t,description:"",deadline:"",completed:!1,questions:[],totalTime:0}).then(()=>{}).catch(r=>{alert(r.message)}):alert("Please give a name to your subtask!")}function Xw(){var h,d,p;const n=localStorage.getItem("subtaskId")||"",e=ut(te,"subtasks",n),t=(h=document.getElementById("inputField"))==null?void 0:h.value,s=(d=document.getElementById("deadline"))==null?void 0:d.value,r=localStorage.getItem("timer"),i=(p=document.getElementById("questions"))==null?void 0:p.value,o=localStorage.getItem("emailUser")||"",a=new Date,c={questionInput:i,createdBy:o,createdAt:a},u=document.querySelector("#completed"),l=u==null?void 0:u.checked;t===void 0&&i!==""?tt(e,{deadline:s,totalTime:r,questions:Ui(c),completed:l}).then(()=>{alert("Subtask updated"),window.location.reload()}).catch(y=>{console.log(y)}):t===void 0&&i===""?tt(e,{deadline:s,totalTime:r,completed:l}).then(()=>{alert("Subtask updated"),window.location.reload()}).catch(y=>{console.log(y)}):t!==void 0&&i===""?tt(e,{description:t,deadline:s,totalTime:r,completed:l}).then(()=>{alert("Subtask updated"),window.location.reload()}).catch(y=>{console.log(y)}):tt(e,{description:t,deadline:s,totalTime:r,questions:Ui(c),completed:l}).then(()=>{alert("Subtask updated"),window.location.reload()}).catch(y=>{console.log(y)})}function Yw(n){const e=ut(te,"subtasks",n);xh(e).then(()=>{window.location.replace("/task")}).catch(t=>{console.log(t)})}function Jw(){const n=localStorage.getItem("taskId")||"",e=De(te,"subtasks"),t=ut(te,"projects",n);let s=0,r=0;const i=It(e,$t("task","==",n));Uh(i,o=>{r=o.size,o.forEach(c=>{c.data().completed===!0&&s++});const a=document.getElementById("subtask-display");a.innerHTML=`${s} / ${r}`,s===r?tt(t,{checklist:!0}).then(()=>{}).catch(c=>{console.log(c)}):tt(t,{checklist:!1}).then(()=>{}).catch(c=>{console.log(c)})})}class Zw extends Dt{constructor(){super({name:"task",routerPath:"/task",model:{}})}clearInput(){const e=document.getElementById("subtaskName")||null;(e==null?void 0:e.value)!==""&&(e.value="")}render(){Jw();const e=document.createElement("main");e.appendChild(Vr());const t=document.createElement("div");t.className="taskcontainer";const s=localStorage.getItem("taskId")||"",r=ut(te,"projects",s);Mh(r).then(h=>{var d;t.appendChild(E.createP({className:"taskTitle",textContent:(d=h.data())==null?void 0:d.title}))}).catch(h=>{console.log(h.message)}),e.appendChild(t);const i=document.createElement("div");i.className="createSubTaskcontainer",i.appendChild(E.createInput({className:"subtaskName",id:"subtaskName",placeholder:"subtask name ..."})),i.appendChild(E.createButton({className:"Add",textContent:"Add",onClick:()=>{Qw(),this.clearInput()}})),e.appendChild(i);const o=document.createElement("div");o.appendChild(E.createP({textContent:"Click on a subtask for more info",className:"label"})),o.appendChild(E.createP({textContent:"COMPLETION",className:"completion"})),o.appendChild(E.createP({className:"subtask-display",id:"subtask-display"})),e.appendChild(o);const a=document.createElement("div");a.className="showSubtaskContainer";const c=h=>{var C;const d=h.id;h=h.data();const p=document.createElement("button");p.setAttribute("id","myBtn"),p.className="subtaskBtn",p.innerHTML=h.title,h.completed===!0&&(p.style.backgroundColor="rgb(97 234 97)");const y=document.createElement("p");return y.className="deleteBtn",y.innerHTML="X",y.addEventListener("click",v=>{v==null||v.stopPropagation(),Yw(d)}),p.appendChild(y),p.addEventListener("click",()=>{localStorage.setItem("subtaskId",d),localStorage.setItem("subtaskTitle",h.title);const v=document.createElement("div");v.setAttribute("id","myModal"),v.className="modal";const L=document.createElement("div");L.className="modal-content",L.appendChild(E.createP({className:"close",textContent:"X"})),L.appendChild(E.createP({className:"modal-title",textContent:h.title}));const D=document.createElement("div");D.className="modal-form",D.appendChild(E.createP({className:"modal-label",textContent:"Description:"}));const K=document.createElement("div");if(h.description){const W=document.createElement("p");W.className="modal-input-description",W.setAttribute("id","description"),W.textContent=h.description,K.appendChild(W);const ie=document.createElement("button");ie.className="editButton",ie.innerHTML="Edit",ie.addEventListener("click",()=>{const Ee=document.createElement("textarea");Ee.value=W.textContent,Ee.className="modal-input-description",Ee.setAttribute("id","inputField"),K.replaceChild(Ee,W),ie.style.display="none"}),K.appendChild(ie)}else{const W=document.createElement("textarea");W.value="",W.setAttribute("id","inputField"),W.className="modal-input-description",K.appendChild(W)}D.appendChild(K),D.appendChild(E.createP({className:"modal-label",textContent:"Deadline:"})),D.appendChild(E.createInput({className:"modal-input",id:"deadline",type:"date",value:h.deadline}));let re,j=+h.totalTime;const _e=Math.floor(j/3600),ge=Math.floor(j%3600/60),Ce=j%60,ye=E.createP({className:"modal-label",textContent:`Timer: ${_e.toString().padStart(2,"0")}:${ge.toString().padStart(2,"0")}:${Ce.toString().padStart(2,"0")}`,id:"timer"}),Se=E.createButton({className:"start-button",textContent:"Start",id:"start-button",type:"button",onClick:()=>{Se.textContent==="Start"?(re=setInterval(()=>{j+=1;const W=Math.floor(j/3600),ie=Math.floor(j%3600/60),Ee=j%60;ye.textContent=`Timer: ${W.toString().padStart(2,"0")}:${ie.toString().padStart(2,"0")}:${Ee.toString().padStart(2,"0")}`},1e3),Se.textContent="Stop"):(clearInterval(re),Se.textContent="Start",localStorage.setItem("timer",j))}});if(D.appendChild(ye),D.appendChild(Se),D.appendChild(E.createP({className:"modal-label",textContent:"Questions:"})),D.appendChild(E.createTextarea({className:"modal-input-questions",id:"questions",value:""})),h.questions&&h.questions.length>0){let W=1;h.questions.forEach(ie=>{const Ee=document.createElement("div"),Ut=ie.createdAt.toDate().toLocaleString();Ee.innerHTML=`<p class='modal-label'>Question ${W}:</p>
             <p class='textQuestion'>${ie.questionInput}</p>
           
             <p class="infoQuestion">By: ${ie.createdBy}, ${Ut}</p>`,D.appendChild(Ee),W++})}D.appendChild(E.createP({className:"modal-label",textContent:"Check if completed:"})),D.appendChild(E.createInput({className:"modal-input",id:"completed",type:"checkbox",checked:h.completed})),D.appendChild(E.createButton({className:"modal-button",id:"save-button",textContent:"save",onClick:()=>{Xw()}})),L.appendChild(D),v.appendChild(L),document.body.appendChild(v);const Le=v.querySelector(".close");Le==null||Le.addEventListener("click",()=>{v.style.display="none"}),v.style.display="block"}),(C=document.getElementById("showSubtask"))==null||C.appendChild(p),p},u=De(te,"subtasks"),l=It(u,$t("task","==",s));return Uh(l,h=>{h.docChanges().map(d=>{d.type==="added"&&a.appendChild(E.createContainer({className:"showSubtask",id:"showSubtask",children:[c(d.doc)]}))})}),e.appendChild(a),e}}class eE extends Dt{constructor(){super({name:"leaderboard",routerPath:"/leaderboard",model:{}})}render(){const e=document.createElement("main");e.appendChild(Vr());const t=document.createElement("div");t.className="leaderboardContainer",t.appendChild(E.createLogo({innerHTML:'<i class="fa-solid fa-ranking-star"></i>',className:"podium"}));let s=1;const r=De(te,"users"),i=It(r,kw("points","desc"));return qt(i).then(o=>{o.forEach(a=>{const c=document.createElement("div");c.className="memberDiv";const u=document.createElement("p");u.className="position",u.textContent=`${s}`;const l=document.createElement("p");l.className="memberEmail",l.textContent=a.data().userEmail;const h=document.createElement("p");h.className="memberPoints",h.textContent=`${a.data().points} points`,c.appendChild(u),c.appendChild(l),c.appendChild(h),t.appendChild(c),s++})}),e.appendChild(t),e}}var tE=/([:*])(\w+)/g,nE="([^/]+)",sE=/\*/g,rE="?(?:.*)",iE=/\/\?/g,oE="/?([^/]+|)",aE="(?:/^|^)",cE="";function Bh(n){return n===void 0&&(n="/"),ia()?location.pathname+location.search+location.hash:n}function H(n){return n.replace(/\/+$/,"").replace(/^\/+/,"")}function Zs(n){return typeof n=="string"}function uE(n){return typeof n=="function"}function er(n){return n&&n.indexOf("#")>=0&&n.split("#").pop()||""}function lE(n,e){return e.length===0||!n?null:n.slice(1,n.length).reduce(function(t,s,r){return t===null&&(t={}),t[e[r]]=decodeURIComponent(s),t},null)}function tr(n){var e=H(n).split(/\?(.*)?$/);return[H(e[0]),e.slice(1).join("")]}function ra(n){for(var e={},t=n.split("&"),s=0;s<t.length;s++){var r=t[s].split("=");if(r[0]!==""){var i=decodeURIComponent(r[0]);e[i]?(Array.isArray(e[i])||(e[i]=[e[i]]),e[i].push(decodeURIComponent(r[1]||""))):e[i]=decodeURIComponent(r[1]||"")}}return e}function $h(n,e){var t=tr(H(n.currentLocationPath)),s=t[0],r=t[1],i=r===""?null:ra(r),o=[],a;if(Zs(e.path)){if(a=aE+H(e.path).replace(tE,function(h,d,p){return o.push(p),nE}).replace(sE,rE).replace(iE,oE)+"$",H(e.path)===""&&H(s)==="")return{url:s,queryString:r,hashString:er(n.to),route:e,data:null,params:i}}else a=e.path;var c=new RegExp(a,cE),u=s.match(c);if(u){var l=Zs(e.path)?lE(u,o):u.groups?u.groups:u.slice(1);return{url:H(s.replace(new RegExp("^"+n.instance.root),"")),queryString:r,hashString:er(n.to),route:e,data:l,params:i}}return!1}function qh(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function xt(n,e){return typeof n[e]>"u"||n[e]===!0}function hE(n){if(!n)return{};var e=n.split(","),t={},s;return e.forEach(function(r){var i=r.split(":").map(function(o){return o.replace(/(^ +| +$)/g,"")});switch(i[0]){case"historyAPIMethod":t.historyAPIMethod=i[1];break;case"resolveOptionsStrategy":s||(s={}),s.strategy=i[1];break;case"resolveOptionsHash":s||(s={}),s.hash=i[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":t[i[0]]=i[1]==="true";break}}),s&&(t.resolveOptions=s),t}function ia(){return typeof window<"u"}function dE(n,e){return n===void 0&&(n=[]),e===void 0&&(e={}),n.filter(function(t){return t}).forEach(function(t){["before","after","already","leave"].forEach(function(s){t[s]&&(e[s]||(e[s]=[]),e[s].push(t[s]))})}),e}function Me(n,e,t){var s=e||{},r=0;(function i(){if(!n[r]){t&&t(s);return}Array.isArray(n[r])?(n.splice.apply(n,[r,1].concat(n[r][0](s)?n[r][1]:n[r][2])),i()):n[r](s,function(o){typeof o>"u"||o===!0?(r+=1,i()):t&&t(s)})})()}Me.if=function(n,e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),[n,e,t]};function Cc(n,e){typeof n.currentLocationPath>"u"&&(n.currentLocationPath=n.to=Bh(n.instance.root)),n.currentLocationPath=n.instance._checkForAHash(n.currentLocationPath),e()}function si(n,e){for(var t=0;t<n.instance.routes.length;t++){var s=n.instance.routes[t],r=$h(n,s);if(r&&(n.matches||(n.matches=[]),n.matches.push(r),n.resolveOptions.strategy==="ONE")){e();return}}e()}function fE(n,e){n.navigateOptions&&(typeof n.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof n.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function pE(n,e){n.navigateOptions.force===!0?(n.instance._setCurrent([n.instance._pathToMatchObject(n.to)]),e(!1)):e()}var Sc=ia(),mE=qh();function gE(n,e){if(xt(n.navigateOptions,"updateBrowserURL")){var t=("/"+n.to).replace(/\/\//g,"/"),s=Sc&&n.resolveOptions&&n.resolveOptions.hash===!0;mE?(history[n.navigateOptions.historyAPIMethod||"pushState"](n.navigateOptions.stateObj||{},n.navigateOptions.title||"",s?"#"+t:t),location&&location.hash&&(n.instance.__freezeListening=!0,setTimeout(function(){if(!s){var r=location.hash;location.hash="",location.hash=r}n.instance.__freezeListening=!1},1))):Sc&&(window.location.href=n.to)}e()}function jh(n,e){var t=n.instance;if(!t.lastResolved()){e();return}Me(t.lastResolved().map(function(s){return function(r,i){if(!s.route.hooks||!s.route.hooks.leave){i();return}var o=!1,a=n.instance.matchLocation(s.route.path,n.currentLocationPath,!1);if(s.route.path!=="*")o=!a;else{var c=n.matches?n.matches.find(function(u){return s.route.path===u.route.path}):!1;o=!c}if(xt(n.navigateOptions,"callHooks")&&o){Me(s.route.hooks.leave.map(function(u){return function(l,h){return u(function(d){d===!1?n.instance.__markAsClean(n):h()},n.matches&&n.matches.length>0?n.matches.length===1?n.matches[0]:n.matches:void 0)}}).concat([function(){return i()}]));return}else i()}}),{},function(){return e()})}function yE(n,e){n.match.route.hooks&&n.match.route.hooks.before&&xt(n.navigateOptions,"callHooks")?Me(n.match.route.hooks.before.map(function(t){return function(r,i){return t(function(o){o===!1?n.instance.__markAsClean(n):i()},n.match)}}).concat([function(){return e()}])):e()}function vE(n,e){xt(n.navigateOptions,"callHandler")&&n.match.route.handler(n.match),n.instance.updatePageLinks(),e()}function wE(n,e){n.match.route.hooks&&n.match.route.hooks.after&&xt(n.navigateOptions,"callHooks")&&n.match.route.hooks.after.forEach(function(t){return t(n.match)}),e()}function EE(n,e){var t=n.instance.lastResolved();if(t&&t[0]&&t[0].route===n.match.route&&t[0].url===n.match.url&&t[0].queryString===n.match.queryString){t.forEach(function(s){s.route.hooks&&s.route.hooks.already&&xt(n.navigateOptions,"callHooks")&&s.route.hooks.already.forEach(function(r){return r(n.match)})}),e(!1);return}e()}function IE(n,e){var t=n.instance._notFoundRoute;if(t){n.notFoundHandled=!0;var s=tr(n.currentLocationPath),r=s[0],i=s[1],o=er(n.to);t.path=H(r);var a={url:t.path,queryString:i,hashString:o,data:null,route:t,params:i!==""?ra(i):null};n.matches=[a],n.match=a}e()}function _E(n,e){(!n.resolveOptions||n.resolveOptions.noMatchWarning===!1||typeof n.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+n.currentLocationPath+`" didn't match any of the registered routes.`),e()}function TE(n,e){n.instance._setCurrent(null),e()}function Hh(n,e){xt(n.navigateOptions,"updateState")&&n.instance._setCurrent(n.matches),e()}var Gh=[EE,yE,vE,wE],kc=[jh,IE,Me.if(function(n){var e=n.notFoundHandled;return e},Gh.concat([Hh]),[_E,TE])];function Fi(){return Fi=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},Fi.apply(this,arguments)}function Ac(n,e){var t=0;function s(){if(t===n.matches.length){Hh(n,e);return}Me(Gh,Fi({},n,{match:n.matches[t]}),function(){t+=1,s()})}jh(n,s)}function ri(n){n.instance.__markAsClean(n)}function Vi(){return Vi=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},Vi.apply(this,arguments)}var Nc="[data-navigo]";function bE(n,e){var t=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Nc},s=this,r="/",i=null,o=[],a=!1,c,u=qh(),l=ia();n?r=H(n):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function h(m){return m.indexOf("#")>=0&&(t.hash===!0?m=m.split("#")[1]||"/":m=m.split("#")[0]),m}function d(m){return H(r+"/"+H(m))}function p(m,I,P,B){return m=Zs(m)?d(m):m,{name:B||H(String(m)),path:m,handler:I,hooks:dE(P)}}function y(m,I,P){var B=this;return typeof m=="object"&&!(m instanceof RegExp)?(Object.keys(m).forEach(function(U){if(typeof m[U]=="function")B.on(U,m[U]);else{var Oe=m[U],yn=Oe.uses,zh=Oe.as,Qh=Oe.hooks;o.push(p(U,yn,[c,Qh],zh))}}),this):(typeof m=="function"&&(P=I,I=m,m=r),o.push(p(m,I,[c,P])),this)}function C(m,I){if(s.__dirty){s.__waiting.push(function(){return s.resolve(m,I)});return}else s.__dirty=!0;m=m?H(r)+"/"+H(m):void 0;var P={instance:s,to:m,currentLocationPath:m,navigateOptions:{},resolveOptions:Vi({},t,I)};return Me([Cc,si,Me.if(function(B){var U=B.matches;return U&&U.length>0},Ac,kc)],P,ri),P.matches?P.matches:!1}function v(m,I){if(s.__dirty){s.__waiting.push(function(){return s.navigate(m,I)});return}else s.__dirty=!0;m=H(r)+"/"+H(m);var P={instance:s,to:m,navigateOptions:I||{},resolveOptions:I&&I.resolveOptions?I.resolveOptions:t,currentLocationPath:h(m)};Me([fE,pE,si,Me.if(function(B){var U=B.matches;return U&&U.length>0},Ac,kc),gE,ri],P,ri)}function L(m,I,P){var B=Le(m,I);return B!==null?(v(B.replace(new RegExp("^/?"+r),""),P),!0):!1}function D(m){return this.routes=o=o.filter(function(I){return Zs(m)?H(I.path)!==H(m):uE(m)?m!==I.handler:String(I.path)!==String(m)}),this}function K(){u&&(this.__popstateListener=function(){s.__freezeListening||C()},window.addEventListener("popstate",this.__popstateListener))}function re(){this.routes=o=[],u&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=a=!0}function j(m,I){return s._notFoundRoute=p("*",m,[c,I],"__NOT_FOUND__"),this}function _e(){if(!!l)return ge().forEach(function(m){if(m.getAttribute("data-navigo")==="false"||m.getAttribute("target")==="_blank"){m.hasListenerAttached&&m.removeEventListener("click",m.navigoHandler);return}m.hasListenerAttached||(m.hasListenerAttached=!0,m.navigoHandler=function(I){if((I.ctrlKey||I.metaKey)&&I.target.tagName.toLowerCase()==="a")return!1;var P=m.getAttribute("href");if(typeof P>"u"||P===null)return!1;if(P.match(/^(http|https)/)&&typeof URL<"u")try{var B=new URL(P);P=B.pathname+B.search}catch{}var U=hE(m.getAttribute("data-navigo-options"));a||(I.preventDefault(),I.stopPropagation(),s.navigate(H(P),U))},m.addEventListener("click",m.navigoHandler))}),s}function ge(){return l?[].slice.call(document.querySelectorAll(t.linksSelector||Nc)):[]}function Ce(m){return"/"+r+"/"+H(m)}function ye(m){return c=m,this}function Se(){return i}function Le(m,I,P){var B=o.find(function(yn){return yn.name===m}),U=null;if(B){if(U=B.path,I)for(var Oe in I)U=U.replace(":"+Oe,I[Oe]);U=U.match(/^\//)?U:"/"+U}return U&&P&&!P.includeRoot&&(U=U.replace(new RegExp("^/"+r),"")),U}function W(m){return m.getAttribute("href")}function ie(m){var I=tr(H(m)),P=I[0],B=I[1],U=B===""?null:ra(B),Oe=er(m),yn=p(P,function(){},[c],P);return{url:P,queryString:B,hashString:Oe,route:yn,data:null,params:U}}function Ee(){return ie(H(Bh(r)).replace(new RegExp("^"+r),""))}function Ut(m){var I={instance:s,currentLocationPath:m,to:m,navigateOptions:{},resolveOptions:t};return si(I,function(){}),I.matches?I.matches:!1}function Kh(m,I,P){typeof I<"u"&&(typeof P>"u"||P)&&(I=d(I));var B={instance:s,to:I,currentLocationPath:I};Cc(B,function(){}),typeof m=="string"&&(m=typeof P>"u"||P?d(m):m);var U=$h(B,{name:String(m),path:m,handler:function(){},hooks:{}});return U||!1}function ms(m,I,P){return typeof I=="string"&&(I=oa(I)),I?(I.hooks[m]||(I.hooks[m]=[]),I.hooks[m].push(P),function(){I.hooks[m]=I.hooks[m].filter(function(B){return B!==P})}):(console.warn("Route doesn't exists: "+I),function(){})}function oa(m){return typeof m=="string"?o.find(function(I){return I.name===d(m)}):o.find(function(I){return I.handler===m})}function Wh(m){m.instance.__dirty=!1,m.instance.__waiting.length>0&&m.instance.__waiting.shift()()}this.root=r,this.routes=o,this.destroyed=a,this.current=i,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Wh,this.on=y,this.off=D,this.resolve=C,this.navigate=v,this.navigateByName=L,this.destroy=re,this.notFound=j,this.updatePageLinks=_e,this.link=Ce,this.hooks=ye,this.extractGETParameters=function(m){return tr(h(m))},this.lastResolved=Se,this.generate=Le,this.getLinkPath=W,this.match=Ut,this.matchLocation=Kh,this.getCurrentLocation=Ee,this.addBeforeHook=ms.bind(this,"before"),this.addAfterHook=ms.bind(this,"after"),this.addAlreadyHook=ms.bind(this,"already"),this.addLeaveHook=ms.bind(this,"leave"),this.getRoute=oa,this._pathToMatchObject=ie,this._clean=H,this._checkForAHash=h,this._setCurrent=function(m){return i=s.current=m},K.call(this),_e.call(this)}const CE={router:null,getRouter(){if(!this.router){const n="/";this.router=new bE(n)}return this.router}};class SE{constructor(e){mt(this,"parent");mt(this,"components");this.parent=e,this.components=[],Mw()}addComponent(e){if(!(e instanceof Dt))return;const{name:t,routerPath:s}=e;e.reRender=()=>this.showComponent({name:t,props:null}),this.components.push(e),CE.getRouter().on(s,r=>{this.showComponent({name:t,props:r})}).resolve()}showComponent({name:e,props:t}){var r;const s=this.components.find(i=>i.name===e);s&&(t&&(s.props=t),(r=this.parent)==null||r.appendChild(s.render()))}}const kE=()=>{const n=document.getElementById("app"),e=new SE(n);e.addComponent(new jw),e.addComponent(new Hw),e.addComponent(new Kw),e.addComponent(new Zw),e.addComponent(new zw),e.addComponent(new eE)};window.addEventListener("load",kE);
