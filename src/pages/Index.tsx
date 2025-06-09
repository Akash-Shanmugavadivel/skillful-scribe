import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import BlogPost from "@/components/BlogPost";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "AI Chat Assistant",
      description: "An AI-powered chat assistant using OpenAI's GPT API",
      technologies: ["Python", "FastAPI", "React", "Docker"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Java", "SQL", "MongoDB", "GraphQL"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Linux", "Agile", "CI/CD"],
    },
  ];

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for building large-scale React applications",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      title: "Introduction to System Design",
      excerpt: "Understanding the basics of system design and architecture",
      date: "March 10, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, message });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            John Doe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Software Engineer & Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Button className="glass">
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" className="glass">
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-gray-600">
                I'm a passionate software engineer with a focus on building scalable web applications.
                Currently pursuing my Master's in Computer Science at Stanford University, I combine
                academic excellence with practical experience in modern web technologies.
              </p>
              <p className="text-gray-600">
                Through internships at leading tech companies and participation in hackathons,
                I've developed a strong foundation in both frontend and backend development.
              </p>
            </div>
            <div className="glass p-6 rounded-lg space-y-4">
              <h3 className="font-display font-semibold text-xl">Highlights</h3>
              <ul className="space-y-2">
                <li>🎓 MS in Computer Science, Stanford University</li>
                <li>💼 Software Engineering Intern at Tech Corp</li>
                <li>🏆 Winner of National Hackathon 2023</li>
                <li>📚 Published research in distributed systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">Latest Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="glass"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="glass min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
            <div className="space-y-8">
              <div className="glass p-6 rounded-lg">
                <h3 className="font-display font-semibold text-xl mb-4">Connect</h3>
                <div className="space-y-4">
                  <a href="https://github.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                  <a href="https://linkedin.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                  <a href="mailto:john@example.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                    john@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
