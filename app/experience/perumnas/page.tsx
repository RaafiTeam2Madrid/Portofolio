import Link from "next/link";
import { ArrowLeft, Building } from "lucide-react";

export default function PerumnasExperienceDetail() {
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
            <div className="font-medium text-gray-900">Perum Perumnas</div>
            
            <div className="text-gray-500">Role</div>
            <div className="font-medium text-gray-900">Document Controller Intern</div>
            
            <div className="text-gray-500">Period</div>
            <div className="font-medium text-gray-900">Jul 2025 - Aug 2025</div>
            
            <div className="text-gray-500">Location</div>
            <div className="font-medium text-gray-900">Jakarta, Indonesia</div>
          </div>

          <div>
            <div className="w-16 h-16 bg-cyan-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <Building size={32} />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-6">
              Perum Perumnas
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Bekerja di salah satu BUMN terbesar yang bergerak di sektor infrastruktur dan perumahan nasional menuntut presisi tingkat tinggi dalam manajemen *flow* data dan kepatuhan sistem operasional berskala *enterprise*:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-gray-600 mb-8">
              <li>Mengelola sistem organisasi untuk dokumen konstruksi krusial, termasuk instrumen kontrak, perjanjian PKWT, dan material riset proyek strategis.</li>
              <li>Merancang logika dan mengimplementasikan sistem pelabelan algoritmis untuk meningkatkan efisiensi proses retrieval (pengambilan) dokumen.</li>
              <li>Mengompilasi dan mengelola pemeliharaan data administratif klien maupun pihak internal untuk menyokong dokumentasi siklus operasional.</li>
              <li>Membantu tracking sinkronisasi dokumentasi lini masa pada kerangka pelaksanaan berbagai proyek secara serentak.</li>
              <li>Berkontribusi penuh dalam inisiatif internal perusahaan dengan merancang konten literasi kearsipan sebagai utilitas panduan operasional.</li>
              <li>Bertanggung jawab memastikan akurasi data (data accuracy), konsistensi alur, dan kompilasi regulasi compliance dalam ekosistem konstruksi.</li>
            </ul>
          </div>
          
          <div className="mt-12 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
            <img src="/perumnas.jpg" alt="Aktivitas di Perum Perumnas" className="w-full h-auto object-cover" />
          </div>

        </section>
      </main>
    </div>
  );
}