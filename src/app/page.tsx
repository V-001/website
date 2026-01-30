"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Computer, Cpu, Code } from "lucide-react";
import ImageCarousel from "@/components/ui/ImageCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-24 min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center gap-12 sm:gap-16">
        <motion.div
          className="flex-1 text-center md:text-left space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6 text-foreground">
              Hi, I&apos;m <span className="text-primary">Vedang Verma</span>.
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-normal mb-8 max-w-2xl leading-relaxed">
              Computer Engineer bridging the gap between hardware design and software intelligence.
            </h2>
          </div>

          <motion.div
            className="flex gap-4 items-center justify-center md:justify-start flex-col sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/projects"
              className="rounded-md bg-primary text-primary-foreground px-8 py-3.5 text-lg font-medium hover:bg-primary/90 transition-all hover:translate-y-[-2px] flex items-center gap-2 shadow-sm"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-input bg-background px-8 py-3.5 text-lg font-medium hover:bg-muted/50 transition-all hover:translate-y-[-2px]"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-8 justify-center md:justify-start pt-4 text-muted-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a href="https://github.com/v-001" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/v-001" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:vervedang@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={28} />
            </a>
          </motion.div>
        </motion.div>

        {/* Carousel / Graphic Column */}
        <motion.div
          className="flex-1 w-full max-w-sm lg:max-w-md relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Use your own images here. If only one corresponds to profile.jpg, it will show just that. */}
          <ImageCarousel images={["/profile.jpg"]} />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-muted/40 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I graduated from the University of Illinois Urbana-Champaign in 2025 with a degree in Computer Engineering.
                My passion lies at the intersection of hardware and software—designing efficient systems from the transistor level up to the application layer.
              </p>
              <Link href="/about" className="text-primary font-medium hover:text-primary/80 inline-flex items-center gap-2 border-b border-primary/20 pb-1 hover:border-primary transition-all">
                Read full bio <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="p-6 bg-card rounded-lg border border-border/50 hover:border-border transition-colors shadow-sm">
                <Cpu className="text-primary mb-4" size={28} />
                <h3 className="font-serif font-bold mb-2 text-lg">Hardware</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Specialized in ASIC design, FPGA development, and VLSI architectures.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border/50 hover:border-border transition-colors shadow-sm">
                <Code className="text-primary mb-4" size={28} />
                <h3 className="font-serif font-bold mb-2 text-lg">Software</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Experienced in high-performance computing, Python, and modern web frameworks.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview (Minimal Text-Only Cards) */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground text-lg">A selection of projects.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "NERVE (Neuromorphic Engine)",
                desc: "Neuromorphic Engine with Reconfigurable Virtual Extraction on TSMC 65nm.",
                tags: ["ASIC", "Python"]
              },
              {
                title: "RISC-V Processor",
                desc: "Out-of-Order processor with custom multiplier and branch prediction algorithms.",
                tags: ["SystemVerilog", "Architecture"]
              },
              {
                title: "PDK Toolchain",
                desc: "Automated workflows ensuring design enablement for advanced nodes.",
                tags: ["EDA", "Tcl"]
              }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer bg-card border border-border/60 hover:border-primary/50 transition-all p-8 rounded-lg shadow-sm hover:shadow-md h-full flex flex-col"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">{p.title}</h3>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">{p.desc}</p>
                <div className="flex gap-2 mt-auto">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs font-medium text-muted-foreground/80 bg-muted px-2 py-1 rounded-md">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-8 flex justify-between items-center">
            <p className="text-muted-foreground">Interested in more?</p>
            <Link href="/projects" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
