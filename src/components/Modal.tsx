import React, { FC } from 'react';

import Modal from 'react-modal';

interface IModal {
  modalIsOpen: boolean;
  closeModal: () => void;
  selectSkill?: ISkillsContent;
}

export interface ISkillsContent {
  id: string;
  name: string;
  para: string;
  logo: string;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '23rem',
    width: '90%',
  },
  overlay: {
    padding: '2rem',
  },
};

export const SkillModal: FC<IModal> = ({ modalIsOpen, closeModal, selectSkill }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <div className="flex items-center gap-2">
        <img className="h-10" src={selectSkill?.logo} alt="..." />
        <h6>{selectSkill?.name}</h6>
      </div>
      <br />
      <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit, ame.</li>
        <li>Lorem ipsum dolor sit, amet consectetur</li>
        <li>Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.</li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos
          rem.
        </li>
      </ul>
      <br />
      <div className="flex justify-end">
        <button type="button" onClick={closeModal} className="btn">
          Close
        </button>
      </div>
    </Modal>
  );
};
