import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-96 h-96 rounded-full gradient-purple opacity-10 blur-[120px]" />

      <div className="container mx-auto px-6 max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body">
            Let's Talk
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Start Your Project
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Tell us about your vision. We'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-body text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-5 py-3.5 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-body text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-5 py-3.5 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-card border border-border rounded-xl px-5 py-3.5 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="gradient-purple px-10 py-4 rounded-full text-accent-foreground font-medium hover:opacity-90 transition-opacity glow-purple inline-flex items-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
