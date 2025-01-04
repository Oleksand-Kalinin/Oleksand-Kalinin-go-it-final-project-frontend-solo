import { useState } from "react";
import UserBar from "../UserBar/UserBar.tsx";
import css from "./UserPanel.module.css";
import UserBarPopover from "../UserBarPopover/UserBarPopover.tsx";

const UserPanel = () => {
  const [showUserBarPopover] = useState(true);
  return (
    <div className={css.wrapperUserPanel}>
      <p className={css.titleUserPanel}>
        Hello
        <span className={css.nameAcceptWeight}>, Nadia!</span>
      </p>
      <div className={css.wrapperUserBar}>
        <UserBar />
        {showUserBarPopover && <UserBarPopover />}
      </div>
    </div>
  );
};

export default UserPanel;
