import{d as N,r as i,c,i as a,j as l,T,F as _,k as V,o as d,a as f,l as $,b as k,t as y}from"./index-D4hMjHsO.js";const E=["onDragstart","onDragenter"],F=["onClick"],j=N({__name:"test1",setup(M){const v=[1,2,3,4,5],e=i(v),o=i(null),s=i(null);let p=e.value.length+1;function D(){const t=Math.round(Math.random()*e.value.length);e.value.splice(t,0,p++)}function x(){e.value=v,p=e.value.length+1}function C(){e.value=[5,2,3,4,1]}function b(t){const n=e.value.indexOf(t);n>-1&&e.value.splice(n,1)}function h(t){o.value=t}function I(t){s.value=t}function B(){e.value.splice(s.value,0,e.value.splice(o.value,1)[0]),o.value=null,s.value=null}return(t,n)=>{const u=V("a-button");return d(),c(_,null,[a(u,{onClick:D},{default:l(()=>n[0]||(n[0]=[f("Insert at random index")])),_:1}),a(u,{onClick:x},{default:l(()=>n[1]||(n[1]=[f("Reset")])),_:1}),a(u,{onClick:C},{default:l(()=>n[2]||(n[2]=[f("Shuffle")])),_:1}),a(T,{tag:"ul",name:"fade",class:"container"},{default:l(()=>[(d(!0),c(_,null,$(e.value,(r,g)=>(d(),c("li",{class:"item",key:r,draggable:!0,onDragstart:m=>h(g),onDragenter:m=>I(g),onDragend:B},[k("span",null,y(r),1),k("button",{onClick:m=>b(r)},"x",8,F)],40,E))),128))]),_:1})],64)}}});export{j as default};