"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Home, 
  User, 
  FolderKanban, 
  ShoppingBag, 
  Plus, 
  Copy, 
  ChevronRight,
  Mail,
  Check
} from "lucide-react";

export default function PortfolioHome() {
  // State untuk fitur Copy Email
  const [copied, setCopied] = useState(false);
  
  // State untuk fitur Form Inquiry
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fungsi Copy ke Clipboard
  const handleCopyEmail = () => {
    // Menyalin email aslimu
    navigator.clipboard.writeText("raafiyudhatamaaditya@gmail.com"); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset icon setelah 2 detik
  };

  // Fungsi Smooth Scroll ke Section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Fungsi Handle Submit Form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-slate-900 pb-20 font-sans">
      
      {/* Top Navigation Bar */}
      <div className="flex justify-center pt-8 mb-8 sticky top-0 z-50">
        <nav className="bg-white px-4 py-2 rounded-2xl shadow-sm flex items-center gap-6">
          <div className="flex items-center gap-4 text-gray-500">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="p-2 hover:bg-gray-100 rounded-xl hover:text-black transition-colors">
              <Home size={20} />
            </button>
            <button onClick={() => scrollToSection("profile")} className="p-2 hover:bg-gray-100 rounded-xl hover:text-black transition-colors">
              <User size={20} />
            </button>
            <button onClick={() => scrollToSection("projects")} className="p-2 hover:bg-gray-100 rounded-xl hover:text-black transition-colors">
              <FolderKanban size={20} />
            </button>
            <button onClick={() => scrollToSection("contact")} className="p-2 hover:bg-gray-100 rounded-xl hover:text-black transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-[#1A1A1A] text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors"
          >
            <Plus size={16} /> Hire Me
          </button>
        </nav>
      </div>

      {/* Main Container */}
      <main className="max-w-2xl mx-auto space-y-6 px-4">
        
        {/* Profile Card */}
        <section id="profile" className="bg-white rounded-[2rem] p-8 shadow-sm scroll-mt-24">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              Software Engineer
            </div>
            <div className="bg-[#E2F5EA] text-[#229A58] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#229A58] rounded-full"></span>
              AVAILABLE FOR WORK
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-8">
            <div className="md:max-w-lg space-y-4">
              <div className="text-gray-500 text-sm font-medium">Profile</div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
                I'm Aditya
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed pt-2">
                Backend engineer from Jakarta, ID. Currently developing scalable APIs and robust systems, including integration platforms like D'she Craft.
              </p>
              <div className="flex flex-wrap gap-3 pt-6">
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors"
                >
                  <Plus size={16} /> Hire Me
                </button>
                <button 
                  onClick={handleCopyEmail}
                  className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                  {copied ? "Copied!" : "Copy Email"}
                </button>
              </div>
            </div>
            
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-full border-4 border-white shadow-lg flex-shrink-0 overflow-hidden self-center md:self-auto">
              <img 
                src="https://api.dicebear.com/8.x/notionists/svg?seed=aditya" 
                alt="Avatar Aditya" 
                className="w-full h-full object-cover shadow-inner" 
              />
            </div>
          </div>
        </section>

        {/* Projects Card */}
        <section id="projects" className="bg-white rounded-[2rem] p-8 shadow-sm scroll-mt-24">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              Projects
            </div>
            <button className="text-sm font-medium text-gray-600 flex items-center gap-1 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
              View All <ChevronRight size={14} />
            </button>
          </div>

          <div className="space-y-3">
            {/* Project 1 */}
            <Link href="/projects/dshe-craft" className="block">
              <div className="group flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-sm cursor-pointer transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-inner">
                    D
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">D'she Craft Platform</h3>
                    <p className="text-sm text-gray-500">Backend integration, Database management</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
              </div>
            </Link>

            {/* Project 2 */}
            <Link href="/projects/nestjs-api" className="block">
              <div className="group flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-sm cursor-pointer transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-inner">
                    N
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-slate-600 transition-colors">REST API with NestJS</h3>
                    <p className="text-sm text-gray-500">API Architecture, Validation, CRUD</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-300 group-hover:text-slate-600 transition-colors" />
              </div>
            </Link>
          </div>
        </section>

        {/* Contact / Inquiry Card */}
        <section id="contact" className="bg-white rounded-[2rem] p-8 shadow-sm scroll-mt-24">
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-[#229A58] rounded-full"></span>
            Hire Me
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-2">
            Project Inquiry
          </h2>
          <p className="text-gray-500 mb-8">
            Got an idea and need backend or system development help? Reach out now.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                required
                placeholder="Name" 
                className="w-full bg-[#F4F5F7] border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200" 
              />
              <input 
                type="email" 
                required
                placeholder="Email" 
                className="w-full bg-[#F4F5F7] border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200" 
              />
            </div>
            <textarea 
              required
              placeholder="Message" 
              rows={4} 
              className="w-full bg-[#F4F5F7] border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none"
            ></textarea>
            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className={`w-full text-white text-sm font-medium rounded-xl py-3.5 transition-colors flex items-center justify-center gap-2
                ${isSuccess ? 'bg-[#229A58]' : 'bg-[#1A1A1A] hover:bg-black'} 
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              {isSubmitting ? "Sending..." : isSuccess ? <><Check size={18} /> Sent Successfully!</> : "Submit Inquiry"}
            </button>
          </form>
        </section>

        {/* Social Links & Footer */}
        <section className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
            Follow Me
          </div>
          
          <div className="flex items-center gap-3">
            {/* GitHub SVG Icon Asli */}
            <a href="https://github.com/RaafiTeam2Madrid" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-gray-100 rounded-full hover:bg-gray-50 text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
              </svg>
            </a>
            
            {/* LinkedIn SVG Icon Asli */}
            <a href="https://www.linkedin.com/in/aditya-raafi" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-gray-100 rounded-full hover:bg-gray-50 text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            {/* Email menggunakan target mailto: */}
            <a href="mailto:raafiyudhatamaaditya@gmail.com" className="p-2.5 border border-gray-100 rounded-full hover:bg-gray-50 text-gray-600 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </section>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 pt-4 pb-8">
          © 2026 Aditya — Software Engineer Portfolio
        </div>

      </main>
    </div>
  );
}