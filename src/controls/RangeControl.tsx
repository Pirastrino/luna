import {
  RangeControl as RangeControlWP,
  SelectControl,
} from '@wordpress/components';
import { RangeControlProps } from '@wordpress/components/src/range-control/types';
import { SelectControlProps } from '@wordpress/components/src/select-control/types';

type Props = RangeControlProps & {
  selectOptions?: SelectControlProps['options'];
  onSelectChange?: (value?: string) => void;
};

const RangeControl: React.FC<Props> = ({
  selectOptions,
  onSelectChange,
  ...rangeControlProps
}) => {
  return (
    <div className="luna-flex">
      <div className="luna-width-full">
        <RangeControlWP {...rangeControlProps} />
      </div>
      {selectOptions ? (
        <div className="luna-reset">
          <SelectControl
            style={{ minWidth: '52px' }}
            options={selectOptions}
            onChange={onSelectChange}
          />
        </div>
      ) : null}
    </div>
  );
};

export default RangeControl;
