import 'agnostic-react/dist/common.min.css';
import 'agnostic-react/dist/esm/index.css';
import { Breadcrumb } from "agnostic-react";

const trailOfTennisRoutes = [
  {
    label: "Tennis",
    url: "#tennis",
  },
  {
    label: "Superstars",
    url: "#tennis-superstars",
  },
  {
    label: "Serena Williams",
    url: "#tennis-superstars-serena",
  },
];

export default function React() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Avatars
      </div>
      <Breadcrumb routes={ trailOfTennisRoutes } />
      <div className="mbe16" />
      <Breadcrumb
        type="slash"
        routes={ trailOfTennisRoutes }
      />
      <div className="mbe16" />
      <Breadcrumb
        type="bullet"
        routes={ trailOfTennisRoutes }
      />
      <div className="mbe16" />
      <Breadcrumb
        type="arrow"
        routes={ trailOfTennisRoutes }
      />
      <div className="mbe16" />
      <Breadcrumb routes={[{ label: 'A single route looks "link-less"' }]} />
      <div className="mbe16" />
      <Breadcrumb routes={[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]} /> 
    </section>
  );
}
