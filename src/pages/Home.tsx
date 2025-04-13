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
                <p className="feature-description">Well-structured sections allow a seamless flow of
                    information for users.</p>
            </div>
        </div>
        <section className="testimonials">
            <div className="testimonial">
                <p>"The cappuccino design aesthetic has brought a whole new level of warmth and comfort to our website.
                    We love it!"</p>
                <p className="testimonial-author">- Jane Doe</p>
            </div>
            <div className="testimonial">
                <p>"This theme is like a fresh cup of coffee for the eyes—calming and energizing. Absolutely
                    brilliant."</p>
                <p className="testimonial-author">- Michael Smith</p>
            </div>
        </section>

        <section className="cta">
            <h2>Ready to Start?</h2>
            <p>Join the world of cappuccino design and elevate your web experience today.</p>
            <button>Sign Up Now</button>
        </section>
    </>
);

export default Home;