import { Button } from "@/components/ui/button";
import Header from "@/components/ui/custom/Header";
import React from "react";
import geminiAIIMG from "../assets/Google Ai Gemini.png";
import cv from "../assets/Img-CV-B_2x.jpg";
import Features from "@/dashbord/componnets/Features";
import AIWriterSection from "@/dashbord/componnets/AIWriterSection";
import AIResumeWriter from "@/dashbord/componnets/AIResumeWriter";
import Footer from "@/dashbord/componnets/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 mix-blend-multiply dark:mix-blend-lighten" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/30 rounded-full blur-[100px] -z-10 opacity-30" />

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-secondary text-sm font-medium text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>No.1 AI Resume Builder</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Craft a <span className="text-primary">Professional Resume</span> with AI Intelligence
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Stand out from the crowd with a resume that highlights your strengths.
            Our AI-powered builder ensures your CV is ATS-friendly and designed to impress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="h-12 px-8 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all rounded-full group">
              Build My Resume
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full hover:bg-secondary/80">
              View Examples
            </Button>
          </div>

          {/* Hero Image/Preview */}
          <div className="relative max-w-5xl mx-auto mt-12 animate-in fade-in zoom-in-50 duration-700 delay-200">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20"></div>
            <div className="relative bg-card rounded-xl border border-border shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
              <img
                src={cv}
                alt="Resume Preview"
                className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:right-10 bg-card p-4 rounded-xl shadow-xl border border-border flex items-center gap-3 animate-bounce shadow-primary/10">
              <div className="bg-primary/10 p-2 rounded-lg">
                <img src={geminiAIIMG} alt="AI" width={32} height={32} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Powered by</p>
                <p className="text-xs text-muted-foreground">Google Gemini</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Features Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <Features />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <AIWriterSection />
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <AIResumeWriter />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
