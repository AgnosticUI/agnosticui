import "agnostic-react/dist/esm/index.css";
import { Progress } from "agnostic-react";

export default function ReactAlert() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Close
      </div>
      <Progress value={30} max={100} />
    </section>
  );
}
