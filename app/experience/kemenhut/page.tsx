import Link from "next/link";
import { ArrowLeft, Archive } from "lucide-react";

export default function KemenhutExperienceDetail() {
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
            <div className="font-medium text-gray-900">Ministry of Environment and Forestry (KLHK)</div>
            
            <div className="text-gray-500">Role</div>
            <div className="font-medium text-gray-900">Archivist Intern</div>
            
            <div className="text-gray-500">Period</div>
            <div className="font-medium text-gray-900">Mar 2025 - Apr 2025</div>
            
            <div className="text-gray-500">Location</div>
            <div className="font-medium text-gray-900">Jakarta, Indonesia</div>
          </div>

          <div>
            <div className="w-16 h-16 bg-amber-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <Archive size={32} />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-6">
              Ministry of Forestry (KLHK)
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Bertugas di ranah manajemen sumber daya institusi, peranan ini mempertajam kapabilitas saya dalam aspek keamanan data (kriptografi/watermarking) serta pemeliharaan integritas informasi:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 mb-8">
              <li>Mengelola dan memproses rekod Surat Keputusan Menteri (2022) untuk memastikan klasifikasi organisasi yang mutlak.</li>
              <li>Mendigitalisasi dokumen fisik dan melakukan deployment (unggah) ke dalam sistem kearsipan elektronik.</li>
              <li>Menginput dan memelihara data arsip melalui struktur database fungsional (Google Sheets) untuk keperluan validasi pelacakan dan pelaporan.</li>
              <li>Mengimplementasikan standar keamanan dokumen, termasuk teknik watermarking, untuk menjamin autentikasi dan integritas data secara utuh.</li>
              <li>Mengorganisasi pelestarian rekod fisik dengan mengadopsi standarisasi perlengkapan dan kaidah klasifikasi sistematis.</li>
            </ul>
          </div>
          
          <div className="mt-12 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
            <img src="/Kemenhut.jpg" alt="Aktivitas di Kemenhut" className="w-full h-auto object-cover" />
          </div>

        </section>
      </main>
    </div>
  );
}