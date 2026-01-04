import { LitElement, html, svg } from 'lit';
import 'agnosticui-core/avatar';

export class AvatarLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  // Helper method for User icon SVG
  userIcon(size = 24) {
    return svg`
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    `;
  }

  // Helper method for UserCircle icon SVG
  userCircleIcon(size = 24) {
    return svg`
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
      </svg>
    `;
  }

  // Helper method for Mail icon SVG
  mailIcon(size = 24) {
    return svg`
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    `;
  }

  // Helper method for Check icon SVG
  checkIcon(size = 24) {
    return svg`
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    `;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Text Initials</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-avatar text="AB"></ag-avatar>
          <ag-avatar text="CD"></ag-avatar>
          <ag-avatar text="EF"></ag-avatar>
          <ag-avatar text="GH"></ag-avatar>
        </div>

        <div class="mbe4">
          <h2>With Images</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=1"
            img-alt="User 1"
          ></ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=2"
            img-alt="User 2"
          ></ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=3"
            img-alt="User 3"
          ></ag-avatar>
          <ag-avatar
            img-src="https://i.pravatar.cc/150?img=4"
            img-alt="User 4"
          ></ag-avatar>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-avatar text="XS" size="xs"></ag-avatar>
          <ag-avatar text="SM" size="sm"></ag-avatar>
          <ag-avatar text="MD" size="md"></ag-avatar>
          <ag-avatar text="LG" size="lg"></ag-avatar>
          <ag-avatar text="XL" size="xl"></ag-avatar>
        </div>

        <div class="mbe4">
          <h2>Shapes</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-avatar text="AB" shape="circle"></ag-avatar>
          <ag-avatar text="CD" shape="square"></ag-avatar>
          <ag-avatar text="EF" shape="rounded"></ag-avatar>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-avatar text="DF" variant="default"></ag-avatar>
          <ag-avatar text="IN" variant="info"></ag-avatar>
          <ag-avatar text="WN" variant="warning"></ag-avatar>
          <ag-avatar text="SC" variant="success"></ag-avatar>
          <ag-avatar text="ER" variant="error"></ag-avatar>
          <ag-avatar text="MC" variant="monochrome"></ag-avatar>
        </div>

        <div class="mbe4">
          <h2>With Icons</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-avatar>
            ${this.userIcon(24)}
          </ag-avatar>
          <ag-avatar size="lg">
            ${this.userCircleIcon(32)}
          </ag-avatar>
          <ag-avatar variant="info">
            ${this.mailIcon(24)}
          </ag-avatar>
          <ag-avatar variant="success">
            ${this.checkIcon(24)}
          </ag-avatar>
        </div>

        <div class="mbe4">
          <h2>Avatar Groups</h2>
          <p class="mbs2 mbe3">
            Group multiple avatars together to represent teams, collaborators, or participants.
          </p>
        </div>

        <div class="mbe4">
          <h2 class="mbe2">Text Avatars</h2>
          <ag-avatar-group class="avatar-group-bordered">
            <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
            <ag-avatar text="CD" variant="info" size="lg"></ag-avatar>
            <ag-avatar text="EF" variant="info" size="lg"></ag-avatar>
            <ag-avatar text="GH" variant="info" size="lg"></ag-avatar>
          </ag-avatar-group>
        </div>

        <div class="mbe4">
          <h2 class="mbe2">Image Avatars</h2>
          <ag-avatar-group class="avatar-group-bordered">
            <ag-avatar
              img-src="https://i.pravatar.cc/150?img=1"
              img-alt="User 1"
              size="lg"
            ></ag-avatar>
            <ag-avatar
              img-src="https://i.pravatar.cc/150?img=2"
              img-alt="User 2"
              size="lg"
            ></ag-avatar>
            <ag-avatar
              img-src="https://i.pravatar.cc/150?img=3"
              img-alt="User 3"
              size="lg"
            ></ag-avatar>
            <ag-avatar
              img-src="https://i.pravatar.cc/150?img=4"
              img-alt="User 4"
              size="lg"
            ></ag-avatar>
            <ag-avatar
              img-src="https://i.pravatar.cc/150?img=5"
              img-alt="User 5"
              size="lg"
            ></ag-avatar>
          </ag-avatar-group>
        </div>

        <div class="mbe4">
          <h2 class="mbe2">Mixed Content</h2>
          <ag-avatar-group class="avatar-group-bordered">
            <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
            <ag-avatar text="RL" variant="info" size="lg"></ag-avatar>
            <ag-avatar size="lg">
              ${this.userIcon(24)}
            </ag-avatar>
            <ag-avatar
              img-src="https://i.pravatar.cc/150?img=10"
              img-alt="User 1"
              size="lg"
            ></ag-avatar>
            <ag-avatar
              img-src="https://i.pravatar.cc/150?img=11"
              img-alt="User 2"
              size="lg"
            ></ag-avatar>
          </ag-avatar-group>
        </div>

        <div class="mbe4">
          <h2 class="mbe2">Different Sizes</h2>
          <div class="stacked-mobile mbe3">
            <ag-avatar-group class="avatar-group-bordered">
              <ag-avatar text="SM" size="sm"></ag-avatar>
              <ag-avatar text="SM" size="sm"></ag-avatar>
              <ag-avatar text="SM" size="sm"></ag-avatar>
            </ag-avatar-group>
          </div>
          <div class="stacked-mobile mbe3">
            <ag-avatar-group class="avatar-group-bordered">
              <ag-avatar text="MD" size="md"></ag-avatar>
              <ag-avatar text="MD" size="md"></ag-avatar>
              <ag-avatar text="MD" size="md"></ag-avatar>
            </ag-avatar-group>
          </div>
          <div class="stacked-mobile">
            <ag-avatar-group class="avatar-group-bordered">
              <ag-avatar text="XL" size="xl"></ag-avatar>
              <ag-avatar text="XL" size="xl"></ag-avatar>
              <ag-avatar text="XL" size="xl"></ag-avatar>
            </ag-avatar-group>
          </div>
        </div>

        <div class="mbe4">
          <h2 class="mbe2">With Variants</h2>
          <ag-avatar-group class="avatar-group-bordered">
            <ag-avatar text="DF" variant="default" size="lg"></ag-avatar>
            <ag-avatar text="IN" variant="info" size="lg"></ag-avatar>
            <ag-avatar text="WN" variant="warning" size="lg"></ag-avatar>
            <ag-avatar text="SC" variant="success" size="lg"></ag-avatar>
            <ag-avatar text="ER" variant="error" size="lg"></ag-avatar>
            <ag-avatar text="MC" variant="monochrome" size="lg"></ag-avatar>
          </ag-avatar-group>
        </div>

        <div class="mbe4">
          <h2>Avatar Group Custom Styling</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize avatar group layouts and effects.
          </p>
        </div>

        <div class="mbe4">
          <h2 class="mbe2">Custom Spacing (No Overlap)</h2>
          <ag-avatar-group class="custom-avatar-group">
            <ag-avatar
              img-src="https://i.pravatar.cc/150?img=20"
              img-alt="User 1"
              size="lg"
            ></ag-avatar>
            <ag-avatar
              img-src="https://i.pravatar.cc/150?img=21"
              img-alt="User 2"
              size="lg"
            ></ag-avatar>
            <ag-avatar
              img-src="https://i.pravatar.cc/150?img=22"
              img-alt="User 3"
              size="lg"
            ></ag-avatar>
            <ag-avatar
              img-src="https://i.pravatar.cc/150?img=23"
              img-alt="User 4"
              size="lg"
            ></ag-avatar>
          </ag-avatar-group>
        </div>

        <div class="mbe4">
          <h2 class="mbe2">Enhanced Hover Effects</h2>
          <ag-avatar-group class="stacked-group">
            <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
            <ag-avatar text="CD" variant="success" size="lg"></ag-avatar>
            <ag-avatar text="EF" variant="warning" size="lg"></ag-avatar>
            <ag-avatar text="GH" variant="error" size="lg"></ag-avatar>
          </ag-avatar-group>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the avatar's appearance without
            affecting the component's internal styling. The following are meant
            solely to show how to utilize CSS shadow parts to create custom avatar
            styles. They are NOT meant to represent best practices or good taste in
            avatar design!
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-avatar class="custom-avatar-gradient" text="GR"></ag-avatar>
          <ag-avatar
            class="custom-avatar-border"
            img-src="https://i.pravatar.cc/150?img=8"
            img-alt="Custom border"
          ></ag-avatar>
        </div>

        <style>
          /* Avatar Group base styling */
          .avatar-group-bordered ag-avatar::part(ag-avatar) {
            border: 2px solid white;
          }

          /* CSS Shadow Parts customization examples */
          .custom-avatar-gradient::part(ag-avatar) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: 3px solid #fff;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
            font-weight: 700;
          }

          .custom-avatar-border::part(ag-avatar) {
            border: 4px solid #10b981;
            box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
          }

          /* Avatar Group custom styling examples */
          .custom-avatar-group::part(ag-avatar-group) {
            gap: 0.5rem;
          }

          .custom-avatar-group ag-avatar::part(ag-avatar) {
            border: 3px solid #fff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .custom-avatar-group ag-avatar:not(:first-child) {
            margin-inline-start: 0;
          }

          .stacked-group ag-avatar::part(ag-avatar) {
            border: 3px solid #10b981;
          }

          .stacked-group ag-avatar {
            transition: all 0.3s ease;
          }

          .stacked-group ag-avatar:hover {
            transform: translateY(-8px) scale(1.1);
            z-index: 100 !important;
          }
        </style>
      </section>
    `;
  }
}

customElements.define('avatar-lit-examples', AvatarLitExamples);
