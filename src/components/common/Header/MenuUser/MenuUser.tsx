import React from 'react';
import './MenuUser.scss';

import { Link, useHistory } from 'react-router-dom';

interface MenuUser {
  showMenu: boolean;
}

export const MenuUser = ({ showMenu = false }: MenuUser) => {
  const className = 'menu-user';
  const history = useHistory();

  const handleLogout = () => {
    window.localStorage.clear();
    history.push({
      pathname: `/log-out`,
    });
  };

  return (
    <div className={`${className} ${showMenu ? 'menu-user--show' : ''}`}>
      <ul className={`${className}__list`}>
        <Link to="" className={`${className}__item`}>
          Đăng ký gói học
          <span className={`${className}__line`}></span>
        </Link>
        <Link to="" className={`${className}__item`}>
          Cài đặt Tài khoản
          <span className={`${className}__line`}></span>
        </Link>
        <Link to="" className={`${className}__item`}>
          Tin nhắn
          <span className={`${className}__line`}></span>
        </Link>
        <Link to="" className={`${className}__item`}>
          Lịch học
          <span className={`${className}__line`}></span>
        </Link>
        <Link to="" className={`${className}__item`}>
          Phút miễn phí
          <span className={`${className}__line`}></span>
        </Link>
        <Link to="" className={`${className}__item`}>
          Mã giới thiệu
          <span className={`${className}__line`}></span>
        </Link>
        <Link to="" className={`${className}__item`} onClick={handleLogout}>
          Đăng xuất
          <span className={`${className}__line`}></span>
        </Link>
      </ul>
    </div>
  );
};
