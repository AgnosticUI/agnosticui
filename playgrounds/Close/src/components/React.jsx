import "agnostic-react/dist/esm/index.css";
import { Close } from "agnostic-react";

export default function ReactAlert() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Close
      </div>
      <Close />
      <Close size="small" />
      <Close size="large" />
      <Close size="xlarge" /> 
    </section>
  );
}
