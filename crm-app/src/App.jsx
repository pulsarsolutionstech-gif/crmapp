import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Search, Share2, Upload, Star, Plus, Database, Calendar, Send, Sparkles, 
  ChevronLeft, BarChart2, User, MoreHorizontal, ArrowUpRight, Edit3, Mail, Phone, 
  Maximize2, Link, MessageCircle, CalendarDays, Globe, Briefcase, MessageSquare
} from 'lucide-react';

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.animate-fade-up', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
      
      gsap.from('.animate-sidebar', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      
      gsap.from('.animate-card', {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen p-4 flex gap-4 md:gap-6 relative overflow-hidden font-sans">
      {/* Noise Overlay */}
      <svg className="noise-overlay w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
      </svg>

      {/* Left Sidebar */}
      <aside className="animate-sidebar hidden md:flex flex-col items-center bg-crm-sidebar w-16 py-6 rounded-[2rem] gap-6 text-crm-sidebar-icon sticky top-4 h-[calc(100vh-2rem)] z-10 shadow-2xl">
        <div className="w-8 h-8 flex items-center justify-center text-white mb-4">
          <Sparkles className="w-6 h-6" />
        </div>
        
        <nav className="flex flex-col gap-5 flex-1">
          <button className="magnetic-hover p-2 hover:text-white transition-colors"><Search className="w-5 h-5" /></button>
          <button className="magnetic-hover p-2 hover:text-white transition-colors"><Share2 className="w-5 h-5" /></button>
          <button className="magnetic-hover p-2 hover:text-white transition-colors"><Upload className="w-5 h-5" /></button>
          <button className="magnetic-hover p-2 hover:text-white transition-colors"><Star className="w-5 h-5" /></button>
          <button className="magnetic-hover p-2 hover:text-white transition-colors"><Plus className="w-5 h-5" /></button>
          <button className="magnetic-hover p-2 bg-crm-sidebar-active text-white rounded-2xl"><Database className="w-5 h-5" /></button>
          <button className="magnetic-hover p-2 hover:text-white transition-colors"><Calendar className="w-5 h-5" /></button>
          <button className="magnetic-hover p-2 hover:text-white transition-colors"><Send className="w-5 h-5" /></button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col gap-6 w-full max-w-7xl mx-auto z-10 h-full">
        {/* Top Navbar */}
        <header className="animate-fade-up flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight">Pulsar Solutions</span>
            <span className="text-xs font-medium bg-crm-blue text-white px-2 py-0.5 rounded-full">CRM</span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="magnetic-hover hover:text-black">Resumos</a>
            <a href="#" className="magnetic-hover hover:text-black">Fundadores</a>
            <a href="#" className="magnetic-hover hover:text-black">Financeiro</a>
            <a href="#" className="bg-black text-white px-5 py-2 rounded-full shadow-lg magnetic-hover">Contatos</a>
            <a href="#" className="magnetic-hover hover:text-black">Crescimento</a>
            <a href="#" className="magnetic-hover hover:text-black">Contato</a>
            <a href="#" className="magnetic-hover hover:text-black">Projetos</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="glass-button w-10 h-10 text-gray-600"><Mail className="w-4 h-4" /></button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer magnetic-hover">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Header & Stats */}
        <div className="animate-fade-up flex flex-col xl:flex-row gap-6 items-start xl:items-center justify-between mt-2">
          <div className="flex items-center gap-4">
            <button className="glass-button w-12 h-12 text-gray-500 shrink-0">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight">Informações<br/>do Cliente</h1>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Stat Pill 1 */}
            <div className="glass-panel p-2 pr-6 rounded-[2rem] flex items-center gap-4 magnetic-hover hover:bg-white/50 cursor-default">
              <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center shrink-0">
                <BarChart2 className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-xl">R$ 1.980.130</span>
                  <span className="text-xs font-medium bg-crm-yellow text-black px-2 py-0.5 rounded-full">+11% semana</span>
                </div>
                <span className="text-sm text-gray-500">Ganho de 76 Negócios Este Mês</span>
              </div>
            </div>

            {/* Stat Pill 2 */}
            <div className="glass-panel p-2 pr-6 rounded-[2rem] flex items-center gap-4 magnetic-hover hover:bg-white/50 cursor-default">
              <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-xl">+89</span>
                  <span className="text-xs font-medium bg-crm-blue text-white px-2 py-0.5 rounded-full">+12 hoje</span>
                </div>
                <span className="text-sm text-gray-500">Novos Clientes na Semana</span>
              </div>
            </div>

            {/* Stat Pill 3 */}
            <div className="glass-panel p-2 pr-6 rounded-[2rem] flex items-center gap-4 magnetic-hover hover:bg-white/50 cursor-default">
              <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center shrink-0">
                <CalendarDays className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-xl">+31</span>
                  <span className="text-xs font-medium bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">+6 hoje</span>
                </div>
                <span className="text-sm text-gray-500">Novas Tarefas na Semana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="flex flex-col xl:flex-row gap-6 mt-4 pb-10">
          
          {/* Left Column (Main Data) */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Interaction History */}
            <div className="animate-card glass-panel p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-medium text-lg">Histórico de Interações</h2>
                <div className="flex gap-2">
                  <button className="glass-button w-8 h-8"><MoreHorizontal className="w-4 h-4" /></button>
                  <button className="glass-button w-8 h-8"><ArrowUpRight className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-crm-blue text-white rounded-[2rem] p-6 flex flex-col justify-between min-h-[160px] magnetic-hover">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-white/80 text-sm">04 Out</span>
                      <h3 className="font-medium text-lg mt-1">Pacote Royal<br/>Oportunidade</h3>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-6">
                    <span className="text-2xl font-semibold">R$ 11.250</span>
                    <div className="flex -space-x-2">
                      <img className="w-8 h-8 rounded-full border-2 border-crm-blue" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" alt="" />
                      <img className="w-8 h-8 rounded-full border-2 border-crm-blue" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop" alt="" />
                      <img className="w-8 h-8 rounded-full border-2 border-crm-blue" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop" alt="" />
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-crm-teal text-white rounded-[2rem] p-6 flex flex-col justify-between min-h-[160px] magnetic-hover">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-white/80 text-sm">16 Out</span>
                      <h3 className="font-medium text-lg mt-1">Terceiro Negócio.<br/>Mais Rentável</h3>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-6">
                    <span className="text-2xl font-semibold">R$ 21.300</span>
                    <div className="flex -space-x-2">
                      <img className="w-8 h-8 rounded-full border-2 border-crm-teal" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=64&h=64&fit=crop" alt="" />
                      <img className="w-8 h-8 rounded-full border-2 border-crm-teal" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop" alt="" />
                      <div className="w-8 h-8 rounded-full border-2 border-crm-teal bg-white/20 flex items-center justify-center text-xs">+1</div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-crm-yellow text-black rounded-[2rem] p-6 flex flex-col justify-between min-h-[160px] magnetic-hover">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-black/60 text-sm">11 Out</span>
                      <h3 className="font-medium text-lg mt-1">Pacote Royal<br/>Oportunidade</h3>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center backdrop-blur-sm hover:bg-black/10 transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-black" />
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-6">
                    <span className="text-2xl font-semibold">R$ 4.160</span>
                    <div className="flex -space-x-2">
                      <img className="w-8 h-8 rounded-full border-2 border-crm-yellow" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop" alt="" />
                      <img className="w-8 h-8 rounded-full border-2 border-crm-yellow" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop" alt="" />
                    </div>
                  </div>
                </div>

                {/* Card 4 - Combined stack to match layout visually */}
                <div className="flex flex-col gap-4">
                  {/* Black Card */}
                  <div className="bg-crm-black text-white rounded-[2rem] p-4 flex flex-col justify-between flex-1 magnetic-hover">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-white/60 text-xs">12 Out</span>
                        <h3 className="font-medium text-sm mt-1">Negócio de<br/>Sucesso Absoluto</h3>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex justify-between items-end mt-4">
                      <span className="text-xl font-semibold">R$ 2.100</span>
                      <div className="flex -space-x-2">
                        <img className="w-6 h-6 rounded-full border-2 border-crm-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop" alt="" />
                        <img className="w-6 h-6 rounded-full border-2 border-crm-black" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop" alt="" />
                        <div className="w-6 h-6 rounded-full border-2 border-crm-black bg-white/20 flex items-center justify-center text-[10px]">+2</div>
                      </div>
                    </div>
                  </div>

                  {/* Two small white cards side-by-side inside the grid cell or as rows, based on the image, the black card is top right, yellow is bottom left, then two white cards bottom middle/right. Let's adjust layout to be grid */}
                </div>
              </div>
            </div>

            {/* Bottom Row: Calendar & Funnel */}
            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* Tasks Schedule */}
              <div className="animate-card glass-panel p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-medium text-lg">Agenda de Tarefas</h2>
                  <div className="flex gap-2">
                    <button className="glass-button w-8 h-8"><MoreHorizontal className="w-4 h-4" /></button>
                    <button className="glass-button w-8 h-8"><ArrowUpRight className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6 px-4">
                  <div className="flex gap-2">
                    <button className="glass-button w-8 h-8 bg-white/50"><ChevronLeft className="w-4 h-4" /></button>
                    <button className="glass-button w-8 h-8 bg-white/50"><ChevronLeft className="w-4 h-4 rotate-180" /></button>
                  </div>
                  <span className="text-xl font-medium">Outubro</span>
                  <button className="glass-button w-8 h-8 bg-white/50"><Maximize2 className="w-4 h-4" /></button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {/* Headers */}
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                    <div key={i} className="text-gray-400 font-medium pb-2">{day}</div>
                  ))}
                  
                  {/* Days - Simplified representation */}
                  {Array.from({length: 21}).map((_, i) => {
                    const day = i + 1;
                    let style = "aspect-square rounded-2xl flex items-end justify-start p-2 relative hover:bg-white/30 transition-colors cursor-pointer text-gray-400";
                    let content = null;
                    
                    if (day === 4) {
                      style = "aspect-square rounded-2xl flex items-end justify-start p-2 relative bg-crm-blue text-white cursor-pointer magnetic-hover";
                      content = <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" className="absolute top-2 right-2 w-5 h-5 rounded-full border border-white" />;
                    } else if (day === 11) {
                      style = "aspect-square rounded-2xl flex items-end justify-start p-2 relative bg-crm-yellow text-black cursor-pointer magnetic-hover";
                      content = (
                        <div className="absolute top-2 right-2 flex -space-x-1">
                          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop" className="w-4 h-4 rounded-full border border-white" />
                          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop" className="w-4 h-4 rounded-full border border-white" />
                        </div>
                      );
                    } else if (day === 12) {
                      style = "aspect-square rounded-2xl flex items-end justify-start p-2 relative bg-[#e3d1ae] text-black cursor-pointer magnetic-hover";
                      content = <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop" className="absolute top-2 right-2 w-5 h-5 rounded-full border border-white" />;
                    } else if (day === 16) {
                      style = "aspect-square rounded-2xl flex items-end justify-start p-2 relative bg-crm-teal text-white cursor-pointer magnetic-hover";
                      content = <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=64&h=64&fit=crop" className="absolute top-2 right-2 w-5 h-5 rounded-full border border-white" />;
                    } else if (day === 2 || day === 3 || day === 1) {
                      // some avatars on regular days
                      if(day === 2) content = <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop" className="absolute top-2 right-2 w-4 h-4 rounded-full" />;
                    }

                    return (
                      <div key={i} className={style}>
                        <span className={day === 4 || day === 16 ? "text-white" : day === 11 || day === 12 ? "text-black" : ""}>{day}</span>
                        {content}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Stage Funnel */}
              <div className="animate-card glass-panel p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-medium text-lg">Funil de Vendas</h2>
                  <div className="flex gap-2">
                    <button className="glass-button w-8 h-8"><MoreHorizontal className="w-4 h-4" /></button>
                    <button className="glass-button w-8 h-8"><ArrowUpRight className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8">
                  <div>
                    <div className="text-3xl font-semibold">R$ 350.500</div>
                    <div className="text-sm text-gray-500">Total no Pipeline</div>
                  </div>
                  <div className="flex bg-white/40 p-1 rounded-full text-xs font-medium backdrop-blur-md">
                    <button className="px-4 py-1.5 rounded-full text-gray-500 hover:text-black">Ponderado</button>
                    <button className="px-4 py-1.5 rounded-full bg-white shadow-sm">Total</button>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="w-full bg-white/60 hover:bg-white/80 transition-colors cursor-pointer rounded-full py-4 px-6 flex justify-between items-center group relative overflow-hidden">
                    <span className="text-sm font-medium z-10 text-gray-600">Qualificação</span>
                    <span className="font-semibold z-10">R$ 92.350</span>
                    <div className="absolute left-0 top-0 bottom-0 bg-white/40 w-3/4 rounded-full"></div>
                  </div>
                  
                  <div className="w-[90%] bg-white/50 hover:bg-white/70 transition-colors cursor-pointer rounded-full py-4 px-6 flex justify-between items-center group relative overflow-hidden">
                    <span className="text-sm font-medium z-10 text-gray-600">Oportunidade Pacote Royal</span>
                    <span className="font-semibold z-10">R$ 67.120</span>
                    <button className="absolute right-2 w-8 h-8 rounded-full bg-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      <ChevronLeft className="w-4 h-4 rotate-180" />
                    </button>
                  </div>

                  <div className="w-[80%] bg-white/40 hover:bg-white/60 transition-colors cursor-pointer rounded-full py-4 px-6 flex justify-center items-center relative overflow-hidden">
                    <span className="text-sm font-medium text-gray-500 text-center">Proposta de Valor</span>
                    <button className="absolute right-2 w-8 h-8 rounded-full bg-white/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-20">
                      <ChevronLeft className="w-4 h-4 rotate-180" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full xl:w-[320px] flex flex-col gap-6">
            
            {/* Profile Card */}
            <div className="animate-card glass-panel p-6 flex flex-col items-center text-center relative overflow-hidden">
              <div className="w-full flex justify-between absolute top-6 px-6 left-0">
                <button className="glass-button w-8 h-8"><Share2 className="w-3.5 h-3.5" /></button>
                <button className="glass-button w-8 h-8"><ArrowUpRight className="w-4 h-4" /></button>
              </div>

              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 mt-4 relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop" alt="Eva Robinson" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-1">Eva Robinson</h2>
              <p className="text-sm text-gray-500 px-4 mb-6">CEO. Inc. Alabama Machinery<br/>& Suprimentos</p>

              <div className="flex gap-2 bg-white/40 p-2 rounded-2xl backdrop-blur-md">
                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all"><Edit3 className="w-4 h-4" /></button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all"><Mail className="w-4 h-4" /></button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all"><Phone className="w-4 h-4" /></button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all"><Plus className="w-4 h-4" /></button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all"><CalendarDays className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Detailed Info Card */}
            <div className="animate-card glass-panel p-6 flex flex-col gap-5 flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-900">Informações Detalhadas</h3>
                <div className="flex gap-2">
                  <button className="glass-button w-8 h-8"><Edit3 className="w-3.5 h-3.5" /></button>
                  <button className="glass-button w-8 h-8"><ArrowUpRight className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 block">Nome</span>
                    <span className="text-base font-medium">Eva</span>
                  </div>
                  <button className="w-6 h-6 rounded-full bg-white/0 group-hover:bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"><Edit3 className="w-3 h-3 text-gray-400" /></button>
                </div>

                <div className="flex items-start gap-3 group cursor-default">
                  <div className="w-8 h-8 rounded-full shrink-0"></div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 block">Sobrenome</span>
                    <span className="text-base font-medium">Robinson</span>
                  </div>
                  <button className="w-6 h-6 rounded-full bg-white/0 group-hover:bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"><Edit3 className="w-3 h-3 text-gray-400" /></button>
                </div>

                <div className="flex items-start gap-3 group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 block">E-mail</span>
                    <span className="text-base font-medium">Evaa@alabamamachinery.com</span>
                  </div>
                  <button className="w-6 h-6 rounded-full bg-white/0 flex items-center justify-center bg-white/50"><Plus className="w-3 h-3 text-gray-500" /></button>
                </div>

                <div className="flex items-start gap-3 group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 block">Telefone</span>
                    <span className="text-base font-medium">+55 (11) 98765-4321</span>
                  </div>
                  <button className="w-6 h-6 rounded-full bg-white/0 flex items-center justify-center bg-white/50"><Plus className="w-3 h-3 text-gray-500" /></button>
                </div>

                <div className="flex items-start gap-3 group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center shrink-0 mt-1">
                    <MessageSquare className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 block mb-2">Fontes</span>
                    <div className="flex gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center"><Phone className="w-3.5 h-3.5" /></div>
                      <div className="w-7 h-7 rounded-full bg-[#4A154B]/10 text-[#4A154B] flex items-center justify-center"><Briefcase className="w-3.5 h-3.5" /></div>
                      <div className="w-7 h-7 rounded-full bg-[#0077B5]/20 text-[#0077B5] flex items-center justify-center"><Globe className="w-3.5 h-3.5" /></div>
                      <div className="w-7 h-7 rounded-full bg-[#5865F2]/20 text-[#5865F2] flex items-center justify-center"><MessageCircle className="w-3.5 h-3.5" /></div>
                    </div>
                  </div>
                  <button className="w-6 h-6 rounded-full bg-white/0 flex items-center justify-center bg-white/50 mt-4"><Link className="w-3 h-3 text-gray-500" /></button>
                </div>

                <div className="flex items-start gap-3 group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center shrink-0 mt-1">
                    <CalendarDays className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 block">Último Contato</span>
                    <span className="text-base font-medium">15/06/2023 às 19:16</span>
                  </div>
                  <button className="w-6 h-6 rounded-full bg-white/0 flex items-center justify-center bg-white/50 mt-1"><ArrowUpRight className="w-3 h-3 text-gray-500" /></button>
                </div>
              </div>
            </div>
            
          </aside>
        </div>
      </main>
    </div>
  );
}
