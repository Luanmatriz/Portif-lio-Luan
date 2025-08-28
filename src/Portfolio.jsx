<section className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0a1123] to-[#05060a]">
  {/* Overlay com textura suave */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#1e3a8a,_transparent_60%)] opacity-40"></div>

  {/* Texto */}
  <motion.h1
    className="relative text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600 bg-clip-text text-transparent"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Olá, eu sou o Luan Santos 🚀
  </motion.h1>

  <p className="relative mt-4 text-lg md:text-2xl text-slate-300">
    Desenvolvedor Salesforce
  </p>

  {/* Botões */}
  <motion.div
    className="relative mt-8 flex gap-4"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring" }}
  >
    <a href="#projetos" className="px-6 py-3 bg-sky-500 text-white rounded-xl shadow-lg hover:bg-sky-600 transition">
      Ver Projetos
    </a>
    <a href="#contato" className="px-6 py-3 border border-sky-400 text-sky-400 rounded-xl shadow-lg hover:bg-sky-900 transition">
      Contato
    </a>
  </motion.div>
</section>
