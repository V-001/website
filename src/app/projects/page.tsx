"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// In a real app, you might fetch this from a CMS or local JSON
const projects = [
    {
        id: 1,
        title: "Neuromorphic Design Tapeout",
        description: "Architected a neuromorphic accelerator for Spiking Neural Networks (SNN) on TSMC 65nm process node. Built custom toolchain for IR-to-bitstream translation and led physical design (floorplanning, PnR, LVS, DRC).",
        tags: ["ASIC Design", "TSMC 65nm", "Innovus", "Virtuoso", "Python"],
        githubUrl: "#", // Placeholder
        liveUrl: null,
    },
    {
        id: 2,
        title: "RISC-V32I OoO Processor",
        description: "Designed an Explicit Register Renaming Out-of-Order processor supporting M extension. Features 500MHz Wallace Tree Multiplier (3-cycle latency) and multiple branch predictors. Fully verified with benchmarks.",
        tags: ["SystemVerilog", "Computer Architecture", "RISC-V", "Verification"],
        githubUrl: "#",
        liveUrl: null,
    },
    {
        id: 3,
        title: "FreePDK45 Toolchain Extension",
        description: "Reverse-engineered Synopsys ICV rulesets to translate between Calibre, Assura, and ICV. Integrated Synopsys EDA tools into the design flow and added support for Custom Compiler.",
        tags: ["EDA", "PDK", "Synopsys", "Tcl", "Calibre"],
        githubUrl: null,
        liveUrl: null,
    },
    {
        id: 4,
        title: "Personal Standard Cell Library",
        description: "Designed and characterized a standard cell library for ASIC development. Optimized layouts for area, power, and performance manually.",
        tags: ["VLSI", "Standard Cells", "Layout Design", "ASIC"],
        githubUrl: "#",
        liveUrl: null,
    },
    {
        id: 5,
        title: "DE10-Lite FPGA Drum Machine",
        description: "Designed a fully functional drum machine in SystemVerilog for ECE385. Engineered framework for tempo manipulation and selective playback.",
        tags: ["SystemVerilog", "FPGA", "Audio Processing", "DE10-Lite"],
        githubUrl: "#",
        liveUrl: null,
    },
    {
        id: 6,
        title: "Pipelined RISC-V Processor",
        description: "5-stage pipelined processor fully compliant with RV32I ISA. Optimized with hazard detection and forwarding units.",
        tags: ["SystemVerilog", "RISC-V", "Computer Architecture"],
        githubUrl: "#",
        liveUrl: null,
    },
];

export default function Projects() {
    return (
        <div className="container mx-auto px-6 py-12 max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-12">Featured Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm h-full flex flex-col"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-muted/50 rounded-md text-xs font-medium text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                                        >
                                            <Github size={16} /> Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                    {!project.githubUrl && !project.liveUrl && (
                                        <span className="text-xs text-muted-foreground italic">
                                            Private / Internal Project
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
