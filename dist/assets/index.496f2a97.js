const m=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}};m();const y=n=>{const o=n.split("/"),r=[o[1],o[0],o[2]].join("/");return new Date(r)},i=n=>n<10?`0${n}`:n.toString(),g=document.getElementById("days"),p=document.getElementById("hours"),h=document.getElementById("minutes"),x=document.getElementById("seconds"),D="25/12/2022",u=1e3,d=u*60,a=d*60,l=a*24,f=()=>{const n=y(D),o=new Date,r=n.getTime()-o.getTime(),c=Math.floor(r/l),t=Math.floor(r%l/a),e=Math.floor(r%a/d),s=Math.floor(r%d/u);g.textContent=i(c),p.textContent=i(t),h.textContent=i(e),x.textContent=i(s)};setInterval(()=>{f()},1e3);document.addEventListener("DOMContentLoaded",f);
