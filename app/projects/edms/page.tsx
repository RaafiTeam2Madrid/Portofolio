import Link from "next/link";
import { ArrowLeft, ArrowUpRight, GitBranch } from "lucide-react";

export default function NestjsApiDetail() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-slate-900 pb-20 font-sans">
      
      {/* Back Navigation */}
      <div className="max-w-2xl mx-auto px-4 pt-12 pb-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      {/* Main Detail Container */}
      <main className="max-w-2xl mx-auto space-y-6 px-4">
        
        {/* Project Detail Card */}
        <section className="bg-white rounded-[2rem] p-8 shadow-sm">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-y-4 text-sm mb-12 border-b border-gray-100 pb-8">
            <div className="text-gray-500">Project Type</div>
            <div className="font-medium text-gray-900">Backend Architecture & API</div>
            
            <div className="text-gray-500">Tech Stack</div>
            <div className="font-medium text-gray-900">NestJS, TypeScript, REST API</div>
            
            <div className="text-gray-500">Role</div>
            <div className="font-medium text-gray-900">Backend Engineer</div>
            
            <div className="text-gray-500">Year</div>
            <div className="font-medium text-gray-900">2026</div>
          </div>

          {/* Project Content */}
          <div>
            {/* Project Icon (Disesuaikan dengan screenshot menjadi 'E') */}
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-bold text-3xl shadow-inner mb-6">
              E
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-6">
              REST API with NestJS
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Merancang dan membangun arsitektur REST API yang terstruktur menggunakan framework NestJS. Proyek ini memfokuskan pada pemahaman logika fundamental, implementasi operasi CRUD yang efisien, dan penerapan validasi data yang ketat untuk memastikan integritas sistem backend.
            </p>

            {/* Action Buttons - Ditambahkan tombol Visit Website */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors">
                Visit Website <ArrowUpRight size={16} />
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                <GitBranch size={16} /> View Source Code
              </button>
            </div>
          </div>
          
          {/* Code/Architecture Placeholder */}
          <div className="mt-12 bg-gray-50 rounded-2xl border border-gray-100 h-64 flex flex-col items-center justify-center text-gray-400 gap-2">
            <GitBranch size={32} className="text-gray-300" />
            <p className="text-sm">API Endpoint / Swagger Documentation Placeholder</p>
          </div>

        </section>
      </main>
    </div>
  );
}