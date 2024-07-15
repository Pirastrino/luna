import { SelectControl } from '@wordpress/components';
import {
  Attributes,
  attributes as attributesSettings,
  EditProps,
} from '../attributes';
import { ButtonGroup } from '../../../controls';
import {
  formatLabel,
  getButtonsFromEnum,
  getOnChangeHandler,
  getOptionsFromEnum,
} from '../../../utils';

const Layout: React.FC<EditProps> = ({ attributes, setAttributes }) => {
  const handleChange = getOnChangeHandler(setAttributes);

  const layoutTypeButtons = getButtonsFromEnum(
    attributesSettings.layoutType.enum,
    handleChange('layoutType'),
    formatLabel,
  );

  const flexDirectionButtons = getButtonsFromEnum(
    attributesSettings.flexDirection.enum,
    handleChange('flexDirection'),
  );

  return (
    <div className="luna-controls__wrapper luna-mb-6 luna-pt-2">
      <ButtonGroup
        buttons={layoutTypeButtons}
        selectedValue={attributes.layoutType}
      />
      {attributes.layoutType === 'flex' && (
        <>
          <SelectControl
            className="luna-mb-0"
            label="Justify Content"
            options={getOptionsFromEnum(attributesSettings.justifyContent.enum)}
            onChange={(value) =>
              setAttributes({
                justifyContent: value as Attributes['justifyContent'],
              })
            }
          />
          <SelectControl
            label="Align Content"
            options={getOptionsFromEnum(attributesSettings.alignContent.enum)}
            onChange={(value) =>
              setAttributes({
                alignContent: value as Attributes['alignContent'],
              })
            }
          />
          <SelectControl
            label="Align Items"
            options={getOptionsFromEnum(attributesSettings.alignItems.enum)}
            onChange={(value) =>
              setAttributes({
                alignItems: value as Attributes['alignItems'],
              })
            }
          />
        </>
      )}
    </div>
  );
};

export default Layout;
