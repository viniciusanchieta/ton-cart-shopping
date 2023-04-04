![cover-ton](https://user-images.githubusercontent.com/31235308/229835044-1ce8e806-04ec-4bfe-8ddb-390c9f737c52.png)

<h1 align="center">Cart Shopping</h1>

<p align="center" margin-top="25px" >
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/viniciusanchieta/ton-cart-shopping?color=green">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/viniciusanchieta/ton-cart-shopping?color=green">
</p>

## Sobre o projeto

O intuito do projeto é criar um carrinho de compras com a possibilidade de adicionar, remover e alterar a quantidade de produtos.

## Tecnologias e ferramentas utilizadas

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Husky](https://typicode.github.io/husky/#/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Commitlint](https://commitlint.js.org/#/)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Jest](https://jestjs.io/)
- [Testing Library React Native](https://callstack.github.io/react-native-testing-library/)
- [React Navigation](https://reactnavigation.org/)
- [Phosphor icons](https://phosphoricons.com/)

## Arquitetura e padrões de projeto

A aplicação foi desenvolvida utilizando os padrões de projeto DDD (Domain Driven Design) e Barrel Pattern. A aplicação foi desenvolvida utilizando a arquitetura multicamadas.

### Arquitetura multicamadas

A escolha da arquitetura multicamadas se deu pela facilidade de manutenção e escalabilidade do projeto. A arquitetura multicamadas é composta por 3 camadas principais: camada de apresentação, camada de domínio e camada de dados. A camada de apresentação é responsável por toda a parte visual da aplicação, a camada de domínio é responsável por toda a regra de negócio e a camada de dados é responsável por toda a parte de acesso a dados.

### DDD (Domain Driven Design)

O DDD é um padrão de projeto que visa a separação de responsabilidades entre as camadas da aplicação. O DDD é composto por 4 camadas principais:

- Camada de aplicação: responsável por toda a parte da regra de negócio da aplicação.
- Camada de domínio: responsável por toda a parte de entidades dando suporte a camada de aplicação.
- Camada de infraestrutura: responsável por toda a parte de acesso a dados.
- Camada de apresentação: responsável por toda a parte visual da aplicação.

### Barrel Pattern

O Barrel Pattern é um padrão de projeto que visa a simplificação de importações de arquivos. O Barrel Pattern é composto por um arquivo `index` que exporta todos os arquivos de uma determinada pasta.

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Xcode](https://developer.apple.com/xcode/) (para iOS)
- [Cocoapods](https://cocoapods.org/) (para iOS)
- [Android Studio](https://developer.android.com/studio) (para Android)
- [Java Development Kit](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (para Android)
- [Bundler](https://bundler.io/)

### Instalação

#### Clonar o repositório

```bash
$ git clone https://github.com/viniciusanchieta/ton-cart-shopping.git
```

#### Instalar as dependências

```bash
$ npm install
$ bundle install
$ cd ios && pod install && cd ..
```

#### Executar o projeto

```bash
$ npm run ios # ou npm run android
```

### Executar os testes

#### Executar cobertura de testes

```bash
$ npm run test:ci
```

#### Executar testes sem cobertura

```bash
$ npm run test
```

## Considerações finais

A aplicação contém 2 telas principais que são: a tela de produtos, onde é possível adicionar, remover e alterar a quantidade de produtos e a tela de carrinho, onde é possível visualizar os produtos adicionados e também é possível alterar a quantidade de produtos e remover produtos.
