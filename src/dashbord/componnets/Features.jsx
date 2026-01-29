import { Gem, Palette, Type, CheckCheck, Zap, Download, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Gem className="w-12 h-12" />,
      title: "Gemini AI Powered",
      description:
        "Leverage Google's cutting-edge Gemini AI to generate compelling, professional resume content that stands out to recruiters and passes ATS systems.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description:
        "Create a complete, professional resume in under 5 minutes. Our streamlined interface and AI assistance make resume building effortless.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Beautiful Templates",
      description:
        "Choose from a curated collection of modern, professionally designed templates. Customize colors, fonts, and layouts to match your personal brand.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "ATS-Optimized",
      description:
        "All templates are engineered for maximum compatibility with Applicant Tracking Systems, ensuring your resume gets seen by human recruiters.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Type className="w-12 h-12" />,
      title: "Rich Text Editor",
      description:
        "Fine-tune every detail with our intuitive rich text editor. Format text, adjust spacing, and perfect your content with precision controls.",
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: <Download className="w-12 h-12" />,
      title: "Export to PDF",
      description:
        "Download your resume as a high-quality PDF with a single click. Perfect formatting guaranteed across all devices and platforms.",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-6">
            <Zap className="w-4 h-4" />
            <span>POWERFUL FEATURES</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-600">
              Land Your Dream Job
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform combines cutting-edge technology with intuitive design
            to help you create a resume that gets results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              {/* Card background with glassmorphism */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />

              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

              {/* Content */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 group-hover:border-transparent transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200">
            <div className="flex items-center gap-2">
              <CheckCheck className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Free to start</span>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">5-minute setup</span>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-700">Secure & private</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
