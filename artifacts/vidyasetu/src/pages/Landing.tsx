import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Smartphone, ShieldCheck, Camera, CheckCircle2, TrendingUp } from "lucide-react";
import heroClassroom from "@/assets/hero-classroom.png";
import parentScanning from "@/assets/parent-scanning.png";
import aiAnalytics from "@/assets/ai-analytics.png";

export default function Landing() {
  return (
    <AppLayout>
      <div className="space-y-32 pb-24">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden rounded-3xl mt-6">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-orange-100 text-orange-800">
                Empowering Classrooms
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Bridge the Assessment Gap in <span className="text-primary">Government Schools</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                VIDYASETU uses AI to instantly check worksheets from a simple WhatsApp photo, freeing teachers to focus on teaching and giving parents immediate insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/teacher" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  I am a Teacher <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/parent" className="bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center hover:bg-slate-50 transition-colors">
                  I am a Parent <Camera className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-orange-500/20 rounded-2xl blur-3xl -z-10" />
              <img src={heroClassroom} alt="Teacher using tablet in classroom" className="rounded-2xl shadow-2xl object-cover w-full h-auto aspect-video" />
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Challenge We're Solving</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            In low-resource schools, a single teacher often manages 40+ students. Manually checking daily math or language worksheets is impossible, leading to delayed feedback and widening learning gaps.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40:1</div>
              <div className="font-semibold text-slate-900 mb-1">Student-Teacher Ratio</div>
              <p className="text-sm text-slate-500">Makes personalized attention and manual grading difficult.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">0</div>
              <div className="font-semibold text-slate-900 mb-1">Instant Feedback</div>
              <p className="text-sm text-slate-500">Students practice mistakes until the next week's correction.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="font-semibold text-slate-900 mb-1">Smartphone Access</div>
              <p className="text-sm text-slate-500">Parents have mobile phones, presenting an untapped opportunity.</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How Vidyasetu Works</h2>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">A seamless loop connecting the classroom, the home, and intelligent analytics.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
              <CardContent className="pt-8 px-8 pb-8 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <BookOpen className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">1. Teacher Assigns</h3>
                  <p className="text-slate-600 leading-relaxed">The teacher selects a topic, generates a unique 6-digit worksheet code, and shares it with the class.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full -z-10 group-hover:bg-orange-500/10 transition-colors" />
              <CardContent className="pt-8 px-8 pb-8 space-y-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <Camera className="text-orange-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">2. Parent Uploads</h3>
                  <p className="text-slate-600 leading-relaxed">Parents snap a photo of the completed handwritten worksheet on their budget smartphone.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full -z-10 group-hover:bg-green-500/10 transition-colors" />
              <CardContent className="pt-8 px-8 pb-8 space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="text-green-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">3. AI Analyzes</h3>
                  <p className="text-slate-600 leading-relaxed">Our engine scores the sheet, identifies specific learning gaps, and surfaces insights.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feature Split - Parent View */}
        <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img src={parentScanning} alt="Parent scanning worksheet" className="rounded-2xl shadow-xl w-full h-auto aspect-4/3 object-cover" />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-slate-900">Accessible for Every Home</h2>
            <p className="text-lg text-slate-600">
              Vidyasetu is designed mobile-first. Parents don't need high-end devices, complex apps, or fast internet.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                <span className="text-slate-700">Works seamlessly on low-cost Android phones</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                <span className="text-slate-700">No app installation required — fully web-based PWA</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                <span className="text-slate-700">Lightweight image compression saves data</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Feature Split - Teacher View */}
        <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Actionable Classroom Intelligence</h2>
            <p className="text-lg text-slate-600">
              Stop grading and start teaching. Get a bird's-eye view of your classroom's comprehension instantly.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start">
                <TrendingUp className="w-6 h-6 text-primary mr-3 shrink-0" />
                <span className="text-slate-700">Identify exact misconceptions, not just scores</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-6 h-6 text-primary mr-3 shrink-0" />
                <span className="text-slate-700">Automatically group students who need support</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-6 h-6 text-primary mr-3 shrink-0" />
                <span className="text-slate-700">Receive targeted pedagogical recommendations</span>
              </li>
            </ul>
            <div className="pt-6">
              <Link href="/teacher" className="text-primary font-semibold hover:underline flex items-center">
                Explore the Teacher Dashboard <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div>
            <img src={aiAnalytics} alt="AI Analytics Dashboard" className="rounded-2xl shadow-xl w-full h-auto aspect-square object-cover" />
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for Low Resource Environments</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Our architecture is optimized for real-world conditions in rural and semi-urban India.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center relative">
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-slate-700 -z-10" />
            
            <div className="bg-slate-800 p-6 rounded-2xl w-56 border border-slate-700 shadow-xl relative z-10">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-400" />
              </div>
              <div className="font-bold text-lg">PWA Capture</div>
              <div className="text-sm text-slate-400 mt-2">Edge-compressed image upload via browser</div>
            </div>
            
            <div className="md:hidden w-0.5 h-8 bg-slate-700" />
            
            <div className="bg-slate-800 p-6 rounded-2xl w-56 border border-slate-700 shadow-xl relative z-10 transform md:-translate-y-6">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="font-mono text-2xl font-bold text-primary">AI</div>
              </div>
              <div className="font-bold text-lg">Vision Pipeline</div>
              <div className="text-sm text-slate-400 mt-2">Handwriting OCR & Semantic grading model</div>
            </div>
            
            <div className="md:hidden w-0.5 h-8 bg-slate-700" />
            
            <div className="bg-slate-800 p-6 rounded-2xl w-56 border border-slate-700 shadow-xl relative z-10">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-orange-400" />
              </div>
              <div className="font-bold text-lg">Teacher UI</div>
              <div className="text-sm text-slate-400 mt-2">Actionable insights & grouping dashboard</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to transform your classroom?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Experience how automated assessment can free up your time for what matters most — teaching.</p>
          <Link href="/teacher" className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-xl inline-flex items-center hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
            Enter Teacher Portal <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </section>
      </div>
    </AppLayout>
  );
}

