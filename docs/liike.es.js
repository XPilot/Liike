var Tween=function d(a,b,c){var e=c.start,f=c.end,g=c.from,h=c.to,i=c.easing,j=c.onstart,k=c.onprogress,l=c.onend;this.target=a;this.handler=b;this.start=e;this.end=f;this.easing=i;this.from=g;this.to=h;this.keys=[];this.onstart=j;this.onprogress=k;this.onend=l;this.running=!1;this.store=a.__liike||(a.__liike={})};Tween.prototype.init=function a(){var b=this,c=this,d=c.from,e=c.to,f=c.keys;for(var g in e)(g in d)||(d[g]=b.store[g]||0),f.push(g);for(var h in d)(h in e)||(e[h]=b.store[h]||0,f.push(h))};Tween.prototype.tick=function b(a){var c=this,d=this,e=d.keys,f=d.from,g=d.to,h=d.easing,i=h(a);for(var j=0;j<e.length;j++){var k=e[j];c.store[k]=f[k]+(g[k]-f[k])*i}this.handler(this.target,this.store)};var tweens=[],jobs=[],nullFunc=function(){},linear=function(a){return a},ticking=0,tick=function(a){while(jobs.length){var b=jobs.shift();b(a)}for(var c=0;c<tweens.length;c++){var d=tweens[c];if(a<d.start){continue}d.running||(d.running=!0,d.init(),d.onstart());var e=(a-d.start)/(d.end-d.start);d.tick(e<1?e:1);d.onprogress(e);a>d.end&&(d.onend(),tweens.splice(c--,1))}jobs.length||tweens.length?(ticking=window.requestAnimationFrame(tick)):(ticking=0)},index=function(a){return function(b,c){var d=c.delay;d===void 0&&(d=0);var e=c.duration;e===void 0&&(e=0);var f=c.from;f===void 0&&(f={});var g=c.to;g===void 0&&(g={});var h=c.easing;h===void 0&&(h=linear);var i=c.onprogress;i===void 0&&(i=nullFunc);var j=c.onstart;j===void 0&&(j=nullFunc);var k=c.onend;k===void 0&&(k=nullFunc);jobs.push(function(c){var l=new Tween(b,a,{start:c+d,end:c+d+e,from:f,to:g,easing:h,onstart:j,onprogress:i,onend:k});tweens.push(l)});ticking||(ticking=window.requestAnimationFrame(tick))}};export default index