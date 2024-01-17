/*
 * File: /src/components/UI/UserCards/UserCardItem/ProfilePicture/index.tsx
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

import './styles.scss';

type Props = {
  hovered: boolean;
  data: UserCardI;
};

const ProfilePicture = ({ hovered, data }: Props) => {
  // const imageUrlPro =
  //   data.photo_pro || 'https://api.dicebear.com/7.x/avataaars/svg';
  // const imageUrlFun = data.photo_fun;
  const [index, setIndex] = useState<number>(1);
  const [blur, setBlur] = useState<number>(0);

  const imageRef = useRef<HTMLDivElement>(null);

  const imageUrlPro = '/tmp/001.webp';
  const imageUrlFun = '/tmp/002.webp';
  const delay = 100;

  let loadedImgUrl = 'https://api.dicebear.com/7.x/avataaars/svg';
  if (imageUrlPro) loadedImgUrl = imageUrlPro;

  useEffect(() => {
    let time: ReturnType<typeof setTimeout>;

    const resetTimer = () => clearTimeout(time);
    const onHover = () => {
      setBlur(5);
      setIndex(-1);

      time = setTimeout(() => {
        setBlur(0);
        setIndex(-1);
      }, delay);
    };

    const onLeave = () => {
      setBlur(0);
      setIndex(1);
      resetTimer();
    };

    imageRef.current?.addEventListener('mouseenter', onHover);
    imageRef.current?.addEventListener('mouseleave', onLeave);

    return () => {
      imageRef.current?.removeEventListener('mouseenter', onHover);
      imageRef.current?.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="user-card__profile-picture" ref={imageRef}>
      <img
        src={loadedImgUrl}
        className="user-card__profile-picture--img"
        style={{
          display: index === -1 ? 'none' : 'block',
        }}
      />
      {imageUrlFun && (
        <img
          src={imageUrlFun}
          className="user-card__profile-picture--img"
          style={{
            display: index === -1 ? 'block' : 'none',
            filter: `blur(${blur}px)`,
            transition: 'all 0.2s ease-in-out',
          }}
        />
      )}
    </div>
  );
};

export default ProfilePicture;
