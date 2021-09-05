import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import { Router, Link } from '@reach/router'

function App() {
  return (
    <div className="App">
      <h1>This is Running!</h1>
      <Message/>
    </div>
  );
}

export default App;
