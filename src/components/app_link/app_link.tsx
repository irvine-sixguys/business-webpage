import SixGuysLogo from "../../assets/logo.jpg"
import PlayStoreLogo from "../../assets/play_store_logo.png"
import AppStoreLogo from "../../assets/app_store_logo.png"

const AppLink = () => {
    return (
        <>
        <div style={{
            width: "100vw",
            height: "50vh",
            backgroundColor: "#b92629",
            boxSizing: "border-box",
            boxShadow: "0px 5px 20px #000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: "80%",
                height: "70%",
            }}>
                <h1 style={{
                    fontStyle: "italic",
                    fontWeight: "400",
                    fontSize: "30px",
                    color: "white"
                }}>There’s more to love in the apps</h1>
                <div style={{
                    width: "100%",
                    height: "20vh",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px #545454",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <img src={SixGuysLogo} style={{
                        width: "10%",
                        borderRadius: "10px"
                    }} />
                    <h2 style={{
                        color: "#b92629",
                        fontWeight: "400",
                        fontStyle: "italic",
                        fontSize: "2vw",
                    }}>Download the app</h2>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <img src={AppStoreLogo} style={{
                            width: "15vw",
                            cursor: "pointer",
                            marginRight: "15px"
                        }}/>

                        <img src={PlayStoreLogo} style={{
                            width: "15vw",
                            cursor: "pointer"
                        }}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AppLink;