
import { Github, ExternalLink } from "lucide-react";
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
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, type: "spring", stiffness: 150 }
      }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-java-orange/20 group relative"
    >
      <div className="aspect-video overflow-hidden relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-java-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        {/* Floating tech icons */}
        <div className="absolute top-4 right-4 flex gap-2">
          {project.technologies.slice(0, 2).map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-java-orange border border-java-orange/30"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-display font-semibold text-xl text-java-gray group-hover:text-java-orange transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-java-blue/10 text-java-blue rounded-full text-sm font-medium hover:bg-java-blue hover:text-white transition-all duration-200 cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-600 hover:text-java-orange transition-all duration-300 font-medium group/link"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="p-1 rounded-full bg-gray-100 group-hover/link:bg-java-orange group-hover/link:text-white transition-all duration-300"
            >
              <Github className="h-4 w-4" />
            </motion.div>
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-600 hover:text-java-blue transition-all duration-300 font-medium group/link"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="p-1 rounded-full bg-gray-100 group-hover/link:bg-java-blue group-hover/link:text-white transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4" />
            </motion.div>
            Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
