import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../../../styles/components/_welcome.scss";
import { apiService } from "../../api/apiService";
import { ITraining, ITrainingEnum } from "../../api/models/trainingModel";
import { PathContext } from "../../context/pathContext";
interface WelcomePageProps {

}

const WelcomePage: React.FC<WelcomePageProps> = () => {
    const {path, updatePath}= React.useContext(PathContext) as ContextType;
    const navigate = useNavigate();
    const [training, setTraining] = useState<ITraining<ITrainingEnum>[]>([]);
    
    useEffect(() => {
        async function getTraining() {
            const trainingData: ITraining<ITrainingEnum>[] = await apiService.get("training");
            setTraining(trainingData);
        }
        if (path.path === "/frontend" || path.path === "/backend") {
           getTraining();
        }
      },[path]);
  
    const handleFront = async () => {
        if (path.path === "/") {   
            navigate(`/frontend`);
            updatePath({path: '/frontend' });
        } else {
            navigate(`/`);
            updatePath({path: '/' });
        }
    };

    return (
        <div id="welcome" >
            <main className={`wrap wrap-main ${(path.path === '/frontend') ? 'front' : ''} ${(path.path === '/backend') ? 'back' : ''}`}>
                <header className="header-main">
                    <div>
                        <h1>Fran<span>Guzmán</span></h1>
                    </div>
                </header>
                <div onClick={async () =>{await handleFront();} }>
                    <section id="welFront" className={`main-section frontend ${(path.path === '/frontend') ? 'active' : ''}`}>
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
                    <section id="welBack" className={`main-section backend ${(path.path === '/backend') ? 'active' : ''}`}>
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