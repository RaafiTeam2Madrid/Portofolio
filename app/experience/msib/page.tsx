import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";

export default function MsibExperienceDetail() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-slate-900 pb-20 font-sans">
      
      <div className="max-w-2xl mx-auto px-4 pt-12 pb-6">
        <Link href="/#experience" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Experience
        </Link>
      </div>

      <main className="max-w-2xl mx-auto space-y-6 px-4">
        <section className="bg-white rounded-[2rem] p-8 shadow-sm">
          
          <div className="grid grid-cols-2 gap-y-4 text-sm mb-12 border-b border-gray-100 pb-8">
            <div className="text-gray-500">Institution</div>
            <div className="font-medium text-gray-900">Ministry of Industry, Republic of Indonesia</div>
            
            <div className="text-gray-500">Role</div>
            <div className="font-medium text-gray-900">Office Administration Intern (MSIB)</div>
            
            <div className="text-gray-500">Period</div>
            <div className="font-medium text-gray-900">Jun 2024 - Dec 2024</div>
            
            <div className="text-gray-500">Location</div>
            <div className="font-medium text-gray-900">Jakarta, Indonesia</div>
          </div>

          <div>
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <Building2 size={32} />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-6">
              Ministry of Industry
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Berperan dalam institusi pemerintahan yang bertanggung jawab memformulasikan strategi pengembangan industri nasional, pengalaman ini mempertajam kapabilitas saya dalam mengorkestrasi sistem penjadwalan dan ekstraksi data:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 mb-8">
              <li>Mengelola dan mengorganisasi korespondensi masuk dan keluar untuk memastikan dokumentasi yang sistematis dan efisiensi pengambilan data.</li>
              <li>Mengembangkan dan memelihara sistem penjadwalan tim untuk meningkatkan koordinasi dan eksekusi tugas.</li>
              <li>Mengekstraksi, menyusun, dan memperbarui data industrial (sektor bahan peledak dan pupuk) dari sistem OSS untuk kebutuhan analisis dan pelaporan internal.</li>
              <li>Menyiapkan dokumen resmi, presentasi, dan materi rapat untuk para pemangku kepentingan (stakeholders).</li>
              <li>Mendukung proses pengarsipan dokumen untuk meningkatkan aksesibilitas informasi dan akurasi rekod.</li>
              <li>Berperan sebagai Master of Ceremony (MC) dalam acara resmi pemerintahan (HGBT Kick-Off), mendemonstrasikan kemampuan komunikasi asertif.</li>
            </ul>
          </div>
          
          <div className="mt-12 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
            <img src="/foto msib html.jpg" alt="MSIB Activity" className="w-full h-auto object-cover" />
          </div>

        </section>
      </main>
    </div>
  );
}