import FaceRecogImg from "../../assets/face-recog.jpg"

const First = () => {
  return (
    <>
        <div style={{
            width: "100vw",
            height: "calc(100vh - 80px)",
            backgroundColor: "#FFE1E1",
            display: "flex",
        }}>
            <div style={{
                width: "50vw",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img src={FaceRecogImg} style={{
                    borderRadius: "10px",
                    width: "40vw",
                    height: "50vh",
                    objectFit: "cover"
                }}/>
            </div>
            <div style={{
                width: "50vw",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    width: "60%",
                    height: "50vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    fontStyle: "italic",
                }}>
                <div style={{
                    width: "100%",
                }}>
                    <h1 style={{
                        fontWeight: "700",
                        fontSize: "40px"
                    }}>Simple Verification</h1>
                </div>
                <p style={{
                    fontWeight: "300",
                    fontSize: "20px"
                }}>Users can easily identify themselves through secondary authentication tools that can distinguish themselves, such as mobile phones</p>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "10px",
                    textDecoration: "underline",
                }}>
                    <h3 style={{
                        cursor: "pointer"
                    }}>Read About Our Community Guidelines</h3>
                    <h3 style={{
                        cursor: "pointer"
                    }}>See all safety features</h3>
                </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default First;
