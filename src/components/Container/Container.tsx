import css from "./Container.module.css";

type containerProps = {
  children: React.ReactNode;
  padding?: string;
  bgColor?: string;
};

const Container = ({ children, padding, bgColor }: containerProps) => {
  const containerStyle = {
    padding: padding || "16px",
    backgroundColor: bgColor || "transparent",
  };
  return (
    <div style={containerStyle} className={css.container}>
      {children}
    </div>
  );
};

export default Container;
