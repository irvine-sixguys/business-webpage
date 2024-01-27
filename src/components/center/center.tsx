import AboutUsLogo from "../../assets/about_us_logo.png"
import NewsRoomLogo from "../../assets/newsroom_logo.png"
import GlobalCitizenshipLogo from "../../assets/global_citizenship_logo.png"

const CenterElement = (logoPath: string, title: string, description: string) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "25%",
            height: "20vh"
        }}>
            <img src={logoPath} style={{
                width:"30px",
                height:"30px"
            }}/>
            <h3 style={{
                fontWeight: "400"
            }}>{title}</h3>
            <p style={{
                fontWeight: "100"
            }}>{description}</p>
            <span style={{
                textDecoration: "underline",
                fontSize: "13px",
                cursor: "pointer"
            }}>Learn more</span>
        </div>
    )
}

const Center = () => {
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh"
            }}>
                <div style={{
                    width: "70vw",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    {CenterElement(AboutUsLogo, "About Us", "Find out how we started, what drives us, and how we’re igniting opportunity.") }
                    {CenterElement(NewsRoomLogo, "Newsroom", "See announcements about our latest releases, initiatives, and partnerships.") }
                    {CenterElement(GlobalCitizenshipLogo, "Global Citizenship", "Read about our commitment to making a positive impact in the cities we serve.") }
                </div>
            </div>
        </>
    )
}

export default Center;