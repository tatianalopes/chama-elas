# Web project template

This repository contains a template for a Web project using *NodeJS*, *ReactJS* and *TypeScript*.

## Getting Started

### Prerequisites

#### MacOS

Install Homebrew

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Install tools

```
brew install yarn
brew install node
```

#### Ubuntu

Configure repository

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Install tools

```
sudo apt update
sudo apt install yarn
sudo apt install nodejs
```

#### Windows

Install [Chocolatey](https://chocolatey.org/install)

Install tools

```
choco install yarn
choco install nodejs
```

### Backend

#### Installing dependencies

Inside the *backend* folder, run:

```
yarn
```

#### Running application

```
yarn dev:server
```

### Frontend

#### Installing dependencies

Inside the *frontend* folder, run:

```
yarn
```

#### Running application

```
yarn start
```

## Coding standards tools

This template uses [EditorConfig](https://editorconfig.org/), [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to enforce conding standards in the project. Both the backend and frontend folders contain the configuration files of these tools.

### EditorConfig

To use EditorConfig in VSCode you must install the extesion called [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig). 

### Eslint

To use Eslint in VSCode you must install its [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). 

### Prettier

For Prettier to work properly with this project's configurations you must not use the [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extesion on VSCode. 

## Built With

* [Node](https://nodejs.org/) - JavaScript runtime environment
* [React](https://reactjs.org/) - JavaScript library for building user interfaces
* [Yarn](https://yarnpkg.com/) - Package Manager
* [Express](https://expressjs.com/) - Web framework used NodeJS
* [TypeScript](https://www.typescriptlang.org/) - Typed Superset of JavaScrip - used as a development dependency

## Author

* **Tatiana Lopes** - [@tatianalopes](https://github.com/tatianalopes)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
