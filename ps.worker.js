var GravitDesigner=function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=1246)}({1246:function(e,r){self.gDevelopment=!1,self.parser,self.classes,self.core,self.ctm,self.color,self.init=function(e,r){gDevelopment=r.gDevelopment;var t=r.origin?r.origin:"",o="?v="+Math.random();importScripts(t+"psclasses.js"+o),importScripts(t+"pscore.js"+o),importScripts(t+"psparser.js"+o),importScripts(t+"psctm.js"+o),importScripts(t+"pscolor.js"+o),parser=new PSParser(e,r.maxWaitTime),classes=new PSClasses(parser),core=new PSCore(parser,r.outlineFonts),ctm=new PSCTM(core),color=new PSColor(core)},self.run=function(){parser&&parser.read()},onmessage=function(e){var r=e.data;if("func"in r){var t=r.func;if("function"==typeof self[t])if("data"in r){var o=self[t].apply(self,r.data);postMessage({error:0,result:o,call:r})}else postMessage({error:-3,errorStr:"no `data` field found in worker"});else postMessage({error:-2,errorStr:"no func found in worker"})}else postMessage({error:-1,errorStr:"no `func` field found in call"})}}});