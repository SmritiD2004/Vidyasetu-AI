import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2, FileImage, FileText, BrainCircuit, Users, Check } from "lucide-react";
import { useLocation } from "wouter";

const steps = [
  { id: 1, label: "Upload Received", icon: FileImage },
  { id: 2, label: "OCR Extraction", icon: FileText },
  { id: 3, label: "Answer Parsing & Grading", icon: CheckCircle2 },
  { id: 4, label: "Misconception Detection", icon: BrainCircuit },
  { id: 5, label: "Class Aggregation", icon: Users },
  { id: 6, label: "Completed", icon: Check },
];

export function ProcessingPipeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Progress through steps every 600ms
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(() => setLocation("/submission-success"), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(interval);
  }, [setLocation]);

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <div className="text-center space-y-2 mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <BrainCircuit className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold">Vidyasetu AI</h2>
        <p className="text-muted-foreground">Processing submission...</p>
      </div>

      <div className="space-y-4 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;
          const Icon = step.icon;

          return (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isPast || isActive ? 1 : 0.3, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative flex items-center gap-4 ${isPast || isActive ? 'text-slate-900' : 'text-slate-400'}`}
            >
              <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 bg-white transition-colors duration-300 ${isPast ? 'border-green-500 bg-green-50' : isActive ? 'border-primary shadow-[0_0_15px_rgba(30,58,138,0.3)]' : 'border-slate-200'}`}>
                {isPast ? (
                  <Check className="w-6 h-6 text-green-600" />
                ) : (
                  <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-slate-400'}`} />
                )}
              </div>
              <div className="flex-1 font-medium">
                {step.label}
                {isActive && (
                  <motion.span 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                    className="inline-block ml-1"
                  >
                    ...
                  </motion.span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
