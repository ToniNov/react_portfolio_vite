import { FC } from 'react';

import { AiOutlineArrowDown } from 'react-icons/all';
import ReactTypingEffect from 'react-typing-effect';

import { content } from '../Content';

export const Griting: FC = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName} <span className="text-dark_primary">{hero.lastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-16" data-aos="fade-down">
          <div className="w-[21rem] xl:w-[29rem] ">
            <h2>{hero.text}</h2>
            <h2 className="text-[2.2rem] xl:text-5xl">
              <ReactTypingEffect text={hero.title} speed={100} />
            </h2>
          </div>
          <br />
          <div className="flex justify-end">
            <button type="button" className="btn flex items-center hover:bg-gray ">
              {hero.btnText}
              <AiOutlineArrowDown className="m-1 animate-bounce" size={25} />
            </button>
          </div>
        </div>

        {/* sec col todo photo mobil */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover pt-1"
          />
        </div>
      </div>
    </section>
  );
};
