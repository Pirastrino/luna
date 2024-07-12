import { Attributes } from './attributes';

export const getStylesFromAttributes = (
  attributes: Attributes,
): React.CSSProperties => {
  const {
    containerWidth,
    customWidth,
    customWidthUnit,
    contentWidth,
    contentBoxWidth,
    contentBoxWidthUnit,
    minHeight,
    minHeightUnit,
    overflowX,
    overflowY,
    htmlTag,
  } = attributes;

  return {
    width:
      containerWidth === 'custom' ? `${customWidth}${customWidthUnit}` : '100%',
    maxWidth:
      contentWidth === 'boxed'
        ? `${contentBoxWidth}${contentBoxWidthUnit}`
        : '100%',
    minHeight: `${minHeight}${minHeightUnit}`,
  };
};
