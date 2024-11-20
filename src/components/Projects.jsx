import React from 'react';
import employeeMSImage from '../assets/employee-ms.png';
import bookMSImage from '../assets/admin-dashboard.png';
import '../App.css';

const projects = [
    {
        id: 1,
        name: 'JavaScript Tasks',
        technologies: 'JavaScript',
        image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/09/JavaScript-Project-Ideas-for-Beginners-Featured.jpg",
        githubLink: 'https://github.com/Joshna-Nelluri/JavaScript',
    },

    // https://github.com/Joshna-Nelluri/JavaScript.git
    {
        id: 2,
        name: 'HTML_CSS Projects',
        technologies: 'HTML and CSS',
        image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/12/title_image.jpg",
        githubLink: 'https://github.com/Joshna-Nelluri/HTML_CSS',
    },
    {
        id: 3,
        name: 'E-Commerce Project',
        technologies: 'React JS',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS09zd-0NeR9FCfeNQPS7gGMx9CDml5T4-EXA&s",
        githubLink: 'https://github.com/Joshna-Nelluri/React-E-commerceProject',
    },
    {
        id: 4,
        name: "E-Commerce Project",
        technologies: "Redux",
        image: "https://miro.medium.com/v2/resize:fit:2000/1*2DNKy3eF9Pn5fJ8HWghxxw.jpeg",
        githubLink: "https://github.com/Joshna-Nelluri/Redux_E-commerceProject"
    },
    {
        id: 5,
        name: "Portfolio",
        technologies: "React and CSS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5EMzfgaIkGGxHyUmHbtaCbDqKa-H8GOioA&s",
        githubLink: "https://github.com/Joshna-Nelluri/React_Portfolio"
    },
];

const Projects = () => {
    return (
    
        <div  id='projects'>
            <div className='container '>
                <h2>My Projects</h2>
                <div className='project-grid'>
                    {projects.map(project => (
                        <div key={project.id} className='project-card'>
                            <div className='imgDiv'>
                               <img src={project.image} alt="" />
                            </div>
                            <h3>
                                {project.name}
                            </h3>
                            <p>
                                {project.technologies}
                            </p>
                            <a href={project.githubLink}  target='blank' rel='noopener noreferrer'>
                                Github
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Projects;
