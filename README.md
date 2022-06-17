
# Estudo de Next Js
## Páginas e roteamento

- Em Next temos uma particularidade interessante, os arquivos vão gerar roteamento.
- Ou seja, como base no nome do arquivo, teremos a geração de URLs do nosso projeto;

- Além disso, o arquivo index.js sinaliza a criação da rota base;

- Exemplo: http://www.meuprojeto.com.br/=index.js



## Nested Routes

- As Nested Routes são rotas compostas, onde podemos criar uma estrutura mais complexa, como: /products/shirt

- A ideia é criar uma pasta chamada products em pages, e os oarquivos das páginas dentro desta pasta, o roteamento, funciona da mesma forma;

- Gerando as páginas baseadas em pastas e arquivos;

- O arquivo index.js em uma pasta, vira a rota base da Nested;


## Navegando entre páginas

- Para navegar entre as páginas do projeto vamos utilizar o componente Link;
- Semelhante ao do React Router, porém este é do Next;
- Precisamos passar o link da página pelo prop href do componente;

## Novos Componentes

- É possivel criar componentes da mesma maneira que em React;
- Uma convenção muito utilizada é criar uma pasta components e cpolocá-los lá;
- Vamos importá-los e inserir no JSX da página alvo;
- Importante: não misturar pages com components!

## Componente de Layout

- Quando criamos sites, alguns componentes sempre se repetem, em todas as páginas;
- Exemplo: Navbar e footer;
- Basicamente vamos criar os componentes e colocar na pasta components;
- E chamá-los no arquivo _app.js;
- Vamos criar esta estrutura em Next!

## CSS e Next.js

- Há duas formas simples de estilizar aplicações de Next.js;
- Estilos globais: podem ser adicionados no arquivo globals.css;
- CSS Modules: para componentes e páginas vamos utilizar o CSS modules;
- Basta criar um arquivo.css com o nome do componente, exemplo:
Home.module.css

## Meta dados no Next

- Podemos inserir informações como title e outras meta tags a partir de um componente especial chamado head;

- Dentro dele passamos os parãmetros que queremos configurar para cada página;

## Inserindo assets

- Os assets em Next ficam sempre na pasta public;
- Para linkar o src de uma imagem, por exemplo, podemos partir do caminho relativo a public;
- Uma convenção muito comum é colocar as imagens em uma pasta chamada images dentro de public;
-As backgrounds images funcionam da mesma maneira;

## Resgatando dados dinâmicos

- Para pegar dados dinãmicos vamos precisar da função getStaticProps;
- Utilizamos esta na própria página, que possui dados a serem exibidos;
- Ela deve retornar um objeto com os dados;
- Next vai renderizar isso antes do acesso do usuário, dando uma impressão de 'carregamento istantâneo'.
- O recurso é chamado de Pre-rendering;

## Rotas dinâmicas

- Podemos criar rotas dinâmicas, ou seja, que são geradas pelo próprio Next;
- Para isso vamos criar um arquivo no padrão: [id].js
- Onde id seria o dado que é alterado em cada página;
- Desta maneira temos páginas que são criadas automaticamente, melhor para quando não temos controle de quantas precisaremos;

## Rotas dinãmicas com dados reais

- Para exibir dados nestas rotas vamos precisar utilizar o método getStaticProps;
- E tambem o getStaticPaths, este vai fazer a criação das páginas dinâmicas em HTML;
- Agora podemos acessar o objeto com os dados dentro do componente da página

## Página 404 customizada

- Para criar uma página 404 customizada é simples!
- Precisamos criar um arquivo 404.js em pages;
- E a partir dele desenvolvermos os componentes e estilos!



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

