import { motion } from "framer-motion";

const CodeBlock = () => {
  const codeLines = [
    { text: "public class", type: "keyword" },
    { text: " Developer {", type: "normal" },
    { text: '    String name = "', type: "normal" },
    { text: "Akash S", type: "string" },
    { text: '";', type: "normal" },
    { text: '    String[] stack = {"', type: "normal" },
    { text: "Java", type: "string" },
    { text: '", "', type: "normal" },
    { text: "Spring Boot", type: "string" },
    { text: '", "', type: "normal" },
    { text: "Docker", type: "string" },
    { text: '", "', type: "normal" },
    { text: "AWS", type: "string" },
    { text: '"};', type: "normal" },
    { text: "    boolean isAvailableForHire = ", type: "normal" },
    { text: "true", type: "keyword" },
    { text: ";", type: "normal" },
    { text: "    ", type: "normal" },
    { text: "// Always ready for new challenges!", type: "comment" },
    { text: "}", type: "normal" },
  ];

  const getColorClass = (type: string) => {
    switch (type) {
      case "keyword": return "text-purple-600 font-semibold";
      case "string": return "text-green-600";
      case "comment": return "text-gray-500 italic";
      default: return "text-bytecraft-gray-800 dark:text-bytecraft-gray-200";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="code-block max-w-lg mx-auto lg:mx-0 relative overflow-hidden"
    >
      {/* IDE-style header */}
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">Developer.java</span>
      </div>

      {/* Code content */}
      <div className="space-y-1">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <span className="text-xs text-gray-400 w-6 text-right mr-3 font-mono">
              {index + 1}
            </span>
            <span className={getColorClass(line.type)}>{line.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Animated cursor */}
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block w-2 h-5 bg-java-blue ml-1 mt-2"
      />
    </motion.div>
  );
};

export default CodeBlock;