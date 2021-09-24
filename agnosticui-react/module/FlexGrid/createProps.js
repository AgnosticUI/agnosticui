export default function createProps(propTypes, props, classNames) {
  var newProps = {};
  Object.keys(props).filter(function (key) {
    return key === 'children' || !propTypes[key];
  }).forEach(function (key) {
    return newProps[key] = props[key];
  });
  var className = classNames.filter(function (cn) {
    return cn;
  }).join(' ');
  return Object.assign({}, newProps, {
    className: className
  });
}