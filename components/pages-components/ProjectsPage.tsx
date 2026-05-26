import Projects from "../Others/Projects";
import WorkExperience from "../Others/WorkExperience";

const ProjectsPage = () => {
  return (
    <div className="space-y-20 font-sans not-italic">
      <WorkExperience />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
