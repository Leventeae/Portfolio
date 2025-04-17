import FloatingButton from "../components/floatingB.tsx";

const Home = () => (
    <>
        {/* Hero Section */}
        <section className="hero">
            <div className="hero-text">
                <h1>Welcome to My Portfolio</h1>
                <p>
                    I am a skilled <strong>Fullstack Developer</strong> with a primary focus on building
                    <strong> robust, scalable backend systems</strong> using Node.js and TypeScript. Whether you're looking for
                    someone to design cutting-edge RESTful APIs or craft user-friendly interfaces, I can help you build
                    something exceptional.
                </p>
                <a
                    className="hero-button"
                    href="KovacsLeventeCV.pdf"
                    download="KovacsLevente_resume.pdf"
                >
                    Download My Resume
                </a>
            </div>
            <div className="hero-image">
                <img src="./KL-IG.png" alt="Personal Portfolio" />
            </div>
        </section>

        {/* Main Profile Section */}
        <section className="skills-section">
            <h2 className="section-title">My Main Profile</h2>
            <div className="skills-container">
                <div className="card">
                    <h3>Node.js Backend Development</h3>
                    <p>
                        I specialize in crafting scalable, secure, and efficient backend solutions using
                        <strong> Node.js</strong> and <strong>TypeScript</strong>. My experience includes building APIs,
                        authentication systems, microservices, and integrating databases with a focus on performance and maintainability.
                    </p>
                </div>

                {/* Full-Stack Flexibility */}
                <div className="card">
                    <h3>Full-Stack Flexibility</h3>
                    <p>
                        While my focus is backend development, I deliver complete end-to-end solutions by
                        complementing backend capabilities with <strong>React</strong> on the front end, ensuring seamless
                        integration between server-side logic and modern UI/UX requirements.
                    </p>
                </div>

                {/* Database Management */}
                <div className="card">
                    <h3>Database Management</h3>
                    <p>
                        Familiar with relational and NoSQL databases such as
                        <strong> MySQL, PostgreSQL, and MongoDB</strong>. I optimize database performance through indexing,
                        efficient schema design, and caching strategies.
                    </p>
                </div>

                {/* Team Collaboration */}
                <div className="card">
                    <h3>Team Collaboration</h3>
                    <p>
                        I thrive in collaborative environments, actively using <strong>Git</strong> and following Agile workflows.
                        My focus is on delivering clean, maintainable code that aligns with team conventions and best practices,
                        ensuring smooth coordination and project success.
                    </p>
                </div>


                {/* Specialized Features */}
                <div className="features">
                    <div className="feature">
                        <div className="feature-icon">☕</div>
                        <h3 className="feature-title">Simplicity in Design</h3>
                        <p className="feature-description">
                            Simple, intuitive systems designed with usability and maintainability in mind.
                        </p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">📋</div>
                        <h3 className="feature-title">Organized Systems</h3>
                        <p className="feature-description">
                            RESTful APIs and precisely modular backend code ensure smooth integrations for any project.
                        </p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">🛠️</div>
                        <h3 className="feature-title">Customized APIs</h3>
                        <p className="feature-description">
                            Tailor-made APIs to meet complex and dynamic project requirements.
                        </p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">✨</div>
                        <h3 className="feature-title">Efficient Performance</h3>
                        <p className="feature-description">
                            Optimized logic, caching, and database queries ensure high-performance applications.
                        </p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">🔒</div>
                        <h3 className="feature-title">Secure Architecture</h3>
                        <p className="feature-description">
                            Robust security implementations, including input validation, JWT-based authentication, and secure database configurations.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Journey Section */}
        <div className="timeline-section">
            <h2 className="section-title">My Journey</h2>
            <div className="timeline-container">
                <div className="timeline">
                    {/* Timeline Step 1 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2018</div>
                        <h3 className="timeline-title">Started with the Basics</h3>
                        <p className="timeline-description">
                            Began exploring development by learning core web technologies such as HTML, CSS,
                            and JavaScript, while also diving into desktop app creation using C#.
                        </p>
                    </div>

                    {/* Timeline Step 2 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2018-2023</div>
                        <h3 className="timeline-title">High School Achievements</h3>
                        <p className="timeline-description">
                            Further honed programming skills, specializing in backend development with <strong>C#</strong>, <strong>PostgreSql</strong>, and <strong>Python</strong>.
                            Earned a <strong>CCNA Certification</strong>, solidifying expertise in networking, and expanded
                            knowledge in building scalable systems.
                        </p>
                    </div>

                    {/* Timeline Step 3 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2023</div>
                        <h3 className="timeline-title">University and Growth</h3>
                        <p className="timeline-description">
                            Entered university with a focus on programming fundamentals, algorithms, and systems programming.
                            Expanded knowledge in low-level <strong>C</strong> and <strong>Assembly</strong> programming while continuing to build real-world, scalable applications.
                        </p>
                    </div>

                    {/* Timeline Step 4 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2024</div>
                        <h3 className="timeline-title">Advancing Technical Skills</h3>
                        <p className="timeline-description">
                            Gained deep expertise in <strong>backend systems</strong> development, security practices, and
                            database management while excelling in advanced topics like algorithms, mobile app development,
                            and web standards.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Call to Action Section */}
        <section className="cta" id="cta-section">
            <h2>Ready to Start with Me?</h2>
            <p>
                I am actively seeking opportunities to contribute as a <strong>Backend Developer</strong> with a
                specialty in <strong>Node.js</strong> and <strong>TypeScript</strong>. Let’s connect and
                create something extraordinary.
            </p>
            <button className="cta-button">Contact Me</button>
        </section>

        {/* Floating Button */}
        <FloatingButton />
    </>
);

export default Home;