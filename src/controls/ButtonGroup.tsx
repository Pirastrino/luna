import {
  Button as ButtonWP,
  ButtonGroup as ButtonGroupWP,
} from '@wordpress/components';

export type Props = {
  buttons: { label: string; value: string | number; handleClick: () => void }[];
  selectedValue?: string | number | null;
};

const ButtonGroup: React.FC<Props> = ({
  buttons = [],
  selectedValue = null,
}) => {
  return (
    <ButtonGroupWP className="luna-flex luna-text-sm">
      {buttons.map((button) => {
        const isActive = button.value === selectedValue;
        const className = `${isActive ? 'is_active' : ''} luna-flex-1 luna-justify-center luna-p-1`;

        return (
          <ButtonWP
            key={button.label}
            className={className}
            onClick={button.handleClick}
          >
            {button.label}
          </ButtonWP>
        );
      })}
    </ButtonGroupWP>
  );
};

export default ButtonGroup;
