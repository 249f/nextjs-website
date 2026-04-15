import Link from 'next/link';
import Image from 'next/image';

export default function OnlineMaintenanceService() {
  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col">
      <nav className="p-4 md:px-10 border-b border-gray-100 bg-white/95 sticky top-0 z-50 shadow-sm">
        <Link href="/" className="text-2xl font-bold text-primary">حمزة</Link>
      </nav>
      
      <main className="flex-grow">
        <header className="bg-accent/30 py-16 px-6 text-center border-b border-gray-100">
            <h1 className="text-4xl md:text-5xl font-black mb-4">الصيانة والتشغيل</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              دعم فني فوري ومتابعة تشغيلية مستمرة لضمان عمل أنظمتك بدون مفاجآت.
            </p>
        </header>

        {/* Feature 1 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">أنظمة المراقبة المباشرة للماكينات</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               نبقيك على اتصال دائم بحالة أنظمتك المعقدة أينما كنت. نضع المستشعرات الدقيقة لربط المولدات وآلات المصانع بشبكة آمنة تعرض البيانات الحيوية (درجة الحرارة، الاهتزازات) في لوحة معلومات (Dashboard) تحدّث كل ثانية.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/maintenance_and_operation/5978737632046943526.jpg" alt="Machines Monitoring" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 2: Reversed */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 bg-gray-50/50">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">الصيانة التنبؤية الذكية (Predictive Maintenance)</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               نستبدل فلسفة "إصلاح ما بعد الكسر" بخوارزميات ذكية تتنبأ بوقت تعطل الماكينات بدقة متناهية. يتم طلب قطع الغيار وتحديد أوقات إيقاف الخط مسبقاً، مما يوفر أموالاً ضخمة على المصانع جراء الوقف المفاجئ للإنتاج.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/maintenance_and_operation/5978737632046943527.jpg" alt="Predictive Maintenance" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 3 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">التشخيص والدعم الفني عن بعد 24/7</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               في حالات الطوارئ القصوى، الوقت هو المال. نوفر بروتوكولات ارتباط آمنة تسمح لمهندسينا في مؤسسة حمزة من قراءة سجلات أعطال ماكيناتك والتدخل لتغيير الإعدادات وحل المشكلة برمجياً أو تقديم الدعم المباشر لفرقك المحلّية.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/maintenance_and_operation/5978737632046943528.jpg" alt="Online Tech Support" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 4: Reversed */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 bg-gray-50/50">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">إدارة كفاءة أصول المصانع (Asset Management)</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               نؤسس لشركتك نظام CMMS احترافي لإدارة عمليات التشغيل، التزييت، الفحص الدوري وسجلات الإصلاح. تصبح معرفة التكلفة الحقيقية لامتلاك أي معدة واضحة ومسجلة طوال فترة العمر الافتراضي لها بصورة آلية وبسيطة.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/maintenance_and_operation/5978737632046943529.jpg" alt="Asset Management" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        <div className="text-center py-24 bg-white">
           <Link href="/#contact" className="btn-primary text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-block">
             اطلب دعم فني سريع
           </Link>
           <Link href="/#services" className="block mt-6 text-primary font-bold hover:underline transition-all">
             العودة لقائمة الخدمات ←
           </Link>
        </div>
      </main>
    </div>
  );
}
