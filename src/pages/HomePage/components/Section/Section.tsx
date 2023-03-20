import { ButtonLink } from '../../../../components';
import './Section.scss';
import { SectionInterface } from '../../../../types';
import classNames from 'classnames';

interface Props {
  section: SectionInterface;
  reverse?: boolean;
}
export const Section = ({ section, reverse = false }: Props) => {
  return (
    <div className={classNames('section', [reverse && `section--reverse`])}>
      <div className="section__info">
        <h2 className="section__header">{section.header}</h2>
        <h3 className="section__sub-header">{section.subHeader}</h3>
        {section.description}
        <ButtonLink url="/posts" btnText="Zobacz więcej" />
      </div>
      <div className="section__assets">
        <div className="section__overlay" />
        {section.assets.map((asset) => (
          <img className="section__image" key={asset} src={asset} alt={section.header} />
        ))}
      </div>
    </div>
  );
};
