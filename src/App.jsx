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
  MessageCircle,
  Cpu,
  Calendar,
  Layers,
  Zap,
  Award
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

  const experiences = [
    {
      year: "Atualmente",
      title: "Marketing & Tech Specialist",
      company: "OdontoCompany Ibiá",
      desc: "Gestão criativa de 4 filiais. Desenvolvimento de aplicações para otimização de processos, edição de vídeos, criação de banners/outdoors e gestão de redes sociais.",
    },
    {
      year: "Experiência Anterior",
      title: "Assistente Administrativo",
      company: "Agro Amazônia",
      desc: "Gestão de fluxos documentais e organização sistêmica de arquivos críticos.",
    },
    {
      year: "Estágio",
      title: "Suporte em T.I.",
      company: "Prefeitura Municipal de Ibiá",
      desc: "Manutenção de hardware e infraestrutura em rede pública (Postos de Saúde, Escolas, CRAS/CREAS).",
    }
  ];

  const techSkills = ["HTML", "CSS", "Java", "SQL", "React", "Python"];
  const creativeSkills = ["Photoshop", "Premiere", "DaVinci", "CapCut", "Canva"];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-amber-200 antialiased">
      {/* Navegação */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-zinc-950 text-white py-4 shadow-xl' : 'bg-transparent py-8 text-zinc-900'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`w-8 h-8 border-2 flex items-center justify-center font-black text-[10px] transition-all duration-300 ${scrolled ? 'border-amber-500 text-amber-500 group-hover:bg-amber-500 group-hover:text-zinc-950' : 'border-zinc-900 text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white'}`}>
              MSI
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic">Wyner</span>
          </div>
          
          <div className={`hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.3em] font-bold ${scrolled ? 'text-zinc-400' : 'text-zinc-500'}`}>
            <a href="#home" className="hover:text-amber-500 transition-colors">Início</a>
            <a href="#about" className="hover:text-amber-600 transition-colors">Sobre</a>
            <a href="#trajectory" className="hover:text-amber-600 transition-colors">Trajetória</a>
            <a href="#services" className="hover:text-amber-600 transition-colors">Serviços</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white border-b border-zinc-100">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-100/30 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-[2px] w-8 bg-amber-500"></span>
                <span className="text-amber-600 font-bold tracking-[.3em] text-[10px] uppercase font-mono">Creative Tech Specialist</span>
              </div>
              <h1 className="text-6xl md:text-[90px] font-black leading-[0.85] tracking-tighter mb-8 uppercase">
                A Arte de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">Codificar</span> <br />
                <span className="text-amber-600 italic font-light lowercase">o visual.</span>
              </h1>
              <p className="text-zinc-500 text-lg max-w-lg mb-12 leading-relaxed font-light">
                Unindo a base técnica em <span className="font-bold text-zinc-900 uppercase">MSI</span> com a visão estratégica da graduação em <span className="font-bold text-amber-600 uppercase">Sistemas de Informação</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://wa.me/5534998349865?text=Olá%20Wyner,%20vi%20o%20teu%20portfólio!" target="_blank" className="px-10 py-5 bg-zinc-950 text-white font-bold tracking-widest text-[10px] hover:bg-amber-600 transition-all flex items-center justify-center gap-3 shadow-2xl">
                  SOLICITAR ORÇAMENTO <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block relative group">
              <div className="w-full aspect-[4/5] bg-zinc-50 border border-zinc-100 relative overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
                    <div className="text-center opacity-20">
                         <Cpu className="w-32 h-32 mx-auto mb-4 text-zinc-900" />
                         <p className="font-mono text-xs uppercase tracking-widest text-zinc-900 italic">Foto Profissional</p>
                    </div>
                </div>
                {/* <img src="/perfil.jpg" alt="Wyner" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white z-10">
                  <p className="text-amber-500 font-bold text-[10px] tracking-[0.5em] uppercase mb-2">Especialista Digital</p>
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Wyner Junior</h2>
                  <div className="h-1 w-12 bg-amber-500 mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section / Base Sólida */}
      <section id="about" className="py-32 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative">
              <div className="bg-zinc-950 h-72 flex flex-col justify-end p-8 group relative overflow-hidden shadow-2xl">
                <span className="text-amber-500 text-6xl font-black relative z-10">MSI</span>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-2 relative z-10">Formação Técnica</p>
              </div>
              <div className="bg-amber-500 h-72 flex flex-col justify-end p-8 group shadow-2xl">
                <span className="text-zinc-950 text-6xl font-black uppercase italic relative z-10">SI</span>
                <p className="text-zinc-950/60 text-[10px] uppercase tracking-widest font-bold mt-2 leading-tight relative z-10 font-black">Graduando em Sistemas<br/>de Informação</p>
              </div>
              <div className="col-span-2 bg-zinc-50 h-40 flex items-center justify-center border border-zinc-100 italic font-serif text-2xl md:text-3xl text-zinc-400 text-center px-12">
                "Onde o código encontra a estética."
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Base Técnica Sólida, <br /><span className="text-amber-600 underline decoration-zinc-100">Evolução Acadêmica Constante.</span></h2>
              <p className="text-zinc-600 text-lg mb-6 leading-relaxed font-light">
                Minha jornada começou com a manutenção (<span className="font-bold text-zinc-900">MSI</span>) e agora avançada para a engenharia de soluções na graduação em <span className="font-bold text-amber-600">Sistemas de Informação</span>.
              </p>
              <p className="text-zinc-500 mb-10 leading-relaxed italic">
                Essa mistura única permite projetar interfaces que não são apenas visualmente intuitivas, mas técnicas impecáveis e otimizadas.
              </p>
              
              <div className="space-y-8 mt-12">
                <div className="group">
                  <div className="flex justify-between items-end border-b border-zinc-100 pb-3 gap-4 group-hover:border-amber-500 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 shrink-0">Conjunto de Tecnologias</span>
                    <span className="text-sm font-bold text-right text-zinc-800 uppercase">{techSkills.join(" • ")}</span>
                  </div>
                </div>
                <div className="group">
                  <div className="flex justify-between items-end border-b border-zinc-100 pb-3 gap-4 group-hover:border-amber-500 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 shrink-0">Creative Stack</span>
                    <span className="text-sm font-bold text-right text-zinc-800 uppercase">{creativeSkills.join(" • ")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trajetória & Expertise */}
      <section id="trajectory" className="py-32 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* BARRA LATERAL (Refeita com o visual do print) */}
            <div className="lg:w-1/3">
              <h2 className="text-amber-500 font-bold tracking-[.5em] text-[10px] uppercase mb-4">Currículo</h2>
              <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-12 italic">Formação <br/><span className="text-zinc-400 font-light lowercase">& Certificações.</span></h3>
              
              <div className="space-y-12">
                
                {/* Bloco de Formação Principal (Estilo do Print) */}
                <div className="pt-2 border-t border-zinc-200">
                  <div className="space-y-8 mt-8">
                    <div>
                      <p className="text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1">Em andamento</p>
                      <h4 className="text-xl font-black uppercase tracking-tighter leading-none">Sistemas de Informação</h4>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase mt-1">Graduação Superior</p>
                    </div>
                    <div>
                      <p className="text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1">Concluído</p>
                      <h4 className="text-xl font-black uppercase tracking-tighter leading-none">Técnico em MSI</h4>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase mt-1">Manutenção e Suporte em Informática</p>
                    </div>
                  </div>
                </div>

                {/* Bloco de Cursos de Marketing (Estilo do Print) */}
                <div className="pt-10 border-t border-zinc-200">
                  <div className="flex items-center gap-2 mb-8 text-zinc-400 font-black text-[9px] uppercase tracking-widest">
                    <Award className="w-3 h-3" /> Certificações de Marketing
                  </div>
                  <div className="space-y-8">
                    <div>
                      <p className="text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1">Formação</p>
                      <h4 className="text-lg font-black uppercase tracking-tighter leading-none">Marketing Pessoal</h4>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase mt-1">IFTM • Campus Ibiá</p>
                    </div>
                    <div>
                      <p className="text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1">Formação</p>
                      <h4 className="text-lg font-black uppercase tracking-tighter leading-none">Gestão de Marketing</h4>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase mt-1">SENAR • Especialização</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Timeline Principal de Experiência (Lado Direito) */}
            <div className="lg:w-2/3 space-y-16">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-600 mb-12 flex items-center gap-4">
                 <Zap className="w-4 h-4 fill-amber-500" /> Jornada Profissional
              </h3>
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-12 border-l-2 border-zinc-200 group pb-4">
                  <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-zinc-200 border-2 border-zinc-50 group-hover:bg-amber-500 group-hover:scale-125 transition-all"></div>
                  <div className="mb-2">
                    <span className="text-[9px] font-black text-amber-600 tracking-[0.3em] uppercase flex items-center gap-2">
                       <Calendar className="w-3 h-3"/> {exp.year}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-amber-600 transition-colors leading-none">
                    {exp.title}
                  </h4>
                  <p className="text-zinc-400 font-black text-xs uppercase mb-6 tracking-tight">{exp.company}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl font-light">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-zinc-950 text-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-amber-500 font-bold tracking-[.5em] text-[10px] uppercase mb-4">O que eu faço</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Soluções <span className="italic font-light text-zinc-400 lowercase">de alto nível.</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 shadow-2xl">
            {[
              { title: "Design & Outdoors", desc: "Artes de grande formato e banners com foco em conversão.", icon: <Monitor className="w-6 h-6" /> },
              { title: "Social Media", desc: "Gestão estratégica de Instagram com estética premium.", icon: <Instagram className="w-6 h-6" /> },
              { title: "Edição de Vídeo", desc: "Audiovisual dinâmico para anúncios e conteúdos de impacto.", icon: <Video className="w-6 h-6" /> },
              { title: "Dev & Automação", desc: "Criação de aplicações para otimizar processos internos.", icon: <Code className="w-6 h-6" /> }
            ].map((s, i) => (
              <div key={i} className="group p-12 bg-zinc-950 hover:bg-white transition-all duration-700">
                <div className="text-amber-500 mb-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight group-hover:text-zinc-950 transition-colors">{s.title}</h4>
                <p className="text-zinc-400 group-hover:text-zinc-600 transition-colors text-sm leading-relaxed mb-6 font-light">
                  {s.desc}
                </p>
                <div className="w-8 h-[1px] bg-amber-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Final */}
      <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white p-12 md:p-24 text-center shadow-2xl relative border-t-8 border-amber-500">
            <h2 className="text-5xl md:text-[80px] font-black uppercase tracking-tighter mb-12 italic leading-none">
              PRONTO PARA <br/><span className="text-amber-600 uppercase">Elevar o padrão?</span>
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
              <a 
                href="https://wa.me/5534998349865?text=Olá%20Wyner,%20vi%20o%20teu%20portfólio!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full md:w-auto flex items-center justify-center gap-4 bg-zinc-950 text-white px-12 py-6 font-bold tracking-widest text-[11px] hover:bg-amber-600 hover:scale-105 transition-all shadow-2xl uppercase"
              >
                <MessageCircle className="w-5 h-5 text-amber-500" /> WhatsApp Direct
              </a>
              
              <div className="flex gap-4">
                 <a href="mailto:wynerjunior2468@gmail.com" title="E-mail" className="w-16 h-16 bg-zinc-100 text-zinc-400 flex items-center justify-center hover:bg-amber-500 hover:text-zinc-950 transition-all shadow-lg rounded-full"><Mail className="w-6 h-6"/></a>
                 <a href="#" title="Instagram" className="w-16 h-16 border-2 border-zinc-100 text-zinc-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all rounded-full"><Instagram className="w-6 h-6"/></a>
              </div>
            </div>

            <div className="inline-block px-8 py-3 bg-zinc-50 border border-zinc-100 font-mono text-[10px] text-zinc-400 tracking-tighter uppercase font-bold">
              Uberlândia - MG | (34) 99834-9865 | wynerjunior2468@gmail.com
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-12 bg-white text-zinc-400 text-center border-t border-zinc-100 font-bold uppercase tracking-[0.5em] text-[10px]">
        Wyner Junior • Creative Tech Studio • © 2024
      </footer>
    </div>
  );
};

export default App;