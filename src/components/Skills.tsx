import React, { createElement, useState, FC } from 'react';

import { content } from '../Content';

import { ISkillsContent, SkillModal } from './Modal';

const DATA_AOS_DELAY = 400;

export const Skills: FC = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState<ISkillsContent>();

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const openModal = (
    event: React.MouseEvent<HTMLDivElement>,
    skill: ISkillsContent,
  ): void => {
    setSelectSkill(skill);
    setIsOpen(true);
  };

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <SkillModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        selectSkill={selectSkill}
      />

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill: ISkillsContent, i: number) => (
            <div
              key={skill.id}
              data-aos="fade-up"
              data-aos-delay={i * DATA_AOS_DELAY}
              className="bg-bg_elem_primary sm:cursor-pointer
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div
                  role="presentation"
                  onClick={event => openModal(event, skill)}
                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
