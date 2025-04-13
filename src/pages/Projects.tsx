const projects = [
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio showcasing skills and projects.',
    },
    {
        title: 'Weather App',
        description: 'Real-time weather app using OpenWeather API and React.',
    },
];

const Projects = () => (
    <section>
        <h2>Projects</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {projects.map((project, idx) => (
                <div
                    key={idx}
                    style={{
                        padding: '1rem',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                    }}
                >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;