import { Camera, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white px-6 py-20 md:px-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl leading-[1.1]">
                        Let&apos;s create something awesome together!
                    </h2>
                    <a
                        href="mailto:pranavdofficial@gmail.com"
                        className="text-xl md:text-2xl text-gray-500 hover:text-accent transition-colors flex items-center gap-2"
                    >
                        <Mail className="w-6 h-6" />
                        pranavdofficial@gmail.com
                    </a>
                </div>

                <div className="flex gap-6">
                    <a
                        href="https://www.linkedin.com/in/pranav-dwivedi-05b4b921b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-full hover:bg-accent hover:text-white transition-all"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://github.com/pronzzz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-full hover:bg-accent hover:text-white transition-all"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://navzfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-full hover:bg-accent hover:text-white transition-all"
                    >
                        <Camera className="w-6 h-6" />
                    </a>
                </div>
            </div>

            <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Pranav Dwivedi. All rights reserved.</p>
                <p>Canberra, ACT, Australia</p>
            </div>
        </footer>
    );
}
