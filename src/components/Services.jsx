import React from 'react';

const services = [
    {
        id: 1,
        title: "Java",
        description: "Good Knowledge on Oops Concepts and Collections framework.",
    },
    {
        id: 2,
        title: "HTML & CSS",
        description: "Expertize in building responsive websites using HTML and CSS.",
    },
    {
        id: 3,
        title: "JavaScript",
        description: "Built interactive features and basic web applications using JavaScript.",
    },
    {
        id: 4,
        title: "React",
        description: "Built simple single-page applications and interactive UI components with React, JavaScript and CSS.",
    },
    {
        id: 5,
        title: "Redux",
        description: "Integrated Redux for state management in React applications and used React-Redux for connecting components with the global store and styled the application using CSS.",
    },
    {
        id: 6,
        title: "MySQL",
        description: "Basic understanding of SQL syntax and ability to write simple queries for data retrieval and manipulation. Familiar with relational database concepts and able to work with tables, joins, and basic database operations.",
    }
];

const Services = () => {
  return (
    <div>
        <div id='services'>
            <div className='container'>
                <h2>Technologies Overview</h2>
                <div className='services-grid'>
                    {services.map(service => (
                        <div key={service.id} className='service-card'>
                            <div className='service-id'>
                                {service.id}
                            </div>
                            <h3 className='service-title'>
                                {service.title}
                            </h3>
                            <p className='service-description'>{service.description}</p>
                            {/* <a href='#' className='read-more '>Read More</a> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services;
