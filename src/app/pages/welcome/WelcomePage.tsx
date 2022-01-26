import React, { useEffect, useState } from "react";
import { Link, Location, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../../styles/components/_welcome.scss";
import { apiService } from "../../api/apiService";
import { ITraining, ITrainingEnum } from "../../api/models/trainingModel";
interface WelcomePageProps {

}

const WelcomePage: React.FC<WelcomePageProps> = () => {
    const location: Location = useLocation();
    const navigate = useNavigate();
    const [training, setTraining] = useState<ITraining<ITrainingEnum>[]>([]);
    
    useEffect(() => {
        async function getTraining() {
            const trainingData: ITraining<ITrainingEnum>[] = await apiService.get("training");
            setTraining(trainingData);
        }
        if (location.pathname === "/frontend" || location.pathname === "/backend") {
           getTraining();
        }
      },[location]);

    const handleFront = async () => {
        if (location.pathname == "/") {
            const trainingData: ITraining<ITrainingEnum>[] = await apiService.get("training");
            setTraining(trainingData);
            navigate(`/frontend`);
        } else 
            navigate(`/`);
    };

    return (
        <div id="welcome" >
            <main className={`wrap wrap-main ${(location.pathname === '/frontend') ? 'front' : ''} ${(location.pathname === '/backend') ? 'back' : ''}`}>
                <header className="header-main">
                    <div>
                        <h1>Fran<span>Guzmán</span></h1>
                    </div>
                </header>
                <div onClick={async () =>{await handleFront();} }>
                    <section id="welFront" className={`main-section frontend ${(location.pathname === '/frontend') ? 'active' : ''}`}>
                        <div className="wrap-section">
                            <header>
                                <h2>front-end
                                    <span>developer</span>
                                </h2>
                            </header>
                        </div>
                    </section>
                </div>
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
                <Outlet context={[training, setTraining]}/> 
            </main>
        </div>

    )
}

export default WelcomePage;