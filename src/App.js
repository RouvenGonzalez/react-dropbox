import logo from './logo.svg';
import './App.css';
import DropboxIntegration from './DropboxIntegration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DropboxIntegration></DropboxIntegration>
      </header>
    </div>
  );
}

export default App;
