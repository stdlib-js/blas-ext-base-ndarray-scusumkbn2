"use strict";var q=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=q(function(l,v){
var c=require('@stdlib/ndarray-base-numel-dimension/dist'),a=require('@stdlib/ndarray-base-stride/dist'),t=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/blas-ext-base-scusumkbn2/dist').ndarray;function o(i){var r=i[0],e=i[1],s=d(i[2]);return m(c(r,0),s,u(r),a(r,0),t(r),u(e),a(e,0),t(e)),e}v.exports=o
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
