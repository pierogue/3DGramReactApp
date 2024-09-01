import logo from './logo.svg';
import './App.css';
import {useTelegram} from "./hooks/useTelegram";

function App() {
  const {user, onToggleButton} = useTelegram()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onToggleButton}>Toggle
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {user?.username}
        </a>
      </header>
    </div>
  );
}

export default App;
