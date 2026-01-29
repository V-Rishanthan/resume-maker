import { Wand2, Sparkles, ChevronRight, Zap, FileText, Download, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AIResumeWriter = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Template",
      description: "Select from our collection of professional, ATS-friendly templates",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Enter Details",
      description: "Add your job title and basic information—AI does the rest",
      icon: <Wand2 className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Download Resume",
      description: "Get your polished, professional resume in seconds",
      icon: <Download className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-blue-600 to-purple-700 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white tracking-wide">
                AI RESUME WRITER
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Automate Your Resume Writing
              <span className="block text-white/90">with AI Intelligence</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Experience the future of resume creation. Our AI-powered platform makes
              building a professional resume faster and easier than ever before.
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 font-medium">
                4.9/5 from 10,000+ users
              </span>
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-white/20 -translate-x-1/2 z-0" />
                )}

                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 mb-12 relative"
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10" />
            <div className="relative">
              <p className="text-lg md:text-xl text-white/95 italic mb-6 leading-relaxed">
                "I was amazed at how quickly I could create a professional resume. The AI
                generated content that perfectly captured my experience, and I landed 3
                interviews within a week!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Kim</div>
                  <div className="text-white/70 text-sm">Product Manager at Google</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 h-14 px-10 text-lg font-bold shadow-2xl hover:scale-105 transition-all group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start Building Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-14 px-10 text-lg font-bold"
              >
                Watch Demo
              </Button>
            </div>

            <p className="text-white/80 mt-6 text-sm">
              ✓ No credit card required  •  ✓ Free to start  •  ✓ 5-minute setup
            </p>
          </motion.div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "50K+", label: "Resumes Created" },
              { value: "98%", label: "Success Rate" },
              { value: "< 5min", label: "Avg. Time" },
              { value: "4.9★", label: "User Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIResumeWriter;
