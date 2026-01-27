import { Gem, Palette, Type, CheckCheck } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Gem className="w-10 h-10 text-primary" />,
      title: "Gemini AI Integrated",
      description:
        "Harness the power of Google's Gemini AI to automatically generate and optimize your resume content with precision.",
    },
    {
      icon: <Palette className="w-10 h-10 text-primary" />,
      title: "Customizable Themes",
      description:
        "Personalize your resume with a variety of color themes to align with your unique style or industry expectations.",
    },
    {
      icon: <Type className="w-10 h-10 text-primary" />,
      title: "Flexible Text Editing",
      description:
        "Effortlessly modify text with our user-friendly editor, offering one-click adjustments to fonts, sizes, and spacing.",
    },
    {
      icon: <CheckCheck className="w-10 h-10 text-primary" />,
      title: "ATS-Optimized",
      description:
        "Our templates are crafted for seamless compatibility with Applicant Tracking Systems, ensuring maximum readability.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-semibold text-gray-600 sm:text-5xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the tools you need to craft a standout resume with ease and
            professionalism.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
