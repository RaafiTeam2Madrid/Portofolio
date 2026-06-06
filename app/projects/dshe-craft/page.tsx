import Link from "next/link";
import { ArrowLeft, ArrowUpRight, GitBranch } from "lucide-react";

export default function DsheCraftDetail() {
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
            <div className="font-medium text-gray-900">Backend Integration & Database</div>
            
            <div className="text-gray-500">Tech Stack</div>
            <div className="font-medium text-gray-900">Next.js, NestJS, TypeScript, DBeaver</div>
            
            <div className="text-gray-500">Role</div>
            <div className="font-medium text-gray-900">Software Engineer</div>
            
            <div className="text-gray-500">Year</div>
            <div className="font-medium text-gray-900">2026</div>
          </div>

          {/* Project Content */}
          <div>
            {/* Project Icon */}
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-3xl shadow-inner mb-6">
              D
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-6">
              D'she Craft Platform
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Pengembangan fungsionalitas platform web inovatif untuk D'she Craft. Proyek ini difokuskan pada pengelolaan data produk secara efisien, menghubungkan logika frontend dengan arsitektur backend, serta memastikan struktur database dikelola dengan rapi untuk memberikan pengalaman pengguna yang mulus.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors">
                Visit Website <ArrowUpRight size={16} />
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                <GitBranch size={16} /> View Repository
              </button>
            </div>
          </div>
          
          {/* Image Placeholder */}
          <div className="mt-12 bg-gray-50 rounded-2xl border border-gray-100 h-64 flex items-center justify-center text-gray-400">
            <p className="text-sm">Architecture / Database Schema Image Placeholder</p>
          </div>

        </section>
      </main>
    </div>
  );
}