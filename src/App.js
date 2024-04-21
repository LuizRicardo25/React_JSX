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

