import{a as g,j as e}from"./jsx-runtime-OVHDjVDe.CE5iDyPX.js";import{r as c}from"./index.RH_Wq4ov.js";import"./_Input.CqJBE9gH.js";import"./index.C0D8tGUV.js";import"./_IconButton.ITUY3W3l.js";import"./_Tooltip.BRWHCaJW.js";import"./MinimalAccordion.Dz3P1kUl.js";import"./_Accordion.B-PO82ap.js";import"./lit-element.DMCH56eX.js";import"./lit-html-Bm_EwbrZ.BUqNPNwy.js";const f=()=>Promise.all([customElements.whenDefined("ag-breadcrumb")]),s=({items:m,type:l="default",ariaLabel:d="Breadcrumb",onBreadcrumbClick:p,className:u,id:a,...n})=>{const o=c.useRef(null);return c.useEffect(()=>{const h=async()=>{if(await f(),!o.current)return;const i=o.current,r=t=>{const x=t.detail;p?.(x)};return i.addEventListener("breadcrumb-click",r),()=>{i.removeEventListener("breadcrumb-click",r)}};let b;return h().then(i=>{b=i}),()=>b?.()},[p]),c.useEffect(()=>{o.current&&(o.current.items=m)},[m]),g.jsx("ag-breadcrumb",{ref:o,type:l,"aria-label":d,className:u,id:a,...n})};function L(){const[m,l]=c.useState(!1),[d,p]=c.useState([]);c.useEffect(()=>{(async()=>{try{await Promise.all([customElements.whenDefined("ag-breadcrumb")]),console.log("Breadcrumb web components are ready for React wrappers!"),l(!0)}catch(t){console.error("Error waiting for web components:",t),setTimeout(()=>l(!0),1e3)}})()},[]);const u=r=>{const t=new Date().toLocaleTimeString();p(x=>[`${t}: ${r}`,...x.slice(0,9)])},a=r=>{console.log("Breadcrumb clicked:",r),u(`Clicked "${r.item.label}" at index ${r.index}${r.item.href?` (href: ${r.item.href})`:""}`)},n=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Laptops",href:"/products/laptops"},{label:"MacBook Pro",current:!0}],o=[{label:"Home",href:"/"},{label:"Current Page",current:!0}],h=[{label:"Home",current:!0}],b=[{label:"Home",href:"/"},{label:"Category"},{label:"Subcategory",href:"/category/subcategory"},{label:"Current Item",current:!0}],i=[{label:"Home",href:"/"},{label:"Electronics",href:"/electronics"},{label:"Computers",href:"/electronics/computers"},{label:"Laptops",href:"/electronics/computers/laptops"},{label:"Gaming Laptops",href:"/electronics/computers/laptops/gaming"},{label:"High Performance",href:"/electronics/computers/laptops/gaming/high-performance"},{label:"ASUS ROG Series",current:!0}];return m?e.jsxs("div",{className:"demo-container",children:[e.jsx("h1",{children:"AgnosticUI Breadcrumb - React Examples"}),e.jsx("p",{children:"Interactive demos showcasing the Breadcrumb component with WAI-ARIA compliance, multiple separator styles, and comprehensive click event handling."}),e.jsxs("section",{className:"demo-section",children:[e.jsx("h2",{children:"Basic Breadcrumb"}),e.jsx("p",{children:"Standard breadcrumb navigation with chevron separators"}),e.jsx("div",{className:"demo-example",children:e.jsx(s,{items:n,onBreadcrumbClick:a})})]}),e.jsxs("section",{className:"demo-section",children:[e.jsx("h2",{children:"Separator Variations"}),e.jsxs("div",{className:"demo-example",children:[e.jsx("h3",{children:"Default (Chevron)"}),e.jsx(s,{items:o,type:"default",onBreadcrumbClick:a})]}),e.jsxs("div",{className:"demo-example",children:[e.jsx("h3",{children:"Slash Separator"}),e.jsx(s,{items:o,type:"slash",onBreadcrumbClick:a})]}),e.jsxs("div",{className:"demo-example",children:[e.jsx("h3",{children:"Arrow Separator"}),e.jsx(s,{items:o,type:"arrow",onBreadcrumbClick:a})]}),e.jsxs("div",{className:"demo-example",children:[e.jsx("h3",{children:"Bullet Separator"}),e.jsx(s,{items:o,type:"bullet",onBreadcrumbClick:a})]})]}),e.jsxs("section",{className:"demo-section",children:[e.jsx("h2",{children:"Edge Cases & Special Scenarios"}),e.jsxs("div",{className:"demo-example",children:[e.jsx("h3",{children:"Single Item"}),e.jsx(s,{items:h,onBreadcrumbClick:a})]}),e.jsxs("div",{className:"demo-example",children:[e.jsx("h3",{children:"Mixed Items (with/without links)"}),e.jsx(s,{items:b,onBreadcrumbClick:a})]}),e.jsxs("div",{className:"demo-example",children:[e.jsx("h3",{children:"Long Breadcrumb Trail"}),e.jsx(s,{items:i,type:"slash",onBreadcrumbClick:a})]})]}),e.jsxs("section",{className:"demo-section",children:[e.jsx("h2",{children:"Accessibility Features"}),e.jsxs("div",{className:"demo-example",children:[e.jsx("h3",{children:"Custom Aria Label"}),e.jsx(s,{items:n,ariaLabel:"Product navigation breadcrumb",onBreadcrumbClick:a}),e.jsx("p",{children:e.jsx("small",{children:"Check with screen reader: This breadcrumb has a custom aria-label"})})]})]}),e.jsxs("section",{className:"demo-section",children:[e.jsx("h2",{children:"Interactive Testing"}),e.jsx("p",{children:"Click any breadcrumb item to see event details below:"}),e.jsx("div",{className:"demo-example",children:e.jsx(s,{items:n,type:"arrow",onBreadcrumbClick:a})}),e.jsxs("div",{className:"actions-log",children:[e.jsx("h4",{children:"Action Log:"}),d.length===0?e.jsx("p",{children:e.jsx("em",{children:"No actions yet. Click a breadcrumb item above!"})}):e.jsx("ul",{children:d.map((r,t)=>e.jsx("li",{children:r},t))})]})]}),e.jsxs("section",{className:"demo-section",children:[e.jsx("h2",{children:"Form Integration"}),e.jsx("p",{children:"Breadcrumbs can be part of form navigation flows:"}),e.jsxs("form",{onSubmit:r=>{r.preventDefault(),u("Form submitted!")},children:[e.jsx(s,{items:[{label:"Step 1: Personal Info",href:"#step1"},{label:"Step 2: Payment",href:"#step2"},{label:"Step 3: Confirmation",current:!0}],onBreadcrumbClick:a}),e.jsxs("div",{style:{margin:"1rem 0",padding:"1rem",border:"1px solid var(--c-border)",borderRadius:"4px"},children:[e.jsx("h4",{children:"Step 3: Confirmation"}),e.jsx("p",{children:"Please review your information before submitting."}),e.jsx("button",{type:"submit",children:"Complete Order"})]})]})]}),e.jsx("style",{children:`
        .demo-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .demo-section {
          margin-bottom: 3rem;
          padding: 1.5rem;
          border: 1px solid var(--c-border);
          border-radius: 8px;
          background: var(--c-card-bg);
        }

        .demo-example {
          margin: 1rem 0;
          padding: 1rem;
          background: var(--ag-background-secondary);
          border-radius: 6px;
          border: 1px solid var(--c-border);
        }

        .demo-example h3 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: var(--ag-text-primary);
          font-size: 1rem;
        }

        .actions-log {
          margin-top: 1rem;
          padding: 1rem;
          background: var(--ag-background-secondary);
          border-radius: 6px;
          border: 1px solid var(--c-border);
        }

        .actions-log h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: var(--ag-text-primary);
        }

        .actions-log ul {
          margin: 0;
          padding-left: 1.5rem;
          max-height: 200px;
          overflow-y: auto;
        }

        .actions-log li {
          margin: 0.25rem 0;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.875rem;
          color: var(--ag-text-secondary);
        }

        h1 {
          color: var(--ag-text-primary);
          border-bottom: 2px solid var(--ag-primary);
          padding-bottom: 0.5rem;
        }

        h2 {
          color: var(--ag-text-primary);
          margin-top: 0;
        }

        p {
          color: var(--ag-text-secondary);
          line-height: 1.6;
        }

        form {
          border: 1px solid var(--c-border);
          border-radius: 6px;
          padding: 1rem;
          background: var(--c-card-bg);
        }

        button[type="submit"] {
          background: var(--ag-primary);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }

        button[type="submit"]:hover {
          background: var(--ag-primary-hover);
        }

        /* Breadcrumb styling using CSS custom properties */
        ag-breadcrumb {
          --ag-space-1: 0.25rem;
          --ag-space-2: 0.5rem;
          --ag-primary: var(--ag-primary);
          --ag-primary-hover: var(--ag-primary-hover);
          --ag-text-primary: var(--ag-text-primary);
          --ag-text-secondary: var(--ag-text-secondary);
          --ag-background-secondary: var(--ag-background-secondary);
          --ag-focus: var(--ag-focus);
          --ag-focus-width: 2px;
          --ag-focus-offset: 2px;
          --ag-border-radius: 0.25rem;
          --ag-transition-duration: 200ms;
        }
      `})]}):e.jsx("div",{children:"Loading Breadcrumb components..."})}export{L as default};
