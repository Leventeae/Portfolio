const Home = () => (
    <>
        <section className="hero">
            <div className="hero-text">
                <h1>Welcome to my portfolio</h1>
                <p>I am a passionate Fullstack Developer focused on building
                    <b> modern, user-friendly interfaces</b>.
                    Let’s craft something exceptional together!
                </p>
                <a className="hero-button" href="KovacsLeventeCV.pdf" download="KovacsLevente_resume.pdf">Download my resume</a>
            </div>
            <div className="hero-image">
                <img src="./KL-IG.png" alt="Personal Portfolio Image"/>
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
            <div className="timeline-container">
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2018</div>
                    <h3 className="timeline-title">Started Learning the basics</h3>
                    <p className="timeline-description">
                        Began my journey into app and web development, learning core technologies like
                        HTML, CSS, and JavaScript, as well as building my first C# desktop applications.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2018-2023</div>
                    <h3 className="timeline-title">High School</h3>
                    <p className="timeline-description">
                        Started exploring software development by learning C# and creating simple desktop applications.
                        Developed a strong foundation in object-oriented programming, Windows Forms (WinForms), .Net Framework and debugging practices.
                        These early experiences fueled my passion for software engineering and problem-solving.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2021-2023</div>
                    <h3 className="timeline-title">High School: Expanding Skills</h3>
                    <p className="timeline-description">
                        Gained proficiency in Python programming, MySQL database management, and PHP for server-side development.
                        Explored computer networking concepts, earning the <strong>CCNA Certification</strong>, and developed a strong understanding of network protocols, routing, and switching.
                        These experiences provided a rounded foundation in full-stack development and systems infrastructure.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2023</div>
                    <h3 className="timeline-title">Starting University & Exploring More Depth</h3>
                    <p className="timeline-description">
                        Started university, moving deeper into computer science fundamentals.
                        Expanded my skills in object-oriented programming in <strong>C#</strong>,
                        learned and practiced low-level programming languages like <strong>C</strong> and <strong>Assembly</strong>. I also further refined my knowledge in networking based on my CCNA experience.
                        This phase reinforced a balance between high-level application development and understanding how computers operate at a low level.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2024</div>
                    <h3 className="timeline-title">University: Advancing Technical Skills</h3>
                    <p className="timeline-description">
                        Explored advanced concepts in computer science through in-depth university courses:<br /><br />

                        <strong>Algorithms and Data Structures:</strong> Learned to implement and optimize algorithms, understand time complexity, and solve real-world computational problems.<br /><br />

                        <strong>Object-Oriented Programming:</strong> Developed expertise in building scalable and maintainable software in <strong>C#</strong> using modern OOP concepts like inheritance, polymorphism, and interfaces.<br /><br />

                        <strong>Programming Languages:</strong> Enhanced skills in <strong>Python</strong> and <strong>C#</strong>, focusing on practical problem-solving and small application development both individually and in teams.<br /><br />

                        <strong>Databases:</strong> Strengthened proficiency in relational database concepts, SQL queries, and database design. Worked with MySQL in lab assignments to build and query well-structured databases.<br /><br />

                        <strong>Web Development II:</strong> Built interactive and modern web applications, focusing on both back-end and front-end integration. Improved my understanding of responsive design concepts and web standards.<br /><br />

                        These rigorous courses helped me build a stronger technical foundation and laid the groundwork for practical applications in software engineering.<br /><br />

                        <strong>Development of Mobile Applications:</strong> Explored mobile application development techniques using <strong>React</strong>, focusing on creating cross-platform apps and understanding the lifecycle of mobile apps.<br /><br />

                        <strong>Operating Systems:</strong> Developed a solid foundation in operating system concepts, such as process management, memory allocation, and file systems using <strong>C</strong>, with a focus on practical exercises and hands-on implementation.<br /><br />

                        <strong>Programming of Database Systems:</strong> Combined programming and database skills to optimize integration, manage queries efficiently, and understand data manipulation at an advanced level.
                    </p>
                </div>
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