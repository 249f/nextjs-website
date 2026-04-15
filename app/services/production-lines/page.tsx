import Link from 'next/link';
import Image from 'next/image';

export default function ProductionLinesService() {
  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col">
      <nav className="p-4 md:px-10 border-b border-gray-100 bg-white/95 sticky top-0 z-50 shadow-sm">
        <Link href="/" className="text-2xl font-bold text-primary">حمزة</Link>
      </nav>
      
      <main className="flex-grow">
        <header className="bg-accent/30 py-16 px-6 text-center border-b border-gray-100">
            <h1 className="text-4xl md:text-5xl font-black mb-4">خطوط الإنتاج</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              تحليل وتطوير خطوط الإنتاج التصنيعية لرفع الجودة وتحسين كفاءة التشغيل.
            </p>
        </header>

        {/* Feature 1 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">تصميم وبناء خطوط ذكية</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               نبدأ معك من الصفر لترجمة أفكارك الصناعية إلى خطوط إنتاج فعلية تعمل بتزامن مثالي. نقوم باختيار الآلات، وحساب الطاقات الإنتاجية، وضبط الإيقاع (Takt Time) لضمان تسلسل سلس بين مراحل التصنيع المختلفة وبدون أي عنق زجاجة.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/production_lines/5978737632046943518.jpg" alt="Production Setup" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 2: Reversed */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 bg-gray-50/50">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">الروبوتات والتحكم الآلي</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               أتمتة العمليات (Automation) أصبحت ضرورة للبقاء في المنافسة. نطور حلول تحكم ذكية وبرمجة حركية للروبوتات، ليتم تقليل التدخل البشري في المهام الخطرة والمتكررة، مما ينعكس على سلامة العمال ودقة المنتج النهائي بشكل كبير.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/production_lines/5978737632046943519.jpg" alt="Robotics and Automation" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 3 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">تحليل وتقليل الفواقد (Lean)</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               نطبق مبادئ التصنيع الرشيق (Lean Manufacturing) لاكتشاف الهدر المخفي في الوقت، الطاقة، أو المواد الخام. من خلال خوارزميات حسابية وأدوات إحصائية، نُعيد توازن الخط لنصل بك إلى تصنيع مرن يستجيب لطلبات السوق فوراً.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/production_lines/5978737632046943520.jpg" alt="Lean Manufacturing" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 4: Reversed */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 bg-gray-50/50">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">ترقية المعدات الصناعية المتقادمة</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               إذا كانت خطوطك الحالية تعاني من أعطال مستمرة، فنحن قادرون على إجراء حزمة تحديث ميكانيكية شاملة (Retrofitting). نعيد إحياء الأجزاء التالفة ونضيف حساسات عصرية ترفع أداء خطك القديم لينافس أحدث التكنولوجيا بتكلفة جزئية.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/production_lines/5978737632046943521.jpg" alt="Upgrading Equipment" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        <div className="text-center py-24 bg-white">
           <Link href="/#contact" className="btn-primary text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-block">
             اطلب استشارة للمصنع
           </Link>
           <Link href="/#services" className="block mt-6 text-primary font-bold hover:underline transition-all">
             العودة لقائمة الخدمات ←
           </Link>
        </div>
      </main>
    </div>
  );
}
