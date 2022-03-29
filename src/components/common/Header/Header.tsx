import React, { useState } from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';
import { MdMessage } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

import { MenuUser } from './MenuUser/MenuUser';

export const Header = () => {
  const className = 'header';
  const [openMenuUser, setOpenMenuUser] = useState(false);

  const handleClickMenuUser = () => {
    setOpenMenuUser(!openMenuUser);
  };

  return (
    <div className={className}>
      <div className={`${className}__content`}>
        <Link to={''} className={`${className}__logo`}>
          <img src="https://www.cambly.com/fe/static/logos/sm/primary.png" alt="Logo" />
        </Link>
        <div className={`${className}__tabs`}>
          <div className={`${className}__tabs--content`}>
            <div className={`${className}__tabs--flex`}>
              <Link to={''} className={`${className}__tabs--item`}>
                <span className={`${className}__tabs--title`}>Gia sư</span>
              </Link>
              <Link to={''} className={`${className}__tabs--item`}>
                <span className={`${className}__tabs--title`}>Khóa học</span>
              </Link>
              <Link to={''} className={`${className}__tabs--item`}>
                <span className={`${className}__tabs--title`}>Tiến độ</span>
              </Link>
            </div>
            <span className={`${className}__line`}></span>
          </div>
        </div>
        <div className={`${className}__flex--grow`}></div>
        <Link to={''} className={`${className}__register`}>
          <span className={`${className}__label`}>Đăng ký khóa học</span>
          <span className={`${className}__background`}></span>
        </Link>
        <div className={`${className}__btn`}>
          <div className={`${className}__btn--content`}>
            <button className={`${className}__btn--root`}>
              <span className={`${className}__label`}>
                <span className={`${className}__root`}>
                  <MdMessage size={24} />
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className={`${className}__btn`}>
          <div className={`${className}__btn--content`}>
            <button className={`${className}__btn--root`}>
              <span className={`${className}__label`}>
                <span className={`${className}__root`}>
                  <IoMdNotificationsOutline size={24} />
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className={`${className}__btn`}>
          <div className={`${className}__btn--content`}>
            <button className={`${className}__btn--root`}>
              <span className={`${className}__label`}>
                <span className={`${className}__root`}>
                  <AiOutlineCalendar size={24} />
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className={`${className}__btn`}>
          <div className={`${className}__btn--content`}>
            <button className={`${className}__btn--root`}>
              <span className={`${className}__label`}>
                <span className={`${className}__root`}>
                  <BsFillQuestionCircleFill size={24} />
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className={`${className}__btn`}>
          <div className={`${className}__btn--content`}>
            <button className={`${className}__btn--root`} onClick={handleClickMenuUser}>
              <span className={`${className}__label`}>
                <span className={`${className}__root`}>
                  <FaUserCircle size={24} />
                </span>
              </span>
            </button>
            <MenuUser showMenu={openMenuUser} />
          </div>
        </div>
      </div>
    </div>
  );
};
