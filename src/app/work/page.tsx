"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * HOW TO EDIT YOUR WORK EXPERIENCE:
 * 
 * 1. Find the `experiences` array below (starts around line 15)
 * 2. Each experience has these fields:
 *    - id: Unique number (just increment for new entries)
 *    - role: Your job title
 *    - company: Company name
 *    - location: City, State
 *    - period: Date range (e.g., "Jan 2024 - Present")
 *    - description: Short summary (shows by default)
 *    - details: Array of bullet points for expanded view (optional)
 * 
 * 3. To add a new experience, copy an existing entry and modify it
 * 4. To remove an experience, delete the entire { } block
 * 5. The timeline will automatically update!
 */

const experiences = [
    {
        id: 1,
        role: "PDK Design Automation Engineer",
        company: "IBM Research",
        location: "Albany, New York",
        period: "Aug 2025 - Present",
        description: "Working in design enablement for semiconductor research on IBM's 2nm process technology.",
        details: [
            "Created systems for automated techfile creation for IBM 2HP and adjacent technologies through a combination of GitHub integrations and clever infrastructure",
            "Designed and implemented CI/CD pipelines within IBM infrastructures to implement new regression testing flows and modernize IBM STRD testing infrastructure",
            "Developed specs for portions of the IBM/Rapidus JDA 2nm process required for PDK delivery",
            "Owner and main developer of fill decks for IBM 2nm process"
        ]
    },
    {
        id: 2,
        role: "Software/DT Engineering Intern",
        company: "Northrop Grumman Corporation",
        location: "Rolling Meadows, Illinois",
        period: "May 2024 - Jul 2024",
        description: "Secret Clearance Required. Software and digital transformation engineering for classified projects.",
        details: [
            "Refactored and automated legacy emulation tools, improving debugging efficiency for classified hardware projects",
            "Engineered a unified framework for unit tests of classified hardware"
        ]
    },
    {
        id: 3,
        role: "FPGA/DT Engineering Intern",
        company: "Northrop Grumman Corporation",
        location: "Rolling Meadows, Illinois",
        period: "May 2023 - Aug 2023",
        description: "Secret Clearance Required. FPGA development and digital transformation for defense applications.",
        details: [
            "Developed customized IP cores tailored to project needs, utilizing custom VHDL, Verilog, and SystemVerilog",
            "Created comprehensive testbenches to execute functional and timing simulations using QuestaSim and TCL scripting"
        ]
    },
    {
        id: 4,
        role: "Introduction to VLSI System Design Course Assistant",
        company: "Grainger College of Engineering",
        location: "Urbana, Illinois",
        period: "Jan 2025 - May 2025",
        description: "Teaching assistant for ECE425, supporting 100+ students with VLSI design workflows and toolchains.",
        details: [
            "Enhanced and maintained Cadence and Synopsys tool workflows, improving usability and efficiency for 100+ students",
            "Provided office hours, guiding students through VLSI design concepts, lab assignments, and debugging challenges",
            "Developed ICV rulesets for DRC to replace Calibre DRC, ensuring compatibility with existing design flows"
        ]
    },
    {
        id: 5,
        role: "Engineering Learning Assistant",
        company: "Grainger College of Engineering",
        location: "Urbana, Illinois",
        period: "Aug 2024 - Dec 2024",
        description: "Facilitated instruction for first-year engineering students in ENG 100.",
        details: [
            "Facilitated instruction for a section of ENG 100 with 19 first-year students, delivering lessons and guiding discussions",
            "Mentored first-year engineering students, promoting a collaborative and inclusive environment"
        ]
    },
    {
        id: 6,
        role: "Engineering Student Admissions Representative",
        company: "Grainger College of Engineering",
        location: "Urbana, Illinois",
        period: "May 2022 - May 2025",
        description: "Student ambassador representing the College of Engineering to prospective students.",
        details: [
            "Collaborated with admissions, advisors, and faculty to ensure a positive experience for prospects",
            "Represented the College of Engineering during student visits and live panels, providing tours and answering questions"
        ]
    },
];

export default function Work() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-serif font-bold mb-16">Work Experience</h1>

                <div className="relative pl-8 ml-4">
                    {/* Timeline Line Background */}
                    <div className="absolute left-[3px] top-2 bottom-0 w-[2px] bg-border" />

                    {/* Active Timeline Line (Scroll Linked) */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-[3px] top-2 bottom-0 w-[2px] bg-primary"
                    />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <TimelineItem key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function TimelineItem({ exp, index }: { exp: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
            layout
        >
            <div className="grid grid-cols-[1fr_1.2fr] gap-8">
                {/* Main Timeline Content */}
                <div className="relative">
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground transition-colors z-10" />

                    {/* Active Dot Overlay that glows when in view */}
                    <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary z-10"
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold font-serif">{exp.role}</h3>
                        <span className="text-sm text-muted-foreground font-medium bg-muted px-2 py-1 rounded inline-block w-fit mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-lg font-medium text-primary mb-1">{exp.company}</p>
                    {exp.location && (
                        <p className="text-sm text-muted-foreground mb-2 italic">{exp.location}</p>
                    )}
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>

                {/* Side Panel - Details (Always Visible) */}
                {exp.details && exp.details.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        className="bg-muted/30 border border-border/50 rounded-lg p-6 h-full"
                    >
                        <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Key Responsibilities</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            {exp.details.map((detail: string, i: number) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.05 }}
                                    className="flex gap-3 leading-relaxed"
                                >
                                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                                    <span>{detail}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}
