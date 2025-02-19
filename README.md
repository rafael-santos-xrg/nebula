# Nebula 🪐

## Uma plataforma onde desenvolvedores de todos os níveis podem postar desafios de programação, compartilhar soluções, trocar feedback e até disputar rankings

...Uma ideia de consgueir aprender diversas tecnologias de mercado em um projeto só.
Baseado numa pesquisa por vagas, pedi para uma IA sugerir um projeto que conseguisse comtemplar a maioria dessas tecnologias e que criasse um ROADMAP faseado em 3 partes para que eu conseguisse ter uma melhor sensação de progresso. E assim nasecu **Nebula**!

---

Pedi para que a própia IA criasse um resumo do desafio explicitando as regras para que eu não me perca, e aqui vai:

**Nebula** é uma plataforma onde desenvolvedores de todos os níveis podem:

- Postar desafios de programação;
- Compartilhar soluções;
- Trocar feedback;
- Disputar rankings.

A proposta é condensar diversas tecnologias de mercado em um único projeto, permitindo que você aprenda e integre de forma prática tecnologias modernas e práticas de DevOps, testes e automação.

## Tecnologias Fundamentais

- **Front-end:**
  - **Framework:** React com Next.js (para SSR e performance)
  - **Linguagem:** TypeScript (garante robustez e manutenção)
  - **Estilização:** Tailwind CSS

- **Back-end:**
  - **Linguagem & Framework:** C# com ASP.NET Core (para construir uma API RESTful; possibilidade de endpoints GraphQL)
  - **Real-time:** SignalR (para notificações e interações em tempo real)

- **Banco de Dados:**
  - **Principal:** SQL Server (armazenamento de dados relacionais: usuários, desafios, soluções, comentários)
  - **Opcional:** MongoDB (para dados não estruturados, como logs e feeds dinâmicos)

- **DevOps & Testes:**
  - **Versionamento:** Git (hospedado no GitHub)
  - **CI/CD:** GitHub Actions para integração contínua e deploy automatizado
  - **Containerização:** Docker (garante portabilidade e consistência entre ambientes)
  - **Testes:** xUnit (back-end) e Jest com React Testing Library (front-end)

- **Hospedagem/Cloud:**
  - Deploy na AWS ou Azure, com suporte a escalabilidade e container orchestration.

## Roadmap do Projeto

O desenvolvimento do Nebula será dividido em três estágios principais, cada um com suas metas e funcionalidades. Marque as etapas à medida que for concluindo:

### 1. MVP – "O Lançamento Inicial"

*Objetivo: Desenvolver o fluxo básico e funcional para que os usuários possam interagir com a plataforma.*

- [ ] **Autenticação e Cadastro:**  
  - Implementar criação de conta e login básico com email/senha.
  - *(Futuro: OAuth com GitHub/Google)*

- [ ] **CRUD de Desafios:**  
  - Permitir que usuários criem, editem, visualizem e deletem desafios.  
  - Cada desafio terá título, descrição, linguagem sugerida e tags.

- [ ] **Interação Simples:**  
  - Possibilitar postagem de soluções e comentários para cada desafio.

- [ ] **API Básica:**  
  - Criar endpoints REST em ASP.NET Core para gerenciar usuários, desafios e soluções.

- [ ] **Interface Inicial:**  
  - Desenvolver uma interface responsiva com Next.js e Tailwind CSS.

- [ ] **Versionamento e Deploy Local:**  
  - Versionar o código no GitHub e configurar deploy inicial via Docker.

### 2. Versão Ideal – "A Experiência Estelar Completa"

*Objetivo: Expandir o sistema com funcionalidades avançadas para uma experiência de usuário robusta.*

- [ ] **Perfil Avançado e Redes Sociais:**  
  - Criar perfis de usuários com avatar, bio, histórico de desafios e soluções.  
  - Implementar sistema de “likes”, comentários e gamificação (reputação).

- [ ] **Busca Avançada e Filtragem:**  
  - Utilizar GraphQL para consultas dinâmicas e filtros refinados.

- [ ] **Notificações em Tempo Real:**  
  - Integrar SignalR para envio de notificações (novos desafios, comentários, atualizações).

- [ ] **Integração com Terceiros:**  
  - Implementar login social via OAuth e integrar com ferramentas de design (ex.: links para protótipos no Figma).

- [ ] **Testes Automatizados:**  
  - Ampliar a cobertura dos testes unitários e de integração para back-end e front-end.

- [ ] **DevOps Completo:**  
  - Configurar um pipeline CI/CD robusto, com deploy automatizado via Docker, e monitoramento com Prometheus e Grafana.

- [ ] **Hospedagem Escalável:**  
  - Realizar o deploy final em um ambiente escalável na AWS ou Azure.

### 3. Horizontes Futuros – "Pontos para Astronômicas Melhorias"

*Objetivo: Inovar e agregar funcionalidades que transformem o Nebula em um ecossistema referência.*

- [ ] **Inteligência Artificial e Code Review Automatizado:**  
  - Implementar um módulo de IA para sugerir melhorias nas soluções e identificar bugs.

- [ ] **Microfrontends:**  
  - Modularizar o front-end em microfrontends para facilitar a escalabilidade e a colaboração.

- [ ] **Aplicativo Mobile:**  
  - Desenvolver uma versão mobile da plataforma usando React Native.

- [ ] **Sistema de Mentoria e Parcerias:**  
  - Criar um módulo para agendamento de mentorias e feedback personalizado.

- [ ] **Funcionalidades Low-Code:**  
  - Integrar ferramentas low-code para a criação de dashboards e relatórios customizados.

- [ ] **Acessibilidade e Internacionalização:**  
  - Ampliar a aplicação para múltiplos idiomas e garantir conformidade com as diretrizes de acessibilidade (WCAG).

## Observações

- Este roadmap é um guia vivo e poderá ser ajustado conforme novos desafios e aprendizados surgirem.
- O foco inicial é entregar um MVP funcional e, a partir dele, expandir para uma experiência completa.
- Mantenha este documento atualizado para ter sempre uma visão clara do progresso e dos próximos passos.

*Bom trabalho e mãos à obra, desenvolvedor(a)!*

---
