# spotify-clone

## Sumário

- [spotify-clone](#spotify-clone)
  - [Sumário](#sumário)
  - [*To-do list*](#to-do-list)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Galeria](#galeria)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## *To-do list*

- [X] Mudar a paleta de cores
- [X] Remover `expo-blur`
- [ ] Fazer com que o componente `TagGroup` seja fixo somente ao rolar a tela para baixo

## Motivação

Este foi o primeiro repositório de código apresentado no [Curso Superior de TSI](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) do IFMS como requisito para obtenção da nota parcial das atividades da unidade curricular Programação para Dispositivos Móveis II.

| [Próximo repositório &rarr;](#) |
|-|

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Biblioteca de interface de usuário | [React Native](https://reactnative.dev/) |
| Bundler | [Expo](https://expo.dev/) | 
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |

Os créditos pelas mídias disponibilizadas estão disponíveis [aqui](./assets/README.md).

## Galeria

<!-- Galeria aqui -->

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- Dispositivo móvel:
  - [Expo Go](https://expo.dev/client).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);
   
3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```

5. Uma vez iniciado, aparecerá um QR Code. Você deve escaneá-lo com o aplicativo [Expo Go](https://expo.dev/client), disponível para Android e iOS;

6. Como alternativa, você pode executar o app no seu navegador, pressionando o atalho `w`. Entretanto, alguns módulos podem não funcionar na versão web do app.