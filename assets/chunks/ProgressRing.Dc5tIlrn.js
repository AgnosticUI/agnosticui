import{i as u,z as i,a as h,x as m}from"./Button.DkmThuAs.js";var f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,s=(n,r,e,o)=>{for(var a=o>1?void 0:o?y(r,e):r,g=n.length-1,l;g>=0;g--)(l=n[g])&&(a=(o?l(r,e,a):l(a))||a);return o&&a&&f(r,e,a),a};const p=100,b=10,v=(p-b)/2,c=2*Math.PI*v,d=class extends h{constructor(){super(...arguments),this._value=0,this.noAnimation=!1}get value(){return this._value}set value(r){const e=Math.max(0,Math.min(100,Number(r)||0));this._value!==e&&(this._value=e,this.requestUpdate())}render(){const r=c-this._value/100*c,e=c.toFixed(4);return m`
      <div
        part="ag-progress-ring"
        class="progress-ring"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this._value}
        aria-valuetext=${`${this._value}%`}
        aria-label=${this.label||"Progress"}
      >
        <svg viewBox="0 0 ${p} ${p}">
          <circle part="ag-track" class="track" r="${v}"></circle>
          <circle
            part="ag-indicator"
            class="indicator"
            r="${v}"
            style="stroke-dasharray: ${e}; stroke-dashoffset: ${r}px"
          ></circle>
        </svg>

        <div part="ag-label" class="label">
          <slot>${this._value}%</slot>
        </div>
      </div>
    `}};d.styles=u`
    :host {
      --ag-progress-ring-size: var(--ag-progress-ring-size-base, 6rem);
      --ag-progress-ring-track-color: var(--ag-border-subtle);
      --ag-progress-ring-indicator-color: var(--ag-primary);
      --ag-progress-ring-transition-duration: var(--ag-motion-medium);

      display: inline-flex;
      vertical-align: middle;
      width: var(--ag-progress-ring-size);
      height: var(--ag-progress-ring-size);
    }

    /* Size variants */
    :host([size="small"]) { --ag-progress-ring-size: var(--ag-progress-ring-size-small, 5rem); }
    :host([size="large"])  { --ag-progress-ring-size: var(--ag-progress-ring-size-large, 7rem); }

    /* Color variants — fully token-driven */
    :host([variant="primary"]) { --ag-progress-ring-indicator-color: var(--ag-primary); }
    :host([variant="success"]) { --ag-progress-ring-indicator-color: var(--ag-success); }
    :host([variant="warning"]) { --ag-progress-ring-indicator-color: var(--ag-warning); }
    :host([variant="danger"])  { --ag-progress-ring-indicator-color: var(--ag-danger); }
    :host([variant="info"])    { --ag-progress-ring-indicator-color: var(--ag-info); }

    .progress-ring {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
      overflow: visible; /* Critical for Safari & stroke-linecap */
    }

    circle {
      fill: none;
      cx: 50;
      cy: 50;
      stroke-width: 10;
    }

    .track {
      stroke: var(--ag-progress-ring-track-color);
    }

    .indicator {
      stroke: var(--ag-progress-ring-indicator-color);
      stroke-linecap: round;
      transition: stroke-dashoffset var(--ag-progress-ring-transition-duration) ease;
    }

    .label {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--ag-font-size-sm);
      font-weight: 600;
      color: var(--ag-text-primary);
      user-select: none;
      pointer-events: none;
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      :host(:not([no-animation="false"])) .indicator {
        transition: none;
      }
    }
    :host([no-animation]) .indicator {
      transition: none;
    }
  `;let t=d;s([i({type:Number,reflect:!0})],t.prototype,"value",1);s([i({reflect:!0})],t.prototype,"size",2);s([i({reflect:!0})],t.prototype,"variant",2);s([i()],t.prototype,"label",2);s([i({type:Boolean,reflect:!0,attribute:"no-animation"})],t.prototype,"noAnimation",2);customElements.get("ag-progress-ring")||customElements.define("ag-progress-ring",t);
