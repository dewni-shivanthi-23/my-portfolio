import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Recipe Vault App",
    description:
      "A full-stack recipe app to add, view, search, and manage recipes with authentication and cloud storage.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/dewni-shivanthi-23/recipe_app",
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description:
      "ML-based dashboard for predicting customer churn with interactive insights and analytics.",
    image: "/projects/Dashboard.jpg",
    tags: ["Python", "Pandas", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/dewni-shivanthi-23/customer-churn-predictor",
  },
  {
    id: 3,
    title: "AI-resume Screener",
    description:
      "AI-powered resume screening app that analyzes resumes and matches candidates with job descriptions.",
    image: "/projects/Resume.png",
    tags: ["Streamlit", "Python", "ML"],
    demoUrl: "#",
    githubUrl: "https://github.com/dewni-shivanthi-23/AI-resume-screener",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-3xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-gray-400 text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1"> {project.title}</h3>
                <p className="text-gray-400 pt-3 pb-3 text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="text-sm cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/dewni-shivanthi-23"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
