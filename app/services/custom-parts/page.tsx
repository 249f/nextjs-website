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

        {/* Feature 1 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">التصميم الميكانيكي 3D (CAD)</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               نترجم التحديات الميكانيكية إلى نماذج ثلاثية الأبعاد تفصيلية ودقيقة. باستخدام أقوى برمجيات التصميم الهندسي (SolidWorks, AutoCAD)، نصل إلى الشكل الهندسي الأمثل للقطعة مع مراعاة كافة التفاوتات المسموحة (Tolerances) المطلوبة في بيئة العمل.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/custom_parts/5978737632046943522.jpg" alt="3D Mechanical CAD" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 2: Reversed */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 bg-gray-50/50">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">التحليل الحركي والإجهادات (FEA)</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               لا نكتفي بالشكل وحسب، بل نعرض القطع لاختبارات محاكاة حاسوبية قاسية قبل تصنيعها. نحسب الإجهادات الحرارية والتمزق والميكانيكا الحركية باستخدام أساليب العناصر المحدودة (Finite Element Analysis) لنضمن عدم حدوث انهيار تحت الضغط العالي.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/custom_parts/5978737632046943523.jpg" alt="Finite Element Analysis" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 3 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">تصنيع القطع المعقدة (الهندسة العكسية)</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               عند تلف قطعة غيار نادرة ومكلفة جداً، نتدخل لإنقاذ الموقف عبر استخراج القياسات والأبعاد منها بدقة (Reverse Engineering). نعيد إنتاج رسومات هندسية قابلة للتنفيذ الفوري لتصنيع القطعة البديلة بمواد أقوى وعمر افتراضي أطول محلياً.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/custom_parts/5978737632046943524.jpg" alt="Reverse Engineering" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 4: Reversed */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 bg-gray-50/50">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">النمذجة الأولية والطباعة ثلاثية الأبعاد</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               للتأكد تماماً من تداخل الأجزاء وعملها بسلاسة، نوفر نماذج أولية (Prototypes) مصنعة بتقنية الطباعة ثلاثية الأبعاد أو تفريز CNC سريع. يمنحك التقييم المادي المبكر للقطعة الثقة المطلقة للبدء في الإنتاج الكمي بلا تردد.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/custom_parts/5978737632046943525.jpg" alt="3D Prototyping" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        <div className="text-center py-24 bg-white">
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
