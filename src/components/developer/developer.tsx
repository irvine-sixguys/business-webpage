import DeveloperImg from "../../assets/developer.jpg"

const Developer = () => {
    return (
        <>
            <div style={{
                backgroundColor: "#fafbfd",
                width: "100vw",
                height: "calc(100vh - 80px)",
                display: "flex"
            }}>
                <div style={{
                    width: "50vw",
                    height: "100%",
                    fontStyle: "italic",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "60%",
                        height: "25vh"
                    }}>
                        <h1 style={{
                           fontWeight: "700",
                           fontSize: "40px" 
                        }}>Authentication Kit</h1>
                        <p>We offer a development kit specifically designed for companies and developers who need to add authentication to their products. These kits allow users to easily integrate simple and secure authentication features. Our solutions help companies safely verify customer identity and enhance the security of their services.</p>
                    </div>
                </div>


                <div style={{
                    width: "50vw",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={DeveloperImg} style={{
                        borderRadius: "10px",
                        width: "40vw",
                        height: "55vh",
                        objectFit: "cover"
                    }}/>
                </div>
            </div>
        </>
    )
}

export default Developer;