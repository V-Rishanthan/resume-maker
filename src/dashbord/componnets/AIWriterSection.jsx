import { Stars, Wand2, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AIWriterSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 ">
          {/* Left Column - Example Resume Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 "
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Job title</h3>
              <p className="text-lg text-primary font-medium">
                Marketing Manager
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6">
                Description
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Implemented marketing campaigns that increased product
                  awareness by 25%
                </li>
                <li>Managed $500K annual digital ad budget with 5:1 ROI</li>
                <li>Led team of 5 marketing specialists</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - AI Writer Promotion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <Wand2 className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold text-primary">
                AI WRITER
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              AI Resume Builder
            </h2>

            <p className="text-lg text-gray-600">
              Let artificial intelligence write your resume.
            </p>

            <p className="text-gray-700">
              Are you struggling to find the right words for your resume? Our AI
              resume builder can find them in no time! It's powered by Google's
              Gemini AI, the world's most advanced language model, and can
              automatically produce text indistinguishable from human writers.
              Say goodbye to writer's block. Generate the first draft of your
              resume in seconds.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm">Powered by Gemini</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm">Generated in seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm">Human-like text</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm">Nobody's gonna know</span>
              </div>
            </div>

            <Button className="mt-8 gap-2" size="lg">
              <Sparkles className="w-5 h-5" />
              Create My Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIWriterSection;
