import { useState } from 'react'
import './index.css'

const Portfolio = () => {
    const [projects, setProjects] = useState([
        {
            id: "two",
            title: 'HEALTH',
            image: 'disease.jpg',
            summary: "Health is essential..."
        },
        {
            id: "four",
            title: 'RELATIONSHIP',
            image: 'marriage.jpg',
            summary: "Relationship is essential..."
        },
        {
            id: "six",
            title: 'EDUCATION',
            image: 'learning.jpg',
            summary: "Education is essential..."
        }
    ])
    return (
        <div className='portfolio'> 
         <section className="page first">
            <h2>Take a look at my projects</h2>
            <h3>SEE HOW I CAN HELP YOU</h3>
            <button>CONTACT ME</button>
        </section>
        {projects.map((project, index) => (
            <section  key = {index} className={`page ${project.id}`}>
            <h1>{project.title}</h1>

            <div className="samples">
                <div className="image">
                    <img src={project.image} alt=""/>
                </div>
                <div className="sample"><h4>{project.summary}</h4></div>
            </div>
        
        </section>
        ))}
        
        </div>
    )
}

export default Portfolio
