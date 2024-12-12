type sectionProps = {
  children: React.ReactNode;
  paddingTop?: string;
  paddingBottom?: string;
};

const Section = ({ children, paddingTop, paddingBottom }: sectionProps) => {
  const sectionStyle = {
    paddingTop: paddingTop || "16px",
    paddingBottom: paddingBottom || "16px",
  };

  return <section style={sectionStyle}>{children}</section>;
};

export default Section;
