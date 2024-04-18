(()=>{"use strict";var e,t,r={83416:(e,t,r)=>{r(21703);var o=r(54375);r(57658);Object.keys,Object.entries;Object.assign;Symbol("deprecated api name"),Symbol("abstracted api name"),Symbol("info message"),Symbol("warning message");r(92087),r(28583),r(3045),r(63706),r(68929),r(48403),r(8342),r(8400),r(74691),r(66678),r(50361),r(53888),r(39693),r(57043),r(75703),r(49995),r(23279),r(98066),r(91966),r(70735),r(43624),r(66073),r(77813),r(7187),r(3522),r(711),r(63105),r(13311),r(30998),r(70894),r(30988),r(7436),r(8804),r(94654),r(85564),r(42348),r(84486),r(2525),r(17204),r(27361),r(7739),r(18721),r(91175),r(6557),r(94174),r(64721),r(38125),r(25325),r(71843),r(33856),r(63137),r(51584),r(44144),r(47960),r(41609),r(18446),r(64647),r(97398),r(23560),r(56688),r(7654),r(14293),r(45220),r(81763),r(13218),r(37005),r(68630),r(72928),r(47037),r(52353),r(98611),r(24350),r(3674),r(10928),r(45021),r(35161),r(67523),r(66604),r(6162),r(84753),r(78659),r(27610),r(88306),r(82492),r(30236),r(53632),r(22762),r(50308),r(57557),r(14176),r(51463),r(75472),r(45245),r(22701),r(43174),r(78718),r(35937),r(39601),r(83608),r(96026),r(54061),r(43063),r(82729),r(66796),r(31351),r(59854),r(95534),r(42404),r(36968),r(31921),r(69983),r(84238),r(12571),r(11865),r(89734),r(20556),r(86407),r(18029),r(12297),r(73303),r(13217),r(69572),r(69579),r(23493),r(98913),r(1581),r(7334),r(59881),r(79833),r(27955),r(93386),r(77043),r(44908),r(45578),r(87185),r(73955),r(98601),r(40690),r(52628),r(82569),r(58748),r(76566),r(26726),r(4788),r(7287),r(35905),r(14841),r(32475),r(11700);r(84633);new class{setTimeout(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];setTimeout(e,t,...o)}};Object.fromEntries;Error;function n(e){return"Error"===e.type||"ErrorBefore"===e.type||"PreconditionFailed"===e.type||"OutOfSpace"===e.type}const i=new Set(["notion-db.sqlite3"]),a=console.warn;let s;console.warn=function(){"sqlite3_step() rc="!==(arguments.length<=0?void 0:arguments[0])&&a(...arguments)};const c={execSqliteBatch:function(e){if(!s)throw new Error("Sqlite DB was not initialized");return s.execSqliteBatch(e)},execSqliteBatchV2:function(e){if(!s)throw new Error("Sqlite DB was not initialized");return s.execSqliteBatchV2(e)}},l={initialize:async function(){s=await d.createInstance()},execSqliteBatch:c.execSqliteBatch,execSqliteBatchV2:c.execSqliteBatchV2};o.Jj(l);class d{constructor(e){this.db=void 0,this.sqlite3=void 0,this.sqlite3=e,this.db=new e.oo1.OpfsDb("notion-db-v0.sqlite3","c")}static async createInstance(){const e=await async function(e){return(await Promise.resolve().then(r.bind(r,10081))).default(e)}(),t=new d(e);return t.deleteDeprecatedFiles(),t}execSqliteBatch(e){return Promise.resolve(this.execSqliteBatchInternal(e))}execSqliteBatchV2(e){const{precondition:t,batch:r}=e;if(t){const e=this.execSqliteBatchInternal({body:[t],onError:void 0}),[o]=e.body;if("DataOk"===o.type){const{precondition_result:e}=function(e){if(1!==e.data.length)throw new Error(`Expected exactly 1 result row, instead had ${e.data.length}.`);return e.data[0]}(o);if("number"!=typeof e)throw new Error(`precondition_result must be 0/1, instead received: ${e} (type: ${typeof e})`);if(1===e)return Promise.resolve(this.execSqliteBatchInternal(r))}const n=r.body.map((()=>({type:"PreconditionFailed"})));return Promise.resolve({body:n,onErrorResult:void 0})}return Promise.resolve(this.execSqliteBatchInternal(r))}execSqliteBatchInternal(e){const{body:t,onError:r}=e,o=[];let i=!1;const a=Date.now();for(const[s,c]of t.entries()){if(i){o[s]={type:"ErrorBefore"};continue}const e=this.execSqliteStatement(c);o[s]=e,i=n(e)}return{body:o,onErrorResult:i&&r?this.execSqliteStatement(r):void 0,batchExecutionTimeMs:Date.now()-a}}execSqliteStatement(e){try{const{sql:t,args:r,getData:o}=e;if(o){return{type:"DataOk",data:this.db.exec({sql:t,bind:r,rowMode:"object",returnValue:"resultRows"})}}return this.db.exec({sql:t,bind:r}),{type:"Ok"}}catch(t){return t instanceof this.sqlite3.SQLite3Error?{type:"Error",message:t.message,name:t.name,sqliteCode:t.resultCode}:t instanceof Error?{type:"Error",message:t.message,name:t.name,sqliteCode:void 0}:{type:"Error",message:"Unknown error",name:"SqliteUnknownError",sqliteCode:void 0}}}async deleteDeprecatedFiles(){const e=await navigator.storage.getDirectory();if(!("keys"in e)||"function"!=typeof e.keys)throw new Error("Failed to retrieve existing OPFS files.");for await(const t of e.keys())"string"==typeof t&&i.has(t)&&await e.removeEntry(t)}}}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,loaded:!1,exports:{}};return r[e](i,i.exports,n),i.loaded=!0,i.exports}n.m=r,n.x=()=>{var e=n.O(void 0,[4014,1293],(()=>n(83416)));return e=n.O(e)},e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,o,i]=e[d],s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>4014===e?"4014-c0198b8c831da556.js":1293===e?"1293-23a4b53d6787bbdd.js":2389===e?"wasm-sqlite-worker-opfs-proxy-2389-e1846c9b5c3536ab.js":void 0,n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/_assets/",(()=>{n.b=self.location+"";var e={7244:1};n.f.i=(t,r)=>{e[t]||importScripts(n.p+n.u(t))};var t=self.webpackChunknotion_next=self.webpackChunknotion_next||[],r=t.push.bind(t);t.push=t=>{var[o,i,a]=t;for(var s in i)n.o(i,s)&&(n.m[s]=i[s]);for(a&&a(n);o.length;)e[o.pop()]=1;r(t)}})(),t=n.x,n.x=()=>Promise.all([n.e(4014),n.e(1293)]).then(t);n.x()})();