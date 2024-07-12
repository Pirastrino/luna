import { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
} from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { Attributes } from './attributes';
import { General, tabs } from './Settings';
import './edit.scss';

type Props = {
  attributes: Attributes;
  setAttributes: (attributes: Partial<Attributes>) => void;
};

const Edit: React.FC<Props> = (props) => {
  const { attributes, setAttributes } = props;

  useEffect(() => {
    console.log(attributes);
  }, [attributes.containerWidth, attributes.customWidth, attributes.minHeight]);

  // TODO: Proof of concept. Extract to utils:
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
  };

  const styleContentWrapper = {
    width:
      attributes.containerWidth === 'full_width' &&
      attributes.contentWidth === 'boxed'
        ? `${attributes.contentBoxWidth}${attributes.contentBoxWidthUnit}`
        : '100%',
  };

  return (
    <>
      <InspectorControls>
        <div style={{ marginLeft: 'auto' }}></div>
        <TabPanel
          className="luna-inspector-tabs-container"
          tabs={Object.values(tabs)}
        >
          {(tab) => {
            const name = tab.name as keyof typeof tabs;

            if (name === 'general') {
              return <General {...props} />;
            }
          }}
        </TabPanel>
      </InspectorControls>
      <div {...useBlockProps({ style: styleContainer })}>
        <div {...useBlockProps({ style: styleContentWrapper })}>
          LUNA CONTAINER
        </div>
      </div>
    </>
  );
};

export default Edit;
