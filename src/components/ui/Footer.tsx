export default function Footer() {
    return (
        <footer className="w-full py-6 px-6 border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Vedang Verma (V). All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="https://github.com/v-001" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/v-001" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:vervedang@gmail.com" className="hover:text-foreground transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
