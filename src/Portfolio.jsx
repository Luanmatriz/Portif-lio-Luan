import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Users } from "lucide-react"; // Exemplo de ícones
import "./styles.css"; // Importando o arquivo de estilos

// Função para rolagem suave
const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
};

// Componente Principal do Portfólio
const Portfolio = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    // Ativa animações quando as seções aparecem na tela
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("_captcha", "false");

    try {
      await fetch("https://formsubmit.co/luanmattriz@gmail.com", {
        method: "POST",
        body: formData,
      });
      setEnviado(true);
    } catch (err) {
      console.error("Erro ao enviar:", err);
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navegação */}
      <nav className="navbar">
        <div className="logo">Luan Santos</div>
        <ul className="nav-links">
          <li>
            <a href="#inicio" onClick={() => scrollToSection("inicio")}>
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={() => scrollToSection("sobre")}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={() => scrollToSection("projetos")}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contato" onClick={() => scrollToSection("contato")}>
              Contato
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Olá, eu sou o Luan Santos</h1>
          <p className="hero-description">Desenvolvedor Salesforce</p>
          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection("projetos")}
              className="btn-primary"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="btn-secondary"
            >
              Contato
            </button>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section about-section">
        <h2>Sobre Mim</h2>
        <p>
          Sou um Desenvolvedor Salesforce, especializado em Apex, LWC, Flow Builder, e integrações via REST APIs.
        </p>
      </section>

      {/* Projetos */}
      <section id="projetos" className="section projects-section">
        <h2>Meus Projetos</h2>
        <div className="project-cards">
          {/* Cards de projetos */}
          <div className="project-card">
            <h3>Projeto 1</h3>
            <p>Descrição do projeto</p>
          </div>
          <div className="project-card">
            <h3>Projeto 2</h3>
            <p>Descrição do projeto</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section contact-section">
        <h2>Entre em Contato</h2>
        {enviado ? (
          <p className="message-success">
            Obrigado, <strong>{form.name}</strong>! Sua mensagem foi enviada.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Seu email"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Sua mensagem"
            />
            <button type="submit" className="btn-primary">
              Enviar
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com/Luanmatriz" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/luansantos/" target="_blank">
            <Linkedin />
          </a>
          <a href="mailto:luanmattriz@gmail.com">
            <Mail />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
