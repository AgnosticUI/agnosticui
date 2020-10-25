import { render, fireEvent, screen } from '@testing-library/vue';
import Button from './Button.vue';

/**
 * Initially, Storybook addon snapshot testing was working well. However,
 * when vue-based CSS Modules was added, I spent several hours dealing with
 * the issue of this.$style being undefined and mocking not solving the issues.
 * At a certain point I elected to bail and make the comprimise of testing the
 * API directly. This is definitely a comprimise and requires knowledge of the
 * "implementation details" but point of dimishing returns and unproductive
 * man-hours it seemed this comprimise was prudent ¯\_(ツ)_/¯
 * 
 * UPDATE: Seems like toMatchSnapshot helps serve this purpose too :)
 */

test('snapshot', () => {
  const rendered = render(Button, {
    props: {}
  });
  expect(rendered).toMatchSnapshot();
})

// Debug Cheat: screen.debug(screen.getByText('Go');)
test('onClick fires', async () => {
  const { getByRole, emitted } = render(Button, {
    props: {}
  });
  const button = getByRole('button');
  await fireEvent(button, new Event('click'))
  expect(emitted()).toHaveProperty('click')
});

test('primary', async () => {
  const { getByRole } = render(Button, {
    props: {
      mode: 'primary'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('btn-primary')).toBeTruthy()
});

test('secondary', async () => {
  const { getByRole } = render(Button, {
    props: {
      mode: 'secondary'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('btn-secondary')).toBeTruthy()
});


test('block', async () => {
  const { getByRole } = render(Button, {
    props: {
      isBlock: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('btn-block')).toBeTruthy()
});

test('bordered', async () => {
  const { getByRole } = render(Button, {
    props: {
      isBordered: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('btn-bordered')).toBeTruthy()
});

test('raised', async () => {
  const { getByRole } = render(Button, {
    props: {
      isRaised: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('btn-raised')).toBeTruthy()
});

test('blank', async () => {
  const { getByRole } = render(Button, {
    props: {
      isBlank: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('btn-blank')).toBeTruthy()
});

test('rouned', async () => {
  const { getByRole } = render(Button, {
    props: {
      isRounded: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('btn-rounded')).toBeTruthy()
});

test('disabled', async () => {
  const { getByRole } = render(Button, {
    props: {
      isDisabled: true
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('disabled')).toBeTruthy()
});

test('default type is button', async () => {
  const { getByRole } = render(Button, {
    props: {}
  });
  const button = getByRole('button');
  expect(button.getAttribute('type')).toEqual('button');
});

test('type submit', async () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'submit'
    }
  });
  const button = getByRole('button');
  expect(button.getAttribute('type')).toEqual('submit');
});

test('small', async () => {
  const { getByRole } = render(Button, {
    props: {
      size: 'small'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('btn-small')).toBeTruthy();
});


test('custom css class', async () => {
  const { getByRole } = render(Button, {
    props: {
      css: 'my-class'
    }
  });
  const button = getByRole('button');
  expect(button.classList.contains('my-class')).toBeTruthy();
});
