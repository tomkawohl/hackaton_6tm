/*
 * File: /src/components/UI/UserCards/index.tsx
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

import { UserCardI } from '@interfaces/UserCardI';
import UserCardItem from './UserCardItem';
import './styles.scss';

type Props = {
  data: UserCardI[];
};

const UserCards = ({ data }: Props) => {
  return (
    <div className="user-card__container">
      {data.map((item, index) => (
        <UserCardItem key={index} item={item} />
      ))}
    </div>
  );
};

export default UserCards;
