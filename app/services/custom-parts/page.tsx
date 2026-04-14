import Link from 'next/link';
import Image from 'next/image';

export default function CustomPartsService() {
  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col">
      <nav className="p-4 md:px-10 border-b border-gray-100 bg-white/95 sticky top-0 z-50 shadow-sm">
        <Link href="/" className="text-2xl font-bold text-primary">حمزة</Link>
      </nav>
      
      <main className="flex-grow">
        <header className="bg-accent/30 py-16 px-6 text-center border-b border-gray-100">
            <h1 className="text-4xl md:text-5xl font-black mb-4">تصميم أجزاء مخصصة</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              تصميم وتعديل القطع الميكانيكية المعقدة لتلائم احتياجاتك التشغيلية الخاصة.
            </p>
        </header>

        <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6 border-r-4 border-primary pr-4">تفاصيل الخدمة</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              في كثير من الأحيان، تفشل القطع القياسية في أداء المطلوب منها داخل الأنظمة المعقدة. نقوم في مؤسسة حمزة بابتكار أجزاء ميكانيكية استثنائية ونمذجتها باستخدام أحدث برامج الـ CAD لحل أصعب المشاكل الفنية.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 font-semibold">
               <li>تصميم قطع ميكانيكية غير متوفرة بالسوق</li>
               <li>تعديل تصميمات قائمة لتحسين الأداء والمتانة</li>
               <li>النمذجة الرياضية واختبار الإجهاد للقطع</li>
               <li>إعداد الرسومات التنفيذية الجاهزة للتصنيع</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/custom_parts/5978737632046943522.jpg" alt="Custom Part" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
             </div>
             <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/custom_parts/5978737632046943523.jpg" alt="Custom Part" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
             </div>
             <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/custom_parts/5978737632046943524.jpg" alt="Custom Part" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
             </div>
             <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/custom_parts/5978737632046943525.jpg" alt="Custom Part" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 33vw" />
             </div>
          </div>
        </section>

        <div className="text-center pb-24">
           <Link href="/#contact" className="btn-primary text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-block">
             ابدأ تصميم قطعتك الآن
           </Link>
           <Link href="/#services" className="block mt-6 text-primary font-bold hover:underline transition-all">
             العودة لقائمة الخدمات ←
           </Link>
        </div>
      </main>
    </div>
  );
}
