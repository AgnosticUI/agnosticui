import{A as f}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{k as A}from"./chunks/VueIconButton.vue_vue_type_script_setup_true_lang-DKCTvvr9.BzE8OO7j.js";import{u as D}from"./chunks/VueIcon.vue_vue_type_script_setup_true_lang-kC-nzMyu.4MVkE5wk.js";import{_ as w,C as l,c as y,o as b,j as a,ae as c,G as s,w as i,a as k,k as d}from"./chunks/framework.NAAYCHZu.js";import{Z as q,F as S}from"./chunks/FrameworkExample.Vj5DwYx5.js";import{B as I,S as z}from"./chunks/square-pen.ldxLpMHA.js";import{B as V}from"./chunks/bell.DIj7aJxI.js";import{T as L}from"./chunks/triangle-alert.DhPqtk12.js";import{C as j}from"./chunks/check.CFLGSMlm.js";import{S as M}from"./chunks/star.kh2rt2dx.js";import{H as R}from"./chunks/heart.Btp9iEMW.js";import{T as _}from"./chunks/trash-2.nw5yXCyH.js";import{S as G}from"./chunks/search.D3iDyvB5.js";import{S as T}from"./chunks/settings.BZ9RHgDM.js";import{a as P,x as N}from"./chunks/Button.Bujdzq23.js";import"./chunks/IconButton.D81bN6Hu.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/Icon.odq14qpJ.js";import"./chunks/IconButton.Dx1PqinQ.js";const W={name:"IconButtonExamples",components:{VueIcon:D,VueIconButton:A,Settings:T,Search:G,Edit:z,Trash2:_,Heart:R,Star:M,Check:j,AlertTriangle:L,Bell:V,Bookmark:I,Zap:q},data(){return{isFavorite:!1,isBookmarked:!1,notificationsOn:!1}},methods:{toggleFavorite(){this.isFavorite=!this.isFavorite},toggleBookmark(){this.isBookmarked=!this.isBookmarked},toggleNotifications(){this.notificationsOn=!this.notificationsOn}}},O={class:"stacked-mobile mbe4"},H={class:"stacked-mobile mbe4"},U={class:"mbe4"},$={class:"mbe4"},Z={class:"stacked-mobile mbe4"},Y={class:"stacked-mobile mbe4"};function J(F,e,t,as,p,r){const m=l("Settings"),n=l("VueIconButton"),v=l("Search"),B=l("Edit"),g=l("Trash2"),o=l("Star"),C=l("Check"),E=l("AlertTriangle"),h=l("Heart"),u=l("Bookmark"),x=l("Bell");return b(),y("section",null,[e[0]||(e[0]=a("div",{class:"mbe4"},[a("h2",null,"Basic Icon Buttons")],-1)),a("div",O,[s(n,{label:"Settings"},{default:i(()=>[s(m,{size:18,class:"expand"})]),_:1}),s(n,{label:"Search"},{default:i(()=>[s(v,{size:18,class:"expand"})]),_:1}),s(n,{label:"Edit"},{default:i(()=>[s(B,{size:18,class:"expand"})]),_:1}),s(n,{label:"Delete"},{default:i(()=>[s(g,{size:18,class:"expand"})]),_:1})]),e[1]||(e[1]=a("div",{class:"flex-inline mbe4"},[a("h2",null,"Variants")],-1)),a("div",H,[s(n,{label:"Ghost (default)",variant:"ghost"},{default:i(()=>[s(o,{size:18,class:"expand"})]),_:1}),s(n,{label:"Primary",variant:"primary"},{default:i(()=>[s(o,{class:"expand"})]),_:1}),s(n,{label:"Secondary",variant:"secondary"},{default:i(()=>[s(o,{class:"expand"})]),_:1}),s(n,{label:"Success",variant:"success"},{default:i(()=>[s(C,{class:"expand"})]),_:1}),s(n,{label:"Warning",variant:"warning"},{default:i(()=>[s(E,{class:"expand"})]),_:1}),s(n,{label:"Danger",variant:"danger"},{default:i(()=>[s(g,{class:"expand"})]),_:1}),s(n,{label:"Monochrome",variant:"monochrome"},{default:i(()=>[s(o,{class:"expand"})]),_:1})]),e[2]||(e[2]=c("",1)),a("div",U,[s(n,{label:"Extra Small",size:"xs"},{default:i(()=>[s(h,{size:14,class:"expand"})]),_:1}),s(n,{label:"Small",size:"sm"},{default:i(()=>[s(h,{class:"expand"})]),_:1}),s(n,{label:"Medium",size:"md"},{default:i(()=>[s(h,{class:"expand"})]),_:1}),s(n,{label:"Large",size:"lg"},{default:i(()=>[s(h,{class:"expand"})]),_:1}),s(n,{label:"Extra Large",size:"xl"},{default:i(()=>[s(h,{class:"expand"})]),_:1})]),a("div",$,[s(n,{label:"Extra Small",variant:"monochrome",size:"xs",class:"mie4"},{default:i(()=>[s(o,{class:"expand"})]),_:1}),s(n,{label:"Small",variant:"monochrome",size:"sm",class:"mie4"},{default:i(()=>[s(o,{class:"expand"})]),_:1}),s(n,{label:"Medium",variant:"monochrome",size:"md",class:"mie4"},{default:i(()=>[s(o,{class:"expand"})]),_:1}),s(n,{label:"Large",variant:"monochrome",size:"lg",class:"mie4"},{default:i(()=>[s(o,{class:"expand"})]),_:1}),s(n,{label:"Extra Large",variant:"monochrome",size:"xl"},{default:i(()=>[s(o,{class:"expand"})]),_:1})]),e[3]||(e[3]=c("",2)),a("div",Z,[s(n,{label:"Toggle favorite",pressed:p.isFavorite,onClick:r.toggleFavorite},{default:i(()=>[s(h,{fill:p.isFavorite?"currentColor":"none",class:"expand"},null,8,["fill"])]),_:1},8,["pressed","onClick"]),s(n,{label:"Toggle bookmark",pressed:p.isBookmarked,onClick:r.toggleBookmark},{default:i(()=>[s(u,{class:"expand",fill:p.isBookmarked?"currentColor":"none"},null,8,["fill"])]),_:1},8,["pressed","onClick"]),s(n,{label:"Toggle notifications",pressed:p.notificationsOn,onClick:r.toggleNotifications},{default:i(()=>[s(x,{class:"expand",fill:p.notificationsOn?"currentColor":"none"},null,8,["fill"])]),_:1},8,["pressed","onClick"])]),e[4]||(e[4]=a("div",{class:"mbe4"},[a("h2",null,"CSS Parts Customization"),a("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Customize icon button appearance using CSS Shadow Parts without breaking encapsulation. The following are meant solely to show how to utilize CSS shadow parts to create custom toggle styles. They are NOT meant to represent best practices or good taste in toggle design! ")],-1)),a("div",Y,[s(n,{class:"custom-gradient-button",label:"Gradient button"},{default:i(()=>[s(h,{class:"expand"})]),_:1}),s(n,{class:"custom-gradient-button",label:"Gradient star"},{default:i(()=>[s(o,{class:"expand"})]),_:1}),s(n,{class:"custom-gradient-button",label:"Gradient bookmark"},{default:i(()=>[s(u,{class:"expand"})]),_:1})])])}const K=w(W,[["render",J],["__scopeId","data-v-3648176f"]]);class Q extends P{constructor(){super(),this.isFavorite=!1,this.isBookmarked=!1,this.notificationsOn=!1}createRenderRoot(){return this}toggleFavorite(){this.isFavorite=!this.isFavorite,this.requestUpdate()}toggleBookmark(){this.isBookmarked=!this.isBookmarked,this.requestUpdate()}toggleNotifications(){this.notificationsOn=!this.notificationsOn,this.requestUpdate()}render(){return N`
      <style>
        /* Ensure all SVGs expand to full width/height */
        .expand {
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
        }

        /* CSS Parts customization examples */

        /* Gradient button style */
        .custom-gradient-button::part(ag-icon-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          padding: 12px;
          transition: all 0.3s ease;
        }

        .custom-gradient-button::part(ag-icon-button):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
        }

        .custom-gradient-button::part(ag-icon-button):active {
          transform: translateY(0);
          box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
        }
      </style>

      <section>
        <div class="mbe4">
          <h2>Basic Icon Buttons</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button label="Settings">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Search">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Edit">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Delete">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </ag-icon-button>
        </div>

        <div class="flex-inline mbe4">
          <h2>Variants</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button label="Ghost (default)" variant="ghost">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Primary" variant="primary">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Secondary" variant="secondary">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Success" variant="success">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Warning" variant="warning">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Danger" variant="danger">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Monochrome" variant="monochrome">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <h2>Scaled Icons</h2>
          <p class="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
          <ul>
            <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
            <li>
              Prefer one of two patterns for slotted SVGs:
              <ul>
                <li>em-based sizing so the SVG scales with the icon font-size: <code>ag-icon-button::slotted(svg) { width: 1em; height: 1em; }</code></li>
                <li>or let the SVG fill its container: <code>width: 100%; height: 100%;</code></li>
              </ul>
            </li>
            <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
          </ul>
          <details>
            <summary>Advanced</summary>
            <p>The icon container uses <code>1em</code> by default and follows the per-size token values. If a projected SVG sets explicit pixel <code>width/height</code>, the SVG will honor those values. Prefer passing a <code>size</code> prop to icon libraries (e.g. lucide) when available.</p>
            <p>Example overrides: <code>ag-icon-button { --ag-icon-button-font-size-md: 1rem }</code> or <code>ag-icon-button[size="xl"] { --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }</code></p>
          </details>
        </div>
        <div class="mbe4">
          <ag-icon-button label="Extra Small" size="xs">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Small" size="sm">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Medium" size="md">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Large" size="lg">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Extra Large" size="xl">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <ag-icon-button label="Extra Small" variant="monochrome" size="xs" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Small" variant="monochrome" size="sm" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Medium" variant="monochrome" size="md" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Large" variant="monochrome" size="lg" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Extra Large" variant="monochrome" size="xl">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <h2>Scaled Icons</h2>
          <p class="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
          <ul>
            <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
            <li>Make slotted SVGs follow the icon font-size: <code>ag-icon-button::slotted(svg){width:1em;height:1em}</code> or ensure the SVG fills the icon container by setting <code>width:100%; height:100%</code> on the SVG (via attributes or CSS).</li>
            <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
          </ul>

          <details>
            <summary>Advanced</summary>
            <p>Example overrides: <code>ag-icon-button { --ag-icon-button-font-size-md: 1rem }</code> or <code>ag-icon-button[size="xl"] { --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }</code></p>
          </details>
        </div>

        <div class="mbe4">
          <h2>Toggle Buttons</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button
            label="Toggle favorite"
            .pressed=${this.isFavorite}
            @click=${this.toggleFavorite}
          >
            <svg class="expand" viewBox="0 0 24 24" fill=${this.isFavorite?"currentColor":"none"} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button
            label="Toggle bookmark"
            .pressed=${this.isBookmarked}
            @click=${this.toggleBookmark}
          >
            <svg class="expand" viewBox="0 0 24 24" fill=${this.isBookmarked?"currentColor":"none"} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button
            label="Toggle notifications"
            .pressed=${this.notificationsOn}
            @click=${this.toggleNotifications}
          >
            <svg class="expand" viewBox="0 0 24 24" fill=${this.notificationsOn?"currentColor":"none"} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize icon button appearance using CSS Shadow Parts without breaking encapsulation. The following are meant solely to show how to utilize CSS shadow parts to create custom toggle styles. They are NOT meant to represent best practices or good taste in toggle design!
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button class="custom-gradient-button" label="Gradient button">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button class="custom-gradient-button" label="Gradient star">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button class="custom-gradient-button" label="Gradient bookmark">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </ag-icon-button>
        </div>
      </section>
    `}}customElements.define("icon-button-lit-examples",Q);const X=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Icon Buttons</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton label="Settings">
        <Settings
          :size="18"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton label="Search">
        <Search
          :size="18"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton label="Edit">
        <Edit
          :size="18"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton label="Delete">
        <Trash2
          :size="18"
          class="expand"
        />
      </VueIconButton>
    </div>
    <div class="flex-inline mbe4">
      <h2>Variants</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        label="Ghost (default)"
        variant="ghost"
      >
        <Star
          :size="18"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton
        label="Primary"
        variant="primary"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Secondary"
        variant="secondary"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Success"
        variant="success"
      >
        <Check class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Warning"
        variant="warning"
      >
        <AlertTriangle class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Danger"
        variant="danger"
      >
        <Trash2 class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Monochrome"
        variant="monochrome"
      >
        <Star class="expand" />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <h2>Scaled Icons</h2>
      <p class="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
      <ul>
        <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
        <li>
          Prefer one of two patterns for slotted SVGs:
          <ul>
            <li>em-based sizing so the SVG scales with the icon font-size: <code>ag-icon-button::slotted(svg) { width: 1em; height: 1em; }</code></li>
            <li>or let the SVG fill its container: <code>width: 100%; height: 100%;</code></li>
          </ul>
        </li>
        <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
      </ul>
      <details>
        <summary>Advanced</summary>
        <p>The icon container uses <code>1em</code> by default and follows the per-size token values. If a projected SVG sets explicit pixel <code>width/height</code>, the SVG will honor those values. Prefer passing a <code>size</code> prop to icon libraries (e.g. lucide) when available.</p>
        <p>Example overrides: <code>ag-icon-button { --ag-icon-button-font-size-md: 1rem }</code> or <code>ag-icon-button[size="xl"] { --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }</code></p>
      </details>
    </div>
    <div class="mbe4">
      <VueIconButton
        label="Extra Small"
        size="xs"
      >
        <Heart
          :size="14"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton
        label="Small"
        size="sm"
      >
        <Heart class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Medium"
        size="md"
      >
        <Heart class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Large"
        size="lg"
      >
        <Heart class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Extra Large"
        size="xl"
      >
        <Heart class="expand" />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <VueIconButton
        label="Extra Small"
        variant="monochrome"
        size="xs"
        class="mie4"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Small"
        variant="monochrome"
        size="sm"
        class="mie4"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Medium"
        variant="monochrome"
        size="md"
        class="mie4"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Large"
        variant="monochrome"
        size="lg"
        class="mie4"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        label="Extra Large"
        variant="monochrome"
        size="xl"
      >
        <Star class="expand" />
      </VueIconButton>
    </div>
    <div class="mbe4">
      <h2>Scaled Icons</h2>
      <p class="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
      <ul>
        <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
        <li>Make slotted SVGs follow the icon font-size: <code>ag-icon-button::slotted(svg){width:1em;height:1em}</code> or ensure the SVG fills the icon container by setting <code>width:100%; height:100%</code> on the SVG (via attributes or CSS).</li>
        <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
      </ul>

      <details>
        <summary>Advanced</summary>
        <p>Example overrides: <code>ag-icon-button { --ag-icon-button-font-size-md: 1rem }</code> or <code>ag-icon-button[size="xl"] { --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }</code></p>
      </details>
    </div>

    <div class="mbe4">
      <h2>Toggle Buttons</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        label="Toggle favorite"
        :pressed="isFavorite"
        @click="toggleFavorite"
      >
        <Heart
          :fill="isFavorite ? 'currentColor' : 'none'"
          class="expand"
        />
      </VueIconButton>
      <VueIconButton
        label="Toggle bookmark"
        :pressed="isBookmarked"
        @click="toggleBookmark"
      >
        <Bookmark
          class="expand"
          :fill="isBookmarked ? 'currentColor' : 'none'"
        />
      </VueIconButton>
      <VueIconButton
        label="Toggle notifications"
        :pressed="notificationsOn"
        @click="toggleNotifications"
      >
        <Bell
          class="expand"
          :fill="notificationsOn ? 'currentColor' : 'none'"
        />
      </VueIconButton>
    </div>

    <div class="mbe4">
      <h2>CSS Parts Customization</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize icon button appearance using CSS Shadow Parts without breaking encapsulation. The following are meant solely to show how to utilize CSS shadow parts to create custom toggle styles. They are NOT meant to represent best practices or good taste in toggle design!
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIconButton
        class="custom-gradient-button"
        label="Gradient button"
      >
        <Heart class="expand" />
      </VueIconButton>
      <VueIconButton
        class="custom-gradient-button"
        label="Gradient star"
      >
        <Star class="expand" />
      </VueIconButton>
      <VueIconButton
        class="custom-gradient-button"
        label="Gradient bookmark"
      >
        <Bookmark class="expand" />
      </VueIconButton>
    </div>
  </section>
