import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import {
  // ColorIndicator,
  // ColorPicker,
  PanelBody,
  // Popover,
} from '@wordpress/components';
import {
  Attributes,
  attributes as attributesSettings,
  ColorAttributes,
  GeneralProps,
} from '../attributes';
import { ColorPicker } from '../../../controls';

const Style: React.FC<GeneralProps> = ({ attributes, setAttributes }) => {
  const [popover, setPopover] = useState<ColorAttributes | undefined>(
    undefined,
  );

  const toggleColorPicker = (value: ColorAttributes) => () => {
    setPopover(popover === value ? undefined : value);
  };

  const handleResetColor = (value: ColorAttributes) => () => {
    setAttributes({
      [value]: attributesSettings[value as keyof Attributes].default,
    });
  };

  return (
    <>
      <PanelBody title={__('Background', 'background')}>
        <div className="luna-controls__wrapper luna-mb-6 luna-pt-2">
          <ColorPicker
            label="Color"
            enableAlpha={true}
            color={attributes.backgroundColor}
            isOpen={popover === 'backgroundColor'}
            handleReset={handleResetColor('backgroundColor')}
            handleClickIndicator={toggleColorPicker('backgroundColor')}
            onChange={(color) => setAttributes({ backgroundColor: color })}
          />
        </div>
      </PanelBody>
      <PanelBody title={__('Color', 'color')} initialOpen={false}>
        <div className="luna-controls__wrapper luna-mb-6 luna-pt-2">
          <ColorPicker
            label="Text Color"
            enableAlpha={true}
            color={attributes.textColor}
            isOpen={popover === 'textColor'}
            handleReset={handleResetColor('textColor')}
            handleClickIndicator={toggleColorPicker('textColor')}
            onChange={(color) => setAttributes({ textColor: color })}
          />
          <ColorPicker
            label="Link Color"
            enableAlpha={true}
            color={attributes.linkColor}
            isOpen={popover === 'linkColor'}
            handleReset={handleResetColor('linkColor')}
            handleClickIndicator={toggleColorPicker('linkColor')}
            onChange={(color) => setAttributes({ linkColor: color })}
          />
          <ColorPicker
            label="Link Hover Color"
            enableAlpha={true}
            color={attributes.linkColorHover}
            isOpen={popover === 'linkColorHover'}
            handleReset={handleResetColor('linkColorHover')}
            handleClickIndicator={toggleColorPicker('linkColorHover')}
            onChange={(color) => setAttributes({ linkColorHover: color })}
          />
        </div>
      </PanelBody>
      <PanelBody title={__('Border', 'border')} initialOpen={false}>
        <div className="luna-controls__wrapper luna-mb-6 luna-pt-2">
          <h3>Border</h3>
        </div>
      </PanelBody>
    </>
  );
};

export default Style;
