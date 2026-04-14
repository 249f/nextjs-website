import Link from 'next/link';

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

        <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6 border-r-4 border-primary pr-4">تفاصيل الخدمة</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              يواجه قطاع الصناعة تحديات مستمرة في الحفاظ على استمرارية الإنتاج بأقصى كفاءة. فريقنا يتولى تحليل أداء الماكينات، واكتشاف نقاط الاختناق (Bottlenecks)، وتقديم حلول جذرية تضمن زيادة الإنتاجية وتقليل الهدر.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 font-semibold">
               <li>تصميم وتطوير خطوط الإنتاج الجديدة</li>
               <li>تحليل أعطال الماكينات المتكررة</li>
               <li>إيجاد الحلول الجبرية الفورية للمشاكل الفنية</li>
               <li>تحسين كفاءة وسرعة التشغيل (Optimization)</li>
            </ul>
          </div>
          
          <div className="h-80 w-full bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-gray-300 shadow-inner">
             <span className="text-4xl mb-4">⚙️</span>
             <span className="font-bold">[مساحة مخصصة لصورة الخدمة]</span>
             <span className="text-sm mt-2">يمكن وضع صورة لماكينات صناعية أو أذرع آلية هنا.</span>
          </div>
        </section>

        <div className="text-center pb-24">
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
