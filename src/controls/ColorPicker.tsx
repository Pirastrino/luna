import {
  ColorIndicator as ColorIndicatorWP,
  ColorPicker as ColorPickerWP,
  Popover as PopoverWP,
} from '@wordpress/components';
import { ColorPickerProps } from '@wordpress/components/src/color-picker/types';
import { Lucide } from '../icons';

type Props = ColorPickerProps & {
  label?: string;
  isOpen?: boolean;
  handleReset?: () => void;
  handleClickIndicator?: () => void;
};

const ColorPicker: React.FC<Props> = ({
  label,
  isOpen,
  handleReset,
  handleClickIndicator,
  ...props
}) => {
  return (
    <>
      <div className="luna-w-full luna-flex luna-justify-between">
        {label ? <h3>{label}</h3> : null}
        <div className="luna-flex luna-items-center luna-gap-sm">
          <button
            className="luna-bg-transparent luna-flex luna-justify-center luna0items-center luna-border-transparent luna-cursor-pointer lunaa-rounded-full hover:text-secondary"
            onClick={handleReset}
          >
            {Lucide.RotateCCW}
          </button>
          <ColorIndicatorWP
            className={`luna-w-6 luna-h-6 luna-cursor-pointer${props.color === 'none' ? ' luna-chessboard' : ''}`}
            colorValue={props.color === 'none' ? undefined : props.color}
            onClick={handleClickIndicator}
          />
        </div>
      </div>
      {isOpen ? (
        <PopoverWP>
          <ColorPickerWP {...props} />
        </PopoverWP>
      ) : null}
    </>
  );
};

export default ColorPicker;
