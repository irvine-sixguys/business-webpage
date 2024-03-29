import GuySmilingImage from "../../assets/guy-smiling.jpg";
const Start = () => {
  return (
    <div
      style={{
        position: "relative",
        marginBottom: "-3.5px"
      }}
    >
      <img
        src={GuySmilingImage}
        style={{
          width: "100vw",
          height: "calc(100vh - 80px)",
          objectFit: "cover",
        }}
        alt="Guy smiling"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "25vw",
          height: "40vh",
          backgroundColor: "##ffffff",
          backdropFilter: "blur(20px)",
          borderRadius: "10px",
          position: "absolute",
          right: "5vw",
          top: "5vw",
          padding: "50px 60px",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "3vw",
            fontStyle: "italic",
            fontWeight: 800,
            // fontFamily:
            //   "Roboto, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans','Liberation Sans', sans-serif",
          }}
        >
          Multi-device <br/> All-in-one <br/> ID Verification Platform
        </h1>
        <button
          style={{
            backgroundColor: "#b92629",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            padding: "10px 15px",
            fontSize: "16pt",
            fontWeight: 300,
            cursor: "pointer",
            marginTop: "20px",
            width: "fit-content",
          }}
        >
          Sign Up
        </button>
        <a
          style={{
            marginTop: "20px",
            textDecoration: "underline",
            color: "#000000",
            cursor: "pointer",
          }}
        >
          Six Guys for Business
        </a>
      </div>
    </div>
  );
};

export default Start;
