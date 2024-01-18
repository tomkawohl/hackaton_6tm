/*
 * File: /src/components/pages/Home/Header/index.tsx
 * Created Date: Monday, January 15th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Thu Jan 18 2024
 * Modified By: liber4lis
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import React from 'react';

import { Description } from '@components/UI';
import './styles.scss';
import NavBar from '@components/UI/Nav/NavBar';
import { useTheme } from '@context/ThemeProvider';

const Header = () => {
  const { toggleTheme } = useTheme();
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
