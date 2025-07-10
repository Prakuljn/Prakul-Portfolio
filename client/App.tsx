import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3200); // Show splash for 3.2s
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1.15, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="flex flex-col items-center"
      >
        <img
          src="/prakul.png"
          alt="Prakul Jain"
          className="w-52 h-52 rounded-full shadow-2xl mb-8 border-8 border-primary object-cover"
        />
        <h1 className="text-6xl font-extrabold gradient-text mb-4 tracking-tight">Prakul Jain</h1>
        <p className="text-2xl text-muted-foreground font-semibold">AI/ML Engineer</p>
      </motion.div>
    </motion.div>
  );
}

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!showSplash) {
      // Wait for splash exit animation before showing details
      const timer = setTimeout(() => setShowDetails(true), 600);
      return () => clearTimeout(timer);
    } else {
      setShowDetails(false);
    }
  }, [showSplash]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence>
          {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
        </AnimatePresence>
        {!showSplash && (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index showDetails={showDetails} />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
