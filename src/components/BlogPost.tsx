
import { motion } from "framer-motion";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

interface BlogPostProps {
  post: Post;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex gap-4 text-sm text-gray-500">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-display font-semibold text-xl">{post.title}</h3>
        <p className="text-gray-600">{post.excerpt}</p>
        <button className="text-primary hover:text-primary/80 transition-colors">
          Read more →
        </button>
      </div>
    </motion.div>
  );
};

export default BlogPost;
