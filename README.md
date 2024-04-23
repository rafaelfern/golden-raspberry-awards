<<<<<<< HEAD
<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:
=======
>>>>>>> 431e1db352544667220860a75c2e969337e673a5

# The Golden Raspberry Awards

An interface has been developed that makes it possible to read the list of nominees and winners in the Worst Film category of the Golden Raspberry Awards.

The application has two screens, a dashboard and a list of all the films.


## Authors

- [Rafael Augusto Fernandes](https://www.github.com/rafaelfern)


## Environmental variables

To run this project, you'll need to add the following environment variables to your .env, with api url.

`VITE_REACT_APP_API_URL`



## Features

- List in a table the years that had more than one winner
- List the three studios with the most wins in a table
- List in tables the producers with the longest and shortest intervals between wins

X - Unit Test with jest and react-testing-library. Jest is not fully supported by vite due to how the plugin system from vite works. I wasn't able to implement third-party solutions to tests with vite-jest in time.

X - In the get method to the ?page=1&size=10&winner=&year=1981 endpoint, the content is being returned with an empty array, even if you enter a valid year in the parameters, i.e. one that contains a movie.



## Running

Project clone

```bash
  git clone https://github.com/rafaelfern/golden-raspberry-awards.git
```

Go to the project directory

```bash
  cd golden-raspberry-awards
```

Install the dependencies

```bash
  yarn install
```

launch the server

```bash
  yarn dev
```

<<<<<<< HEAD

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
=======
# golden-raspberry-awards
>>>>>>> 6c1b72f581d42edc09948546e6a9c7412d0d3477
=======
>>>>>>> 431e1db352544667220860a75c2e969337e673a5
