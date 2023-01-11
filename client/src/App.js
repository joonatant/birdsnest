import './App.css';
import { Icon } from 'semantic-ui-react';
import Violations from './components/Violations';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          My Pre-assignment for Reaktor's Summer Trainee Position
        </p>
        <p>
          <a
            className="App-link"
            href="https://github.com/joonatant"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <Icon color="white" name="github square"/>
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/joonatan-taponen-3563b1209"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn<Icon color="white" name="linkedin"/>
          </a>  
        </p>
      </header>
      <Violations />
    </div>
  );
}

export default App;
