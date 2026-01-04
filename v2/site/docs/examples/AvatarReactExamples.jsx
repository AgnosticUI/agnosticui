import { ReactAvatar, ReactAvatarGroup } from "agnosticui-core/avatar/react";
import { User, UserCircle, Mail, Check } from "lucide-react";

export default function AvatarReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Text Initials</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactAvatar text="AB" />
        <ReactAvatar text="CD" />
        <ReactAvatar text="EF" />
        <ReactAvatar text="GH" />
      </div>

      <div className="mbe4">
        <h2>With Images</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactAvatar
          imgSrc="https://i.pravatar.cc/150?img=1"
          imgAlt="User 1"
        />
        <ReactAvatar
          imgSrc="https://i.pravatar.cc/150?img=2"
          imgAlt="User 2"
        />
        <ReactAvatar
          imgSrc="https://i.pravatar.cc/150?img=3"
          imgAlt="User 3"
        />
        <ReactAvatar
          imgSrc="https://i.pravatar.cc/150?img=4"
          imgAlt="User 4"
        />
      </div>

      <div className="mbe4">
        <h2>Sizes</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactAvatar text="XS" size="xs" />
        <ReactAvatar text="SM" size="sm" />
        <ReactAvatar text="MD" size="md" />
        <ReactAvatar text="LG" size="lg" />
        <ReactAvatar text="XL" size="xl" />
      </div>

      <div className="mbe4">
        <h2>Shapes</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactAvatar text="AB" shape="circle" />
        <ReactAvatar text="CD" shape="square" />
        <ReactAvatar text="EF" shape="rounded" />
      </div>

      <div className="mbe4">
        <h2>Variants</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactAvatar text="DF" variant="default" />
        <ReactAvatar text="IN" variant="info" />
        <ReactAvatar text="WN" variant="warning" />
        <ReactAvatar text="SC" variant="success" />
        <ReactAvatar text="ER" variant="error" />
        <ReactAvatar text="MC" variant="monochrome" />
      </div>

      <div className="mbe4">
        <h2>With Icons</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactAvatar>
          <User size={24} />
        </ReactAvatar>
        <ReactAvatar size="lg">
          <UserCircle size={32} />
        </ReactAvatar>
        <ReactAvatar variant="info">
          <Mail size={24} />
        </ReactAvatar>
        <ReactAvatar variant="success">
          <Check size={24} />
        </ReactAvatar>
      </div>

      <div className="mbe4">
        <h2>Avatar Groups</h2>
        <p className="mbs2 mbe3">
          Group multiple avatars together to represent teams, collaborators, or participants.
        </p>
      </div>

      <div className="mbe4">
        <h2 className="mbe2">Text Avatars</h2>
        <ReactAvatarGroup className="avatar-group-bordered">
          <ReactAvatar text="AB" variant="info" size="lg" />
          <ReactAvatar text="CD" variant="info" size="lg" />
          <ReactAvatar text="EF" variant="info" size="lg" />
          <ReactAvatar text="GH" variant="info" size="lg" />
        </ReactAvatarGroup>
      </div>

      <div className="mbe4">
        <h2 className="mbe2">Image Avatars</h2>
        <ReactAvatarGroup className="avatar-group-bordered">
          <ReactAvatar
            imgSrc="https://i.pravatar.cc/150?img=1"
            imgAlt="User 1"
            size="lg"
          />
          <ReactAvatar
            imgSrc="https://i.pravatar.cc/150?img=2"
            imgAlt="User 2"
            size="lg"
          />
          <ReactAvatar
            imgSrc="https://i.pravatar.cc/150?img=3"
            imgAlt="User 3"
            size="lg"
          />
          <ReactAvatar
            imgSrc="https://i.pravatar.cc/150?img=4"
            imgAlt="User 4"
            size="lg"
          />
          <ReactAvatar
            imgSrc="https://i.pravatar.cc/150?img=5"
            imgAlt="User 5"
            size="lg"
          />
        </ReactAvatarGroup>
      </div>

      <div className="mbe4">
        <h2 className="mbe2">Mixed Content</h2>
        <ReactAvatarGroup className="avatar-group-bordered">
          <ReactAvatar text="AB" variant="info" size="lg" />
          <ReactAvatar text="RL" variant="info" size="lg" />
          <ReactAvatar size="lg">
            <User size={24} />
          </ReactAvatar>
          <ReactAvatar
            imgSrc="https://i.pravatar.cc/150?img=10"
            imgAlt="User 1"
            size="lg"
          />
          <ReactAvatar
            imgSrc="https://i.pravatar.cc/150?img=11"
            imgAlt="User 2"
            size="lg"
          />
        </ReactAvatarGroup>
      </div>

      <div className="mbe4">
        <h2 className="mbe2">Different Sizes</h2>
        <div className="stacked-mobile mbe3">
          <ReactAvatarGroup className="avatar-group-bordered">
            <ReactAvatar text="SM" size="sm" />
            <ReactAvatar text="SM" size="sm" />
            <ReactAvatar text="SM" size="sm" />
          </ReactAvatarGroup>
        </div>
        <div className="stacked-mobile mbe3">
          <ReactAvatarGroup className="avatar-group-bordered">
            <ReactAvatar text="MD" size="md" />
            <ReactAvatar text="MD" size="md" />
            <ReactAvatar text="MD" size="md" />
          </ReactAvatarGroup>
        </div>
        <div className="stacked-mobile">
          <ReactAvatarGroup className="avatar-group-bordered">
            <ReactAvatar text="XL" size="xl" />
            <ReactAvatar text="XL" size="xl" />
            <ReactAvatar text="XL" size="xl" />
          </ReactAvatarGroup>
        </div>
      </div>

      <div className="mbe4">
        <h2 className="mbe2">With Variants</h2>
        <ReactAvatarGroup className="avatar-group-bordered">
          <ReactAvatar text="DF" variant="default" size="lg" />
          <ReactAvatar text="IN" variant="info" size="lg" />
          <ReactAvatar text="WN" variant="warning" size="lg" />
          <ReactAvatar text="SC" variant="success" size="lg" />
          <ReactAvatar text="ER" variant="error" size="lg" />
          <ReactAvatar text="MC" variant="monochrome" size="lg" />
        </ReactAvatarGroup>
      </div>

      <div className="mbe4">
        <h2>Avatar Group Custom Styling</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize avatar group layouts and effects.
        </p>
      </div>

      <div className="mbe4">
        <h2 className="mbe2">Custom Spacing (No Overlap)</h2>
        <ReactAvatarGroup className="custom-avatar-group">
          <ReactAvatar
            imgSrc="https://i.pravatar.cc/150?img=20"
            imgAlt="User 1"
            size="lg"
          />
          <ReactAvatar
            imgSrc="https://i.pravatar.cc/150?img=21"
            imgAlt="User 2"
            size="lg"
          />
          <ReactAvatar
            imgSrc="https://i.pravatar.cc/150?img=22"
            imgAlt="User 3"
            size="lg"
          />
          <ReactAvatar
            imgSrc="https://i.pravatar.cc/150?img=23"
            imgAlt="User 4"
            size="lg"
          />
        </ReactAvatarGroup>
      </div>

      <div className="mbe4">
        <h2 className="mbe2">Enhanced Hover Effects</h2>
        <ReactAvatarGroup className="stacked-group">
          <ReactAvatar text="AB" variant="info" size="lg" />
          <ReactAvatar text="CD" variant="success" size="lg" />
          <ReactAvatar text="EF" variant="warning" size="lg" />
          <ReactAvatar text="GH" variant="error" size="lg" />
        </ReactAvatarGroup>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the avatar's appearance without
          affecting the component's internal styling. The following are meant
          solely to show how to utilize CSS shadow parts to create custom avatar
          styles. They are NOT meant to represent best practices or good taste in
          avatar design!
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactAvatar className="custom-avatar-gradient" text="GR" />
        <ReactAvatar
          className="custom-avatar-border"
          imgSrc="https://i.pravatar.cc/150?img=8"
          imgAlt="Custom border"
        />
      </div>

      {/* CSS Shadow Parts customization styles */}
      <style>{`
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
      `}</style>
    </section>
  );
}
