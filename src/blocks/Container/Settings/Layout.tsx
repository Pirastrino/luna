import { attributes as attributesSettings, EditProps } from '../attributes';
import { ButtonGroup } from '../../../controls';
import {
  formatLabel,
  getButtonsFromEnum,
  getOnChangeHandler,
} from '../../../utils';

const Layout: React.FC<EditProps> = ({ attributes, setAttributes }) => {
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
