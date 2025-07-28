
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ExternalLink, Coffee, Award, Calendar, Code, Database, Globe, Cpu, Terminal, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import BlogPost from "@/components/BlogPost";
import BlogSection from "@/components/BlogSection";
import ProgrammingLogos from "@/components/ProgrammingLogos";

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
      icon: <Users className="h-6 w-6" />,
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-java-orange/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-java-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-java-red/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-java-orange/30 rounded-full blur-2xl animate-bounce-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-blue-100/10 to-red-100/10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <Coffee className="h-16 w-16 text-java-orange mx-auto mb-4 animate-glow" />
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-java-blue rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-gradient-java hover:scale-105 transition-transform duration-300"
          >
            Akash S
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-java-blue mb-4 font-medium"
          >
            Java Developer & Computer Science Student
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Hi, I'm Akash, a passionate Java developer specializing in <span className="text-java-orange font-semibold">Spring Boot</span>, 
            <span className="text-java-blue font-semibold"> Data Structures & Algorithms</span>, and modern web technologies. 
            I love building scalable enterprise applications and optimizing performance for high-traffic systems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-java-orange hover:bg-java-orange-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                Want to collaborate? Let's talk!
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="border-java-blue text-java-blue hover:bg-java-blue hover:text-white transition-all duration-300">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-java-gray">About Me</h2>
            <div className="w-24 h-1 java-gradient mx-auto rounded-full shadow-lg"></div>
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
                <motion.div 
                  className="text-center p-4 rounded-lg hover-lift cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-java-orange">300+</div>
                  <div className="text-sm text-gray-600">LeetCode Problems</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 rounded-lg hover-lift cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-java-blue">8.30</div>
                  <div className="text-sm text-gray-600">CGPA</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 rounded-lg hover-lift cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-java-red">4+</div>
                  <div className="text-sm text-gray-600">Major Projects</div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-orange-100 hover-lift">
                <h3 className="font-display font-semibold text-xl mb-6 text-java-gray">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-java-orange pl-4">
                    <h4 className="font-semibold text-java-orange">B.E. Computer Science and Engineering</h4>
                    <p className="text-gray-600">Madras Institute of Technology, Chennai</p>
                    <p className="text-sm text-gray-500">2022 - Present | CGPA: 8.30</p>
                  </div>
                  <div className="border-l-4 border-java-blue pl-4">
                    <h4 className="font-semibold text-java-blue">Higher School Education (HSC)</h4>
                    <p className="text-gray-600">Brindhavan Higher Secondary School</p>
                    <p className="text-sm text-gray-500">2020 - 2022 | Score: 95.6%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-red-50 p-6 rounded-2xl shadow-lg border border-blue-100 hover-lift">
                <h3 className="font-display font-semibold text-lg mb-4 text-java-gray">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <motion.span 
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    Tamil (Native)
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    English (Professional)
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    German (Basic)
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gradient-to-br from-orange-50/30 to-blue-50/30 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-java-gray">Featured Projects</h2>
            <div className="w-24 h-1 java-gradient mx-auto rounded-full shadow-lg"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programming Technologies */}
      <ProgrammingLogos />

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-java-gray">Technical Skills</h2>
            <div className="w-24 h-1 tech-gradient mx-auto rounded-full shadow-lg"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Achievements Section */}
      <section id="achievements" className="section-padding bg-gradient-to-br from-red-50/30 to-orange-50/30 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-java-gray">Achievements & Activities</h2>
            <div className="w-24 h-1 java-gradient mx-auto rounded-full shadow-lg"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="java-card hover-lift group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full"
                    whileHover={{ rotate: 10 }}
                  >
                    <div className="text-java-orange group-hover:text-java-blue transition-colors">
                      {achievement.icon}
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-java-gray mb-2 group-hover:text-java-orange transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{achievement.description}</p>
                    <div className="flex items-center gap-2 text-sm text-java-blue">
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
      <section id="contact" className="section-padding bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-java-gray">Get in Touch</h2>
            <div className="w-24 h-1 tech-gradient mx-auto rounded-full shadow-lg"></div>
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
                <Label htmlFor="name" className="text-java-gray">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-orange-200 focus:border-java-orange focus:ring-java-orange transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-java-gray">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-orange-200 focus:border-java-orange focus:ring-java-orange transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-java-gray">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-orange-200 focus:border-java-orange focus:ring-java-orange min-h-[150px] transition-all duration-300"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-java-orange hover:bg-java-orange-dark shadow-lg hover:shadow-xl transition-all duration-300">
                  <Zap className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="java-card hover-lift">
                <h3 className="font-display font-semibold text-xl mb-6 text-java-gray">Connect with Me</h3>
                <div className="space-y-4">
                  <motion.a
                    href="https://github.com/akashkumaran15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-java-orange transition-colors p-3 rounded-lg hover:bg-orange-50 group"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/akashkumaran15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-java-blue transition-colors p-3 rounded-lg hover:bg-blue-50 group"
                    whileHover={{ x: 5 }}
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="mailto:akashkumaran15@gmail.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-java-red transition-colors p-3 rounded-lg hover:bg-red-50 group"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>akashkumaran15@gmail.com</span>
                  </motion.a>
                  <div className="flex items-center gap-3 text-gray-700 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-blue-50">
                    <div className="h-5 w-5 bg-java-orange rounded-full flex items-center justify-center animate-pulse-slow">
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
      <footer className="py-8 px-6 bg-gradient-to-r from-java-gray to-java-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-java-orange/5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div 
            className="flex justify-center items-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Coffee className="h-5 w-5 animate-pulse-slow" />
            <span className="font-display font-semibold">Akash S</span>
          </motion.div>
          <p className="text-white/80">© 2024 Akash S. Crafting innovative Java solutions for tomorrow.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
