/*
 * File: /src/components/UI/UserCards/UserCardItem/index.tsx
 * Created Date: Tuesday, January 16th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Thu Jan 18 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import React, { useEffect, useRef, useState } from 'react';

import { UserCardI } from '@interfaces/UserCardI';
import ProfilePicture from './ProfilePicture';
import ProfileInfo from './ProfileInfo';
import './styles.scss';
import ProfileName from './ProfileName';

type Props = {
  item: UserCardI;
  setCurrentUser: React.Dispatch<UserCardI>;
};

const UserCardItem = ({ item, setCurrentUser }: Props) => {
  const [cardIsHover, setCardIsHovered] = useState<boolean>(false);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const enter = () => {
      setCardIsHovered(true);
    };
    const leave = () => {
      setCardIsHovered(false);
    };
    const openModal = () => {
      setCurrentUser(item);
    };
    cardRef.current?.addEventListener('mouseover', enter);
    cardRef.current?.addEventListener('mouseleave', leave);
    cardRef.current?.addEventListener('click', openModal);

    return () => {
      cardRef.current?.removeEventListener('mouseover', enter);
      cardRef.current?.removeEventListener('mouseleave', leave);
      cardRef.current?.removeEventListener('click', openModal);
    };
  });

  return (
    <div className={`user-card`} ref={cardRef}>
      <ProfileName
        firstname={item.prenom}
        lastname={item.nom}
        isHovered={cardIsHover}
      />
      <ProfilePicture data={item} />
      <ProfileInfo isHovered={cardIsHover} data={item} />
    </div>
  );
};

export default UserCardItem;
