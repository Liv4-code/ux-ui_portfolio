// import Route from "../components/Route";
// import Lnk from "../components/Link";
import Link from "next/link";
import HomePage from ".//_home.js";
import ProjectsPage from ".//_projects";
import ContactPage from ".//_contact";
import "@/styles/globals.scss";
import "../styles/Home.scss";
import "../styles/Projects.scss";
import "../styles/Contact.scss";
import homeIcon from "../../public/assets/home-1.svg";
import projectsIcon from "../../public/assets/projects.svg";
import contactIcon from "../../public/assets/phone.svg";

export default function App({ Component, pageProps }) {
    return (
        <div className="container">
            <Component {...pageProps} />;
            {/* <div>
                <Route path="/">
                    <HomePage path="/" />
                </Route>
                <Route path="/projects">
                    <ProjectsPage path="/projects" />
                </Route>
                <Route path="/contact">
                    <ContactPage path="/contact" />
                </Route>
            </div> */}
            <div className="navigation-container">
                <nav className="navigation">
                    <div className="board">
                        <div className="wrap board__first-switch">
                            <input type="checkbox"></input>
                            <div className="button"></div>
                        </div>
                        <div className="wrap board__second-switch">
                            <input type="checkbox"></input>
                            <div className="button"></div>
                        </div>
                        <div className="wrap board__third-switch">
                            <input type="checkbox"></input>
                            <div className="button"></div>
                        </div>
                    </div>
                    <div className="navigation_display">
                        <Link href="/">
                            <button className="navigation__button">
                                <img
                                    className="navigation__button-icon"
                                    src={homeIcon}
                                    alt="Home Button Icon"
                                />
                                <p className="navigation__button-text">HOME</p>
                            </button>
                        </Link>
                        <div className="navigation_display__light navigation_display__light--current"></div>
                    </div>

                    <div className="navigation_display">
                        <Link href="/_projects">
                            <button className="navigation__button">
                                <img
                                    className="navigation__button-icon"
                                    src={projectsIcon}
                                    alt="Projects Button Icon"
                                />
                                <p className="navigation__button-text">
                                    PROJECTS
                                </p>
                            </button>
                        </Link>
                        <div className="navigation_display__light"></div>
                    </div>

                    <div className="navigation_display">
                        <Link href="/_contact">
                            <button className="navigation__button">
                                <img
                                    className="navigation__button-icon"
                                    src={contactIcon}
                                    alt="Contact Button Icon"
                                />
                                <p className="navigation__button-text">
                                    CONTACT
                                </p>
                            </button>
                        </Link>
                        <div className="navigation_display__light"></div>
                    </div>
                    <div className="radars-container">
                        <div className="radar radar__first">
                            <div className="radar__scanner radar__scanner--fast"></div>
                        </div>
                        <div className="radar radar__second">
                            <div className="radar__scanner radar__scanner--slow"></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
