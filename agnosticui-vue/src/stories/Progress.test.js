import { render, screen, getByRole, waitFor } from '@testing-library/vue';
import '@testing-library/jest-dom';
import Progress from './Progress.vue';

test('progress renders', async () => {
  const { getByRole } = render(Progress, {
    props: {
      value: 30,
      max: 100
    }
  });
  await waitFor(() => {
    const progress = getByRole('progressbar');
    expect(progress).toBeInTheDocument()
    expect(progress.getAttribute('value')).toEqual('30')
    expect(progress.getAttribute('max')).toEqual('100')
  })
});

test('custom css', async () => {
  const { getByRole } = render(Progress, {
    props: {
      value: 30,
      max: 100,
      css: 'foo'
    }
  });
  await waitFor(() => {
    const progress = getByRole('progressbar');
    expect(progress.classList.contains('foo')).toBeTruthy()
  })
});