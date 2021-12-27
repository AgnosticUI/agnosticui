import { usePagination } from './usePagination';

describe('generate paging', () => {
  it.only('should work for smaller totals', () => {
    const result = usePagination({ offset: 2 });
    expect(result.generate(1, 4)).toStrictEqual([1, 2, 3, 4]);
    expect(result.generate(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(result.generate(1, 6)).toStrictEqual([1, 2, 3, '...', 6]);
    expect(result.generate(5, 6)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(result.generate(5, 7)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(result.generate(6, 8)).toStrictEqual([1, '...', 4, 5, 6, 7, 8]);
  });
  it('should generate pagination with offset of 2', () => {
    const result = usePagination({ offset: 2 });
    // Edge case only 1 total pages
    expect(result.generate(10, 1)).toEqual([1]);
    expect(result.generate(1, 20)).toEqual([1, 2, 3, '...', 20]);
    expect(result.generate(2, 20)).toEqual([1, 2, 3, 4, '...', 20]);
    expect(result.generate(3, 20)).toEqual([1, 2, 3, 4, 5, '...', 20]);
    expect(result.generate(4, 20)).toEqual([1, 2, 3, 4, 5, 6, '...', 20]);
    expect(result.generate(5, 20)).toEqual([1, 2, 3, 4, 5, 6, 7, '...', 20]);
    expect(result.generate(6, 20)).toEqual([1, '...', 4, 5, 6, 7, 8, '...', 20]);
    expect(result.generate(7, 20)).toEqual([1, '...', 5, 6, 7, 8, 9, '...', 20]);
    expect(result.generate(8, 20)).toEqual([1, '...', 6, 7, 8, 9, 10, '...', 20]);
    expect(result.generate(9, 20)).toEqual([1, '...', 7, 8, 9, 10, 11, '...', 20]);
    expect(result.generate(10, 20)).toEqual([1, '...', 8, 9, 10, 11, 12, '...', 20]);
    expect(result.generate(11, 20)).toEqual([1, '...', 9, 10, 11, 12, 13, '...', 20]);
    expect(result.generate(12, 20)).toEqual([1, '...', 10, 11, 12, 13, 14, '...', 20]);
    expect(result.generate(13, 20)).toEqual([1, '...', 11, 12, 13, 14, 15, '...', 20]);
    expect(result.generate(14, 20)).toEqual([1, '...', 12, 13, 14, 15, 16, '...', 20]);
    expect(result.generate(15, 20)).toEqual([1, '...', 13, 14, 15, 16, 17, '...', 20]);
    expect(result.generate(16, 20)).toEqual([1, '...', 14, 15, 16, 17, 18, 19, 20]);
    expect(result.generate(17, 20)).toEqual([1, '...', 15, 16, 17, 18, 19, 20]);
    expect(result.generate(18, 20)).toEqual([1, '...', 16, 17, 18, 19, 20]);
    expect(result.generate(19, 20)).toEqual([1, '...', 17, 18, 19, 20]);
    expect(result.generate(20, 20)).toEqual([1, '...', 18, 19, 20]);
    // Test higher page and total
    expect(result.generate(999, 1200)).toEqual([
      1,
      '...',
      997,
      998,
      999,
      1000,
      1001,
      '...',
      1200,
    ]);
  });
  it('should generate pagination with offset of 1', () => {
    const result = usePagination({ offset: 1 });
    // Edge case only 1 total pages
    expect(result.generate(10, 1)).toEqual([1]);
    expect(result.generate(1, 20)).toEqual([1, 2, '...', 20]);
    expect(result.generate(2, 20)).toEqual([1, 2, 3, '...', 20]);
    expect(result.generate(3, 20)).toEqual([1, 2, 3, 4, '...', 20]);
    expect(result.generate(4, 20)).toEqual([1, '...', 3, 4, 5, '...', 20]);
    expect(result.generate(5, 20)).toEqual([1, '...', 4, 5, 6, '...', 20]);
    expect(result.generate(6, 20)).toEqual([1, '...', 5, 6, 7, '...', 20]);
    expect(result.generate(7, 20)).toEqual([1, '...', 6, 7, 8, '...', 20]);
    expect(result.generate(8, 20)).toEqual([1, '...', 7, 8, 9, '...', 20]);
    expect(result.generate(9, 20)).toEqual([1, '...', 8, 9, 10, '...', 20]);
    expect(result.generate(10, 20)).toEqual([1, '...', 9, 10, 11, '...', 20]);
    expect(result.generate(11, 20)).toEqual([1, '...', 10, 11, 12, '...', 20]);
    expect(result.generate(12, 20)).toEqual([1, '...', 11, 12, 13, '...', 20]);
    expect(result.generate(13, 20)).toEqual([1, '...', 12, 13, 14, '...', 20]);
    expect(result.generate(14, 20)).toEqual([1, '...', 13, 14, 15, '...', 20]);
    expect(result.generate(15, 20)).toEqual([1, '...', 14, 15, 16, '...', 20]);
    expect(result.generate(16, 20)).toEqual([1, '...', 15, 16, 17, '...', 20]);
    expect(result.generate(17, 20)).toEqual([1, '...', 16, 17, 18, '...', 20]);
    expect(result.generate(18, 20)).toEqual([1, '...', 17, 18, 19, 20]);
    expect(result.generate(19, 20)).toEqual([1, '...', 18, 19, 20]);
    expect(result.generate(20, 20)).toEqual([1, '...', 19, 20]);
    // Test higher page and total
    expect(result.generate(999, 1200)).toEqual([1, '...', 998, 999, 1000, '...', 1200]);
  });
});
