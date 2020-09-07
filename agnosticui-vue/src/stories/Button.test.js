import { render, fireEvent, screen } from '@testing-library/vue'
import Button from './Button.vue'

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
    props: {
      label: 'Go'
    }
  });
  expect(rendered).toMatchSnapshot();
})

// Debug Cheat: screen.debug(screen.getByText('Go');)
test('onClick fires', async () => {
  const { getByText, emitted } = render(Button, {
    props: {
      label: 'Go'
    }
  });
  expect(screen.queryByText('Go')).toBeTruthy()
  const button = getByText('Go');
  await fireEvent(button, new Event('click'))
  expect(emitted()).toHaveProperty('click')
});

test('primary', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
      mode: 'primary'
    }
  });
  const button = getByText('Go');
  expect(button.classList.contains('btn-primary')).toBeTruthy()

});

test('secondary', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
      mode: 'secondary'
    }
  });
  const button = getByText('Go');
  expect(button.classList.contains('btn-secondary')).toBeTruthy()
});


test('block', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
      isBlock: true
    }
  });
  const button = getByText('Go');
  expect(button.classList.contains('btn-block')).toBeTruthy()
});

test('bordered', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
      isBordered: true
    }
  });
  const button = getByText('Go');
  expect(button.classList.contains('btn-bordered')).toBeTruthy()
});

test('raised', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
      isRaised: true
    }
  });
  const button = getByText('Go');
  expect(button.classList.contains('btn-raised')).toBeTruthy()
});

test('blank', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
      isBlank: true
    }
  });
  const button = getByText('Go');
  expect(button.classList.contains('btn-blank')).toBeTruthy()
});

test('rouned', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
      isRounded: true
    }
  });
  const button = getByText('Go');
  expect(button.classList.contains('btn-rounded')).toBeTruthy()
});

test('disabled', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
      isDisabled: true
    }
  });
  const button = getByText('Go');
  expect(button.classList.contains('disabled')).toBeTruthy()
});

test('default type is button', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
    }
  });
  const button = getByText('Go');
  expect(button.getAttribute('type')).toEqual('button');
});

test('type submit', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
      type: 'submit'
    }
  });
  const button = getByText('Go');
  expect(button.getAttribute('type')).toEqual('submit');
});

test('small', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
      size: 'small'
    }
  });
  const button = getByText('Go');
  expect(button.classList.contains('btn-small')).toBeTruthy();
});


test('custom css class', async () => {
  const { getByText } = render(Button, {
    props: {
      label: 'Go',
      css: 'my-class'
    }
  });
  const button = getByText('Go');
  expect(button.classList.contains('my-class')).toBeTruthy();
});
