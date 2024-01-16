/*
 * File: /src/components/pages/Home/UserCards/index.tsx
 * Created Date: Monday, January 15th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Mon Jan 15 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import { UserCardI } from '@interfaces/index';

type Props = {
  data: UserCardI[];
};

const UserCards = ({ data }: Props) => {
  return (
    <div className="user-card__container">
      {data.map((item, index) => (
        <UserCardItem key={index} data={item} />
      ))}
    </div>
  );
};

export default UserCards;
