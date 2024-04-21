
# JSX vs. JavaScript Puro no React

Em React, você pode criar interfaces de usuário de duas maneiras principais: usando JSX ou JavaScript puro. Vamos explorar essas duas abordagens com base em um componente simples do React.

## O Componente `App`

O componente `App` abaixo é um exemplo que mostra como renderizar o mesmo elemento de duas formas diferentes: usando JSX e usando JavaScript puro.

```javascript
import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'Luiz'; // Definido uma única vez, usado em ambos os exemplos

  // Exemplo JSX diretamente no return
  const jsxExample = <h1>Hello, {name}! (JSX)</h1>;

  // Exemplo sem JSX, também diretamente no return
  const noJsxExample = React.createElement('h1', null, `Hello, ${name}! (Sem JSX)`);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Renderizando o exemplo com JSX */}
        {jsxExample}
        {/* Renderizando o exemplo sem JSX */}
        {noJsxExample}
      </header>
    </div>
  );
}

export default App;
```

### Uso de JSX

JSX é uma extensão sintática para JavaScript recomendada pela equipe do React para descrever a aparência da interface do usuário. JSX pode parecer uma mistura de HTML com JavaScript, o que pode tornar o código mais legível e fácil de escrever, especialmente para aqueles familiarizados com HTML.

- **Vantagens**:
  - Mais fácil de ler e escrever se você já conhece HTML.
  - Erros de sintaxe são mais fáceis de identificar.
  - Facilita a visualização da estrutura do componente.

- **Exemplo de uso**:
  ```jsx
  const jsxExample = <h1>Hello, {name}! (JSX)</h1>;
  

### Uso de JavaScript Puro

O uso de JavaScript puro para criar elementos React envolve chamar funções como `React.createElement`. Esta abordagem é mais verbosa e menos intuitiva inicialmente, mas é útil entender o que acontece por trás dos panos com JSX.

- **Vantagens**:
  - Dá mais controle sobre a performance ao evitar o overhead adicional da transformação de JSX.
  - Útil para aprender como o React funciona internamente.

- **Exemplo de uso**:
  ```javascript
  const noJsxExample = React.createElement('h1', null, `Hello, ${name}! (Sem JSX)`);
  ```

## Conclusão

Ambas as abordagens têm seus méritos. JSX é geralmente mais popular devido à sua simplicidade e semelhança com HTML, enquanto JavaScript puro pode ser preferido em situações onde os desenvolvedores querem ou precisam de um controle mais direto sobre a renderização dos elementos.


Este texto oferece uma visão geral clara e concisa das duas abordagens de desenvolvimento em React, ilustradas através de um exemplo prático.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
