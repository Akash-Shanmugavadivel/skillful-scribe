import { motion } from "framer-motion";
import { ExternalLink, Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "How I Optimized a Java Spring Boot App for 10x Performance",
      excerpt: "Learn about the techniques I used to dramatically improve application performance, including JVM tuning, database optimization, and caching strategies.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Performance",
      link: "#",
      featured: true
    },
    {
      title: "Building Scalable REST APIs with Spring Boot",
      excerpt: "A comprehensive guide on creating enterprise-grade REST APIs with proper error handling, validation, and documentation.",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Backend",
      link: "#",
      featured: false
    },
    {
      title: "My Journey Solving 300+ LeetCode Problems",
      excerpt: "Insights and strategies from my coding journey, including common patterns and problem-solving techniques that helped me excel.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "DSA",
      link: "#",
      featured: false
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gradient-to-br from-blue-50/30 to-orange-50/30 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4 text-java-gray">
            Latest Insights & Tutorials
          </h2>
          <div className="w-24 h-1 java-gradient mx-auto rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Sharing my experiences, technical challenges, and learnings from my journey as a Java developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`java-card hover-lift group cursor-pointer overflow-hidden ${
                post.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <motion.span 
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      post.category === 'Performance' ? 'bg-orange-100 text-orange-700' :
                      post.category === 'Backend' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {post.category}
                  </motion.span>
                  {post.featured && (
                    <motion.span 
                      className="px-3 py-1 bg-java-orange text-white text-xs font-medium rounded-full"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Featured
                    </motion.span>
                  )}
                </div>

                <h3 className={`font-display font-semibold text-java-gray mb-3 group-hover:text-java-orange transition-colors line-clamp-2 ${
                  post.featured ? "text-xl" : "text-lg"
                }`}>
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="flex items-center gap-2 text-java-blue group-hover:text-java-orange transition-colors font-medium"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-java-blue text-java-blue hover:bg-java-blue hover:text-white transition-all duration-300"
              onClick={() => window.open('https://blogger.com', '_blank')}
            >
              Visit My Blog
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;