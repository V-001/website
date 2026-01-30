"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Connect to form handling service here
        console.log("Form submitted:", formState);
        alert("Thanks for reaching out! This is a demo form.");
    };

    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <p className="text-lg text-muted-foreground mb-8">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:vervedang@gmail.com" className="flex items-center gap-4 text-lg font-medium hover:text-foreground/80 transition-colors">
                                <div className="p-3 bg-muted rounded-full">
                                    <Mail size={20} />
                                </div>
                                vervedang@gmail.com
                            </a>

                            <a href="https://github.com/v-001" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg font-medium hover:text-foreground/80 transition-colors">
                                <div className="p-3 bg-muted rounded-full">
                                    <Github size={20} />
                                </div>
                                v-001
                            </a>

                            <a href="https://linkedin.com/in/v-001" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg font-medium hover:text-foreground/80 transition-colors">
                                <div className="p-3 bg-muted rounded-full">
                                    <Linkedin size={20} />
                                </div>
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-foreground text-background font-medium py-2 rounded-md hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={16} />
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
