# 💡 Mulheres que Inspiram - API

## ✨ Sobre o Projeto

O projeto **"Mulheres que Inspiram"** é uma API desenvolvida com o objetivo de valorizar, celebrar e dar visibilidade às histórias de mulheres que marcaram (e continuam marcando) a história com sua coragem, inteligência, sensibilidade e resistência.

Vivemos em uma sociedade onde, por muito tempo, as contribuições femininas foram silenciadas ou apagadas. Essa API nasce como uma ferramenta educacional e social que visa mudar essa realidade, incentivando o acesso a livros que contam histórias de mulheres inspiradoras — sejam elas cientistas, escritoras, ativistas, artistas, líderes ou figuras anônimas que impactaram suas comunidades.

## 🎯 Objetivo

O principal objetivo da API é fornecer sugestões de leitura que possam inspirar pessoas de todas as idades e gêneros, promovendo:

- 📚 Representatividade feminina na literatura e na história;
- 🌍 Reflexões sobre igualdade de gênero;
- 💬 Diálogos sobre protagonismo feminino;
- 🎓 Recursos educacionais para professores, estudantes e leitores curiosos.

## 🛠️ Funcionalidades da API

A API possui 3 rotas principais:

| Rota | Método | Descrição |
|------|--------|-----------|
| `/livros` | GET | Retorna todos os livros |
| `/livros/autora/:nome` | GET | Filtra por autora |
| `/livros/categoria/:tema` | GET | Filtra por categoria ou área de atuação |

⚙️ Extras:
- CORS habilitado para consumo por outras aplicações.

## 🚀 Como esse projeto ajuda?

Essa API pode ser usada por:

- Plataformas educacionais 📘  
- Sites e apps com foco em leitura e diversidade 📲  
- Projetos sociais que promovem equidade de gênero 🌱  
- Desenvolvedores(as) que querem consumir dados com impacto social 💻  

Mais do que código, esse projeto é um **manifesto em forma de tecnologia**:
> Acreditamos que conhecer as histórias de grandes mulheres é um passo essencial para construir um futuro mais justo e inspirador para todos. ✊🏾💖

📚 Contribua com novas inspirações!
Tem algum livro, autora ou história inspiradora?
Abra uma issue ou mande um PR! Vamos juntas espalhar essas narrativas! 💜✨
---

### 💻 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Entre na pasta
cd mulheres-que-inspiram

# Instale as dependências
npm install

# Rode o servidor
node index.js

A API estará disponível em:
🔗 http://localhost:3000

Projeto desenvolvido com 💖 por Stacy Amado
