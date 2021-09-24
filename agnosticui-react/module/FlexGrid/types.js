import PropTypes from 'prop-types';
export var ColumnSizeType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
export var ViewportSizeType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);