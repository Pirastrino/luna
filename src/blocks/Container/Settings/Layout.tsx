import { attributes as attributesSettings, Attributes } from '../attributes';
import { ButtonGroup, RangeControl } from '../../../controls';
import {
  formatLabel,
  getButtonsFromEnum,
  getOnChangeHandler,
} from '../../../utils';

type Props = {
  attributes: Attributes;
  setAttributes: (attributes: Partial<Attributes>) => void;
};

const Layout: React.FC<Props> = ({ attributes, setAttributes }) => {
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
