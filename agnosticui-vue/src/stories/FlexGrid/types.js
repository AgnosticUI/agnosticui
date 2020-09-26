export const ColumnSizeType = [Number, Boolean];

export const ViewportSizeType = ['xs', 'sm', 'md', 'lg', 'xl'];

export const ViewportSizeTypeProp = {
  type: String,
  validator: (v) => ViewportSizeType.includes(v),
}
