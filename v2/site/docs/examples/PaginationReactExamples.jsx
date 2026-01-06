import { useState } from "react";
import { ReactPagination } from "agnosticui-core/pagination/react";

export default function PaginationReactExamples() {
  const [basicPageFirstLast, setBasicPageFirstLast] = useState(5);
  const [basicPage, setBasicPage] = useState(5);
  const [basicPageMessage, setBasicPageMessage] = useState(null);
  const [basicPageMessageFirstLast, setBasicPageMessageFirstLast] = useState(null);
  const [borderedPage, setBorderedPage] = useState(3);
  const [offset2Page, setOffset2Page] = useState(25);
  const [offset1Page, setOffset1Page] = useState(25);
  const [spanishPage, setSpanishPage] = useState(1);
  const [smallPage, setSmallPage] = useState(3);
  const [largePage, setLargePage] = useState(50);
  const [monochromeCustomPage, setMonochromeCustomPage] = useState(5);

  const handleBasicPageChangeFirstLast = (event) => {
    setBasicPageFirstLast(event.detail.page);
    setBasicPageMessageFirstLast(`Current page: ${event.detail.page} of 20`);
  };

  const handleBasicPageChange = (event) => {
    setBasicPage(event.detail.page);
    setBasicPageMessage(`Current page: ${event.detail.page} of 20`);
  };

  const handleBorderedPageChange = (event) => {
    setBorderedPage(event.detail.page);
  };

  const handleOffset2PageChange = (event) => {
    setOffset2Page(event.detail.page);
  };

  const handleOffset1PageChange = (event) => {
    setOffset1Page(event.detail.page);
  };

  const handleSpanishPageChange = (event) => {
    setSpanishPage(event.detail.page);
  };

  const handleSmallPageChange = (event) => {
    setSmallPage(event.detail.page);
  };

  const handleLargePageChange = (event) => {
    setLargePage(event.detail.page);
  };

  const handleMonochromeCustomPageChange = (event) => {
    setMonochromeCustomPage(event.detail.page);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Basic Pagination</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={basicPage}
          totalPages={20}
          onPageChange={handleBasicPageChange}
        />
        {basicPageMessage && (
          <p style={{ margin: 0, padding: 0, fontSize: "var(--ag-font-size-sm)", color: "var(--ag-text-secondary)" }}>
            {basicPageMessage}
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>First Last Navigation Opt-In</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={basicPageFirstLast}
          totalPages={20}
          firstLastNavigation={true}
          onPageChange={handleBasicPageChangeFirstLast}
        />
        {basicPageMessageFirstLast && (
          <p style={{ margin: 0, padding: 0, fontSize: "var(--ag-font-size-sm)", color: "var(--ag-text-secondary)" }}>
            {basicPageMessageFirstLast}
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>Bordered Style</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={borderedPage}
          totalPages={15}
          bordered
          onPageChange={handleBorderedPageChange}
        />
      </div>

      <div className="mbe4">
        <h2>Offset Comparison</h2>
      </div>
      <p>Offset 2 (default) - shows 2 buttons on each side:</p>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={offset2Page}
          totalPages={50}
          offset={2}
          onPageChange={handleOffset2PageChange}
        />
      </div>
      <p style={{ margin: "1rem 0 0.5rem", fontSize: "0.875rem", color: "var(--ag-text-secondary)" }}>
        Offset 1 - shows 1 button on each side:
      </p>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={offset1Page}
          totalPages={50}
          offset={1}
          onPageChange={handleOffset1PageChange}
        />
      </div>

      <div className="mbe4">
        <h2>Alignment Options</h2>
      </div>
      <p>Justify 'start', 'center', and 'end' respectively:</p>
      <div className="stacked-mobile mbe4">
        <ReactPagination current={1} totalPages={10} justify="start" />
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination current={1} totalPages={10} justify="center" />
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination current={1} totalPages={10} justify="end" />
      </div>

      <div className="mbe4">
        <h2>Custom Navigation Labels (Spanish)</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={spanishPage}
          totalPages={10}
          firstLastNavigation={true}
          navigationLabels={{
            first: "Primera",
            previous: "Anterior",
            next: "Siguiente",
            last: "Última",
          }}
          onPageChange={handleSpanishPageChange}
        />
      </div>

      <div className="mbe4">
        <h2>Small Page Count</h2>
      </div>
      <p>When there are few pages, all page numbers are shown:</p>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={smallPage}
          totalPages={5}
          onPageChange={handleSmallPageChange}
        />
      </div>

      <div className="mbe4">
        <h2>Large Page Count</h2>
      </div>
      <p>With many pages, ellipsis (...) indicates skipped pages:</p>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          current={largePage}
          totalPages={100}
          onPageChange={handleLargePageChange}
        />
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization (Monochrome)</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactPagination
          className="monochrome-custom-pagination"
          current={monochromeCustomPage}
          totalPages={10}
          onPageChange={handleMonochromeCustomPageChange}
        />
      </div>
    </section>
  );
}
