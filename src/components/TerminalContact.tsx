import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TerminalContact = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([
    "$ Welcome to Akash's terminal interface",
    "$ Type 'help' for available commands",
    "$ Ready to connect..."
  ]);

  const handleCommand = (cmd: string) => {
    const newOutput = [...output, `$ ${cmd}`];
    
    switch (cmd.toLowerCase()) {
      case "help":
        newOutput.push("Available commands:");
        newOutput.push("  - email: Get email address");
        newOutput.push("  - linkedin: Open LinkedIn profile");
        newOutput.push("  - github: Open GitHub profile");
        newOutput.push("  - hire: Check availability");
        newOutput.push("  - clear: Clear terminal");
        break;
      case "email":
        newOutput.push("📧 akashkumaran15@gmail.com");
        break;
      case "linkedin":
        newOutput.push("🔗 Opening LinkedIn profile...");
        window.open("https://linkedin.com/in/akash-s", "_blank");
        break;
      case "github":
        newOutput.push("🐙 Opening GitHub profile...");
        window.open("https://github.com/akashkumaran15", "_blank");
        break;
      case "hire":
        newOutput.push("✅ Available for new opportunities!");
        newOutput.push("💼 Ready to build amazing Java applications");
        break;
      case "clear":
        setOutput(["$ Terminal cleared", "$ Ready for new commands..."]);
        setCommand("");
        return;
      default:
        newOutput.push(`Command '${cmd}' not found. Type 'help' for available commands.`);
    }
    
    setOutput(newOutput);
    setCommand("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="terminal max-w-lg mx-auto"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-gray-600">
        <Terminal className="h-4 w-4" />
        <span className="text-sm font-mono">akash@bytecraft:~$</span>
        <div className="flex gap-1 ml-auto">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Terminal output */}
      <div className="space-y-1 mb-4 max-h-48 overflow-y-auto">
        {output.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="font-mono text-sm"
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Terminal input */}
      <div className="flex items-center gap-2">
        <span className="text-green-400 font-mono text-sm">$</span>
        <Input
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && command.trim()) {
              handleCommand(command.trim());
            }
          }}
          placeholder="Type a command..."
          className="bg-transparent border-none text-green-400 font-mono text-sm focus:ring-0 focus:outline-none p-0"
        />
        <Button
          size="sm"
          variant="ghost"
          onClick={() => command.trim() && handleCommand(command.trim())}
          className="text-green-400 hover:text-green-300 p-1"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>

      {/* Blinking cursor */}
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block w-2 h-4 bg-green-400 ml-2"
      />
    </motion.div>
  );
};

export default TerminalContact;