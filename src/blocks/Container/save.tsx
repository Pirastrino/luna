import { BlockSaveProps } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { Attributes } from './attributes';

const save: React.FC<BlockSaveProps<Attributes>> = ({ attributes }) => {
  // BlockSaveProps
  const styleContainer = {
    width:
      attributes.containerWidth === 'custom'
        ? `${attributes.customWidth}${attributes.customWidthUnit}`
        : '100%',
    marginLeft: attributes.containerWidth === 'full_width' ? '0' : 'auto',
    marginRight: attributes.containerWidth === 'full_width' ? '0' : 'auto',
    // TODO: Is this correct?
    maxWidth: attributes.containerWidth === 'custom' ? '100%' : 'none',
    minHeight: `${attributes.minHeight}${attributes.minHeightUnit}`,
    overflowX: attributes.overflowX,
    overflowY: attributes.overflowY,
    backgroundColor:
      attributes.backgroundColor === 'none'
        ? 'transparent'
        : attributes.backgroundColor,
    color: attributes.textColor,
  };

  const styleContentWrapper = {
    width:
      attributes.containerWidth === 'full_width' &&
      attributes.contentWidth === 'boxed'
        ? `${attributes.contentBoxWidth}${attributes.contentBoxWidthUnit}`
        : '100%',
  };
  return (
    <div {...useBlockProps.save({ style: styleContainer })}>container</div>
  );
};

export default save;