</template>

<script>
import VueIconButton from "agnosticui-core/icon-button/vue";
import { VueIcon } from "agnosticui-core/icon/vue";
import {
  Settings,
  Search,
  Edit,
  Trash2,
  Heart,
  Star,
  Check,
  AlertTriangle,
  Bell,
  Bookmark,
  Zap,
} from "lucide-vue-next";

export default {
  name: "IconButtonExamples",
  components: {
    VueIcon,
    VueIconButton,
    Settings,
    Search,
    Edit,
    Trash2,
    Heart,
    Star,
    Check,
    AlertTriangle,
    Bell,
    Bookmark,
    Zap,
  },
  data() {
    return {
      isFavorite: false,
      isBookmarked: false,
      notificationsOn: false,
    };
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
    toggleBookmark() {
      this.isBookmarked = !this.isBookmarked;
    },
    toggleNotifications() {
      this.notificationsOn = !this.notificationsOn;
    },
  },
};
<\/script>

<style scoped>
/* Ensure all SVGs expand to full width/height */
.expand {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}

/* CSS Parts customization examples */

/* Gradient button style */
.custom-gradient-button::part(ag-icon-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 12px;
  transition: all 0.3s ease;
}

.custom-gradient-button::part(ag-icon-button):hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
}

.custom-gradient-button::part(ag-icon-button):active {
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}
</style>
`,ss=`import { LitElement, html } from 'lit';
import 'agnosticui-core/icon-button';

