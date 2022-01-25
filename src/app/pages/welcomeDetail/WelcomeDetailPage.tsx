import React from "react";
import { useOutletContext } from "react-router-dom";
import { ITraining, ITrainingEnum } from "../../api/training/trainingModel";
import TimeLineList from "../../components/timeline/timelineList/TimeLineList";

interface WelcomeDetailPageProps {
    training?: ITraining<ITrainingEnum>[]
}

type TrainingContextType = [
    training: Array<ITraining<ITrainingEnum>>,
    changeValue: (arg: number | null) => void
]

const WelcomeDetailPage: React.FC<WelcomeDetailPageProps> = () => {
    const [training] = useOutletContext<TrainingContextType>(); 
    const trainingEducation: Array<ITraining<ITrainingEnum>> = training.filter((training: ITraining<ITrainingEnum>) =>
        training.type === ITrainingEnum.Education
    )
    const trainingExperience: Array<ITraining<ITrainingEnum>> = training.filter((training: ITraining<ITrainingEnum>) =>
        training.type === ITrainingEnum.Experience
    )

    return (
        <article id="welcomeDetail">
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
                            <div className="skills-info skills-second-style">
                                {/* <!-- Skill 1 --> */}
                                <div className="skill clearfix">
                                    <h4>Angular</h4>
                                    <div className="skill-value">95%</div>
                                </div>
                                <div className="skill-container skill-95">
                                    <div className="skill-percentage"></div>
                                </div>
                                {/* <!-- End of Skill 1 --> */}

                                {/* <!-- Skill 2 --> */}
                                <div className="skill clearfix">
                                    <h4>React</h4>
                                    <div className="skill-value">65%</div>
                                </div>
                                <div className="skill-container skill-65">
                                    <div className="skill-percentage"></div>
                                </div>
                                {/* <!-- End of Skill 2 --> */}

                                {/* <!-- Skill 3 --> */}
                                <div className="skill clearfix">
                                    <h4>Ionic</h4>
                                    <div className="skill-value">75%</div>
                                </div>
                                <div className="skill-container skill-75">
                                    <div className="skill-percentage"></div>
                                </div>
                                {/* <!-- End of Skill 3 --> */}

                                {/* <!-- Skill 4 --> */}
                                <div className="skill clearfix">
                                    <h4>Vue</h4>
                                    <div className="skill-value">25%</div>
                                </div>
                                <div className="skill-container skill-25">
                                    <div className="skill-percentage"></div>
                                </div>
                                {/* <!-- End of Skill 3 --> */}
                            </div>
                        </section>

                        <section>
                            <h3>Code <span>Skills</span></h3>
                            <div className="skills-info skills-second-style">
                                {/* <!-- Skill 1 --> */}
                                <div className="skill clearfix">
                                    <h4>HTML5/CSS3</h4>
                                    <div className="skill-value">95%</div>
                                </div>
                                <div className="skill-container skill-95">
                                    <div className="skill-percentage"></div>
                                </div>
                                {/* <!-- End of Skill 1 --> */}

                                {/* <!-- Skill 2 --> */}
                                <div className="skill clearfix">
                                    <h4>Javascript</h4>
                                    <div className="skill-value">100%</div>
                                </div>
                                <div className="skill-container skill-100">
                                    <div className="skill-percentage"></div>
                                </div>
                                {/* <!-- End of Skill 2 --> */}

                                {/* <!-- Skill 3 --> */}
                                <div className="skill clearfix">
                                    <h4>Typescript</h4>
                                    <div className="skill-value">90%</div>
                                </div>
                                <div className="skill-container skill-90">
                                    <div className="skill-percentage"></div>
                                </div>
                                {/* <!-- End of Skill 3 --> */}

                                {/* <!-- Skill 4 --> */}
                                <div className="skill clearfix">
                                    <h4>SCSS</h4>
                                    <div className="skill-value">60%</div>
                                </div>
                                <div className="skill-container skill-60">
                                    <div className="skill-percentage"></div>
                                </div>
                                {/* <!-- End of Skill 4 --> */}

                            </div>
                        </section>
                        <section>
                            <h3>Test <span>Skills</span></h3>
                            <div className="skills-info skills-second-style">
                                {/* <!-- Skill 1 --> */}
                                <div className="skill clearfix">
                                    <h4>Jest, Enzyme</h4>
                                    <div className="skill-value">75%</div>
                                </div>
                                <div className="skill-container skill-75">
                                    <div className="skill-percentage"></div>
                                </div>
                                {/* <!-- End of Skill 1 --> */}

                                {/* <!-- Skill 2 --> */}
                                <div className="skill clearfix">
                                    <h4>Protactor</h4>
                                    <div className="skill-value">40%</div>
                                </div>
                                <div className="skill-container skill-40">
                                    <div className="skill-percentage"></div>
                                </div>
                                {/* <!-- End of Skill 2 --> */}

                                {/* <!-- Skill 3 --> */}
                                <div className="skill clearfix">
                                    <h4>Jasmine, Karma </h4>
                                    <div className="skill-value">35%</div>
                                </div>
                                <div className="skill-container skill-35">
                                    <div className="skill-percentage"></div>
                                </div>
                                {/* <!-- End of Skill 3 --> */}
                            </div>
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