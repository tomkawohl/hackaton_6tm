/*
 * File: /src/components/UI/UserCards/UserCardItem/index.tsx
 * Created Date: Tuesday, January 16th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Tue Jan 16 2024
 * Modified By: liber4lis
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import { useEffect, useRef, useState } from 'react';

import { UserCardI } from '@interfaces/UserCardI';
import ProfilePicture from './ProfilePicture';
import ProfileInfo from './ProfileInfo';
import './styles.scss';
import ProfileName from './ProfileName';

type Props = {
  item: UserCardI;
};

const UserCardItem = ({ item }: Props) => {
  const [cardIsHover, setCardIsHovered] = useState<boolean>(false);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const enter = () => {
      setCardIsHovered(true);
    };
    const leave = () => {
      setCardIsHovered(false);
    };
    cardRef.current?.addEventListener('mouseenter', enter);
    cardRef.current?.addEventListener('mouseleave', leave);

    return () => {
      cardRef.current?.removeEventListener('mouseenter', enter);
      cardRef.current?.removeEventListener('mouseleave', leave);
    };
  });

  return (
    <div className={`user-card`} ref={cardRef}>
      <ProfileName
        firstname={item.prenom}
        lastname={item.nom}
        isHovered={cardIsHover}
      />
      <ProfilePicture hovered={cardIsHover} data={item} />
      <ProfileInfo isHovered={cardIsHover} data={item} />
    </div>
  );
};

export default UserCardItem;
