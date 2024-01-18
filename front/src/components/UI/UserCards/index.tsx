/*
 * File: /src/components/UI/UserCards/index.tsx
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

import React from 'react';

import UserCardItem from './UserCardItem';
import './styles.scss';
import { UserCardI } from '@interfaces/UserCardI';

const UserCards = ({
  data,
  setCurrentUser,
}: {
  data: UserCardI[];
  setCurrentUser: React.Dispatch<UserCardI>;
}) => {
  return (
    <div className="user-card__container">
      {data.map((item) => (
        <UserCardItem
          key={Math.random()}
          item={item}
          setCurrentUser={setCurrentUser}
        />
      ))}
    </div>
  );
};

export default UserCards;
