import classNames from 'classnames';
import './Buttons.scss';
import { Link } from 'react-router-dom';

interface Props {
  variant?: 'outline';
  btnText: string;
  url: string;
}

export const ButtonLink = ({ variant = 'outline', btnText, url }: Props) => {
  return (
    <Link to={url} className={classNames('btn btn--link', [`btn--${variant}`])}>
      {btnText}
    </Link>
  );
};
