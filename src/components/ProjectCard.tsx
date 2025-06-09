
import { GitHub, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-display font-semibold text-xl">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <GitHub className="h-4 w-4" />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
