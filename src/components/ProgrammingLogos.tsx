import { motion } from "framer-motion";

const ProgrammingLogos = () => {
  const technologies = [
    { name: "Java", color: "#ED8B00", icon: "☕" },
    { name: "Spring Boot", color: "#6DB33F", icon: "🍃" },
    { name: "JavaScript", color: "#F7DF1E", icon: "📜" },
    { name: "React", color: "#61DAFB", icon: "⚛️" },
    { name: "MySQL", color: "#4479A1", icon: "🗄️" },
    { name: "Git", color: "#F05032", icon: "📋" },
    { name: "Python", color: "#3776AB", icon: "🐍" },
    { name: "Node.js", color: "#339933", icon: "🟢" },
  ];

  return (
    <section className="section-padding bg-white/70 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-display font-bold mb-4 text-java-gray">
            Technologies I Work With
          </h2>
          <div className="w-20 h-1 tech-gradient mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-white bg-white/80 backdrop-blur-sm group-hover:shadow-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: `${tech.color}20`,
                    borderColor: `${tech.color}40`
                  }}
                  whileHover={{
                    boxShadow: `0 10px 30px ${tech.color}30`,
                  }}
                >
                  <motion.span
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {tech.icon}
                  </motion.span>
                </motion.div>
                <motion.span
                  className="text-sm font-medium text-gray-700 group-hover:text-java-orange transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.name}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Always learning and exploring new technologies to build better solutions
          </p>
        </motion.div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-4xl"
        >
          ☕
        </motion.div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="text-3xl"
        >
          🍃
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammingLogos;