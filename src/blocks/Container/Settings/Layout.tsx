import {
  attributes as attributesSettings,
  Attributes,
  GeneralProps,
} from '../attributes';
import { ButtonGroup, RangeControl } from '../../../controls';
import {
  formatLabel,
  getButtonsFromEnum,
  getOnChangeHandler,
} from '../../../utils';

const Layout: React.FC<GeneralProps> = ({ attributes, setAttributes }) => {
  const handleChange = getOnChangeHandler(setAttributes);

  const layoutTypeButtons = getButtonsFromEnum(
    attributesSettings.layoutType.enum,
    handleChange('layoutType'),
    formatLabel,
  );

  return (
    <div className="luna-controls__wrapper luna-mb-6 luna-pt-2">
      <ButtonGroup
        buttons={layoutTypeButtons}
        selectedValue={attributes.layoutType}
      />
    </div>
  );
};

export default Layout;
