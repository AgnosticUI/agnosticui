import{_ as r,T as m,r as c,o as i,c as k,e as l,A as y,w as b,d as u,b as q}from"./app.4197772d.js";import"./index.56618267.js";import{_ as h,a as w,b as f,c as v}from"./Svelte-icon.d67041f2.js";const n=(s,p,a,t)=>({name:s,weapon:p,slams:a,birthdate:t}),_={name:"TagExamples",components:{Table:m},data(){return{rows:[n("Roger Federer","Forehand and serve",20,"August 8, 1981"),n("Andre Agassi","Return of serve. Groundstrokes",8,"April 29, 1970"),n("Steffi Graf","Forehand",22,"June 14, 1969"),n("Martina Navratilova","Serve and volley",18,"October 18, 1956"),n("Rafael Nadal","Backhand and speed",20,"June 3, 1986"),n("Althea Gibson","Speed, strength, and fluidity ",11,"August 25, 1927"),n("Novak Djokovic","Backhand and speed",20,"May 22, 1987"),n("Arthur Ashe","Serve and volley",3,"July 10, 1943")],headers:[{label:"Name",key:"name",width:"20%",sortable:!0},{label:"Weapon",key:"weapon",width:"32%"},{label:"Grand Slams",key:"slams",width:"24%",sortable:!0,renderFn:s=>`<div class="text-center">${s}<span class="mis6">\u{1F3C6}</span></div>`},{label:"Birthdate",key:"birthdate",sortable:!0,sortFn:(s,p)=>{const a=new Date(s).getTime()||-1/0,t=new Date(p).getTime()||-1/0;return a>t?1:a<t?-1:0}}]}}},A={class:"mbs24 mbe16"};function T(s,p,a,t,o,g){const e=c("Table");return i(),k("section",A,[l(e,{rows:o.rows,headers:o.headers,isHoverable:!0,caption:"My caption test"},null,8,["rows","headers"])])}var x=r(_,[["render",T]]);const R={components:{Alert:y,TableExamples:x}},B='{"title":"Table","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/table.md","lastUpdated":1643253255391}',S=u("",5),I=u("",10),N=q("Note: Vue 2 is not supported"),C=u("",20);function F(s,p,a,t,o,g){const e=c("TableExamples"),d=c("Alert");return i(),k("div",null,[S,l(e),I,l(d,{type:"warning"},{default:b(()=>[N]),_:1}),C])}var M=r(R,[["render",F]]);export{B as __pageData,M as default};