export class IconButtonLitExamples extends LitElement {
  constructor() {
    super();
    this.isFavorite = false;
    this.isBookmarked = false;
    this.notificationsOn = false;
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.requestUpdate();
  }

  toggleBookmark() {
    this.isBookmarked = !this.isBookmarked;
    this.requestUpdate();
  }

  toggleNotifications() {
    this.notificationsOn = !this.notificationsOn;
    this.requestUpdate();
  }

  render() {
    return html\`
      <style>
        /* Ensure all SVGs expand to full width/height */
        .expand {
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
        }

        /* CSS Parts customization examples */

        /* Gradient button style */
        .custom-gradient-button::part(ag-icon-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          padding: 12px;
          transition: all 0.3s ease;
        }

        .custom-gradient-button::part(ag-icon-button):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
        }

        .custom-gradient-button::part(ag-icon-button):active {
          transform: translateY(0);
          box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
        }
      </style>

      <section>
        <div class="mbe4">
          <h2>Basic Icon Buttons</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button label="Settings">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Search">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Edit">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Delete">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </ag-icon-button>
        </div>

        <div class="flex-inline mbe4">
          <h2>Variants</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button label="Ghost (default)" variant="ghost">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Primary" variant="primary">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Secondary" variant="secondary">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Success" variant="success">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Warning" variant="warning">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Danger" variant="danger">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Monochrome" variant="monochrome">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <h2>Scaled Icons</h2>
          <p class="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
          <ul>
            <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
            <li>
              Prefer one of two patterns for slotted SVGs:
              <ul>
                <li>em-based sizing so the SVG scales with the icon font-size: <code>ag-icon-button::slotted(svg) { width: 1em; height: 1em; }</code></li>
                <li>or let the SVG fill its container: <code>width: 100%; height: 100%;</code></li>
              </ul>
            </li>
            <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
          </ul>
          <details>
            <summary>Advanced</summary>
            <p>The icon container uses <code>1em</code> by default and follows the per-size token values. If a projected SVG sets explicit pixel <code>width/height</code>, the SVG will honor those values. Prefer passing a <code>size</code> prop to icon libraries (e.g. lucide) when available.</p>
            <p>Example overrides: <code>ag-icon-button { --ag-icon-button-font-size-md: 1rem }</code> or <code>ag-icon-button[size="xl"] { --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }</code></p>
          </details>
        </div>
        <div class="mbe4">
          <ag-icon-button label="Extra Small" size="xs">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Small" size="sm">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Medium" size="md">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Large" size="lg">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Extra Large" size="xl">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <ag-icon-button label="Extra Small" variant="monochrome" size="xs" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Small" variant="monochrome" size="sm" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Medium" variant="monochrome" size="md" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Large" variant="monochrome" size="lg" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Extra Large" variant="monochrome" size="xl">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <h2>Scaled Icons</h2>
          <p class="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
          <ul>
            <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
            <li>Make slotted SVGs follow the icon font-size: <code>ag-icon-button::slotted(svg){width:1em;height:1em}</code> or ensure the SVG fills the icon container by setting <code>width:100%; height:100%</code> on the SVG (via attributes or CSS).</li>
            <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
          </ul>

          <details>
            <summary>Advanced</summary>
            <p>Example overrides: <code>ag-icon-button { --ag-icon-button-font-size-md: 1rem }</code> or <code>ag-icon-button[size="xl"] { --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }</code></p>
          </details>
        </div>

        <div class="mbe4">
          <h2>Toggle Buttons</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button
            label="Toggle favorite"
            .pressed=\${this.isFavorite}
            @click=\${this.toggleFavorite}
          >
            <svg class="expand" viewBox="0 0 24 24" fill=\${this.isFavorite ? 'currentColor' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button
            label="Toggle bookmark"
            .pressed=\${this.isBookmarked}
            @click=\${this.toggleBookmark}
          >
            <svg class="expand" viewBox="0 0 24 24" fill=\${this.isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button
            label="Toggle notifications"
            .pressed=\${this.notificationsOn}
            @click=\${this.toggleNotifications}
          >
            <svg class="expand" viewBox="0 0 24 24" fill=\${this.notificationsOn ? 'currentColor' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize icon button appearance using CSS Shadow Parts without breaking encapsulation. The following are meant solely to show how to utilize CSS shadow parts to create custom toggle styles. They are NOT meant to represent best practices or good taste in toggle design!
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button class="custom-gradient-button" label="Gradient button">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button class="custom-gradient-button" label="Gradient star">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button class="custom-gradient-button" label="Gradient bookmark">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </ag-icon-button>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('icon-button-lit-examples', IconButtonLitExamples);
`,is=`import { useState } from "react";
import { ReactIconButton } from "agnosticui-core/icon-button/react";

export default function IconButtonReactExamples() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [notificationsOn, setNotificationsOn] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const toggleNotifications = () => {
    setNotificationsOn(!notificationsOn);
  };

  return (
    <section>
      <style>{\`
        /* Ensure all SVGs expand to full width/height */
        .expand {
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
        }

        /* CSS Parts customization examples */

        /* Gradient button style */
        .custom-gradient-button::part(ag-icon-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          padding: 12px;
          transition: all 0.3s ease;
        }

        .custom-gradient-button::part(ag-icon-button):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
        }

        .custom-gradient-button::part(ag-icon-button):active {
          transform: translateY(0);
          box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
        }
      \`}</style>

      <div className="mbe4">
        <h2>Basic Icon Buttons</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactIconButton label="Settings">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"></path>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Search">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Edit">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Delete">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          </svg>
        </ReactIconButton>
      </div>

      <div className="flex-inline mbe4">
        <h2>Variants</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactIconButton label="Ghost (default)" variant="ghost">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Primary" variant="primary">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Secondary" variant="secondary">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Success" variant="success">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Warning" variant="warning">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Danger" variant="danger">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Monochrome" variant="monochrome">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </ReactIconButton>
      </div>

      <div className="mbe4">
        <h2>Scaled Icons</h2>
        <p className="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
        <ul>
          <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
          <li>
            Prefer one of two patterns for slotted SVGs:
            <ul>
              <li>em-based sizing so the SVG scales with the icon font-size: <code>ag-icon-button::slotted(svg) {"{ width: 1em; height: 1em; }"}</code></li>
              <li>or let the SVG fill its container: <code>width: 100%; height: 100%;</code></li>
            </ul>
          </li>
          <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
        </ul>
        <details>
          <summary>Advanced</summary>
          <p>The icon container uses <code>1em</code> by default and follows the per-size token values. If a projected SVG sets explicit pixel <code>width/height</code>, the SVG will honor those values. Prefer passing a <code>size</code> prop to icon libraries (e.g. lucide) when available.</p>
          <p>Example overrides: <code>ag-icon-button {"{ --ag-icon-button-font-size-md: 1rem }"}</code> or <code>ag-icon-button[size="xl"] {"{ --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }"}</code></p>
        </details>
      </div>
      <div className="mbe4">
        <ReactIconButton label="Extra Small" size="xs">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Small" size="sm">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Medium" size="md">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Large" size="lg">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Extra Large" size="xl">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </ReactIconButton>
      </div>

      <div className="mbe4">
        <ReactIconButton label="Extra Small" variant="monochrome" size="xs" className="mie4">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Small" variant="monochrome" size="sm" className="mie4">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Medium" variant="monochrome" size="md" className="mie4">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Large" variant="monochrome" size="lg" className="mie4">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </ReactIconButton>
        <ReactIconButton label="Extra Large" variant="monochrome" size="xl">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </ReactIconButton>
      </div>

      <div className="mbe4">
        <h2>Scaled Icons</h2>
        <p className="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
        <ul>
          <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
          <li>Make slotted SVGs follow the icon font-size: <code>ag-icon-button::slotted(svg){"{width:1em;height:1em}"}</code> or ensure the SVG fills the icon container by setting <code>width:100%; height:100%</code> on the SVG (via attributes or CSS).</li>
          <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
        </ul>

        <details>
          <summary>Advanced</summary>
          <p>Example overrides: <code>ag-icon-button {"{ --ag-icon-button-font-size-md: 1rem }"}</code> or <code>ag-icon-button[size="xl"] {"{ --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }"}</code></p>
        </details>
      </div>

      <div className="mbe4">
        <h2>Toggle Buttons</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactIconButton
          label="Toggle favorite"
          pressed={isFavorite}
          onClick={toggleFavorite}
        >
          <svg className="expand" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </ReactIconButton>
        <ReactIconButton
          label="Toggle bookmark"
          pressed={isBookmarked}
          onClick={toggleBookmark}
        >
          <svg className="expand" viewBox="0 0 24 24" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
          </svg>
        </ReactIconButton>
        <ReactIconButton
          label="Toggle notifications"
          pressed={notificationsOn}
          onClick={toggleNotifications}
        >
          <svg className="expand" viewBox="0 0 24 24" fill={notificationsOn ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
        </ReactIconButton>
      </div>

      <div className="mbe4">
        <h2>CSS Parts Customization</h2>
        <p className="mbe2" style={{ color: 'var(--ag-text-secondary)', fontSize: '0.875rem' }}>
          Customize icon button appearance using CSS Shadow Parts without breaking encapsulation. The following are meant solely to show how to utilize CSS shadow parts to create custom toggle styles. They are NOT meant to represent best practices or good taste in toggle design!
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactIconButton className="custom-gradient-button" label="Gradient button">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </ReactIconButton>
        <ReactIconButton className="custom-gradient-button" label="Gradient star">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </ReactIconButton>
        <ReactIconButton className="custom-gradient-button" label="Gradient bookmark">
          <svg className="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
          </svg>
        </ReactIconButton>
      </div>
    </section>
  );
}
`,Es=JSON.parse('{"title":"Icon Button","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon-button.md","filePath":"components/icon-button.md"}'),ns={name:"components/icon-button.md"},xs=Object.assign(ns,{setup(F){return(e,t)=>(b(),y("div",null,[t[1]||(t[1]=a("h1",{id:"icon-button",tabindex:"-1"},[k("Icon Button "),a("a",{class:"header-anchor",href:"#icon-button","aria-label":'Permalink to "Icon Button"'},"​")],-1)),s(f),t[2]||(t[2]=a("p",null,"An accessible icon-only button component that displays a single icon with proper accessibility labeling. Icon buttons are ideal for toolbars, navigation, and actions where space is limited or the icon alone clearly conveys the action.",-1)),t[3]||(t[3]=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,[k("If you don't want SVG scaling, consider placing SVG directly in an "),a("code",null,"ag-button"),k(" or other solution.")])],-1)),t[4]||(t[4]=a("h2",{id:"examples",tabindex:"-1"},[k("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),s(S,{component:"icon-button","vue-code":d(X),"lit-code":d(ss),"react-code":d(is)},{vue:i(()=>[s(K)]),lit:i(()=>[...t[0]||(t[0]=[a("icon-button-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),t[5]||(t[5]=c("",33))]))}});export{Es as __pageData,xs as default};
