"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                    <div className="w-full md:w-2/3">
                        <h1 className="text-4xl font-bold mb-6">About Me</h1>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-muted-foreground mb-6">
                                I am a Computer Engineer specializing in the <strong>Semiconductor Manufacturing</strong> industry. My passion lies in bridging the critical gap between hardware design and physical implementation, ensuring that next-generation chips are not only functional but manufacturable at scale.
                            </p>

                            <p className="text-lg text-muted-foreground">
                                Currently, I work as a <span className="text-primary font-medium">PDK Design Automation Engineer at IBM Research</span>, driving innovation in design enablement for 2nm process nodes and beyond. I focus on automating complex EDA flows, developing robust PDKs, and optimizing the path from RTL to GDSII. My goal is to leverage technology to create a more humanly efficient world through advanced hardware solutions.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                        <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-border shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
                            <Image
                                src="/profile.jpg"
                                alt="Vedang Verma"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-primary">Education</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold">University of Illinois Urbana-Champaign</h3>
                            <p className="text-muted-foreground">Bachelor of Science in Computer Engineering (May 2025)</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Relevant Coursework: Advanced VLSI System Design, Computer Architecture, Digital Signal Processing, Optimization
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-primary">Leadership</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold">IEEE-Eta Kappa Nu (HKN)</h3>
                                <p className="text-muted-foreground text-sm">President (Apr 2024 - May 2025)</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Directed operations for the Alpha Chapter, managing strategic planning and external partnerships.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Illini Solar Car Team</h3>
                                <p className="text-muted-foreground text-sm">Telemetry Lead (Sep 2021 - May 2023)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-6 text-primary">Technical Skills</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Engineering & Design</h3>
                        <div className="flex flex-wrap gap-2">
                            {["RTL to GDSII", "Physical Design", "Timing Analysis", "Digital Signoff", "Spiking Neural Networks", "FPGA", "Computer Architecture"].map(s => (
                                <span key={s} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">{s}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {["SystemVerilog", "Verilog", "Python", "C/C++", "Tcl", "Bash", "Calibre SVRF/TVF", "Cadence SKILL", "CUDA"].map(s => (
                                <span key={s} className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium border border-border">{s}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Innovus", "Virtuoso", "Calibre", "VCS", "ICV", "KLayout", "Verdi", "Fusion Compiler"].map(s => (
                                <span key={s} className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium border border-border">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
