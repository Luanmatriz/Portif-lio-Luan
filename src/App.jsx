import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, ExternalLink, Code, Users, Briefcase } from "lucide-react";

// Cursor Customizado
function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursorRef.current.style.left = clientX + "px";
      cursorRef.current.style.top = clientY + "px";
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-6 h-6 bg-sky-500 rounded-full mix-blend-difference pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition duration-150"
    ></div>
  );
}

// Seção com reveal animado
function Section({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="my-24"
    >
      {children}
    </motion.div>
  );
}

export default function PortfolioPremium() {
  return (
    <div className="relative min-h-screen w-screen font-inter bg-gradient-to-b from-white via-sky-50 to-sky-100 dark:from-[#05060a] dark:to-[#02040a] text-slate-900 dark:text-slate-100 overflow-x-hidden">
      <CustomCursor />

      {/* NAVBAR Salesforce Style */}
      <header className="fixed w-full top-0 bg-white/70 dark:bg-[#05060a]/70 backdrop-blur-md shadow-md z-40">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-sky-600">Meu Portfólio</h1>
          <ul className="flex gap-6 font-medium">
            <li><a href="#sobre" className="hover:text-sky-500 transition">Sobre</a></li>
            <li><a href="#projetos" className="hover:text-sky-500 transition">Projetos</a></li>
            <li><a href="#skills" className="hover:text-sky-500 transition">Skills</a></li>
            <li><a href="#contato" className="hover:text-sky-500 transition">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Olá, eu sou o João 🚀
        </motion.h1>
        <p className="mt-4 text-lg md:text-2xl text-slate-600 dark:text-slate-300">
          Desenvolvedor Salesforce & Fullstack
        </p>
        <motion.div
          className="mt-8 flex gap-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring" }}
        >
          <a href="#projetos" className="px-6 py-3 bg-sky-500 text-white rounded-xl shadow-lg hover:bg-sky-600 transition">
            Ver Projetos
          </a>
          <a href="#contato" className="px-6 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition">
            Contato
          </a>
        </motion.div>
      </section>

      {/* SOBRE */}
      <Section>
        <div id="sobre" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-sky-600">Sobre Mim</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Tenho experiência em Salesforce, desenvolvimento web e integração de sistemas.
            Minha missão é criar soluções eficientes, acessíveis e com design moderno.
          </p>
          {/* Linha do tempo estilizada */}
          <div className="mt-10 space-y-6 text-left border-l-4 border-sky-500 pl-6">
            <div>
              <h4 className="font-semibold text-sky-600">2022 - Atual</h4>
              <p>Desenvolvedor Salesforce em grandes projetos corporativos.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sky-600">2020 - 2022</h4>
              <p>Desenvolvimento Web Fullstack (React, Node.js).</p>
            </div>
          </div>
        </div>
      </Section>

      {/* PROJETOS */}
      <Section>
        <div id="projetos" className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-sky-600">Projetos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "CRM Salesforce", img: "https://source.unsplash.com/400x300/?salesforce,crm" },
              { name: "Integração API", img: "https://source.unsplash.com/400x300/?api,code" },
              { name: "Dashboard Analytics", img: "https://source.unsplash.com/400x300/?dashboard,data" }
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-white dark:bg-slate-800 shadow-xl overflow-hidden"
              >
                <img src={proj.img} alt={proj.name} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col justify-between">
                  <h3 className="text-xl font-bold mb-2 text-sky-600">{proj.name}</h3>
                  <p className="flex-1 text-slate-600 dark:text-slate-300">
                    {proj.name} com funcionalidades avançadas e design moderno.
                  </p>
                  <a href="#" className="mt-4 inline-flex items-center gap-2 text-sky-500 hover:underline">
                    Ver mais <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section>
        <div id="skills" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-sky-600">Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {"Salesforce React Node.js Tailwind APEX LWC SOQL".split(" ").map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 rounded-xl bg-sky-100 dark:bg-slate-700 shadow font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* DEPOIMENTOS */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-sky-600">Depoimentos</h2>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <p className="text-lg italic text-slate-600 dark:text-slate-300">
              "Trabalhar com João foi uma experiência incrível. Entregou além do esperado!"
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <Users className="w-6 h-6 text-sky-500" />
              <span className="font-semibold">Maria Silva - Gerente de Projetos</span>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTATO */}
      <Section>
        <div id="contato" className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-sky-600">Entre em Contato</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 shadow"
            />
            <input
              type="email"
              placeholder="Seu email"
              className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 shadow"
            />
            <textarea
              placeholder="Sua mensagem"
              rows="4"
              className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 shadow"
            ></textarea>
            <button className="px-6 py-3 bg-sky-500 text-white rounded-xl shadow-lg hover:bg-sky-600 transition">
              Enviar
            </button>
          </form>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#"><Github className="w-6 h-6 hover:text-sky-500 transition" /></a>
            <a href="#"><Linkedin className="w-6 h-6 hover:text-sky-500 transition" /></a>
            <a href="#"><Mail className="w-6 h-6 hover:text-sky-500 transition" /></a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-sky-600 text-white py-6 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 João - Todos os direitos reservados</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Github className="w-5 h-5" />
            <Linkedin className="w-5 h-5" />
            <Mail className="w-5 h-5" />
          </div>
        </div>
      </footer>
    </div>
  );
}
