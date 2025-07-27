
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
      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 group"
    >
      <h3 className="font-display font-semibold text-lg mb-4 text-emerald-800 group-hover:text-emerald-600 transition-colors">
        {skill.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
