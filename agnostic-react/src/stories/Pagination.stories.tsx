import { useEffect, useState } from 'react';
import { Meta } from '@storybook/react';
import { usePagination } from '../hooks/usePagination';
import { Pagination } from '../Pagination';

export default {
  title: 'AG—React (Beta)/Pagination',
  component: Pagination,
} as Meta;

export const Default = () => {
  const [page, setPage] = useState(1);
  const paging = usePagination({ offset: 2 });
  const pages = paging.generate(page, 20);

  useEffect(() => {
    paging.generate(page, 20);
  }, [page, pages, paging]);

  return (
    <Pagination
      onPageChange={setPage}
      current={page}
      pages={pages}
      ariaLabel="Pagination to help navigate table"
    />
  );
};

export const NoFirstLast = () => {
  const [page, setPage] = useState(1);
  const paging = usePagination({ offset: 2 });
  const pages = paging.generate(page, 20);

  useEffect(() => {
    paging.generate(page, 20);
  }, [page, pages, paging]);

  return <Pagination isFirstLast={false} onPageChange={setPage} current={page} pages={pages} />;
};

export const Bordered = () => {
  const [page, setPage] = useState(1);
  const paging = usePagination({ offset: 2 });
  const pages = paging.generate(page, 20);

  useEffect(() => {
    paging.generate(page, 20);
  }, [page, pages, paging]);

  return <Pagination isBordered onPageChange={setPage} current={page} pages={pages} />;
};

export const CenterJustified = () => {
  const [page, setPage] = useState(1);
  const paging = usePagination({ offset: 2 });
  const pages = paging.generate(page, 20);

  useEffect(() => {
    paging.generate(page, 20);
  }, [page, pages, paging]);

  return <Pagination justify="center" onPageChange={setPage} current={page} pages={pages} />;
};

export const EndJustified = () => {
  const [page, setPage] = useState(1);
  const paging = usePagination({ offset: 2 });
  const pages = paging.generate(page, 20);

  useEffect(() => {
    paging.generate(page, 20);
  }, [page, pages, paging]);

  return <Pagination justify="end" onPageChange={setPage} current={page} pages={pages} />;
};
