interface FlexDivProps {
  children: React.ReactNode;
}

const FlexDiv = ({ children }: FlexDivProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {children}
    </div>
  );
};

export default FlexDiv;
