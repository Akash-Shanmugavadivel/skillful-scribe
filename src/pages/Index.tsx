
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ExternalLink, Leaf, Award, Calendar, Code, Database, Globe } from "lucide-react";
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
      title: "Interactive Learning Platform",
      description: "A self-paced desktop learning platform using Java and MySQL with gamified progress tracking and interactive content.",
      technologies: ["Java", "Java Swing", "JDBC", "MySQL"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      github: "https://github.com/akashkumaran15",
      demo: "#",
    },
    {
      title: "Learning & Debugging Assistant for Python",
      description: "AI-powered Programming Tutor & Debugging Assistant using RAG, reducing debugging time by 40%.",
      technologies: ["Python", "Streamlit", "LangChain", "Azure OpenAI", "LLMs"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      github: "https://github.com/akashkumaran15",
      demo: "#",
    },
    {
      title: "Student Management REST API",
      description: "RESTful API with full CRUD operations, layered architecture, and Spring Data JPA integration.",
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "Maven"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      github: "https://github.com/akashkumaran15",
      demo: "#",
    },
    {
      title: "Notes to Self (CRUD Web App)",
      description: "Responsive web application for personal note management with calendar and reminder features.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      github: "https://github.com/akashkumaran15",
      demo: "#",
    },
  ];

  const skills = [
    {
      category: "Languages & Programming",
      items: ["Java", "C++", "C", "PL/SQL", "JavaScript", "HTML", "Tailwind CSS"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["Spring Boot", "Java Swing", "React.js", "MERN Stack"],
    },
    {
      category: "Database & Tools",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Git", "JDBC", "Swagger", "Maven", "n8n"],
    },
    {
      category: "Development Tools",
      items: ["VS Code", "IntelliJ IDEA", "Postman", "GitHub", "Figma"],
    },
  ];

  const achievements = [
    {
      title: "Active Problem Solver on LeetCode",
      description: "Solved 300+ problems in Data Structures and SQL",
      date: "2024 - Present",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "100 Days Badge (2025)",
      description: "Earned 100 Days Badge and Top 50 SQL Badge on LeetCode",
      date: "2025",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "NSS Volunteer",
      description: "Active volunteer contributing to community service",
      date: "2022 - 2024",
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      title: "Class Representative",
      description: "2nd Year Class Representative",
      date: "Sep 2023 - Jun 2024",
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 via-green-100/20 to-teal-100/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Leaf className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            Akash S
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-emerald-700 mb-4 font-medium"
          >
            Computer Science Student & Full Stack Developer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-emerald-600 mb-8 max-w-3xl mx-auto"
          >
            Motivated Computer Science student with strong skills in Java, DSA, and full-stack web development (MERN). 
            Experienced in building scalable apps using Spring Boot and JDBC.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-emerald-800">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Computer Science student at Madras Institute of Technology, Chennai, 
                with a strong foundation in Java, Data Structures & Algorithms, and full-stack development. 
                Currently maintaining a CGPA of 8.30 while actively contributing to real-world tech solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through various projects and achievements, I've developed expertise in building scalable applications 
                using modern technologies like Spring Boot, JDBC, and the MERN stack. I'm a quick learner who 
                thrives on solving complex problems and creating efficient, user-friendly solutions.
              </p>
              
              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">300+</div>
                  <div className="text-sm text-gray-600">LeetCode Problems</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">8.30</div>
                  <div className="text-sm text-gray-600">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">4+</div>
                  <div className="text-sm text-gray-600">Major Projects</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg border border-emerald-100">
                <h3 className="font-display font-semibold text-xl mb-6 text-emerald-800">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-emerald-700">B.E. Computer Science and Engineering</h4>
                    <p className="text-gray-600">Madras Institute of Technology, Chennai</p>
                    <p className="text-sm text-gray-500">2022 - Present | CGPA: 8.30</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-teal-700">Higher School Education (HSC)</h4>
                    <p className="text-gray-600">Brindhavan Higher Secondary School</p>
                    <p className="text-sm text-gray-500">2020 - 2022 | Score: 95.6%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-2xl shadow-lg border border-teal-100">
                <h3 className="font-display font-semibold text-lg mb-4 text-teal-800">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Tamil (Native)</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">English (Professional)</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">German (Basic)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gradient-to-br from-emerald-50/50 to-teal-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-emerald-800">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-emerald-800">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding bg-gradient-to-br from-teal-50/50 to-emerald-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-emerald-800">Achievements & Activities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-emerald-800 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{achievement.description}</p>
                    <div className="flex items-center gap-2 text-sm text-emerald-600">
                      <Calendar className="h-4 w-4" />
                      {achievement.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-emerald-800">Get in Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.form
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-emerald-700">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-emerald-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-emerald-700">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Send Message
              </Button>
            </motion.form>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg border border-emerald-100">
                <h3 className="font-display font-semibold text-xl mb-6 text-emerald-800">Connect with Me</h3>
                <div className="space-y-4">
                  <a
                    href="https://github.com/akashkumaran15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors p-3 rounded-lg hover:bg-emerald-50"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/akashkumaran15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors p-3 rounded-lg hover:bg-emerald-50"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="mailto:akashkumaran15@gmail.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors p-3 rounded-lg hover:bg-emerald-50"
                  >
                    <Mail className="h-5 w-5" />
                    <span>akashkumaran15@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-700 p-3 rounded-lg bg-emerald-50">
                    <div className="h-5 w-5 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📞</span>
                    </div>
                    <span>+91 9789359530</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-emerald-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Leaf className="h-5 w-5" />
            <span className="font-display font-semibold">Akash S</span>
          </div>
          <p className="text-emerald-100">© 2024 Akash S. Building sustainable tech solutions.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
