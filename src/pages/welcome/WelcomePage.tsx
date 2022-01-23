import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes, useLocation, useNavigate, } from "react-router-dom";
import "../../styles/components/_welcome.scss";

interface WelcomePageProps {

}

const WelcomePage: React.FC<WelcomePageProps> = () => {
    let location = useLocation();
    return (
        <div id="welcome" >
            <main className={`wrap wrap-main ${(location.pathname === '/frontend') ? 'front' : ''} ${(location.pathname === '/backend') ? 'back' : ''}`}>
                <header className="header-main">
                    <div>
                        <h1>Fran<span>Guzmán</span></h1>
                    </div>
                </header>
                <Link to="frontend">
                    <section id="welFront" className={`main-section frontend ${(location.pathname === '/frontend') ? 'active' : ''}`}>
                        <div className="wrap-section">
                            <header>
                                <h2>front-end
                                    <span>developer</span>
                                </h2>
                            </header>
                        </div>
                    </section>
                </Link>
                <Link to="backend">
                    <section id="welBack" className={`main-section backend ${(location.pathname === '/backend') ? 'active' : ''}`}>
                        <div className="wrap-section">
                            <header>
                                <h2>back-end
                                    <span>developer</span>
                                </h2>
                            </header>
                        </div>
                    </section>
                </Link>

                <Outlet />
            </main>
        </div>

    )
}

export default WelcomePage;