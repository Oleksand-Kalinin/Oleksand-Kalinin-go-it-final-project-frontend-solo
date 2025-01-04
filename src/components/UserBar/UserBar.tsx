import sprite from "../../images/sprite.svg";

import css from "./UserBar.module.css";

const UserBar = () => {
  const showIconArrow = true;

  return (
    <button className={css.btnUserBar} type="button">
      <p className={css.nameUserBar}>Nadia</p>
      <img
        className={css.photoUser}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJ9IxK3v4g_zbQSxxaCesMRGSnrBT43T-6w&s"
        alt="user's photo"
      />
      {showIconArrow && (
        <svg className={css.iconArrowDown}>
          <use href={`${sprite}#chevron-down-icon`}></use>
        </svg>
      )}
      {!showIconArrow && (
        <svg className={css.iconArrowUp}>
          <use href={`${sprite}#chevron-up-icon`}></use>
        </svg>
      )}
    </button>
  );
};

export default UserBar;
