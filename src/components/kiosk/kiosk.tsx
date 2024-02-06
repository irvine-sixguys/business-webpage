import KioskImg from "../../assets/kiosk.jpg"

const Kiosk = () => {
    return (
        <>
            <div style={{
                backgroundColor: "#FFFFFF",
                width: "100vw",
                height: "calc(100vh - 80px)",
                display: "flex"
            }}>
                <div style={{
                    width: "50vw",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={KioskImg} style={{
                        borderRadius: "10px",
                        width: "40vw",
                        height: "55vh",
                        objectFit: "cover"
                    }}/>
                </div>

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
                        }}>Various devices</h1>
                        <p>We offer solutions that target different devices, such as kiosks. This technological convenience allows our customers to have an efficient and secure authentication experience.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kiosk;