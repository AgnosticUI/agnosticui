import "agnostic-react/dist/esm/index.css";
import { Icon, Input } from "agnostic-react";
export default function ReactAlert() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Icons
      </div>
      <div className="mbe24" />
      <Input
        id="1"
        size="small"
        placeholder="Enter name…"
        label="Small input"
        type="text"
        />
      <div className="mbe24">
        <Input
          id="2"
          placeholder="Enter name…"
          label="Default input"
          type="text"
          />
      </div>
      <div className="mbe24">
        <Input
          id="3"
          size="large"
          placeholder="Enter name…"
          label="Large input"
          type="text"
          />
      </div>
      <div className="mbe24">
        <Input
          id="4"
          isInline
          placeholder="Enter name…"
          label="Inline input"
          type="text"
          />
      </div>
      <div className="mbe24">
        <Input
          id="4b"
          isRounded
          placeholder="Enter name…"
          label="Rounded input"
          type="text"
          />
      </div>
      <div className="mbe24">
        <Input
          id="6"
          isUnderlined
          placeholder="Enter name…"
          label="Underlined input"
          type="text"
          />
      </div>
      <div className="mbe24">
        <Input
          id="7"
          isUnderlined
          isUnderlinedWithBackground
          placeholder="Enter name…"
          label="Underlined with background"
          type="text"
          />
      </div>
      <div className="mbe24">
        <Input
          id="10"
          helpText="Some useful help text can go here"
          placeholder="Enter something…"
          label="Help text"
          type="text"
          />
      </div>
      <div className="mbe24">
        <Input
          id="9"
          isInvalid
          invalidText="It's impossible to have a string that is cool enough for this field."
          placeholder="Enter a very cool string…"
          label="Cool factor"
          type="text"
          />
      </div>
      <div className="mbe24">
        <Input
        id="10b"
        hasLeftAddon
        addOnLeft={
        <Icon
          size={18}
          type="success"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            >
            <path
              fillRule="evenodd"
              d="M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z"
              />
          </svg>
        </Icon>
        }
        hasRightAddon
        addOnRight={
        <Icon
          size={18}
          type="info"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            >
            <path d="M13 7.5a1 1 0 11-2 0 1 1 0 012 0zm-3 3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v4.25h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.75V12h-.75a.75.75 0 01-.75-.75z" />
            <path
              fillRule="evenodd"
              d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
              />
          </svg>
        </Icon>
        }
        label="Input with addons"
        />
      </div>
      <div className="mbe24">
        <Input
          id="11"
          label="Textarea"
          type="textarea"
          />
      </div>
      <div className="mbe24">
        <Input
          id="12"
          label="Textarea small"
          type="textarea"
          size="small"
          rows={10}
          cols={5}
          />
      </div>
      <div className="mbe24">
        <Input
          id="13"
          label="Textarea large"
          type="textarea"
          size="large"
          rows={10}
          cols={5}
          />
      </div>
    </section>
  );
}
