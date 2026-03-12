import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Code, 
  Video, 
  Instagram, 
  Monitor, 
  Mail, 
  Github, 
  Linkedin, 
  Terminal,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Design de Banners",
      desc: "Comunicação visual de alto impacto para anúncios e sites premium.",
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      title: "Artes para Instagram",
      desc: "Social media design estratégico para elevar o posicionamento da marca.",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      title: "Edição de Vídeo",
      desc: "Cortes dinâmicos e motion design focado em engajamento.",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Desenvolvimento Web",
      desc: "Soluções full-stack modernas com foco em UI/UX e performance.",
      icon: <Code className="w-6 h-6" />,
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-amber-200">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-zinc-950 text-white py-4 shadow-xl' : 'bg-transparent py-8 text-zinc-900'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 border-2 flex items-center justify-center font-black text-[10px] transition-colors ${scrolled ? 'border-amber-500 text-amber-500' : 'border-zinc-900 text-zinc-900'}`}>
              MSI
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">Wyner</span>
          </div>
          
          <div className={`hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.3em] font-bold ${scrolled ? 'text-zinc-400' : 'text-zinc-500'}`}>
            <a href="#home" className="hover:text-amber-500 transition-colors">Home</a>
            <a href="#services" className="hover:text-amber-500 transition-colors">Serviços</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - White Base */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-[2px] w-8 bg-amber-500"></span>
                <span className="text-amber-600 font-bold tracking-[.3em] text-[10px] uppercase">Estúdio de Tecnologia e Criatividade</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
                A Arte de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">Codificar</span> <br />
                <span className="text-amber-600 italic font-light">o Visual.</span>
              </h1>
              <p className="text-zinc-500 text-lg max-w-lg mb-12 leading-relaxed">
                Formado em MSI e graduando em Sistemas de Informação, transformo necessidades técnicas em interfaces elegantes e funcionais.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#services" className="px-8 py-4 bg-zinc-950 text-white font-bold tracking-widest text-[10px] hover:bg-amber-600 transition-all flex items-center gap-3">
                  PORTFÓLIO <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#contact" className="px-8 py-4 border-2 border-zinc-950 text-zinc-950 font-bold tracking-widest text-[10px] hover:bg-zinc-950 hover:text-white transition-all text-center">
                  CONTRATAR
                </a>
              </div>
            </div>
            
            {/* ÁREA DA FOTO (A que selecionou) */}
            <div className="hidden lg:block relative">
              <div className="w-full aspect-square bg-zinc-100 border border-zinc-200 relative overflow-hidden group">
                {/* PARA COLOCAR A SUA FOTO:
                   1. Coloque a foto na pasta 'public' do seu projeto com o nome 'perfil.jpg'
                   2. Descomente a linha <img> abaixo e apague o ícone <Terminal>
                */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Terminal className="w-64 h-64" />
                </div>
                
                {/* <img src="/perfil.jpg" alt="Wyner" className="absolute inset-0 w-full h-full object-cover" /> */}

                <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-amber-500 translate-x-4 -translate-y-4"></div>
                <div className="absolute bottom-10 left-10 p-6 bg-zinc-950 text-white z-10 shadow-2xl">
                  <p className="text-[10px] tracking-[0.4em] font-bold uppercase mb-1">Status</p>
                  <p className="text-amber-500 font-mono text-sm">Graduando em SI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Black Base */}
      <section id="services" className="py-32 bg-zinc-950 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-amber-500 font-bold tracking-[.5em] text-[10px] uppercase mb-4 text-center">Especialidades</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center">O que eu <span className="italic font-light">faço melhor</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group p-10 bg-white/5 border border-white/10 hover:border-amber-500 transition-all duration-500 relative">
                <div className="text-amber-500 mb-8 transform group-hover:-translate-y-2 transition-transform">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{s.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="w-8 h-[1px] bg-amber-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - White Base with Black Accents */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-zinc-950 h-64 flex flex-col justify-end p-6 group">
                <span className="text-amber-500 text-4xl font-black group-hover:scale-105 transition-transform origin-left uppercase">MSI</span>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-2">Formação Técnica</p>
              </div>
              <div className="bg-amber-500 h-64 flex flex-col justify-end p-6 group">
                <span className="text-zinc-950 text-4xl font-black group-hover:scale-105 transition-transform origin-left uppercase">SI</span>
                <p className="text-zinc-950/60 text-[10px] uppercase tracking-widest font-bold mt-2 leading-tight">Graduando em Sistemas de Informação</p>
              </div>
              <div className="col-span-2 bg-zinc-100 h-48 flex items-center justify-center border border-zinc-200 italic font-serif text-2xl text-zinc-400 text-center px-4">
                "Onde o código encontra a estética."
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Base técnica sólida, <br /><span className="text-amber-600">Evolução acadêmica constante.</span></h2>
              <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
                Minha jornada começou com a manutenção (MSI) e agora avança para a engenharia de soluções na graduação em <strong>Sistemas de Informação</strong>.
              </p>
              <p className="text-zinc-500 mb-10">
                Essa mistura única permite projetar interfaces que não são apenas visualmente incríveis, mas tecnicamente impecáveis e otimizadas.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-zinc-100 pb-2 gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 shrink-0">Tech Stack</span>
                  <span className="text-sm font-bold text-right">HTML • CSS • Java • SQL • React • Python</span>
                </div>
                <div className="flex justify-between items-end border-b border-zinc-100 pb-2 gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 shrink-0">Creative Stack</span>
                  <span className="text-sm font-bold text-right">Photoshop • Premiere • DaVinci Resolve • CapCut • Canva</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Black Base */}
      <section id="contact" className="py-24 bg-zinc-950 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white p-12 md:p-20 text-center shadow-2xl border border-white/10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic">
              VAMOS ELEVAR O <span className="text-amber-600 underline decoration-zinc-950">PADRÃO</span> DO SEU PROJETO?
            </h2>
            <p className="text-zinc-500 mb-8 max-w-xl mx-auto font-mono text-sm">
              (34) 99834-9865 | wynerjunior2468@gmail.com
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
              <a href="https://wa.me/5534998349865?text=Olá%20Wyner,%20vi%20o%20teu%20portfólio!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-zinc-950 text-white px-10 py-5 font-bold tracking-widest text-[10px] hover:bg-amber-600 transition-all shadow-xl">
                <MessageCircle className="w-5 h-5" /> WHATSAPP
              </a>
              <a href="mailto:wynerjunior2468@gmail.com" className="flex items-center gap-3 bg-amber-500 text-zinc-950 px-10 py-5 font-bold tracking-widest text-[10px] hover:bg-zinc-950 hover:text-white transition-all shadow-xl">
                <Mail className="w-5 h-5" /> ENVIAR E-MAIL
              </a>
              <div className="flex gap-4 md:ml-4">
                 <a href="#" className="w-12 h-12 border border-zinc-200 flex items-center justify-center hover:bg-zinc-950 hover:text-white transition-all"><Linkedin className="w-5 h-5"/></a>
                 <a href="#" className="w-12 h-12 border border-zinc-200 flex items-center justify-center hover:bg-zinc-950 hover:text-white transition-all"><Github className="w-5 h-5"/></a>
                 <a href="#" className="w-12 h-12 border border-zinc-200 flex items-center justify-center hover:bg-zinc-950 hover:text-white transition-all"><Instagram className="w-5 h-5"/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-zinc-400 text-center border-t border-zinc-100">
        <div className="container mx-auto px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Wyner • MSI & SI Creative • © 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default App;