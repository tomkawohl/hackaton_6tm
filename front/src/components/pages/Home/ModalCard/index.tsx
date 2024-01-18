/*
 * File: /src/components/pages/Home/ModalCard/index.tsx
 * Created Date: Thursday, January 18th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Thu Jan 18 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import React from 'react';

import ProfilePicture from '@components/UI/UserCards/UserCardItem/ProfilePicture';
import { UserCardI } from '@interfaces/UserCardI';
import './style.scss';
import { FaRegStar, FaUsers } from 'react-icons/fa6';
import { BiSolidUpvote } from 'react-icons/bi';
import { MdHomeWork } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

type Props = {
  data: UserCardI | null;
  setCurrentUser: React.Dispatch<UserCardI | null>;
};

const ModalCard = ({ data, setCurrentUser }: Props) => {
  if (!data) return;
  return (
    <>
      <div className="bg" onClick={() => setCurrentUser(null)} />
      <div className="modal">
        <ProfilePicture data={data} />
        <div className="modal__right">
          <div className="modal__right--cards">
            <div className="modal__right--cards--item">
              <FaRegStar className="modal__right--cards--item--icon" />
              <div className="modal__right--cards--item--text">
                {data.note} Étoiles
              </div>
            </div>
            <div className="modal__right--cards--item">
              <BiSolidUpvote className="modal__right--cards--item--icon" />
              <div className="modal__right--cards--item--text">
                {data.visited} Vues
              </div>
            </div>
            <div className="modal__right--cards--item">
              <MdHomeWork className="modal__right--cards--item--icon" />
              <div className="modal__right--cards--item--text">
                {data.poste}
              </div>
            </div>
            <div className="modal__right--cards--item">
              <FaUsers className="modal__right--cards--item--icon" />
              <div className="modal__right--cards--item--text">
                Équipe {data.equipe}
              </div>
            </div>
            <div className="modal__right--cards--item">
              <IoLocationSharp className="modal__right--cards--item--icon" />
              <div className="modal__right--cards--item--text">
                Agence {data.agence}
              </div>
            </div>
          </div>
          <p className="modal__right--description">{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
