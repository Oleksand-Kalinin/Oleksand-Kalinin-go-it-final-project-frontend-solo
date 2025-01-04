import { useEffect } from "react";

import sprite from "../../images/sprite.svg";

import css from "./UserBarPopover.module.css";

const UserBarPopover = () => {
  const handleClickSetting = () => {
    console.log("handleClickSetting");
  };

  const handleClickLogOut = () => {
    console.log("handleClickLogOut");
  };
  useEffect(() => {
    const handleClickDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        console.log("handleClickDown");
      }
    };

    const handleClickBackDrop = (event: MouseEvent) => {
      // if (userBarRef.current && !userBarRef.current.contains(event.target)) {
      //   closeUserBarPopover();
      // }
      console.log("handleClickBackDrop", event.target);
    };

    window.addEventListener("keydown", handleClickDown);

    window.addEventListener("mousedown", handleClickBackDrop);

    return () => {
      window.removeEventListener("keydown", handleClickDown);
      window.removeEventListener("mousedown", handleClickBackDrop);
    };
  }, []);

  return (
    <div className={css.wrapperUserBarPopover}>
      <button
        className={css.btnUserBarPopover}
        type="button"
        onClick={handleClickSetting}
      >
        <svg className={css.iconSetting} width="16" height="16">
          <use href={`${sprite}#settings-icon`}></use>
        </svg>
        Setting
      </button>

      <button
        className={css.btnUserBarPopover}
        type="button"
        onClick={handleClickLogOut}
      >
        <svg className={css.iconLogOut} width="16" height="16">
          <use href={`${sprite}#log-out-icon`}></use>
        </svg>
        Log out
      </button>
    </div>
  );
};

export default UserBarPopover;
