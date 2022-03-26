import React from 'react';
import { Link } from 'react-router-dom';
import { MdMessage } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineCalendar } from 'react-icons/ai';

export const Header = () => {
  const className = 'header';

  return (
    <div className={className}>
      <div className={`${className}__content`}>
        <Link to={''} className={`${className}__logo`}>
          <img src="" alt="Logo" />
        </Link>
        <div className={`${className}__tabs`}>
          <div className={`${className}__tabs--content`}>
            <div className={`${className}__tabs--flex`}>
              <Link to={''} className={`${className}__tabs--item`}>
                <span>Gia sư</span>
              </Link>
              <Link to={''} className={`${className}__tabs--item`}>
                <span>Khóa học</span>
              </Link>
              <Link to={''} className={`${className}__tabs--item`}>
                <span>Tiến độ</span>
              </Link>
            </div>
            <span className={`${className}__line`}></span>
          </div>
          <div className={`${className}__flex--grow`}></div>
          <Link to={''} className={`${className}__register`}>
            <span className={`${className}__label`}>Đằng ký khóa học</span>
            <span className={`${className}__background`}></span>
          </Link>
          <div className={`${className}__btn`}>
            <div className={`${className}__btn--content`}>
              <button className={`${className}__btn--root`}>
                <span className={`${className}__label`}>
                  <span className={`${className}__root`}>
                    <MdMessage />
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
                    <IoMdNotificationsOutline />
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
                    <AiOutlineCalendar />
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
                    <AiOutlineCalendar />
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
                    <AiOutlineCalendar />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
