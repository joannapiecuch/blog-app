import { Section } from './components';
import { DATA } from './data/data';

export const HomePage = () => {
  // if I have more time I will create json with data and get in correct way, and model data isn't perfect - faster option
  return (
    <main className="home">
      {DATA.map((section, index) => (
        <Section key={section.id} section={section} reverse={index === 1} />
      ))}
    </main>
  );
};
