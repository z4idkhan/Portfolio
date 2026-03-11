import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NebulaDashboard = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-foreground">
            Guide for How to Use
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">

          <a
            href="https://drive.google.com/file/d/1A_vXRsv5wKT4OSJqyXWvXG_MU6VkzK9C/view?usp=drivesdk"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all duration-300"
          >
          Headless CMS API – Frontend Connectivity Guide (Click Here)
          </a>

          </p>

          </div>

          <Link
            to="/headlesscmsapi"
            className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm text-primary-foreground"
            style={{
              background: "linear-gradient(135deg, hsl(185 100% 55%), hsl(270 80% 65%))",
            }}
          >
            Get the API
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NebulaDashboard;
