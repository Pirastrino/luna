import {
  RangeControl as RangeControlWP,
  SelectControl as SelectControlWP,
} from '@wordpress/components';
import { RangeControlProps } from '@wordpress/components/src/range-control/types';
import { SelectControlProps } from '@wordpress/components/src/select-control/types';

type Props = RangeControlProps & {
  selectOptions?: SelectControlProps['options'];
  selectedOption?: string;
  onSelectChange?: () => void;
};

const RangeControl: React.FC<Props> = ({
  selectOptions,
  selectedOption,
  onSelectChange,
  ...rangeControlProps
}) => {
  return (
    <div className="luna-flex luna-gap-xs">
      <div className="luna-w-full">
        <RangeControlWP {...rangeControlProps} />
      </div>
      {selectOptions ? (
        <SelectControlWP
          className="luna-min-w-[52px]"
          value={selectedOption}
          options={selectOptions}
          onChange={onSelectChange}
        />
      ) : null}
    </div>
  );
};

export default RangeControl;
