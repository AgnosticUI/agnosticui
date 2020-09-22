import PropTypes from 'prop-types'

// export const ColumnSizeType = PropTypes.oneOfType([
//   PropTypes.number,
//   PropTypes.bool,
// ])
export const ColumnSizeType = [Number, Boolean];

export const ViewportSizeType = ['xs', 'sm', 'md', 'lg', 'xl'];

export const ViewportSizeTypeProp = {
  type: String,
  validator: (v) => ViewportSizeType.includes(v),
}

// export const ViewportSizeType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
