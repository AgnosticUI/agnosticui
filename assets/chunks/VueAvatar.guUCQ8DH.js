import{a as o}from"./Avatar.Wq-_P_-y.js";import{i,a as l,x as p}from"./property-CemaeiRl.Cea_q1B7.js";import{s as g}from"./plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as m,c,o as d,r as u,K as f,p as v,v as x,P as S,s as h}from"./framework.DmF2n0Fc.js";const n=class extends l{render(){return p`
      <div class="avatar-group" part="ag-avatar-group">
        <slot></slot>
      </div>
    `}};n.styles=i`
    :host {
      display: inline-flex;
    }

    .avatar-group {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    /* Overlap avatars except the first one */
    ::slotted(ag-avatar:not(:first-child)) {
      margin-inline-start: calc(-1 * 0.625rem);
    }

    /* Optional: Add z-index stacking so later avatars appear on top when hovered */
    ::slotted(ag-avatar) {
      transition: transform 0.2s ease;
      position: relative;
    }

    ::slotted(ag-avatar:hover) {
      transform: translateY(-2px);
      z-index: 10;
    }
  `;let s=n;customElements.get("ag-avatar-group")||customElements.define("ag-avatar-group",s);customElements.get("ag-avatar")||customElements.define("ag-avatar",o);customElements.get("ag-avatar-group")||customElements.define("ag-avatar-group",s);const y=m({name:"VueAvatar",props:{text:{type:String,default:""},imgSrc:{type:String,default:""},imgAlt:{type:String,default:""},size:{type:String,default:"md"},shape:{type:String,default:"circle"},variant:{type:String,default:"default"},ariaLabel:{type:String,default:""}},setup(a){const e=v(null),r=()=>{const t=e.value;t&&(t.text=a.text,t.imgSrc=a.imgSrc,t.imgAlt=a.imgAlt,t.size=a.size,t.shape=a.shape,t.variant=a.variant,t.ariaLabel=a.ariaLabel)};return x(async()=>{await customElements.whenDefined("ag-avatar"),await S(),r()}),h(()=>{e.value&&r()}),{agComponent:e}}});function E(a,e,r,t,w,z){return d(),c("ag-avatar",f({ref:"agComponent"},a.$attrs),[u(a.$slots,"default")],16)}const L=g(y,[["render",E]]);export{L as $};
