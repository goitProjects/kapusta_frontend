import React from 'react';
import { useSelector } from 'react-redux';
import s from './UserInfo.module.css';

const UserInfo = () => {
  const UserName = useSelector(state => state.session.user.userData.email);
  const aUserName = UserName.toUpperCase().slice(0, 1);
  const indexUN = UserName.indexOf('@');
  const UserNameCut = UserName.slice(0, indexUN);
  const userImage = useSelector(state => state.session.user.userData.photo);
  const userFullName = useSelector(
    state => state.session.user.userData.name.fullName,
  );
  const checkUserName = useSelector(state => state.session.user.userData.name);

  return (
    <div className={s.user_page_block}>
      {Object.keys(checkUserName).length > 0 ? (
        <>
          <div className={s.user_pic}>
            <img src={userImage} alt="userImg" className={s.user_pic} />
          </div>
          <p className={s.user_name_full}>{userFullName}</p>
        </>
      ) : (
        <>
          <div className={s.user_pic}>
            <p className={s.user_pic_letter}>{aUserName}</p>
          </div>
          <p className={s.user_name_full}>{UserNameCut}</p>
        </>
      )}
    </div>
  );
};

export default UserInfo;
