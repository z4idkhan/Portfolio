import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Copy } from "lucide-react";
import { useState } from "react";

const HeadlessCmsApi = () => {
  const [copied, setCopied] = useState(false);
  const theurl = "https://headless-cms-nxws.onrender.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(theurl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <Link
          to="/headlesscmsdashboard"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Guide
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-foreground">
            Here is Your API
          </h1>

          <div className="glass-card rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-3 font-mono">API Endpoint</p>
            <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
              <code className="text-sm text-primary break-all flex-1 font-mono">
                {theurl}
              </code>
              <button
                onClick={handleCopy}
                className="shrink-0 p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Copy size={16} />
              </button>
            </div>
            {copied && (
              <p className="text-xs text-primary mt-2 font-mono">Copied to clipboard!</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeadlessCmsApi;