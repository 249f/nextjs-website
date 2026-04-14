import Link from 'next/link';
import Image from 'next/image';

export default function MEPService() {
  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col">
      <nav className="p-4 md:px-10 border-b border-gray-100 bg-white/95 sticky top-0 z-50 shadow-sm">
        <Link href="/" className="text-2xl font-bold text-primary">حمزة</Link>
      </nav>
      
      <main className="flex-grow">
        <header className="bg-accent/30 py-16 px-6 text-center border-b border-gray-100">
            <h1 className="text-4xl md:text-5xl font-black mb-4">تصميم أنظمة MEP</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              حلول هندسية متكاملة لضمان كفاءة أنظمة المباني من تكييف ومكافحة حريق وصرف صحي.
            </p>
        </header>

        <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6 border-r-4 border-primary pr-4">تفاصيل الخدمة</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              نقدم في مؤسسة حمزة تصميمات دقيقة ومدروسة لأنظمة المباني الأساسية (MEP) لتواكب أعلى المعايير العالمية. نعتمد على برامج المحاكاة والتحليل لضمان تحقيق أعلى كفاءة تشغيلية بأقل استهلاك للطاقة الممكنة.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 font-semibold">
               <li>تصميم أنظمة التكييف والتهوية (HVAC)</li>
               <li>أنظمة مكافحة الحريق (Firefighting) المعتمدة</li>
               <li>الأنظمة الصحية وتصريف المياه الفعالة</li>
               <li>تكامل أنظمة السلامة داخل المنشآت</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/mep/5978737632046943510.jpg" alt="MEP System" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
             </div>
             <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/mep/5978737632046943511.jpg" alt="MEP System" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
             </div>
             <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/mep/5978737632046943512.jpg" alt="MEP System" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
             </div>
             <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/mep/5978737632046943513.jpg" alt="MEP System" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
             </div>
          </div>
        </section>

        <div className="text-center pb-24">
           <Link href="/#contact" className="btn-primary text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-block">
             اطلب هذه الخدمة الآن
           </Link>
           <Link href="/#services" className="block mt-6 text-primary font-bold hover:underline transition-all">
             العودة لقائمة الخدمات ←
           </Link>
        </div>
      </main>
    </div>
  );
}
