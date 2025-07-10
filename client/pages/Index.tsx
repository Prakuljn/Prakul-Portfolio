import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Brain,
  Code,
  Database,
  GitBranch,
  Mail,
  ExternalLink,
  ChevronRight,
  Cpu,
  Zap,
  Target,
  TrendingUp,
  Bot,
  Network,
  Github,
  Linkedin,
  Phone,
  Send,
  MapPin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const popIn = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "backOut",
    },
  },
};

const bounceIn = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "backOut",
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const magneticHover = {
  scale: 1.15,
  transition: {
    duration: 0.6,
    ease: "easeInOut",
  },
};

const orbitalHover = {
  scale: 1.1,
  transition: {
    duration: 0.8,
    ease: "easeInOut",
  },
};

const rippleEffect = {
  scale: 1.2,
  opacity: 0.7,
  transition: {
    duration: 0.6,
    ease: "easeInOut",
  },
};

const skillLogos = [
  {
    name: "Python",
    icon: "🐍",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    name: "TensorFlow",
    icon: "🧠",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    name: "PyTorch",
    icon: "🔥",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    name: "Scikit-learn",
    icon: "��",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    name: "Docker",
    icon: "🐳",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },

  {
    name: "AWS",
    icon: "☁️",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "GitHub",
    icon: "🌿",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    name: "Jupyter",
    icon: "📓",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    name: "MySQL",
    icon: "🍃",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "FastAPI",
    icon: "⚡",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    name: "MLflow",
    icon: "🚀",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const projects = [
  {
    title: "SmartOps Al - GenAl Strategy Assitant",
    description:
      "Built a GenAI assistant using Gemini LLM, Serper API, and Tavily to generate business strategies via prompt workflows and Streamlit",
    tech: ["Gemini LLM", "Serper API", "Tavily", "Streamlit"],
    github: "https://github.com/Prakuljn/SmartOPs-AI",
    
    featured: true,
  },
  {
    title: "Computer Vision Pipeline",
    description:
      "Real-time object detection and classification system for autonomous vehicles",
    tech: ["OpenCV", "YOLO", "TensorRT"],
    github: "#",
    
  },
  {
    title: "BeuatySyncPro - Smart Salon Management",
    description:
      "Developed a Flask-based web application with a SQL database backend and an integrated AI-powered chatbot using Langgraph with Serper, Tavily, and LLM APIs to deliver dynamic, real-time responses and web-sourced insights",
    tech: ["Flask", "SQL", "Langgraph", "Serper", "Tavily", "LLM APIs"],
    github: "https://github.com/Prakuljn/Beuaty-Sync-Pro",
    
  },
];

export default function Index({ showDetails = true }) {
  const [typedText, setTypedText] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const fullText = "AI/ML Engineer";

  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({ title: "Error", description: data.error || "Something went wrong. Please try again." });
      }
    } catch (err) {
      toast({ title: "Error", description: "Could not send message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Enhanced Navigation Header */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-ai-cyan/20 border-2 border-border/50"
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(107, 38, 217, 0.5)",
                }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/prakul.png"
                  alt="Prakul Jain"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-full h-full bg-gradient-to-br from-primary/30 to-ai-cyan/30 flex items-center justify-center text-xl"
                  style={{ display: "none" }}
                >
                  🤖
                </div>
                <motion.div
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-matrix-green rounded-full border-2 border-background"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mt-0.5"></div>
                </motion.div>
              </motion.div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-primary to-ai-cyan bg-clip-text text-transparent">
                  Prakul Jain
                </div>
                <div className="text-xs text-muted-foreground">
                  AI/ML Engineer
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                { id: "home", label: "Home", icon: "🏠" },
                { id: "about", label: "About", icon: "👨‍💻" },
                { id: "experience", label: "Experience", icon: "💼" },
                { id: "skills", label: "Skills", icon: "🛠️" },
                { id: "projects", label: "Projects", icon: "🚀" },
                { id: "contact", label: "Contact", icon: "📬" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="hidden xl:inline mr-2">{item.icon}</span>
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full"
                      layoutId="activeIndicator"
                      style={{ x: "-50%" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button & Actions */}
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-primary to-ai-cyan hover:from-primary/90 hover:to-ai-cyan/90 text-primary-foreground shadow-lg"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Prakul Jain Resume.pdf";
                    link.download = "Prakul Jain Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="hidden sm:inline">Resume</span>
                </Button>
              </motion.div>

              {/* Mobile Menu Toggle */}
              <motion.button
                className="lg:hidden p-2 rounded-lg bg-card/50 border border-border/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu");
                  if (mobileMenu) {
                    mobileMenu.classList.toggle("hidden");
                  }
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            id="mobile-menu"
            className="lg:hidden mt-4 pb-4 border-t border-border/50 hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="grid grid-cols-2 gap-2 mt-4">
              {[
                { id: "home", label: "Home", icon: "🏠" },
                { id: "about", label: "About", icon: "👨‍💻" },
                { id: "experience", label: "Experience", icon: "💼" },
                { id: "skills", label: "Skills", icon: "🛠️" },
                { id: "projects", label: "Projects", icon: "🚀" },
                { id: "contact", label: "Contact", icon: "📬" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    document
                      .getElementById("mobile-menu")
                      ?.classList.add("hidden");
                  }}
                  className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50 border border-transparent"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-ai-cyan/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0">
          {/* Animated background blobs */}
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-96 h-96 bg-ai-cyan/10 rounded-full blur-3xl"
            animate={{ scale: [1, 0.8, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-data-purple/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0.9, 0.7], x: [0, 20, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Animated Profile Picture */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={showDetails ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className="mb-12"
          >
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-4 rounded-full opacity-75"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(107,38,217,0.4) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(0,204,255,0.4) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(146,52,234,0.4) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(107,38,217,0.4) 0%, transparent 70%)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main profile container */}
              <div className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 mx-auto relative">
                {/* Gradient border with animation */}
                <motion.div
                  className="absolute inset-0 rounded-full p-1.5"
                  animate={{
                    background: [
                      "linear-gradient(0deg, #6b26d9, #00ccff, #9234ea, #6b26d9)",
                      "linear-gradient(90deg, #00ccff, #9234ea, #6b26d9, #00ccff)",
                      "linear-gradient(180deg, #9234ea, #6b26d9, #00ccff, #9234ea)",
                      "linear-gradient(270deg, #6b26d9, #00ccff, #9234ea, #6b26d9)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Inner container for photo */}
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center overflow-hidden relative">
                    {/* User's profile photo */}
                    <img
                      src="/prakul.png"
                      alt="Prakul Jain - AI/ML Engineer"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        // Fallback to emoji if image fails to load
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display =
                          "flex";
                      }}
                    />
                    {/* Fallback emoji display */}
                    <motion.div
                      className="w-full h-full bg-gradient-to-br from-primary/20 via-ai-cyan/20 to-data-purple/20 rounded-full flex items-center justify-center text-7xl md:text-8xl lg:text-9xl"
                      style={{ display: "none" }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      👨‍💻
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating status indicator */}
                <motion.div
                  className="absolute -top-2 -right-2 w-10 h-10 bg-matrix-green/20 backdrop-blur-sm border-2 border-matrix-green rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div
                    className="w-4 h-4 bg-green-400 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.7)",
                        "0 0 0 6px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Floating tech icons around profile */}
                <motion.div
                  className="absolute -top-6 left-4 w-8 h-8 bg-primary/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-lg border border-primary/20"
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🧠
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 right-4 w-8 h-8 bg-ai-cyan/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-lg border border-ai-cyan/20"
                  animate={{
                    y: [5, -5, 5],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  🚀
                </motion.div>

                
              </div>

              {/* Photo replacement instructions */}
              
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text section-title"
            initial={{ x: 120, opacity: 0 }}
            animate={showDetails ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
          >
            Prakul Jain
          </motion.h1>
          <motion.div
            className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center"
            initial={{ x: -120, opacity: 0 }}
            animate={showDetails ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
          >
            <span className="text-primary font-semibold min-w-[200px] text-left">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ x: 120, opacity: 0 }}
            animate={showDetails ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
          >
            Passionate about building intelligent systems that solve real-world problems. Specializing in deep learning, computer vision, and MLOps with 6+ months of experience.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 60, opacity: 0 }}
            animate={showDetails ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.1, type: "spring", stiffness: 100 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
             
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-ai-cyan/30 hover:border-ai-cyan hover:shadow-lg hover:shadow-ai-cyan/10 transition-all duration-300"
                onClick={() => {
                  // Create a temporary link to download resume
                  const link = document.createElement("a");
                  link.href = "/Prakul Jain Resume.pdf"; // You can replace this with actual resume path
                  link.download = "Prakul Jain Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <svg
                  className="mr-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                asChild
              >
                <a href="mailto:prakuljn3105@gmail.com">
                  <Mail className="mr-2 w-4 h-4" />
                  Get In Touch
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 border-b border-border/50">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto max-w-6xl"
        >
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
          >
            {/* Left Column - Personal Info */}
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Badge variant="outline" className="mb-6">
                About Me
              </Badge>
              {/* Professional Profile Section */}
              <div className="flex items-start gap-6 mb-8">
                <motion.div
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-ai-cyan/20 border-2 border-border/50">
                    <img
                      src="/prakul.png"
                      alt="Prakul Jain Professional Headshot"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="w-full h-full bg-gradient-to-br from-primary/30 to-ai-cyan/30 flex items-center justify-center text-3xl"
                      style={{ display: "none" }}
                    >
                      👨‍💼
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-matrix-green rounded-full border-2 border-background flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </motion.div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Passionate About AI Innovation
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    AI/ML Engineer • 6+ Months Experience
                  </p>
                </div>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <motion.p variants={fadeInUp}>
                  Hi! I'm Prakul Jain, an enthusiastic AI/ML Engineer with over 6 months of hands-on experience in developing intelligent solutions. Currently, I'm working at Regex Software Services in Jaipur, Rajasthan, where I focus on applying machine learning and artificial intelligence to solve real-world challenges. My journey began with a deep curiosity about how machines can learn and make decisions, driving me to pursue a career in this dynamic field.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  My experience includes working with modern AI frameworks like TensorFlow and PyTorch, developing machine learning models, and implementing data processing pipelines. I enjoy tackling complex problems and finding innovative solutions that can make a real difference in people's lives.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  When I'm not working on AI projects, you'll find me exploring the latest research papers, contributing to open-source projects, or learning new technologies. I believe in continuous learning and staying updated with the rapidly evolving field of artificial intelligence.
                </motion.p>
              </div>
              {/* Personal Stats */}
              <motion.div
                className="mt-8 grid grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                {/* Add animated stat cards here if desired */}
              </motion.div>
            </motion.div>
            {/* Right Column - Journey & Values */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* My Journey */}
              <motion.div
                className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-ai-cyan/5 border border-primary/10 cursor-pointer"
                whileHover={{ scale: 1.08, y: -8, boxShadow: "0 8px 32px 0 rgba(107,38,217,0.10)" }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-2xl"
                  whileHover={{ scale: 1.05, opacity: 0.5 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="relative flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                    whileHover={orbitalHover}
                  >
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">My Journey</h3>
                </div>
                <motion.p className="relative text-muted-foreground leading-relaxed" variants={fadeInUp}>
                  Started as a passionate computer science student with a curiosity for AI, evolved into an AI/ML Engineer working on real-world projects at Regex Software Services. Every step has been driven by the desire to learn and apply AI technologies to solve practical problems.
                </motion.p>
              </motion.div>
              {/* Core Values */}
              <motion.div
                className="relative p-6 rounded-2xl bg-gradient-to-br from-ai-cyan/5 to-data-purple/5 border border-ai-cyan/10 cursor-pointer"
                whileHover={{ scale: 1.08, y: -8, boxShadow: "0 8px 32px 0 rgba(0,204,255,0.10)" }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="absolute inset-0 bg-ai-cyan/10 rounded-2xl"
                  whileHover={{ scale: 1.05, opacity: 0.5 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="relative flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-ai-cyan/10 flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Target className="w-5 h-5 text-ai-cyan" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">Core Values</h3>
                </div>
                <ul className="relative space-y-2 text-muted-foreground">
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      whileHover={{ scale: 2 }}
                      transition={{ duration: 0.3 }}
                    />
                    Innovation through ethical AI development
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-ai-cyan"
                      whileHover={{ scale: 2 }}
                      transition={{ duration: 0.3 }}
                    />
                    Continuous learning and knowledge sharing
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-matrix-green"
                      whileHover={{ scale: 2 }}
                      transition={{ duration: 0.3 }}
                    />
                    Building solutions that create positive impact
                  </motion.li>
                </ul>
              </motion.div>
              {/* Fun Facts */}
              <motion.div
                className="relative p-6 rounded-2xl bg-gradient-to-br from-matrix-green/5 to-data-purple/5 border border-matrix-green/10 cursor-pointer"
                whileHover={{ scale: 1.08, y: -8, boxShadow: "0 8px 32px 0 rgba(34,197,94,0.10)" }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="absolute inset-0 bg-matrix-green/10 rounded-2xl"
                  whileHover={{ scale: 1.05, opacity: 0.5 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="relative flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-matrix-green/10 flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap className="w-5 h-5 text-matrix-green" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">Beyond Code</h3>
                </div>
                <motion.p className="relative text-muted-foreground leading-relaxed" variants={fadeInUp}>
                  Coffee enthusiast ☕, sci-fi book lover ��, weekend hiker 🥾,
                  and proud mentor to the next generation of AI engineers. I
                  believe the best ideas come from diverse experiences and
                  perspectives.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Professional Experience
            </Badge>
            <h2 className="text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              6+ months of experience building cutting-edge AI solutions across
              startups and Fortune 500 companies
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-ai-cyan to-matrix-green"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            <div className="space-y-12">
             
              {/* Early Position */}
              <motion.div
                className="relative flex items-start gap-8"
                variants={bounceIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-data-purple/20 border-4 border-data-purple flex items-center justify-center relative z-10"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-data-purple/30 rounded-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <Code className="w-8 h-8 text-data-purple relative z-10" />
                </motion.div>

                <motion.div
                  className="flex-1 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-data-purple/10 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-data-purple">
                          AI/ML INTERN
                        </h3>
                        <div className="text-lg font-semibold">
                          Regex Software Services
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground bg-data-purple/10 px-3 py-1 rounded-full">
                        DEC 2024 - Present
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Started my AI journey building recommendation systems and
                      data visualizations. Contributed to open-source ML
                      libraries and gained hands-on experience with production
                      systems.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Python","MLOps", "Machine Learning","Scikit-learn","Deep Learning", "SQL", "Github","AWS","Flask","Docker","FastAPI"].map(
                        (tech) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-data-purple/10 text-data-purple text-sm rounded-full"
                            whileHover={{ scale: 1.05, y: -1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ),
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">
                About Me
              </Badge>
              <h2 className="section-title">Building the Future with AI</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate AI/ML engineer with expertise in developing
                cutting-edge machine learning solutions. My journey spans from
                research to production, focusing on scalable AI systems that
                drive business value.
              </p>
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  className="btn-accent"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Prakul Jain Resume.pdf";
                    link.download = "Prakul Jain Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <svg
                    className="mr-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Full Resume
                </Button>
              </motion.div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  className="flex items-center gap-3 cursor-pointer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  
                </motion.div>
                
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              <motion.div
                variants={popIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="cursor-pointer"
                animate={floatingAnimation}
              >
                <Card className="card card-accent">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Cpu className="w-8 h-8 text-primary mb-4" />
                    </motion.div>
                    <h3 className="font-semibold mb-2">Deep Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      Neural networks, CNNs, RNNs, and transformer architectures
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                variants={bounceIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateY: -5,
                  transition: { duration: 0.3 },
                }}
                className="cursor-pointer mt-8"
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <Card className="card card-accent">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.2 }}
                      animate={{
                        scale: [1, 1.05, 1],
                        transition: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <Network className="w-8 h-8 text-ai-cyan mb-4" />
                    </motion.div>
                    <h3 className="font-semibold mb-2">MLOps</h3>
                    <p className="text-sm text-muted-foreground">
                      Model deployment, monitoring, and CI/CD pipelines
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                variants={popIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="cursor-pointer -mt-4"
                animate={{
                  y: [0, 8, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  },
                }}
              >
                <Card className="card card-accent">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.2 }}
                      animate={{
                        scale: [1, 1.02, 1],
                        transition: {
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        },
                      }}
                    >
                      <Database className="w-8 h-8 text-matrix-green mb-4" />
                    </motion.div>
                    <h3 className="font-semibold mb-2">AWS</h3>
                    <p className="text-sm text-muted-foreground">
                      Deveploped ML models and deployed them on cloud platforms
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                variants={bounceIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateY: -5,
                  transition: { duration: 0.3 },
                }}
                className="cursor-pointer mt-4"
                animate={{
                  y: [-5, 5, -5],
                  transition: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
              >
                <Card className="card card-accent">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Zap className="w-8 h-8 text-data-purple mb-4" />
                    </motion.div>
                    <h3 className="font-semibold mb-2">AI Research</h3>
                    <p className="text-sm text-muted-foreground">
                      Published papers in top-tier ML conferences
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Technical Skills
            </Badge>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              My Expertise
            </motion.h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficient in cutting-edge technologies and frameworks for
              building scalable AI solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          >
            {skillLogos.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={popIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  y: -15,
                  rotateY: 10,
                  boxShadow: "0 8px 32px 0 hsl(var(--accent)/0.25)",
                  transition: { duration: 0.5 },
                }}
                className="cursor-pointer relative"
                animate={{
                  y: [0, -3, 0],
                  rotate: [0, 1, 0],
                  transition: {
                    duration: 3 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  },
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  whileHover={{
                    background:
                      "radial-gradient(circle, hsl(var(--accent)/0.15) 0%, transparent 70%)",
                    scale: [1, 1.2, 1],
                    transition: { duration: 0.8 },
                  }}
                />
                <Card className="relative card card-accent h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl ${skill.bgColor} flex items-center justify-center mx-auto mb-4 relative overflow-hidden`}
                      whileHover={{
                        scale: 1.3,
                        rotate: 10,
                        boxShadow: "0 0 24px 4px hsl(var(--accent)/0.25)",
                        transition: {
                          duration: 0.8,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <span className={`text-3xl ${skill.color}`}>{skill.icon}</span>
                    </motion.div>
                    <h3 className="font-semibold mb-2 gradient-text">{skill.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-muted-foreground mb-6">
              And many more technologies in the ever-evolving AI/ML ecosystem
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
             
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              Portfolio
            </Badge>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative AI/ML solutions that demonstrate technical
              excellence and real-world impact
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.06,
                  y: -10,
                  boxShadow: "0 8px 32px 0 hsl(var(--primary)/0.18)",
                  transition: { duration: 0.3 },
                }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 80 }}
                viewport={{ once: true }}
                className="cursor-pointer"
              >
                <Card
                  className={`group card card-accent hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 h-full ${
                    project.featured
                      ? "md:col-span-2 lg:col-span-1 lg:row-span-2"
                      : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                        whileHover={{ scale: 1.2, rotate: 20 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Code className="w-6 h-6 text-primary" />
                        </motion.div>
                      </motion.div>
                      <div className="flex gap-2">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-2 hover:bg-primary/10"
                            onClick={() => {
                              if (project.github && project.github !== "#") {
                                window.open(project.github, "_blank");
                              } else {
                                toast({ 
                                  title: "GitHub Link", 
                                  description: "GitHub repository link will be available soon!" 
                                });
                              }
                            }}
                          >
                            <GitBranch className="w-4 h-4" />
                          </Button>
                        </motion.div>

                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.12, rotate: 6 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs hover:bg-primary/20 transition-colors animate-pulse"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-primary/10 via-background to-ai-cyan/10"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Build Something Amazing
            </motion.h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to discuss your next AI project? I'm always excited to
              collaborate on innovative solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {/* Email Card */}
                  <motion.div
                    className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 cursor-pointer"
                    variants={popIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="relative flex items-center gap-4">
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center relative overflow-hidden"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-primary/30 rounded-2xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <Mail className="w-6 h-6 text-primary relative z-10" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.div
                          className="font-semibold text-lg mb-1"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => {
                            window.location.href = "mailto:prakuljn3105@gmail.com";
                          }}
                        >
                          Email Me
                        </motion.div>
                        <motion.div
                          className="text-muted-foreground"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          onClick={() => {
                            window.location.href = "mailto:prakuljn3105@gmail.com";
                          }}
                        >
                          prakuljn3105@gmail.com
                        </motion.div>
                      </div>
                      <motion.div
                        whileHover={{ x: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => {
                          window.location.href = "mailto:prakuljn3105@gmail.com";
                        }}
                      >
                        <ExternalLink className="w-5 h-5 text-primary/70" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Phone Card */}
                  <motion.div
                    className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-r from-ai-cyan/5 to-ai-cyan/10 border border-ai-cyan/20 cursor-pointer"
                    variants={bounceIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-ai-cyan/20 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    />
                    <div className="relative flex items-center gap-4">
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-ai-cyan/20 flex items-center justify-center relative overflow-hidden"
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-ai-cyan/30 rounded-2xl"
                          animate={{
                            scale: 1.05,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          onClick={() => {
                            window.location.href = "tel:+91 9256639008";
                          }}
                        />
                        <Phone className="w-6 h-6 text-ai-cyan relative z-10" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.div
                          className="font-semibold text-lg mb-1"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          
                          onClick={() => {
                            window.location.href = "tel:+91 9256639008";
                          }}
                        >
                          Call Me
                        </motion.div>
                        <motion.div
                          className="text-muted-foreground"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          
                          onClick={() => {
                            window.location.href = "tel:+91 9256639008";
                          }}
                        >
                          +91 9256639008
                        </motion.div>
                      </div>
                      <motion.div
                        whileHover={{ x: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => {
                          window.location.href = "tel:+91 9256639008";
                        }}
                      >
                        <ExternalLink className="w-5 h-5 text-ai-cyan/70" />
                      </motion.div>
                    </div>
                  </motion.div>

                  
                     
                 
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={bounceIn}>
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/prakuljn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-12 h-12 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    whileHover={{
                      scale: 1.3,
                      y: -8,
                      transition: { duration: 0.6 },
                    }}
                    whileTap={{ scale: 0.8 }}
                    animate={{
                      y: [0, -2, 0],
                      rotate: [0, 5, 0],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2,
                      },
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-primary/20"
                      whileHover={{
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.5, 0],
                        transition: { duration: 0.8 },
                      }}
                    />
                    <Github className="w-5 h-5 text-foreground hover:text-primary transition-colors relative z-10" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/prakuljn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-12 h-12 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:border-ai-cyan/30 transition-all duration-300 cursor-pointer"
                    whileHover={{
                      scale: 1.3,
                      y: -8,
                      transition: { duration: 0.6 },
                    }}
                    whileTap={{ scale: 0.8 }}
                    animate={{
                      y: [0, -3, 0],
                      rotate: [0, -3, 0],
                      transition: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.4,
                      },
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-ai-cyan/20"
                      whileHover={{
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.5, 0],
                        transition: { duration: 0.8 },
                      }}
                    />
                    <Linkedin className="w-5 h-5 text-foreground hover:text-ai-cyan transition-colors relative z-10" />
                  </motion.a>
                  <motion.a
                    href="mailto:prakuljn3105@gmail.com"
                    className="relative w-12 h-12 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:border-matrix-green/30 transition-all duration-300 cursor-pointer"
                    whileHover={{
                      scale: 1.3,
                      y: -8,
                      transition: { duration: 0.7 },
                    }}
                    whileTap={{ scale: 0.8 }}
                    animate={{
                      y: [0, -1, 0],
                      rotate: [0, 2, 0],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6,
                      },
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-matrix-green/20"
                      whileHover={{
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.5, 0],
                        transition: { duration: 0.8 },
                      }}
                    />
                    <Mail className="w-5 h-5 text-foreground hover:text-matrix-green transition-colors relative z-10" />
                  </motion.a>
                  <motion.a
                    href="tel:+91 9256639008"
                    className="relative w-12 h-12 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:border-data-purple/30 transition-all duration-300 cursor-pointer"
                    whileHover={{
                      scale: 1.3,
                      y: -8,
                      transition: { duration: 0.8 },
                    }}
                    whileTap={{ scale: 0.8 }}
                    animate={{
                      y: [0, -2.5, 0],
                      rotate: [0, -1, 0],
                      transition: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.8,
                      },
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-data-purple/20"
                      whileHover={{
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.5, 0],
                        transition: { duration: 0.8 },
                      }}
                    />
                    <Phone className="w-5 h-5 text-foreground hover:text-data-purple transition-colors relative z-10" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                  <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 80 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                    onSubmit={handleFormSubmit}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          className="bg-background/50 border-border/50 focus:border-primary"
                          value={form.name}
                          onChange={handleFormChange}
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-background/50 border-border/50 focus:border-primary"
                          value={form.email}
                          onChange={handleFormChange}
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Project collaboration opportunity"
                        className="bg-background/50 border-border/50 focus:border-primary"
                        value={form.subject}
                        onChange={handleFormChange}
                        disabled={loading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or idea..."
                        rows={6}
                        className="bg-background/50 border-border/50 focus:border-primary resize-none"
                        value={form.message}
                        onChange={handleFormChange}
                        disabled={loading}
                      />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                        disabled={loading}
                      >
                        <Send className="mr-2 w-5 h-5" />
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative py-16 px-6 border-t border-border/50 bg-gradient-to-r from-background via-secondary/5 to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 left-4 w-2 h-2 bg-primary/20 rounded-full"></div>
          <div className="absolute top-12 right-8 w-1 h-1 bg-ai-cyan/30 rounded-full"></div>
          <div className="absolute bottom-8 left-1/3 w-1.5 h-1.5 bg-matrix-green/20 rounded-full"></div>
          <div className="absolute bottom-4 right-1/4 w-2 h-2 bg-data-purple/20 rounded-full"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-ai-cyan/20 border-2 border-border/50"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(107, 38, 217, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/prakul.png"
                    alt="Prakul Jain"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-full bg-gradient-to-br from-primary/30 to-ai-cyan/30 flex items-center justify-center text-2xl"
                    style={{ display: "none" }}
                  >
                    🤖
                  </div>
                </motion.div>
                <div>
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-primary to-ai-cyan bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    Prakul Jain
                  </motion.div>
                  <p className="text-muted-foreground">AI/ML Engineer</p>
                </div>
              </motion.div>
              <motion.p
                className="text-muted-foreground mb-6 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Passionate about building intelligent systems that solve
                real-world problems. Specializing in deep learning, computer
                vision, and MLOps with 6+ months of experience.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: Github,
                    href: "https://github.com",
                    label: "GitHub",
                    color: "hover:bg-white/10",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                    color: "hover:bg-blue-500/10",
                  },
                  {
                    icon: Mail,
                    href: "mailto:prakuljn3105@gmail.com",
                    label: "Email",
                    color: "hover:bg-green-500/10",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`w-12 h-12 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-6 text-lg flex items-center gap-2">
                <span className="text-primary">🚀</span>
                Quick Links
              </h4>
              <div className="space-y-3">
                {[
                  { label: "About Me", id: "about", icon: "👨💻" },
                  { label: "Experience", id: "experience", icon: "💼" },
                  { label: "Skills", id: "skills", icon: "🛠️" },
                  { label: "Projects", id: "projects", icon: "📂" },
                  { label: "Contact", id: "contact", icon: "📬" },
                ].map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-6 text-lg flex items-center gap-2">
                <span className="text-ai-cyan">📍</span>
                Get In Touch
              </h4>
              <div className="space-y-4 mb-6">
                {[
                  { icon: "🌍", label: "Jaipur, Rajasthan", action: null },
                  {
                    icon: "📧",
                    label: "prakuljn3105@gmail.com",
                    action: "mailto:prakuljn3105@gmail.com",
                  },
                  {
                    icon: "📱",
                    label: "+91 9256639008",
                    action: "tel:+919256639008",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-3 text-muted-foreground ${contact.action ? "hover:text-foreground cursor-pointer" : ""}`}
                    whileHover={contact.action ? { x: 5 } : {}}
                    transition={{ duration: 0.2 }}
                    onClick={() =>
                      contact.action && window.open(contact.action)
                    }
                  >
                    <span>{contact.icon}</span>
                    <span className="text-sm">{contact.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-ai-cyan hover:from-primary/90 hover:to-ai-cyan/90 text-primary-foreground shadow-lg"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Prakul Jain Resume.pdf";
                    link.download = "Prakul Jain Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>


          {/* Copyright */}
          <motion.div
            className="pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-2">
              © 2025 Prakul Jain. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ❤️
              </motion.span>
              <span>using React, TypeScript, and Framer Motion</span>
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Photo Upload Guide - Hidden by default, can be shown for editing */}
      <motion.div
        className="fixed bottom-4 right-4 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 max-w-sm z-50 hidden"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        id="photo-guide"
      >
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          📸 Profile Photo Guide
        </h4>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div>
            <strong>Main Profile (Hero Section):</strong>
            <br />
            Replace <code>/public/placeholder-profile.jpg</code>
            <br />
            Recommended: 400x400px, square aspect ratio
          </div>
          <div>
            <strong>Professional Headshot (About):</strong>
            <br />
            Replace <code>/public/professional-headshot.jpg</code>
            <br />
            Recommended: 200x200px, professional photo
          </div>
          <div>
            <strong>Navigation Avatar:</strong>
            <br />
            Replace <code>/public/nav-avatar.jpg</code>
            <br />
            Recommended: 100x100px, small profile photo
          </div>
          <div className="pt-2 border-t border-border/50">
            <p className="text-xs">
              💡 <strong>Tip:</strong> Use high-quality photos with good
              lighting. Square aspect ratios work best for profile pictures.
            </p>
          </div>
        </div>
        <button
          onClick={() =>
            (document.getElementById("photo-guide").style.display = "none")
          }
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-xs"
        >
          ×
        </button>
      </motion.div>
    </div>
  );
}
