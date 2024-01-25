const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "80px",
        position: "sticky",
        top: "0px",
        left: "0px",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100
      }}
    >
      <h1
        style={{
          fontWeight: 900,
          color: "#b92629",
          fontStyle: "italic",
          fontSize: "36pt",
          margin: 0,
          textAlign: "center",
        }}
      >
        SIX GUYS
      </h1>
    </div>
  );
};

export default Header;
