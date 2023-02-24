import { FC, useEffect } from 'react';

import Aos from 'aos';

import 'aos/dist/aos.css';
import { Footer } from './components/Footer';
import { Griting } from './components/Griting';
import { Skills } from './components/Skills';

const App: FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: 'mobile',
    });
  }, []);

  return (
    <div className="">
      <Griting />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
