import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "PRTFOLIO",
    desc: "Retro-style portfolio website using React.",
    tags: ["React", "Tailwind", "Vite"],
    image: "/work.png",
    url: "https://www.google.com/recaptcha/admin/create",
    year: "2025"
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl text-yellow-400 border-b-2 border-gray-600 pb-2 mb-6">
        A:\My_Projects\{'>'}list --all
      </h2>
      
      {/* GRID SYSTEM: 1 kolom di HP, 2 kolom di Laptop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.desc}
            image={project.image}
            url={project.url}
            tags={project.tags}
            year={project.year}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center text-gray-500 animate-pulse">
        --- END OF LIST ---
      </div>
    </div>
  );
};

export default Projects;