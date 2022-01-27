import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { apiService } from "../../api/apiService";
import { ITraining, ITrainingEnum } from "../../api/models/trainingModel";
import SkillList from "../../components/skill/skillList/skillList";
import TimeLineList from "../../components/timeline/timelineList/TimeLineList";
import { PathContext } from "../../context/pathContext";

interface WelcomeDetailPageProps {
    training?: ITraining<ITrainingEnum>[]
}

type TrainingContextType = [
    training: Array<ITraining<ITrainingEnum>>,
    changeValue: (arg: number | null) => void
]

const WelcomeDetailPage: React.FC<WelcomeDetailPageProps> = () => {
    const {path}= React.useContext(PathContext) as ContextType;
    const [training] = useOutletContext<TrainingContextType>(); 
    const [welcomeDetail, setWelcomeDetail] = useState<any>({});
    const trainingEducation: Array<ITraining<ITrainingEnum>> = training.filter((training: ITraining<ITrainingEnum>) =>
        training.type === ITrainingEnum.Education
    )
    const trainingExperience: Array<ITraining<ITrainingEnum>> = training.filter((training: ITraining<ITrainingEnum>) =>
        training.type === ITrainingEnum.Experience
    )

    useEffect(() => {
        async function getPage(page: string) {
            const endpoint: string = page.slice(1,page.length);
            const data: ITraining<ITrainingEnum>[] = await apiService.get(endpoint);
            setWelcomeDetail(data);
        }
        if (path.path === "/frontend" || path.path === "/backend") {
            getPage(path.path);
        }

      }, [path]);


    return (
        <article id="welcomeDetail"  className={`${(path.path === '/frontend') ? 'frontend' : ''} ${(path.path === '/backend') ? 'backend' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <section>
                            <h3>Academic qualifications</h3>
                            <TimeLineList list={trainingEducation}/>
                        </section>
                        <section>
                            <h3>Work experience</h3>
                            <TimeLineList list={trainingExperience}/>
                        </section>
                    </div>
                    <div className="col-sm-6">
                        <section>
                           <h3>Framework <span>Skills</span></h3>
                            {
                                <SkillList list={(welcomeDetail.skills)? welcomeDetail.skills.filter((skill: any) => skill.type === "Framework"): []} />
                            }        
                        </section>

                        <section>
                            <h3>Code <span>Skills</span></h3>
                            {
                                <SkillList list={(welcomeDetail.skills)? welcomeDetail.skills.filter((skill: any) => skill.type === "Code"): []} />
                            }
                        </section>
                        <section>
                            <h3>Test <span>Skills</span></h3>
                            {
                                <SkillList list={(welcomeDetail.skills)? welcomeDetail.skills.filter((skill: any) => skill.type === "Test"): []} />
                            }    
                        </section>
                        <section>
                            <h3>Librerias</h3>
                            <ul className="knowledges">
                                <li>XSTATE</li>
                                <li>RXJS</li>
                                <li>AXIOS</li>
                                <li>JQUERY</li>
                                <li>JQX</li>
                                <li>OData</li>
                                <li>Graphql</li>
                                <li>BOOTSTRAP UI</li>
                                <li>MATERIAL UI</li>
                                <li>SWAGGER UI</li>
                                <li>D3JS</li>
                                <li>CYTOSCAPEJS</li>
                                <li>HIGHCHARTS</li>
                                <li>APEXCHARTS</li>
                                <li>AG-GRID</li>
                                <li>DHTMLXGANTT</li>
                            </ul>
                        </section>
                        <section>
                            <h3>Patrones de diseño</h3>
                            <ul className="knowledges">
                                <li>Redux/state</li>
                                <li>Singleton</li>
                                <li>Constructor</li>
                                <li>Módulo</li>
                                <li>Decorador</li>
                                <li>Observador</li>
                                <li>Mediador</li>
                            </ul>
                        </section>

                        <section>
                            <h3>Conocimientos</h3>
                            <ul className="knowledges">
                                <li>Git/Git flow</li>
                                <li>API REST</li>
                                <li>Websockets</li>
                                <li>CORS</li>
                            </ul>
                        </section>

                        <section>
                            <h3>Herramientas</h3>
                            <ul className="knowledges">
                                <li>Visual Studio Code</li>
                                <li>Photoshop</li>
                                <li>Azure Devops</li>
                                <li>GIT LAB</li>
                                <li>GIT HUB</li>
                                <li>BITBUCKET</li>
                                <li>Sublime Text 2</li>
                                <li>Google Chrome Dev</li>
                                <li>Postman API</li>
                                <li>Source Tree</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default WelcomeDetailPage;