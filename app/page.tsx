"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Home, 
  User, 
  FolderKanban, 
  ShoppingBag, 
  Plus, 
  Copy, 
  ChevronRight,
  Mail,
  Check,
  History
} from "lucide-react";

export default function PortfolioHome() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("raafiyudhatamaaditya@gmail.com"); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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

  // Konfigurasi Animasi Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-slate-900 pb-20 font-sans">
      
      {/* Top Navigation Bar - Animasi Drop Down dari atas */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-center pt-8 mb-8 sticky top-0 z-50"
      >
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
            <button onClick={() => scrollToSection("experience")} className="p-2 hover:bg-gray-100 rounded-xl hover:text-black transition-colors">
              <History size={20} />
            </button>
          </div>
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-[#1A1A1A] text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors"
          >
            <Plus size={16} /> Hire Me
          </button>
        </nav>
      </motion.div>

      {/* Main Container */}
      <main className="max-w-2xl mx-auto space-y-6 px-4">
        
        {/* Profile Card */}
        <motion.section 
          id="profile" 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-[2rem] p-8 shadow-sm scroll-mt-24"
        >
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
            
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-full border-4 border-white shadow-lg flex-shrink-0 overflow-hidden self-center md:self-auto hover:scale-105 transition-transform duration-500">
              <img 
                src="https://api.dicebear.com/8.x/notionists/svg?seed=aditya" 
                alt="Avatar Aditya" 
                className="w-full h-full object-cover shadow-inner" 
              />
            </div>
          </div>
        </motion.section>

        {/* Projects Card */}
        <motion.section 
          id="projects" 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-[2rem] p-8 shadow-sm scroll-mt-24"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              Projects
            </div>
            <button className="text-sm font-medium text-gray-600 flex items-center gap-1 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
              View All <ChevronRight size={14} />
            </button>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
            <motion.div variants={fadeInUp}>
              <Link href="/projects/dshe-craft" className="block">
                <div className="group flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-sm cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-inner group-hover:scale-110 transition-transform">
                      D
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">D'she Craft Platform</h3>
                      <p className="text-sm text-gray-500">Backend integration, Database management</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-gray-300 group-hover:text-blue-600 transition-colors group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/projects/edms" className="block">
                <div className="group flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-sm cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-inner group-hover:scale-110 transition-transform">
                      N
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-slate-600 transition-colors">REST API with NestJS</h3>
                      <p className="text-sm text-gray-500">API Architecture, Validation, CRUD</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-gray-300 group-hover:text-slate-600 transition-colors group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* EXPERIENCE & BACKGROUND SECTION */}
        <motion.section 
          id="experience" 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-[2rem] p-8 shadow-sm scroll-mt-24"
        >
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
            Experience & Background
          </div>
          
          <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A] mb-4">
            From Document Control to Systems Architecture
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Pengalaman profesional saya berakar pada manajemen data, administrasi sistematis, dan klasifikasi arsip di institusi berskala besar. Pemahaman mendalam terkait integritas data, pengelolaan database, dan efisiensi pelacakan informasi ini secara langsung membentuk logika struktural saya sebagai seorang Software Engineer.
          </p>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <motion.div variants={fadeInUp}>
              <Link href="/experience/perumnas" className="block h-full">
                <div className="border border-gray-100 rounded-2xl overflow-hidden group hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-300 h-full flex flex-col">
                  <div className="h-40 overflow-hidden bg-gray-100 shrink-0">
                    <img src="/perumnas.jpg" alt="Perumnas Document Control" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Perum Perumnas</h3>
                    <p className="text-sm font-medium text-gray-700 mb-1">Document Controller Intern</p>
                    <p className="text-xs text-gray-500">Mengelola data administrasi, merancang sistem pelabelan, dan memastikan akurasi data proyek konstruksi berskala nasional.</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/experience/kemenhut" className="block h-full">
                <div className="border border-gray-100 rounded-2xl overflow-hidden group hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-300 h-full flex flex-col">
                  <div className="h-40 overflow-hidden bg-gray-100 shrink-0">
                    <img src="/Kemenhut.jpg" alt="Kemenhut Archival" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Ministry of Environment and Forestry</h3>
                    <p className="text-sm font-medium text-gray-700 mb-1">Archivist Intern</p>
                    <p className="text-xs text-gray-500">Mendigitalisasi dokumen, mengelola database terstruktur, dan mengimplementasikan langkah-langkah keamanan rekod instansi.</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/experience/msib" className="block h-full">
                <div className="border border-gray-100 rounded-2xl overflow-hidden group hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-300 h-full flex flex-col">
                  <div className="h-40 overflow-hidden bg-gray-100 shrink-0">
                    <img src="/foto msib html.jpg" alt="MSIB Kementerian Perindustrian" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Ministry of Industry (MSIB)</h3>
                    <p className="text-sm font-medium text-gray-700 mb-1">Office Administration Intern</p>
                    <p className="text-xs text-gray-500">Mengompilasi data industrial via sistem OSS, pemeliharaan sistem penjadwalan, dan optimalisasi aksesibilitas informasi.</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/experience/bappeda" className="block h-full">
                <div className="border border-gray-100 rounded-2xl overflow-hidden group hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-300 h-full flex flex-col">
                  <div className="h-40 overflow-hidden bg-gray-100 shrink-0">
                    <img src="/bappeda_1.jpg" alt="Bappeda Data Management" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Regional Revenue Agency DKI</h3>
                    <p className="text-sm font-medium text-gray-700 mb-1">Archivist Intern</p>
                    <p className="text-xs text-gray-500">Memproses klasifikasi 40+ boks rekod perpajakan dan mengonversikannya menjadi database terstruktur.</p>
                  </div>
                </div>
              </Link>
            </motion.div>

          </motion.div>
        </motion.section>

        {/* Contact / Inquiry Card */}
        <motion.section 
          id="contact" 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-[2rem] p-8 shadow-sm scroll-mt-24"
        >
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
                className="w-full bg-[#F4F5F7] border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-shadow" 
              />
              <input 
                type="email" 
                required
                placeholder="Email" 
                className="w-full bg-[#F4F5F7] border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-shadow" 
              />
            </div>
            <textarea 
              required
              placeholder="Message" 
              rows={4} 
              className="w-full bg-[#F4F5F7] border-none rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none transition-shadow"
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
        </motion.section>

        {/* Social Links & Footer */}
        <motion.section 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
            Follow Me
          </div>
          
          <div className="flex items-center gap-3">
            <a href="https://github.com/RaafiTeam2Madrid" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-gray-100 rounded-full hover:bg-gray-50 text-gray-600 hover:text-black hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/aditya-raafi" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-gray-100 rounded-full hover:bg-gray-50 text-gray-600 hover:text-blue-600 hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:raafiyudhatamaaditya@gmail.com" className="p-2.5 border border-gray-100 rounded-full hover:bg-gray-50 text-gray-600 hover:text-red-500 hover:scale-110 transition-all">
              <Mail size={18} />
            </a>
          </div>
        </motion.section>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-sm text-gray-400 pt-4 pb-8"
        >
          © 2026 Aditya — Software Engineer Portfolio
        </motion.div>

      </main>
    </div>
  );
}