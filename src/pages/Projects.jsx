import { useSelector } from 'react-redux';
import '../CSS/Projects.css';
import imageData from '../JSON/imagesData.json';

export default function Projects() {
    const language = useSelector((state) => state.language.languageState);

    return (
        <div id='projects' className="Projects">
            { language ? <h1>Projects</h1> : <h1>プロジェクト</h1>}
            <ul className='projectDisplay'>
            { language ? imageData.projects.map((project) => {
                return(
                <li key={project.key} className='project-img'>
                    <img src={project.url} alt={project.alt}></img>
                    <div className='hide'>
                        <h4>{project.nameE}</h4>
                        <ul className=''>
                            {project.skills.map((skill) => {
                                return(
                                    <li key={skill}>{skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <h3>{project.nameE}</h3>
                </li>
                )
            }): imageData.projects.map((project) => {
                return(
                <li key={project.key} className='project-img'>
                    <img src={project.url} alt={project.alt}></img>
                    <div className='hide'>
                        <h4>{project.nameJ}</h4>
                        <ul className=''>
                            {project.skills.map((skill) => {
                                return(
                                    <li key={skill}>{skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <h3>{project.nameJ}</h3>
                </li>
                )
            })}
            </ul>
        </div>
    );
}