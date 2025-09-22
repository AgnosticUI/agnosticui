import{a as i,i as s,x as f}from"./lit-element.DPA3KJ4y.js";const p=i`
  :host {
    display: block;
    font-family: 'Orbitron', 'Exo 2', 'Rajdhani', 'Audiowide', monospace, sans-serif;
  }

  .neon-accordion-wrapper {
    border-radius: 12px;
    padding: 24px;
  }

  /* Style slotted accordion items */
  ::slotted(ag-accordion-item) {
    background: #1a1a1a;
    margin-bottom: 24px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 212, 255, 0.3),
                0 16px 64px rgba(255, 0, 110, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1),
                box-shadow 500ms cubic-bezier(0.23, 1, 0.32, 1);
    /* Remove overflow: hidden to allow focus rings to be visible */
    border: 1px solid #00d4ff;
  }

  ::slotted(ag-accordion-item:hover) {
    box-shadow: 0 0 20px rgba(131, 56, 236, 0.5),
                0 0 40px rgba(131, 56, 236, 0.3),
                0 0 80px rgba(131, 56, 236, 0.1);
    transform: translateY(-2px) scale(1.02);
    filter: brightness(1.2) saturate(1.3);
  }

  ::slotted(ag-accordion-item[open]) {
    box-shadow: 0 0 10px #8338ec,
                0 0 20px #8338ec,
                0 0 40px #8338ec;
    border-color: #8338ec;
  }

  /* Style the accordion header wrapper */
  ::slotted(ag-accordion-item)::part(accordion-header-wrapper) {
    margin: 0;
    padding: 0;
    border-radius: 12px 12px 0 0;
  }

  /* Style the accordion heading */
  ::slotted(ag-accordion-item)::part(accordion-heading) {
    margin: 0;
    padding: 0;
  }

  /* Style the accordion header button */
  ::slotted(ag-accordion-item)::part(accordion-header) {
    padding: 24px 32px;
    background: linear-gradient(135deg, #00d4ff 0%, #8338ec 100%);
    font-size: 22px;
    font-weight: 700;
    line-height: 1.1;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                transform 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    text-shadow: 0 0 5px #00d4ff,
                 0 0 10px #00d4ff,
                 0 0 15px #00d4ff;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border: none;
    width: 100%;
    text-align: left;
    border-radius: 12px 12px 0 0;
  }

  ::slotted(ag-accordion-item)::part(accordion-header):hover {
    background: linear-gradient(135deg, #ff006e 0%, #ff6b35 100%);
    text-shadow: 0 0 5px #ff006e,
                 0 0 10px #ff006e,
                 0 0 15px #ff006e;
    transform: scale(1.02);
  }

  ::slotted(ag-accordion-item)::part(accordion-header):focus-visible {
    outline: 2px solid var(--agnostic-focus, #2563eb);
    outline-offset: 2px;
    transition: outline 0.2s ease;
    box-shadow: 0 0 10px var(--agnostic-focus, #2563eb),
                inset 0 0 10px rgba(37, 99, 235, 0.2);
  }

  /* Style the accordion content */
  ::slotted(ag-accordion-item)::part(accordion-content) {
    padding: 32px;
    background: #1a1a1a;
    color: #ffffff;
    font-size: 18px;
    line-height: 1.4;
    border-top: 1px solid #00d4ff;
    border-radius: 0 0 12px 12px;
  }

  /* Accessibility adaptations for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    ::slotted(ag-accordion-item) {
      transition: all 200ms ease,
                  box-shadow 200ms ease;
    }

    ::slotted(ag-accordion-item)::part(accordion-header) {
      transition: all 300ms ease,
                  transform 300ms ease;
    }

    ::slotted(ag-accordion-item:hover) {
      transform: none;
    }

    ::slotted(ag-accordion-item)::part(accordion-header):hover {
      transform: none;
    }
  }

  /* High contrast adaptations */
  @media (prefers-contrast: high) {
    .neon-accordion-wrapper {
      background: #000000;
    }

    ::slotted(ag-accordion-item) {
      background: #000000;
      border-color: #ffffff;
    }

    ::slotted(ag-accordion-item)::part(accordion-content) {
      background: #000000;
    }

    ::slotted(ag-accordion-item)::part(accordion-header):focus-visible {
      outline: 3px solid var(--agnostic-focus, #2563eb);
    }
  }

  /* Reduce glow effects for transparency preferences */
  @media (prefers-reduced-transparency) {
    ::slotted(ag-accordion-item) {
      box-shadow: 0 2px 4px rgba(0, 212, 255, 0.5);
    }

    ::slotted(ag-accordion-item:hover) {
      box-shadow: 0 2px 8px rgba(131, 56, 236, 0.3);
    }

    ::slotted(ag-accordion-item[open]) {
      box-shadow: 0 2px 4px rgba(131, 56, 236, 0.5);
    }
  }

  /* Neon theme is inherently dark, but provide data-theme support for consistency */
  /* Light theme override if user explicitly sets data-theme="light" */
  :host-context([data-theme="light"]) .neon-accordion-wrapper {
    background: #f8fafc;
  }

  :host-context([data-theme="light"]) ::slotted(ag-accordion-item) {
    background: #ffffff;
    border-color: #3b82f6;
    box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2),
                0 1px 3px rgba(59, 130, 246, 0.1);
  }

  :host-context([data-theme="light"]) ::slotted(ag-accordion-item:hover) {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.4),
                0 0 40px rgba(59, 130, 246, 0.2);
  }

  :host-context([data-theme="light"]) ::slotted(ag-accordion-item[open]) {
    box-shadow: 0 0 10px #3b82f6,
                0 0 20px #3b82f6;
    border-color: #3b82f6;
  }

  :host-context([data-theme="light"]) ::slotted(ag-accordion-item)::part(accordion-header) {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    text-shadow: 0 0 5px #3b82f6,
                 0 0 10px #3b82f6;
  }

  :host-context([data-theme="light"]) ::slotted(ag-accordion-item)::part(accordion-header):hover {
    background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
  }

  :host-context([data-theme="light"]) ::slotted(ag-accordion-item)::part(accordion-content) {
    background: #ffffff;
    color: #374151;
    border-top-color: #3b82f6;
  }

  /* Fallback to system preference only if no data-theme is set */
  @media (prefers-color-scheme: light) {
    :host-context(:root:not([data-theme])) .neon-accordion-wrapper {
      background: #f8fafc;
    }

    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item) {
      background: #ffffff;
      border-color: #3b82f6;
      box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2),
                  0 1px 3px rgba(59, 130, 246, 0.1);
    }

    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item:hover) {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4),
                  0 0 40px rgba(59, 130, 246, 0.2);
    }

    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item[open]) {
      box-shadow: 0 0 10px #3b82f6,
                  0 0 20px #3b82f6;
      border-color: #3b82f6;
    }

    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item)::part(accordion-header) {
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      text-shadow: 0 0 5px #3b82f6,
                   0 0 10px #3b82f6;
    }

    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item)::part(accordion-header):hover {
      background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
    }

    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item)::part(accordion-content) {
      background: #ffffff;
      color: #374151;
      border-top-color: #3b82f6;
    }
  }
`,l=e=>Array.from(e.children).filter(o=>"disabled"in o&&"focus"in o&&typeof o.focus=="function"&&!o.disabled),g=(e,o)=>{const d=e,t=l(o);if(t.length===0)return;const{key:c,accordionItem:n}=d.detail,r=t.indexOf(n);if(r===-1)return;let a=r;switch(c){case"ArrowDown":a=(r+1)%t.length;break;case"ArrowUp":a=(r-1+t.length)%t.length;break;case"Home":a=0;break;case"End":a=t.length-1;break;default:return}a!==r&&t[a].focus()},b=e=>{e.addEventListener("accordion-keydown",o=>g(o,e))};class h extends s{static styles=[p];constructor(){super(),b(this)}render(){return f`
      <div class="neon-accordion-wrapper">
        <slot></slot>
      </div>
    `}}customElements.get("neon-accordion")||customElements.define("neon-accordion",h);export{h as NeonAccordion};
