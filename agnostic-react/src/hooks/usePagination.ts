export type allowedOffsets = 1 | 2;
export type GAP = '...';
export type PageArrayItem = number | GAP;

export interface PaginationProps {
  offset?: allowedOffsets;
  onChange?: (page: number, pages: PageArrayItem[]) => void;
}

export const usePagination = ({ offset = 2 }: PaginationProps) => {
  const getPaddedArray = (
    filtered: PageArrayItem[],
    shouldIncludeLeftDots: boolean,
    shouldIncludeRightDots: boolean,
    totalCount: number,
  ) => {
    if (shouldIncludeLeftDots) {
      filtered.unshift('...');
    }
    if (shouldIncludeRightDots) {
      filtered.push('...');
    }
    if (totalCount <= 1) {
      return [1];
    }
    return [1, ...filtered, totalCount];
  };

  const generatePagingPaddedByOne = (current: number, totalPageCount: number) => {
    const center = [current - 1, current, current + 1];
    const filteredCenter: PageArrayItem[] = center.filter((p) => p > 1 && p < totalPageCount);
    const includeLeftDots = current > 3;
    const includeRightDots = current < totalPageCount - 2;
    return getPaddedArray(filteredCenter, includeLeftDots, includeRightDots, totalPageCount);
  };

  const generatePagingPaddedByTwo = (current: number, totalPageCount: number) => {
    const center = [current - 2, current - 1, current, current + 1, current + 2];
    const filteredCenter: PageArrayItem[] = center.filter((p) => p > 1 && p < totalPageCount);
    const includeThreeLeft = current === 5;
    const includeThreeRight = current === totalPageCount - 4;
    const includeLeftDots = current > 5;
    const includeRightDots = current < totalPageCount - 4;

    if (includeThreeLeft) {
      filteredCenter.unshift(2);
    }
    if (includeThreeRight) {
      filteredCenter.push(totalPageCount - 1);
    }

    return getPaddedArray(filteredCenter, includeLeftDots, includeRightDots, totalPageCount);
  };

  // https://gist.github.com/kottenator/9d936eb3e4e3c3e02598#gistcomment-3413141
  const generate = (current: number, totalPageCount: number): PageArrayItem[] => {
    if (offset === 1) {
      const generatedPages = generatePagingPaddedByOne(current, totalPageCount);
      return generatedPages;
    }
    const generatedPages = generatePagingPaddedByTwo(current, totalPageCount);
    return generatedPages;
  };

  return {
    generate,
  };
};
