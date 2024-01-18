/*
 * File: /src/components/UI/UserCards/index.tsx
 * Created Date: Tuesday, January 16th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Wed Jan 17 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import UserCardItem from './UserCardItem';
import './styles.scss';
import { UserCardI } from '@interfaces/UserCardI';

const UserCards = ({ data }: { data: UserCardI[] }) => {
  return (
    <div className="user-card__container">
      {data.map((item) => (
        <UserCardItem key={Math.random()} item={item} />
      ))}
    </div>
  );
};

export default UserCards;
