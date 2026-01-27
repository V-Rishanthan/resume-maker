import { Linkedin, Github, Twitter, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Templates", "AI Writer", "Examples"],
    },
    {
      title: "Resources",
      links: [
        "Resume Tips",
        "Career Blog",
        "Help Center",
        "API Docs",
        "Webinars",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Privacy Policy",
        "Terms of Service",
        "Contact",
      ],
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-white mb-4">ResumeCraft</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The most advanced AI-powered resume builder trusted by
              professionals worldwide to land their dream jobs.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Github, Twitter, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="bg-gray-900 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  aria-label={Icon.name}
                >
                  <Icon className="w-5 h-5 text-gray-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold text-lg mb-5 tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white flex items-center transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-800 my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Rishanthan. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
