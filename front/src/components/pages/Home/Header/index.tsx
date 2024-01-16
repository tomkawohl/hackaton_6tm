/*
 * File: /src/components/pages/Home/Header/index.tsx
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

import { Description } from '@components/UI';
import './styles.scss';

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="header">
        <div className="header__title">Notre équipe</div>
        <div className="header__left">
          <Description text="Bienvenue dans le trombinoscope de l'équipe dynamique de 6TM, une société dédiée à la consultation en transformation numérique. Chez 6TM, nous sommes fiers de notre engagement à accompagner nos clients, qu'ils soient des PME, des ETI ou des Grands Comptes, à chaque étape de leur parcours vers la réalisation de projets digitaux intelligents et durables." />
        </div>
        <div className="header__right">
          <img src="/infographic/collaboration.png" />
        </div>
      </div>
    </>
  );
};

export default Header;
