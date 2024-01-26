import PaymentImg from "../../assets/payment.jpg"

const Second = () => {
    return (
        <>
            <div style={{
                backgroundColor: "#F1EFEF",
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
                        height: "30vh"
                    }}>
                        <h1 style={{
                           fontWeight: "700",
                           fontSize: "40px" 
                        }}>Simple Payment</h1>
                        <p>Users don’t need to write down their card numbers every time they use the payment function. User payment information is kept secure.</p>
                    </div>
                </div>

                <div style={{
                    width: "50vw",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={PaymentImg} style={{
                        borderRadius: "10px",
                        width: "40vw",
                        height: "50vh",
                        objectFit: "cover"
                    }}/>
                </div>
            </div>
        </>
    )
}

export default Second;