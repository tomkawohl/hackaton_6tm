/*
 * File: /src/components/UI/UserCards/UserCardItem/ProfileInfo/index.tsx
 * Created Date: Tuesday, January 16th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Thu Jan 18 2024
 * Modified By: liber4lis
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './styles.scss';
import { UserCardI } from '@interfaces/UserCardI';
import { MdHomeWork } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

type Props = {
  isHovered: boolean;
  data: UserCardI;
};

const ProfileInfo = ({ isHovered, data }: Props) => {
  const variants = {
    initial: {
      left: '100%',
    },
    animate: {
      left: '45%',
    },
    exit: {
      left: '100%',
    },
  };

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          variants={variants}
          exit="exit"
          initial="initial"
          animate="animate"
          className="user-card__profile-info"
        >
          <span className="user-card__profile-info--name">{`${data.prenom} ${data.nom}`}</span>
          <div className="user-card__profile-info--content">
            <MdHomeWork className="user-card__profile-info--content--icon" />
            <span className="user-card__profile-info--content--text">
              <span className="user-card__profile-info--content--text--title">
                Poste:
              </span>
              <span className="user-card__profile-info--content--text--value">
                {data.poste}
              </span>
            </span>
          </div>
          <div className="user-card__profile-info--content">
            <FaUsers className="user-card__profile-info--content--icon" />
            <span className="user-card__profile-info--content--text">
              <span className="user-card__profile-info--content--text--title">
                Équipe:
              </span>
              <span className="user-card__profile-info--content--text--value">
                {data.equipe}
              </span>
            </span>
          </div>
          <div className="user-card__profile-info--content">
            <IoLocationSharp className="user-card__profile-info--content--icon" />
            <span className="user-card__profile-info--content--text">
              <span className="user-card__profile-info--content--text--title">
                Agence:
              </span>
              <span className="user-card__profile-info--content--text--value">
                {data.agence}
              </span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileInfo;
