import React from "react";

interface WelcomeDetailPageProps {

}

const WelcomeDetailPage: React.FC<WelcomeDetailPageProps> = () => {
    return (
        <article id="welcomeDetail">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <section>
                            <h3>Formación</h3>
                            <div className="timeline timeline-second-style clearfix">
                                <div className="timeline-item clearfix">
                                    <div className="left-part">
                                        <h5 className="item-period">2016</h5>
                                        <span className="item-company">Universidad de Ávila</span>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="right-part">
                                        <h4 className="item-title">Adaptación al Grado en Ingeniería de Sistemas de la información</h4>
                                        <p>Curso universitario de Adaptación al Grado en Ingenieria de Sistemas de la información por la Univesidad de Ávila</p>
                                    </div>
                                </div>

                                <div className="timeline-item clearfix">
                                    <div className="left-part">
                                        <h5 className="item-period">2011</h5>
                                        <span className="item-company">Universidad de Jaén</span>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="right-part">
                                        <h4 className="item-title">Ingeniería Técnica en informatica de Gestión</h4>
                                        <p>Estudios universitarios cuya disciplina combina una importante carga docente en economía y gestión empresarial con la adquisición de conocimientos cientificos y técnicos, para el diseño e implementacion de sistemas y procesos de gestión de las tecnologías de la información y la comunicación</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3>Experiencia</h3>
                            <div className="timeline timeline-second-style clearfix">
                                <div className="timeline-item clearfix">
                                    <div className="left-part">
                                        <h5 className="item-period">2016 - Actualidad</h5>
                                        <span className="item-company">Ezentis Tecnología</span>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="right-part">
                                        <h4 className="item-title">Senior FullStack Developer | UX Designer</h4>
                                        <p>Participando en varios proyectos de trabajo (WFM, ESCAPEX, ALPHA), orientado en la especificación y diseño de interfaces, así como
                                            en su implementación. Teniendo amplia experiencia en frameworks cliente (Angular 12, Ionic 5), dando soluciones tanto de arquitectura modular,
                                            como apoyando al equipo de trabajo.
                                        </p>
                                    </div>
                                </div>

                                <div className="timeline-item clearfix">
                                    <div className="left-part">
                                        <h5 className="item-period">2014 - 2016</h5>
                                        <span className="item-company">Hispavista - RTVE.es</span>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="right-part">
                                        <h4 className="item-title">Developer | Junior Ui/Ux Designer</h4>
                                        <p>Trabajando en el departamento de Interactivos de RTVE.es en la implementación y diseño de infografías interactivas basadas principalmente
                                            en HTML5, CSS3, JQUERY y D3JS. Coordinando y proporcionando ayuda al equipo de trabajo, asi como realizando el analisis y la toma de requisitos
                                            de los periodistas de RTVE.es.
                                        </p>
                                    </div>
                                </div>

                                <div className="timeline-item clearfix">
                                    <div className="left-part">
                                        <h5 className="item-period">2013 - 2014</h5>
                                        <span className="item-company">Evolgroup Internet S.A.</span>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="right-part">
                                        <h4 className="item-title">Junior Developer</h4>
                                        <p>Programador web en tecnología .NET y profundizando en el aprendizaje de tecnologías MEAN, asi como manteniendo aplicaciones moviles (Windows Phone) </p>
                                    </div>
                                </div>

                                <div className="timeline-item clearfix">
                                    <div className="left-part">
                                        <h5 className="item-period">2012</h5>
                                        <span className="item-company">Asesoría abakonasesores S.L.</span>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="right-part">
                                        <h4 className="item-title">Junior Developer</h4>
                                        <p>Creación de una herramienta para la gestión online de la Asesoria mediante PHP y MySQL</p>
                                    </div>
                                </div>

                                <div className="timeline-item clearfix">
                                    <div className="left-part">
                                        <h5 className="item-period">2011</h5>
                                        <span className="item-company">CFP Eureka C.B.</span>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="right-part">
                                        <h4 className="item-title">Junior Developer</h4>
                                        <p>Diseño y implementacion de una plataforma docente basada en Moodle para la impartición de cursos, asi como una frontal web JOOMLA para la visibilidad de la empresa y matriculación de los alumnos </p>
                                    </div>
                                </div>
                            </div>
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