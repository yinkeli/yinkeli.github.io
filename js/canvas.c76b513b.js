(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["canvas"],{"23eb":function(t,i,s){"use strict";s("bf7f")},"9fde":function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t._self._c;return i("canvas",{ref:"canvas",staticClass:"clock"})},e=[];s("14d9");class h{constructor(t){this.ctx=t,this.cx=window.innerWidth/2,this.cy=window.innerHeight/2,this.deg=this.getRandom(0,360)/180*Math.PI,this.r=Math.min(this.cx,this.cy),this.ox=this.x=this.cx+this.r*Math.cos(this.deg),this.oy=this.y=this.cy-this.cy*Math.sin(this.deg),this.radius=this.getRandom(2,5)}getRandom(t,i){return t+(i-t)*Math.random()}draw(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill()}moveTo(t,i){const s=200,n=+Date.now(),e=-(this.x-t)/s,h=-(this.y-i)/s,r=()=>{const o=+Date.now(),a=o-n;if(a>=s)return this.ox=this.x=t,void(this.oy=this.y=i);this.x=e*a+this.ox,this.y=h*a+this.oy,requestAnimationFrame(r)};r()}}var r=h,o={name:"clock",data(){return{ctx:null,timeStr:(new Date).toTimeString().substring(0,8),pos:[],points:[]}},props:{},methods:{updateSize(){this.$refs.canvas.width=window.innerWidth,this.$refs.canvas.height=window.innerHeight},drawTime(){const t=(new Date).toTimeString().substring(0,8);this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight),this.timeStr=t,this.ctx.font="120px serif",this.ctx.fillStyle="#000",this.ctx.fillText(this.timeStr,(window.innerWidth-this.ctx.measureText(this.timeStr).width)/2,window.innerHeight/2),this.pos=this.getImgData()},getImgData(){const t=this.ctx.getImageData(0,0,window.innerWidth,window.innerHeight).data,i=window.innerWidth,s=[];for(let n=0;n<i;n+=2)for(let e=0;e<window.innerHeight;e++){const h=4*(e*i+n),r=t[h],o=t[h+1],a=t[h+2],c=t[h+3];0===r&&0===a&&0===o&&255===c&&s.push([n,e])}return this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight),s},draw(){const t=()=>{this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight),this.points.forEach(t=>{t.draw()}),requestAnimationFrame(t)};t()},update(){const t=()=>{if((new Date).toTimeString().substring(0,8)===this.timeStr)return requestAnimationFrame(t);this.drawTime(),this.pos.forEach(([t,i],s)=>{let n=this.points[s];n||(n=new r(this.ctx),this.points[s]=n),n.moveTo(t,i)}),this.points.splice(this.pos.length),requestAnimationFrame(t)};t()}},mounted(){this.updateSize(),this.ctx=this.$refs.canvas.getContext("2d",{willReadFrequently:!0}),this.update(),this.draw()}},a=o,c=(s("23eb"),s("2877")),d=Object(c["a"])(a,n,e,!1,null,null,null);i["default"]=d.exports},bf7f:function(t,i,s){}}]);
//# sourceMappingURL=canvas.c76b513b.js.map