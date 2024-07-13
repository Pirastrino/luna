import { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { BlockEditProps } from '@wordpress/blocks';
import {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { TabPanel } from '@wordpress/components';
import { BlockInstance } from '@wordpress/blocks';
import { Attributes } from './attributes';
import { General, Style, tabs } from './Settings';
import './edit.scss';

const ALLOWED_BLOCKS = ['core/paragraph', 'core/image']; // List of allowed inner blocks
const TEMPLATE: [string, Record<string, any>][] = [
  ['core/paragraph', { placeholder: 'Enter text...' }],
  ['core/image', {}],
];

const Edit: React.FC<BlockEditProps<Attributes>> = (props) => {
  const [hasInnerBlocks, setHasInnerBlocks] = useState(false);

  const { attributes, clientId } = props;

  const innerBlocks = useSelect(
    (
      select: (key: 'core/block-editor') => {
        getBlocks: (clientId: string) => BlockInstance[];
      },
    ) => select('core/block-editor').getBlocks(clientId),
    [clientId],
  );

  useEffect(() => {
    setHasInnerBlocks(innerBlocks.length > 0);
  }, [innerBlocks]);

  useEffect(() => {
    console.log(attributes);
  }, [attributes.backgroundColor]);

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
    <>
      <InspectorControls>
        <div style={{ marginLeft: 'auto' }}></div>
        <TabPanel
          className="luna-inspector-tabs-container"
          tabs={Object.values(tabs)}
        >
          {(tab) => {
            const name = tab.name as keyof typeof tabs;

            switch (name) {
              case 'general':
                return <General {...props} />;
              case 'style':
                return <Style {...props} />;
            }
          }}
        </TabPanel>
      </InspectorControls>
      <div {...useBlockProps({ style: styleContainer })}>
        <div className={`${hasInnerBlocks ? '' : 'luna-edit-container'}`}>
          <div {...useBlockProps({ style: styleContentWrapper })}>
            <div className="luna-p-2">
              <InnerBlocks
                allowedBlocks={ALLOWED_BLOCKS}
                renderAppender={() => {
                  return hasInnerBlocks ? (
                    <InnerBlocks.DefaultBlockAppender />
                  ) : (
                    <InnerBlocks.ButtonBlockAppender />
                  );
                }}
                // template={TEMPLATE}
                // templateLock={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
