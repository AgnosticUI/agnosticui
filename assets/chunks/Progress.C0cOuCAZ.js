import{a as l,i as b,Q as p,x as d,z as a}from"./Button.CFkPNK98.js";var c=Object.defineProperty,s=(o,g,t,u)=>{for(var r=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=n(g,t,r)||r);return r&&c(g,t,r),r};class e extends l{constructor(){super(...arguments),this.max=100,this.label="",this.size="medium"}static get styles(){return b`
      :host {
        display: block;
        width: var(--ag-progress-width, 100%);
      }

      .progress-wrapper {
        display: block;
        width: 100%;
      }

      .progress-label {
        /* Visually hidden but accessible */
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      progress {
        width: 100%;
        height: var(--ag-progress-height, var(--ag-space-3));
        appearance: none;
        border: none;
        border-radius: var(--ag-radius-lg);
        background-color: var(--ag-background-secondary);
      }

      :host([size="small"]) progress {
        --ag-progress-height: var(--ag-space-2);
      }

      :host([size="medium"]) progress {
        --ag-progress-height: var(--ag-space-3);
      }

      :host([size="large"]) progress {
        --ag-progress-height: var(--ag-space-4);
      }

      /* WebKit/Blink browsers (Chrome, Safari, Edge) */
      progress::-webkit-progress-bar {
        background-color: var(--ag-background-secondary);
        border-radius: var(--ag-radius-lg);
      }

      progress::-webkit-progress-value {
        background-color: var(--ag-primary);
        border-radius: var(--ag-radius-lg);
      }

      /* Firefox */
      progress::-moz-progress-bar {
        background-color: var(--ag-primary);
        border-radius: var(--ag-radius-lg);
      }

      /* Indeterminate state animations */
      progress:indeterminate {
        background: linear-gradient(
          to right,
          var(--ag-background-secondary) 0%,
          var(--ag-primary) 50%,
          var(--ag-background-secondary) 100%
        );
        background-size: 200% 100%;
        animation: progress-indeterminate 2s linear infinite;
      }

      progress:indeterminate::-webkit-progress-bar {
        background: transparent;
      }

      progress:indeterminate::-moz-progress-bar {
        background: linear-gradient(
          to right,
          var(--ag-background-secondary) 0%,
          var(--ag-primary) 50%,
          var(--ag-background-secondary) 100%
        );
        background-size: 200% 100%;
        animation: progress-indeterminate 2s linear infinite;
      }

      @keyframes progress-indeterminate {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
    `}render(){return d`
      <div class="progress-wrapper" part="ag-progress-wrapper">
        ${this.label?d`<label for="progress" class="progress-label" part="progress-label">${this.label}</label>`:""}
        <progress
          id="progress"
          part="ag-progress-bar"
          .value=${p(this.value)}
          .max=${this.max}
          aria-label=${p(this.label||void 0)}
        ></progress>
      </div>
    `}}s([a({type:Number})],e.prototype,"value");s([a({type:Number})],e.prototype,"max");s([a({type:String})],e.prototype,"label");s([a({type:String,reflect:!0})],e.prototype,"size");customElements.get("ag-progress")||customElements.define("ag-progress",e);
