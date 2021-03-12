import { useState } from 'react'

const Services = () => {
    const [service, setService] = useState([
        {
            id: "one",
            title: 'JOURNALISM',
            image: 'journalism.jpg',
            textMain: "I am a writer, let me tell you a story",
            textFooter: "I can travel around the world to get your job done"
        },
        {
            id: "two",
            title: 'CONTENT WRITING',
            image: 'content.jpg',
            textMain: "I can help you remodel the expertice of your company by producing superb contents",
            textFooter: "Available to work CONTRACT, PARTTIME  and on ASSIGNMENT "
        },
        {
            id: "three",
            title: 'EDITING',
            image: 'editing.jpg',
            textMain: "Let me help you brush up your blog, I can optimize the search result of your content with my skill",
            textFooter: "I work on HOURLY and PER PAGE basis"
        }
    ])

    return (
        <div className='services'>
            <section className="page first">
                <h2>This is an overview of what I have to offer</h2>
                <h3>WHAT CAN I DO FOR YOU</h3>
            </section>
        {service.map((serv, index) => (
            <section key={index} className={`page ${serv.id}`}>
               <h1>{serv.title}</h1>
               <div className='samples'>
                    <div className="image">
                         <img src={serv.image} alt=""/>
                    </div>
                    <h4 id='main'>{serv.textMain}</h4>
                    <h4 id='foot'>{serv.textFooter}</h4>
               </div>
               
            </section>
        ))}
            
        </div>
    )
}

export default Services
