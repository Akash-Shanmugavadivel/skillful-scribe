
import { motion } from "framer-motion";

interface Skill {
  category: string;
  items: string[];
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-java-blue/20 group relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-java-orange/5 to-java-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      <div className="relative z-10">
        <motion.h3 
          className="font-display font-semibold text-lg text-java-gray mb-4 group-hover:text-java-orange transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          {skill.category}
        </motion.h3>
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "hsl(var(--java-blue))",
                color: "white",
                transition: { duration: 0.2 }
              }}
              className="px-3 py-1 bg-java-blue/10 text-java-blue rounded-full text-sm font-medium hover:bg-java-blue hover:text-white transition-all duration-200 cursor-pointer"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
