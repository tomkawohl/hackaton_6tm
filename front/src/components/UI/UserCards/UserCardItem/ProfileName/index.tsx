/*
 * File: /src/components/UI/UserCards/UserCardItem/ProfileName/index.tsx
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

import './styles.scss';

type Props = {
  firstname: string;
  lastname: string;
  isHovered: boolean;
};

const ProfileName = ({ firstname, lastname, isHovered }: Props) => {
  return (
    <div className={`user-card__profile-name ${isHovered && 'hide'}`}>
      <span>{firstname}</span>
      <span>{lastname}</span>
    </div>
  );
};

export default ProfileName;
