// App.js
import React from "react";
import "./styles.css";
import nyuLogo from "./nyu_logo.webp";
import kluLogo from "./KLU_logo.png";
import cdkLogo from "./CDK_icon.jpg";
import zohoLogo from "./zoho_icon.png";
import flatironsLogo from "./flatironsai_logo.png";

const AboutMe = () => (
  <section id="about-me" className="section">
    <h2>About Me</h2>
    <p>
      Hi, I'm Sai Narasimha, a highly motivated and skilled engineer passionate
      about AI-driven systems, scalable platforms, and data engineering. I bring
      expertise in designing and implementing solutions that are both innovative
      and efficient.
    </p>
    <p>
      As a Founding Engineer at Flatirons AI, I have successfully built and
      optimized AI-powered systems that simplify workflows and ensure
      compliance. My strong technical foundation is complemented by a drive to
      solve challenging problems and deliver impactful software solutions.
    </p>
  </section>
);

const Education = () => (
  <section id="education" className="section">
    <h2>Education</h2>
    <ul className="education">
      <li>
        <div>
          <h3>
            <img src={nyuLogo} alt="NYU Logo" className="icon" /> New York
            University
          </h3>
          <ul>Master of Science in Computer Engineering (GPA: 3.93/4.0)</ul>
        </div>
      </li>
      <li>
        <div>
          <h3>
            <img src={kluLogo} alt="KL University Logo" className="icon" /> KL
            University
          </h3>
          <ul>
            Bachelor of Technology in Computer Science and Engineering (GPA:
            3.88/4.0)
          </ul>
        </div>
      </li>
    </ul>
  </section>
);

const Skills = () => (
  <section id="skills" className="section">
    <h2>Skills</h2>
    <div className="skills-grid">
      <div>
        <strong>Languages:</strong> Java, Python, SQL, JavaScript
      </div>
      <div>
        <strong>Frameworks:</strong> Spring Boot, React JS
      </div>
      <div>
        <strong>Cloud:</strong> AWS, Azure
      </div>
      <div>
        <strong>Tools:</strong> Kubernetes, Docker, Jenkins
      </div>
      <div>
        <strong>Data:</strong> Apache Spark, Apache Flink, BigQuery
      </div>
      <div>
        <strong>Other:</strong> REST APIs, Git, Agile
      </div>
    </div>
  </section>
);

const WorkExperience = () => (
  <section id="work-experience" className="section">
    <h2>Work Experience</h2>
    <ul className="experience">
      <li>
        <div className="company">
          <img src={flatironsLogo} alt="Flatirons AI Logo" className="icon" />
          <h3>Founding Engineer - Flatirons AI</h3>
        </div>
        <ul className="experience-points">
          <li>
            Developed AI-driven automation for earnings call analysis and
            compliance workflows.
          </li>
          <li>
            Enhanced deployment pipelines using Docker, Kubernetes, and GitHub
            Actions, reducing deployment time by 15%.
          </li>
          <li>
            Designed advanced governance workflows leveraging Azure Cosmos DB,
            boosting system reliability.
          </li>
          <li>
            Implemented dynamic prompts for conversational AI systems, improving
            query formulation accuracy by 20%.
          </li>
        </ul>
      </li>
      <li>
        <div className="company">
          <img src={zohoLogo} alt="Zoho Corporation Logo" className="icon" />
          <h3>Software Development Engineer - Zoho Corporation</h3>
        </div>
        <ul className="experience-points">
          <li>
            Developed microservices for Kubernetes, increasing inter-service
            communication efficiency by 30%.
          </li>
          <li>Engineered RESTful APIs, reducing response times by 40%.</li>
          <li>Optimized database performance, achieving an 80% improvement.</li>
          <li>
            Implemented a performance analyzer tool to monitor system load and
            SQL traffic effectively.
          </li>
        </ul>
      </li>
      <li>
        <div className="company">
          <img src={nyuLogo} alt="NYU Logo" className="icon" />
          <h3>Research Assistant - New York University</h3>
        </div>
        <ul className="experience-points">
          <li>
            Boosted SQL query execution speed by 239% on cloud storage systems.
          </li>
          <li>
            Built a user-friendly Flask-based web interface for efficient SQL
            execution.
          </li>
          <li>
            Optimized backend systems using Java, Python, and SQL, enhancing
            real-time analytics capabilities.
          </li>
        </ul>
      </li>
      <li>
        <div className="company">
          <img src={cdkLogo} alt="CDK Global Logo" className="icon" />
          <h3>Software Developer Intern - CDK Global</h3>
        </div>
        <ul className="experience-points">
          <li>
            Automated auditing processes, reducing steps from 8 to 3 using
            Spring Boot and MSSQL.
          </li>
          <li>
            Created dynamic stored procedures for large query performance
            optimization.
          </li>
          <li>
            Enhanced system reliability with efficient API integration and
            workflow optimization.
          </li>
        </ul>
      </li>
    </ul>
  </section>
);

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <ul>
      <li>
        <strong>SQL Query Optimization:</strong> Improved performance using
        advanced execution plans and schema tuning.
      </li>
      <li>
        <strong>Dynamic Form Validation:</strong> Real-time validation
        integrated with Django backend and React frontend.
      </li>
      <li>
        <strong>Cloud Deployment Workflow:</strong> Automated CI/CD pipelines
        with Jenkins and Docker for faster deployments.
      </li>
    </ul>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="section">
    <h2>Certifications</h2>
    <p>
      AWS Certified Machine Learning - Specialty <br />
      Validation Number: 16581049fbfd42b2b76e5b97b30ebca3
    </p>
  </section>
);

const HonorsAwards = () => (
  <section id="honors-awards" className="section">
    <h2>Honors and Awards</h2>
    <ul>
      <li>Asia Finalist in Global Modern Apps Hackathon.</li>
      <li>Speaker at PostgreSQL Webinar on Advanced Database Technologies.</li>
      <li>Winner of Data Structures Championship by IIT Roorkee.</li>
    </ul>
  </section>
);

const Contact = () => (
  <section id="contact" className="section">
    <h2>Contact Information</h2>
    <div className="contact-info">
      <p>
        Email:{" "}
        <a href="mailto:sainarasimha37@gmail.com">sainarasimha37@gmail.com</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/sai-narasimha-vayilati/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/sai-narasimha-vayilati
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/sainarasimha37"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/sainarasimha37
        </a>
      </p>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Sai Narasimha's Portfolio</h1>
      </header>
      <nav className="navbar">
        <a href="#about-me">About Me</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#work-experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#honors-awards">Honors</a>
        <a href="#contact">Contact</a>
      </nav>
      <main>
        <AboutMe />
        <Education />
        <Skills />
        <WorkExperience />
        <Projects />
        <Certifications />
        <HonorsAwards />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Sai Narasimha. All rights reserved.</p>
      </footer>
    </div>
  );
}
