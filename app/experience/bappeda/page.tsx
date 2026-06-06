import Link from "next/link";
import { ArrowLeft, Database } from "lucide-react";

export default function BappedaExperienceDetail() {
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
            <div className="font-medium text-gray-900">Regional Revenue Agency of DKI Jakarta</div>
            
            <div className="text-gray-500">Role</div>
            <div className="font-medium text-gray-900">Archivist Intern</div>
            
            <div className="text-gray-500">Period</div>
            <div className="font-medium text-gray-900">Aug 2023</div>
            
            <div className="text-gray-500">Location</div>
            <div className="font-medium text-gray-900">Jakarta, Indonesia</div>
          </div>

          <div>
            <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <Database size={32} />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-6">
              Bappeda DKI Jakarta
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Sebagai bagian dari lembaga daerah yang bertanggung jawab atas administrasi perpajakan lokal, saya secara langsung menangani arsitektur informasi fisik yang masif, melatih pola pikir *database normalization* saya secara nyata:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 mb-8">
              <li>Memproses dan mengorganisasi lebih dari 40 boks rekod terkait perpajakan untuk merestrukturisasi aksesibilitas arsip.</li>
              <li>Mengklasifikasikan dan mengindeks dokumen berskala besar berdasarkan standar tata letak sistem kearsipan.</li>
              <li>Mendigitalisasi dan mengonversi data fisik ke dalam bentuk database Excel terstruktur untuk menyokong validasi pelaporan data manajemen.</li>
              <li>Merancang dan mengembangkan sistem pelabelan arsip yang sistematis untuk meningkatkan keterlacakan dokumen (document traceability).</li>
              <li>Membantu proses penyusunan laporan audit arsip untuk tahapan evaluasi oleh Otoritas Arsip Provinsi.</li>
            </ul>
          </div>
          
          <div className="mt-12 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
            <img src="/bappeda_1.jpg" alt="Aktivitas di Bappeda" className="w-full h-auto object-cover" />
          </div>

        </section>
      </main>
    </div>
  );
}