"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Calculators State
  const [hvacArea, setHvacArea] = useState<number | ''>('');
  const [hvacResult, setHvacResult] = useState<number | null>(null);

  const [fireArea, setFireArea] = useState<number | ''>('');
  const [fireResult, setFireResult] = useState<number | null>(null);

  const calculateHvac = () => {
    if (hvacArea && typeof hvacArea === 'number') {
      // Rough estimation: 1 Ton per 12 square meters for standard height
      setHvacResult(Number((hvacArea / 12).toFixed(1)));
    }
  };

  const calculateFireExtinguisher = () => {
    if (fireArea && typeof fireArea === 'number') {
      // Rough estimation: 1 Extinguisher per ~200 square meters
      setFireResult(Math.ceil(fireArea / 200));
    }
  };

  return (
    <div className="w-full bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-4 md:px-10 flex justify-between items-center z-50 bg-white/95 backdrop-blur-sm shadow-soft border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold text-primary transition-opacity hover:opacity-80">
          حمزة
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-700">
          <Link href="#about" className="hover:text-primary transition-colors">من نحن</Link>
          <Link href="#services" className="hover:text-primary transition-colors">خدماتنا</Link>
          <Link href="#tools" className="hover:text-primary transition-colors">أدوات هندسية</Link>
          <Link href="#portfolio" className="hover:text-primary transition-colors">أعمالنا</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">تواصل معنا</Link>
        </div>
        <a href="#contact" className="btn-primary text-sm hidden md:flex">
          اطلب خدمة
        </a>
        <button className="md:hidden text-primary font-bold">القائمة</button>
      </nav>

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-10 py-16 md:py-24 border-b border-gray-100 bg-accent/30 overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-foreground leading-[1.2] mb-6 fade-in-up">
                حلول هندسية متكاملة لضمان <span className="text-primary">الكفاءة والجودة.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 fade-in-up delay-100 leading-relaxed">
                مؤسسة "حمزة" متخصصة في تقديم الحلول الهندسية المتكاملة في مجالات أنظمة المباني وخطوط الإنتاج. ننهض بمشاريعك بحلول مبتكرة وعملية.
              </p>
              <div className="flex gap-4 fade-in-up delay-200">
                <Link href="#contact" className="btn-primary text-lg">
                  استشارة مجانية
                </Link>
                <Link href="#services" className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary/5 transition-colors text-lg inline-flex items-center justify-center">
                  تصفح خدماتنا
                </Link>
              </div>
            </div>
            {/* Hero Image */}
            <div className="hidden md:block relative h-[450px] w-full fade-in-up delay-300">
              <Image
                src="/paper.webp"
                alt="مخططات هندسية"
                fill
                className="object-cover rounded-2xl shadow-lg border border-gray-200"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">من نحن</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">نؤمن أن كل مشكلة هندسية لها حل ذكي</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            نحن فريق هندسي بقيادة مهندس ميكانيكي متخصص، نمتلك خبرة واسعة في أنظمة التكييف والتهوية (HVAC)، أنظمة مكافحة الحريق، الأنظمة الصحية، وأنظمة السلامة. مهمتنا هي الوصول للحل بأعلى كفاءة وأقل تكلفة.
          </p>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24 bg-gray-50 border-y border-gray-100 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">خدماتنا</h2>
              <h3 className="text-3xl md:text-4xl font-bold">الحلول الهندسية الشاملة</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 card-hover shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center mb-6 text-2xl">❄️</div>
                <h4 className="text-xl font-bold mb-4">تصميم أنظمة MEP</h4>
                <p className="text-gray-600 mb-4">تصميم أنظمة التكييف والتهوية (HVAC)، مكافحة الحريق (Firefighting)، الأنظمة الصحية، والسلامة.</p>
              </div>

              <div className="bg-white p-8 card-hover shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center mb-6 text-2xl">⚙️</div>
                <h4 className="text-xl font-bold mb-4">خطوط الإنتاج</h4>
                <p className="text-gray-600 mb-4">تصميم وتطوير خطوط الإنتاج، تحليل الأعطال وإيجاد الحلول الجبرية لتحسين كفاءة التشغيل.</p>
              </div>

              <div className="bg-white p-8 card-hover shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center mb-6 text-2xl">🧩</div>
                <h4 className="text-xl font-bold mb-4">تصميم أجزاء مخصصة</h4>
                <p className="text-gray-600 mb-4">تصميم قطع ميكانيكية حسب الطلب وتعديل تصميمات قائمة لحل مشاكل فنية.</p>
              </div>

              <div className="bg-white p-8 card-hover shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center mb-6 text-2xl">🧠</div>
                <h4 className="text-xl font-bold mb-4">الاستشارات الهندسية</h4>
                <p className="text-gray-600 mb-4">مراجعة التصميمات بدقة، تقديم حلول فنية للمشاكل الهندسية ودعم المشاريع بالخبرات.</p>
              </div>

              <div className="bg-white p-8 card-hover shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center mb-6 text-2xl">🛠️</div>
                <h4 className="text-xl font-bold mb-4">الصيانة والتشغيل</h4>
                <p className="text-gray-600 mb-4">تشخيص الأعطال المعقدة عن بعد، دعم فني مباشر فعال، ومتابعة تشغيل الأنظمة.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tools */}
        <section id="tools" className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">أدوات هندسية</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">حاسبات سريعة لتقدير الأحمال</h3>
            <p className="text-gray-600 mt-4">استخدم هذه الأدوات كتقدير مبدئي قبل الاستشارة الهندسية.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* HVAC Calculator */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-soft">
              <h4 className="text-2xl font-bold mb-2">حاسبة حمل التكييف التقديري</h4>
              <p className="text-sm text-gray-500 mb-6">احسب السعة التقريبية للمكيف المطلوبة بناءً على المساحة (يفترض ارتفاع قياسي).</p>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">المساحة (متر مربع):</label>
                  <input
                    type="number"
                    value={hvacArea}
                    onChange={(e) => setHvacArea(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="مثال: 50"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none bg-white"
                  />
                </div>
                <button onClick={calculateHvac} className="btn-primary w-full mt-2">احسب السعة</button>
                {hvacResult !== null && (
                  <div className="mt-4 p-4 bg-accent text-primary rounded-md border border-primary/20 text-center text-lg">
                    السعة المطلوبة تقريباً: <span className="font-bold text-2xl mx-1">{hvacResult}</span> طن تبريد
                  </div>
                )}
              </div>
            </div>

            {/* Fire Extinguisher Calculator */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-soft">
              <h4 className="text-2xl font-bold mb-2">حاسبة طفايات الحريق التقريبية</h4>
              <p className="text-sm text-gray-500 mb-6">احسب العدد التقريبي لطفايات الحريق اليدوية بناءً على المساحة.</p>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">المساحة الإجمالية للمكان (متر مربع):</label>
                  <input
                    type="number"
                    value={fireArea}
                    onChange={(e) => setFireArea(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="مثال: 1000"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none bg-white"
                  />
                </div>
                <button onClick={calculateFireExtinguisher} className="btn-primary w-full mt-2">احسب العدد</button>
                {fireResult !== null && (
                  <div className="mt-4 p-4 bg-accent text-primary rounded-md border border-primary/20 text-center text-lg">
                    العدد التقديري: <span className="font-bold text-2xl mx-1">{fireResult}</span> طفايات حريق
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <section id="contact" className="py-20 bg-foreground text-white px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">لنتحدث حول مشروعك.</h2>
              <p className="text-gray-300 text-lg mb-8">
                سواء كنت تحتاج لتصميم أنظمة ذكية، حل مشكلة فنية، أو استشارة سريعة، فريقنا الهندسي جاهز لخدمتك.
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:widaaaltaher121@gmail.com" className="text-xl font-bold flex items-center gap-3 hover:text-primary transition-colors">
                  ✉️ widaaaltaher121@gmail.com
                </a>
                <a href="https://wa.me/+249126994464" className="text-green-400 text-xl font-bold flex items-center gap-3 hover:text-green-300 transition-colors">
                  💬 تواصل واتساب
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-bold mb-6">طلب خدمة</h3>
              <form className="flex flex-col gap-4 text-gray-800">
                <input type="text" placeholder="الاسم" className="w-full bg-white border border-gray-500 rounded px-4 py-3 focus:outline-none focus:border-primary" />
                <input type="tel" placeholder="رقم الهاتف" className="w-full bg-white border border-gray-500 rounded px-4 py-3 focus:outline-none focus:border-primary" />
                <select className="w-full bg-white border border-gray-500 rounded px-4 py-3 focus:outline-none focus:border-primary">
                  <option value="">نوع الخدمة...</option>
                  <option value="mep">تصميم أنظمة MEP</option>
                  <option value="lines">خطوط الإنتاج</option>
                  <option value="consult">استشارة هندسية</option>
                </select>
                <textarea placeholder="تفاصيل الطلب..." rows={4} className="w-full bg-white border border-gray-500 rounded px-4 py-3 focus:outline-none focus:border-primary"></textarea>
                <button type="button" className="btn-primary mt-2">إرسال الطلب</button>
              </form>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <span>&copy; {new Date().getFullYear()} مؤسسة حمزة للحلول الهندسية. جميع الحقوق محفوظة.</span>
          </div>
        </section>
      </main>
    </div>
  );
}
