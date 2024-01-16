/*
 * File: /src/components/pages/Home/UserCards/UserCardItem/index.tsx
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

import { UserCardI } from '@interfaces/UserCardI';

type Props = {
  data: UserCardI;
};

const UserCardItem = ({ data }: Props) => {
  return <div className="user-card"></div>;
};

export default UserCardItem;
