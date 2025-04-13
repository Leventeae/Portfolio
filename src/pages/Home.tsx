const Home = () => (
    <>
        <section className="hero">
            <div className="hero-text">
                <h1>Welcome to my portfolio</h1>
                <p>I am a passionate Fullstack Developer focused on building
                    <b> modern, user-friendly interfaces</b>.
                    Let’s craft something exceptional together!
                </p>
                <a className="hero-button" href="src/assets/KovacsLeventeCV.pdf" download="KovacsLevente_resume.pdf">Download my resume</a>
            </div>
            <div className="hero-image">
                <img src="src/assets/KL-IG.png" alt="Personal Portfolio Image"/>
            </div>
        </section>
        <section className="skills-section">
            <h2 className="section-title">My main profile</h2>
            <div className="skills-container">

                {/* Languages and Frameworks Section */}
                <div className="card">
                    <h3>Languages & Frameworks</h3>
                    <ul>
                        <li><strong>Node.js & JavaScript:</strong> Server-side development, RESTful APIs, authentication.</li>
                        <li><strong>React:</strong> Component-based UI development, state management, React Router.</li>
                        <li><strong>HTML & CSS:</strong> Modern, semantic markup, Flexbox/Grid layouts, responsive design.</li>
                        <li><strong>Bootstrap:</strong> Styling with grid systems, ready-to-use components, theme customizations.</li>
                        <li><strong>C#:</strong> Asp.Net Core web apps and services. Backend apps using .NET frameworks, OOP, and scalable solutions. WinForms Applications.</li>
                    </ul>
                </div>

                {/* Skills Section */}
                <div className="card">
                    <h3>Skills</h3>
                    <ul>
                        <li><strong>Full-Stack Development:</strong> Combining React (front-end) and Node.js (back-end).</li>
                        <li><strong>Responsive Design:</strong> Cross-browser compatibility, media queries, Bootstrap usage.</li>
                        <li><strong>UI/UX Implementation:</strong> Translating designs into interactive UIs.</li>
                        <li><strong>API Integration:</strong> Building RESTful APIs, authentication (JWT/OAuth), validation (Express/schema validator).</li>
                        <li><strong>Version Control:</strong> Git workflows for collaboration and deployment.</li>
                    </ul>
                </div>

                {/* Tools Section */}
                <div className="card">
                    <h3>Tools & Libraries</h3>
                    <ul>
                        <li><strong>Front-End:</strong> React, Bootstrap, Styled-Components, Material-UI.</li>
                        <li><strong>Back-End:</strong> Node.js, Express.js, Sequelize, database interaction (PostgreSQL/MySQL/MongoDB).</li>
                        <li><strong>C#:</strong> .NET Core/Framework, WinForms, ASP.NET Core</li>
                        <li><strong>Build Tools:</strong> Webpack, Vite.js, npm/yarn, Docker.</li>
                    </ul>
                </div>

                {/* Strengths Section */}
                <div className="card">
                    <h3>Strengths</h3>
                    <ul>
                        <li>Collaborative skills with Git and Agile workflows.</li>
                        <li>Clean, maintainable code following best practices.</li>
                        <li>Focus on performance, accessibility, and scalability.</li>
                        <li>Debugging and troubleshooting for front-end and back-end issues.</li>
                    </ul>
                </div>
            </div>
        </section>
        <div className="features">
            <div className="feature">
                <div className="feature-icon">☕</div>
                <h3 className="feature-title">Savor Simplicity</h3>
                <p className="feature-description">My main profile is simple yet creative design that will satisfy and soothe your eyes.</p>
            </div>
            <div className="feature">
                <div className="feature-icon">✨</div>
                <h3 className="feature-title">Beautiful Animations</h3>
                <p className="feature-description">Subtle and smooth animations give a polished, professional feel
                    across
                    the site.</p>
            </div>
            <div className="feature">
                <div className="feature-icon">📋</div>
                <h3 className="feature-title">Organized Content</h3>
                <p className="feature-description">
                    Clear RESTful APIs, modular backend code, and structured data make integrations seamless for clients.
                </p>
            </div>
            <div className="feature">
                <div className="feature-icon">✨</div>
                <h3 className="feature-title">Efficient Performance</h3>
                <p className="feature-description">
                    Optimized server-side logic, caching and database queries guarantee speed and reliability for any application.
                </p>
            </div>
            <div className="feature">
                <div className="feature-icon">🛠️</div>
                <h3 className="feature-title">Customizable APIs</h3>
                <p className="feature-description">
                    Tailored API endpoints for dynamic and scalable solutions to meet unique project requirements.
                </p>
            </div>
            <div className="feature">
                <div className="feature-icon">🔒</div>
                <h3 className="feature-title">Secure Architecture</h3>
                <p className="feature-description">
                    Robust authentication, authorization, and input validation ensure the highest level of security for users.
                </p>
            </div>
        </div>
        <div className="timeline-section">
            <h2 className="section-title">My Journey</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2021</div>
                    <h3 className="timeline-title">Started Fullstack Development</h3>
                    <p className="timeline-description">
                        Began my journey into web development, learning core technologies like
                        HTML, CSS, and JavaScript, as well as building my first React applications.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2022</div>
                    <h3 className="timeline-title">First Freelance Project</h3>
                    <p className="timeline-description">
                        Delivered a fully responsive e-commerce website for a client,
                        implementing features like payment integration, user authentication, and a product catalog.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2023</div>
                    <h3 className="timeline-title">Joined a Startup as a Developer</h3>
                    <p className="timeline-description">
                        Played a key role in building scalable APIs and implementing front-end interfaces
                        for the company's new SaaS platform using React and Node.js.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2024</div>
                    <h3 className="timeline-title">Launched a Side Project</h3>
                    <p className="timeline-description">
                        Developed and launched a productivity web app, integrating real-time collaboration features
                        with WebSocket and elegant UI design.
                    </p>
                </div>
            </div>
        </div>
        <section className="cta">
            <h2>Ready to Start?</h2>
            <p>Join the world of cappuccino design and elevate your web experience today.</p>
            <button>Sign Up Now</button>
        </section>
    </>
);

export default Home;