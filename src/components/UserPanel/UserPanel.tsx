import css from "./UserPanel.module.css";

const UserPanel = () => {
  return (
    <div className={css.wrapperUserPanel}>
      <p className={css.titleUserPanel}>
        Hello
        <span className={css.nameAcceptWeight}>, Nadia!</span>
      </p>
    </div>
  );
};

export default UserPanel;
