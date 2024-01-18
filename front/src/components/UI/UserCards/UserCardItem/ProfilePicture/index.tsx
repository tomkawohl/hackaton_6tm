/*
 * File: /src/components/UI/UserCards/UserCardItem/ProfilePicture/index.tsx
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

import React, { useEffect, useRef, useState } from 'react';

import './styles.scss';
import { UserCardI } from '@interfaces/UserCardI';

const ProfilePicture = ({ data }: { data: UserCardI }) => {
  const [index, setIndex] = useState<number>(1);
  const [blur, setBlur] = useState<number>(0);
  const [loadedImgUrl, setLoadedImgUrl] = useState<string>(
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`
  );

  const imageRef = useRef<HTMLDivElement>(null);

  const delay = 100;

  const imageUrlPro = data.photo_pro;
  const imageUrlFun = data.photo_fun;

  useEffect(() => {
    if (imageUrlPro) setLoadedImgUrl(imageUrlPro);
  }, []);

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
        className={`user-card__profile-picture--img ${
          data.photo_pro || 'avatar'
        }`}
        style={{
          display: index === -1 && imageUrlFun ? 'none' : 'block',
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
