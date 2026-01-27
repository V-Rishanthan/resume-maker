import { Wand2, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AIResumeWriter = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header with icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Wand2 className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary">
              AI RESUME WRITER
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Automate your resume writing with AI Writer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
          >
            See for yourself how our AI Resume Writer can drastically speed up
            your resume writing process. Thanks to artificial intelligence,
            we've automated resume creation to be almost entirely effortless and
            faster than ever.
          </motion.p>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <ul className="space-y-3 text-gray-700 text-left max-w-sm mx-auto">
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span>
                  Select a template, enter your job title and let AI do the rest
                </span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span>Get a beautiful AI-generated resume in seconds</span>
              </li>
            </ul>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-20 h-px bg-gray-200 mx-auto mb-8"
          />

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button className="gap-2" size="lg">
              Try AI Resume Writer
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIResumeWriter;
