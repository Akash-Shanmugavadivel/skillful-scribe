
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
      className="glass p-6 rounded-lg"
    >
      <h3 className="font-display font-semibold text-xl mb-6">{skill.category}</h3>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
