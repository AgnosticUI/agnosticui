import PropTypes from 'prop-types';
import createProps from './createProps';

const propTypes = {
  b: PropTypes.bool,
  s: PropTypes.string,
  children: PropTypes.node,
};
test('removes prop types besides children', async () => {
  const classNames = ['class_a', 'class_b'];
  const props = {
    s: 'string', // expected: gets removed
    b: true, // expected: gets removed
    style: 'color: hotpink;', // expected: preserved
    children: 'le children',
  };

  const result = createProps(propTypes, props, classNames);
  expect(result.children).toEqual('le children');
  expect(result.className).toEqual('class_a class_b');
  // keys that are not in propTypes are preserved
  expect(result.style).toBeDefined();

  // only the children component prop (and props not in propTypes) are preserved
  expect(result.b).toBeUndefined();
  expect(result.s).toBeUndefined();
});
