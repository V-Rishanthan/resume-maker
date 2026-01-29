import { Stars, Wand2, Sparkles, Check, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AIWriterSection = () => {
  const benefits = [
    "Powered by Google Gemini AI",
    "Generated in seconds",
    "Human-quality writing",
    "ATS-optimized content",
  ];

  const stats = [
    { value: "50K+", label: "Resumes Created" },
    { value: "95%", label: "Success Rate" },
    { value: "4.9/5", label: "User Rating" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - AI Writer Promotion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
                <Wand2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-primary tracking-wide">
                  AI-POWERED WRITING
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Let AI Write Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-purple-600">
                  Perfect Resume
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Struggling to find the right words? Our AI-powered resume builder creates
                compelling, professional content in seconds—powered by Google's Gemini AI.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Say goodbye to writer's block and blank pages. Our advanced AI analyzes
                your job title and experience to generate tailored, impactful resume content
                that highlights your strengths and achievements. The result? Professional
                text that's indistinguishable from expert human writers.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="gap-2 h-14 px-8 text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all group"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Generate My Resume
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-2 hover:bg-gray-50"
              >
                See Examples
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">10,000+</span> professionals
                landed their dream jobs
              </div>
            </div>
          </motion.div>

          {/* Right Column - Resume Example */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative gradient blob */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50" />

            {/* Main card */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Card header */}
              <div className="bg-gradient-to-r from-primary to-blue-600 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/80 text-sm font-medium">AI Generated</div>
                      <div className="text-white text-lg font-bold">Resume Content</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-100 text-xs font-semibold">
                    ✓ ATS Optimized
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Senior Marketing Manager</h3>
                    <Award className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="text-sm text-gray-500 mb-4">2019 - Present • TechCorp Inc.</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 group hover:bg-blue-50/50 p-3 rounded-lg transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-gray-700 leading-relaxed">
                      Spearheaded digital marketing campaigns that increased brand awareness
                      by <span className="font-semibold text-primary">45%</span> and generated
                      over <span className="font-semibold text-primary">$2M</span> in revenue
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group hover:bg-blue-50/50 p-3 rounded-lg transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-gray-700 leading-relaxed">
                      Led cross-functional team of <span className="font-semibold text-primary">12 specialists</span> to
                      execute integrated marketing strategies across multiple channels
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group hover:bg-blue-50/50 p-3 rounded-lg transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-gray-700 leading-relaxed">
                      Optimized marketing budget allocation, achieving a
                      <span className="font-semibold text-primary"> 5:1 ROI</span> on
                      <span className="font-semibold text-primary"> $800K</span> annual spend
                    </p>
                  </div>
                </div>

                {/* AI Badge */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Stars className="w-4 h-4 text-primary" />
                    <span>Generated by Gemini AI in 3.2 seconds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating metrics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-gray-200 px-6 py-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Interview Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIWriterSection;
