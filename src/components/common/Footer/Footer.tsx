import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from 'react-icons/ai';

export const Footer = () => {
  const className = 'footer';

  return (
    <div className={className}>
      <div className={`${className}__content`}>
        <div className={`${className}__container`}>
          <div className={`${className}__row`}>
            <div className={`${className}__col`}>
              <div className={`${className}__left`}>
                <Link to="">Chính sách Quyền riêng tư</Link>
                <Link to="">Điều khoản và Điều kiện</Link>
                <Link to="">Nghề nghiệp</Link>
                <Link to="">Liên hệ</Link>
              </div>
              <div className={`${className}__mid`}>
                <Link to="">
                  <img src="https://www.cambly.com/static/images/twitter_logo25.png" alt="Twitter" />
                </Link>
                <Link to="">
                  <img src="https://www.cambly.com/static/images/instagram_logo24.png" alt="Instagram" />
                </Link>
                <Link to="">
                  <img src="https://www.cambly.com/static/images/facebook_logo25.png" alt="Facebook" />
                </Link>
                <Link to="">
                  <img
                    src="https://www.cambly.com/static/images/youtube_social_square_red.png"
                    alt="Youtube"
                  />
                </Link>
              </div>
              <div className={`${className}__right`}>
                <span className={`${className}__text`}>
                  <span>Cambly Inc. © Copyright 2022. All Rights Reserved.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
