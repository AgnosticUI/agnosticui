import { useEffect, useState } from 'react';
import "agnostic-react/dist/esm/index.css";
import { Pagination } from 'agnostic-react';
import { usePagination } from "agnostic-helpers/dist/index.esm";

export default function React() {
  const [page, setPage] = useState(1);
  const paging = usePagination({ offset: 2 });
  // usePagination will generate your paging controls
  const pages = paging.generate(page, 20);

  useEffect(() => {
    // 1. `onPageChange` fires when a user clicks on a new page
    // 2. That calls `setPage` which `onPageChange` is pointed to
    // 3. `useEffect` here fires as we have the `page` dependency
    // listed in our dependencies array below
    // 4. We feed the new page into `paging.generate` and rerender
    paging.generate(page, 20);
  }, [page, pages, paging]);

  // See https://docs.astro.build/en/reference/api-reference/#importmeta
  return import.meta.env.SSR ? <></> : <section className="mbe24">
    <div className="h4 mbe24 flex items-center">
      <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Close
    </div>
    <Pagination onPageChange={setPage} current={page} pages={pages} ariaLabel="Pagination to help navigate table" justify="center" />
  </section>
}
