import "agnostic-react/dist/esm/index.css";
import { Tooltip } from "agnostic-react";
export default function React() {
  return (
    <>
    <div className="text-center tooltips-container">
      <div className="h4 mbe32 flex items-center">
        <img
          width="24"
          height="24"
          src="/assets/React-icon.svg"
          alt="React logo"
          className="mie12"
        />React Tooltip
      </div>
      <section className="mbs56 mbe40 flex-inline justify-between w-100">
        <Tooltip placement="top-start" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (top-start). Hover me!</span>
        </Tooltip>
        <Tooltip placement="top" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (top). Hover me!</span>
        </Tooltip>
        <Tooltip placement="top-right" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (top-right). Hover me!</span>
        </Tooltip>
      </section>
      <section
        className="flex flex-column items-center"
        style={{gap: 'var(--fluid-18)'}}
      >
        <Tooltip placement="left-start" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (left-start). Hover me!</span>
        </Tooltip>
        <Tooltip placement="left" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (left). Hover me!</span>
        </Tooltip>
        <Tooltip placement="left-end" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (left-end). Hover me!</span>
        </Tooltip>
        <Tooltip placement="right-start" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (right-start). Hover me!</span>
        </Tooltip>
        <Tooltip placement="right" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (right). Hover me!</span>
        </Tooltip>
        <Tooltip placement="right-end" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (right-end). Hover me!</span>
        </Tooltip>
      </section>
      <section className="mbs56 mbe40 flex-inline justify-between w-100">
        <Tooltip placement="bottom-start" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (bottom-start). Hover me!</span>
        </Tooltip>
        <Tooltip placement="bottom" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (bottom). Hover me!</span>
        </Tooltip>
        <Tooltip placement="bottom-end" label="Tooltip hover text…">
          <span className='demo-tooltip'>Tooltip (bottom-end). Hover me!</span>
        </Tooltip>
      </section>
    </div>
    </>
  );
}
