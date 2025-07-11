# Lead Company Finder V1

Uma aplicação React moderna para buscar e gerenciar leads de empresas usando a API Apollo.io.

## 🚀 Demonstração

A aplicação está disponível em: https://car2019sjc.github.io/company-finder1/

## ✨ Funcionalidades

- 🔍 Busca avançada de empresas por diversos critérios
- 👥 Busca de pessoas dentro das empresas
- 📧 Captura de e-mails em lote
- 📊 Visualização detalhada de informações das empresas
- 💾 Armazenamento local de chaves API
- 📄 Paginação de resultados
- 🎨 Interface moderna e responsiva

## 🛠️ Tecnologias Utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (ícones)
- Apollo.io API

## 📋 Pré-requisitos

- Node.js 18+ 
- NPM ou Yarn
- Chave API da Apollo.io

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/car2019sjc/company-finder1.git
cd company-finder1
```

2. Instale as dependências:
```bash
npm install
```

3. Execute em modo desenvolvimento:
```bash
npm run dev
```

4. Acesse http://localhost:5173

## 🔑 Configuração da API

1. Obtenha uma chave API em [Apollo.io](https://www.apollo.io)
2. Na aplicação, clique em "Configurar Chave API"
3. Insira sua chave API
4. A chave será salva localmente no navegador

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## 🚀 Deploy

O deploy é feito automaticamente via GitHub Actions ao fazer push na branch `master`.

### Deploy Manual

1. Faça o build:
```bash
npm run build
```

2. Sirva os arquivos da pasta `dist/` em qualquer servidor web.

## 📝 Estrutura do Projeto

```
src/
├── components/       # Componentes React
├── hooks/           # Custom hooks
├── services/        # Serviços e APIs
├── types/           # Tipos TypeScript
├── App.tsx          # Componente principal
├── main.tsx         # Entrada da aplicação
└── index.css        # Estilos globais
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**car2019sjc**

- GitHub: [@car2019sjc](https://github.com/car2019sjc)

## 🙏 Agradecimentos

- Apollo.io pela API
- Comunidade React
- Todos os contribuidores