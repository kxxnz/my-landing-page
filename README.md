# 🚀 Landing Page Pessoal - João Pedro Cavalheiro dos Reis

Uma landing page moderna e responsiva desenvolvida com React, TypeScript e Tailwind CSS, criada para destacar minhas habilidades e experiência profissional.

## ✨ Sobre o Projeto

Esta é minha landing page pessoal onde apresento:
- **Perfil profissional** com foto e informações de contato
- **Seção sobre mim** com detalhes pessoais e objetivos
- **Experiência profissional** e projetos relevantes
- **Habilidades técnicas** em Power Apps, Power Automate, Dados e BI
- **Formulário de contato** para networking

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderno e rápido
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos e consistentes
- **Framer Motion** - Animações suaves (via Tailwind)

## 🎨 Características

- **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves** - Transições e efeitos visuais elegantes
- **Componentes Reutilizáveis** - Arquitetura modular e escalável
- **Acessibilidade** - Seguindo as melhores práticas de acessibilidade
- **Performance Otimizada** - Carregamento rápido e eficiente

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/kxxnz/my-landing-page.git
cd my-landing-page
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:8080
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter para verificar o código

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de interface reutilizáveis
│   ├── Header.tsx      # Cabeçalho da página
│   ├── HeroSection.tsx # Seção principal com apresentação
│   ├── AboutSection.tsx # Seção sobre mim
│   ├── ExperiencieSection.tsx # Experiência profissional
│   ├── SkillSection.tsx # Habilidades técnicas
│   ├── ContactSection.tsx # Formulário de contato
│   └── Footer.tsx      # Rodapé
├── pages/              # Páginas da aplicação
├── hooks/              # Hooks customizados
├── lib/                # Utilitários e configurações
├── assets/             # Imagens e recursos estáticos
└── types/              # Definições de tipos TypeScript
```

## 🎯 Seções da Landing Page

### 🏠 **Hero Section**
- Apresentação principal com foto de perfil
- Título e descrição profissional
- Botões de ação (Download CV, LinkedIn, Contato)

### 👨‍💻 **Sobre Mim**
- Informações pessoais e profissionais
- Objetivos e motivações
- Cards com informações relevantes

### 💼 **Experiência**
- Histórico profissional
- Projetos desenvolvidos
- Tecnologias utilizadas em cada projeto

### 🛠️ **Habilidades**
- Skills técnicas organizadas por categoria
- Nível de proficiência
- Tecnologias e ferramentas

### 📞 **Contato**
- Formulário de contato funcional
- Informações de contato direto
- Links para redes sociais

## 🎨 Customização

### Cores e Tema
As cores podem ser personalizadas no arquivo `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--secondary))",
      // ... outras cores
    }
  }
}
```

### Conteúdo
- Edite os componentes em `src/components/` para alterar o conteúdo
- Substitua a imagem de perfil em `src/assets/`
- Modifique as informações de contato e redes sociais

## 📱 Responsividade

A landing page foi desenvolvida com mobile-first approach:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub à Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

### Netlify
1. Conecte o repositório
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. Execute `npm run build`
2. Faça push da pasta `dist` para a branch `gh-pages`

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados.

## 🤝 Contato

**João Pedro Cavalheiro dos Reis**
- 📧 Email: [joaopedrocavalheirodosreis@gmail.com]
- 💼 LinkedIn: [linkedin.com/in/joão-pedro-reis]
- 🐙 GitHub: [github.com/kxxnz]

---

⭐ Se gostou do projeto, deixe uma estrela no repositório!