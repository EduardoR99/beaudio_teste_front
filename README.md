# Beaudio Teste Frontend

Este é o frontend do projeto **Beaudio Teste**, desenvolvido em Vue 3 + Vite + TailwindCSS.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Backend da aplicação rodando em `http://localhost:3000` (ou ajuste a URL no `.env`)

## Passo a passo para rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/beaudio_teste_front.git
cd beaudio_teste_front
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
VITE_API_URL=http://localhost:3000
```

Se o backend estiver rodando em outra URL, altere o valor de `VITE_API_URL` conforme necessário.

### 4. Rode o projeto em modo desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O frontend estará disponível em [http://localhost:5173](http://localhost:5173) (ou outra porta informada pelo Vite).

### 5. Acesse a aplicação

Abra o navegador e acesse [http://localhost:5173](http://localhost:5173).

## Observações

- Certifique-se de que o backend está rodando e acessível na URL definida em `VITE_API_URL`.
- Para customizar temas ou variáveis, edite os arquivos em `src/` e o `.env`.
- O projeto utiliza Vue Router, TailwindCSS e Toastification para notificações.

## Tecnologias utilizadas

- [Vue 3](https://vuejs.org/) — Framework JavaScript progressivo para construção de interfaces de usuário.
- [Vite](https://vitejs.dev/) — Ferramenta de build e servidor de desenvolvimento rápido para projetos frontend modernos.
- [Tailwind CSS](https://tailwindcss.com/) — Framework utilitário para estilização rápida e responsiva.
- [Vue Router](https://router.vuejs.org/) — Gerenciamento de rotas para aplicações Vue.
- [Axios](https://axios-http.com/) — Cliente HTTP para requisições à API.
- [Pinia](https://pinia.vuejs.org/) *(opcional, se utilizado)* — Gerenciamento de estado para Vue 3.
- [dotenv](https://github.com/motdotla/dotenv) — Gerenciamento de variáveis de ambiente.