import classNames from 'classnames';
import './Buttons.scss';

interface Props {
  type?: 'button' | 'submit';
  variant?: 'outline';
  onClick?: () => void;
  btnText: string;
}

export const Button = ({ type = 'button', variant = 'outline', btnText, onClick }: Props) => {
  return (
    <button type={type} className={classNames('btn', [`btn--${variant}`])} onClick={onClick}>
      {btnText}
    </button>
  );
};
