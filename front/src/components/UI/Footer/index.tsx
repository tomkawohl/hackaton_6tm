/*
 * File: /src/components/UI/Footer/index.tsx
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

import { FaArrowUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const Footer = () => {
  const navigate = useNavigate();
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="footer">
        <button className="footer__scroll-up" onClick={scrollUp}>
          <FaArrowUp className="footer__scroll-up--icon" />
        </button>
        <ul className="footer__list">
          <li
            className="footer__list--link"
            onClick={() => navigate('/about-us')}
          >
            Qui sommes nous ?
          </li>
          <li
            className="footer__list--link"
            onClick={() => navigate('/job-offer')}
          >
            Recrutement
          </li>
          <li
            className="footer__list--link"
            onClick={() => navigate('/privacy')}
          >
            Politique de Confidentialité
          </li>
          <li className="footer__list--link" onClick={() => navigate('/login')}>
            Espace Intra
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
