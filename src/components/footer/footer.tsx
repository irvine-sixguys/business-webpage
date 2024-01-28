import FacebookLogo from "../../assets/facebook_logo.png";
import InstagramLogo from "../../assets/instagram_logo.png";
import LinkedInLogo from "../../assets/linkedin_logo.png";
import TwitterLogo from "../../assets/twitter_logo.png";
import LanguageLogo from "../../assets/language_logo.png";
import LocationLogo from "../../assets/location_logo.png";
import PlayStoreLogo from "../../assets/play_store_logo.png";
import AppStoreLogo from "../../assets/app_store_logo.png";

import { useEffect, useRef, useState } from "react";

const Footer = () => {
    const canvasTopRef =  useRef<HTMLCanvasElement | null>(null);
    const canvasBottomRef =  useRef<HTMLCanvasElement | null>(null);
    const [isScaled, setScaled] = useState(false);

    useEffect(() => {
        const canvas = canvasTopRef.current;


        if (canvas) {
            const context = canvas.getContext("2d");

            if (context){
                // 캔버스 크기를 레티나 디스플레이에 맞게 설정
                if (!isScaled){
                    const scaleFactor = window.devicePixelRatio;
                    canvas.width = canvas.width * scaleFactor;
                    canvas.height = canvas.height * scaleFactor;
                    context.scale(scaleFactor, scaleFactor);
                    setScaled(true);
                }
                context.clearRect(0, 0, canvas.width, canvas.height);

                // 그림자 설정
                context.shadowColor = "rgba(0, 0, 0, 1)";
                context.shadowBlur = 5;
                context.shadowOffsetX = 0;
                context.shadowOffsetY = -2;

                // 곡선 그리기
                context.beginPath();
                context.moveTo(0, 20);
                context.quadraticCurveTo(canvas.width / 4, 100, canvas.width / 2, 20);

                // 라인 그리기
                context.lineTo(canvas.width / 2, canvas.height / 2);
                context.lineTo(0, canvas.height / 2);
                context.lineTo(0, 20);

                context.closePath(); // 시작점과 끝점을 연결하여 닫힌 도형으로 만듭니다.

                context.fillStyle = "#b92629";
                context.fill(); // 채우기
            }
        }
    }, [])

    useEffect(() => {
        const canvas = canvasBottomRef.current;


        if (canvas) {
            const context = canvas.getContext("2d");

            if (context){
                // 캔버스 크기를 레티나 디스플레이에 맞게 설정
                if (!isScaled){
                    const scaleFactor = window.devicePixelRatio;
                    canvas.width = canvas.width * scaleFactor;
                    canvas.height = canvas.height * scaleFactor;
                    context.scale(scaleFactor, scaleFactor);
                    setScaled(true);
                }
                context.clearRect(0, 0, canvas.width, canvas.height);

                // 그림자 설정
                context.shadowColor = "rgba(0, 0, 0, 0.6)";
                context.shadowBlur = 20;
                context.shadowOffsetX = 0;
                context.shadowOffsetY = -5;

                // 곡선 그리기
                context.beginPath();
                context.moveTo(0, 150);
                context.quadraticCurveTo(canvas.width / 4, 50, canvas.width / 2, 150);

                // 라인 그리기
                context.lineTo(canvas.width / 2, canvas.height / 2);
                context.lineTo(0, canvas.height / 2);
                context.lineTo(0, 150);

                context.closePath(); // 시작점과 끝점을 연결하여 닫힌 도형으로 만듭니다.

                context.fillStyle = "#b34b47";
                context.fill(); // 채우기
            }
        }
    }, [])

    return (
        <>
            <div style={{
                width: "100vw",
                height: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                paddingTop: "5vh",
                boxSizing: "border-box",
                overflow: "hidden",
            }}>
                <canvas ref={canvasTopRef} style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "-20px",
                    position: "absolute",
                    top: "0px",
                    zIndex: "-1",
                    overflow: "hidden",
                }}/>

                <div style={{
                    height: "50%",
                    width: "60%",
                    display: "flex",
                    color: "white"
                }}>
                    <div style={{
                        width: "30%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}>
                        <h1 style={{
                            fontWeight: "900",
                            fontStyle: "italic",
                            fontSize: "2.8vw",
                            marginBottom: "2vh"
                        }}>SIX GUYS</h1>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "75%",
                            marginBottom: "1.5vh"
                        }}>
                            <img src={FacebookLogo} style={{height: "2vw", width: "2vw", cursor: "pointer"}}/>
                            <img src={InstagramLogo} style={{height: "2vw", width: "2vw", cursor: "pointer"}}/>
                            <img src={LinkedInLogo} style={{height: "2vw", width: "2vw", cursor: "pointer"}}/>
                            <img src={TwitterLogo} style={{height: "2vw", width: "2vw", cursor: "pointer"}}/>
                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "75%",
                            marginBottom: "1vh"
                        }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <img src={LanguageLogo} style={{
                                    height: "1.2vw", width: "1.2vw",
                                    marginRight: "0.5vw"
                                }} />
                                <span style={{
                                    fontSize: "1vw"
                                }}>English</span>
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <img src={LocationLogo} style={{
                                    height: "1.5vw", width: "1.5vw",
                                    marginRight: "0.3vw"
                                }} />
                                <span style={{
                                    fontSize: "1vw"
                                }}>Location</span>
                            </div>
                        </div>

                        <h3 style={{
                            fontSize: "1vw",
                            fontWeight: "300",
                            marginBottom: "1vh"
                        }}>Visit Help Center</h3>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "85%",
                            marginBottom: "1vh"
                        }}>
                            <img src={PlayStoreLogo} style={{
                                width: "7vw",
                                cursor: "pointer"
                            }}  />

                            <img src={AppStoreLogo} style={{
                                width: "7vw",
                                cursor: "pointer"
                            }} />
                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "85%"
                        }}>
                            <span style={{
                                fontWeight: "200",
                                fontSize: "1vw"
                            }}>Privacy</span>
                            <span style={{
                                fontWeight: "200",
                                fontSize: "1vw"
                            }}>Accessibility</span>
                            <span style={{
                                fontWeight: "200",
                                fontSize: "1vw"
                            }}>Terms</span>
                        </div>
                    </div>
                    <div style={{
                        width: "70%",
                        height: "90%",
                        paddingTop: "2vh",
                        paddingLeft: "2vw",
                        justifyContent: "space-between",
                        boxSizing: "border-box"
                    }}>
                        <h2 style={{
                            fontSize: "1.5vw",
                            fontWeight: "400",
                            cursor: "pointer",
                            marginBottom: "8vh"
                        }}>Business Page</h2>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "60%"
                        }}>
                            <h2 style={{
                                fontSize: "1.5vw",
                                fontWeight: "400"
                            }}>Company</h2>

                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                height: "60%"
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "100%"
                                }}>
                                    <span style={{
                                        fontWeight: "300",
                                        fontSize: "1vw",
                                        cursor: "pointer"
                                    }}>About Us</span>
                                    <span style={{
                                        fontWeight: "300",
                                        fontSize: "1vw",
                                        cursor: "pointer"
                                    }}>Investors</span>
                                    <span style={{
                                        fontWeight: "300",
                                        fontSize: "1vw",
                                        cursor: "pointer"
                                    }}>AI</span>
                                </div>

                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "100%"
                                }}>
                                    <span style={{
                                        fontWeight: "300",
                                        fontSize: "1vw",
                                        cursor: "pointer"
                                    }}>Our offerings</span>
                                    <span style={{
                                        fontWeight: "300",
                                        fontSize: "1vw",
                                        cursor: "pointer"
                                    }}>blog</span>
                                    <span style={{
                                        fontWeight: "300",
                                        fontSize: "1vw",
                                        cursor: "pointer"
                                    }}>Gift Cards</span>
                                </div>

                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "100%"
                                }}>
                                    <span style={{
                                        fontWeight: "300",
                                        fontSize: "1vw",
                                        cursor: "pointer"
                                    }}>Newsroom</span>
                                    <span style={{
                                        fontWeight: "300",
                                        fontSize: "1vw",
                                        cursor: "pointer"
                                    }}>Careers</span>
                                    <span style={{
                                        fontWeight: "300",
                                        fontSize: "1vw",
                                        cursor: "pointer"
                                    }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    position: "absolute",
                    bottom: "0px",
                    width: "100vw",
                    height: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                }}>
                    <canvas ref={canvasBottomRef} style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "0px",
                        boxSizing: "border-box",
                    }}/>

                    <span style={{
                        zIndex: "2",
                        color: "white",
                        fontSize: "1vw",
                        fontWeight: "200",
                        marginTop: "5vh"
                    }}>© 2024 Sixguys Technologies Inc.</span>
                </div>
            </div>
        </>
    )
}

export default Footer;