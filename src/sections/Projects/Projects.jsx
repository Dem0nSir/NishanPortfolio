import styles from './ProjectsStyles.module.css';
import IMS from '../../assets/IMS.jpg';
import EMS from '../../assets/EMS.jpg';
import budget from '../../assets/budget.jpg';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={IMS}
          link="https://github.com/Dem0nSir/Inventory-and-billing"
          h3="Inventory Management System"
          p="React,Firebase"
        />
        <ProjectCard
          src={EMS}
          link="https://github.com/Dem0nSir/Employee-Management-System"
          h3="Employee Management System"
          p="React, Node, Express, MySQL"
        />
        <ProjectCard
          src={budget}
          link="https://github.com/Dem0nSir/budgetmanager"
          h3="Budget Manager"
          p="React,Bootstrap"
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="React"
          p=""
        /> */}
      </div>
    </section>
  );
}

export default Projects;
