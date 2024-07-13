import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';
import { attributes as attributesSettings, EditProps } from '../attributes';
import { general } from '../settings';
import { ButtonGroup, RangeControl } from '../../../controls';
import { units } from '../../../constants';
import {
  formatLabel,
  getButtonsFromEnum,
  getOptionsFromEnum,
  getOnChangeHandler,
} from '../../../utils';
import Layout from './Layout';

const General: React.FC<EditProps> = (props) => {
  const { attributes, setAttributes } = props;
  const handleChange = getOnChangeHandler(setAttributes);

  const onCustomWidthUnitChange = (value?: string | number) => {
    setAttributes({
      customWidth: value === 'px' ? general.customWidth.default : 100,
    });
  };

  const onContentBoxWidthUnitChange = (value?: string | number) => {
    setAttributes({
      customWidth: value === 'px' ? general.contentBoxWidth.default : 100,
    });
  };

  const containerWidthButtons = getButtonsFromEnum(
    attributesSettings.containerWidth.enum,
    handleChange('containerWidth'),
    formatLabel,
  );

  const contentWidthButtons = getButtonsFromEnum(
    attributesSettings.contentWidth.enum,
    handleChange('contentWidth'),
    formatLabel,
  );

  return (
    <>
      <PanelBody title={__('Container Type', 'containerType')}>
        <div className="luna-controls__wrapper luna-mb-6 luna-pt-2">
          <h3>Container Width</h3>
          <ButtonGroup
            buttons={containerWidthButtons}
            selectedValue={attributes.containerWidth}
          />
        </div>
        {attributes.containerWidth === 'full_width' ? (
          <>
            <div className="luna-controls__wrapper luna-mb-6">
              <h3>Content Width</h3>
              <ButtonGroup
                buttons={contentWidthButtons}
                selectedValue={attributes.contentWidth}
              />
            </div>
            {attributes.contentWidth === 'boxed' ? (
              <div className="luna-controls__wrapper">
                <h3>Content Box Width</h3>
                <RangeControl
                  // TODO: extract to hook?
                  value={
                    attributes.contentBoxWidth ??
                    general.contentBoxWidth.default
                  }
                  onChange={handleChange('contentBoxWidth')}
                  min={
                    attributes.contentBoxWidthUnit === 'px'
                      ? general.contentBoxWidth.min
                      : 0
                  }
                  max={
                    attributes.contentBoxWidthUnit === 'px'
                      ? general.contentBoxWidth.max
                      : 100
                  }
                  selectOptions={getOptionsFromEnum(units.width)}
                  selectedOption={attributes.contentBoxWidthUnit}
                  onSelectChange={handleChange(
                    'contentBoxWidthUnit',
                    onContentBoxWidthUnitChange,
                  )}
                />
              </div>
            ) : null}
          </>
        ) : null}
        {attributes.containerWidth === 'custom' ? (
          <div className="luna-controls__wrapper">
            <h3>Custom Width</h3>
            <RangeControl
              // TODO: extract to hook?
              value={attributes.customWidth ?? general.customWidth.default}
              onChange={handleChange('customWidth')}
              min={
                attributes.customWidthUnit === 'px'
                  ? general.customWidth.min
                  : 0
              }
              max={
                attributes.customWidthUnit === 'px'
                  ? general.customWidth.max
                  : 100
              }
              selectOptions={getOptionsFromEnum(units.width)}
              selectedOption={attributes.customWidthUnit}
              onSelectChange={handleChange(
                'customWidthUnit',
                onCustomWidthUnitChange,
              )}
            />
          </div>
        ) : null}
        <div className="luna-controls__wrapper">
          <h3>Minimum Height</h3>
          <RangeControl
            // TODO: extract to hook?
            value={attributes.minHeight ?? general.minHeight.default}
            onChange={handleChange('minHeight')}
            min={general.minHeight.min}
            max={general.minHeight.max}
            selectOptions={getOptionsFromEnum(units.height)}
            selectedOption={attributes.minHeightUnit}
            onSelectChange={handleChange('minHeightUnit')}
          />
        </div>
        <div className="luna-controls__wrapper luna-mb-6">
          <h3>Overflow</h3>
          <div className="luna-flex luna-w-full luna-gap-md">
            <div className="luna-flex-1">
              <SelectControl
                label="X"
                labelPosition="side"
                value={attributes.overflowX}
                options={getOptionsFromEnum(attributesSettings.overflowX.enum)}
                onChange={handleChange('overflowX')}
              />
            </div>
            <div className="luna-flex-1">
              <SelectControl
                label="Y"
                labelPosition="side"
                value={attributes.overflowY}
                options={getOptionsFromEnum(attributesSettings.overflowY.enum)}
                onChange={handleChange('overflowY')}
              />
            </div>
          </div>
        </div>
        <div className="luna-controls__wrapper ">
          <h3>HTML Tag</h3>
          <SelectControl
            value={attributes.htmlTag}
            options={getOptionsFromEnum(attributesSettings.htmlTag.enum)}
            onChange={handleChange('htmlTag')}
          />
        </div>
      </PanelBody>
      <PanelBody title={__('Layout', 'layout')} initialOpen={false}>
        <Layout {...props} />
      </PanelBody>
    </>
  );
};

export default General;
