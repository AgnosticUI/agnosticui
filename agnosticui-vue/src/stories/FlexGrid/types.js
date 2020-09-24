export const ColumnSizeType = [Number, Boolean];

export const ViewportSizeType = ['xs', 'sm', 'md', 'lg', 'xl'];
export const GutterSizeType = [4, 8, 16, 24, 32];

export const GutterSizeTypeProp = {
  type: Number,
  validator: (v) => GutterSizeType.includes(v),
}
export const ViewportSizeTypeProp = {
  type: String,
  validator: (v) => ViewportSizeType.includes(v),
}
