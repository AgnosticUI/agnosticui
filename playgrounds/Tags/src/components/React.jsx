import "agnostic-react/dist/esm/index.css";
import { Tag } from "agnostic-react";

export default function ReactAlert() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Close
      </div>
      <Tag type="success" isUppercase>success</Tag>
      <Tag type="info" isUppercase>info</Tag>
      <Tag type="warning" isUppercase>warning</Tag>
      <Tag type="error" isUppercase>error</Tag>
      <Tag shape="pill" type="success" isUppercase>You did it!</Tag>
      <Tag shape="circle" type="error" isUppercase>2</Tag>
      <Tag shape="round" type="error">Round</Tag>
      <Tag shape="round" type="success">Round</Tag>
    </section>
  );
}
